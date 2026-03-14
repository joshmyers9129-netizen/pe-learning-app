// Pure, deterministic review-card generation — no API, no randomness.
// Cards are built from lesson content: quiz questions, teaching blocks, examples.

import type { Lesson, ReviewCard, ConfidenceLevel } from "@/types/content";

// ─── Priority ────────────────────────────────────────────────────────────────
// Scale 1–10. Higher = reviewed sooner.
// Driven by quiz accuracy and confidence; wrong-answer flashcards floor at 7.

function calcPriority(quizScore: number, confidence: ConfidenceLevel): number {
  const quizPenalty = 1 - quizScore;            // 0 (perfect) → 1 (zero)
  const confPenalty = (5 - confidence) / 4;     // 0 (conf=5)  → 1 (conf=1)
  return Math.round(10 * (quizPenalty * 0.5 + confPenalty * 0.5));
}

// ─── Due-date offset (days from now) ─────────────────────────────────────────

function dueDaysFromConfidence(confidence: ConfidenceLevel): number {
  if (confidence <= 2) return 1;
  if (confidence <= 3) return 2;
  return 3;
}

function isoFromNow(days: number): string {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString();
}

// ─── Content helpers ──────────────────────────────────────────────────────────

// Split example text at a sentence boundary near the midpoint.
// Front = scenario setup, back = resolution / key insight.
function splitAtMidpoint(text: string): { front: string; back: string } {
  const sentences = text.match(/[^.!?]+[.!?]+\s*/g) ?? [];
  if (sentences.length <= 1) {
    return { front: text, back: "Review the full example in the lesson." };
  }
  const mid = Math.ceil(sentences.length / 2);
  return {
    front: sentences.slice(0, mid).join("").trim(),
    back: sentences.slice(mid).join("").trim() || "Consider the implications of this scenario.",
  };
}

// ─── Main generator ───────────────────────────────────────────────────────────

/**
 * Build review cards for a completed lesson.
 *
 * Rules:
 *   - Flashcard for every incorrectly-answered MC question (due today, priority ≥ 7)
 *   - Flashcard for correctly-answered MC questions only if overall quizScore < 0.5
 *   - One reteach card from the first "teaching" block (always)
 *   - One mini-case from the "example" block, only if quizScore < 0.8 OR confidence ≤ 3
 *
 * Deduplication: any cardId already present in existingCardIds is skipped entirely.
 * Card IDs are deterministic — same lesson + type + question always produces the same ID.
 */
export function buildReviewCards(
  moduleId: string,
  lesson: Lesson,
  incorrectQuestionIds: string[],
  confidence: ConfidenceLevel,
  quizScore: number,
  existingCardIds: Set<string>
): ReviewCard[] {
  const cards: ReviewCard[] = [];
  const basePriority = calcPriority(quizScore, confidence);
  const dueDays = dueDaysFromConfidence(confidence);

  // ── 1. Flashcards from MC questions ────────────────────────────────────────
  for (const q of lesson.quiz) {
    if (q.type !== "multiple-choice") continue;

    const isWrong = incorrectQuestionIds.includes(q.questionId);
    // Skip correct answers unless overall score was poor
    if (!isWrong && quizScore >= 0.5) continue;

    const cardId = `${moduleId}:${lesson.lessonId}:flashcard:${q.questionId}`;
    if (existingCardIds.has(cardId)) continue;

    cards.push({
      cardId,
      lessonId: lesson.lessonId,
      moduleId,
      type: "flashcard",
      front: q.prompt,
      back: `Correct answer: ${q.correctAnswer}`,
      dueDate: isoFromNow(isWrong ? 0 : dueDays),
      priority: isWrong ? Math.max(basePriority, 7) : basePriority,
    });
  }

  // ── 2. Reteach from first teaching block ───────────────────────────────────
  const teachBlock = lesson.blocks.find((b) => b.type === "teaching");
  if (teachBlock) {
    const cardId = `${moduleId}:${lesson.lessonId}:reteach:core`;
    if (!existingCardIds.has(cardId)) {
      cards.push({
        cardId,
        lessonId: lesson.lessonId,
        moduleId,
        type: "reteach",
        front: `Explain in plain terms: ${teachBlock.title}`,
        back: teachBlock.content,
        dueDate: isoFromNow(confidence <= 2 ? 1 : dueDays),
        priority: confidence <= 2 ? Math.max(basePriority, 6) : Math.max(basePriority - 1, 1),
      });
    }
  }

  // ── 3. Mini-case from example block (only if not strong performance) ────────
  const exampleBlock = lesson.blocks.find((b) => b.type === "example");
  if (exampleBlock && (quizScore < 0.8 || confidence <= 3)) {
    const cardId = `${moduleId}:${lesson.lessonId}:mini-case:example`;
    if (!existingCardIds.has(cardId)) {
      const { front, back } = splitAtMidpoint(exampleBlock.content);
      cards.push({
        cardId,
        lessonId: lesson.lessonId,
        moduleId,
        type: "mini-case",
        front: `${exampleBlock.title} — ${front}`,
        back,
        dueDate: isoFromNow(dueDays),
        priority: Math.max(basePriority - 1, 1),
      });
    }
  }

  return cards;
}
