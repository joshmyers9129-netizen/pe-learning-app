// ─── Block types ─────────────────────────────────────────────────────────────

export type BlockType =
  | "intro"
  | "teaching"
  | "example"
  | "exercise"
  | "callout";

export interface LessonBlock {
  type: BlockType;
  title: string;
  content: string;
}

// ─── Quiz ────────────────────────────────────────────────────────────────────

export type QuestionType = "multiple-choice" | "short-response";

export interface MultipleChoiceQuestion {
  questionId: string;
  type: "multiple-choice";
  prompt: string;
  options: string[];
  correctAnswer: string;
}

export interface ShortResponseQuestion {
  questionId: string;
  type: "short-response";
  prompt: string;
  guidance?: string;
}

export type Question = MultipleChoiceQuestion | ShortResponseQuestion;

// ─── Lesson ──────────────────────────────────────────────────────────────────

export type Difficulty = "foundational" | "intermediate" | "advanced";
export type LessonStatus = "available" | "stub";

export interface Lesson {
  lessonId: string;
  dayNumber: number;
  title: string;
  estimatedMinutes: number;
  topics: string[];
  difficulty: Difficulty;
  prerequisites: string[];
  learningObjectives: string[];
  blocks: LessonBlock[];
  quiz: Question[];
  sources: string[];
  status: LessonStatus;
}

// ─── Module ──────────────────────────────────────────────────────────────────

export interface Module {
  moduleId: string;
  title: string;
  description: string;
  totalLessons: number;
  estimatedHours: number;
  topics: string[];
  lessons: Lesson[];
}

// ─── Progress (localStorage) ──────────────────────────────────────────────────

export type ConfidenceLevel = 1 | 2 | 3 | 4 | 5;

export interface LessonProgress {
  lessonId: string;
  moduleId: string;
  completedAt: string; // ISO date string
  quizScore: number; // 0–1
  confidence: ConfidenceLevel;
  topicsStudied: string[];
}

export interface TopicMastery {
  topic: string;
  correctCount: number;
  totalCount: number;
  lastStudied: string; // ISO date string
  weaknessScore: number; // 0–1, higher = weaker
}

export interface ReviewCard {
  cardId: string;
  lessonId: string;
  moduleId: string;
  type: "flashcard" | "mini-case" | "reteach";
  front: string;
  back: string;
  dueDate: string; // ISO date string
  priority: number; // higher = review sooner
}

export interface AppProgress {
  lessonProgress: Record<string, LessonProgress>;
  topicMastery: Record<string, TopicMastery>;
  reviewQueue: ReviewCard[];
  lastUpdated: string;
}
