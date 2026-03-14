import { Module } from "@/types";
import { allLessons } from "./lessons";

export const allModules: Module[] = [
  {
    moduleId: "pe-foundations",
    moduleTitle: "Private Equity Foundations",
    description:
      "A 20-day program covering PE fund structure, performance metrics, fee mechanics, due diligence, and portfolio construction. Designed for allocators with strong public-markets backgrounds.",
    lessons: allLessons,
  },
];

export const getModule = (moduleId: string): Module | undefined =>
  allModules.find((m) => m.moduleId === moduleId);
