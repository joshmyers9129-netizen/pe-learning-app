import type { Lesson } from "@/types/content";

const lesson: Lesson = {
  lessonId: "day-04",
  dayNumber: 4,
  title: "Performance Metrics: IRR, TVPI, DPI, and RVPI",
  estimatedMinutes: 30,
  topics: ["irr", "tvpi", "dpi", "rvpi", "performance-measurement"],
  difficulty: "foundational",
  prerequisites: ["day-01", "day-03"],
  status: "available",
  learningObjectives: [
    "Define IRR, TVPI, DPI, and RVPI and explain what each measures",
    "Understand the limitations of IRR as a standalone metric",
    "Know how DPI vs. RVPI splits tell you about return quality",
  ],
  blocks: [
    {
      type: "intro",
      title: "Why this matters",
      content:
        "PE performance reporting uses a vocabulary that differs from public markets. Misreading DPI as TVPI, or treating IRR as equivalent to annualized return, are common errors. This lesson makes these metrics precise and practical.",
    },
    {
      type: "teaching",
      title: "IRR: Time-weighted money, not calendar-weighted",
      content:
        "Internal Rate of Return (IRR) is the discount rate that makes the net present value of all cash flows zero. In PE, cash flows are capital calls (outflows) and distributions (inflows). A high IRR can result from a fast, modest exit — not necessarily a large absolute gain. IRR rewards speed, which is why managers sometimes use subscription lines of credit to delay capital calls and artificially boost IRR. Always look at IRR alongside multiples.",
    },
    {
      type: "teaching",
      title: "TVPI, DPI, and RVPI",
      content:
        "Total Value to Paid-In (TVPI) = (Distributions + Remaining NAV) / Paid-In Capital. This is the total return multiple, combining realized and unrealized value. Distributions to Paid-In (DPI) = Cash Distributed / Paid-In Capital. This is the 'money back' multiple — only realized gains count. Residual Value to Paid-In (RVPI) = Remaining NAV / Paid-In Capital. This is the unrealized value still held in the fund. TVPI = DPI + RVPI.",
    },
    {
      type: "callout",
      title: "The quality spectrum",
      content:
        "A TVPI of 2.0x with DPI of 1.8x is very different from a TVPI of 2.0x with DPI of 0.2x. The first fund has returned most of its value in cash. The second is largely paper gains — dependent on future exits at current marks. As a fund matures, watch DPI rise and RVPI fall. A late-vintage fund with a high RVPI is a yellow flag.",
    },
    {
      type: "example",
      title: "Reading a real fund report",
      content:
        "Fund stats: Committed $200M, Called $180M, Distributed $140M, NAV $120M. TVPI = (140 + 120) / 180 = 1.44x. DPI = 140 / 180 = 0.78x. RVPI = 120 / 180 = 0.67x. IRR: 14% net. This fund has returned less than capital in cash (DPI < 1.0x) but has significant unrealized value. At year 5, this may be reasonable. At year 9, it warrants closer scrutiny of the remaining portfolio.",
    },
    {
      type: "exercise",
      title: "Calculate and interpret",
      content:
        "A fund has called $300M, distributed $90M, and has a remaining NAV of $420M. Calculate TVPI, DPI, and RVPI. What does the DPI/RVPI split tell you about this fund's current stage?",
    },
  ],
  quiz: [
    {
      questionId: "d4q1",
      type: "multiple-choice",
      prompt: "A fund has DPI of 0.4x and RVPI of 1.3x. What does this indicate?",
      options: [
        "The fund has returned most of its value in cash with little remaining",
        "The fund has returned little cash but holds significant unrealized value",
        "The fund is in the J-curve and has not yet called capital",
        "The fund's IRR exceeds its hurdle rate",
      ],
      correctAnswer:
        "The fund has returned little cash but holds significant unrealized value",
    },
    {
      questionId: "d4q2",
      type: "multiple-choice",
      prompt: "Why can IRR be misleading as a standalone metric?",
      options: [
        "IRR ignores the hurdle rate",
        "IRR does not account for management fees",
        "IRR rewards speed and can be boosted by timing of cash flows, not just size of gains",
        "IRR is not audited by third parties",
      ],
      correctAnswer:
        "IRR rewards speed and can be boosted by timing of cash flows, not just size of gains",
    },
    {
      questionId: "d4q3",
      type: "multiple-choice",
      prompt: "TVPI is best described as:",
      options: [
        "Only the realized cash returned to LPs",
        "The sum of distributions and remaining NAV divided by paid-in capital",
        "The fund's IRR expressed as a multiple",
        "The ratio of management fees to total returns",
      ],
      correctAnswer:
        "The sum of distributions and remaining NAV divided by paid-in capital",
    },
    {
      questionId: "d4q4",
      type: "multiple-choice",
      prompt: "A fund in year nine has a TVPI of 1.8x but a DPI of 0.5x. This is:",
      options: [
        "Normal and expected for a mature fund",
        "A sign of exceptional performance",
        "Potentially concerning — most value is still unrealized late in the fund's life",
        "Impossible — DPI must exceed RVPI by year nine",
      ],
      correctAnswer:
        "Potentially concerning — most value is still unrealized late in the fund's life",
    },
    {
      questionId: "d4q5",
      type: "short-response",
      prompt:
        "A manager shows you a 22% gross IRR. What additional metrics would you request before drawing any conclusions, and why?",
      guidance:
        "Think about net vs. gross, cash realization, and how timing can inflate IRR.",
    },
  ],
  sources: [
    "ILPA Reporting Template — Performance Metrics",
    "CFA Institute: Private Equity Valuation and Performance",
    "Burgiss Private Capital Indices Methodology",
  ],
};

export default lesson;
