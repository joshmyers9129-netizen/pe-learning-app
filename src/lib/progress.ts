"use client";

import type {
  AppProgress,
  LessonProgress,
  ConfidenceLevel,
  ReviewCard,
  TopicMastery,
  Lesson,
} from "@/types/content";
import { buildReviewCards } from "@/lib/cards";

const STORAGE_KEY = "pe-app-progress";

// ─── Read / Write ─────────────────────────────────────────────────────────────

export function loadProgress(): AppProgress {
  if (typeof window === "undefined") return emptyProgress();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyProgress();
    return JSON.parse(raw) as AppProgress;
  } catch {
    return emptyProgress();
  }
}

export function saveProgress(progress: AppProgress): void {
  if (typeof window === "undefined") return;
  progress.lastUpdated = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function emptyProgress(): AppProgress {
  return {
    lessonProgress: {},
    topicMastery: {},
    reviewQueue: [],
    lastUpdated: new Date().toISOString(),
  };
}

// ─── Lesson completion ────────────────────────────────────────────────────────

export function completeLesson(
  moduleId: string,
  lessonId: string,
  quizScore: number,
  confidence: ConfidenceLevel,
  topics: string[]
): void {
  const progress = loadProgress();

  const key = `${moduleId}:${lessonId}`;
  progress.lessonProgress[key] = {
    lessonId,
    moduleId,
    completedAt: new Date().toISOString(),
    quizScore,
    confidence,
    topicsStudied: topics,
  };

  // Update topic mastery
  topics.forEach((topic) => {
    const existing = progress.topicMastery[topic] ?? {
      topic,
      correctCount: 0,
      totalCount: 0,
      lastStudied: new Date().toISOString(),
      weaknessScore: 0.5,
    };
    existing.totalCount += 1;
    existing.correctCount += quizScore >= 0.8 ? 1 : 0;
    existing.lastStudied = new Date().toISOString();
    existing.weaknessScore = computeWeaknessScore(existing, confidence, quizScore);
    progress.topicMastery[topic] = existing;
  });

  saveProgress(progress);
}

export function isLessonCompleted(moduleId: string, lessonId: string): boolean {
  const progress = loadProgress();
  return !!progress.lessonProgress[`${moduleId}:${lessonId}`];
}

export function getLessonProgress(
  moduleId: string,
  lessonId: string
): LessonProgress | null {
  const progress = loadProgress();
  return progress.lessonProgress[`${moduleId}:${lessonId}`] ?? null;
}

// ─── Topic mastery ────────────────────────────────────────────────────────────

function computeWeaknessScore(
  mastery: TopicMastery,
  confidence: ConfidenceLevel,
  quizScore: number
): number {
  const accuracyScore = mastery.totalCount > 0
    ? mastery.correctCount / mastery.totalCount
    : 0.5;
  const confidenceScore = (confidence - 1) / 4; // 0–1
  const recencyDays = daysSince(mastery.lastStudied);
  const recencyPenalty = Math.min(recencyDays / 30, 1); // fades after 30 days

  const strength = (accuracyScore * 0.4 + confidenceScore * 0.3 + (1 - recencyPenalty) * 0.3);
  return Math.max(0, Math.min(1, 1 - strength));
}

function daysSince(isoDate: string): number {
  const ms = Date.now() - new Date(isoDate).getTime();
  return ms / (1000 * 60 * 60 * 24);
}

// ─── Review queue ─────────────────────────────────────────────────────────────

/**
 * Generate and enqueue review cards for a completed lesson.
 * Skips any card whose ID already exists in the queue (dedup by cardId).
 */
export function queueLessonReviewCards(
  moduleId: string,
  lesson: Lesson,
  incorrectQuestionIds: string[],
  confidence: ConfidenceLevel,
  quizScore: number
): void {
  const progress = loadProgress();
  const existingCardIds = new Set(progress.reviewQueue.map((c) => c.cardId));

  const newCards = buildReviewCards(
    moduleId,
    lesson,
    incorrectQuestionIds,
    confidence,
    quizScore,
    existingCardIds
  );

  progress.reviewQueue.push(...newCards);
  saveProgress(progress);
}

/** Return all cards whose dueDate is now or in the past, sorted high→low priority. */
export function getDueReviewCards(): ReviewCard[] {
  const progress = loadProgress();
  const now = new Date().toISOString();
  return progress.reviewQueue
    .filter((c) => c.dueDate <= now)
    .sort((a, b) => b.priority - a.priority);
}

/** Remove a card permanently (user said "Got it"). */
export function dismissReviewCard(cardId: string): void {
  const progress = loadProgress();
  progress.reviewQueue = progress.reviewQueue.filter((c) => c.cardId !== cardId);
  saveProgress(progress);
}

/** Reschedule a card for daysFromNow days, bumping its priority by 2. */
export function rescheduleReviewCard(cardId: string, daysFromNow: number): void {
  const progress = loadProgress();
  const card = progress.reviewQueue.find((c) => c.cardId === cardId);
  if (!card) return;

  const due = new Date();
  due.setDate(due.getDate() + daysFromNow);
  card.dueDate = due.toISOString();
  card.priority = Math.min(10, card.priority + 2);

  saveProgress(progress);
}

// ─── Summary stats ────────────────────────────────────────────────────────────

export function getCompletedLessonCount(moduleId: string): number {
  const progress = loadProgress();
  return Object.keys(progress.lessonProgress).filter((k) =>
    k.startsWith(`${moduleId}:`)
  ).length;
}

export function getWeakTopics(topN = 5): TopicMastery[] {
  const progress = loadProgress();
  return Object.values(progress.topicMastery)
    .sort((a, b) => b.weaknessScore - a.weaknessScore)
    .slice(0, topN);
}
