"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  loadProgress,
  getNextLesson,
  getDueReviewCards,
  getWeakestTopics,
  getModuleProgressSummary,
  getTopicLabel,
} from "@/lib/progress";
import { AppProgress, TopicMastery } from "@/types";
import { getLesson } from "@/data/lessons";

export default function DashboardPage() {
  const [progress, setProgress] = useState<AppProgress | null>(null);

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  if (!progress) {
    return (
      <div className="pt-8 text-sm text-gray-400">Loading…</div>
    );
  }

  const nextLessonId = getNextLesson(progress);
  const nextLesson = nextLessonId ? getLesson(nextLessonId) : null;
  const dueCards = getDueReviewCards(progress);
  const weakTopics = getWeakestTopics(progress, 3);
  const moduleSummary = getModuleProgressSummary(progress);
  const allDone = !nextLesson;

  return (
    <div className="space-y-5 pt-4">
      {/* Header */}
      <div>
        <h1 className="text-xl font-bold">Today</h1>
        <p className="text-sm text-gray-500 mt-0.5">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      {/* Next Lesson */}
      <section className="rounded-xl border border-gray-200 overflow-hidden">
        <div className="bg-access px-4 py-2">
          <span className="text-xs font-semibold text-white uppercase tracking-wider">
            Next Lesson
          </span>
        </div>
        <div className="px-4 py-4">
          {nextLesson ? (
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs text-gray-500 mb-0.5">
                  Day {nextLesson.dayNumber} · {nextLesson.estimatedMinutes} min ·{" "}
                  <span className="capitalize">{nextLesson.difficulty}</span>
                </p>
                <p className="font-semibold text-base leading-snug">
                  {nextLesson.title}
                </p>
                {nextLesson.learningObjectives[0] && !nextLesson.isPlaceholder && (
                  <p className="text-sm text-gray-600 mt-1 leading-snug">
                    {nextLesson.learningObjectives[0]}
                  </p>
                )}
              </div>
              <Link
                href={`/lessons/${nextLesson.lessonId}`}
                className="shrink-0 bg-access text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Start
              </Link>
            </div>
          ) : (
            <p className="text-sm text-gray-600">
              All lessons complete. Head to{" "}
              <Link href="/review" className="text-access font-medium">
                Review
              </Link>{" "}
              to reinforce your knowledge.
            </p>
          )}
        </div>
      </section>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3">
        {/* Module progress */}
        <StatCard
          label="Module Progress"
          value={`${moduleSummary.pct}%`}
          sub={`${moduleSummary.completed}/${moduleSummary.total} lessons`}
          color="access"
        />
        {/* Due reviews */}
        <StatCard
          label="Due Reviews"
          value={String(dueCards.length)}
          sub={dueCards.length === 1 ? "card due" : "cards due"}
          color={dueCards.length > 0 ? "rust" : "green"}
          href={dueCards.length > 0 ? "/review" : undefined}
        />
        {/* Lessons done */}
        <StatCard
          label="Completed"
          value={String(moduleSummary.completed)}
          sub="lessons done"
          color="fast"
        />
      </div>

      {/* Module progress bar */}
      <section>
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-xs font-medium text-gray-600">
            PE Foundations — Module 1
          </span>
          <span className="text-xs text-gray-500">
            {moduleSummary.completed}/{moduleSummary.total}
          </span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-access rounded-full transition-all"
            style={{ width: `${moduleSummary.pct}%` }}
          />
        </div>
      </section>

      {/* Weakest topics */}
      {weakTopics.length > 0 && (
        <section>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
            Focus Areas
          </h2>
          <div className="space-y-2">
            {weakTopics.map((t) => (
              <WeakTopicRow key={t.topicId} topic={t} />
            ))}
          </div>
        </section>
      )}

      {/* Review CTA */}
      {dueCards.length > 0 && (
        <section className="rounded-xl border border-rust/30 bg-rust/5 px-4 py-3 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold">
              {dueCards.length} review card{dueCards.length !== 1 ? "s" : ""} due
            </p>
            <p className="text-xs text-gray-600 mt-0.5">
              Keep your recall sharp
            </p>
          </div>
          <Link
            href="/review"
            className="text-sm font-medium text-rust border border-rust/40 px-3 py-1.5 rounded-lg hover:bg-rust/10 transition-colors"
          >
            Review now
          </Link>
        </section>
      )}

      {allDone && (
        <div className="text-center py-6 text-sm text-gray-500">
          Module complete. Great work.
        </div>
      )}
    </div>
  );
}

function StatCard({
  label,
  value,
  sub,
  color,
  href,
}: {
  label: string;
  value: string;
  sub: string;
  color: "access" | "rust" | "fast" | "green";
  href?: string;
}) {
  const colorMap = {
    access: "text-access",
    rust: "text-rust",
    fast: "text-fast",
    green: "text-green-600",
  };
  const content = (
    <div className="rounded-xl border border-gray-200 px-3 py-3 text-center">
      <p className={`text-2xl font-bold ${colorMap[color]}`}>{value}</p>
      <p className="text-xs text-gray-500 mt-0.5 leading-tight">{sub}</p>
    </div>
  );
  if (href) {
    return <Link href={href}>{content}</Link>;
  }
  return content;
}

function WeakTopicRow({ topic }: { topic: TopicMastery }) {
  const pct = Math.round(topic.score * 100);
  const barColor =
    pct < 40 ? "bg-rust" : pct < 65 ? "bg-fast" : "bg-access";
  return (
    <div className="flex items-center gap-3">
      <div className="w-32 shrink-0">
        <p className="text-sm truncate">{getTopicLabel(topic.topicId)}</p>
      </div>
      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className={`h-full ${barColor} rounded-full transition-all`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-xs text-gray-500 w-8 text-right">{pct}%</span>
    </div>
  );
}
