"use client";

import { useState } from "react";
import type { QuizQuestion } from "@/types/lesson";

interface Props {
  questions: QuizQuestion[];
  lessonId: string;
}

type Answers = Record<string, string>;
type Checked = Record<string, boolean>;

export default function Quiz({ questions, lessonId }: Props) {
  const [answers, setAnswers] = useState<Answers>({});
  const [shortAnswers, setShortAnswers] = useState<Answers>({});
  const [checked, setChecked] = useState<Checked>({});
  const [submitted, setSubmitted] = useState(false);
  const [confidence, setConfidence] = useState<number | null>(null);

  const mcQuestions = questions.filter((q) => q.type === "multiple-choice");
  const shortQuestions = questions.filter((q) => q.type === "short-response");
  const allMcAnswered = mcQuestions.every((q) => answers[q.questionId]);
  const allShortAnswered = shortQuestions.every(
    (q) => shortAnswers[q.questionId]?.trim()
  );
  const canSubmit = allMcAnswered && allShortAnswered;

  function handleSelect(questionId: string, option: string) {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  }

  function handleShortAnswer(questionId: string, value: string) {
    if (submitted) return;
    setShortAnswers((prev) => ({ ...prev, [questionId]: value }));
  }

  function handleSubmit() {
    const newChecked: Checked = {};
    for (const q of mcQuestions) {
      newChecked[q.questionId] = answers[q.questionId] === q.correctAnswer;
    }
    setChecked(newChecked);
    setSubmitted(true);
  }

  function handleConfidence(level: number) {
    setConfidence(level);
    // Persist to localStorage
    try {
      const key = `confidence-${lessonId}`;
      localStorage.setItem(key, String(level));
    } catch {
      // ignore
    }
  }

  const correctCount = Object.values(checked).filter(Boolean).length;

  const confidenceLevels = [
    { value: 1, label: "Shaky", color: "border-[#D9532B] text-[#D9532B]", selected: "bg-[#D9532B] text-white border-[#D9532B]" },
    { value: 2, label: "Getting it", color: "border-[#FAA51A] text-[#404040]", selected: "bg-[#FAA51A] text-black border-[#FAA51A]" },
    { value: 3, label: "Solid", color: "border-[#2294BD] text-[#2294BD]", selected: "bg-[#2294BD] text-white border-[#2294BD]" },
  ];

  return (
    <section aria-labelledby="quiz-heading" className="space-y-4">
      <h2
        id="quiz-heading"
        className="text-[13px] font-semibold uppercase tracking-widest text-[#404040]"
      >
        Quiz
      </h2>

      <div className="space-y-4">
        {questions.map((q, qi) => {
          const isCorrect = checked[q.questionId];
          const isWrong =
            submitted &&
            q.type === "multiple-choice" &&
            !isCorrect;

          return (
            <div
              key={q.questionId}
              className="bg-white rounded-lg shadow-sm border border-[#F0E6DD] p-4 space-y-3"
            >
              <p className="text-[15px] font-medium text-[#000000]">
                <span className="text-[#404040] mr-1">{qi + 1}.</span>
                {q.prompt}
              </p>

              {q.type === "multiple-choice" && q.options && (
                <fieldset aria-label={q.prompt} className="space-y-2">
                  {q.options.map((opt) => {
                    const selected = answers[q.questionId] === opt;
                    const isThisCorrect = opt === q.correctAnswer;
                    let optionClass =
                      "flex items-start gap-2.5 p-3 rounded-md border cursor-pointer transition-colors text-[14px]";

                    if (!submitted) {
                      optionClass += selected
                        ? " border-[#2294BD] bg-[#EEF7FC] text-[#000000]"
                        : " border-[#F0E6DD] hover:border-[#2294BD] hover:bg-[#F9FDFF] text-[#000000]";
                    } else {
                      if (isThisCorrect) {
                        optionClass += " border-green-500 bg-green-50 text-green-900";
                      } else if (selected && !isThisCorrect) {
                        optionClass += " border-[#D9532B] bg-red-50 text-[#D9532B]";
                      } else {
                        optionClass += " border-[#F0E6DD] text-[#404040]";
                      }
                    }

                    return (
                      <label key={opt} className={optionClass}>
                        <input
                          type="radio"
                          name={q.questionId}
                          value={opt}
                          checked={selected}
                          onChange={() => handleSelect(q.questionId, opt)}
                          disabled={submitted}
                          className="mt-0.5 shrink-0 accent-[#2294BD]"
                        />
                        <span>{opt}</span>
                      </label>
                    );
                  })}
                </fieldset>
              )}

              {q.type === "short-response" && (
                <textarea
                  value={shortAnswers[q.questionId] ?? ""}
                  onChange={(e) => handleShortAnswer(q.questionId, e.target.value)}
                  disabled={submitted}
                  rows={3}
                  placeholder="Write your response…"
                  className="w-full rounded-md border border-[#F0E6DD] px-3 py-2 text-[14px] text-[#000000] placeholder:text-[#404040]/50 focus:outline-none focus:border-[#2294BD] focus:ring-1 focus:ring-[#2294BD] resize-none disabled:bg-[#FBF7F3] disabled:text-[#404040]"
                />
              )}
            </div>
          );
        })}
      </div>

      {!submitted ? (
        <button
          onClick={handleSubmit}
          disabled={!canSubmit}
          className="w-full py-3 rounded-lg bg-[#2294BD] text-white font-semibold text-[15px] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#1b7da3] transition-colors"
        >
          Check answers
        </button>
      ) : (
        <div className="space-y-4">
          {/* Score summary */}
          <div className="bg-[#F0E6DD] rounded-lg px-4 py-3 text-[15px]">
            <span className="font-semibold text-[#000000]">
              {correctCount} / {mcQuestions.length}
            </span>
            <span className="text-[#404040]"> multiple-choice correct</span>
          </div>

          {/* Confidence rating */}
          {confidence === null && (
            <div className="bg-white rounded-lg border border-[#F0E6DD] shadow-sm p-4 space-y-3">
              <p className="text-[14px] font-semibold text-[#000000]">
                How confident do you feel about this material?
              </p>
              <div className="grid grid-cols-3 gap-2">
                {confidenceLevels.map((lvl) => (
                  <button
                    key={lvl.value}
                    onClick={() => handleConfidence(lvl.value)}
                    className={`py-2.5 rounded-md border-2 text-[14px] font-semibold transition-colors ${lvl.color} hover:opacity-80`}
                  >
                    {lvl.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {confidence !== null && (
            <div className="bg-white rounded-lg border border-[#F0E6DD] shadow-sm px-4 py-3">
              <p className="text-[14px] text-[#404040]">
                Confidence recorded:{" "}
                <span className="font-semibold text-[#000000]">
                  {confidenceLevels.find((l) => l.value === confidence)?.label}
                </span>
              </p>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
