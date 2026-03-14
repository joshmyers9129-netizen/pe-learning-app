import { ReviewCard, Priority, ModuleProgress, LessonProgress, QuizResult } from "./types";
import { allReviewCards } from "./reviewCards";

export interface QueueCard extends ReviewCard {
  priority: Priority;
}

/**
 * Compute average quiz score per topic across all lessons that have quiz data.
 * Used to boost priority for topics where the user is consistently weak.
 */
function computeTopicWeakness(
  cards: ReviewCard[],
  quizResults: Record<string, QuizResult>
): Record<string, number> {
  const topicScores: Record<string, number[]> = {};
  for (const card of cards) {
    const result = quizResults[card.lessonId];
    if (result !== undefined) {
      (topicScores[card.topic] ??= []).push(result.score);
    }
  }
  const weakness: Record<string, number> = {};
  for (const [topic, scores] of Object.entries(topicScores)) {
    weakness[topic] = scores.reduce((a, b) => a + b, 0) / scores.length;
  }
  return weakness;
}

/**
 * Score-based priority computation incorporating:
 *   recency        — how long ago the lesson was completed
 *   quiz score     — fraction of MC answers correct (lower = weaker)
 *   confidence     — user self-rating 1–5 (lower = weaker)
 *   struggles      — times user marked this card "Still learning"
 *   topic weakness — avg quiz score across lessons sharing this topic
 *
 * Score thresholds: ≥4 → high, ≥2 → medium, else → low
 */
function computePriority(
  card: ReviewCard,
  lessonProgress: LessonProgress | undefined,
  quizResult: QuizResult | undefined,
  struggles: number,
  topicAvgScore: number | undefined
): Priority | null {
  if (!lessonProgress || lessonProgress.status === "not-started") return null;

  let score = 0;

  // Recency signal
  if (lessonProgress.status === "in-progress") {
    score += 2;
  } else if (lessonProgress.completedAt) {
    const daysSince =
      (Date.now() - new Date(lessonProgress.completedAt).getTime()) / 86_400_000;
    if (daysSince > 7) score += 2;
    else if (daysSince > 2) score += 1;
    // < 2 days: +0 (user just finished it)
  } else {
    score += 1; // completed but no timestamp
  }

  // Quiz score: lower score → more urgent
  if (quizResult !== undefined) {
    if (quizResult.score < 0.5) score += 2;
    else if (quizResult.score < 0.75) score += 1;

    // Confidence: lower confidence → more urgent
    if (quizResult.confidence <= 2) score += 2;
    else if (quizResult.confidence === 3) score += 1;
  }

  // Card-level struggle signal from review sessions
  if (struggles >= 2) score += 2;
  else if (struggles >= 1) score += 1;

  // Topic-level weakness (penalise weak topic areas even on per-card basis)
  if (topicAvgScore !== undefined && topicAvgScore < 0.5) score += 1;

  if (score >= 4) return "high";
  if (score >= 2) return "medium";
  return "low";
}

export function buildReviewQueue(
  progress: ModuleProgress,
  quizResults: Record<string, QuizResult> = {},
  struggles: Record<string, number> = {}
): QueueCard[] {
  const topicWeakness = computeTopicWeakness(allReviewCards, quizResults);
  const cards: QueueCard[] = [];

  for (const card of allReviewCards) {
    const priority = computePriority(
      card,
      progress[card.lessonId],
      quizResults[card.lessonId],
      struggles[card.cardId] ?? 0,
      topicWeakness[card.topic]
    );
    if (priority === null) continue;
    cards.push({ ...card, priority });
  }

  // Sort: high → medium → low, then chronologically within each band
  const order: Priority[] = ["high", "medium", "low"];
  cards.sort(
    (a, b) =>
      order.indexOf(a.priority) - order.indexOf(b.priority) ||
      a.dayNumber - b.dayNumber
  );
  return cards;
}

export function groupByPriority(cards: QueueCard[]): Record<Priority, QueueCard[]> {
  return {
    high: cards.filter((c) => c.priority === "high"),
    medium: cards.filter((c) => c.priority === "medium"),
    low: cards.filter((c) => c.priority === "low"),
  };
}

export function groupByTopic(cards: QueueCard[]): Record<string, QueueCard[]> {
  const map: Record<string, QueueCard[]> = {};
  for (const card of cards) {
    (map[card.topic] ??= []).push(card);
  }
  return map;
}
