export type BlockType = "intro" | "teaching" | "example" | "exercise";
export type QuestionType = "multiple-choice" | "short-response";
export type Difficulty = "foundational" | "intermediate" | "advanced";

export interface LessonBlock {
  type: BlockType;
  title: string;
  content: string;
}

export interface QuizQuestion {
  questionId: string;
  type: QuestionType;
  prompt: string;
  options?: string[];
  correctAnswer?: string;
}

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
  quiz: QuizQuestion[];
  sources: string[];
  isPlaceholder?: boolean;
}

export interface Module {
  moduleId: string;
  moduleTitle: string;
  description: string;
  lessons: Lesson[];
}

// Progress types
export interface LessonProgress {
  lessonId: string;
  completedAt: string; // ISO date
  quizAnswers: Record<string, string>; // questionId -> answer
  quizScore: number; // 0-1
  confidenceRating: number; // 1-5
}

export interface TopicMastery {
  topicId: string;
  score: number; // 0-1
  lastUpdated: string;
  lessonsCount: number;
}

export interface ReviewCard {
  cardId: string;
  lessonId: string;
  topicId: string;
  type: "flashcard" | "mini-case" | "reteach";
  prompt: string;
  answer: string;
  dueAt: string; // ISO date
  easeFactor: number;
  interval: number; // days
}

export interface AppProgress {
  lessonProgress: Record<string, LessonProgress>;
  topicMastery: Record<string, TopicMastery>;
  reviewCards: ReviewCard[];
  lastUpdated: string;
}
