"use client";

import { useState, useEffect, useCallback } from "react";
import { getModuleProgress, setLessonStatus } from "@/lib/progress";
import { ModuleProgress } from "@/lib/types";

export function useModuleProgress(moduleId: string) {
  const [progress, setProgress] = useState<ModuleProgress>({});

  useEffect(() => {
    setProgress(getModuleProgress(moduleId));
  }, [moduleId]);

  const updateLesson = useCallback(
    (lessonId: string, status: "not-started" | "in-progress" | "completed") => {
      setLessonStatus(moduleId, lessonId, status);
      setProgress(getModuleProgress(moduleId));
    },
    [moduleId]
  );

  return { progress, updateLesson };
}
