"use client";

import { useEffect, useState } from "react";
import {
  loadProgress,
  saveProgress,
  getDueReviewCards,
  getTopicLabel,
} from "@/lib/progress";
import { AppProgress, ReviewCard } from "@/types";

export default function ReviewPage() {
  const [progress, setProgress] = useState<AppProgress | null>(null);
  const [queue, setQueue] = useState<ReviewCard[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const p = loadProgress();
    setProgress(p);
    const due = getDueReviewCards(p);
    setQueue(due);
    if (due.length === 0) setDone(true);
  }, []);

  if (!progress) {
    return <div className="pt-8 text-sm text-gray-400">Loading…</div>;
  }

  const current = queue[currentIdx];

  function handleGrade(grade: "again" | "good" | "easy") {
    if (!current || !progress) return;

    const gradeMap = { again: 1, good: 3, easy: 5 };
    const g = gradeMap[grade];

    let newEase = current.easeFactor + (0.1 - (5 - g) * (0.08 + (5 - g) * 0.02));
    newEase = Math.max(1.3, newEase);
    const newInterval = g >= 3 ? Math.round(current.interval * newEase) : 1;
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + Math.max(1, newInterval));

    const updatedCard: ReviewCard = {
      ...current,
      easeFactor: newEase,
      interval: newInterval,
      dueAt: dueDate.toISOString(),
    };

    const updatedProgress: AppProgress = {
      ...progress,
      reviewCards: progress.reviewCards.map((c) =>
        c.cardId === current.cardId ? updatedCard : c
      ),
    };

    saveProgress(updatedProgress);
    setProgress(updatedProgress);
    setRevealed(false);

    if (currentIdx + 1 >= queue.length) {
      setDone(true);
    } else {
      setCurrentIdx((i) => i + 1);
    }
  }

  const typeLabel: Record<ReviewCard["type"], string> = {
    flashcard: "Flashcard",
    "mini-case": "Mini Case",
    reteach: "Reteach",
  };

  const typeBg: Record<ReviewCard["type"], string> = {
    flashcard: "bg-access",
    "mini-case": "bg-fast",
    reteach: "bg-rust",
  };

  return (
    <div className="space-y-5 pt-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Review</h1>
        {!done && (
          <span className="text-sm text-gray-500">
            {currentIdx + 1}/{queue.length}
          </span>
        )}
      </div>

      {done ? (
        <div className="text-center py-12 space-y-3">
          <div className="text-4xl">✓</div>
          <p className="font-semibold">All caught up!</p>
          <p className="text-sm text-gray-500">
            {queue.length === 0
              ? "No cards are due right now. Keep learning to build your queue."
              : `Reviewed ${queue.length} card${queue.length !== 1 ? "s" : ""}.`}
          </p>
        </div>
      ) : current ? (
        <>
          {/* Progress bar */}
          <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-access rounded-full transition-all"
              style={{ width: `${((currentIdx) / queue.length) * 100}%` }}
            />
          </div>

          {/* Card */}
          <div className="rounded-xl border border-gray-200 overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-2">
              <span
                className={`text-xs font-semibold text-white px-2 py-0.5 rounded-full ${typeBg[current.type]}`}
              >
                {typeLabel[current.type]}
              </span>
              <span className="text-xs text-gray-500">
                {getTopicLabel(current.topicId)}
              </span>
            </div>

            <div className="px-4 py-5">
              <p className="font-medium leading-snug">{current.prompt}</p>

              {!revealed ? (
                <button
                  onClick={() => setRevealed(true)}
                  className="mt-4 w-full border border-gray-200 text-sm font-medium py-2.5 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Show Answer
                </button>
              ) : (
                <>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {current.answer}
                    </p>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-2">
                    <button
                      onClick={() => handleGrade("again")}
                      className="py-2.5 rounded-xl border border-rust/40 bg-rust/5 text-rust text-sm font-semibold hover:bg-rust/10 transition-colors"
                    >
                      Again
                    </button>
                    <button
                      onClick={() => handleGrade("good")}
                      className="py-2.5 rounded-xl border border-access/40 bg-access/5 text-access text-sm font-semibold hover:bg-access/10 transition-colors"
                    >
                      Good
                    </button>
                    <button
                      onClick={() => handleGrade("easy")}
                      className="py-2.5 rounded-xl border border-green-500/40 bg-green-50 text-green-700 text-sm font-semibold hover:bg-green-100 transition-colors"
                    >
                      Easy
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Card info */}
          <p className="text-xs text-center text-gray-400">
            Interval: {current.interval}d · Ease: {current.easeFactor.toFixed(1)}
          </p>
        </>
      ) : null}
    </div>
  );
}
