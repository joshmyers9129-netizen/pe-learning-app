"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getModule } from "@/data";
import { loadProgress } from "@/lib/progress";
import Badge from "@/components/ui/Badge";
import ProgressBar from "@/components/ui/ProgressBar";

interface Props {
  params: { moduleId: string };
}

export default function ModuleDetailPage({ params }: Props) {
  const mod = getModule(params.moduleId);
  const [completed, setCompleted] = useState<Set<string>>(new Set());

  useEffect(() => {
    const progress = loadProgress();
    const done = new Set(
      Object.keys(progress.lessonProgress)
        .filter((k) => k.startsWith(`${params.moduleId}:`))
        .map((k) => k.split(":")[1])
    );
    setCompleted(done);
  }, [params.moduleId]);

  if (!mod) return notFound();

  const completedCount = completed.size;
  const pct = completedCount / mod.totalLessons;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <Link href="/modules" className="text-sm text-muted hover:text-black mb-2 inline-block">
          ← Modules
        </Link>
        <h1 className="text-2xl font-semibold">{mod.title}</h1>
        <p className="text-sm text-muted mt-1">{mod.description}</p>
      </div>

      {/* Stats */}
      <div className="card p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">
            {completedCount} of {mod.totalLessons} lessons completed
          </span>
          <span className="text-sm text-muted">{Math.round(pct * 100)}%</span>
        </div>
        <ProgressBar value={pct} />
      </div>

      {/* Lesson list */}
      <div className="space-y-2">
        {mod.lessons.map((lesson) => {
          const isDone = completed.has(lesson.lessonId);
          const isAvailable = lesson.status === "available";

          const card = (
            <div
              className={`card p-4 flex items-start gap-3 transition-shadow ${
                isAvailable ? "hover:shadow-md" : "opacity-60"
              }`}
            >
              {/* Day badge */}
              <div
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                  isDone
                    ? "bg-access text-white"
                    : isAvailable
                    ? "bg-cream text-black"
                    : "bg-black/5 text-black/30"
                }`}
              >
                {isDone ? "✓" : lesson.dayNumber}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-medium text-sm leading-snug">{lesson.title}</p>
                    <p className="text-xs text-muted mt-0.5">
                      {lesson.estimatedMinutes} min · {lesson.difficulty}
                    </p>
                  </div>
                  <Badge
                    variant={isDone ? "complete" : isAvailable ? "available" : "stub"}
                  >
                    {isDone ? "Done" : isAvailable ? "Available" : "Coming soon"}
                  </Badge>
                </div>
              </div>
            </div>
          );

          return isAvailable ? (
            <Link
              key={lesson.lessonId}
              href={`/lessons/${mod.moduleId}/${lesson.lessonId}`}
            >
              {card}
            </Link>
          ) : (
            <div key={lesson.lessonId}>{card}</div>
          );
        })}
      </div>
    </div>
  );
}
