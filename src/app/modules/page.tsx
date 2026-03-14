"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { modules } from "@/data";
import { getCompletedLessonCount } from "@/lib/progress";
import ProgressBar from "@/components/ui/ProgressBar";
import Badge from "@/components/ui/Badge";

export default function ModulesPage() {
  const [completedCounts, setCompletedCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    const counts: Record<string, number> = {};
    modules.forEach((m) => {
      counts[m.moduleId] = getCompletedLessonCount(m.moduleId);
    });
    setCompletedCounts(counts);
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Modules</h1>

      <div className="space-y-4">
        {modules.map((mod) => {
          const completed = completedCounts[mod.moduleId] ?? 0;
          const pct = completed / mod.totalLessons;

          return (
            <Link
              key={mod.moduleId}
              href={`/modules/${mod.moduleId}`}
              className="card p-5 block hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-3 mb-1">
                <h2 className="font-semibold">{mod.title}</h2>
                <Badge variant={completed === mod.totalLessons ? "complete" : "available"}>
                  {completed}/{mod.totalLessons}
                </Badge>
              </div>
              <p className="text-sm text-muted mb-3">{mod.description}</p>
              <ProgressBar value={pct} className="mb-3" />
              <div className="flex gap-4 text-xs text-muted">
                <span>{mod.totalLessons} lessons</span>
                <span>~{mod.estimatedHours} hours</span>
                <span>{mod.topics.length} topics</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
