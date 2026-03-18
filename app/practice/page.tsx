"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { getDefaultModule } from "@/lib/modules";
import { lessonContents } from "@/lib/lessonContent";
import {
  getModuleProgress,
  getAllWrongAnswers,
  removeWrongAnswer,
} from "@/lib/progress";
import { MCQuestion, ModuleProgress } from "@/lib/types";
import { topicLabel } from "@/lib/topics";

const MODULE_ID = "pe-foundations";

// ── Helpers ──────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getCompletedMCQuestions(progress: ModuleProgress) {
  const mod = getDefaultModule();
  const completedLessons = mod.lessons.filter(
    (l) => progress[l.lessonId]?.status === "completed"
  );
  const questions: (MCQuestion & { lessonId: string; dayNumber: number; topics: string[] })[] = [];
  for (const lesson of completedLessons) {
    const content = lessonContents.find((c) => c.lessonId === lesson.lessonId);
    if (!content) continue;
    for (const q of content.quiz) {
      if (q.type === "multiple-choice") {
        questions.push({
          ...q,
          lessonId: lesson.lessonId,
          dayNumber: lesson.dayNumber,
          topics: lesson.topics,
        });
      }
    }
  }
  return questions;
}

type PracticeQuestion = MCQuestion & {
  lessonId: string;
  dayNumber: number;
  topics: string[];
};

// ── MC Question Card ─────────────────────────────────────────────────────────

function PracticeQuestionCard({
  q,
  index,
  total,
  onAnswer,
}: {
  q: PracticeQuestion;
  index: number;
  total: number;
  onAnswer: (correct: boolean) => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSelect(opt: string) {
    if (submitted) return;
    setSelected(opt);
  }

  function handleSubmit() {
    if (!selected) return;
    setSubmitted(true);
    onAnswer(selected === q.correctAnswer);
  }

  const isCorrect = selected === q.correctAnswer;

  return (
    <div className="rounded-2xl border border-[#E8DDD4] bg-white px-6 py-5 mb-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-[#404040] uppercase tracking-widest">
            Q{index + 1}/{total}
          </span>
          <span className="text-[#D0C8C0]">·</span>
          <span className="text-xs text-[#404040]">Day {q.dayNumber}</span>
        </div>
        <div className="flex gap-1.5 flex-wrap justify-end">
          {q.topics.slice(0, 2).map((t) => (
            <span
              key={t}
              className="text-[10px] font-medium text-[#404040] bg-[#F0E6DD] px-1.5 py-0.5 rounded-full"
            >
              {topicLabel(t)}
            </span>
          ))}
        </div>
      </div>

      {/* Prompt */}
      <p className="text-[15px] font-medium text-[#000000] leading-snug mb-4">
        {q.prompt}
      </p>

      {/* Options */}
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
              onClick={() => handleSelect(opt)}
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

      {/* Submit / feedback */}
      {!submitted && (
        <button
          disabled={!selected}
          onClick={handleSubmit}
          className="w-full mt-4 rounded-xl bg-[#000000] text-white text-sm font-semibold py-3 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#222] transition-colors"
        >
          Check
        </button>
      )}

      {submitted && (
        <div
          className={`mt-3 rounded-xl px-4 py-2.5 text-sm font-medium flex items-center gap-2 ${
            isCorrect
              ? "bg-[#2294BD]/10 text-[#2294BD] border border-[#2294BD]/20"
              : "bg-[#D9532B]/8 text-[#D9532B] border border-[#D9532B]/20"
          }`}
        >
          {isCorrect ? "✓ Correct" : "✗ Incorrect — correct answer highlighted above"}
        </div>
      )}
    </div>
  );
}

// ── Mode selection ───────────────────────────────────────────────────────────

type PracticeMode = "select" | "mixed" | "drill";

export default function PracticePage() {
  const [mode, setMode] = useState<PracticeMode>("select");
  const [progress, setProgress] = useState<ModuleProgress>(() => {
    if (typeof window === "undefined") return {};
    return getModuleProgress(MODULE_ID);
  });
  const [questions, setQuestions] = useState<PracticeQuestion[]>([]);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [wrongCount, setWrongCount] = useState(() => {
    if (typeof window === "undefined") return 0;
    return getAllWrongAnswers().length;
  });
  const [sessionComplete, setSessionComplete] = useState(false);

  // Re-sync when returning to select mode
  function refreshData() {
    setProgress(getModuleProgress(MODULE_ID));
    setWrongCount(getAllWrongAnswers().length);
  }

  const allMC = useMemo(() => getCompletedMCQuestions(progress), [progress]);

  function startMixed(count: number) {
    const shuffled = shuffle(allMC).slice(0, count);
    setQuestions(shuffled);
    setScore({ correct: 0, total: 0 });
    setSessionComplete(false);
    setMode("mixed");
  }

  function startDrill() {
    const wrongAnswers = getAllWrongAnswers();
    const wrongIds = new Set(wrongAnswers.map((w) => w.questionId));
    const drillQs = allMC.filter((q) => wrongIds.has(q.questionId));
    setQuestions(shuffle(drillQs));
    setScore({ correct: 0, total: 0 });
    setSessionComplete(false);
    setMode("drill");
  }

  function handleAnswer(questionIndex: number, correct: boolean) {
    const q = questions[questionIndex];
    setScore((prev) => ({
      correct: prev.correct + (correct ? 1 : 0),
      total: prev.total + 1,
    }));

    // If answered correctly in drill mode, remove from wrong-answer list
    if (mode === "drill" && correct) {
      removeWrongAnswer(q.lessonId, q.questionId);
    }

    if (questionIndex === questions.length - 1) {
      setSessionComplete(true);
    }
  }

  if (mode === "select") {
    const completedCount = Object.values(progress).filter((p) => p.status === "completed").length;

    return (
      <main className="min-h-screen bg-[#FBF7F3]">
        <div className="max-w-2xl mx-auto px-4 py-6 pb-24">
          <div className="mb-5">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#404040] mb-1">
              Practice
            </h2>
            <h1 className="text-2xl font-bold text-[#000000]">Active recall</h1>
          </div>

          {completedCount === 0 ? (
            <div className="rounded-2xl border border-[#E8DDD4] bg-white px-6 py-10 text-center">
              <p className="text-base font-semibold text-[#000000] mb-2">No lessons completed yet</p>
              <p className="text-sm text-[#404040] mb-4">
                Complete at least one lesson to unlock practice mode.
              </p>
              <Link
                href="/modules"
                className="inline-block text-sm font-medium text-[#2294BD] bg-[#2294BD]/10 hover:bg-[#2294BD]/18 px-4 py-2 rounded-xl transition-colors"
              >
                Go to Modules →
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Mixed quiz */}
              <div className="rounded-2xl border border-[#2294BD]/20 bg-white p-5 shadow-sm">
                <p className="text-xs font-bold text-[#2294BD] uppercase tracking-widest mb-1">
                  Cumulative Quiz
                </p>
                <p className="text-[15px] font-semibold text-[#000000] mb-2">
                  Mixed questions from all completed lessons
                </p>
                <p className="text-sm text-[#404040] mb-4">
                  Interleaved practice across topics — proven to improve long-term retention.
                  {allMC.length > 0 && (
                    <span className="text-[#2294BD]"> {allMC.length} questions available.</span>
                  )}
                </p>
                <div className="flex gap-2">
                  {[5, 10, 20].map((n) => (
                    <button
                      key={n}
                      disabled={allMC.length < n}
                      onClick={() => startMixed(n)}
                      className="text-sm font-medium text-[#2294BD] bg-[#2294BD]/10 hover:bg-[#2294BD]/18 disabled:opacity-30 disabled:cursor-not-allowed px-4 py-2 rounded-xl transition-colors"
                    >
                      {n} questions
                    </button>
                  ))}
                  {allMC.length > 0 && allMC.length < 5 && (
                    <button
                      onClick={() => startMixed(allMC.length)}
                      className="text-sm font-medium text-[#2294BD] bg-[#2294BD]/10 hover:bg-[#2294BD]/18 px-4 py-2 rounded-xl transition-colors"
                    >
                      All {allMC.length}
                    </button>
                  )}
                </div>
              </div>

              {/* Wrong-answer drill */}
              <div className="rounded-2xl border border-[#D9532B]/20 bg-white p-5 shadow-sm">
                <p className="text-xs font-bold text-[#D9532B] uppercase tracking-widest mb-1">
                  Wrong-Answer Drill
                </p>
                <p className="text-[15px] font-semibold text-[#000000] mb-2">
                  Target your weakest questions
                </p>
                <p className="text-sm text-[#404040] mb-4">
                  Every MC question you&apos;ve gotten wrong is collected here. Get them right to clear them from the list.
                </p>
                {wrongCount > 0 ? (
                  <button
                    onClick={startDrill}
                    className="text-sm font-medium text-[#D9532B] bg-[#D9532B]/10 hover:bg-[#D9532B]/18 px-4 py-2 rounded-xl transition-colors"
                  >
                    Drill {wrongCount} question{wrongCount !== 1 ? "s" : ""}
                  </button>
                ) : (
                  <p className="text-sm text-[#2294BD] font-medium">
                    ✓ No wrong answers — keep it up.
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
    );
  }

  // ── Active quiz session ──────────────────────────────────────────────────────

  return (
    <main className="min-h-screen bg-[#FBF7F3]">
      <div className="max-w-2xl mx-auto px-4 py-6 pb-24">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-[#404040] mb-1">
              {mode === "mixed" ? "Cumulative Quiz" : "Wrong-Answer Drill"}
            </h2>
            <p className="text-xs text-[#404040]">
              {score.total}/{questions.length} answered
            </p>
          </div>
          <button
            onClick={() => { refreshData(); setMode("select"); }}
            className="text-xs text-[#404040] hover:text-[#D9532B] font-medium px-3 py-1.5 rounded-lg hover:bg-[#D9532B]/8 transition-colors"
          >
            End session
          </button>
        </div>

        {/* Progress bar */}
        <div className="h-1.5 rounded-full bg-[#D0C8C0] overflow-hidden mb-5">
          <div
            className="h-full rounded-full bg-[#2294BD] transition-all duration-500"
            style={{ width: `${(score.total / questions.length) * 100}%` }}
          />
        </div>

        {/* Questions */}
        {questions.map((q, i) => (
          <PracticeQuestionCard
            key={q.questionId}
            q={q}
            index={i}
            total={questions.length}
            onAnswer={(correct) => handleAnswer(i, correct)}
          />
        ))}

        {/* Session summary */}
        {sessionComplete && (
          <div className="rounded-2xl border border-[#2294BD]/20 bg-white p-5 text-center">
            <p className="text-3xl font-bold text-[#2294BD] mb-2">
              {score.correct}/{score.total}
            </p>
            <p className="text-sm text-[#404040] mb-4">
              {score.correct === score.total
                ? "Perfect score — strong recall across topics."
                : score.correct / score.total >= 0.7
                ? "Good work. Review the ones you missed."
                : "Some gaps to close. Consider reviewing those lessons."}
            </p>
            <div className="flex gap-2 justify-center">
              <button
                onClick={() => { refreshData(); setMode("select"); }}
                className="text-sm font-medium text-[#404040] bg-[#F0E6DD] hover:bg-[#E8DDD4] px-4 py-2 rounded-xl transition-colors"
              >
                Back to practice
              </button>
              {mode === "mixed" && (
                <button
                  onClick={() => startMixed(questions.length)}
                  className="text-sm font-medium text-[#2294BD] bg-[#2294BD]/10 hover:bg-[#2294BD]/18 px-4 py-2 rounded-xl transition-colors"
                >
                  Try again
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
