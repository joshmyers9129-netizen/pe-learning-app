"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { getDefaultModule } from "@/lib/modules";
import { getModuleProgress, getAllQuizResults } from "@/lib/progress";
import { topicLabel } from "@/lib/topics";

const MODULE_ID = "pe-foundations";

interface ConceptNode {
  lessonId: string;
  dayNumber: number;
  title: string;
  topics: string[];
  prerequisites: string[];
  score: number | null; // null = not attempted
  status: "not-started" | "in-progress" | "completed";
}

interface DependencyEdge {
  from: string; // prerequisite lessonId
  to: string;   // dependent lessonId
}

function buildGraph() {
  if (typeof window === "undefined") return { nodes: [] as ConceptNode[], edges: [] as DependencyEdge[] };
  const mod = getDefaultModule();
  const progress = getModuleProgress(MODULE_ID);
  const quizResults = getAllQuizResults();

  const nodes: ConceptNode[] = mod.lessons.map((l) => ({
    lessonId: l.lessonId,
    dayNumber: l.dayNumber,
    title: l.title,
    topics: l.topics,
    prerequisites: l.prerequisites,
    score: quizResults[l.lessonId]?.score ?? null,
    status: progress[l.lessonId]?.status ?? "not-started",
  }));

  const edges: DependencyEdge[] = [];
  for (const lesson of mod.lessons) {
    for (const prereq of lesson.prerequisites) {
      edges.push({ from: prereq, to: lesson.lessonId });
    }
  }

  return { nodes, edges };
}

// Find downstream lessons that depend on a given lesson (directly or transitively)
function findDownstream(lessonId: string, edges: DependencyEdge[]): Set<string> {
  const result = new Set<string>();
  const queue = [lessonId];
  while (queue.length > 0) {
    const current = queue.shift()!;
    for (const e of edges) {
      if (e.from === current && !result.has(e.to)) {
        result.add(e.to);
        queue.push(e.to);
      }
    }
  }
  return result;
}

function scoreColor(score: number | null, status: string): string {
  if (status === "not-started") return "bg-[#E8DDD4] text-[#9A918A]";
  if (score === null) return "bg-[#FAA51A]/15 text-[#9B6A00]";
  if (score >= 0.8) return "bg-[#2A9D60]/15 text-[#1A6B42]";
  if (score >= 0.5) return "bg-[#FAA51A]/15 text-[#9B6A00]";
  return "bg-[#D9532B]/12 text-[#D9532B]";
}

function scoreBorder(score: number | null, status: string): string {
  if (status === "not-started") return "border-[#E8DDD4]";
  if (score === null) return "border-[#FAA51A]/30";
  if (score >= 0.8) return "border-[#2A9D60]/30";
  if (score >= 0.5) return "border-[#FAA51A]/30";
  return "border-[#D9532B]/30";
}

export default function ConceptsPage() {
  const { nodes, edges } = useMemo(() => buildGraph(), []);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const downstream = useMemo(() => {
    if (!selectedNode) return new Set<string>();
    return findDownstream(selectedNode, edges);
  }, [selectedNode, edges]);

  const upstream = useMemo(() => {
    if (!selectedNode) return new Set<string>();
    const result = new Set<string>();
    const queue = [selectedNode];
    while (queue.length > 0) {
      const current = queue.shift()!;
      for (const e of edges) {
        if (e.to === current && !result.has(e.from)) {
          result.add(e.from);
          queue.push(e.from);
        }
      }
    }
    return result;
  }, [selectedNode, edges]);

  const selectedNodeData = nodes.find((n) => n.lessonId === selectedNode);

  // Find weak foundations: lessons with score < 0.7 that have downstream dependencies
  const weakFoundations = nodes.filter((n) => {
    if (n.score === null || n.score >= 0.7) return false;
    return edges.some((e) => e.from === n.lessonId);
  });

  // Compute risk: downstream lessons of weak foundations
  const atRisk = new Set<string>();
  for (const weak of weakFoundations) {
    const ds = findDownstream(weak.lessonId, edges);
    ds.forEach((id) => atRisk.add(id));
  }

  return (
    <main className="min-h-screen bg-[#FBF7F3]">
      <div className="max-w-2xl mx-auto px-4 py-6 pb-24">
        <div className="mb-5">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#404040] mb-1">
            Concept Map
          </h2>
          <h1 className="text-2xl font-bold text-[#000000]">
            Dependencies &amp; weak foundations
          </h1>
        </div>

        {/* Weak foundations alert */}
        {weakFoundations.length > 0 && (
          <div className="rounded-2xl border border-[#D9532B]/20 bg-white p-5 mb-5">
            <p className="text-[10px] font-bold text-[#D9532B] uppercase tracking-widest mb-1">
              Weak foundations detected
            </p>
            <p className="text-xs text-[#404040] mb-3">
              These lessons scored below 70% and feed into later concepts. Shaky here means shaky downstream.
            </p>
            <div className="space-y-2">
              {weakFoundations.map((n) => (
                <button
                  key={n.lessonId}
                  onClick={() => setSelectedNode(n.lessonId)}
                  className="w-full flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-[#D9532B]/5 transition-colors text-left"
                >
                  <span className="text-xs font-bold text-[#404040] w-12">
                    Day {n.dayNumber}
                  </span>
                  <span className="text-sm text-[#000000] flex-1 truncate">
                    {n.title}
                  </span>
                  <span className="text-xs font-medium text-[#D9532B]">
                    {Math.round((n.score ?? 0) * 100)}%
                  </span>
                  <span className="text-[10px] text-[#404040]">
                    → {findDownstream(n.lessonId, edges).size} downstream
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Selected node detail */}
        {selectedNodeData && (
          <div className="rounded-2xl border border-[#2294BD]/20 bg-white p-5 mb-5">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-[10px] font-bold text-[#2294BD] uppercase tracking-widest mb-0.5">
                  Day {selectedNodeData.dayNumber}
                </p>
                <p className="text-[15px] font-semibold text-[#000000]">
                  {selectedNodeData.title}
                </p>
              </div>
              <button
                onClick={() => setSelectedNode(null)}
                className="text-xs text-[#404040] hover:text-[#000000]"
              >
                ✕
              </button>
            </div>
            <div className="flex gap-4 mb-3">
              <div>
                <p className="text-[10px] font-bold text-[#404040] uppercase tracking-widest">Score</p>
                <p className={`text-lg font-bold ${
                  selectedNodeData.score === null ? "text-[#9A918A]"
                    : selectedNodeData.score >= 0.8 ? "text-[#1A6B42]"
                    : selectedNodeData.score >= 0.5 ? "text-[#9B6A00]"
                    : "text-[#D9532B]"
                }`}>
                  {selectedNodeData.score !== null ? `${Math.round(selectedNodeData.score * 100)}%` : "—"}
                </p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-[#404040] uppercase tracking-widest">Depends on</p>
                <p className="text-lg font-bold text-[#000000]">{upstream.size}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-[#404040] uppercase tracking-widest">Feeds into</p>
                <p className="text-lg font-bold text-[#000000]">{downstream.size}</p>
              </div>
            </div>
            <div className="flex gap-1.5 flex-wrap mb-3">
              {selectedNodeData.topics.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-medium text-[#404040] bg-[#F0E6DD] px-1.5 py-0.5 rounded-full"
                >
                  {topicLabel(t)}
                </span>
              ))}
            </div>
            <Link
              href={`/lesson/${selectedNodeData.lessonId}`}
              className="text-xs font-medium text-[#2294BD] hover:underline"
            >
              Go to lesson →
            </Link>
          </div>
        )}

        {/* Dependency grid */}
        <div className="rounded-2xl border border-[#E8DDD4] bg-white p-5">
          <p className="text-[10px] font-bold text-[#404040] uppercase tracking-widest mb-1">
            All lessons
          </p>
          <p className="text-xs text-[#9A918A] mb-4">
            Tap a lesson to see its dependencies. Arrow (→) = feeds into next lesson.
            {atRisk.size > 0 && (
              <span className="text-[#D9532B]"> Orange border = at risk from weak foundation.</span>
            )}
          </p>

          <div className="space-y-1.5">
            {nodes.map((n) => {
              const isSelected = selectedNode === n.lessonId;
              const isUpstream = upstream.has(n.lessonId);
              const isDownstream = downstream.has(n.lessonId);
              const isAtRisk = atRisk.has(n.lessonId);
              const hasArrow = edges.some((e) => e.from === n.lessonId);

              let highlight = "";
              if (isSelected) highlight = "ring-2 ring-[#2294BD]";
              else if (isUpstream) highlight = "ring-1 ring-[#7C5CBF]/40 bg-[#7C5CBF]/5";
              else if (isDownstream) highlight = "ring-1 ring-[#FAA51A]/40 bg-[#FAA51A]/5";

              return (
                <button
                  key={n.lessonId}
                  onClick={() => setSelectedNode(isSelected ? null : n.lessonId)}
                  className={`w-full flex items-center gap-2 rounded-xl px-3 py-2 border transition-all text-left ${
                    scoreBorder(n.score, n.status)
                  } ${highlight} ${
                    isAtRisk && !isSelected && !isUpstream && !isDownstream ? "border-[#D9532B]/30" : ""
                  } hover:bg-[#2294BD]/5`}
                >
                  {/* Day number */}
                  <span className="text-[10px] font-bold text-[#9A918A] w-7 text-right flex-shrink-0">
                    {n.dayNumber}
                  </span>

                  {/* Prereq arrows */}
                  {n.prerequisites.length > 0 && (
                    <span className="text-[10px] text-[#9A918A] flex-shrink-0">
                      ←{n.prerequisites.length}
                    </span>
                  )}

                  {/* Title */}
                  <span className="text-sm text-[#000000] flex-1 truncate">
                    {n.title}
                  </span>

                  {/* Score pill */}
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full flex-shrink-0 ${scoreColor(n.score, n.status)}`}>
                    {n.status === "not-started"
                      ? "—"
                      : n.score !== null
                      ? `${Math.round(n.score * 100)}%`
                      : "IP"}
                  </span>

                  {/* Downstream arrow */}
                  {hasArrow && (
                    <span className="text-[10px] text-[#9A918A] flex-shrink-0">→</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex gap-4 mt-4 pt-3 border-t border-[#F0E6DD]">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-[#2A9D60]/15 border border-[#2A9D60]/30" />
              <span className="text-[10px] text-[#404040]">≥80%</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-[#FAA51A]/15 border border-[#FAA51A]/30" />
              <span className="text-[10px] text-[#404040]">50–79%</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-[#D9532B]/12 border border-[#D9532B]/30" />
              <span className="text-[10px] text-[#404040]">&lt;50%</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-[#E8DDD4] border border-[#E8DDD4]" />
              <span className="text-[10px] text-[#404040]">Not started</span>
            </div>
            {selectedNode && (
              <>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-[#7C5CBF]/10 ring-1 ring-[#7C5CBF]/40" />
                  <span className="text-[10px] text-[#404040]">Prerequisite</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-[#FAA51A]/10 ring-1 ring-[#FAA51A]/40" />
                  <span className="text-[10px] text-[#404040]">Depends on this</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
