import { LessonContent } from "./types";

// Days 1–5: fully built. Days 6–20: placeholder quiz + minimal blocks.

export const lessonContents: LessonContent[] = [
  // ── Day 1 ──────────────────────────────────────────────────────────────────
  {
    lessonId: "day-01",
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
          "A PE fund is a closed-end vehicle where LPs commit capital, the GP calls that capital over time, invests in portfolio companies, and later distributes proceeds as investments are exited.",
      },
      {
        type: "example",
        title: "Mini example",
        content:
          "A manager raises a $2 billion fund, invests over four years, exits holdings over years five through ten, and reports both interim valuations and realized proceeds.",
      },
      {
        type: "exercise",
        title: "Quick exercise",
        content:
          "In one or two sentences, explain why committed capital is not the same as invested capital.",
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
        modelAnswer:
          "LPs must keep liquid reserves to fund calls on short notice (typically 10 business days). Failure to respond to a capital call can result in severe penalties, including forfeiture of LP interest. The unpredictability of call timing is a real liquidity-management challenge.",
      },
    ],
    sources: [
      "CFA Institute private markets and manager-selection materials",
      "ILPA educational materials",
      "CAIA private equity curriculum references",
    ],
  },

  // ── Day 2 ──────────────────────────────────────────────────────────────────
  {
    lessonId: "day-02",
    blocks: [
      {
        type: "intro",
        title: "Why this matters",
        content:
          "The GP/LP incentive structure is the foundation of every PE relationship. Understanding it lets you read fee terms clearly and spot misalignment.",
      },
      {
        type: "teaching",
        title: "Fee structure",
        content:
          "GPs charge a management fee (typically 1.5–2% of committed capital) to cover operating costs. Carried interest (typically 20%) is the GP's share of profits above the hurdle rate — usually 8% preferred return. The GP clawback ensures excess carry is returned if later deals underperform.",
      },
      {
        type: "example",
        title: "Mini example",
        content:
          "A GP raises a $1B fund with 2% management fee and 20% carry above an 8% hurdle. Annual fees = $20M. If the fund returns 2x net, carry is earned on profits above the hurdle — roughly $160M+ of GP economics.",
      },
      {
        type: "exercise",
        title: "Quick exercise",
        content:
          "A GP earns management fees on committed capital for five years, then switches to invested capital. Why does this step-down matter for LP economics?",
      },
    ],
    quiz: [
      {
        questionId: "d2q1",
        type: "multiple-choice",
        prompt: "What does 'carried interest' represent?",
        options: [
          "The LP's preferred return above the hurdle",
          "The GP's share of fund profits above the hurdle rate",
          "The management fee charged annually on committed capital",
          "The interest rate on fund-level debt",
        ],
        correctAnswer: "The GP's share of fund profits above the hurdle rate",
      },
      {
        questionId: "d2q2",
        type: "multiple-choice",
        prompt: "What is the purpose of a GP clawback?",
        options: [
          "Allow the GP to call back LP capital for follow-on investments",
          "Return excess carried interest to LPs if early wins are reversed by later losses",
          "Give the GP the right to remove underperforming LPs",
          "Extend the fund life beyond the original term",
        ],
        correctAnswer:
          "Return excess carried interest to LPs if early wins are reversed by later losses",
      },
      {
        questionId: "d2q3",
        type: "multiple-choice",
        prompt:
          "Why do LPs typically negotiate a management fee step-down after the investment period?",
        options: [
          "To reduce GP carry once the hurdle is exceeded",
          "Because deployed capital is a smaller base once investing stops",
          "To align GP fees with public market benchmarks",
          "To penalise GPs who miss deployment targets",
        ],
        correctAnswer:
          "Because deployed capital is a smaller base once investing stops",
      },
      {
        questionId: "d2q4",
        type: "short-response",
        prompt:
          "In one sentence, explain how carried interest aligns GP incentives with LP returns.",
        modelAnswer:
          "Carry is only paid on profits above the hurdle, so the GP earns meaningfully only when LPs have first recovered their capital plus preferred return — tying GP upside directly to LP outperformance.",
      },
    ],
    sources: [
      "ILPA Principles 3.0 — fee and alignment guidelines",
      "CFA Institute alternative investments curriculum",
    ],
  },

  // ── Day 3 ──────────────────────────────────────────────────────────────────
  {
    lessonId: "day-03",
    blocks: [
      {
        type: "intro",
        title: "Why this matters",
        content:
          "The J-curve is the single most misunderstood pattern in PE performance reporting. Knowing it prevents you from mis-reading early negative IRRs.",
      },
      {
        type: "teaching",
        title: "The J-curve",
        content:
          "In a fund's early years, management fees and any writedowns drag returns negative before exits generate cash. The result is a characteristic J-shaped return curve over time. Interim IRRs before year 4–5 are nearly meaningless.",
      },
      {
        type: "example",
        title: "Mini example",
        content:
          "A fund reports –8% IRR in year 2. This reflects fees paid before exits, not actual investment losses. The same fund reports +18% net IRR by year 8 after a strong exit cycle.",
      },
      {
        type: "exercise",
        title: "Quick exercise",
        content:
          "A GP presents their Fund III with a 5% net IRR at year 3. Should this concern you? Why or why not?",
      },
    ],
    quiz: [
      {
        questionId: "d3q1",
        type: "multiple-choice",
        prompt: "What causes the J-curve in early fund years?",
        options: [
          "Poor deal selection in the first investment cycle",
          "Management fees and early writedowns before exits generate cash",
          "LPs withdrawing capital in the first two years",
          "Currency losses on international investments",
        ],
        correctAnswer:
          "Management fees and early writedowns before exits generate cash",
      },
      {
        questionId: "d3q2",
        type: "multiple-choice",
        prompt: "When is an interim PE fund IRR most meaningful?",
        options: [
          "Year 1–2, when the portfolio is freshly valued",
          "At the end of the investment period, around year 3–4",
          "After 60–70% of fund life has passed and exits have occurred",
          "Immediately after a capital call",
        ],
        correctAnswer:
          "After 60–70% of fund life has passed and exits have occurred",
      },
      {
        questionId: "d3q3",
        type: "short-response",
        prompt:
          "Why must LPs keep liquid reserves ready even though they know capital calls are coming?",
        modelAnswer:
          "GPs issue calls when deals close, not on a fixed schedule. LPs typically have only 10 business days to fund a call — so they must hold near-term liquidity that is not tied up in illiquid assets or longer-settlement instruments.",
      },
    ],
    sources: [
      "Cambridge Associates PE benchmark methodology",
      "CAIA alternative investments curriculum",
    ],
  },

  // ── Day 4 ──────────────────────────────────────────────────────────────────
  {
    lessonId: "day-04",
    blocks: [
      {
        type: "intro",
        title: "Why this matters",
        content:
          "IRR is the dominant PE performance metric — and the most gamed. Fluency means knowing both what it measures and where it breaks down.",
      },
      {
        type: "teaching",
        title: "How IRR works",
        content:
          "IRR is the annualised discount rate that makes the NPV of all cash flows (capital calls in, distributions out) equal to zero. It rewards fast returns and penalises slow ones. Gross IRR excludes fees; net IRR is what LPs actually earn.",
      },
      {
        type: "example",
        title: "Where IRR misleads",
        content:
          "A GP returns $5M on a $1M investment in year 1 (5x, 400% IRR) — and $50M on a $25M investment in year 5 (2x, 15% IRR). The first deal looks better on IRR; the second created far more wealth.",
      },
      {
        type: "exercise",
        title: "Quick exercise",
        content:
          "Name two ways a GP could manipulate reported IRR without changing underlying investment outcomes.",
      },
    ],
    quiz: [
      {
        questionId: "d4q1",
        type: "multiple-choice",
        prompt: "What does IRR specifically measure?",
        options: [
          "Total value created per dollar of invested capital",
          "The annualised return that sets NPV of all fund cash flows to zero",
          "The ratio of distributions to paid-in capital",
          "The compounded return on peak NAV",
        ],
        correctAnswer:
          "The annualised return that sets NPV of all fund cash flows to zero",
      },
      {
        questionId: "d4q2",
        type: "multiple-choice",
        prompt: "Why can a high IRR fund still create little dollar profit?",
        options: [
          "Because IRR ignores fees",
          "Because IRR is time-weighted but not capital-weighted — small fast wins inflate it",
          "Because IRR is reported gross before LP economics",
          "Because IRR resets each year",
        ],
        correctAnswer:
          "Because IRR is time-weighted but not capital-weighted — small fast wins inflate it",
      },
      {
        questionId: "d4q3",
        type: "multiple-choice",
        prompt: "Which best describes 'subscription line financing' and its IRR effect?",
        options: [
          "A revolving credit facility that delays capital calls, inflating reported IRR",
          "A GP tool to reduce management fees for large LPs",
          "An LP facility to pre-fund capital calls from a credit line",
          "A secondary market financing mechanism",
        ],
        correctAnswer:
          "A revolving credit facility that delays capital calls, inflating reported IRR",
      },
      {
        questionId: "d4q4",
        type: "short-response",
        prompt:
          "You are comparing two funds: Fund A reports 28% gross IRR; Fund B reports 22% net IRR. Which is more useful for your analysis and why?",
        modelAnswer:
          "Fund B's net IRR is more useful — it reflects what LPs actually earned after fees and carry. Gross IRR overstates returns and is not comparable across managers with different fee structures. Always evaluate net IRR for LP economics.",
      },
    ],
    sources: [
      "CFA Institute alternative investments — performance measurement",
      "Preqin GP benchmarking methodology",
    ],
  },

  // ── Day 5 ──────────────────────────────────────────────────────────────────
  {
    lessonId: "day-05",
    blocks: [
      {
        type: "intro",
        title: "Why this matters",
        content:
          "TVPI, DPI, and RVPI together tell you how much a fund has returned, how much is real cash, and how much is still a mark. You need all three alongside IRR.",
      },
      {
        type: "teaching",
        title: "The three multiples",
        content:
          "TVPI (Total Value to Paid-In) = (NAV + distributions) / capital called. DPI (Distributions to Paid-In) = distributions / capital called — realized only. RVPI (Residual Value to Paid-In) = NAV / capital called — unrealized only. TVPI = DPI + RVPI.",
      },
      {
        type: "example",
        title: "Reading multiples",
        content:
          "Year 7 fund: TVPI 1.8x, DPI 0.9x, RVPI 0.9x. Half the value is still unrealized. Compare to a year-10 fund: TVPI 1.8x, DPI 1.7x, RVPI 0.1x — almost fully realized. The year-10 fund's 1.8x is real; the year-7 fund's is half paper.",
      },
      {
        type: "exercise",
        title: "Quick exercise",
        content:
          "A fund is in year 9 with TVPI 1.6x and DPI 0.6x. What concern does this raise?",
      },
    ],
    quiz: [
      {
        questionId: "d5q1",
        type: "multiple-choice",
        prompt: "What does DPI measure?",
        options: [
          "Total fund value (realized + unrealized) divided by capital called",
          "Distributions paid to LPs divided by capital called",
          "Residual NAV divided by total committed capital",
          "The GP's net profit after fees and carry",
        ],
        correctAnswer: "Distributions paid to LPs divided by capital called",
      },
      {
        questionId: "d5q2",
        type: "multiple-choice",
        prompt:
          "A fund in year 9 shows TVPI 1.9x but DPI 0.5x. What is the most likely concern?",
        options: [
          "The fund is outperforming peers on a realized basis",
          "Most reported value is still unrealized — the GP has not returned capital",
          "The fund has over-distributed relative to its NAV",
          "IRR is being inflated by subscription line financing",
        ],
        correctAnswer:
          "Most reported value is still unrealized — the GP has not returned capital",
      },
      {
        questionId: "d5q3",
        type: "multiple-choice",
        prompt: "TVPI equals:",
        options: ["DPI × RVPI", "DPI + RVPI", "DPI − RVPI", "RVPI / DPI"],
        correctAnswer: "DPI + RVPI",
      },
      {
        questionId: "d5q4",
        type: "short-response",
        prompt:
          "Why is DPI more important than TVPI when evaluating a fund in its final years?",
        modelAnswer:
          "In a mature fund, unrealized NAV should be minimal. High TVPI driven by high RVPI means the GP is sitting on marks rather than returning cash. LPs need DPI to assess actual liquidity returned — TVPI at that stage can reflect overly optimistic valuations.",
      },
    ],
    sources: [
      "ILPA reporting standards",
      "CFA Institute performance measurement framework",
      "Cambridge Associates benchmarking data definitions",
    ],
  },

  // ── Days 6–20: placeholder content ────────────────────────────────────────
  ...(
    [
      { lessonId: "day-06", topic: "Fund Life Cycles and Vintage Years" },
      { lessonId: "day-07", topic: "Buyout Strategy Fundamentals" },
      { lessonId: "day-08", topic: "Growth Equity vs. Buyout vs. Venture" },
      { lessonId: "day-09", topic: "Value Creation in PE Portfolio Companies" },
      { lessonId: "day-10", topic: "Exit Paths: Trade Sales, IPOs, and Secondaries" },
      { lessonId: "day-11", topic: "Fund Terms: What to Negotiate" },
      { lessonId: "day-12", topic: "Manager Selection and Due Diligence" },
      { lessonId: "day-13", topic: "Benchmarking PE Performance" },
      { lessonId: "day-14", topic: "Portfolio Construction and Pacing" },
      { lessonId: "day-15", topic: "Secondaries: Liquidity and Opportunity" },
      { lessonId: "day-16", topic: "Co-investments: Structure and Risks" },
      { lessonId: "day-17", topic: "PE as an Asset Class: Allocation Frameworks" },
      { lessonId: "day-18", topic: "Reporting, NAV, and Mark-to-Market" },
      { lessonId: "day-19", topic: "ESG, Impact, and New Pressures on PE" },
      { lessonId: "day-20", topic: "PE Fluency: Putting It All Together" },
    ] as { lessonId: string; topic: string }[]
  ).map(({ lessonId, topic }) => ({
    lessonId,
    blocks: [
      {
        type: "intro" as const,
        title: "Coming soon",
        content: `Full lesson content for "${topic}" is being developed. The quiz below is a preview.`,
      },
    ],
    quiz: [
      {
        questionId: `${lessonId}-placeholder`,
        type: "short-response" as const,
        prompt: `What is the most important concept you want to understand from "${topic}"?`,
        modelAnswer:
          "Full model answers will appear when lesson content is complete.",
      },
    ],
    sources: ["Content in development"],
  })),
];

export function getLessonContent(lessonId: string): LessonContent | undefined {
  return lessonContents.find((l) => l.lessonId === lessonId);
}
