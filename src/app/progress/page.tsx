"use client";

import { useEffect, useState } from "react";
import {
  loadProgress,
  getAllTopicsSorted,
  getCompletedLessons,
  getAverageConfidence,
  getModuleProgressSummary,
  getTopicLabel,
} from "@/lib/progress";
import { AppProgress, TopicMastery } from "@/types";

export default function ProgressPage() {
  const [progress, setProgress] = useState<AppProgress | null>(null);

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  if (!progress) {
    return <div className="pt-8 text-sm text-gray-400">Loading…</div>;
  }

  const sortedTopics = getAllTopicsSorted(progress);
  const completedCount = getCompletedLessons(progress).length;
  const avgConfidence = getAverageConfidence(progress);
  const moduleSummary = getModuleProgressSummary(progress);

  return (
    <div className="space-y-6 pt-4">
      <div>
        <h1 className="text-xl font-bold">Progress</h1>
        <p className="text-sm text-gray-500 mt-0.5">
          Your learning stats and topic mastery
        </p>
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-3 gap-3">
        <SummaryStat
          label="Lessons Done"
          value={String(completedCount)}
        />
        <SummaryStat
          label="Avg Confidence"
          value={avgConfidence != null ? `${avgConfidence.toFixed(1)}/5` : "—"}
        />
        <SummaryStat
          label="Topics Tracked"
          value={String(sortedTopics.length)}
        />
      </div>

      {/* Module progress */}
      <section>
        <div className="rounded-xl border border-gray-200 overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
            <div>
              <p className="font-semibold text-sm">PE Foundations</p>
              <p className="text-xs text-gray-500">Module 1 · 20 lessons</p>
            </div>
            <span className="text-lg font-bold text-access">
              {moduleSummary.pct}%
            </span>
          </div>
          <div className="px-4 py-3">
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-2">
              <div
                className="h-full bg-access rounded-full transition-all"
                style={{ width: `${moduleSummary.pct}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>{moduleSummary.completed} completed</span>
              <span>{moduleSummary.total - moduleSummary.completed} remaining</span>
            </div>
          </div>
        </div>
      </section>

      {/* Topic mastery list */}
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
          Topic Mastery — Weakest to Strongest
        </h2>
        {sortedTopics.length === 0 ? (
          <p className="text-sm text-gray-500 py-4 text-center">
            Complete a lesson to see your topic mastery here.
          </p>
        ) : (
          <div className="space-y-0 rounded-xl border border-gray-200 divide-y divide-gray-100 overflow-hidden">
            {sortedTopics.map((topic, idx) => (
              <TopicRow key={topic.topicId} topic={topic} rank={idx + 1} total={sortedTopics.length} />
            ))}
          </div>
        )}
      </section>

      {/* Confidence guide */}
      {avgConfidence != null && (
        <section>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
            Confidence Scale
          </h2>
          <div className="rounded-xl border border-gray-200 divide-y divide-gray-100 overflow-hidden text-xs">
            {[
              { n: 1, label: "Not confident — need to revisit" },
              { n: 2, label: "Shaky — recall is incomplete" },
              { n: 3, label: "Decent — some gaps remain" },
              { n: 4, label: "Good — minor gaps only" },
              { n: 5, label: "Solid — ready to discuss in a meeting" },
            ].map(({ n, label }) => (
              <div
                key={n}
                className={`flex items-center gap-3 px-4 py-2.5 ${
                  Math.round(avgConfidence) === n ? "bg-light-cream" : ""
                }`}
              >
                <span className="font-bold w-4 text-center text-access">{n}</span>
                <span className="text-gray-600">{label}</span>
                {Math.round(avgConfidence) === n && (
                  <span className="ml-auto text-access font-medium">← you</span>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function SummaryStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-gray-200 px-3 py-3 text-center">
      <p className="text-2xl font-bold text-access">{value}</p>
      <p className="text-xs text-gray-500 mt-0.5 leading-tight">{label}</p>
    </div>
  );
}

function TopicRow({
  topic,
  rank,
  total,
}: {
  topic: TopicMastery;
  rank: number;
  total: number;
}) {
  const pct = Math.round(topic.score * 100);
  const isWeak = pct < 40;
  const isMid = pct >= 40 && pct < 65;
  const barColor = isWeak ? "bg-rust" : isMid ? "bg-fast" : "bg-access";
  const textColor = isWeak ? "text-rust" : isMid ? "text-fast" : "text-access";
  const rowBg = rank <= 3 ? "bg-light-cream" : "";

  return (
    <div className={`flex items-center gap-3 px-4 py-3 ${rowBg}`}>
      <span className="text-xs text-gray-400 w-5 text-right shrink-0">{rank}</span>
      <div className="flex-1 min-w-0">
        <p className="text-sm truncate">{getTopicLabel(topic.topicId)}</p>
        <div className="flex items-center gap-2 mt-1">
          <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className={`h-full ${barColor} rounded-full`}
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className={`text-xs font-medium shrink-0 ${textColor}`}>
            {pct}%
          </span>
        </div>
      </div>
      <span className="text-xs text-gray-400 shrink-0">
        {topic.lessonsCount}L
      </span>
    </div>
  );
}
