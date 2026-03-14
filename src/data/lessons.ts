import { Lesson } from "@/types";

export const allLessons: Lesson[] = [
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
          "A PE fund is a closed-end vehicle where LPs commit capital, the GP calls that capital over time, invests in portfolio companies, and later distributes proceeds as investments are exited. The fund has a fixed life — typically 10 years with extensions — and capital cannot be redeemed like an open-end fund.",
      },
      {
        type: "example",
        title: "Mini example",
        content:
          "A manager raises a $2 billion fund. LPs commit capital but do not wire money upfront. Over years 1–4, the GP issues capital calls totaling $1.8B to fund acquisitions. From years 5–10, portfolio companies are sold and proceeds are distributed back to LPs. The manager charges a 2% management fee on committed capital and takes 20% of profits above the hurdle rate.",
      },
      {
        type: "exercise",
        title: "Quick exercise",
        content:
          "In one or two sentences, explain why committed capital is not the same as invested capital. What does the gap between them represent?",
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
    title: "The J-Curve and Capital Pacing",
    estimatedMinutes: 20,
    topics: ["j-curve", "capital-pacing", "cash-flows"],
    difficulty: "foundational",
    prerequisites: ["day-01"],
    learningObjectives: [
      "Understand why PE funds show early negative returns",
      "Explain capital pacing and vintage year diversification",
      "Read a basic cash flow waterfall",
    ],
    blocks: [
      {
        type: "intro",
        title: "Why this matters",
        content:
          "Allocators who do not understand the J-curve misread early fund performance and make poor pacing decisions.",
      },
      {
        type: "teaching",
        title: "The J-curve effect",
        content:
          "PE funds typically show negative returns in early years as management fees are charged, expenses accrue, and portfolio companies are marked at cost or below. As exits occur and realized gains are distributed, the return curve inflects upward — creating the characteristic J-shape.",
      },
      {
        type: "teaching",
        title: "Capital pacing",
        content:
          "Because PE capital is drawn over 3–5 years, investors must pace their commitments to maintain target allocations. Committing to a new fund each year smooths the cash-flow timing and diversifies across vintage years.",
      },
      {
        type: "example",
        title: "Mini example",
        content:
          "An endowment targets 15% PE. To maintain that target with a 10-year fund life, they commit roughly 1.5% of the portfolio each year, ensuring consistent deployment without overconcentrating in a single vintage.",
      },
      {
        type: "exercise",
        title: "Quick exercise",
        content:
          "A fund is 18 months old and showing -8% IRR. A trustee is concerned. What explanation would you give them?",
      },
    ],
    quiz: [
      {
        questionId: "d2q1",
        type: "multiple-choice",
        prompt: "The J-curve in PE primarily results from:",
        options: [
          "Strong early exits generating outsized returns",
          "Management fees and unrealized investments marked at cost in early years",
          "LPs over-committing relative to their liquidity needs",
          "Benchmark-relative underperformance in public markets",
        ],
        correctAnswer:
          "Management fees and unrealized investments marked at cost in early years",
      },
      {
        questionId: "d2q2",
        type: "multiple-choice",
        prompt: "Vintage year diversification helps allocators primarily by:",
        options: [
          "Concentrating all capital in the best economic environment",
          "Reducing exposure to any single market entry point",
          "Maximizing management fee payments",
          "Avoiding the need to monitor individual funds",
        ],
        correctAnswer:
          "Reducing exposure to any single market entry point",
      },
      {
        questionId: "d2q3",
        type: "short-response",
        prompt:
          "How would you explain the J-curve to a board member who is concerned about early negative returns?",
      },
    ],
    sources: [
      "Cambridge Associates PE benchmarking research",
      "ILPA capital call and distribution guidance",
    ],
  },
  {
    lessonId: "day-03",
    dayNumber: 3,
    title: "IRR, TVPI, DPI, and RVPI Explained",
    estimatedMinutes: 30,
    topics: ["irr", "tvpi", "dpi", "rvpi", "performance-metrics"],
    difficulty: "foundational",
    prerequisites: ["day-01"],
    learningObjectives: [
      "Calculate and interpret IRR in a PE context",
      "Distinguish TVPI, DPI, and RVPI",
      "Identify when each metric is most useful and most misleading",
    ],
    blocks: [
      {
        type: "intro",
        title: "Why this matters",
        content:
          "Every PE manager meeting involves these metrics. Confusing them — or not knowing their limits — is a common allocator error.",
      },
      {
        type: "teaching",
        title: "IRR",
        content:
          "Internal Rate of Return is the discount rate that sets the net present value of all cash flows to zero. In PE, IRR is time-weighted for cash flows — early exits boost it, late exits drag it. A 30% IRR on a fund that returned only 1.2x invested capital is not impressive.",
      },
      {
        type: "teaching",
        title: "Multiples",
        content:
          "TVPI (Total Value to Paid-In) = (Distributions + Residual NAV) / Paid-In Capital. DPI (Distributions to Paid-In) measures realized returns only. RVPI (Residual Value to Paid-In) measures unrealized NAV. TVPI = DPI + RVPI.",
      },
      {
        type: "example",
        title: "Mini example",
        content:
          "Fund invested $100M. Has distributed $150M. Current NAV is $40M. DPI = 1.5x, RVPI = 0.4x, TVPI = 1.9x. A mature fund with high DPI is more credible than an early fund with the same TVPI backed by unrealized NAV.",
      },
      {
        type: "exercise",
        title: "Quick exercise",
        content:
          "A manager shows a 35% IRR with a 1.4x TVPI and 0.2x DPI. Is this impressive? What questions would you ask?",
      },
    ],
    quiz: [
      {
        questionId: "d3q1",
        type: "multiple-choice",
        prompt: "DPI measures:",
        options: [
          "Total value including unrealized investments",
          "Only realized distributions relative to paid-in capital",
          "The internal rate of return on investments",
          "Fee drag on fund performance",
        ],
        correctAnswer:
          "Only realized distributions relative to paid-in capital",
      },
      {
        questionId: "d3q2",
        type: "multiple-choice",
        prompt: "A fund with high IRR but low DPI most likely:",
        options: [
          "Has distributed most capital back to LPs",
          "Relies heavily on unrealized NAV or short holding periods",
          "Has a fully mature portfolio with no remaining investments",
          "Outperformed public markets on a risk-adjusted basis",
        ],
        correctAnswer:
          "Relies heavily on unrealized NAV or short holding periods",
      },
      {
        questionId: "d3q3",
        type: "multiple-choice",
        prompt: "TVPI is best described as:",
        options: [
          "DPI minus RVPI",
          "DPI plus RVPI",
          "IRR adjusted for time",
          "Net of fee cash distributions only",
        ],
        correctAnswer: "DPI plus RVPI",
      },
      {
        questionId: "d3q4",
        type: "short-response",
        prompt:
          "Why might a manager with a 40% IRR still have disappointing absolute returns for an LP?",
      },
    ],
    sources: [
      "CFA Institute private markets readings",
      "GIPS private equity guidance",
      "Cambridge Associates PE benchmarking methodology",
    ],
  },
  {
    lessonId: "day-04",
    dayNumber: 4,
    title: "Fee Structures: Management Fees, Carry, and Hurdle Rates",
    estimatedMinutes: 25,
    topics: ["fees", "carry", "hurdle-rate", "waterfall"],
    difficulty: "foundational",
    prerequisites: ["day-01"],
    learningObjectives: [
      "Understand the 2-and-20 fee model",
      "Explain carried interest mechanics",
      "Calculate a simple waterfall distribution",
    ],
    blocks: [
      {
        type: "intro",
        title: "Why this matters",
        content:
          "Fee terms directly affect net returns. Allocators who cannot model basic carry structures cannot evaluate manager economics.",
      },
      {
        type: "teaching",
        title: "Management fee",
        content:
          "Typically 1.5–2% annually on committed or invested capital. Paid quarterly. Covers fund operations and GP salaries. Some funds step down the fee rate after the investment period.",
      },
      {
        type: "teaching",
        title: "Carried interest",
        content:
          "Carry is the GP's share of profits — typically 20% — above the preferred return (hurdle rate, usually 8%). The waterfall determines when and how carry is paid. European waterfall: all capital returned before carry. American waterfall: deal-by-deal carry with clawback.",
      },
      {
        type: "example",
        title: "Mini example",
        content:
          "Fund A invests $100M. Returns $160M. Hurdle = 8%. After returning $100M principal + $8M hurdle, the remaining $52M is split 80/20 between LPs and GP (carry). GP receives $10.4M in carry. LPs net $149.6M for a 1.496x net multiple.",
      },
      {
        type: "exercise",
        title: "Quick exercise",
        content:
          "Why might an LP prefer a European waterfall structure over an American waterfall structure?",
      },
    ],
    quiz: [
      {
        questionId: "d4q1",
        type: "multiple-choice",
        prompt: "Carried interest is typically:",
        options: [
          "20% of all revenue generated by portfolio companies",
          "The GP's share of fund profits above the hurdle rate",
          "A fee charged on committed capital each year",
          "A penalty paid by LPs for early withdrawal",
        ],
        correctAnswer:
          "The GP's share of fund profits above the hurdle rate",
      },
      {
        questionId: "d4q2",
        type: "multiple-choice",
        prompt: "A European waterfall means:",
        options: [
          "Carry is calculated deal-by-deal",
          "All LP capital is returned before the GP receives carry",
          "Management fees are waived during the investment period",
          "The fund operates under EU regulatory standards",
        ],
        correctAnswer:
          "All LP capital is returned before the GP receives carry",
      },
      {
        questionId: "d4q3",
        type: "short-response",
        prompt:
          "How does the hurdle rate protect LPs, and what happens if a fund underperforms it?",
      },
    ],
    sources: [
      "ILPA fee transparency template",
      "CFA Institute alternative investments curriculum",
    ],
  },
  {
    lessonId: "day-05",
    dayNumber: 5,
    title: "Due Diligence Frameworks for PE Managers",
    estimatedMinutes: 30,
    topics: ["due-diligence", "manager-selection", "track-record"],
    difficulty: "intermediate",
    prerequisites: ["day-01", "day-03", "day-04"],
    learningObjectives: [
      "Apply a structured DD framework to a PE manager",
      "Identify red flags in track record analysis",
      "Evaluate team stability and succession risk",
    ],
    blocks: [
      {
        type: "intro",
        title: "Why this matters",
        content:
          "Manager selection is the primary alpha driver in PE. A weak DD process leads to adverse selection — investing in managers who can market well but not invest well.",
      },
      {
        type: "teaching",
        title: "DD framework pillars",
        content:
          "1. Strategy: edge, sourcing, sector focus, ownership approach. 2. Track record: realized vs unrealized, attribution, benchmark comparison. 3. Team: stability, key-person risk, succession plan, incentive alignment. 4. Operations: fund admin, compliance, LP reporting quality. 5. Terms: fees, carry, co-invest rights, governance.",
      },
      {
        type: "teaching",
        title: "Track record analysis",
        content:
          "Ask for deal-level attribution. How much of the return came from revenue growth vs multiple expansion vs leverage? Verify that key deal personnel are still at the firm. Scrutinize unrealized marks — a high TVPI with 60% unrealized value is less proven than 60% DPI.",
      },
      {
        type: "example",
        title: "Mini example",
        content:
          "Manager X shows a 2.5x TVPI across 3 funds. Fund I: 2.8x DPI (fully realized). Fund II: 1.9x DPI + 0.4x RVPI. Fund III: 0.3x DPI + 2.1x RVPI (early vintage). The pattern shows decreasing realized returns — a yellow flag worth probing.",
      },
      {
        type: "exercise",
        title: "Quick exercise",
        content:
          "A PE manager had strong Fund I results but three senior partners departed before Fund III. What questions would you prioritize in a manager meeting?",
      },
    ],
    quiz: [
      {
        questionId: "d5q1",
        type: "multiple-choice",
        prompt:
          "When evaluating a track record, why is deal-level attribution important?",
        options: [
          "It allows LPs to cherry-pick individual investments for co-investment",
          "It reveals whether returns came from skill or luck, leverage, or market conditions",
          "It is required by the SEC for registered investment advisers",
          "It replaces the need for benchmark comparison",
        ],
        correctAnswer:
          "It reveals whether returns came from skill or luck, leverage, or market conditions",
      },
      {
        questionId: "d5q2",
        type: "multiple-choice",
        prompt:
          "A fund with high TVPI but low DPI in a mature vintage is best described as:",
        options: [
          "A strong performer with excellent realized returns",
          "Early stage with most value still unrealized — requiring more scrutiny",
          "A fully exited portfolio with minimal remaining value",
          "Unsuitable for institutional investors",
        ],
        correctAnswer:
          "Early stage with most value still unrealized — requiring more scrutiny",
      },
      {
        questionId: "d5q3",
        type: "short-response",
        prompt:
          "What is key-person risk and how would you assess it during manager due diligence?",
      },
    ],
    sources: [
      "ILPA due diligence questionnaire",
      "CFA Institute manager selection framework",
      "Preqin PE manager research methodology",
    ],
  },
  // Placeholders for days 6-20
  ...Array.from({ length: 15 }, (_, i) => ({
    lessonId: `day-${String(i + 6).padStart(2, "0")}`,
    dayNumber: i + 6,
    title: [
      "Buyout Strategies: LBO Mechanics",
      "Growth Equity vs Venture vs Buyout",
      "Portfolio Company Value Creation",
      "LP Agreement Key Terms",
      "Secondaries and Liquidity Solutions",
      "Co-Investment Mechanics and Risks",
      "PE in a Portfolio Context",
      "Benchmarking PE Performance",
      "ESG and Impact in PE",
      "GP/LP Relationship Dynamics",
      "Fund of Funds and Multi-Manager Programs",
      "Credit Strategies: Mezzanine and Direct Lending",
      "Infrastructure and Real Assets",
      "Distressed and Special Situations",
      "Building Your PE Investment Framework",
    ][i],
    estimatedMinutes: 20 + (i % 3) * 5,
    topics: [
      ["lbo", "debt-structure", "buyout"],
      ["growth-equity", "venture", "strategy-comparison"],
      ["value-creation", "operations", "portfolio-management"],
      ["lpa", "governance", "lp-rights"],
      ["secondaries", "liquidity", "gp-led"],
      ["co-investment", "deal-flow", "concentration"],
      ["portfolio-construction", "allocation", "diversification"],
      ["benchmarking", "pme", "performance-attribution"],
      ["esg", "impact", "sustainability"],
      ["gp-lp", "alignment", "reporting"],
      ["fund-of-funds", "manager-selection", "diversification"],
      ["credit", "mezzanine", "direct-lending"],
      ["infrastructure", "real-assets", "real-estate"],
      ["distressed", "special-situations", "turnaround"],
      ["framework", "process", "decision-making"],
    ][i],
    difficulty: (i < 5 ? "intermediate" : "advanced") as
      | "intermediate"
      | "advanced",
    prerequisites: i < 3 ? ["day-01"] : ["day-01", "day-02", "day-03"],
    learningObjectives: ["Coming soon — lesson in development"],
    blocks: [
      {
        type: "intro" as const,
        title: "Coming soon",
        content: "This lesson is being developed. Check back soon.",
      },
    ],
    quiz: [],
    sources: [],
    isPlaceholder: true,
  })),
];

export const getLesson = (lessonId: string): Lesson | undefined =>
  allLessons.find((l) => l.lessonId === lessonId);

export const getLessonByDay = (dayNumber: number): Lesson | undefined =>
  allLessons.find((l) => l.dayNumber === dayNumber);
