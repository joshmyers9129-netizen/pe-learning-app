"use client";

import Link from "next/link";
import { getDefaultModule } from "@/lib/modules";
import { useModuleProgress } from "@/hooks/useProgress";
import { getAllQuizResults, getCardStruggleCounts } from "@/lib/progress";
import { buildReviewQueue, groupByPriority } from "@/lib/reviewQueue";
import { topicLabel } from "@/lib/topics";

export default function Home() {
  const currentModule = getDefaultModule();
  const { progress } = useModuleProgress(currentModule.moduleId);
  const lessons = currentModule.lessons;

  const completed = lessons.filter(
    (l) => progress[l.lessonId]?.status === "completed"
  ).length;
  const inProgress = lessons.filter(
    (l) => progress[l.lessonId]?.status === "in-progress"
  ).length;
  const pct = Math.round((completed / lessons.length) * 100);

  const nextLesson = lessons.find(
    (l) =>
      progress[l.lessonId]?.status === "in-progress" ||
      !progress[l.lessonId] ||
      progress[l.lessonId]?.status === "not-started"
  );

  const queue = buildReviewQueue(progress, getAllQuizResults(), getCardStruggleCounts());
  const { high, medium } = groupByPriority(queue);
  const dueCount = high.length + medium.length;

  // Topics with the most high-priority review cards = weakest areas
  const topicCounts: Record<string, number> = {};
  for (const card of high) {
    topicCounts[card.topic] = (topicCounts[card.topic] ?? 0) + 1;
  }
  const weakTopics = Object.entries(topicCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([topic]) => topic);

  return (
    <main className="min-h-screen bg-[#FBF7F3]">
      <div className="max-w-2xl mx-auto px-4 py-6 pb-24">
        {/* Header */}
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#404040] mb-1">
            Today
          </p>
          <h1 className="text-2xl font-bold text-[#000000]">Your Dashboard</h1>
        </div>

        {/* Next recommended lesson */}
        {completed < lessons.length ? (
          nextLesson ? (
            <Link href={`/lesson/${nextLesson.lessonId}`} className="block mb-5">
              <div className="rounded-2xl bg-[#2294BD] text-white p-5 shadow-sm hover:brightness-95 transition-all">
                <p className="text-xs font-semibold uppercase tracking-widest opacity-80 mb-1">
                  Up Next
                </p>
                <h2 className="text-lg font-bold leading-snug mb-1">
                  Day {nextLesson.dayNumber} — {nextLesson.title}
                </h2>
                <p className="text-sm opacity-80 capitalize">
                  {nextLesson.estimatedMinutes} min · {nextLesson.difficulty}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 bg-white/20 rounded-xl px-3 py-1.5 text-sm font-medium">
                  Start lesson →
                </div>
              </div>
            </Link>
          ) : null
        ) : (
          <div className="rounded-2xl bg-[#2294BD]/10 border border-[#2294BD]/20 p-5 mb-5 text-center">
            <p className="text-lg font-bold text-[#2294BD]">Module complete!</p>
            <p className="text-sm text-[#404040] mt-1">
              All {lessons.length} lessons done. Keep reviewing below.
            </p>
          </div>
        )}

        {/* Stats row */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          {/* Module progress */}
          <Link href="/modules" className="block">
            <div className="rounded-2xl border border-[#E8DDD4] bg-white p-4 shadow-sm hover:border-[#2294BD]/40 transition-colors h-full">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#404040] mb-2">
                Module Progress
              </p>
              <p className="text-3xl font-bold text-[#2294BD] mb-1">{pct}%</p>
              <div className="h-1.5 rounded-full bg-[#D0C8C0] overflow-hidden mb-2">
                <div
                  className="h-full rounded-full bg-[#2294BD] transition-all duration-500"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <p className="text-xs text-[#404040]">
                {completed}/{lessons.length} lessons
                {inProgress > 0 ? ` · ${inProgress} active` : ""}
              </p>
            </div>
          </Link>

          {/* Due review cards */}
          <Link href="/review" className="block">
            <div className="rounded-2xl border border-[#E8DDD4] bg-white p-4 shadow-sm hover:border-[#FAA51A]/50 transition-colors h-full">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#404040] mb-2">
                Due for Review
              </p>
              <p
                className={`text-3xl font-bold mb-1 ${
                  dueCount > 0 ? "text-[#D9532B]" : "text-[#2294BD]"
                }`}
              >
                {dueCount}
              </p>
              <p className="text-xs text-[#404040]">
                {dueCount === 0
                  ? "All caught up"
                  : `${high.length} high · ${medium.length} medium`}
              </p>
              {dueCount > 0 && (
                <p className="mt-2 text-xs font-medium text-[#D9532B]">
                  Review now →
                </p>
              )}
            </div>
          </Link>
        </div>

        {/* Weak topics */}
        {weakTopics.length > 0 && (
          <Link href="/review" className="block">
            <div className="rounded-2xl border border-[#E8DDD4] bg-white p-4 shadow-sm hover:border-[#D9532B]/30 transition-colors">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#404040] mb-3">
                Top Weak Topics
              </p>
              <div className="flex flex-wrap gap-2">
                {weakTopics.map((topic) => (
                  <span
                    key={topic}
                    className="text-sm bg-[#D9532B]/10 text-[#D9532B] px-3 py-1 rounded-full font-medium"
                  >
                    {topicLabel(topic)}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        )}
      </div>
    </main>
  );
}
