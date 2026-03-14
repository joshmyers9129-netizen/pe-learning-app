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

export interface LessonBlock {
  type: "intro" | "teaching" | "example" | "exercise";
  title: string;
  content: string;
  /** Optional ID referencing a visual component from the visuals registry */
  visualId?: string;
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
