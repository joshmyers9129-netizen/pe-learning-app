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

// Import after mocking
const { updateSRS, getSRSState, getAllSRSStates } = await import("@/lib/progress");

describe("SM-2 SRS algorithm", () => {
  beforeEach(() => {
    localStorageMock.clear();
    vi.clearAllMocks();
  });

  it("creates a new card state on first review", () => {
    const state = updateSRS("card-1", 4);
    expect(state.cardId).toBe("card-1");
    expect(state.repetitions).toBe(1);
    expect(state.interval).toBe(1);
    expect(state.easeFactor).toBeGreaterThanOrEqual(1.3);
    expect(state.nextReviewDate).toBeTruthy();
  });

  it("resets on failure (quality < 3)", () => {
    // First successful review
    updateSRS("card-2", 5);
    updateSRS("card-2", 4);
    const state = updateSRS("card-2", 1); // fail
    expect(state.repetitions).toBe(0);
    expect(state.interval).toBe(1);
  });

  it("increases interval on consecutive successes", () => {
    const s1 = updateSRS("card-3", 4); // rep 1, interval 1
    expect(s1.interval).toBe(1);
    const s2 = updateSRS("card-3", 4); // rep 2, interval 3
    expect(s2.interval).toBe(3);
    const s3 = updateSRS("card-3", 4); // rep 3, interval = round(3 * easeFactor)
    expect(s3.interval).toBeGreaterThan(3);
  });

  it("never lets ease factor drop below 1.3", () => {
    // Repeated low-quality reviews
    for (let i = 0; i < 10; i++) {
      updateSRS("card-4", 3); // hard
    }
    const state = getSRSState("card-4");
    expect(state!.easeFactor).toBeGreaterThanOrEqual(1.3);
  });

  it("increases ease factor with quality 5", () => {
    const s1 = updateSRS("card-5", 5);
    const initialEase = s1.easeFactor;
    const s2 = updateSRS("card-5", 5);
    expect(s2.easeFactor).toBeGreaterThan(initialEase);
  });

  it("persists state to localStorage", () => {
    updateSRS("card-6", 4);
    const all = getAllSRSStates();
    expect(all["card-6"]).toBeDefined();
    expect(all["card-6"].cardId).toBe("card-6");
  });

  it("sets next review date in the future", () => {
    const state = updateSRS("card-7", 4);
    const today = new Date().toISOString().slice(0, 10);
    expect(state.nextReviewDate).toBeTruthy();
    expect(state.nextReviewDate >= today).toBe(true);
  });
});
