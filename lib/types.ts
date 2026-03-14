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
