"use client";

import { LessonProgress, ModuleProgress, QuizResult } from "./types";

const STORAGE_KEY = "pe-app-progress";

function loadAll(): Record<string, ModuleProgress> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveAll(data: Record<string, ModuleProgress>) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function getModuleProgress(moduleId: string): ModuleProgress {
  return loadAll()[moduleId] ?? {};
}

export function getLessonProgress(
  moduleId: string,
  lessonId: string
): LessonProgress {
  return getModuleProgress(moduleId)[lessonId] ?? { status: "not-started" };
}

const QUIZ_KEY = "pe-app-quiz";

function loadQuiz(): Record<string, QuizResult> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(QUIZ_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function getQuizResult(lessonId: string): QuizResult | undefined {
  return loadQuiz()[lessonId];
}

export function getAllQuizResults(): Record<string, QuizResult> {
  return loadQuiz();
}

export function saveQuizResult(lessonId: string, result: QuizResult) {
  if (typeof window === "undefined") return;
  const all = loadQuiz();
  all[lessonId] = result;
  localStorage.setItem(QUIZ_KEY, JSON.stringify(all));
}

const REVIEW_KEY = "pe-app-review";

function loadReview(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(REVIEW_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

// ── Card-level struggle tracking ──────────────────────────────────────────────

const STRUGGLES_KEY = "pe-app-card-struggles";

function loadStruggles(): Record<string, number> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STRUGGLES_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

/** Mark a card as dismissed for today. */
export function dismissCard(cardId: string) {
  if (typeof window === "undefined") return;
  const all = loadReview();
  all[cardId] = new Date().toISOString().slice(0, 10);
  localStorage.setItem(REVIEW_KEY, JSON.stringify(all));
}

/** Return the set of card IDs dismissed today. */
export function getDismissedToday(): Set<string> {
  const today = new Date().toISOString().slice(0, 10);
  const all = loadReview();
  return new Set(
    Object.entries(all)
      .filter(([, date]) => date === today)
      .map(([id]) => id)
  );
}

export function getCardStruggleCounts(): Record<string, number> {
  return loadStruggles();
}

export function recordCardStruggle(cardId: string) {
  if (typeof window === "undefined") return;
  const all = loadStruggles();
  all[cardId] = (all[cardId] ?? 0) + 1;
  localStorage.setItem(STRUGGLES_KEY, JSON.stringify(all));
}

export function setLessonStatus(
  moduleId: string,
  lessonId: string,
  status: LessonProgress["status"]
) {
  const all = loadAll();
  const module = all[moduleId] ?? {};
  const existing = module[lessonId] ?? { status: "not-started" };
  module[lessonId] = {
    ...existing,
    status,
    ...(status === "in-progress" && !existing.startedAt
      ? { startedAt: new Date().toISOString() }
      : {}),
    ...(status === "completed"
      ? { completedAt: new Date().toISOString() }
      : {}),
  };
  all[moduleId] = module;
  saveAll(all);
}
