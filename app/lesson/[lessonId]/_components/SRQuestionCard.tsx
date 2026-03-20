"use client";

import { useState } from "react";
import { SRQuestion } from "@/lib/types";

type SRState = "unanswered" | "submitted";

type EvalResult = {
  score: number;
  verdict: string;
  strengths: string[];
  gaps: string[];
  improvedAnswer: string;
  confidence: "low" | "medium" | "high";
};

export function SRQuestionCard({
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

      <label className="sr-only" htmlFor={`sr-${q.questionId}`}>
        Your answer to: {q.prompt}
      </label>
      <textarea
        id={`sr-${q.questionId}`}
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
              aria-busy={feedbackLoading}
              className="mt-2 text-sm font-medium text-[#7C5CBF] bg-[#7C5CBF]/10 hover:bg-[#7C5CBF]/18 disabled:opacity-40 disabled:cursor-not-allowed px-4 py-2 rounded-xl transition-colors"
            >
              {feedbackLoading ? "Getting feedback…" : "Get feedback"}
            </button>
          )}

          {feedbackError && (
            <p className="mt-2 text-sm text-[#D9532B]" role="alert">{feedbackError}</p>
          )}

          {feedback && (
            <div className="mt-3 rounded-xl border border-[#7C5CBF]/20 bg-[#7C5CBF]/5 px-5 py-4 space-y-3" role="region" aria-label="AI feedback on your answer">
              <div className="flex items-center gap-3">
                <span className={`text-2xl font-bold ${scoreColor}`} aria-label={`Score: ${feedback.score} out of 5`}>
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
                        <span className="text-[#2A9D60] flex-shrink-0" aria-hidden="true">+</span>
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
                        <span className="text-[#D9532B] flex-shrink-0" aria-hidden="true">–</span>
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

export type { SRState };
