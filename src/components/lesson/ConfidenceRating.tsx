"use client";

import type { ConfidenceLevel } from "@/types/content";

const labels: Record<ConfidenceLevel, string> = {
  1: "Not at all",
  2: "Slightly",
  3: "Somewhat",
  4: "Mostly",
  5: "Completely",
};

interface Props {
  value: ConfidenceLevel | null;
  onChange: (v: ConfidenceLevel) => void;
}

export default function ConfidenceRating({ value, onChange }: Props) {
  return (
    <div>
      <p className="text-sm font-medium mb-3">
        How confident do you feel about this material?
      </p>
      <div className="flex gap-2">
        {([1, 2, 3, 4, 5] as ConfidenceLevel[]).map((level) => (
          <button
            key={level}
            onClick={() => onChange(level)}
            title={labels[level]}
            className={`flex-1 flex flex-col items-center py-2 rounded-lg border text-xs transition-colors ${
              value === level
                ? "bg-access text-white border-access"
                : "bg-white border-black/10 text-muted hover:border-access/40"
            }`}
          >
            <span className="text-base font-semibold">{level}</span>
            <span className="hidden sm:block leading-tight text-center">
              {labels[level]}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
