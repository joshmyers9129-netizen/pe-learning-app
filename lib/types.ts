export type LessonStatus = "not-started" | "in-progress" | "completed";

export interface Lesson {
  lessonId: string;
  dayNumber: number;
  title: string;
  estimatedMinutes: number;
  topics: string[];
  difficulty: string;
  prerequisites: string[];
  learningObjectives: string[];
}

export interface Module {
  moduleId: string;
  moduleTitle: string;
  description: string;
  lessons: Lesson[];
}

export interface LessonProgress {
  status: LessonStatus;
  completedAt?: string;
  startedAt?: string;
}

export interface ModuleProgress {
  [lessonId: string]: LessonProgress;
}

// ── Lesson content ────────────────────────────────────────────────────────────

export type LessonBlockType =
  // ── Legacy types (keep for backward compat) ──────────────────────────────
  | "intro"
  | "example"
  | "quote"
  | "weak-answer"
  // ── Premium lesson types ──────────────────────────────────────────────────
  | "meeting-cold-open"
  | "framing"
  | "teaching"
  | "worked-example"
  | "visual"
  | "weak-vs-strong-answer"
  | "inference-boundary"
  | "exercise"
  | "meeting-application"
  | "allocator-application"
  | "source-note";

export interface LessonBlock {
  type: LessonBlockType;
  title: string;
  /** Primary text content — required for all block types except "visual" */
  content?: string;
  /** Optional ID referencing a visual component from the visuals registry */
  visualId?: string;
  // ── Source attachment (any block type) ───────────────────────────────────
  /** Inline source citation — attachable to any block, not just lesson footer */
  sourceNote?: string;
  // ── Visual block fields ───────────────────────────────────────────────────
  /** Image path (relative to /public) or external URL — used when type="visual" */
  src?: string;
  /** Caption displayed beneath the image */
  caption?: string;
  /** Why this visual is included: what concept or relationship it illustrates */
  learningPurpose?: string;
  /** Specific annotation directing learner attention to something in the visual */
  whatToNotice?: string;
  /** @deprecated Use learningPurpose. Kept for backward compat with existing lessons. */
  whyItMatters?: string;
}

export interface MCQuestion {
  questionId: string;
  type: "multiple-choice";
  prompt: string;
  options: string[];
  correctAnswer: string;
}

export interface SRQuestion {
  questionId: string;
  type: "short-response";
  prompt: string;
  modelAnswer: string;
}

export type QuizQuestion = MCQuestion | SRQuestion;

export interface LessonContent {
  lessonId: string;
  blocks: LessonBlock[];
  quiz: QuizQuestion[];
  sources: string[];
}

// ── Quiz progress ─────────────────────────────────────────────────────────────

export interface QuizResult {
  score: number;       // 0–1 fraction of MC correct
  confidence: number;  // 1–5 rating
  completedAt: string;
}

export type CardType = "flashcard" | "mini-case" | "reteach";
export type Priority = "high" | "medium" | "low";

export interface ReviewCard {
  cardId: string;
  lessonId: string;
  dayNumber: number;
  cardType: CardType;
  topic: string;
  front: string;
  back: string;
}
