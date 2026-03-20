/**
 * Centralized color tokens used across the app.
 * Update here to change the palette globally.
 */
export const COLORS = {
  /** Primary accent — completed states, links, CTAs */
  primary: "#2294BD",
  /** Warning / in-progress — orange accent */
  warning: "#FAA51A",
  /** Danger / errors / high-priority — red accent */
  danger: "#D9532B",
  /** Success / high scores — green accent */
  success: "#2A9D60",
  /** Dark green text (used with success backgrounds) */
  successDark: "#1A6B42",
  /** Dark orange text (used with warning backgrounds) */
  warningDark: "#9B6A00",
  /** Purple accent — spaced recall, prerequisite highlights */
  purple: "#7C5CBF",
  /** Body text */
  text: "#404040",
  /** Muted / secondary text */
  muted: "#9A918A",
  /** Black — headings */
  black: "#000000",
  /** Page background — warm off-white */
  pageBg: "#FBF7F3",
  /** Card/section background — warm beige */
  beige: "#F0E6DD",
  /** Border color */
  border: "#E8DDD4",
  /** Disabled / not-started dot */
  disabled: "#D0C8C0",
} as const;

export type ColorToken = keyof typeof COLORS;
