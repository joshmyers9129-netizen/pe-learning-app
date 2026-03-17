export type LessonStatus = "not-started" | "in-progress" | "completed";

export interface Lesson {
  lessonId: string;
  dayNumber: number;
  title: string;
  estimatedMinutes: number;
  topics: string[];
  difficulty: "foundational" | "intermediate" | "advanced";
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
  | "intro"
  | "framing"
  | "teaching"
  | "example"
  | "quote"
  | "visual"
  | "inference-boundary"
  | "weak-answer"
  | "exercise"
  | "meeting-application"
  | "source-note";

export interface LessonBlock {
  type: LessonBlockType;
  title: string;
  /** Primary text content — required for all block types except "visual" */
  content?: string;
  /** Optional ID referencing a visual component from the visuals registry */
  visualId?: string;
  // ── Visual block fields ─────────────────────────────────────────────────────
  /** Image path (relative to /public) or external URL — used when type="visual" */
  src?: string;
  /** Caption displayed beneath the image */
  caption?: string;
  /** Attribution or source for the image */
  sourceNote?: string;
  /** Optional annotation explaining pedagogical relevance */
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
