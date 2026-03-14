"use client";

import { modules } from "@/lib/modules";
import { useModuleProgress } from "@/hooks/useProgress";
import { Lesson, LessonStatus } from "@/lib/types";

// ── status helpers ────────────────────────────────────────────────────────────

const STATUS_CONFIG: Record<
  LessonStatus,
  { label: string; dot: string; row: string; badge: string }
> = {
  completed: {
    label: "Completed",
    dot: "bg-[#2294BD]",
    row: "bg-white",
    badge: "bg-[#2294BD]/10 text-[#2294BD]",
  },
  "in-progress": {
    label: "In Progress",
    dot: "bg-[#FAA51A]",
    row: "bg-[#FAA51A]/5",
    badge: "bg-[#FAA51A]/15 text-[#D9532B]",
  },
  "not-started": {
    label: "Not started",
    dot: "bg-[#D0C8C0]",
    row: "bg-white",
    badge: "bg-[#F0E6DD] text-[#404040]",
  },
};

function StatusDot({ status }: { status: LessonStatus }) {
  const cfg = STATUS_CONFIG[status];
  return (
    <span
      className={`inline-block w-2.5 h-2.5 rounded-full flex-shrink-0 ${cfg.dot}`}
      title={cfg.label}
    />
  );
}

function StatusBadge({ status }: { status: LessonStatus }) {
  const cfg = STATUS_CONFIG[status];
  return (
    <span
      className={`text-xs font-medium px-1.5 py-0.5 rounded-full whitespace-nowrap ${cfg.badge}`}
    >
      {cfg.label}
    </span>
  );
}

// ── sub-components ────────────────────────────────────────────────────────────

function DifficultyPip({ level }: { level: string }) {
  const colors: Record<string, string> = {
    foundational: "bg-[#2294BD]",
    intermediate: "bg-[#FAA51A]",
    advanced: "bg-[#D9532B]",
  };
  return (
    <span
      className={`inline-block w-1.5 h-1.5 rounded-full ${colors[level] ?? "bg-gray-300"}`}
      title={level}
    />
  );
}

function FeaturedModuleCard({
  moduleId,
  title,
  description,
  totalLessons,
  completed,
  inProgress,
}: {
  moduleId: string;
  title: string;
  description: string;
  totalLessons: number;
  completed: number;
  inProgress: number;
}) {
  const notStarted = totalLessons - completed - inProgress;
  const pct = Math.round((completed / totalLessons) * 100);

  return (
    <div className="rounded-2xl border border-[#2294BD]/20 bg-gradient-to-br from-[#2294BD]/8 to-[#F0E6DD]/40 p-5 mb-6">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#2294BD] mb-1">
            Current Module
          </p>
          <h1 className="text-xl font-bold text-[#000000] leading-snug">
            {title}
          </h1>
        </div>
        <div className="text-right flex-shrink-0">
          <p className="text-2xl font-bold text-[#2294BD]">{pct}%</p>
          <p className="text-xs text-[#404040]">complete</p>
        </div>
      </div>

      <p className="text-sm text-[#404040] leading-relaxed mb-4">
        {description}
      </p>

      {/* Progress bar */}
      <div className="h-2 rounded-full bg-[#D0C8C0] overflow-hidden mb-3">
        <div
          className="h-full rounded-full bg-[#2294BD] transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>

      {/* Counts */}
      <div className="flex gap-4 text-xs text-[#404040]">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#2294BD] inline-block" />
          {completed} done
        </span>
        {inProgress > 0 && (
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#FAA51A] inline-block" />
            {inProgress} in progress
          </span>
        )}
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#D0C8C0] inline-block" />
          {notStarted} remaining
        </span>
      </div>
    </div>
  );
}

interface LessonRowProps {
  lesson: Lesson;
  status: LessonStatus;
  onStatusChange: (id: string, s: LessonStatus) => void;
}

function LessonRow({ lesson, status, onStatusChange }: LessonRowProps) {
  const cfg = STATUS_CONFIG[status];
  const next: LessonStatus =
    status === "not-started"
      ? "in-progress"
      : status === "in-progress"
        ? "completed"
        : "not-started";

  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 border-b border-[#F0E6DD] last:border-0 ${cfg.row} transition-colors`}
    >
      {/* Day number */}
      <div className="w-8 flex-shrink-0 text-center">
        <span className="text-xs font-bold text-[#404040]">{lesson.dayNumber}</span>
      </div>

      {/* Status dot */}
      <button
        onClick={() => onStatusChange(lesson.lessonId, next)}
        className="flex-shrink-0 p-0.5 rounded-full hover:scale-110 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2294BD]"
        title={`Mark as ${next}`}
        aria-label={`Toggle status for day ${lesson.dayNumber}`}
      >
        <StatusDot status={status} />
      </button>

      {/* Title + meta */}
      <a href={`/lesson/${lesson.lessonId}`} className="flex-1 min-w-0 group">
        <div className="flex items-baseline gap-1.5 flex-wrap">
          <DifficultyPip level={lesson.difficulty} />
          <span
            className={`text-sm font-medium leading-snug group-hover:underline ${
              status === "completed" ? "line-through text-[#404040]" : "text-[#000000]"
            }`}
          >
            {lesson.title}
          </span>
        </div>
        <p className="text-xs text-[#404040] mt-0.5">{lesson.estimatedMinutes} min</p>
      </a>

      {/* Badge — hidden on xs, shown sm+ */}
      <div className="hidden sm:block flex-shrink-0">
        <StatusBadge status={status} />
      </div>
    </div>
  );
}

// ── page ──────────────────────────────────────────────────────────────────────

export default function ModulesPage() {
  // For now always show the first module as "current"
  const currentModule = modules[0];
  const { progress, updateLesson } = useModuleProgress(currentModule.moduleId);

  const lessons = currentModule.lessons;
  const completed = lessons.filter(
    (l) => progress[l.lessonId]?.status === "completed"
  ).length;
  const inProgress = lessons.filter(
    (l) => progress[l.lessonId]?.status === "in-progress"
  ).length;

  // Find the first in-progress or not-started lesson for "next up" context
  const nextLesson = lessons.find(
    (l) =>
      progress[l.lessonId]?.status === "in-progress" ||
      !progress[l.lessonId] ||
      progress[l.lessonId]?.status === "not-started"
  );

  return (
    <main className="min-h-screen bg-[#FBF7F3]">
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-5">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#404040]">
            Modules
          </h2>
        </div>

        {/* Featured module card */}
        <FeaturedModuleCard
          moduleId={currentModule.moduleId}
          title={currentModule.moduleTitle}
          description={currentModule.description}
          totalLessons={lessons.length}
          completed={completed}
          inProgress={inProgress}
        />

        {/* Next up callout */}
        {nextLesson && completed < lessons.length && (
          <div className="flex items-center gap-3 bg-white border border-[#FAA51A]/30 rounded-xl px-4 py-3 mb-5 shadow-sm">
            <span className="text-lg">→</span>
            <div>
              <p className="text-xs text-[#404040] uppercase tracking-wide font-semibold">
                Next up
              </p>
              <p className="text-sm font-medium text-[#000000]">
                Day {nextLesson.dayNumber} — {nextLesson.title}
              </p>
            </div>
            <span className="ml-auto text-xs text-[#404040] bg-[#F0E6DD] px-2 py-1 rounded-lg whitespace-nowrap">
              {nextLesson.estimatedMinutes} min
            </span>
          </div>
        )}

        {/* Legend */}
        <div className="flex items-center gap-4 text-xs text-[#404040] mb-3 px-1">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#2294BD]" /> Completed
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#FAA51A]" /> In progress
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#D0C8C0]" /> Not started
          </span>
          <span className="ml-auto flex items-center gap-1.5 text-[10px]">
            <span className="text-[#404040]">Tap dot to toggle</span>
          </span>
        </div>

        {/* Lesson list */}
        <div className="rounded-2xl border border-[#E8DDD4] bg-white overflow-hidden shadow-sm">
          {/* Column headers */}
          <div className="flex items-center gap-3 px-4 py-2 bg-[#F0E6DD] border-b border-[#E8DDD4]">
            <div className="w-8 text-center">
              <span className="text-xs font-semibold text-[#404040]">Day</span>
            </div>
            <div className="w-5" />
            <div className="flex-1">
              <span className="text-xs font-semibold text-[#404040]">Lesson</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-xs font-semibold text-[#404040]">Status</span>
            </div>
          </div>

          {lessons.map((lesson) => {
            const status: LessonStatus =
              progress[lesson.lessonId]?.status ?? "not-started";
            return (
              <LessonRow
                key={lesson.lessonId}
                lesson={lesson}
                status={status}
                onStatusChange={updateLesson}
              />
            );
          })}
        </div>

        {/* Difficulty legend */}
        <div className="flex items-center gap-4 text-xs text-[#404040] mt-3 px-1">
          <span className="font-semibold">Difficulty:</span>
          <span className="flex items-center gap-1">
            <DifficultyPip level="foundational" /> Foundational
          </span>
          <span className="flex items-center gap-1">
            <DifficultyPip level="intermediate" /> Intermediate
          </span>
          <span className="flex items-center gap-1">
            <DifficultyPip level="advanced" /> Advanced
          </span>
        </div>
      </div>
    </main>
  );
}
