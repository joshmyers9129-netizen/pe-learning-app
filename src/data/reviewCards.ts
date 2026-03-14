import { ReviewCard } from "@/types";

// Seed review cards tied to fully built lessons (days 1-5)
export const seedReviewCards: Omit<ReviewCard, "dueAt" | "easeFactor" | "interval">[] = [
  {
    cardId: "rc-d1-1",
    lessonId: "day-01",
    topicId: "pe-basics",
    type: "flashcard",
    prompt: "What is the difference between committed capital and invested capital?",
    answer:
      "Committed capital is the total amount LPs have pledged to fund. Invested capital is the amount actually drawn and deployed. The gap represents uncalled capital, which LPs must hold in reserve.",
  },
  {
    cardId: "rc-d1-2",
    lessonId: "day-01",
    topicId: "fund-structure",
    type: "flashcard",
    prompt: "What is the typical lifespan of a PE fund?",
    answer:
      "10 years, usually with 1–2 year extensions. The investment period is typically years 1–5; harvesting occurs in years 5–10.",
  },
  {
    cardId: "rc-d2-1",
    lessonId: "day-02",
    topicId: "j-curve",
    type: "flashcard",
    prompt: "Why do PE funds show negative returns in early years?",
    answer:
      "Management fees are charged while capital is still being deployed. Early investments are marked at cost or below. No exits have generated distributions yet.",
  },
  {
    cardId: "rc-d2-2",
    lessonId: "day-02",
    topicId: "capital-pacing",
    type: "mini-case",
    prompt:
      "An endowment targets 15% PE. They have been invested for 3 years with one manager showing -5% IRR. Should they be worried?",
    answer:
      "Not necessarily. At 3 years, a fund is likely still in J-curve territory. Focus on deployment pace, portfolio company quality, and unrealized marks rather than IRR. Compare to vintage-year peers.",
  },
  {
    cardId: "rc-d3-1",
    lessonId: "day-03",
    topicId: "tvpi",
    type: "flashcard",
    prompt: "What does TVPI measure and how is it calculated?",
    answer:
      "Total Value to Paid-In: (Distributions + Residual NAV) / Paid-In Capital. It captures total return including both realized and unrealized value.",
  },
  {
    cardId: "rc-d3-2",
    lessonId: "day-03",
    topicId: "dpi",
    type: "flashcard",
    prompt: "Why is DPI considered a more reliable measure than TVPI for mature funds?",
    answer:
      "DPI only counts realized cash distributions — money actually returned to LPs. TVPI includes unrealized NAV, which depends on manager valuations and may not be realized at those marks.",
  },
  {
    cardId: "rc-d3-3",
    lessonId: "day-03",
    topicId: "irr",
    type: "reteach",
    prompt: "Reteach: Why can IRR be misleading when comparing PE managers?",
    answer:
      "IRR is sensitive to timing — early exits inflate it, late exits depress it. A fund returning 1.2x with a 30% IRR did not create much wealth. Always pair IRR with a multiple (TVPI or DPI) for a complete picture.",
  },
  {
    cardId: "rc-d4-1",
    lessonId: "day-04",
    topicId: "carry",
    type: "flashcard",
    prompt: "What is carried interest and who receives it?",
    answer:
      "Carried interest is the GP's share of fund profits above the hurdle rate — typically 20%. It is the primary incentive compensation for the fund manager.",
  },
  {
    cardId: "rc-d4-2",
    lessonId: "day-04",
    topicId: "waterfall",
    type: "mini-case",
    prompt:
      "Fund A uses a European waterfall. Fund B uses an American waterfall. Which is generally more LP-friendly, and why?",
    answer:
      "European waterfall is more LP-friendly. All LP capital must be returned first before the GP receives any carry. American waterfall allows deal-by-deal carry, so GPs can receive carry on winning deals even if later deals lose money (though clawback provisions help mitigate this).",
  },
  {
    cardId: "rc-d5-1",
    lessonId: "day-05",
    topicId: "due-diligence",
    type: "flashcard",
    prompt: "What are the five pillars of a PE manager due diligence framework?",
    answer:
      "1. Strategy (edge, sourcing, focus), 2. Track record (realized vs unrealized, attribution), 3. Team (stability, succession, alignment), 4. Operations (admin, compliance, reporting), 5. Terms (fees, carry, governance).",
  },
  {
    cardId: "rc-d5-2",
    lessonId: "day-05",
    topicId: "track-record",
    type: "reteach",
    prompt: "Reteach: What makes a track record analysis rigorous vs superficial?",
    answer:
      "Rigorous analysis requires deal-level attribution (not just fund-level IRR), verification that key deal personnel are still at the firm, scrutiny of unrealized marks on recent vintages, benchmark comparison (PME), and understanding of market conditions during the vintage.",
  },
];
