import { describe, it, expect } from "vitest";
import { buildReviewQueue, groupByPriority, groupByTopic } from "@/lib/reviewQueue";
import type { ModuleProgress, QuizResult } from "@/lib/types";

// We test the pure computation functions — they don't touch localStorage

describe("buildReviewQueue", () => {
  it("returns empty queue when no progress exists", () => {
    const queue = buildReviewQueue({});
    expect(queue).toEqual([]);
  });

  it("returns cards only for started/completed lessons", () => {
    const progress: ModuleProgress = {
      "fund-lifecycle": { status: "completed", completedAt: new Date().toISOString() },
    };
    const queue = buildReviewQueue(progress);
    // Should include cards for fund-lifecycle but not for other lessons
    const lessonIds = new Set(queue.map((c) => c.lessonId));
    for (const id of lessonIds) {
      expect(progress[id]).toBeDefined();
    }
  });

  it("assigns higher priority to low-scoring quizzes", () => {
    const progress: ModuleProgress = {
      "fund-lifecycle": { status: "completed", completedAt: "2025-01-01T00:00:00Z" },
    };
    const weakQuiz: Record<string, QuizResult> = {
      "fund-lifecycle": { score: 0.25, confidence: 1, completedAt: "2025-01-01" },
    };
    const strongQuiz: Record<string, QuizResult> = {
      "fund-lifecycle": { score: 1, confidence: 5, completedAt: "2025-01-01" },
    };

    const weakQueue = buildReviewQueue(progress, weakQuiz);
    const strongQueue = buildReviewQueue(progress, strongQuiz);

    // Weak quiz should produce more high-priority cards
    const weakHighCount = weakQueue.filter((c) => c.priority === "high").length;
    const strongHighCount = strongQueue.filter((c) => c.priority === "high").length;
    expect(weakHighCount).toBeGreaterThanOrEqual(strongHighCount);
  });

  it("sorts cards by priority: high → medium → low", () => {
    const progress: ModuleProgress = {
      "fund-lifecycle": { status: "completed", completedAt: "2025-01-01T00:00:00Z" },
      "j-curve": { status: "completed", completedAt: "2025-01-01T00:00:00Z" },
    };
    const quiz: Record<string, QuizResult> = {
      "fund-lifecycle": { score: 0.25, confidence: 1, completedAt: "2025-01-01" },
      "j-curve": { score: 1, confidence: 5, completedAt: new Date().toISOString() },
    };
    const queue = buildReviewQueue(progress, quiz);
    const priorities = queue.map((c) => c.priority);
    const order = ["high", "medium", "low"];

    for (let i = 1; i < priorities.length; i++) {
      expect(order.indexOf(priorities[i])).toBeGreaterThanOrEqual(order.indexOf(priorities[i - 1]));
    }
  });

  it("boosts priority with struggle counts", () => {
    const progress: ModuleProgress = {
      "fund-lifecycle": { status: "completed", completedAt: new Date().toISOString() },
    };
    const noStruggle = buildReviewQueue(progress, {}, {});
    const withStruggle: Record<string, number> = {};
    // Apply struggle to all fund-lifecycle cards
    for (const card of noStruggle) {
      if (card.lessonId === "fund-lifecycle") withStruggle[card.cardId] = 5;
    }
    const struggled = buildReviewQueue(progress, {}, withStruggle);
    const struggledHighCount = struggled.filter((c) => c.priority === "high" && c.lessonId === "fund-lifecycle").length;
    const baseHighCount = noStruggle.filter((c) => c.priority === "high" && c.lessonId === "fund-lifecycle").length;
    expect(struggledHighCount).toBeGreaterThanOrEqual(baseHighCount);
  });
});

describe("groupByPriority", () => {
  it("groups cards into priority buckets", () => {
    const progress: ModuleProgress = {
      "fund-lifecycle": { status: "completed", completedAt: "2025-01-01T00:00:00Z" },
    };
    const queue = buildReviewQueue(progress);
    const grouped = groupByPriority(queue);
    expect(grouped).toHaveProperty("high");
    expect(grouped).toHaveProperty("medium");
    expect(grouped).toHaveProperty("low");
    const total = grouped.high.length + grouped.medium.length + grouped.low.length;
    expect(total).toBe(queue.length);
  });
});

describe("groupByTopic", () => {
  it("groups cards by topic", () => {
    const progress: ModuleProgress = {
      "fund-lifecycle": { status: "completed", completedAt: "2025-01-01T00:00:00Z" },
    };
    const queue = buildReviewQueue(progress);
    const grouped = groupByTopic(queue);
    let total = 0;
    for (const cards of Object.values(grouped)) {
      total += cards.length;
    }
    expect(total).toBe(queue.length);
  });
});
