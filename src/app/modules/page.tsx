"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { allModules } from "@/data/modules";
import { loadProgress, getCompletedLessons } from "@/lib/progress";

export default function ModulesPage() {
  const [completed, setCompleted] = useState<Set<string>>(new Set());

  useEffect(() => {
    const p = loadProgress();
    setCompleted(new Set(getCompletedLessons(p)));
  }, []);

  return (
    <div className="space-y-5 pt-4">
      <h1 className="text-xl font-bold">Modules</h1>

      {allModules.map((mod) => {
        const completedCount = mod.lessons.filter((l) =>
          completed.has(l.lessonId)
        ).length;
        const pct = Math.round((completedCount / mod.lessons.length) * 100);
        return (
          <section key={mod.moduleId} className="rounded-xl border border-gray-200 overflow-hidden">
            <div className="px-4 py-4 border-b border-gray-100">
              <div className="flex items-center justify-between mb-1">
                <h2 className="font-semibold">{mod.moduleTitle}</h2>
                <span className="text-sm text-access font-medium">{pct}%</span>
              </div>
              <p className="text-xs text-gray-500 mb-3">{mod.description}</p>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-access rounded-full"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
            <div className="divide-y divide-gray-100">
              {mod.lessons.map((lesson) => {
                const done = completed.has(lesson.lessonId);
                return (
                  <Link
                    key={lesson.lessonId}
                    href={`/lessons/${lesson.lessonId}`}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                        done
                          ? "bg-access text-white"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {done ? "✓" : lesson.dayNumber}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className={`text-sm truncate ${
                          done ? "text-gray-400" : "font-medium"
                        }`}
                      >
                        {lesson.title}
                      </p>
                      <p className="text-xs text-gray-400">
                        {lesson.estimatedMinutes} min ·{" "}
                        <span className="capitalize">{lesson.difficulty}</span>
                        {lesson.isPlaceholder && " · Coming soon"}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
