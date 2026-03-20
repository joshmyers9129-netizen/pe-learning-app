import { describe, it, expect, beforeEach, vi } from "vitest";

// Mock localStorage
const store: Record<string, string> = {};
const localStorageMock = {
  getItem: vi.fn((key: string) => store[key] ?? null),
  setItem: vi.fn((key: string, value: string) => { store[key] = value; }),
  removeItem: vi.fn((key: string) => { delete store[key]; }),
  clear: vi.fn(() => { for (const k in store) delete store[k]; }),
  get length() { return Object.keys(store).length; },
  key: vi.fn((i: number) => Object.keys(store)[i] ?? null),
};
Object.defineProperty(globalThis, "localStorage", { value: localStorageMock });
Object.defineProperty(globalThis, "window", { value: globalThis });

const {
  getModuleProgress,
  getLessonProgress,
  setLessonStatus,
  getQuizResult,
  saveQuizResult,
  getAllQuizResults,
  dismissCard,
  getDismissedToday,
  recordCardStruggle,
  getCardStruggleCounts,
  getQuizHistory,
  saveQuizAttempt,
  getAllWrongAnswers,
  recordWrongAnswers,
  removeWrongAnswer,
  saveLessonPosition,
  getLessonPosition,
} = await import("@/lib/progress");

describe("progress module", () => {
  beforeEach(() => {
    localStorageMock.clear();
    vi.clearAllMocks();
  });

  describe("module/lesson progress", () => {
    it("returns empty progress for unknown module", () => {
      expect(getModuleProgress("unknown")).toEqual({});
    });

    it("returns not-started for unknown lesson", () => {
      expect(getLessonProgress("mod", "lesson")).toEqual({ status: "not-started" });
    });

    it("sets lesson to in-progress with startedAt", () => {
      setLessonStatus("mod", "lesson-1", "in-progress");
      const progress = getLessonProgress("mod", "lesson-1");
      expect(progress.status).toBe("in-progress");
      expect(progress.startedAt).toBeTruthy();
    });

    it("sets lesson to completed with completedAt", () => {
      setLessonStatus("mod", "lesson-1", "in-progress");
      setLessonStatus("mod", "lesson-1", "completed");
      const progress = getLessonProgress("mod", "lesson-1");
      expect(progress.status).toBe("completed");
      expect(progress.completedAt).toBeTruthy();
      // startedAt preserved from in-progress
      expect(progress.startedAt).toBeTruthy();
    });
  });

  describe("quiz results", () => {
    it("returns undefined for no quiz result", () => {
      expect(getQuizResult("lesson-1")).toBeUndefined();
    });

    it("saves and retrieves quiz results", () => {
      const result = { score: 0.75, confidence: 4, completedAt: "2025-01-01" };
      saveQuizResult("lesson-1", result);
      expect(getQuizResult("lesson-1")).toEqual(result);
    });

    it("getAllQuizResults returns all saved results", () => {
      saveQuizResult("l1", { score: 1, confidence: 5, completedAt: "2025-01-01" });
      saveQuizResult("l2", { score: 0.5, confidence: 3, completedAt: "2025-01-02" });
      const all = getAllQuizResults();
      expect(Object.keys(all)).toHaveLength(2);
    });
  });

  describe("card dismiss tracking", () => {
    it("tracks dismissed cards for today", () => {
      dismissCard("card-1");
      const dismissed = getDismissedToday();
      expect(dismissed.has("card-1")).toBe(true);
    });
  });

  describe("struggle tracking", () => {
    it("increments struggle count", () => {
      recordCardStruggle("card-1");
      recordCardStruggle("card-1");
      const counts = getCardStruggleCounts();
      expect(counts["card-1"]).toBe(2);
    });
  });

  describe("quiz history", () => {
    it("returns empty history for unknown lesson", () => {
      expect(getQuizHistory("unknown")).toEqual([]);
    });

    it("saves attempts with incrementing attempt numbers", () => {
      const r1 = { score: 0.5, confidence: 3, completedAt: "2025-01-01" };
      const r2 = { score: 0.75, confidence: 4, completedAt: "2025-01-02" };
      const a1 = saveQuizAttempt("l1", r1);
      const a2 = saveQuizAttempt("l1", r2);
      expect(a1.attemptNumber).toBe(1);
      expect(a2.attemptNumber).toBe(2);
      expect(getQuizHistory("l1")).toHaveLength(2);
    });
  });

  describe("wrong answer tracking", () => {
    it("records and retrieves wrong answers", () => {
      recordWrongAnswers([{ lessonId: "l1", questionId: "q1", selectedAnswer: "A", attemptDate: "2025-01-01" }]);
      const all = getAllWrongAnswers();
      expect(all).toHaveLength(1);
      expect(all[0].questionId).toBe("q1");
    });

    it("deduplicates on re-record", () => {
      recordWrongAnswers([{ lessonId: "l1", questionId: "q1", selectedAnswer: "A", attemptDate: "2025-01-01" }]);
      recordWrongAnswers([{ lessonId: "l1", questionId: "q1", selectedAnswer: "B", attemptDate: "2025-01-02" }]);
      const all = getAllWrongAnswers();
      expect(all).toHaveLength(1);
      expect(all[0].selectedAnswer).toBe("B");
    });

    it("removes wrong answers", () => {
      recordWrongAnswers([{ lessonId: "l1", questionId: "q1", selectedAnswer: "A", attemptDate: "2025-01-01" }]);
      removeWrongAnswer("l1", "q1");
      expect(getAllWrongAnswers()).toHaveLength(0);
    });
  });

  describe("lesson position", () => {
    it("saves and retrieves scroll position", () => {
      saveLessonPosition("l1", 5, 1200);
      const pos = getLessonPosition("l1");
      expect(pos?.blockIndex).toBe(5);
      expect(pos?.scrollY).toBe(1200);
      expect(pos?.lessonId).toBe("l1");
    });

    it("returns undefined for unsaved position", () => {
      expect(getLessonPosition("unknown")).toBeUndefined();
    });
  });
});
