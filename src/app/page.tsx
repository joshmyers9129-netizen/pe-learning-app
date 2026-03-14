"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { modules } from "@/data";
import { loadProgress, getCompletedLessonCount } from "@/lib/progress";
import ProgressBar from "@/components/ui/ProgressBar";
import Badge from "@/components/ui/Badge";

export default function DashboardPage() {
  const [completedCounts, setCompletedCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    const counts: Record<string, number> = {};
    modules.forEach((m) => {
      counts[m.moduleId] = getCompletedLessonCount(m.moduleId);
    });
    setCompletedCounts(counts);
  }, []);

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  // Find the first incomplete available lesson across all modules
  const nextLesson = (() => {
    const progress = typeof window !== "undefined" ? loadProgress() : null;
    for (const mod of modules) {
      for (const lesson of mod.lessons) {
        if (lesson.status !== "available") continue;
        const key = `${mod.moduleId}:${lesson.lessonId}`;
        if (!progress?.lessonProgress[key]) {
          return { lesson, module: mod };
        }
      }
    }
    return null;
  })();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <p className="text-sm text-muted mb-1">{today}</p>
        <h1 className="text-2xl font-semibold">Today</h1>
      </div>

      {/* Next lesson card */}
      {nextLesson ? (
        <div className="card p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">
            Up next
          </p>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs text-muted mb-1">
                {nextLesson.module.title} · Day {nextLesson.lesson.dayNumber}
              </p>
              <h2 className="text-lg font-semibold mb-2">
                {nextLesson.lesson.title}
              </h2>
              <div className="flex items-center gap-3 text-sm text-muted">
                <span>{nextLesson.lesson.estimatedMinutes} min</span>
                <span>·</span>
                <span className="capitalize">{nextLesson.lesson.difficulty}</span>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <Link
              href={`/lessons/${nextLesson.module.moduleId}/${nextLesson.lesson.lessonId}`}
              className="btn-primary"
            >
              Start lesson
            </Link>
          </div>
        </div>
      ) : (
        <div className="card p-5">
          <p className="font-semibold">All available lessons complete.</p>
          <p className="text-sm text-muted mt-1">
            More content is on the way. Head to Review to reinforce what you know.
          </p>
        </div>
      )}

      {/* Module overview */}
      <div>
        <h2 className="text-base font-semibold mb-3">Your modules</h2>
        <div className="space-y-3">
          {modules.map((mod) => {
            const completed = completedCounts[mod.moduleId] ?? 0;
            const available = mod.lessons.filter((l) => l.status === "available").length;
            const pct = available > 0 ? completed / mod.totalLessons : 0;

            return (
              <Link
                key={mod.moduleId}
                href={`/modules/${mod.moduleId}`}
                className="card p-4 block hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-semibold text-sm">{mod.title}</h3>
                    <p className="text-xs text-muted mt-0.5">
                      {completed} / {mod.totalLessons} lessons · ~{mod.estimatedHours}h
                    </p>
                  </div>
                  <Badge variant={completed === mod.totalLessons ? "complete" : "available"}>
                    {completed === mod.totalLessons ? "Done" : "Active"}
                  </Badge>
                </div>
                <ProgressBar value={pct} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
