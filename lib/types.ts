export type LessonStatus = "not-started" | "in-progress" | "completed";

export type BlockType = "intro" | "teaching" | "example" | "exercise";
export type QuizType = "multiple-choice" | "short-response";

export interface LessonBlock {
  type: BlockType;
  title: string;
  content: string;
}

export interface QuizQuestion {
  questionId: string;
  type: QuizType;
  prompt: string;
  options?: string[];
  correctAnswer?: string;
}

export interface LessonContent {
  lessonId: string;
  blocks: LessonBlock[];
  quiz: QuizQuestion[];
  sources: string[];
}

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
