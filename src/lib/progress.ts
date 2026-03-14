"use client";

import { AppProgress, LessonProgress, TopicMastery, ReviewCard } from "@/types";
import { allLessons } from "@/data/lessons";
import { seedReviewCards } from "@/data/reviewCards";

const STORAGE_KEY = "pe-app-progress";

function emptyProgress(): AppProgress {
  return {
    lessonProgress: {},
    topicMastery: {},
    reviewCards: [],
    lastUpdated: new Date().toISOString(),
  };
}

export function loadProgress(): AppProgress {
  if (typeof window === "undefined") return emptyProgress();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return initializeReviewCards(emptyProgress());
    const parsed = JSON.parse(raw) as AppProgress;
    // Ensure review cards exist (for existing users)
    if (!parsed.reviewCards || parsed.reviewCards.length === 0) {
      return initializeReviewCards(parsed);
    }
    return parsed;
  } catch {
    return emptyProgress();
  }
}

function initializeReviewCards(progress: AppProgress): AppProgress {
  const now = new Date();
  const cards: ReviewCard[] = seedReviewCards.map((seed, idx) => {
    const dueDate = new Date(now);
    dueDate.setDate(dueDate.getDate() + idx); // stagger initial due dates
    return {
      ...seed,
      dueAt: dueDate.toISOString(),
      easeFactor: 2.5,
      interval: 1,
    };
  });
  return { ...progress, reviewCards: cards };
}

export function saveProgress(progress: AppProgress): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ ...progress, lastUpdated: new Date().toISOString() })
  );
}

export function completeLesson(
  lessonId: string,
  quizAnswers: Record<string, string>,
  confidenceRating: number
): AppProgress {
  const progress = loadProgress();
  const lesson = allLessons.find((l) => l.lessonId === lessonId);
  if (!lesson) return progress;

  // Score quiz (only count multiple-choice questions)
  const mcQuestions = lesson.quiz.filter((q) => q.type === "multiple-choice");
  let correct = 0;
  for (const q of mcQuestions) {
    if (quizAnswers[q.questionId] === q.correctAnswer) correct++;
  }
  const quizScore = mcQuestions.length > 0 ? correct / mcQuestions.length : 1;

  const lessonRecord: LessonProgress = {
    lessonId,
    completedAt: new Date().toISOString(),
    quizAnswers,
    quizScore,
    confidenceRating,
  };

  // Update topic mastery for each topic in the lesson
  const updatedMastery = { ...progress.topicMastery };
  for (const topicId of lesson.topics) {
    const existing = updatedMastery[topicId];
    const newScore = computeTopicScore(quizScore, confidenceRating, existing);
    updatedMastery[topicId] = {
      topicId,
      score: newScore,
      lastUpdated: new Date().toISOString(),
      lessonsCount: (existing?.lessonsCount ?? 0) + 1,
    };
  }

  // Update review card due dates for this lesson's cards
  const updatedCards = progress.reviewCards.map((card) => {
    if (card.lessonId !== lessonId) return card;
    return scheduleCard(card, quizScore, confidenceRating);
  });

  const updated: AppProgress = {
    ...progress,
    lessonProgress: {
      ...progress.lessonProgress,
      [lessonId]: lessonRecord,
    },
    topicMastery: updatedMastery,
    reviewCards: updatedCards,
  };

  saveProgress(updated);
  return updated;
}

function computeTopicScore(
  quizScore: number,
  confidence: number, // 1-5
  existing?: TopicMastery
): number {
  const normalizedConfidence = (confidence - 1) / 4; // 0-1
  const rawScore = quizScore * 0.6 + normalizedConfidence * 0.4;
  if (!existing) return rawScore;
  // Weighted blend: 70% new, 30% history
  return rawScore * 0.7 + existing.score * 0.3;
}

function scheduleCard(
  card: ReviewCard,
  quizScore: number,
  confidence: number
): ReviewCard {
  // Simple SM-2 inspired scheduling
  const grade = Math.round(quizScore * 3 + ((confidence - 1) / 4) * 2); // 0-5
  let newEase = card.easeFactor + (0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02));
  newEase = Math.max(1.3, newEase);
  const newInterval = grade >= 3 ? Math.round(card.interval * newEase) : 1;
  const dueDate = new Date();
  dueDate.setDate(dueDate.getDate() + Math.max(1, newInterval));
  return {
    ...card,
    easeFactor: newEase,
    interval: newInterval,
    dueAt: dueDate.toISOString(),
  };
}

// ─── Derived stats ──────────────────────────────────────────────────────────

export function getDueReviewCards(progress: AppProgress): ReviewCard[] {
  const now = new Date();
  return progress.reviewCards.filter((c) => new Date(c.dueAt) <= now);
}

export function getCompletedLessons(progress: AppProgress): string[] {
  return Object.keys(progress.lessonProgress);
}

export function getNextLesson(progress: AppProgress): string | null {
  const completed = new Set(getCompletedLessons(progress));
  const next = allLessons.find((l) => !completed.has(l.lessonId));
  return next?.lessonId ?? null;
}

export function getWeakestTopics(
  progress: AppProgress,
  count = 3
): TopicMastery[] {
  return Object.values(progress.topicMastery)
    .sort((a, b) => a.score - b.score)
    .slice(0, count);
}

export function getAllTopicsSorted(
  progress: AppProgress
): TopicMastery[] {
  return Object.values(progress.topicMastery).sort(
    (a, b) => a.score - b.score
  );
}

export function getAverageConfidence(progress: AppProgress): number | null {
  const records = Object.values(progress.lessonProgress);
  if (records.length === 0) return null;
  const sum = records.reduce((acc, r) => acc + r.confidenceRating, 0);
  return sum / records.length;
}

export function getModuleProgressSummary(
  progress: AppProgress
): { completed: number; total: number; pct: number } {
  const completed = getCompletedLessons(progress).length;
  const total = allLessons.length;
  const pct = Math.round((completed / total) * 100);
  return { completed, total, pct };
}

export function getTopicLabel(topicId: string): string {
  const labels: Record<string, string> = {
    "pe-basics": "PE Basics",
    "fund-structure": "Fund Structure",
    "capital-flow": "Capital Flow",
    "j-curve": "J-Curve",
    "capital-pacing": "Capital Pacing",
    "cash-flows": "Cash Flows",
    irr: "IRR",
    tvpi: "TVPI",
    dpi: "DPI",
    rvpi: "RVPI",
    "performance-metrics": "Performance Metrics",
    fees: "Fees",
    carry: "Carried Interest",
    "hurdle-rate": "Hurdle Rate",
    waterfall: "Distribution Waterfall",
    "due-diligence": "Due Diligence",
    "manager-selection": "Manager Selection",
    "track-record": "Track Record",
    lbo: "LBO Mechanics",
    "debt-structure": "Debt Structure",
    buyout: "Buyout Strategy",
    "growth-equity": "Growth Equity",
    venture: "Venture Capital",
    "strategy-comparison": "Strategy Comparison",
    "value-creation": "Value Creation",
    operations: "Operations",
    "portfolio-management": "Portfolio Management",
    lpa: "LP Agreement",
    governance: "Governance",
    "lp-rights": "LP Rights",
    secondaries: "Secondaries",
    liquidity: "Liquidity",
    "gp-led": "GP-Led Transactions",
    "co-investment": "Co-Investment",
    "deal-flow": "Deal Flow",
    concentration: "Concentration Risk",
    "portfolio-construction": "Portfolio Construction",
    allocation: "Allocation",
    diversification: "Diversification",
    benchmarking: "Benchmarking",
    pme: "PME",
    "performance-attribution": "Attribution",
    esg: "ESG",
    impact: "Impact Investing",
    sustainability: "Sustainability",
    "gp-lp": "GP/LP Dynamics",
    alignment: "Alignment",
    reporting: "Reporting",
    "fund-of-funds": "Fund of Funds",
    credit: "Credit Strategies",
    mezzanine: "Mezzanine",
    "direct-lending": "Direct Lending",
    infrastructure: "Infrastructure",
    "real-assets": "Real Assets",
    "real-estate": "Real Estate",
    distressed: "Distressed",
    "special-situations": "Special Situations",
    turnaround: "Turnaround",
    framework: "Investment Framework",
    process: "Decision Process",
    "decision-making": "Decision Making",
  };
  return labels[topicId] ?? topicId;
}
