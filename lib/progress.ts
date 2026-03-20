import { LessonProgress, ModuleProgress, QuizResult, QuizAttempt, WrongAnswer, SRSCardState, LessonPosition } from "./types";

// ── Safe localStorage wrapper ────────────────────────────────────────────────

/**
 * Safely write to localStorage, catching quota-exceeded errors.
 * Returns `true` on success, `false` if the write failed.
 */
function safeSetItem(key: string, value: string): boolean {
  try {
    safeSetItem(key, value);
    return true;
  } catch (e) {
    if (
      e instanceof DOMException &&
      (e.code === 22 || e.code === 1014 || e.name === "QuotaExceededError")
    ) {
      console.error(
        `[pe-app] localStorage quota exceeded when writing "${key}". Data was NOT saved.`
      );
    } else {
      console.error(`[pe-app] localStorage write failed for "${key}":`, e);
    }
    return false;
  }
}

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
  safeSetItem(STORAGE_KEY, JSON.stringify(data));
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
  safeSetItem(QUIZ_KEY, JSON.stringify(all));
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
  safeSetItem(REVIEW_KEY, JSON.stringify(all));
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
  safeSetItem(STRUGGLES_KEY, JSON.stringify(all));
}

export function setLessonStatus(
  moduleId: string,
  lessonId: string,
  status: LessonProgress["status"]
) {
  const all = loadAll();
  const mod = all[moduleId] ?? {};
  const existing = mod[lessonId] ?? { status: "not-started" };
  mod[lessonId] = {
    ...existing,
    status,
    ...(status === "in-progress" && !existing.startedAt
      ? { startedAt: new Date().toISOString() }
      : {}),
    ...(status === "completed"
      ? { completedAt: new Date().toISOString() }
      : {}),
  };
  all[moduleId] = mod;
  saveAll(all);
}

// ── Quiz History (multiple attempts) ─────────────────────────────────────────

const QUIZ_HISTORY_KEY = "pe-app-quiz-history";

function loadQuizHistory(): Record<string, QuizAttempt[]> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(QUIZ_HISTORY_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function getQuizHistory(lessonId: string): QuizAttempt[] {
  return loadQuizHistory()[lessonId] ?? [];
}

export function saveQuizAttempt(lessonId: string, result: QuizResult): QuizAttempt {
  if (typeof window === "undefined") return { ...result, attemptNumber: 1 };
  const all = loadQuizHistory();
  const history = all[lessonId] ?? [];
  const attempt: QuizAttempt = {
    ...result,
    attemptNumber: history.length + 1,
  };
  all[lessonId] = [...history, attempt];
  safeSetItem(QUIZ_HISTORY_KEY, JSON.stringify(all));
  // Also update the "latest" quiz result
  saveQuizResult(lessonId, result);
  return attempt;
}

// ── Wrong-Answer Tracking ────────────────────────────────────────────────────

const WRONG_ANSWERS_KEY = "pe-app-wrong-answers";

function loadWrongAnswers(): WrongAnswer[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(WRONG_ANSWERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function getAllWrongAnswers(): WrongAnswer[] {
  return loadWrongAnswers();
}

export function recordWrongAnswers(answers: WrongAnswer[]) {
  if (typeof window === "undefined") return;
  const existing = loadWrongAnswers();
  // Remove old entries for same lesson+question, keep latest
  const key = (a: WrongAnswer) => `${a.lessonId}:${a.questionId}`;
  const newKeys = new Set(answers.map(key));
  const filtered = existing.filter((a) => !newKeys.has(key(a)));
  safeSetItem(WRONG_ANSWERS_KEY, JSON.stringify([...filtered, ...answers]));
}

export function removeWrongAnswer(lessonId: string, questionId: string) {
  if (typeof window === "undefined") return;
  const existing = loadWrongAnswers();
  const filtered = existing.filter(
    (a) => !(a.lessonId === lessonId && a.questionId === questionId)
  );
  safeSetItem(WRONG_ANSWERS_KEY, JSON.stringify(filtered));
}

// ── SRS Card State ───────────────────────────────────────────────────────────

const SRS_KEY = "pe-app-srs";

function loadSRS(): Record<string, SRSCardState> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(SRS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function getSRSState(cardId: string): SRSCardState | undefined {
  return loadSRS()[cardId];
}

export function getAllSRSStates(): Record<string, SRSCardState> {
  return loadSRS();
}

/**
 * SM-2 algorithm update.
 * quality: 0–5 (0–2 = fail/still-learning, 3 = hard, 4 = good, 5 = easy)
 */
export function updateSRS(cardId: string, quality: number): SRSCardState {
  const all = loadSRS();
  const existing = all[cardId] ?? {
    cardId,
    interval: 0,
    easeFactor: 2.5,
    nextReviewDate: new Date().toISOString().slice(0, 10),
    repetitions: 0,
  };

  let { interval, easeFactor, repetitions } = existing;

  if (quality < 3) {
    // Reset on fail
    repetitions = 0;
    interval = 1;
  } else {
    repetitions += 1;
    if (repetitions === 1) interval = 1;
    else if (repetitions === 2) interval = 3;
    else interval = Math.round(interval * easeFactor);
  }

  // Update ease factor (SM-2 formula)
  easeFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  if (easeFactor < 1.3) easeFactor = 1.3;

  const today = new Date();
  const nextDate = new Date(today);
  nextDate.setDate(today.getDate() + interval);

  const updated: SRSCardState = {
    cardId,
    interval,
    easeFactor,
    repetitions,
    nextReviewDate: nextDate.toISOString().slice(0, 10),
  };

  all[cardId] = updated;
  if (typeof window !== "undefined") {
    safeSetItem(SRS_KEY, JSON.stringify(all));
  }
  return updated;
}

// ── Resume Position ──────────────────────────────────────────────────────────

const POSITION_KEY = "pe-app-positions";

function loadPositions(): Record<string, LessonPosition> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(POSITION_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function getLessonPosition(lessonId: string): LessonPosition | undefined {
  return loadPositions()[lessonId];
}

export function saveLessonPosition(lessonId: string, blockIndex: number, scrollY: number) {
  if (typeof window === "undefined") return;
  const all = loadPositions();
  all[lessonId] = {
    lessonId,
    blockIndex,
    scrollY,
    updatedAt: new Date().toISOString(),
  };
  safeSetItem(POSITION_KEY, JSON.stringify(all));
}
