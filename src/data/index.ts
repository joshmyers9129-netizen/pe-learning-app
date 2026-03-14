import type { Module } from "@/types/content";
import peFoundations from "./modules/pe-foundations/module";

export const modules: Module[] = [peFoundations];

export function getModule(moduleId: string): Module | undefined {
  return modules.find((m) => m.moduleId === moduleId);
}

export function getLesson(moduleId: string, lessonId: string) {
  const module = getModule(moduleId);
  return module?.lessons.find((l) => l.lessonId === lessonId);
}
