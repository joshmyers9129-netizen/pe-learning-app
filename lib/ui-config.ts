import { COLORS } from "./theme";
import type { LessonStatus, Difficulty, CardType, Priority } from "./types";

// ── Lesson status styling ────────────────────────────────────────────────────

export const STATUS_CONFIG: Record<
  LessonStatus,
  { label: string; dot: string; row: string; badge: string }
> = {
  completed: {
    label: "Completed",
    dot: `bg-[${COLORS.primary}]`,
    row: "bg-white",
    badge: `bg-[${COLORS.primary}]/10 text-[${COLORS.primary}]`,
  },
  "in-progress": {
    label: "In Progress",
    dot: `bg-[${COLORS.warning}]`,
    row: `bg-[${COLORS.warning}]/5`,
    badge: `bg-[${COLORS.warning}]/15 text-[${COLORS.danger}]`,
  },
  "not-started": {
    label: "Not started",
    dot: `bg-[${COLORS.disabled}]`,
    row: "bg-white",
    badge: `bg-[${COLORS.beige}] text-[${COLORS.text}]`,
  },
};

// ── Difficulty pip colors ────────────────────────────────────────────────────

export const DIFFICULTY_COLORS: Record<Difficulty, string> = {
  foundational: `bg-[${COLORS.primary}]`,
  intermediate: `bg-[${COLORS.warning}]`,
  advanced: `bg-[${COLORS.danger}]`,
};

// ── Review card type styling ─────────────────────────────────────────────────

export const CARD_TYPE_CONFIG: Record<
  CardType,
  { label: string; bg: string; text: string; border: string }
> = {
  flashcard: {
    label: "Flashcard",
    bg: `bg-[${COLORS.primary}]/10`,
    text: `text-[${COLORS.primary}]`,
    border: `border-[${COLORS.primary}]/20`,
  },
  "mini-case": {
    label: "Mini-case",
    bg: `bg-[${COLORS.danger}]/10`,
    text: `text-[${COLORS.danger}]`,
    border: `border-[${COLORS.danger}]/20`,
  },
  reteach: {
    label: "Reteach",
    bg: `bg-[${COLORS.warning}]/15`,
    text: `text-[${COLORS.warningDark}]`,
    border: `border-[${COLORS.warning}]/30`,
  },
};

// ── Review priority styling ──────────────────────────────────────────────────

export const PRIORITY_CONFIG: Record<
  Priority,
  { label: string; dot: string; text: string }
> = {
  high: { label: "High priority", dot: `bg-[${COLORS.danger}]`, text: `text-[${COLORS.danger}]` },
  medium: { label: "Medium", dot: `bg-[${COLORS.warning}]`, text: `text-[${COLORS.warningDark}]` },
  low: { label: "Low", dot: `bg-[${COLORS.primary}]`, text: `text-[${COLORS.primary}]` },
};

// ── SRS rating buttons ───────────────────────────────────────────────────────

export const SRS_RATINGS = [
  { quality: 1, label: "Again", color: `text-[${COLORS.danger}] bg-[${COLORS.danger}]/10 hover:bg-[${COLORS.danger}]/18` },
  { quality: 3, label: "Hard", color: `text-[${COLORS.warning}] bg-[${COLORS.warning}]/10 hover:bg-[${COLORS.warning}]/18` },
  { quality: 4, label: "Good", color: `text-[${COLORS.primary}] bg-[${COLORS.primary}]/10 hover:bg-[${COLORS.primary}]/18` },
  { quality: 5, label: "Easy", color: `text-[${COLORS.successDark}] bg-[${COLORS.success}]/10 hover:bg-[${COLORS.success}]/18` },
];

// ── Confidence labels (used in calibration + lesson quiz) ────────────────────

export const CONFIDENCE_LABELS: Record<number, string> = {
  1: "Not at all (1)",
  2: "Shaky (2)",
  3: "Okay (3)",
  4: "Solid (4)",
  5: "Nailed it (5)",
};

/** Short labels for the confidence rating buttons (no number suffix) */
export const CONFIDENCE_SHORT_LABELS = ["Not at all", "Shaky", "Okay", "Solid", "Nailed it"];

// ── Search match type styling ────────────────────────────────────────────────

export const MATCH_TYPE_LABELS: Record<string, { label: string; color: string }> = {
  title: { label: "Title", color: `text-[${COLORS.primary}] bg-[${COLORS.primary}]/10` },
  topic: { label: "Topic", color: `text-[${COLORS.warningDark}] bg-[${COLORS.warning}]/15` },
  objective: { label: "Objective", color: `text-[${COLORS.successDark}] bg-[${COLORS.success}]/10` },
  content: { label: "Content", color: `text-[${COLORS.text}] bg-[${COLORS.beige}]` },
};
