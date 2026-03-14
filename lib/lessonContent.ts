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

  // ── Day 6 ──────────────────────────────────────────────────────────────────
  {
    lessonId: "day-06",
    blocks: [
      {
        type: "intro",
        title: "Why this matters",
        content:
          "Every fund you evaluate is at a different point in its life cycle. Knowing which phase a fund is in changes how you read its IRR, its DPI, and its manager's claims about value creation.",
      },
      {
        type: "teaching",
        title: "The three phases",
        content:
          "A typical PE fund has three phases. The investment period (years 1–5): the GP sources deals, calls capital, and deploys it. The value-creation period (years 3–7): portfolio companies are actively managed. The harvesting period (years 5–10): exits occur and capital is distributed. Most LPAs allow one or two one-year extensions, making real fund lives often 12–13 years.",
      },
      {
        type: "teaching",
        title: "Vintage year and why it matters",
        content:
          "A fund's vintage year is the year it made its first investment (some use the year of final close). Vintage year is the primary benchmarking axis — comparing a 2009 fund against a 2007 fund ignores that one bought assets cheaply post-crisis and the other bought at the peak. Macro cycles, credit conditions, and entry multiples all vary dramatically by vintage.",
      },
      {
        type: "example",
        title: "Mini-case: same GP, different vintages",
        content:
          "A mid-market buyout manager raised Fund IV in 2006 (vintage 2007) and Fund V in 2010 (vintage 2011). Fund IV returned 1.4x net — deals were bought at 9–10x EBITDA at peak leverage. Fund V returned 2.3x net — the same strategy applied to assets bought at 6–7x EBITDA post-GFC. The manager's skill did not change dramatically; the vintage did.",
      },
      {
        type: "exercise",
        title: "Quick exercise",
        content:
          "A GP shows you Fund III (vintage 2016, year 7) with IRR of 14% net and DPI of 0.4x. What questions would you ask to understand whether the fund is on track?",
      },
    ],
    quiz: [
      {
        questionId: "d6q1",
        type: "multiple-choice",
        prompt: "What does 'vintage year' refer to in PE?",
        options: [
          "The year the fund held its first LP meeting",
          "The year the fund made its first investment or held final close",
          "The year the GP was founded",
          "The year the fund reached its target size",
        ],
        correctAnswer:
          "The year the fund made its first investment or held final close",
      },
      {
        questionId: "d6q2",
        type: "multiple-choice",
        prompt: "Why is vintage year the primary axis for benchmarking PE funds?",
        options: [
          "Because fee structures vary by vintage",
          "Because macro conditions and entry valuations differ by year, making cross-vintage comparisons misleading",
          "Because GPs only disclose performance by vintage cohort",
          "Because IRR can only be computed after the vintage year is known",
        ],
        correctAnswer:
          "Because macro conditions and entry valuations differ by year, making cross-vintage comparisons misleading",
      },
      {
        questionId: "d6q3",
        type: "multiple-choice",
        prompt:
          "A fund is in year 6 with low DPI but high RVPI. Which phase is it most likely in?",
        options: [
          "Investment period — still deploying capital",
          "Value-creation phase — portfolio companies held but exits not yet begun",
          "Harvesting phase — most exits complete",
          "Wind-down — GP returning remaining assets to LPs",
        ],
        correctAnswer:
          "Value-creation phase — portfolio companies held but exits not yet begun",
      },
      {
        questionId: "d6q4",
        type: "multiple-choice",
        prompt: "What typically triggers a fund life extension?",
        options: [
          "The GP raising a successor fund",
          "Remaining portfolio companies not yet ready for exit at full value",
          "LPs requesting additional capital calls",
          "The fund exceeding its target IRR",
        ],
        correctAnswer:
          "Remaining portfolio companies not yet ready for exit at full value",
      },
      {
        questionId: "d6q5",
        type: "short-response",
        prompt:
          "A GP presents Fund III (vintage 2016) alongside Fund II (vintage 2012) and claims Fund III is tracking better. What context do you need before accepting that comparison?",
        modelAnswer:
          "You need to know the stage of each fund (Fund II may be fully realized while Fund III's IRR is still interim), the macro environment at each vintage (entry multiples, credit availability), and whether the same investment strategy was applied. Interim IRR on a year-7 fund is more meaningful than on a year-4 fund, but the 2012 vintage benefited from post-crisis entry pricing that 2016 did not.",
      },
    ],
    sources: [
      "Cambridge Associates private equity benchmark methodology",
      "ILPA reporting and performance standards",
      "CFA Institute alternative investments curriculum — fund life cycles",
    ],
  },

  // ── Day 7 ──────────────────────────────────────────────────────────────────
  {
    lessonId: "day-07",
    blocks: [
      {
        type: "intro",
        title: "Why this matters",
        content:
          "Buyout is the largest and most studied PE sub-strategy. Most manager meetings you attend will involve buyout funds. Understanding how the strategy works — and how GPs describe their edge — is essential for asking better questions.",
      },
      {
        type: "teaching",
        title: "What makes a buyout work",
        content:
          "A leveraged buyout (LBO) is the acquisition of a company using a combination of equity (from the fund) and debt (secured against the target's assets and cash flows). The equity is typically 30–50% of the purchase price; debt provides leverage. Returns come from three sources: EBITDA growth, multiple expansion (exiting at a higher valuation multiple than entry), and debt paydown (which increases equity value as the balance sheet improves).",
      },
      {
        type: "teaching",
        title: "What GPs look for in targets",
        content:
          "Classic buyout targets have stable, predictable cash flows to service debt; defensible market positions; management that can be partnered with or replaced; and a clear path to operational improvement. Fragmented industries with roll-up potential are attractive. Capital-light businesses with high margins are favoured. Think in terms of a public-markets analogy: you're buying a bond-like cash-flow stream and optioning the upside.",
      },
      {
        type: "example",
        title: "LBO return decomposition",
        content:
          "A GP buys a software business at 10x EBITDA with 50% debt. EBITDA grows from $50M to $75M over five years (50% growth). The GP exits at 12x EBITDA. Entry equity: $250M. Exit enterprise value: $900M. After repaying $200M of debt paydown, exit equity ≈ $650M. Return ≈ 2.6x on equity. Decompose: roughly half from earnings growth, a quarter from multiple expansion, a quarter from debt paydown.",
      },
      {
        type: "exercise",
        title: "Quick exercise",
        content:
          "A GP claims their edge is 'operational value creation.' What three specific, verifiable data points would you ask for to test that claim?",
      },
    ],
    quiz: [
      {
        questionId: "d7q1",
        type: "multiple-choice",
        prompt: "In a leveraged buyout, what is the primary role of debt?",
        options: [
          "To reduce the GP's management fee burden",
          "To amplify equity returns by increasing the purchase price of the asset",
          "To provide working capital for the portfolio company post-acquisition",
          "To replace LP commitments during the investment period",
        ],
        correctAnswer:
          "To amplify equity returns by increasing the purchase price of the asset",
      },
      {
        questionId: "d7q2",
        type: "multiple-choice",
        prompt:
          "Which of the following is the most important characteristic of a classic buyout target?",
        options: [
          "High revenue growth with negative free cash flow",
          "Stable, predictable cash flows sufficient to service acquisition debt",
          "A large public-market peer group for benchmarking",
          "No existing management team so the GP can install its own",
        ],
        correctAnswer:
          "Stable, predictable cash flows sufficient to service acquisition debt",
      },
      {
        questionId: "d7q3",
        type: "multiple-choice",
        prompt: "Multiple expansion in a buyout means:",
        options: [
          "The company's revenue grows faster than EBITDA",
          "The fund invests across multiple portfolio companies simultaneously",
          "The exit valuation multiple is higher than the entry multiple",
          "The GP uses multiple layers of debt in the capital structure",
        ],
        correctAnswer:
          "The exit valuation multiple is higher than the entry multiple",
      },
      {
        questionId: "d7q4",
        type: "multiple-choice",
        prompt:
          "A GP claims 'multiple expansion drove returns' in their last fund. Why might this concern an allocator?",
        options: [
          "Multiple expansion is illegal in most jurisdictions",
          "It suggests returns relied on market timing rather than repeatable operational skill",
          "Multiple expansion reduces DPI relative to TVPI",
          "It means the fund used too little leverage",
        ],
        correctAnswer:
          "It suggests returns relied on market timing rather than repeatable operational skill",
      },
      {
        questionId: "d7q5",
        type: "short-response",
        prompt:
          "Explain in two to three sentences why debt paydown increases equity value in an LBO.",
        modelAnswer:
          "In an LBO, the company's enterprise value at exit is split between debt holders and equity holders. As the portfolio company generates cash flows and pays down debt over the hold period, the remaining debt at exit is smaller — so equity holders capture a larger share of the same enterprise value. This debt paydown is a mechanical return driver independent of operational improvement or multiple expansion.",
      },
    ],
    sources: [
      "CFA Institute alternative investments — leveraged buyout mechanics",
      "CAIA Level I private equity curriculum",
      "Preqin GP strategy classification methodology",
    ],
  },

  // ── Day 8 ──────────────────────────────────────────────────────────────────
  {
    lessonId: "day-08",
    blocks: [
      {
        type: "intro",
        title: "Why this matters",
        content:
          "GPs use the labels 'buyout,' 'growth equity,' and 'venture' loosely. In a manager meeting, misclassifying a strategy leads to wrong benchmarks, wrong risk expectations, and poor portfolio construction decisions.",
      },
      {
        type: "teaching",
        title: "The three strategies compared",
        content:
          "Venture capital (VC) invests in early-stage companies with unproven business models — high failure rates, high upside from winners, minimal or no leverage, minority stakes. Growth equity targets profitable or near-profitable companies with proven models that need capital to scale — typically minority stakes, no leverage, returns driven almost entirely by revenue and earnings growth. Buyout acquires controlling stakes in mature, cash-generative companies using significant leverage — returns come from the three-driver model (earnings growth, multiple expansion, debt paydown).",
      },
      {
        type: "teaching",
        title: "Risk and return differences",
        content:
          "VC has the widest return dispersion — most funds lose money on individual investments, but top-quartile funds can return 5–10x or more driven by one or two outliers. Growth equity has moderate dispersion — losses are less common but upside is capped by the absence of leverage. Buyout has the narrowest dispersion of the three — leverage amplifies both gains and losses, but mature cash-flow targets limit catastrophic failures. From a portfolio construction lens: VC is the highest-beta PE allocation; buyout the most bond-like.",
      },
      {
        type: "example",
        title: "Mini-case: misclassified strategy",
        content:
          "An LP allocates to a 'growth equity' fund expecting minority, no-leverage investments. The GP gradually shifts to taking majority control with leverage — a strategy drift toward buyout. The LP now holds different risk than intended, needs to re-benchmark performance, and has a governance issue to raise at the LPAC. Strategy drift is one of the most common surprises in PE portfolios.",
      },
      {
        type: "exercise",
        title: "Quick exercise",
        content:
          "A GP pitches a 'growth equity' fund targeting 25% net IRR with 40% of portfolio in leveraged majority positions. What concerns does this raise, and what clarifying questions would you ask?",
      },
    ],
    quiz: [
      {
        questionId: "d8q1",
        type: "multiple-choice",
        prompt:
          "Which sub-strategy typically uses the most leverage and targets controlling stakes?",
        options: ["Venture capital", "Growth equity", "Buyout", "Mezzanine debt"],
        correctAnswer: "Buyout",
      },
      {
        questionId: "d8q2",
        type: "multiple-choice",
        prompt: "What is the primary return driver in growth equity?",
        options: [
          "Debt paydown reducing the equity burden",
          "Revenue and earnings growth of the portfolio company",
          "Multiple expansion from public-market re-rating",
          "Management fee offsets from portfolio company fees",
        ],
        correctAnswer: "Revenue and earnings growth of the portfolio company",
      },
      {
        questionId: "d8q3",
        type: "multiple-choice",
        prompt:
          "Why does venture capital have the widest return dispersion of the three strategies?",
        options: [
          "VC uses the most leverage, amplifying both gains and losses",
          "Most investments fail, but a small number of outliers drive most fund returns",
          "VC funds are smaller and therefore more volatile",
          "VC GPs charge higher fees, reducing net returns",
        ],
        correctAnswer:
          "Most investments fail, but a small number of outliers drive most fund returns",
      },
      {
        questionId: "d8q4",
        type: "multiple-choice",
        prompt: "What is 'strategy drift' in the context of a PE fund?",
        options: [
          "The GP gradually reducing the hurdle rate over successive funds",
          "A fund shifting its investment approach away from what was described in the LPA",
          "LPs transferring their interests to secondary buyers",
          "A portfolio company pivoting its business model post-acquisition",
        ],
        correctAnswer:
          "A fund shifting its investment approach away from what was described in the LPA",
      },
      {
        questionId: "d8q5",
        type: "short-response",
        prompt:
          "From a portfolio construction standpoint, how do buyout and venture capital serve different roles in a PE allocation?",
        modelAnswer:
          "Buyout tends to behave more like a leveraged version of large-cap equities — moderate dispersion, cash-flow-driven, with leverage amplifying but also stabilising returns through stable target businesses. Venture capital is more like a call option on innovation — most positions go to zero or generate minimal returns, but rare outliers can return 20–50x. A portfolio may use buyout for return consistency and VC for diversification and potential outsized upside, accepting very different risk profiles for each.",
      },
    ],
    sources: [
      "CAIA alternative investments — private equity sub-strategies",
      "CFA Institute private markets — growth equity and VC overview",
      "Cambridge Associates venture capital and buyout benchmark reports",
    ],
  },

  // ── Day 9 ──────────────────────────────────────────────────────────────────
  {
    lessonId: "day-09",
    blocks: [
      {
        type: "intro",
        title: "Why this matters",
        content:
          "Almost every GP claims operational value creation. Few can prove it. Knowing the difference between real operational improvement and financial engineering is the single most important diligence skill for a PE allocator.",
      },
      {
        type: "teaching",
        title: "The value-creation bridge",
        content:
          "PE returns can be decomposed into three buckets using a value bridge: (1) Revenue and EBITDA growth — organic sales growth, margin improvement, cost reduction, or bolt-on acquisitions. (2) Multiple expansion — exiting at a higher EV/EBITDA than entry, driven by market conditions or company de-risking. (3) Financial leverage / debt paydown — the mechanical equity uplift from reducing debt over the hold period. Top-quartile GPs generate most returns from bucket 1. Reliance on buckets 2 and 3 suggests returns are less repeatable.",
      },
      {
        type: "teaching",
        title: "Operational levers in practice",
        content:
          "Real operational improvements include: pricing power improvements, cost structure optimisation, sales force effectiveness, international expansion, add-on acquisitions (buy-and-build), and management talent upgrades. The GP should be able to point to specific initiatives and their measurable EBITDA impact. Beware of vague claims like 'we helped management think strategically' — ask for the actual EBITDA bridge from entry to exit.",
      },
      {
        type: "example",
        title: "Mini-case: separating skill from market",
        content:
          "Fund A exits a healthcare services business at 3.2x MOIC. The value bridge shows: entry EBITDA $40M → exit EBITDA $90M (125% growth from add-ons and organic improvement); entry multiple 8x → exit multiple 11x (multiple expansion driven by sector re-rating); debt paid down from $200M to $80M. Most of the return came from earnings growth and sector tailwinds — not purely GP skill. A strong allocator asks: how much of the EBITDA growth was organic vs. acquired?",
      },
      {
        type: "exercise",
        title: "Quick exercise",
        content:
          "A GP tells you their last fund delivered 2.8x TVPI. All portfolio companies saw EBITDA margins decline. What does this tell you about the source of returns, and what further questions do you ask?",
      },
    ],
    quiz: [
      {
        questionId: "d9q1",
        type: "multiple-choice",
        prompt:
          "Which of the following best represents genuine operational value creation by a PE GP?",
        options: [
          "Exiting a company at a higher EV/EBITDA multiple due to rising public market valuations",
          "Reducing debt from $300M to $100M over a five-year hold period",
          "Growing portfolio company EBITDA margins from 18% to 26% through pricing and cost initiatives",
          "Refinancing the portfolio company's debt at a lower interest rate",
        ],
        correctAnswer:
          "Growing portfolio company EBITDA margins from 18% to 26% through pricing and cost initiatives",
      },
      {
        questionId: "d9q2",
        type: "multiple-choice",
        prompt: "What is a 'buy-and-build' strategy in PE?",
        options: [
          "Constructing new physical assets within a portfolio company",
          "Acquiring a platform company and adding smaller bolt-on acquisitions to scale it",
          "Building a GP's track record by investing in early-stage companies",
          "Buying underperforming assets and rebuilding the management team",
        ],
        correctAnswer:
          "Acquiring a platform company and adding smaller bolt-on acquisitions to scale it",
      },
      {
        questionId: "d9q3",
        type: "multiple-choice",
        prompt:
          "A GP's entire fund return was driven by multiple expansion while EBITDA was flat. What is the key risk this presents to an allocator?",
        options: [
          "The GP may have violated the LPA's fee structure",
          "Returns were driven by market conditions, not repeatable operational skill",
          "The fund's DPI will be inflated relative to TVPI",
          "IRR will be understated due to the slow pace of value creation",
        ],
        correctAnswer:
          "Returns were driven by market conditions, not repeatable operational skill",
      },
      {
        questionId: "d9q4",
        type: "multiple-choice",
        prompt:
          "What is the most useful document to request when evaluating a GP's claimed operational improvements?",
        options: [
          "The fund's audited financial statements",
          "The LP advisory committee meeting minutes",
          "A deal-level value bridge showing EBITDA growth, multiple change, and debt paydown for each exit",
          "The GP's operating partner biographies",
        ],
        correctAnswer:
          "A deal-level value bridge showing EBITDA growth, multiple change, and debt paydown for each exit",
      },
      {
        questionId: "d9q5",
        type: "short-response",
        prompt:
          "How would you distinguish between a GP who genuinely created operational value and one whose returns came primarily from financial engineering?",
        modelAnswer:
          "Ask for a value bridge decomposing returns into earnings growth, multiple expansion, and debt paydown for each portfolio company. A GP with genuine operational skill will show consistent EBITDA margin improvement and organic revenue growth across multiple deals, not just one outlier. Financial engineering shows up as flat or declining EBITDA with returns driven by debt paydown and sector multiple re-rating. Also check whether EBITDA growth was organic or acquisition-driven — roll-ups inflate EBITDA mechanically without necessarily improving the underlying business.",
      },
    ],
    sources: [
      "McKinsey Global Institute — value creation in private equity",
      "CFA Institute alternative investments — operational value creation",
      "CAIA private equity value-bridge methodology",
    ],
  },

  // ── Day 10 ─────────────────────────────────────────────────────────────────
  {
    lessonId: "day-10",
    blocks: [
      {
        type: "intro",
        title: "Why this matters",
        content:
          "Exit is where PE returns are realised. A GP can build value for years, then destroy it with a poorly timed or poorly structured exit. Understanding exit routes and their trade-offs helps you evaluate a GP's judgment and track record more clearly.",
      },
      {
        type: "teaching",
        title: "The three main exit routes",
        content:
          "Trade sale: selling the portfolio company to a strategic buyer (a corporation in the same or adjacent industry). Usually achieves the highest valuation because strategic buyers pay for synergies — cost savings and revenue opportunities they expect from ownership. Secondary buyout (SBO): selling to another PE firm. Common when the company has more operational improvement ahead and a financial buyer is the best fit. IPO: listing the company on a public exchange. Provides liquidity over time but subjects the GP to market timing risk, lock-up periods, and price volatility post-listing.",
      },
      {
        type: "teaching",
        title: "Exit timing and IRR",
        content:
          "Because IRR is time-sensitive, exit timing matters enormously. Holding a great company one year too long can reduce IRR significantly even if TVPI improves. GPs face a tension: maximise absolute value (hold longer) vs. maximise IRR (exit earlier). The right answer depends on whether the marginal return on continued hold exceeds the cost of capital. LPs should ask: are exits driven by what is best for the portfolio company, or by the GP's need to show performance before raising the next fund?",
      },
      {
        type: "example",
        title: "Mini-case: trade sale vs. IPO",
        content:
          "A GP holds a consumer software company valued at $800M. A strategic buyer offers $950M cash. The IPO path projects a $1.1B listing in 12 months, but with a 180-day lock-up, market risk, and no certainty. The GP takes the trade sale. Result: 2.8x MOIC at 22% IRR vs. a projected 3.1x/19% IRR via IPO. The GP chose higher IRR and certainty over higher MOIC — a rational choice that many LPs would endorse.",
      },
      {
        type: "exercise",
        title: "Quick exercise",
        content:
          "A GP has held a portfolio company for seven years and is now selling it to another PE firm (secondary buyout). What concerns, if any, does this raise about the quality of the exit?",
      },
    ],
    quiz: [
      {
        questionId: "d10q1",
        type: "multiple-choice",
        prompt:
          "Which exit route typically achieves the highest valuation for a PE-backed company?",
        options: [
          "Secondary buyout to another PE firm",
          "IPO on a public exchange",
          "Trade sale to a strategic buyer",
          "Management buyout by the existing team",
        ],
        correctAnswer: "Trade sale to a strategic buyer",
      },
      {
        questionId: "d10q2",
        type: "multiple-choice",
        prompt: "Why do strategic buyers often pay a premium over financial buyers?",
        options: [
          "They have lower cost of capital due to public market access",
          "They pay for anticipated synergies — cost savings and revenue opportunities from ownership",
          "They are required by regulators to offer a control premium",
          "They value the GP relationship and pay for future deal flow",
        ],
        correctAnswer:
          "They pay for anticipated synergies — cost savings and revenue opportunities from ownership",
      },
      {
        questionId: "d10q3",
        type: "multiple-choice",
        prompt:
          "What is a key risk of an IPO exit compared to a trade sale?",
        options: [
          "IPOs require the GP to return all carry immediately",
          "IPOs expose the GP to lock-up periods and post-listing market price risk",
          "IPOs reduce the company's valuation by forcing public disclosure",
          "IPOs require unanimous LP consent under most LPAs",
        ],
        correctAnswer:
          "IPOs expose the GP to lock-up periods and post-listing market price risk",
      },
      {
        questionId: "d10q4",
        type: "multiple-choice",
        prompt:
          "A GP exits a company after seven years via a secondary buyout at 2.0x MOIC. What might this suggest about the exit?",
        options: [
          "The company was too large for a trade sale",
          "The GP maximised IRR by exiting quickly before value was fully created",
          "A financial buyer saw more operational improvement potential that the GP did not fully capture",
          "Secondary buyouts always indicate underperformance",
        ],
        correctAnswer:
          "A financial buyer saw more operational improvement potential that the GP did not fully capture",
      },
      {
        questionId: "d10q5",
        type: "short-response",
        prompt:
          "Explain the tension a GP faces between maximising IRR and maximising TVPI when deciding when to exit a portfolio company.",
        modelAnswer:
          "IRR is time-sensitive — every additional year of hold dilutes the annualised return even if absolute value continues to grow. TVPI measures total value created regardless of timing. A GP who holds a great company an extra two years may increase TVPI from 2.8x to 3.2x but reduce IRR from 22% to 18%. The optimal decision depends on whether the marginal value created in the additional hold period exceeds what the capital could earn if returned to LPs and redeployed. GPs closer to their next fundraise may be incentivised to exit earlier to show strong IRRs.",
      },
    ],
    sources: [
      "CFA Institute alternative investments — PE exit strategies",
      "Preqin exit route analysis and benchmarking",
      "CAIA private equity — trade sale, SBO, and IPO trade-offs",
    ],
  },

  // ── Days 11–20: placeholder content ───────────────────────────────────────
  ...(
    [
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
