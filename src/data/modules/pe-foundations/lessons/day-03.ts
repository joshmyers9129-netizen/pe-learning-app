import type { Lesson } from "@/types/content";

const lesson: Lesson = {
  lessonId: "day-03",
  dayNumber: 3,
  title: "The J-Curve: Why PE Returns Look Bad Before They Look Good",
  estimatedMinutes: 25,
  topics: ["j-curve", "fund-lifecycle", "interim-performance", "pacing"],
  difficulty: "foundational",
  prerequisites: ["day-01"],
  status: "available",
  learningObjectives: [
    "Explain what the J-curve is and why it occurs structurally",
    "Understand how management fees and early write-downs create negative early IRR",
    "Interpret interim fund performance without being misled by lifecycle stage",
  ],
  blocks: [
    {
      type: "intro",
      title: "Why this matters",
      content:
        "Every PE fund looks bad in the first few years. This is structural, not a red flag. If you don't understand the J-curve, you will misread interim performance reports and ask the wrong questions in manager meetings.",
    },
    {
      type: "teaching",
      title: "The J-curve mechanism",
      content:
        "In a PE fund's early years, two forces push reported returns negative. First, management fees are charged from day one but no gains have been realized yet — the fund is burning cash on overhead before any exit proceeds arrive. Second, early portfolio valuations often reflect entry price or small write-downs, not value creation. The result is a negative IRR in years one through three that improves as exits occur and realized gains accumulate. Plotted over time, the return curve dips below zero and then curves upward — the J shape.",
    },
    {
      type: "teaching",
      title: "Vintage year and lifecycle stage",
      content:
        "Because of the J-curve, comparing funds of different vintage years is problematic. A 2022 fund in year two looks far worse than a 2018 fund in year six — not because it is worse, but because it is earlier in its lifecycle. Sophisticated allocators always adjust for vintage year when benchmarking. They also track Paid-In Capital (PIC) — what fraction of committed capital has been called — to understand where the fund sits in its lifecycle.",
    },
    {
      type: "example",
      title: "Fund A vs. Fund B",
      content:
        "Fund A (vintage 2018, year 6): IRR of 18%, DPI of 1.2x — strong realized returns, most exits done. Fund B (vintage 2022, year 2): IRR of -4%, DPI of 0x — no exits, just fees and early marks. A naive comparison makes Fund B look terrible. In context, a -4% IRR in year two tells you almost nothing about ultimate outcomes. You would focus on portfolio construction quality, deal sourcing, and the manager's track record from prior funds.",
    },
    {
      type: "callout",
      title: "What to look for instead",
      content:
        "When a fund is in the J-curve phase, ask about: (1) portfolio company fundamentals and early KPIs, (2) the GP's prior fund track record at comparable stages, (3) deal-level investment thesis execution, and (4) the entry multiples paid relative to current market conditions.",
    },
    {
      type: "exercise",
      title: "Interpret the scenario",
      content:
        "A manager shows you a fund with a -6% net IRR in year three. Your CIO asks if this is a concern. How do you respond? What questions do you ask before drawing a conclusion?",
    },
  ],
  quiz: [
    {
      questionId: "d3q1",
      type: "multiple-choice",
      prompt: "Which two forces primarily cause the J-curve in early PE fund performance?",
      options: [
        "High leverage and volatile public markets",
        "Management fees charged before gains are realized and early conservative valuations",
        "Low deal flow and excessive diversification",
        "GP co-investment and fee offsets",
      ],
      correctAnswer:
        "Management fees charged before gains are realized and early conservative valuations",
    },
    {
      questionId: "d3q2",
      type: "multiple-choice",
      prompt: "A fund in year two shows a -5% IRR. What is the most appropriate interpretation?",
      options: [
        "The fund is likely to fail and the LP should consider a secondary sale",
        "This is a likely structural artifact of the J-curve and tells you little about ultimate returns",
        "The GP has made poor investments",
        "The management fee is too high",
      ],
      correctAnswer:
        "This is a likely structural artifact of the J-curve and tells you little about ultimate returns",
    },
    {
      questionId: "d3q3",
      type: "multiple-choice",
      prompt: "Why is vintage year important when benchmarking PE funds?",
      options: [
        "Older funds always outperform newer ones",
        "It controls for lifecycle stage so performance comparisons are meaningful",
        "It determines the management fee level",
        "LPs choose preferred return rates based on vintage year",
      ],
      correctAnswer:
        "It controls for lifecycle stage so performance comparisons are meaningful",
    },
    {
      questionId: "d3q4",
      type: "short-response",
      prompt:
        "You are reviewing two funds with negative IRRs. One is in year two, the other in year seven. How does your assessment differ?",
      guidance:
        "Consider what a negative IRR means at each stage of the fund lifecycle.",
    },
  ],
  sources: [
    "Cambridge Associates: PE Benchmark Commentary",
    "Preqin: Fund Lifecycle and Performance Metrics",
    "CAIA Level I: Private Equity Performance and Measurement",
  ],
};

export default lesson;
