"use client";

import { useState } from "react";
import type { LessonBlock as LessonBlockType } from "@/types/lesson";

const BLOCK_STYLES: Record<
  string,
  { border: string; accent: string; badge: string; label: string }
> = {
  intro: {
    border: "border-l-4 border-[#2294BD]",
    accent: "text-[#2294BD]",
    badge: "bg-[#2294BD] text-white",
    label: "Overview",
  },
  teaching: {
    border: "border-l-4 border-[#404040]",
    accent: "text-[#404040]",
    badge: "bg-[#404040] text-white",
    label: "Concept",
  },
  example: {
    border: "border-l-4 border-[#FAA51A]",
    accent: "text-[#D9532B]",
    badge: "bg-[#FAA51A] text-black",
    label: "Example",
  },
  exercise: {
    border: "border-l-4 border-[#D9532B]",
    accent: "text-[#D9532B]",
    badge: "bg-[#D9532B] text-white",
    label: "Exercise",
  },
};

const COLLAPSIBLE_TYPES = new Set(["teaching", "example", "exercise"]);

interface Props {
  block: LessonBlockType;
  index: number;
}

export default function LessonBlock({ block, index }: Props) {
  const [open, setOpen] = useState(true);
  const style = BLOCK_STYLES[block.type] ?? BLOCK_STYLES.teaching;
  const collapsible = COLLAPSIBLE_TYPES.has(block.type);
  const paragraphs = block.content
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);

  const headerId = `block-${index}-header`;
  const contentId = `block-${index}-content`;

  return (
    <div className={`rounded-lg bg-white ${style.border} shadow-sm overflow-hidden`}>
      {/* Header */}
      {collapsible ? (
        <button
          id={headerId}
          aria-expanded={open}
          aria-controls={contentId}
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2294BD]"
        >
          <div className="flex items-center gap-2 min-w-0">
            <span
              className={`shrink-0 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${style.badge}`}
            >
              {style.label}
            </span>
            <span className="font-semibold text-[15px] text-[#000000] truncate">
              {block.title}
            </span>
          </div>
          <svg
            className={`shrink-0 w-4 h-4 text-[#404040] transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="4 6 8 10 12 6" />
          </svg>
        </button>
      ) : (
        <div className="flex items-center gap-2 px-4 py-3">
          <span
            className={`shrink-0 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${style.badge}`}
          >
            {style.label}
          </span>
          <span className="font-semibold text-[15px] text-[#000000]">
            {block.title}
          </span>
        </div>
      )}

      {/* Content */}
      <div
        id={contentId}
        role={collapsible ? "region" : undefined}
        aria-labelledby={collapsible ? headerId : undefined}
        className={`transition-all duration-200 ease-in-out ${
          !collapsible || open ? "block" : "hidden"
        }`}
      >
        <div className="px-4 pb-4 pt-1 space-y-2 border-t border-[#F0E6DD]">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-[15px] leading-relaxed text-[#000000]">
              {p}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
