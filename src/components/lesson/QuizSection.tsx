"use client";

import { useState } from "react";
import type { Question } from "@/types/content";

interface Props {
  questions: Question[];
  onComplete: (score: number) => void;
}

export default function QuizSection({ questions, onComplete }: Props) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const mcQuestions = questions.filter((q) => q.type === "multiple-choice");
  const shortQuestions = questions.filter((q) => q.type === "short-response");

  function handleSelect(questionId: string, option: string) {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  }

  function handleShortAnswer(questionId: string, value: string) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }

  function handleSubmit() {
    const correct = mcQuestions.filter((q) => {
      if (q.type !== "multiple-choice") return false;
      return answers[q.questionId] === q.correctAnswer;
    }).length;
    const total = mcQuestions.length;
    const s = total > 0 ? correct / total : 1;
    setScore(s);
    setSubmitted(true);
    onComplete(s);
  }

  const allMcAnswered = mcQuestions.every((q) => answers[q.questionId]);

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold">Quiz</h2>

      {questions.map((q, i) => (
        <div key={q.questionId} className="space-y-3">
          <p className="text-sm font-medium">
            <span className="text-black/40 mr-1">{i + 1}.</span> {q.prompt}
          </p>

          {q.type === "multiple-choice" && (
            <div className="space-y-2">
              {q.options.map((opt) => {
                const selected = answers[q.questionId] === opt;
                const isCorrect = submitted && opt === q.correctAnswer;
                const isWrong = submitted && selected && opt !== q.correctAnswer;
                return (
                  <button
                    key={opt}
                    onClick={() => handleSelect(q.questionId, opt)}
                    className={`w-full text-left text-sm px-3 py-2.5 rounded-lg border transition-colors ${
                      isCorrect
                        ? "bg-green-50 border-green-400 text-green-800"
                        : isWrong
                        ? "bg-red-50 border-red-400 text-red-800"
                        : selected
                        ? "bg-access/10 border-access text-access"
                        : "bg-white border-black/10 hover:border-black/25"
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          )}

          {q.type === "short-response" && (
            <div className="space-y-1">
              <textarea
                rows={3}
                placeholder="Write your response…"
                className="w-full text-sm border border-black/10 rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-access/30"
                onChange={(e) => handleShortAnswer(q.questionId, e.target.value)}
                disabled={submitted}
              />
              {q.type === "short-response" && submitted && q.guidance && (
                <p className="text-xs text-muted italic">Guidance: {q.guidance}</p>
              )}
            </div>
          )}
        </div>
      ))}

      {!submitted ? (
        <button
          onClick={handleSubmit}
          disabled={!allMcAnswered}
          className="btn-primary"
        >
          Submit quiz
        </button>
      ) : (
        <div className="card p-4">
          <p className="text-sm font-semibold">
            Score:{" "}
            <span className={score >= 0.8 ? "text-green-700" : score >= 0.5 ? "text-amber" : "text-rust"}>
              {Math.round(score * 100)}%
            </span>{" "}
            on multiple choice questions
          </p>
          <p className="text-xs text-muted mt-1">
            Review your short responses above for self-assessment.
          </p>
        </div>
      )}
    </div>
  );
}
