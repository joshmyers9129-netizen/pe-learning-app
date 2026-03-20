"use client";

import { useState } from "react";
import { MCQuestion } from "@/lib/types";
import { lessonContents } from "@/lib/lessonContent";
import { getModuleById } from "@/lib/modules";

const MODULE_ID = "pe-foundations-20";

export function PrereqGate({
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
    <div className="rounded-2xl border border-[#FAA51A]/30 bg-white p-5 mb-6" role="region" aria-label="Prerequisite knowledge check">
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
          <div className="space-y-1.5" role="radiogroup" aria-label={q.prompt}>
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
                  role="radio"
                  aria-checked={isSelected}
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
          role="status"
          className={`rounded-xl px-4 py-3 text-sm font-medium ${
            score === questions.length
              ? "bg-[#2294BD]/10 text-[#2294BD] border border-[#2294BD]/20"
              : "bg-[#D9532B]/8 text-[#D9532B] border border-[#D9532B]/20"
          }`}
        >
          {score === questions.length ? (
            <span><span aria-hidden="true">&#10003;</span> All correct — proceeding to lesson.</span>
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
