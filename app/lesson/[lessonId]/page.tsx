"use client";

import { use, useState, useEffect, useRef, useCallback } from "react";
import { getLessonContent, lessonContents } from "@/lib/lessonContent";
import { DEFAULT_MODULE_ID, getModuleById, getDefaultModule } from "@/lib/modules";
import {
  setLessonStatus,
  getQuizResult,
  getModuleProgress,
  saveQuizAttempt,
  getQuizHistory,
  recordWrongAnswers,
  saveLessonPosition,
  getLessonPosition,
} from "@/lib/progress";
import {
  LessonBlock,
  LessonBlockType,
  MCQuestion,
  SRQuestion,
  QuizQuestion,
  QuizResult,
  QuizAttempt,
  WrongAnswer,
} from "@/lib/types";
import { AiHelper } from "@/components/AiHelper";
import { LESSON_VISUALS } from "@/components/visuals";

const MODULE_ID = DEFAULT_MODULE_ID;

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
  // Split into segments: separate tables from non-table content even within
  // a single paragraph (they may be separated by only one newline).
  const rawParagraphs = text.split(/\n\n+/);
  const segments: { kind: "table" | "bullets" | "numbered" | "text"; lines: string[] }[] = [];

  for (const para of rawParagraphs) {
    const trimmed = para.trim();
    if (!trimmed) continue;

    const lines = trimmed.split("\n");
    let buf: string[] = [];
    let bufIsTable = false;

    const flush = () => {
      if (buf.length === 0) return;
      if (bufIsTable) {
        segments.push({ kind: "table", lines: [...buf] });
      } else if (buf.every((l) => l.trimStart().startsWith("- "))) {
        segments.push({ kind: "bullets", lines: [...buf] });
      } else if (buf.every((l) => /^\d+\.\s/.test(l.trimStart()))) {
        segments.push({ kind: "numbered", lines: [...buf] });
      } else {
        segments.push({ kind: "text", lines: [...buf] });
      }
      buf = [];
    };

    for (const line of lines) {
      const lineIsTable = line.trimStart().startsWith("|");
      if (buf.length > 0 && lineIsTable !== bufIsTable) {
        flush();
      }
      bufIsTable = lineIsTable;
      buf.push(line);
    }
    flush();
  }

  const nodes: React.ReactNode[] = [];
  for (let i = 0; i < segments.length; i++) {
    const seg = segments[i];
    if (seg.kind === "table") {
      nodes.push(renderTable(seg.lines, i));
    } else if (seg.kind === "bullets") {
      nodes.push(
        <ul key={i} className="list-disc list-outside ml-4 space-y-1 text-[15px] text-[#000000] leading-[1.7]">
          {seg.lines.map((l, j) => (
            <li key={j}>{renderInline(l.replace(/^-\s+/, ""))}</li>
          ))}
        </ul>
      );
    } else if (seg.kind === "numbered") {
      nodes.push(
        <ol key={i} className="list-decimal list-outside ml-4 space-y-1 text-[15px] text-[#000000] leading-[1.7]">
          {seg.lines.map((l, j) => (
            <li key={j}>{renderInline(l.replace(/^\d+\.\s+/, ""))}</li>
          ))}
        </ol>
      );
    } else {
      nodes.push(
        <p key={i} className="text-[15px] text-[#000000] leading-[1.7]">
          {renderInline(seg.lines.join("\n"))}
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
  "allocator-application": {
    label: "Allocator application",
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
        Rate your understanding of today&apos;s material.
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

// ── Spaced quiz injection ─────────────────────────────────────────────────────

type InjectedQuestion = MCQuestion & { sourceLessonId: string; sourceDayNumber: number };

function pickInjectedQuestions(currentLessonId: string, count: number): InjectedQuestion[] {
  if (typeof window === "undefined") return [];
  const progress = getModuleProgress(MODULE_ID);
  const mod = getDefaultModule();
  const pool: InjectedQuestion[] = [];

  for (const lesson of mod.lessons) {
    if (lesson.lessonId === currentLessonId) continue;
    if (progress[lesson.lessonId]?.status !== "completed") continue;
    const content = lessonContents.find((c) => c.lessonId === lesson.lessonId);
    if (!content) continue;
    for (const q of content.quiz) {
      if (q.type === "multiple-choice") {
        pool.push({
          ...q,
          // Prefix ID to avoid collision with current lesson questions
          questionId: `injected:${q.questionId}`,
          sourceLessonId: lesson.lessonId,
          sourceDayNumber: lesson.dayNumber,
        });
      }
    }
  }

  // Shuffle and pick
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count);
}

function InjectedQuestionCard({
  q,
  submitted,
  selected,
  onSelect,
}: {
  q: InjectedQuestion;
  submitted: boolean;
  selected: string | null;
  onSelect: (v: string) => void;
}) {
  const isCorrect = selected === q.correctAnswer;

  return (
    <div className="mb-7">
      <div className="flex items-center gap-2 mb-2">
        <p className="text-[10px] font-bold text-[#7C5CBF] uppercase tracking-widest">
          Spaced recall · Day {q.sourceDayNumber}
        </p>
      </div>
      <p className="text-[15px] font-medium text-[#000000] leading-snug mb-3">
        {q.prompt}
      </p>

      <div className="space-y-2">
        {q.options.map((opt) => {
          const isSelected = selected === opt;
          const isRight = opt === q.correctAnswer;

          let style =
            "border border-[#7C5CBF]/20 bg-white text-[#000000] hover:border-[#7C5CBF]/50 hover:bg-[#7C5CBF]/5";
          let icon: string | null = null;

          if (submitted) {
            if (isRight) {
              style = "border-2 border-[#2294BD] bg-[#2294BD]/10 text-[#000000]";
              icon = "\u2713";
            } else if (isSelected && !isRight) {
              style = "border-2 border-[#D9532B] bg-[#D9532B]/8 text-[#D9532B] line-through";
              icon = "\u2717";
            } else {
              style = "border border-[#E8DDD4] bg-[#F9F6F3] text-[#9A918A] cursor-default";
            }
          } else if (isSelected) {
            style = "border-2 border-[#7C5CBF] bg-[#7C5CBF]/8 text-[#000000]";
          }

          return (
            <button
              key={opt}
              disabled={submitted}
              onClick={() => onSelect(opt)}
              className={`w-full text-left rounded-xl px-4 py-3 text-sm transition-colors flex items-start gap-2 ${style}`}
            >
              {icon && (
                <span className={`flex-shrink-0 font-bold text-sm leading-snug ${isRight ? "text-[#2294BD]" : "text-[#D9532B]"}`}>
                  {icon}
                </span>
              )}
              <span className="leading-snug">{opt}</span>
            </button>
          );
        })}
      </div>

      {submitted && (
        <div
          className={`mt-3 rounded-xl px-4 py-2.5 text-sm font-medium flex items-center gap-2 ${
            isCorrect
              ? "bg-[#2294BD]/10 text-[#2294BD] border border-[#2294BD]/20"
              : "bg-[#D9532B]/8 text-[#D9532B] border border-[#D9532B]/20"
          }`}
        >
          <span>{isCorrect ? "\u2713 Correct" : "\u2717 Incorrect"}</span>
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

// ── Prereq knowledge gate ─────────────────────────────────────────────────────

function PrereqGate({
  prereqIds,
  onPass,
  onSkip,
}: {
  prereqIds: string[];
  onPass: () => void;
  onSkip: () => void;
}) {
  const mod = getModuleById(MODULE_ID);
  const [questions] = useState<(MCQuestion & { lessonTitle: string })[]>(() => {
    if (!mod) return [];
    const qs: (MCQuestion & { lessonTitle: string })[] = [];
    for (const pid of prereqIds) {
      const lesson = mod.lessons.find((l) => l.lessonId === pid);
      const content = lessonContents.find((c) => c.lessonId === pid);
      if (!lesson || !content) continue;
      const mcQs = content.quiz.filter(
        (q): q is MCQuestion => q.type === "multiple-choice"
      );
      if (mcQs.length > 0) {
        const pick = mcQs[Math.floor(Math.random() * mcQs.length)];
        qs.push({ ...pick, lessonTitle: lesson.title });
      }
    }
    return qs;
  });
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  if (questions.length === 0) {
    // No prereq questions available, auto-pass
    onPass();
    return null;
  }

  function handleSubmit() {
    const correct = questions.filter(
      (q) => answers[q.questionId] === q.correctAnswer
    ).length;
    setScore(correct);
    setSubmitted(true);
    if (correct === questions.length) {
      setTimeout(onPass, 1500);
    }
  }

  const allAnswered = questions.every((q) => answers[q.questionId]);

  return (
    <div className="rounded-2xl border border-[#FAA51A]/30 bg-white p-5 mb-6">
      <p className="text-xs font-bold text-[#9B6A00] uppercase tracking-widest mb-1">
        Prerequisite check
      </p>
      <p className="text-[15px] font-semibold text-[#000000] mb-2">
        Quick recall from prior lessons
      </p>
      <p className="text-sm text-[#404040] mb-4">
        Answer these to confirm you remember the foundations for this lesson.
      </p>

      {questions.map((q, qi) => (
        <div key={q.questionId} className="mb-5">
          <p className="text-[10px] font-bold text-[#404040] uppercase tracking-widest mb-1">
            From: {q.lessonTitle}
          </p>
          <p className="text-sm font-medium text-[#000000] leading-snug mb-2">
            {q.prompt}
          </p>
          <div className="space-y-1.5">
            {q.options.map((opt) => {
              const isSelected = answers[q.questionId] === opt;
              const isRight = opt === q.correctAnswer;
              let style =
                "border border-[#E8DDD4] bg-white text-[#000000] hover:border-[#2294BD]/50";
              if (submitted) {
                if (isRight)
                  style =
                    "border-2 border-[#2294BD] bg-[#2294BD]/10 text-[#000000]";
                else if (isSelected && !isRight)
                  style =
                    "border-2 border-[#D9532B] bg-[#D9532B]/8 text-[#D9532B]";
                else
                  style =
                    "border border-[#E8DDD4] bg-[#F9F6F3] text-[#9A918A] cursor-default";
              } else if (isSelected) {
                style =
                  "border-2 border-[#2294BD] bg-[#2294BD]/8 text-[#000000]";
              }
              return (
                <button
                  key={`${q.questionId}-${qi}-${opt}`}
                  disabled={submitted}
                  onClick={() =>
                    setAnswers((prev) => ({
                      ...prev,
                      [q.questionId]: opt,
                    }))
                  }
                  className={`w-full text-left rounded-lg px-3 py-2 text-sm transition-colors ${style}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {!submitted && (
        <div className="flex gap-2">
          <button
            disabled={!allAnswered}
            onClick={handleSubmit}
            className="text-sm font-medium text-white bg-[#000000] hover:bg-[#222] disabled:opacity-30 disabled:cursor-not-allowed px-4 py-2 rounded-xl transition-colors"
          >
            Check
          </button>
          <button
            onClick={onSkip}
            className="text-sm font-medium text-[#404040] hover:text-[#000000] px-4 py-2 rounded-xl transition-colors"
          >
            Skip check
          </button>
        </div>
      )}

      {submitted && (
        <div
          className={`rounded-xl px-4 py-3 text-sm font-medium ${
            score === questions.length
              ? "bg-[#2294BD]/10 text-[#2294BD] border border-[#2294BD]/20"
              : "bg-[#D9532B]/8 text-[#D9532B] border border-[#D9532B]/20"
          }`}
        >
          {score === questions.length ? (
            "✓ All correct — proceeding to lesson."
          ) : (
            <div>
              <p>
                {score}/{questions.length} correct — consider reviewing
                prerequisites first.
              </p>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={onPass}
                  className="text-xs font-medium text-[#404040] bg-white border border-[#E8DDD4] px-3 py-1.5 rounded-lg hover:bg-[#F0E6DD] transition-colors"
                >
                  Continue anyway
                </button>
                <a
                  href="/modules"
                  className="text-xs font-medium text-[#2294BD] bg-[#2294BD]/10 px-3 py-1.5 rounded-lg hover:bg-[#2294BD]/18 transition-colors"
                >
                  Go to modules
                </a>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── Quiz attempt history ─────────────────────────────────────────────────────

function QuizHistory({ attempts }: { attempts: QuizAttempt[] }) {
  if (attempts.length <= 1) return null;
  return (
    <div className="mb-4">
      <p className="text-[10px] font-bold text-[#404040] uppercase tracking-widest mb-2">
        Previous attempts
      </p>
      <div className="flex gap-2 flex-wrap">
        {attempts.map((a) => (
          <div
            key={a.attemptNumber}
            className="text-xs bg-[#F0E6DD] text-[#404040] px-2.5 py-1.5 rounded-lg"
          >
            <span className="font-medium">#{a.attemptNumber}</span>{" "}
            {Math.round(a.score * 100)}% · {a.confidence}/5 conf ·{" "}
            {new Date(a.completedAt).toLocaleDateString()}
          </div>
        ))}
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
  const currentModule = getModuleById(MODULE_ID);
  const lesson = currentModule?.lessons.find((l) => l.lessonId === lessonId);

  // Spaced quiz injection — pick 2-3 questions from old completed lessons
  const [injectedQuestions] = useState<InjectedQuestion[]>(() =>
    pickInjectedQuestions(lessonId, 3)
  );
  const [injectedAnswers, setInjectedAnswers] = useState<Record<string, string>>({});
  const [injectedSubmitted, setInjectedSubmitted] = useState(false);

  // MC answers: questionId → selected option
  const [mcAnswers, setMcAnswers] = useState<Record<string, string>>({});
  // SR states: questionId → state + text
  const [srStates, setSrStates] = useState<
    Record<string, { state: SRState; value: string }>
  >({});
  // Whether MC section has been submitted
  const [mcSubmitted, setMcSubmitted] = useState(false);
  // Initialize from localStorage
  const [initState] = useState(() => {
    if (typeof window === "undefined") return { confidence: null as number | null, saved: false, quizHistory: [] as QuizAttempt[], prereqPassed: false };
    const existing = getQuizResult(lessonId);
    const history = getQuizHistory(lessonId);

    // Auto-mark in-progress
    if (!existing) {
      setLessonStatus(MODULE_ID, lessonId, "in-progress");
    }

    // Check prereqs
    let prereqOk = false;
    if (!lesson || lesson.prerequisites.length === 0) {
      prereqOk = true;
    } else {
      const progress = getModuleProgress(MODULE_ID);
      const lessonProg = progress[lessonId];
      if (lessonProg?.status === "completed" || lessonProg?.status === "in-progress") {
        prereqOk = true;
      }
      const noneComplete = lesson.prerequisites.some((p) => !progress[p] || progress[p].status === "not-started");
      if (!noneComplete) {
        // All prereqs at least started — show gate if lesson not started
      } else {
        prereqOk = true; // Some prereqs not done, auto-pass
      }
    }

    return {
      confidence: existing?.confidence ?? null,
      saved: !!existing,
      quizHistory: history,
      prereqPassed: prereqOk,
    };
  });

  // Confidence
  const [confidence, setConfidence] = useState<number | null>(initState.confidence);
  // Saved result
  const [saved, setSaved] = useState(initState.saved);
  // Quiz retake
  const [retaking, setRetaking] = useState(false);
  const [quizHistory, setQuizHistory] = useState<QuizAttempt[]>(initState.quizHistory);
  // Prereq gate
  const [prereqPassed, setPrereqPassed] = useState(initState.prereqPassed);
  // Resume position
  const blocksRef = useRef<HTMLDivElement>(null);
  const positionRestoredRef = useRef(false);

  // Restore scroll position
  useEffect(() => {
    if (positionRestoredRef.current) return;
    positionRestoredRef.current = true;
    const pos = getLessonPosition(lessonId);
    if (pos && pos.scrollY > 0) {
      setTimeout(() => {
        window.scrollTo({ top: pos.scrollY, behavior: "instant" as ScrollBehavior });
      }, 100);
    }
  }, [lessonId]);

  // Save scroll position periodically
  const savePosition = useCallback(() => {
    if (!blocksRef.current) return;
    const blocks = blocksRef.current.children;
    let blockIndex = 0;
    for (let i = 0; i < blocks.length; i++) {
      const rect = blocks[i].getBoundingClientRect();
      if (rect.top > 0) break;
      blockIndex = i;
    }
    saveLessonPosition(lessonId, blockIndex, window.scrollY);
  }, [lessonId]);

  useEffect(() => {
    const handleScroll = () => {
      // Debounce: save position on scroll end
      clearTimeout((window as unknown as Record<string, ReturnType<typeof setTimeout>>).__posTimer);
      (window as unknown as Record<string, ReturnType<typeof setTimeout>>).__posTimer = setTimeout(savePosition, 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [savePosition]);

  if (!content || !lesson) {
    return (
      <main className="min-h-screen bg-[#FBF7F3] flex items-center justify-center">
        <p className="text-sm text-[#404040]">Lesson not found.</p>
      </main>
    );
  }

  const lessons = currentModule?.lessons ?? [];
  const currentIndex = lessons.findIndex((l) => l.lessonId === lessonId);
  const nextLesson = currentIndex >= 0 && currentIndex < lessons.length - 1
    ? lessons[currentIndex + 1]
    : null;

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
    // Save as attempt in history + update latest
    const attempt = saveQuizAttempt(lessonId, result);
    setQuizHistory((prev) => [...prev, attempt]);
    setLessonStatus(MODULE_ID, lessonId, "completed");

    // Track wrong answers for drill mode
    const wrong: WrongAnswer[] = mcQuestions
      .filter((q) => mcAnswers[q.questionId] && mcAnswers[q.questionId] !== q.correctAnswer)
      .map((q) => ({
        lessonId,
        questionId: q.questionId,
        selectedAnswer: mcAnswers[q.questionId],
        attemptDate: new Date().toISOString(),
      }));
    if (wrong.length > 0) {
      recordWrongAnswers(wrong);
    }

    setSaved(true);
    setRetaking(false);
  }

  function handleRetake() {
    setMcAnswers({});
    setSrStates({});
    setMcSubmitted(false);
    setInjectedAnswers({});
    setInjectedSubmitted(false);
    setConfidence(null);
    setSaved(false);
    setRetaking(true);
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

  return (
    <main className="min-h-screen bg-[#FBF7F3]">
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
              Day {lesson.dayNumber} of {lessons.length}
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

        {/* Prereq gate */}
        {!prereqPassed && lesson.prerequisites.length > 0 && (
          <PrereqGate
            prereqIds={lesson.prerequisites}
            onPass={() => setPrereqPassed(true)}
            onSkip={() => setPrereqPassed(true)}
          />
        )}

        {/* Learning blocks */}
        <div className="mb-8" ref={blocksRef}>
          {content.blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>

        {/* Quiz */}
        <div className="rounded-2xl border border-[#E8DDD4] bg-white px-6 py-6 mb-4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-[10px] font-bold text-[#404040] uppercase tracking-widest mb-0.5">
                Check your understanding
              </h2>
              <p className="text-[15px] font-semibold text-[#000000]">Quiz</p>
            </div>
            <div className="flex items-center gap-2">
              {saved && !retaking && (
                <button
                  onClick={handleRetake}
                  className="text-xs text-[#404040] hover:text-[#2294BD] font-medium px-2.5 py-1 rounded-lg border border-[#E8DDD4] hover:border-[#2294BD]/50 transition-colors"
                >
                  Retake quiz
                </button>
              )}
              {saved && !retaking && (
                <span className="text-xs text-[#2294BD] bg-[#2294BD]/10 px-2.5 py-1 rounded-lg font-medium">
                  Completed
                </span>
              )}
              {retaking && (
                <span className="text-xs text-[#FAA51A] bg-[#FAA51A]/10 px-2.5 py-1 rounded-lg font-medium">
                  Attempt #{quizHistory.length + 1}
                </span>
              )}
            </div>
          </div>

          {/* Quiz attempt history */}
          <QuizHistory attempts={quizHistory} />

          {/* Spaced recall injection — questions from older lessons */}
          {injectedQuestions.length > 0 && (
            <div className="mb-6">
              <div className="rounded-xl border border-[#7C5CBF]/15 bg-[#7C5CBF]/[0.03] px-5 py-4">
                <p className="text-[10px] font-bold text-[#7C5CBF] uppercase tracking-widest mb-1">
                  Spaced recall
                </p>
                <p className="text-xs text-[#404040] mb-4">
                  These questions are from earlier lessons — quick retrieval practice to keep older material fresh.
                </p>
                {injectedQuestions.map((q) => (
                  <InjectedQuestionCard
                    key={q.questionId}
                    q={q}
                    submitted={injectedSubmitted}
                    selected={injectedAnswers[q.questionId] ?? null}
                    onSelect={(v) => {
                      if (!injectedSubmitted)
                        setInjectedAnswers((prev) => ({ ...prev, [q.questionId]: v }));
                    }}
                  />
                ))}
                {!injectedSubmitted && (
                  <button
                    disabled={!injectedQuestions.every((q) => injectedAnswers[q.questionId])}
                    onClick={() => setInjectedSubmitted(true)}
                    className="w-full rounded-xl bg-[#7C5CBF] text-white text-sm font-semibold py-2.5 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#6B4DAE] transition-colors"
                  >
                    Check recall
                  </button>
                )}
                {injectedSubmitted && (
                  <div className={`rounded-xl px-4 py-2.5 text-sm font-medium border ${
                    injectedQuestions.every((q) => injectedAnswers[q.questionId] === q.correctAnswer)
                      ? "bg-[#2294BD]/10 text-[#2294BD] border-[#2294BD]/20"
                      : "bg-[#FAA51A]/10 text-[#9B6A00] border-[#FAA51A]/20"
                  }`}>
                    {injectedQuestions.filter((q) => injectedAnswers[q.questionId] === q.correctAnswer).length}/{injectedQuestions.length} recalled from earlier lessons
                  </div>
                )}
              </div>
            </div>
          )}

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
              <div className="mt-3 rounded-xl bg-[#2294BD]/10 border border-[#2294BD]/20 px-4 py-3 flex items-center gap-2">
                <span className="text-[#2294BD] font-bold">✓</span>
                <span className="text-sm text-[#2294BD] font-medium">
                  Lesson complete — good work.
                </span>
                {nextLesson ? (
                  <a
                    href={`/lesson/${nextLesson.lessonId}`}
                    className="ml-auto text-xs text-[#2294BD] font-semibold hover:underline whitespace-nowrap"
                  >
                    Day {nextLesson.dayNumber} →
                  </a>
                ) : (
                  <a
                    href="/modules"
                    className="ml-auto text-xs text-[#2294BD] font-semibold hover:underline"
                  >
                    All done →
                  </a>
                )}
              </div>
            )}
          </>
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
