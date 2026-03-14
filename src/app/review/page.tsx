"use client";

import { useEffect, useState } from "react";
import {
  getDueReviewCards,
  dismissReviewCard,
  getWeakTopics,
  loadProgress,
} from "@/lib/progress";
import type { ReviewCard } from "@/types/content";

export default function ReviewPage() {
  const [cards, setCards] = useState<ReviewCard[]>([]);
  const [weakTopics, setWeakTopics] = useState<{ topic: string; weaknessScore: number }[]>([]);
  const [flipped, setFlipped] = useState<Set<string>>(new Set());
  const [completedCount, setCompletedCount] = useState(0);

  useEffect(() => {
    setCards(getDueReviewCards());
    setWeakTopics(getWeakTopics(5));
  }, []);

  function handleDismiss(cardId: string) {
    dismissReviewCard(cardId);
    setCards((prev) => prev.filter((c) => c.cardId !== cardId));
    setCompletedCount((n) => n + 1);
  }

  function toggleFlip(cardId: string) {
    setFlipped((prev) => {
      const next = new Set(prev);
      next.has(cardId) ? next.delete(cardId) : next.add(cardId);
      return next;
    });
  }

  const progress = typeof window !== "undefined" ? loadProgress() : null;
  const totalLessonsCompleted = progress
    ? Object.keys(progress.lessonProgress).length
    : 0;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">Review</h1>
        <p className="text-sm text-muted mt-1">
          Spaced repetition cards based on your weak topics and lesson history.
        </p>
      </div>

      {totalLessonsCompleted === 0 ? (
        <div className="card p-6 text-center">
          <p className="font-semibold mb-1">No review cards yet.</p>
          <p className="text-sm text-muted">
            Complete at least one lesson to generate review cards.
          </p>
        </div>
      ) : cards.length === 0 ? (
        <div className="card p-6 text-center">
          <p className="font-semibold mb-1">
            {completedCount > 0
              ? `You reviewed ${completedCount} card${completedCount > 1 ? "s" : ""} today.`
              : "No cards due for review right now."}
          </p>
          <p className="text-sm text-muted">Check back tomorrow for new cards.</p>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-sm text-muted">{cards.length} card{cards.length !== 1 ? "s" : ""} due</p>
          {cards.map((card) => {
            const isFlipped = flipped.has(card.cardId);
            return (
              <div key={card.cardId} className="card p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                    {card.type === "flashcard"
                      ? "Flashcard"
                      : card.type === "mini-case"
                      ? "Mini case"
                      : "Reteach"}
                  </span>
                </div>

                <p className="text-sm font-medium">{card.front}</p>

                {isFlipped && (
                  <p className="text-sm text-muted border-t border-black/10 pt-3">
                    {card.back}
                  </p>
                )}

                <div className="flex gap-2 flex-wrap">
                  <button
                    onClick={() => toggleFlip(card.cardId)}
                    className="btn-secondary text-xs"
                  >
                    {isFlipped ? "Hide answer" : "Show answer"}
                  </button>
                  {isFlipped && (
                    <button
                      onClick={() => handleDismiss(card.cardId)}
                      className="btn-primary text-xs"
                    >
                      Got it
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Weak topics */}
      {weakTopics.length > 0 && (
        <div>
          <h2 className="text-base font-semibold mb-3">Topics to reinforce</h2>
          <div className="space-y-2">
            {weakTopics.map((t) => (
              <div
                key={t.topic}
                className="card p-3 flex items-center justify-between"
              >
                <span className="text-sm font-medium capitalize">
                  {t.topic.replace(/-/g, " ")}
                </span>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-20 bg-black/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-rust rounded-full"
                      style={{ width: `${Math.round(t.weaknessScore * 100)}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted">
                    {Math.round(t.weaknessScore * 100)}% weak
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
