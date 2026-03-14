import type { Lesson } from "@/types/content";

const lesson: Lesson = {
  lessonId: "day-01",
  dayNumber: 1,
  title: "How Private Equity Actually Works",
  estimatedMinutes: 25,
  topics: ["pe-basics", "fund-structure", "capital-flow"],
  difficulty: "foundational",
  prerequisites: [],
  status: "available",
  learningObjectives: [
    "Explain the basic PE fund model in plain English",
    "Understand how capital is called, invested, harvested, and distributed",
    "Distinguish GP-level claims from fund-structure mechanics",
  ],
  blocks: [
    {
      type: "intro",
      title: "Why this matters",
      content:
        "You cannot follow a PE manager meeting if you do not have the fund model in your head. Before performance metrics, before fees, before due diligence — you need the basic mechanics. This lesson builds that baseline.",
    },
    {
      type: "teaching",
      title: "The closed-end fund model",
      content:
        "A PE fund is a closed-end vehicle. LPs commit capital at inception — they do not hand over cash on day one. The GP draws that capital in tranches called capital calls as investments are identified. Once the investment period ends (typically 4–5 years), the fund moves into harvest mode: managing, growing, and eventually exiting portfolio companies. Proceeds flow back to LPs as distributions.",
    },
    {
      type: "teaching",
      title: "The two principals: GP and LP",
      content:
        "The General Partner (GP) manages the fund — sourcing deals, making decisions, overseeing portfolio companies, executing exits. The Limited Partners (LPs) provide the capital and have limited liability and limited control. In exchange for managing capital, the GP earns a management fee (typically 2% on committed capital) and carried interest (20% of profits above a hurdle). Think of the GP as a subcontractor hired by the LPs to deploy and grow their capital.",
    },
    {
      type: "example",
      title: "A $2 billion fund in motion",
      content:
        "A manager closes a $2B fund. Over four years, it calls capital to buy 10 portfolio companies. In year five, it sells the first company at a gain. LPs receive a distribution. By year ten, all holdings are exited and the fund winds down. Throughout this period, the GP reports both unrealized NAV (what portfolio companies are worth today) and realized proceeds (cash already returned).",
    },
    {
      type: "callout",
      title: "Committed vs. invested capital",
      content:
        "Committed capital is the pledge. Invested capital is what has actually been deployed. A fund may be 50% invested three years in — meaning LPs have committed $2B but only $1B has been called and put to work. This distinction matters for calculating return metrics correctly.",
    },
    {
      type: "exercise",
      title: "Put it in your own words",
      content:
        "In two or three sentences, explain to a colleague what happens between the day an LP commits to a PE fund and the day they receive their final distribution. Do not use jargon.",
    },
  ],
  quiz: [
    {
      questionId: "d1q1",
      type: "multiple-choice",
      prompt: "Which statement best describes a typical PE fund?",
      options: [
        "An open-end vehicle with daily subscriptions and redemptions",
        "A closed-end fund where capital is committed up front but drawn over time",
        "A passive vehicle that tracks a private equity benchmark",
        "A permanent capital vehicle with no distribution cycle",
      ],
      correctAnswer:
        "A closed-end fund where capital is committed up front but drawn over time",
    },
    {
      questionId: "d1q2",
      type: "multiple-choice",
      prompt: "Which best describes the GP's role?",
      options: [
        "Provide all the capital and outsource investment decisions",
        "Manage the fund, source deals, make investments, and oversee exits",
        "Act only as a reporting agent for LPs",
        "Match investor flows with public market liquidity",
      ],
      correctAnswer:
        "Manage the fund, source deals, make investments, and oversee exits",
    },
    {
      questionId: "d1q3",
      type: "multiple-choice",
      prompt: "What is a capital call?",
      options: [
        "A request for LPs to contribute a portion of their committed capital",
        "A distribution of profits back to LPs",
        "A fee charged by the GP each quarter",
        "A secondary market sale of LP interests",
      ],
      correctAnswer:
        "A request for LPs to contribute a portion of their committed capital",
    },
    {
      questionId: "d1q4",
      type: "short-response",
      prompt: "Why does the distinction between committed and invested capital matter when evaluating a PE fund's early performance?",
      guidance:
        "Think about what the denominator is in return calculations, and what the LP's actual cash at risk is.",
    },
  ],
  sources: [
    "CFA Institute: Private Markets and Manager Selection",
    "ILPA Educational Materials — Fund Structure Primer",
    "CAIA Level I: Private Equity Overview",
  ],
};

export default lesson;
