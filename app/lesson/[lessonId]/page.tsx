"use client";

import { use, useState, useEffect } from "react";
import { getLessonContent } from "@/lib/lessonContent";
import { getModuleById } from "@/lib/modules";
import { saveQuizResult, setLessonStatus, getQuizResult } from "@/lib/progress";
import {
  LessonBlock,
  MCQuestion,
  SRQuestion,
  QuizQuestion,
  QuizResult,
} from "@/lib/types";
import { AiHelper } from "@/components/AiHelper";

const MODULE_ID = "pe-foundations";

// ── block renderer ────────────────────────────────────────────────────────────

const BLOCK_STYLE: Record<
  LessonBlock["type"],
  { label: string; border: string; bg: string; labelColor: string }
> = {
  intro: {
    label: "Context",
    border: "border-[#2294BD]/20",
    bg: "bg-[#2294BD]/5",
    labelColor: "text-[#2294BD]",
  },
  teaching: {
    label: "Core concept",
    border: "border-[#000]/10",
    bg: "bg-white",
    labelColor: "text-[#404040]",
  },
  example: {
    label: "Example",
    border: "border-[#FAA51A]/25",
    bg: "bg-[#FAA51A]/6",
    labelColor: "text-[#9B6A00]",
  },
  exercise: {
    label: "Exercise",
    border: "border-[#D9532B]/20",
    bg: "bg-[#D9532B]/5",
    labelColor: "text-[#D9532B]",
  },
};

function Block({ block }: { block: LessonBlock }) {
  const s = BLOCK_STYLE[block.type];
  return (
    <div className={`rounded-xl border ${s.border} ${s.bg} px-4 py-4 mb-3`}>
      <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${s.labelColor}`}>
        {s.label} — {block.title}
      </p>
      <p className="text-sm text-[#000000] leading-relaxed">{block.content}</p>
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
    <div className="mb-6">
      <p className="text-xs font-semibold text-[#404040] uppercase tracking-wide mb-2">
        Q{index + 1} · Multiple choice
      </p>
      <p className="text-sm font-medium text-[#000000] leading-snug mb-3">
        {q.prompt}
      </p>

      <div className="space-y-2">
        {q.options.map((opt) => {
          const isSelected = selected === opt;
          const isRight = opt === q.correctAnswer;

          let style =
            "border border-[#E8DDD4] bg-white text-[#000000] hover:border-[#2294BD]/50 hover:bg-[#2294BD]/5";
          let icon: string | null = null;

          if (submitted) {
            if (isRight) {
              style = "border-2 border-[#2294BD] bg-[#2294BD]/10 text-[#000000]";
              icon = "✓";
            } else if (isSelected && !isRight) {
              style = "border-2 border-[#D9532B] bg-[#D9532B]/8 text-[#D9532B] line-through";
              icon = "✗";
            } else {
              style = "border border-[#E8DDD4] bg-[#F9F6F3] text-[#9A918A] cursor-default";
            }
          } else if (isSelected) {
            style = "border-2 border-[#2294BD] bg-[#2294BD]/8 text-[#000000]";
          }

          return (
            <button
              key={opt}
              disabled={submitted}
              onClick={() => onSelect(opt)}
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
              <span className="leading-snug">{opt}</span>
            </button>
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

function SRQuestionCard({
  q,
  index,
  state,
  value,
  onChange,
  onSubmit,
}: {
  q: SRQuestion;
  index: number;
  state: SRState;
  value: string;
  onChange: (v: string) => void;
  onSubmit: () => void;
}) {
  return (
    <div className="mb-6">
      <p className="text-xs font-semibold text-[#404040] uppercase tracking-wide mb-2">
        Q{index + 1} · Short response
      </p>
      <p className="text-sm font-medium text-[#000000] leading-snug mb-3">
        {q.prompt}
      </p>

      <textarea
        disabled={state === "submitted"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Write your answer here…"
        rows={3}
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
        <div className="mt-3 rounded-xl border border-[#E8DDD4] bg-[#F0E6DD] px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#404040] mb-1">
            Model answer
          </p>
          <p className="text-sm text-[#000000] leading-relaxed">{q.modelAnswer}</p>
        </div>
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
    <div className="rounded-2xl border border-[#E8DDD4] bg-white px-5 py-5 mt-2">
      <p className="text-sm font-semibold text-[#000000] mb-1">
        How confident do you feel?
      </p>
      <p className="text-xs text-[#404040] mb-4">
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
              className={`flex-1 flex flex-col items-center gap-1 py-2.5 rounded-xl border text-xs font-medium transition-colors ${
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

  // Load existing quiz result
  useEffect(() => {
    const existing = getQuizResult(lessonId);
    if (existing) {
      setConfidence(existing.confidence);
      setSaved(true);
    }
  }, [lessonId]);

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

  return (
    <main className="min-h-screen bg-[#FBF7F3]">
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-5">
          <a
            href="/modules"
            className="text-xs text-[#2294BD] hover:underline mb-2 inline-block"
          >
            ← Modules
          </a>
          <div className="flex items-baseline gap-2">
            <span className="text-xs font-bold text-[#404040] uppercase tracking-widest">
              Day {lesson.dayNumber}
            </span>
            <span className="text-xs text-[#D0C8C0]">·</span>
            <span className="text-xs text-[#404040]">
              {lesson.estimatedMinutes} min
            </span>
          </div>
          <h1 className="text-xl font-bold text-[#000000] mt-1 leading-snug">
            {lesson.title}
          </h1>
        </div>

        {/* Learning blocks */}
        <div className="mb-6">
          {content.blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>

        {/* Quiz */}
        <div className="rounded-2xl border border-[#E8DDD4] bg-white px-5 py-5 mb-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold text-[#000000] uppercase tracking-wide">
              Quiz
            </h2>
            {saved && (
              <span className="text-xs text-[#2294BD] bg-[#2294BD]/10 px-2 py-1 rounded-lg font-medium">
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
              className="w-full rounded-xl bg-[#000000] text-white text-sm font-semibold py-3 mb-6 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#222] transition-colors"
            >
              Check answers
            </button>
          )}

          {/* MC score banner */}
          {mcSubmitted && mcQuestions.length > 0 && (
            <div className="mb-6">
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
                  prompt={`I just got some questions wrong on a PE quiz about "${lesson.title}". Explain the core concepts of this topic more simply, drawing on public-markets analogies where helpful.`}
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
                prompt={`I rated my confidence as ${confidence}/5 after studying "${lesson.title}" in a PE learning app. I'm a CFA charterholder with strong public-markets experience but limited PE fluency. Explain the key concepts of this topic in an intuitive way.`}
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
              <div className="mt-3 rounded-xl bg-[#2294BD]/10 border border-[#2294BD]/20 px-4 py-3 flex items-center gap-2">
                <span className="text-[#2294BD] font-bold">✓</span>
                <span className="text-sm text-[#2294BD] font-medium">
                  Lesson complete — good work.
                </span>
                <a
                  href="/modules"
                  className="ml-auto text-xs text-[#2294BD] font-semibold hover:underline"
                >
                  Next →
                </a>
              </div>
            )}
          </>
        )}

        {/* Sources */}
        {content.sources.length > 0 && content.sources[0] !== "Content in development" && (
          <div className="mt-6 border-t border-[#E8DDD4] pt-4">
            <p className="text-xs font-semibold text-[#404040] uppercase tracking-wide mb-2">
              Sources
            </p>
            <ul className="space-y-1">
              {content.sources.map((s, i) => (
                <li key={i} className="text-xs text-[#404040]">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}
