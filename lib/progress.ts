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

export function saveQuizResult(lessonId: string, result: QuizResult) {
  if (typeof window === "undefined") return;
  const all = loadQuiz();
  all[lessonId] = result;
  localStorage.setItem(QUIZ_KEY, JSON.stringify(all));
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
