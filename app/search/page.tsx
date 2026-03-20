"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { getDefaultModule } from "@/lib/modules";
import { lessonContents } from "@/lib/lessonContent";
import { topicLabel } from "@/lib/topics";
import { Difficulty } from "@/lib/types";
import { useDebounce } from "@/hooks/useDebounce";
import { MATCH_TYPE_LABELS } from "@/lib/ui-config";

interface SearchResult {
  lessonId: string;
  dayNumber: number;
  title: string;
  difficulty: Difficulty;
  matchType: "title" | "topic" | "objective" | "content";
  matchContext: string;
}

function searchLessons(query: string): SearchResult[] {
  if (query.length < 2) return [];
  const q = query.toLowerCase();
  const mod = getDefaultModule();
  const results: SearchResult[] = [];
  const seen = new Set<string>();

  for (const lesson of mod.lessons) {
    // Title match
    if (lesson.title.toLowerCase().includes(q)) {
      results.push({
        lessonId: lesson.lessonId,
        dayNumber: lesson.dayNumber,
        title: lesson.title,
        difficulty: lesson.difficulty,
        matchType: "title",
        matchContext: lesson.title,
      });
      seen.add(lesson.lessonId + ":title");
    }

    // Topic match
    for (const topic of lesson.topics) {
      const label = topicLabel(topic).toLowerCase();
      if (label.includes(q) || topic.includes(q)) {
        const key = lesson.lessonId + ":topic";
        if (!seen.has(key)) {
          results.push({
            lessonId: lesson.lessonId,
            dayNumber: lesson.dayNumber,
            title: lesson.title,
            difficulty: lesson.difficulty,
            matchType: "topic",
            matchContext: `Topic: ${topicLabel(topic)}`,
          });
          seen.add(key);
        }
      }
    }

    // Learning objective match
    for (const obj of lesson.learningObjectives) {
      if (obj.toLowerCase().includes(q)) {
        const key = lesson.lessonId + ":objective";
        if (!seen.has(key)) {
          results.push({
            lessonId: lesson.lessonId,
            dayNumber: lesson.dayNumber,
            title: lesson.title,
            difficulty: lesson.difficulty,
            matchType: "objective",
            matchContext: obj,
          });
          seen.add(key);
        }
      }
    }

    // Content match (search lesson blocks)
    const content = lessonContents.find((c) => c.lessonId === lesson.lessonId);
    if (content) {
      for (const block of content.blocks) {
        if (block.content && block.content.toLowerCase().includes(q)) {
          const key = lesson.lessonId + ":content";
          if (!seen.has(key)) {
            // Extract context around match
            const idx = block.content.toLowerCase().indexOf(q);
            const start = Math.max(0, idx - 60);
            const end = Math.min(block.content.length, idx + query.length + 60);
            const snippet =
              (start > 0 ? "..." : "") +
              block.content.slice(start, end) +
              (end < block.content.length ? "..." : "");
            results.push({
              lessonId: lesson.lessonId,
              dayNumber: lesson.dayNumber,
              title: lesson.title,
              difficulty: lesson.difficulty,
              matchType: "content",
              matchContext: snippet,
            });
            seen.add(key);
          }
        }
      }
    }
  }

  // Sort: title matches first, then topic, objective, content
  const order = { title: 0, topic: 1, objective: 2, content: 3 };
  results.sort((a, b) => order[a.matchType] - order[b.matchType] || a.dayNumber - b.dayNumber);
  return results;
}

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 250);
  const results = useMemo(() => searchLessons(debouncedQuery), [debouncedQuery]);

  return (
    <main className="min-h-screen bg-[#FBF7F3]">
      <div className="max-w-2xl mx-auto px-4 py-6 pb-24">
        <div className="mb-5">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-[#404040] mb-1">
            Search
          </h2>
          <h1 className="text-2xl font-bold text-[#000000]">Find concepts</h1>
        </div>

        {/* Search input */}
        <div className="relative mb-5">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search lessons, topics, concepts..."
            autoFocus
            className="w-full rounded-xl border border-[#E8DDD4] bg-white px-4 py-3 pl-10 text-sm text-[#000000] placeholder:text-[#9A918A] focus:outline-none focus:border-[#2294BD] focus:ring-1 focus:ring-[#2294BD]/30 transition-colors"
          />
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9A918A] text-sm">
            &#x2315;
          </span>
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9A918A] hover:text-[#000000] text-sm"
            >
              &#x2715;
            </button>
          )}
        </div>

        {/* Results */}
        {query.length >= 2 && (
          <p className="text-xs text-[#404040] mb-3">
            {results.length} result{results.length !== 1 ? "s" : ""}
          </p>
        )}

        {query.length >= 2 && results.length === 0 && (
          <div className="rounded-2xl border border-[#E8DDD4] bg-white px-6 py-10 text-center">
            <p className="text-base font-semibold text-[#000000] mb-2">No results</p>
            <p className="text-sm text-[#404040]">
              Try different keywords or check spelling.
            </p>
          </div>
        )}

        {results.length > 0 && (
          <div className="rounded-2xl border border-[#E8DDD4] bg-white overflow-hidden shadow-sm">
            {results.map((r, i) => {
              const mt = MATCH_TYPE_LABELS[r.matchType];
              return (
                <Link
                  key={`${r.lessonId}-${r.matchType}-${i}`}
                  href={`/lesson/${r.lessonId}`}
                  className={`block px-4 py-3 hover:bg-[#2294BD]/5 transition-colors ${
                    i > 0 ? "border-t border-[#F0E6DD]" : ""
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-[#404040]">
                      Day {r.dayNumber}
                    </span>
                    <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full ${mt.color}`}>
                      {mt.label}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-[#000000] leading-snug">
                    {r.title}
                  </p>
                  {r.matchType !== "title" && (
                    <p className="text-xs text-[#404040] mt-1 leading-relaxed line-clamp-2">
                      {r.matchContext}
                    </p>
                  )}
                </Link>
              );
            })}
          </div>
        )}

        {query.length < 2 && (
          <div className="rounded-2xl border border-[#E8DDD4] bg-white px-6 py-10 text-center">
            <p className="text-sm text-[#404040]">
              Type at least 2 characters to search across all lesson titles, topics, learning objectives, and content.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
