"use client";

import { use, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { getLessonContent } from "@/lib/lessonContent";
import { getModuleById, modules } from "@/lib/modules";
import { saveQuizResult, setLessonStatus, getQuizResult, getLessonProgress } from "@/lib/progress";
import { allReviewCards } from "@/lib/reviewCards";
import {
  LessonBlock,
  LessonBlockType,
  MCQuestion,
  MCOption,
  SRQuestion,
  QuizQuestion,
  QuizResult,
} from "@/lib/types";
import { AiHelper } from "@/components/AiHelper";
import { LESSON_VISUALS } from "@/components/visuals";

const MODULE_ID = "pe-foundations";

// ── markdown renderer ─────────────────────────────────────────────────────────
// Lightweight inline parser — no external library.
// Handles: **bold**, paragraph breaks (\n\n), bullet lists (- ), numbered lists (1. ).

function renderInline(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

function renderTable(lines: string[], key: number): React.ReactNode {
  const rows = lines.map((l) =>
    l
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((cell) => cell.trim())
  );
  const isAlignRow = (cells: string[]) =>
    cells.every((c) => /^:?-+:?$/.test(c));
  const headerRow = rows[0];
  const bodyRows = rows.slice(1).filter((r) => !isAlignRow(r));
  return (
    <div key={key} className="overflow-x-auto">
      <table className="w-full text-[13px] border-collapse">
        <thead>
          <tr>
            {headerRow.map((cell, j) => (
              <th
                key={j}
                className="border border-[#000]/15 bg-[#000]/5 px-3 py-2 text-left font-semibold text-[#000000]"
              >
                {renderInline(cell)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bodyRows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "" : "bg-[#000]/[0.02]"}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="border border-[#000]/15 px-3 py-2 text-[#000000] leading-[1.5]"
                >
                  {renderInline(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function renderContent(text: string): React.ReactNode {
  const paragraphs = text.split(/\n\n+/);
  const nodes: React.ReactNode[] = [];

  for (let i = 0; i < paragraphs.length; i++) {
    const para = paragraphs[i].trim();
    if (!para) continue;

    const lines = para.split("\n");
    const isTable = lines.every((l) => l.trimStart().startsWith("|"));
    const isBulletList = lines.every((l) => l.trimStart().startsWith("- "));
    const isNumberedList = lines.every((l) => /^\d+\.\s/.test(l.trimStart()));

    if (isTable) {
      nodes.push(renderTable(lines, i));
    } else if (isBulletList) {
      nodes.push(
        <ul key={i} className="list-disc list-outside ml-4 space-y-1 text-[15px] text-[#000000] leading-[1.7]">
          {lines.map((l, j) => (
            <li key={j}>{renderInline(l.replace(/^-\s+/, ""))}</li>
          ))}
        </ul>
      );
    } else if (isNumberedList) {
      nodes.push(
        <ol key={i} className="list-decimal list-outside ml-4 space-y-1 text-[15px] text-[#000000] leading-[1.7]">
          {lines.map((l, j) => (
            <li key={j}>{renderInline(l.replace(/^\d+\.\s+/, ""))}</li>
          ))}
        </ol>
      );
    } else {
      nodes.push(
        <p key={i} className="text-[15px] text-[#000000] leading-[1.7]">
          {renderInline(para)}
        </p>
      );
    }
  }

  return <div className="space-y-2">{nodes}</div>;
}

// ── block renderer ────────────────────────────────────────────────────────────

const BLOCK_STYLE: Record<
  LessonBlockType,
  {
    label: string;
    border: string;
    bg: string;
    labelColor: string;
    accent?: string;
    contentClass?: string;
  }
> = {
  intro: {
    label: "Context",
    border: "border-[#2294BD]/20",
    bg: "bg-[#2294BD]/5",
    labelColor: "text-[#2294BD]",
    accent: "border-l-[#2294BD]/50",
  },
  framing: {
    label: "Framing",
    border: "border-[#2294BD]/20",
    bg: "bg-[#2294BD]/5",
    labelColor: "text-[#2294BD]",
    accent: "border-l-[#2294BD]/50",
  },
  teaching: {
    label: "Core concept",
    border: "border-[#000]/10",
    bg: "bg-white",
    labelColor: "text-[#404040]",
    // no left accent — clean white reads as the signal block
  },
  example: {
    label: "Example",
    border: "border-[#FAA51A]/25",
    bg: "bg-[#FAA51A]/6",
    labelColor: "text-[#9B6A00]",
    accent: "border-l-[#FAA51A]",
  },
  quote: {
    label: "Quote",
    border: "border-[#7C5CBF]/20",
    bg: "bg-[#7C5CBF]/5",
    labelColor: "text-[#7C5CBF]",
    accent: "border-l-[#7C5CBF]/60",
    contentClass: "italic",
  },
  visual: {
    label: "Visual",
    border: "border-[#E8DDD4]",
    bg: "bg-[#F9F6F3]",
    labelColor: "text-[#404040]",
  },
  "inference-boundary": {
    label: "Inference boundary",
    border: "border-[#FAA51A]/40",
    bg: "bg-[#FAA51A]/10",
    labelColor: "text-[#9B6A00]",
    accent: "border-l-[#FAA51A]",
  },
  "weak-answer": {
    label: "Weak answer",
    border: "border-[#D9532B]/25",
    bg: "bg-[#D9532B]/5",
    labelColor: "text-[#D9532B]",
    accent: "border-l-[#D9532B]/60",
  },
  exercise: {
    label: "Exercise",
    border: "border-[#D9532B]/20",
    bg: "bg-[#D9532B]/5",
    labelColor: "text-[#D9532B]",
  },
  "meeting-application": {
    label: "Meeting application",
    border: "border-[#2A9D60]/20",
    bg: "bg-[#2A9D60]/5",
    labelColor: "text-[#1A6B42]",
    accent: "border-l-[#2A9D60]",
  },
  "source-note": {
    label: "Source note",
    border: "border-[#E8DDD4]",
    bg: "bg-[#F9F6F3]",
    labelColor: "text-[#9A918A]",
    contentClass: "text-[#9A918A]",
  },
};

function Block({ block }: { block: LessonBlock }) {
  const s = BLOCK_STYLE[block.type];
  const accentClass = s.accent ? `border-l-4 ${s.accent}` : "";

  if (block.type === "visual") {
    const VisualComponent = block.visualId
      ? LESSON_VISUALS[block.visualId]
      : null;
    return (
      <div
        className={`rounded-xl border ${s.border} ${s.bg} px-5 py-5 mb-5`}
      >
        <p
          className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${s.labelColor}`}
        >
          {s.label}
        </p>
        <p className="text-[15px] font-semibold text-[#000000] leading-snug mb-4">
          {block.title}
        </p>

        {VisualComponent && (
          <div className="mb-4">
            <VisualComponent />
          </div>
        )}
        {block.src && !VisualComponent && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={block.src}
            alt={block.caption ?? block.title}
            className="w-full rounded-lg mb-4 object-contain max-h-80"
          />
        )}
        {block.content && (
          <div className="text-[15px] text-[#000000] leading-[1.7] mb-3">
            {renderContent(block.content)}
          </div>
        )}
        {block.caption && (
          <p className="text-xs text-[#404040] italic mb-3">{block.caption}</p>
        )}
        {block.whyItMatters && (
          <div className="rounded-lg border border-[#2294BD]/20 bg-[#2294BD]/5 px-4 py-3 mb-3">
            <span className="text-xs font-bold text-[#2294BD] uppercase tracking-wide">
              Why this matters —{" "}
            </span>
            <span className="text-sm text-[#000000] leading-relaxed">
              {block.whyItMatters}
            </span>
          </div>
        )}
        {block.sourceNote && (
          <p className="text-[11px] text-[#9A918A] leading-relaxed">
            Source: {block.sourceNote}
          </p>
        )}
      </div>
    );
  }

  return (
    <div
      className={`rounded-xl border ${s.border} ${accentClass} ${s.bg} px-5 py-5 mb-5`}
    >
      <p
        className={`text-[10px] font-bold uppercase tracking-widest mb-1.5 ${s.labelColor}`}
      >
        {s.label}
      </p>
      <p className="text-[15px] font-semibold text-[#000000] leading-snug mb-2.5">
        {block.title}
      </p>
      {block.content && (
        <div
          className={`text-[15px] text-[#000000] leading-[1.7] ${s.contentClass ?? ""}`}
        >
          {renderContent(block.content)}
        </div>
      )}
    </div>
  );
}

// ── MC question ───────────────────────────────────────────────────────────────

function MCQuestionCard({
  q,
  index,
  submitted,
  selected,
  onSelect,
}: {
  q: MCQuestion;
  index: number;
  submitted: boolean;
  selected: string | null;
  onSelect: (v: string) => void;
}) {
  const isCorrect = selected === q.correctAnswer;

  return (
    <div className="mb-7">
      <p className="text-[10px] font-bold text-[#404040] uppercase tracking-widest mb-2">
        Q{index + 1} · Multiple choice
      </p>
      <p className="text-[15px] font-medium text-[#000000] leading-snug mb-3">
        {q.prompt}
      </p>

      <div className="space-y-2">
        {q.options.map((rawOpt) => {
          const optText = typeof rawOpt === "string" ? rawOpt : rawOpt.text;
          const optExplanation = typeof rawOpt === "string" ? undefined : rawOpt.explanation;
          const isSelected = selected === optText;
          const isRight = optText === q.correctAnswer;

          let style =
            "border border-[#E8DDD4] bg-white text-[#000000] hover:border-[#2294BD]/50 hover:bg-[#2294BD]/5";
          let icon: string | null = null;

          if (submitted) {
            if (isRight) {
              style = "border-2 border-[#2294BD] bg-[#2294BD]/10 text-[#000000]";
              icon = "✓";
            } else if (isSelected && !isRight) {
              style =
                "border-2 border-[#D9532B] bg-[#D9532B]/8 text-[#D9532B] line-through";
              icon = "✗";
            } else {
              style =
                "border border-[#E8DDD4] bg-[#F9F6F3] text-[#9A918A] cursor-default";
            }
          } else if (isSelected) {
            style = "border-2 border-[#2294BD] bg-[#2294BD]/8 text-[#000000]";
          }

          return (
            <div key={optText}>
              <button
                disabled={submitted}
                onClick={() => onSelect(optText)}
                className={`w-full text-left rounded-xl px-4 py-3 text-sm transition-colors flex items-start gap-2 ${style}`}
              >
                {icon && (
                  <span
                    className={`flex-shrink-0 font-bold text-sm leading-snug ${
                      isRight ? "text-[#2294BD]" : "text-[#D9532B]"
                    }`}
                  >
                    {icon}
                  </span>
                )}
                <span className="leading-snug">{optText}</span>
              </button>
              {/* Wrong-answer explanation */}
              {submitted && !isRight && isSelected && optExplanation && (
                <p className="mt-1 ml-1 text-xs text-[#D9532B]/80 leading-relaxed">
                  {optExplanation}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Inline feedback banner */}
      {submitted && (
        <div
          className={`mt-3 rounded-xl px-4 py-2.5 text-sm font-medium flex items-center gap-2 ${
            isCorrect
              ? "bg-[#2294BD]/10 text-[#2294BD] border border-[#2294BD]/20"
              : "bg-[#D9532B]/8 text-[#D9532B] border border-[#D9532B]/20"
          }`}
        >
          <span>{isCorrect ? "✓ Correct" : "✗ Incorrect"}</span>
          {!isCorrect && (
            <span className="text-[#404040] font-normal">
              — correct answer highlighted above
            </span>
          )}
        </div>
      )}
    </div>
  );
}

// ── Short-response question ───────────────────────────────────────────────────

type SRState = "unanswered" | "submitted";

type EvalResult = {
  score: number;
  verdict: string;
  strengths: string[];
  gaps: string[];
  improvedAnswer: string;
  confidence: "low" | "medium" | "high";
};

function SRQuestionCard({
  q,
  index,
  lessonId,
  state,
  value,
  onChange,
  onSubmit,
}: {
  q: SRQuestion;
  index: number;
  lessonId: string;
  state: SRState;
  value: string;
  onChange: (v: string) => void;
  onSubmit: () => void;
}) {
  const [feedback, setFeedback] = useState<EvalResult | null>(null);
  const [feedbackLoading, setFeedbackLoading] = useState(false);
  const [feedbackError, setFeedbackError] = useState<string | null>(null);

  async function handleGetFeedback() {
    setFeedbackLoading(true);
    setFeedbackError(null);
    try {
      const res = await fetch("/api/evaluate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lessonId,
          questionId: q.questionId,
          prompt: q.prompt,
          modelAnswer: q.modelAnswer,
          userAnswer: value,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Failed to get feedback.");
      setFeedback(data as EvalResult);
    } catch (e) {
      setFeedbackError(e instanceof Error ? e.message : "Failed to get feedback.");
    } finally {
      setFeedbackLoading(false);
    }
  }

  const scoreColor =
    !feedback ? ""
    : feedback.score >= 4 ? "text-[#2294BD]"
    : feedback.score >= 3 ? "text-[#9B6A00]"
    : "text-[#D9532B]";

  return (
    <div className="mb-7">
      <p className="text-[10px] font-bold text-[#404040] uppercase tracking-widest mb-2">
        Q{index + 1} · Short response
      </p>
      <p className="text-[15px] font-medium text-[#000000] leading-snug mb-3">
        {q.prompt}
      </p>

      <textarea
        disabled={state === "submitted"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Write your answer here…"
        rows={4}
        className="w-full rounded-xl border border-[#E8DDD4] bg-white px-4 py-3 text-sm text-[#000000] placeholder:text-[#9A918A] resize-none focus:outline-none focus:border-[#2294BD] focus:ring-1 focus:ring-[#2294BD]/30 disabled:bg-[#F9F6F3] disabled:text-[#404040] transition-colors"
      />

      {state === "unanswered" && (
        <button
          onClick={onSubmit}
          disabled={value.trim().length === 0}
          className="mt-2 text-sm font-medium text-[#2294BD] bg-[#2294BD]/10 hover:bg-[#2294BD]/18 disabled:opacity-40 disabled:cursor-not-allowed px-4 py-2 rounded-xl transition-colors"
        >
          Submit response
        </button>
      )}

      {state === "submitted" && (
        <>
          <div className="mt-3 rounded-xl border border-[#E8DDD4] bg-[#F0E6DD] px-5 py-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#404040] mb-2">
              Model answer
            </p>
            <p className="text-[15px] text-[#000000] leading-[1.7]">
              {q.modelAnswer}
            </p>
          </div>

          {!feedback && (
            <button
              onClick={handleGetFeedback}
              disabled={feedbackLoading}
              className="mt-2 text-sm font-medium text-[#7C5CBF] bg-[#7C5CBF]/10 hover:bg-[#7C5CBF]/18 disabled:opacity-40 disabled:cursor-not-allowed px-4 py-2 rounded-xl transition-colors"
            >
              {feedbackLoading ? "Getting feedback…" : "Get feedback"}
            </button>
          )}

          {feedbackError && (
            <p className="mt-2 text-sm text-[#D9532B]">{feedbackError}</p>
          )}

          {feedback && (
            <div className="mt-3 rounded-xl border border-[#7C5CBF]/20 bg-[#7C5CBF]/5 px-5 py-4 space-y-3">
              <div className="flex items-center gap-3">
                <span className={`text-2xl font-bold ${scoreColor}`}>
                  {feedback.score}/5
                </span>
                <span className="text-sm font-medium text-[#000000]">
                  {feedback.verdict}
                </span>
                <span className="ml-auto text-[10px] font-bold uppercase tracking-widest text-[#9A918A]">
                  {feedback.confidence} confidence
                </span>
              </div>

              {feedback.strengths.length > 0 && (
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#2A9D60] mb-1">
                    Strengths
                  </p>
                  <ul className="space-y-0.5">
                    {feedback.strengths.map((s, i) => (
                      <li key={i} className="text-sm text-[#000000] flex gap-2">
                        <span className="text-[#2A9D60] flex-shrink-0">+</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {feedback.gaps.length > 0 && (
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#D9532B] mb-1">
                    Gaps
                  </p>
                  <ul className="space-y-0.5">
                    {feedback.gaps.map((g, i) => (
                      <li key={i} className="text-sm text-[#000000] flex gap-2">
                        <span className="text-[#D9532B] flex-shrink-0">–</span>
                        {g}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {feedback.improvedAnswer && (
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#404040] mb-1">
                    Tighter answer
                  </p>
                  <p className="text-sm text-[#000000] leading-[1.7] border-l-2 border-[#7C5CBF]/40 pl-3">
                    {feedback.improvedAnswer}
                  </p>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

// ── Confidence rating ─────────────────────────────────────────────────────────

const CONFIDENCE_LABELS = ["Not at all", "Shaky", "Okay", "Solid", "Nailed it"];

function ConfidenceRating({
  value,
  onChange,
}: {
  value: number | null;
  onChange: (v: number) => void;
}) {
  return (
    <div className="rounded-2xl border border-[#E8DDD4] bg-white px-6 py-5 mt-2">
      <p className="text-[15px] font-semibold text-[#000000] mb-1">
        How confident do you feel?
      </p>
      <p className="text-sm text-[#404040] mb-4">
        Rate your understanding of today's material.
      </p>
      <div className="flex gap-2 justify-between">
        {CONFIDENCE_LABELS.map((label, i) => {
          const v = i + 1;
          const active = value === v;
          return (
            <button
              key={v}
              onClick={() => onChange(v)}
              className={`flex-1 flex flex-col items-center gap-1 py-3 rounded-xl border text-xs font-medium transition-colors ${
                active
                  ? "border-[#2294BD] bg-[#2294BD] text-white"
                  : "border-[#E8DDD4] bg-white text-[#404040] hover:border-[#2294BD]/50 hover:bg-[#2294BD]/5"
              }`}
            >
              <span className="text-base font-bold">{v}</span>
              <span className="hidden sm:block text-[10px] leading-tight text-center">
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ── page ──────────────────────────────────────────────────────────────────────

export default function LessonPage({
  params,
}: {
  params: Promise<{ lessonId: string }>;
}) {
  const { lessonId } = use(params);
  const content = getLessonContent(lessonId);
  const module = getModuleById(MODULE_ID);
  const lesson = module?.lessons.find((l) => l.lessonId === lessonId);

  // MC answers: questionId → selected option
  const [mcAnswers, setMcAnswers] = useState<Record<string, string>>({});
  // SR states: questionId → state + text
  const [srStates, setSrStates] = useState<
    Record<string, { state: SRState; value: string }>
  >({});
  // Whether MC section has been submitted
  const [mcSubmitted, setMcSubmitted] = useState(false);
  // Confidence
  const [confidence, setConfidence] = useState<number | null>(null);
  // Saved result
  const [saved, setSaved] = useState(false);
  // Jump to Quiz button visibility
  const [showJumpBtn, setShowJumpBtn] = useState(true);
  const quizRef = useRef<HTMLDivElement>(null);
  // Unmet prerequisites
  const [unmetPrereqs, setUnmetPrereqs] = useState<{ lessonId: string; title: string }[]>([]);

  // Load existing quiz result
  useEffect(() => {
    const existing = getQuizResult(lessonId);
    if (existing) {
      setConfidence(existing.confidence);
      setSaved(true);
    }
  }, [lessonId]);

  // Check prerequisites
  useEffect(() => {
    if (!lesson) return;
    const allLessons = modules[0]?.lessons ?? [];
    const unmet = lesson.prerequisites
      .map((prereqId) => {
        const prereqLesson = allLessons.find((l) => l.lessonId === prereqId);
        if (!prereqLesson) return null;
        const progress = getLessonProgress(MODULE_ID, prereqId);
        if (progress.status === "completed") return null;
        return { lessonId: prereqId, title: prereqLesson.title };
      })
      .filter((x): x is { lessonId: string; title: string } => x !== null);
    setUnmetPrereqs(unmet);
  }, [lesson]);

  // IntersectionObserver: hide Jump button when quiz is visible
  useEffect(() => {
    const el = quizRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowJumpBtn(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (!content || !lesson) {
    return (
      <main className="min-h-screen bg-[#FBF7F3] flex items-center justify-center">
        <p className="text-sm text-[#404040]">Lesson not found.</p>
      </main>
    );
  }

  const mcQuestions = content.quiz.filter(
    (q): q is MCQuestion => q.type === "multiple-choice"
  );
  const srQuestions = content.quiz.filter(
    (q): q is SRQuestion => q.type === "short-response"
  );
  const allQuestions: QuizQuestion[] = content.quiz;

  const mcAllAnswered = mcQuestions.every((q) => mcAnswers[q.questionId]);
  const srAllSubmitted = srQuestions.every(
    (q) => srStates[q.questionId]?.state === "submitted"
  );
  const quizComplete =
    (mcQuestions.length === 0 || mcSubmitted) && srAllSubmitted;

  const mcScore =
    mcQuestions.length > 0
      ? mcQuestions.filter((q) => mcAnswers[q.questionId] === q.correctAnswer)
          .length / mcQuestions.length
      : 1;

  function handleSave() {
    if (!confidence) return;
    const result: QuizResult = {
      score: mcScore,
      confidence,
      completedAt: new Date().toISOString(),
    };
    saveQuizResult(lessonId, result);
    setLessonStatus(MODULE_ID, lessonId, "completed");
    setSaved(true);
  }

  const questionIndex = (q: QuizQuestion) => allQuestions.indexOf(q);

  // ── AI helper prompts ────────────────────────────────────────────────────────
  const topicStr = lesson.topics.slice(0, 3).join(", ");
  const wrongMcDetails = mcQuestions
    .filter((q) => mcAnswers[q.questionId] && mcAnswers[q.questionId] !== q.correctAnswer)
    .map((q) => `• "${q.prompt}"\n  Correct: "${q.correctAnswer}" | My answer: "${mcAnswers[q.questionId]}"`)
    .join("\n");
  const mcHelpPrompt =
    `Lesson: "${lesson.title}" | Topic: ${topicStr}\n` +
    (wrongMcDetails ? `Questions I got wrong:\n${wrongMcDetails}\n\n` : "") +
    `Explain the correct reasoning and help me understand the underlying PE concepts.`;
  const confidenceHelpPrompt =
    `Lesson: "${lesson.title}" | Topic: ${topicStr} | Confidence: ${confidence ?? "?"}/5` +
    (wrongMcDetails ? `\nI also got these MC questions wrong:\n${wrongMcDetails}` : "") +
    `\n\nHelp me solidify my understanding of these PE concepts.`;

  // Lesson navigation helpers
  const allLessons = modules[0]?.lessons ?? [];
  const lessonIndex = allLessons.findIndex((l) => l.lessonId === lessonId);
  const prevLesson = lessonIndex > 0 ? allLessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex < allLessons.length - 1 ? allLessons[lessonIndex + 1] : null;

  // Summary card data
  const reviewCardCount = allReviewCards.filter((c) => c.lessonId === lessonId).length;

  return (
    <main className="min-h-screen bg-[#FBF7F3]">
      {/* Jump to Quiz sticky button */}
      {showJumpBtn && (
        <button
          onClick={() => quizRef.current?.scrollIntoView({ behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 bg-[#000000] text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-lg hover:bg-[#222] transition-colors"
        >
          Jump to Quiz ↓
        </button>
      )}

      <div className="max-w-2xl mx-auto px-4 py-8 sm:py-10">
        {/* Header */}
        <div className="mb-8">
          <a
            href="/modules"
            className="text-xs text-[#2294BD] hover:underline mb-3 inline-block"
          >
            ← Modules
          </a>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-xs font-bold text-[#404040] uppercase tracking-widest">
              Day {lesson.dayNumber}
            </span>
            <span className="text-xs text-[#D0C8C0]">·</span>
            <span className="text-xs text-[#404040]">
              {lesson.estimatedMinutes} min
            </span>
          </div>
          <h1 className="text-2xl font-bold text-[#000000] leading-snug">
            {lesson.title}
          </h1>
        </div>

        {/* Prerequisite warning banner */}
        {unmetPrereqs.length > 0 && (
          <div className="mb-6 rounded-xl border border-[#FAA51A]/40 bg-[#FAA51A]/10 px-4 py-3">
            <p className="text-sm text-[#9B6A00]">
              <span className="font-semibold">Heads up:</span> This lesson builds on{" "}
              {unmetPrereqs.map((p, i) => (
                <span key={p.lessonId}>
                  {i > 0 && " and "}
                  <Link
                    href={`/lesson/${p.lessonId}`}
                    className="underline font-medium hover:text-[#7a5200]"
                  >
                    {p.title}
                  </Link>
                </span>
              ))}
              . Consider completing {unmetPrereqs.length === 1 ? "it" : "them"} first.
            </p>
          </div>
        )}

        {/* Learning blocks */}
        <div className="mb-8">
          {content.blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>

        {/* Quiz */}
        <div ref={quizRef} id="quiz-section" className="rounded-2xl border border-[#E8DDD4] bg-white px-6 py-6 mb-4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-[10px] font-bold text-[#404040] uppercase tracking-widest mb-0.5">
                Check your understanding
              </h2>
              <p className="text-[15px] font-semibold text-[#000000]">Quiz</p>
            </div>
            {saved && (
              <span className="text-xs text-[#2294BD] bg-[#2294BD]/10 px-2.5 py-1 rounded-lg font-medium">
                Completed
              </span>
            )}
          </div>

          {/* MC questions */}
          {mcQuestions.map((q) => (
            <MCQuestionCard
              key={q.questionId}
              q={q}
              index={questionIndex(q)}
              submitted={mcSubmitted}
              selected={mcAnswers[q.questionId] ?? null}
              onSelect={(v) => {
                if (!mcSubmitted)
                  setMcAnswers((prev) => ({ ...prev, [q.questionId]: v }));
              }}
            />
          ))}

          {/* MC submit */}
          {mcQuestions.length > 0 && !mcSubmitted && (
            <button
              disabled={!mcAllAnswered}
              onClick={() => setMcSubmitted(true)}
              className="w-full rounded-xl bg-[#000000] text-white text-sm font-semibold py-3 mb-7 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#222] transition-colors"
            >
              Check answers
            </button>
          )}

          {/* MC score banner */}
          {mcSubmitted && mcQuestions.length > 0 && (
            <div className="mb-7">
              <div
                className={`rounded-xl px-4 py-3 flex items-center gap-3 border ${
                  mcScore === 1
                    ? "bg-[#2294BD]/10 border-[#2294BD]/25 text-[#2294BD]"
                    : mcScore >= 0.5
                    ? "bg-[#FAA51A]/10 border-[#FAA51A]/25 text-[#9B6A00]"
                    : "bg-[#D9532B]/8 border-[#D9532B]/20 text-[#D9532B]"
                }`}
              >
                <span className="text-lg font-bold">
                  {mcScore === 1 ? "✓" : mcScore >= 0.5 ? "~" : "✗"}
                </span>
                <span className="text-sm font-semibold">
                  {Math.round(mcScore * mcQuestions.length)}/{mcQuestions.length}{" "}
                  correct
                </span>
                <span className="text-sm text-[#404040] font-normal">
                  {mcScore === 1
                    ? "— perfect score"
                    : mcScore >= 0.5
                    ? "— review the highlighted answers"
                    : "— revisit the lesson material"}
                </span>
              </div>
              {mcScore < 1 && (
                <AiHelper
                  prompt={mcHelpPrompt}
                  label="Explain this more simply"
                />
              )}
            </div>
          )}

          {/* SR questions */}
          {srQuestions.map((q) => (
            <SRQuestionCard
              key={q.questionId}
              q={q}
              index={questionIndex(q)}
              lessonId={lessonId}
              state={srStates[q.questionId]?.state ?? "unanswered"}
              value={srStates[q.questionId]?.value ?? ""}
              onChange={(v) =>
                setSrStates((prev) => ({
                  ...prev,
                  [q.questionId]: {
                    state: prev[q.questionId]?.state ?? "unanswered",
                    value: v,
                  },
                }))
              }
              onSubmit={() =>
                setSrStates((prev) => ({
                  ...prev,
                  [q.questionId]: {
                    state: "submitted",
                    value: prev[q.questionId]?.value ?? "",
                  },
                }))
              }
            />
          ))}
        </div>

        {/* Confidence + save */}
        {quizComplete && (
          <>
            <ConfidenceRating value={confidence} onChange={setConfidence} />
            {confidence !== null && confidence <= 2 && (
              <AiHelper
                prompt={confidenceHelpPrompt}
                label="Explain this more simply"
              />
            )}
            {!saved && (
              <button
                disabled={!confidence}
                onClick={handleSave}
                className="w-full mt-3 rounded-xl bg-[#2294BD] text-white text-sm font-semibold py-3 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#1a7ea8] transition-colors"
              >
                Save and mark complete
              </button>
            )}
            {saved && (
              /* End-of-lesson summary card */
              <div className="mt-3 rounded-2xl border-2 border-[#2A9D60]/40 bg-[#2A9D60]/5 px-6 py-5">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[#2A9D60] text-lg font-bold">✓</span>
                  <span className="text-[15px] font-semibold text-[#000000]">
                    Lesson complete
                  </span>
                </div>
                <p className="text-[17px] font-bold text-[#000000] leading-snug mb-4">
                  {lesson.title}
                </p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="rounded-xl border border-[#2A9D60]/20 bg-white px-4 py-3">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#2A9D60] mb-1">
                      Quiz score
                    </p>
                    <p className="text-[22px] font-bold text-[#000000]">
                      {Math.round(mcScore * mcQuestions.length)}/{mcQuestions.length}
                    </p>
                    <p className="text-xs text-[#404040]">
                      {mcQuestions.length > 0
                        ? `${Math.round(mcScore * 100)}% correct`
                        : "Short response only"}
                    </p>
                  </div>
                  <div className="rounded-xl border border-[#2A9D60]/20 bg-white px-4 py-3">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#2A9D60] mb-1">
                      Confidence
                    </p>
                    <p className="text-[22px] font-bold text-[#000000]">
                      {confidence}/5
                    </p>
                    <p className="text-xs text-[#404040]">
                      {CONFIDENCE_LABELS[(confidence ?? 1) - 1]}
                    </p>
                  </div>
                </div>
                {lesson.topics.length > 0 && (
                  <div className="mb-3">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#404040] mb-1.5">
                      Topics covered
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {lesson.topics.map((t) => (
                        <span
                          key={t}
                          className="text-xs bg-[#2A9D60]/10 text-[#1A6B42] px-2.5 py-1 rounded-lg font-medium"
                        >
                          {t.replace(/-/g, " ")}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {reviewCardCount > 0 && (
                  <p className="text-sm text-[#404040] mb-4">
                    <span className="font-semibold text-[#000000]">{reviewCardCount}</span>{" "}
                    review {reviewCardCount === 1 ? "card" : "cards"} unlocked for spaced repetition.
                  </p>
                )}
                <div className="flex gap-2">
                  <Link
                    href="/modules"
                    className="flex-1 text-center text-sm font-semibold text-[#2A9D60] bg-[#2A9D60]/10 hover:bg-[#2A9D60]/18 px-4 py-2.5 rounded-xl transition-colors"
                  >
                    Back to modules
                  </Link>
                  {nextLesson && (
                    <Link
                      href={`/lesson/${nextLesson.lessonId}`}
                      className="flex-1 text-center text-sm font-semibold text-white bg-[#2A9D60] hover:bg-[#22854f] px-4 py-2.5 rounded-xl transition-colors"
                    >
                      Next lesson →
                    </Link>
                  )}
                </div>
              </div>
            )}
          </>
        )}

        {/* Prev / Next lesson navigation */}
        {(prevLesson || nextLesson) && (
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#E8DDD4]">
            {prevLesson ? (
              <Link
                href={`/lesson/${prevLesson.lessonId}`}
                className="flex flex-col items-start text-sm group"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#9A918A] mb-0.5">
                  ← Previous
                </span>
                <span className="text-[#2294BD] group-hover:underline font-medium">
                  Day {prevLesson.dayNumber}: {prevLesson.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {nextLesson && (
              <Link
                href={`/lesson/${nextLesson.lessonId}`}
                className="flex flex-col items-end text-sm group"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#9A918A] mb-0.5">
                  Next →
                </span>
                <span className="text-[#2294BD] group-hover:underline font-medium">
                  Day {nextLesson.dayNumber}: {nextLesson.title}
                </span>
              </Link>
            )}
          </div>
        )}

        {/* Sources */}
        {content.sources.length > 0 && (
          <div className="mt-8 border-t border-[#E8DDD4] pt-5">
            <p className="text-[10px] font-bold text-[#9A918A] uppercase tracking-widest mb-3">
              Sources
            </p>
            <ol className="space-y-1.5 list-decimal list-inside">
              {content.sources.map((s, i) => (
                <li key={i} className="text-[11px] text-[#9A918A] leading-relaxed">
                  {s}
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </main>
  );
}
