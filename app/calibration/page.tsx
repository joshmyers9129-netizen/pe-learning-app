"use client";

import { useState } from "react";
import Link from "next/link";
import { getDefaultModule } from "@/lib/modules";
import { getQuizHistory } from "@/lib/progress";
import { topicLabel } from "@/lib/topics";
import { CONFIDENCE_LABELS } from "@/lib/ui-config";

interface CalibrationPoint {
  lessonId: string;
  dayNumber: number;
  title: string;
  topics: string[];
  confidence: number;
  score: number; // 0–1
  attemptNumber: number;
  completedAt: string;
}

function getCalibrationData(): CalibrationPoint[] {
  if (typeof window === "undefined") return [];
  const mod = getDefaultModule();
  const points: CalibrationPoint[] = [];

  for (const lesson of mod.lessons) {
    const history = getQuizHistory(lesson.lessonId);
    for (const attempt of history) {
      points.push({
        lessonId: lesson.lessonId,
        dayNumber: lesson.dayNumber,
        title: lesson.title,
        topics: lesson.topics,
        confidence: attempt.confidence,
        score: attempt.score,
        attemptNumber: attempt.attemptNumber,
        completedAt: attempt.completedAt,
      });
    }
  }

  return points.sort((a, b) => new Date(a.completedAt).getTime() - new Date(b.completedAt).getTime());
}

// Group by confidence level and compute average actual score
function computeCalibration(points: CalibrationPoint[]) {
  const buckets: Record<number, { total: number; scoreSum: number }> = {};
  for (let c = 1; c <= 5; c++) buckets[c] = { total: 0, scoreSum: 0 };

  for (const p of points) {
    buckets[p.confidence].total += 1;
    buckets[p.confidence].scoreSum += p.score;
  }

  return Object.entries(buckets).map(([conf, data]) => ({
    confidence: Number(conf),
    count: data.total,
    avgScore: data.total > 0 ? data.scoreSum / data.total : 0,
    expectedScore: Number(conf) / 5, // What you'd expect if calibrated
  }));
}

// Find the biggest gaps between confidence and actual performance
function findGaps(points: CalibrationPoint[]): CalibrationPoint[] {
  return points
    .filter((p) => p.score < 1)
    .map((p) => ({
      ...p,
      gap: p.confidence / 5 - p.score, // positive = overconfident
    }))
    .sort((a, b) => (b as unknown as { gap: number }).gap - (a as unknown as { gap: number }).gap)
    .slice(0, 5);
}

// Simple bar chart component
function CalibrationBar({
  label,
  actual,
  expected,
  count,
}: {
  label: string;
  actual: number;
  expected: number;
  count: number;
}) {
  const overconfident = actual < expected - 0.1;
  const underconfident = actual > expected + 0.1;

  return (
    <div className="mb-3">
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs font-medium text-[#000000]">{label}</span>
        <span className="text-[10px] text-[#9A918A]">
          {count} attempt{count !== 1 ? "s" : ""}
        </span>
      </div>
      <div className="relative h-6 rounded-lg bg-[#F0E6DD] overflow-hidden">
        {/* Expected score line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-[#404040]/30 z-10"
          style={{ left: `${expected * 100}%` }}
        />
        {/* Actual score bar */}
        {count > 0 && (
          <div
            className={`h-full rounded-lg transition-all ${
              overconfident
                ? "bg-[#D9532B]/60"
                : underconfident
                ? "bg-[#2294BD]/60"
                : "bg-[#2A9D60]/60"
            }`}
            style={{ width: `${Math.max(actual * 100, 2)}%` }}
          />
        )}
      </div>
      <div className="flex justify-between mt-0.5">
        <span className="text-[10px] text-[#404040]">
          Actual: {count > 0 ? `${Math.round(actual * 100)}%` : "—"}
        </span>
        <span className="text-[10px] text-[#9A918A]">
          Expected: {Math.round(expected * 100)}%
        </span>
      </div>
    </div>
  );
}

export default function CalibrationPage() {
  const [points] = useState<CalibrationPoint[]>(getCalibrationData);
  const calibration = computeCalibration(points);
  const gaps = findGaps(points);

  // Overall metrics
  const avgConfidence = points.length > 0
    ? points.reduce((s, p) => s + p.confidence, 0) / points.length
    : 0;
  const avgScore = points.length > 0
    ? points.reduce((s, p) => s + p.score, 0) / points.length
    : 0;
  const overconfidentPct = avgConfidence / 5 - avgScore;

  // Per-topic breakdown
  const topicMap = new Map<string, { confidence: number[]; scores: number[] }>();
  for (const p of points) {
    for (const t of p.topics) {
      if (!topicMap.has(t)) topicMap.set(t, { confidence: [], scores: [] });
      const entry = topicMap.get(t)!;
      entry.confidence.push(p.confidence);
      entry.scores.push(p.score);
    }
  }
  const topicCalibration = Array.from(topicMap.entries())
    .map(([topic, data]) => ({
      topic,
      avgConf: data.confidence.reduce((a, b) => a + b, 0) / data.confidence.length,
      avgScore: data.scores.reduce((a, b) => a + b, 0) / data.scores.length,
      count: data.scores.length,
      gap: data.confidence.reduce((a, b) => a + b, 0) / data.confidence.length / 5 -
        data.scores.reduce((a, b) => a + b, 0) / data.scores.length,
    }))
    .sort((a, b) => b.gap - a.gap);

  return (
    <main className="min-h-screen bg-[#FBF7F3]">
      <div className="max-w-2xl mx-auto px-4 py-6 pb-24">
        <div className="mb-5">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#404040] mb-1">
            Calibration
          </h2>
          <h1 className="text-2xl font-bold text-[#000000]">
            Do you know what you think you know?
          </h1>
        </div>

        {points.length === 0 ? (
          <div className="rounded-2xl border border-[#E8DDD4] bg-white px-6 py-10 text-center">
            <p className="text-base font-semibold text-[#000000] mb-2">No data yet</p>
            <p className="text-sm text-[#404040] mb-4">
              Complete some lesson quizzes to see how your confidence aligns with your actual performance.
            </p>
            <Link
              href="/modules"
              className="inline-block text-sm font-medium text-[#2294BD] bg-[#2294BD]/10 hover:bg-[#2294BD]/18 px-4 py-2 rounded-xl transition-colors"
            >
              Go to Modules →
            </Link>
          </div>
        ) : (
          <>
            {/* Overall summary */}
            <div className="rounded-2xl border border-[#E8DDD4] bg-white p-5 mb-5">
              <div className="grid grid-cols-3 gap-4 text-center mb-4">
                <div>
                  <p className="text-2xl font-bold text-[#000000]">
                    {avgConfidence.toFixed(1)}/5
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#404040]">
                    Avg confidence
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#000000]">
                    {Math.round(avgScore * 100)}%
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#404040]">
                    Avg score
                  </p>
                </div>
                <div>
                  <p className={`text-2xl font-bold ${
                    overconfidentPct > 0.1 ? "text-[#D9532B]"
                      : overconfidentPct < -0.1 ? "text-[#2294BD]"
                      : "text-[#2A9D60]"
                  }`}>
                    {overconfidentPct > 0.05 ? "+" : ""}{Math.round(overconfidentPct * 100)}%
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#404040]">
                    {overconfidentPct > 0.1 ? "Overconfident"
                      : overconfidentPct < -0.1 ? "Underconfident"
                      : "Calibrated"}
                  </p>
                </div>
              </div>
              <p className="text-sm text-[#404040] text-center">
                {overconfidentPct > 0.15
                  ? "You consistently rate yourself higher than your scores suggest. Focus on the topics flagged below."
                  : overconfidentPct < -0.1
                  ? "You underestimate yourself — your scores are better than you think. Trust your preparation more."
                  : "Your self-assessment tracks well with actual performance. Good metacognition."}
              </p>
            </div>

            {/* Confidence vs score chart */}
            <div className="rounded-2xl border border-[#E8DDD4] bg-white p-5 mb-5">
              <p className="text-[10px] font-bold text-[#404040] uppercase tracking-widest mb-1">
                Confidence vs actual score
              </p>
              <p className="text-xs text-[#9A918A] mb-4">
                Colored bar = actual score. Vertical line = expected if perfectly calibrated.
                <span className="text-[#D9532B]"> Red</span> = overconfident.
                <span className="text-[#2294BD]"> Blue</span> = underconfident.
                <span className="text-[#2A9D60]"> Green</span> = calibrated.
              </p>
              {calibration.map((c) => (
                <CalibrationBar
                  key={c.confidence}
                  label={CONFIDENCE_LABELS[c.confidence]}
                  actual={c.avgScore}
                  expected={c.expectedScore}
                  count={c.count}
                />
              ))}
            </div>

            {/* Topic-level gaps */}
            {topicCalibration.length > 0 && (
              <div className="rounded-2xl border border-[#E8DDD4] bg-white p-5 mb-5">
                <p className="text-[10px] font-bold text-[#404040] uppercase tracking-widest mb-1">
                  Topic calibration gaps
                </p>
                <p className="text-xs text-[#9A918A] mb-4">
                  Sorted by largest overconfidence gap first.
                </p>
                <div className="space-y-2">
                  {topicCalibration.map((t) => (
                    <div key={t.topic} className="flex items-center gap-3">
                      <span className="text-xs font-medium text-[#000000] w-32 truncate">
                        {topicLabel(t.topic)}
                      </span>
                      <div className="flex-1 h-4 rounded bg-[#F0E6DD] overflow-hidden relative">
                        <div
                          className={`h-full rounded ${
                            t.gap > 0.1 ? "bg-[#D9532B]/50"
                              : t.gap < -0.1 ? "bg-[#2294BD]/50"
                              : "bg-[#2A9D60]/50"
                          }`}
                          style={{ width: `${Math.max(t.avgScore * 100, 2)}%` }}
                        />
                        <div
                          className="absolute top-0 bottom-0 w-0.5 bg-[#404040]/40"
                          style={{ left: `${(t.avgConf / 5) * 100}%` }}
                        />
                      </div>
                      <span className={`text-[10px] font-medium w-10 text-right ${
                        t.gap > 0.1 ? "text-[#D9532B]"
                          : t.gap < -0.1 ? "text-[#2294BD]"
                          : "text-[#2A9D60]"
                      }`}>
                        {t.gap > 0 ? "+" : ""}{Math.round(t.gap * 100)}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Biggest individual gaps */}
            {gaps.length > 0 && (
              <div className="rounded-2xl border border-[#D9532B]/15 bg-white p-5">
                <p className="text-[10px] font-bold text-[#D9532B] uppercase tracking-widest mb-1">
                  Biggest blind spots
                </p>
                <p className="text-xs text-[#9A918A] mb-3">
                  Lessons where your confidence was highest relative to your actual score.
                </p>
                <div className="space-y-2">
                  {gaps.map((g, i) => (
                    <Link
                      key={`${g.lessonId}-${g.attemptNumber}-${i}`}
                      href={`/lesson/${g.lessonId}`}
                      className="flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-[#D9532B]/5 transition-colors"
                    >
                      <span className="text-xs font-bold text-[#404040] w-12">
                        Day {g.dayNumber}
                      </span>
                      <span className="text-sm text-[#000000] flex-1 truncate">
                        {g.title}
                      </span>
                      <span className="text-xs text-[#404040]">
                        {g.confidence}/5 conf
                      </span>
                      <span className="text-xs font-medium text-[#D9532B]">
                        {Math.round(g.score * 100)}% actual
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
