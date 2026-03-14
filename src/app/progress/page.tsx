"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { loadProgress, getWeakTopics } from "@/lib/progress";
import { modules } from "@/data";
import type { LessonProgress } from "@/types/content";
import ProgressBar from "@/components/ui/ProgressBar";

export default function ProgressPage() {
  const [progress, setProgress] = useState<ReturnType<typeof loadProgress> | null>(null);

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  if (!progress) return null;

  const allCompleted = Object.values(progress.lessonProgress);
  const totalLessons = modules.reduce((sum, m) => sum + m.totalLessons, 0);
  const weakTopics = getWeakTopics(5);

  // Average quiz score
  const avgScore =
    allCompleted.length > 0
      ? allCompleted.reduce((sum, l) => sum + l.quizScore, 0) / allCompleted.length
      : 0;

  // Average confidence
  const avgConfidence =
    allCompleted.length > 0
      ? allCompleted.reduce((sum, l) => sum + l.confidence, 0) / allCompleted.length
      : 0;

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">Progress</h1>

      {allCompleted.length === 0 ? (
        <div className="card p-6 text-center">
          <p className="font-semibold mb-1">No lessons completed yet.</p>
          <p className="text-sm text-muted mb-4">
            Start a lesson to begin tracking your progress.
          </p>
          <Link href="/modules" className="btn-primary">
            Browse modules
          </Link>
        </div>
      ) : (
        <>
          {/* Summary cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <StatCard label="Lessons done" value={`${allCompleted.length}`} />
            <StatCard label="Avg quiz score" value={`${Math.round(avgScore * 100)}%`} />
            <StatCard
              label="Avg confidence"
              value={`${avgConfidence.toFixed(1)} / 5`}
            />
          </div>

          {/* Per-module progress */}
          <div className="space-y-4">
            <h2 className="text-base font-semibold">By module</h2>
            {modules.map((mod) => {
              const modCompleted = allCompleted.filter(
                (l) => l.moduleId === mod.moduleId
              );
              const pct = modCompleted.length / mod.totalLessons;

              return (
                <div key={mod.moduleId} className="card p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Link
                      href={`/modules/${mod.moduleId}`}
                      className="font-semibold text-sm hover:text-access"
                    >
                      {mod.title}
                    </Link>
                    <span className="text-sm text-muted">
                      {modCompleted.length}/{mod.totalLessons}
                    </span>
                  </div>
                  <ProgressBar value={pct} />
                </div>
              );
            })}
          </div>

          {/* Weak topics */}
          {weakTopics.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-base font-semibold">Topics to review</h2>
              <div className="space-y-2">
                {weakTopics.map((t) => (
                  <div
                    key={t.topic}
                    className="card p-3 flex items-center justify-between"
                  >
                    <span className="text-sm capitalize">
                      {t.topic.replace(/-/g, " ")}
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-16 bg-black/10 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            t.weaknessScore > 0.6 ? "bg-rust" : "bg-amber"
                          }`}
                          style={{ width: `${Math.round(t.weaknessScore * 100)}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted w-14 text-right">
                        {t.weaknessScore > 0.6 ? "Needs work" : "Review"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recent activity */}
          <div className="space-y-3">
            <h2 className="text-base font-semibold">Recent activity</h2>
            <div className="space-y-2">
              {allCompleted
                .slice()
                .sort(
                  (a, b) =>
                    new Date(b.completedAt).getTime() -
                    new Date(a.completedAt).getTime()
                )
                .slice(0, 8)
                .map((lp) => {
                  const mod = modules.find((m) => m.moduleId === lp.moduleId);
                  const lesson = mod?.lessons.find(
                    (l) => l.lessonId === lp.lessonId
                  );
                  if (!lesson || !mod) return null;
                  return (
                    <Link
                      key={`${lp.moduleId}:${lp.lessonId}`}
                      href={`/lessons/${lp.moduleId}/${lp.lessonId}`}
                      className="card p-3 flex items-center justify-between hover:shadow-sm transition-shadow"
                    >
                      <div>
                        <p className="text-sm font-medium">{lesson.title}</p>
                        <p className="text-xs text-muted">
                          {new Date(lp.completedAt).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold">
                          {Math.round(lp.quizScore * 100)}%
                        </p>
                        <p className="text-xs text-muted">Conf {lp.confidence}/5</p>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="card p-4 text-center">
      <p className="text-2xl font-semibold">{value}</p>
      <p className="text-xs text-muted mt-1">{label}</p>
    </div>
  );
}
