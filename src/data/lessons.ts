import type { Module } from "@/types/lesson";

export const peFoundations: Module = {
  moduleId: "pe-foundations",
  moduleTitle: "Private Equity Foundations",
  lessons: [
    {
      lessonId: "day-01",
      dayNumber: 1,
      title: "How Private Equity Actually Works",
      estimatedMinutes: 25,
      topics: ["pe-basics", "fund-structure", "capital-flow"],
      difficulty: "foundational",
      prerequisites: [],
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
            "You cannot follow a PE manager meeting if you do not have the fund model in your head. This lesson builds the baseline.",
        },
        {
          type: "teaching",
          title: "Core concept",
          content:
            "A PE fund is a closed-end vehicle where LPs commit capital, the GP calls that capital over time, invests in portfolio companies, and later distributes proceeds as investments are exited.\n\nThe GP typically has a 10-year fund life: ~5 years to invest, ~5 years to harvest. LPs cannot redeem early — their capital is locked until the fund winds down.\n\nManagement fees (usually 1.5–2%) cover operating costs during the fund life. Carried interest (usually 20% of profits above a hurdle rate) is the GP's primary economic incentive.",
        },
        {
          type: "example",
          title: "Mini example",
          content:
            "A manager raises a $2 billion fund. Over years 1–4, the GP sends capital calls as deals are identified — LPs wire money within 10 business days of each call. By year 4, $1.8B of the $2B committed is invested across 12 portfolio companies.\n\nFrom years 5–10, the GP works to exit each company via IPO, sale, or recapitalization. As exits occur, proceeds are distributed back to LPs. The final IRR and TVPI are only fully calculable once the fund is fully wound down.",
        },
        {
          type: "exercise",
          title: "Quick exercise",
          content:
            "In one or two sentences, explain why committed capital is not the same as invested capital. Then write a second sentence explaining why this distinction matters for LPs managing their liquidity.",
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
            "A passive vehicle that tracks a benchmark",
            "A permanent capital vehicle with no distribution cycle",
          ],
          correctAnswer:
            "A closed-end fund where capital is committed up front but drawn over time",
        },
        {
          questionId: "d1q2",
          type: "multiple-choice",
          prompt: "Which is the best description of the GP's role?",
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
          type: "short-response",
          prompt: "Why does the capital call structure matter for LPs?",
        },
      ],
      sources: [
        "CFA Institute private markets and manager-selection materials",
        "ILPA educational materials",
        "CAIA private equity curriculum references",
      ],
    },
    {
      lessonId: "day-02",
      dayNumber: 2,
      title: "IRR, TVPI, DPI, and RVPI Explained",
      estimatedMinutes: 20,
      topics: ["performance-metrics", "irr", "multiples"],
      difficulty: "foundational",
      prerequisites: ["day-01"],
      learningObjectives: [
        "Define IRR, TVPI, DPI, and RVPI in plain terms",
        "Understand when each metric is most useful",
        "Recognize how managers can game IRR",
      ],
      blocks: [
        {
          type: "intro",
          title: "Why this matters",
          content:
            "PE performance reporting uses a set of metrics that look similar but measure very different things. Mixing them up in a manager meeting signals inexperience immediately.",
        },
        {
          type: "teaching",
          title: "The four metrics",
          content:
            "IRR (Internal Rate of Return): A time-weighted measure of annualized return. Sensitive to the timing of cash flows. Can be inflated by early exits or subscription line use.\n\nTVPI (Total Value to Paid-In): Total value (realized + unrealized) divided by capital invested. A simple 'how much did $1 become?' check. No time adjustment.\n\nDPI (Distributions to Paid-In): Only counts realized cash returned to LPs. The most conservative, auditable multiple. A DPI of 1.0x means you've gotten your money back.\n\nRVPI (Residual Value to Paid-In): Unrealized NAV divided by paid-in. Represents what's still in the fund on paper. TVPI = DPI + RVPI.",
        },
        {
          type: "example",
          title: "Mini example",
          content:
            "A fund called $100M, has returned $80M in distributions (DPI = 0.8x), and carries $60M in remaining NAV (RVPI = 0.6x). TVPI = 0.8 + 0.6 = 1.4x. If this happened over 5 years, gross IRR might be ~12–14% depending on cash flow timing.",
        },
        {
          type: "exercise",
          title: "Quick exercise",
          content:
            "A manager reports a 2.1x TVPI and a 1.3x DPI on a fund in year 8. What does this tell you? What follow-up question would you ask?",
        },
      ],
      quiz: [
        {
          questionId: "d2q1",
          type: "multiple-choice",
          prompt: "DPI of 0.8x on a mature fund means:",
          options: [
            "The fund has returned 80% of invested capital in cash",
            "The fund has 80% of value remaining unrealized",
            "The IRR is 8%",
            "The fund lost money",
          ],
          correctAnswer:
            "The fund has returned 80% of invested capital in cash",
        },
        {
          questionId: "d2q2",
          type: "multiple-choice",
          prompt: "Why might a high IRR be misleading on an early-stage fund?",
          options: [
            "IRR is not a real metric",
            "Early exits and subscription lines can inflate IRR",
            "IRR only counts unrealized value",
            "IRR is always lower than TVPI",
          ],
          correctAnswer:
            "Early exits and subscription lines can inflate IRR",
        },
        {
          questionId: "d2q3",
          type: "short-response",
          prompt:
            "A fund shows 2.5x TVPI and 0.4x DPI in year 9. What concern might you raise?",
        },
      ],
      sources: [
        "CFA Institute Level III private markets curriculum",
        "ILPA performance reporting standards",
        "CAIA Association study materials",
      ],
    },
  ],
};

export function getLessonById(id: string) {
  return peFoundations.lessons.find((l) => l.lessonId === id) ?? null;
}

export function getAllLessons() {
  return peFoundations.lessons;
}
