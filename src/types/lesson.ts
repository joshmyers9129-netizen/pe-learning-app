export type BlockType = "intro" | "teaching" | "example" | "exercise";

export interface LessonBlock {
  type: BlockType;
  title: string;
  content: string;
}

export type QuestionType = "multiple-choice" | "short-response";

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
  difficulty: string;
  prerequisites: string[];
  learningObjectives: string[];
  blocks: LessonBlock[];
  quiz: QuizQuestion[];
  sources: string[];
}

export interface Module {
  moduleId: string;
  moduleTitle: string;
  lessons: Lesson[];
}
