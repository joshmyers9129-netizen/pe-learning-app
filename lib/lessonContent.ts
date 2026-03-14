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

  // ── Day 11 ─────────────────────────────────────────────────────────────────
  {
    lessonId: "day-11",
    blocks: [
      {
        type: "intro",
        title: "Why this matters",
        content:
          "The LPA is the contract governing your entire PE relationship. Most LPs sign it and file it. Sophisticated LPs negotiate it. Knowing which terms move the needle — and which are boilerplate — is essential before committing capital.",
      },
      {
        type: "teaching",
        title: "Economic terms",
        content:
          "Management fee: typically 1.5–2% of committed capital during the investment period, stepping down to invested capital thereafter. Carried interest: typically 20% above an 8% preferred return (hurdle). Catch-up clause: after LPs receive their hurdle, the GP often receives 100% of the next distributions until they have received 20% of all profits — watch the catch-up rate. Clawback: GP must return excess carry if later losses reduce aggregate profit. Fee offsets: portfolio company monitoring fees and transaction fees should offset management fees — negotiate the offset rate (typically 80–100%).",
      },
      {
        type: "teaching",
        title: "Governance and protection terms",
        content:
          "Key man clause: names the individuals whose departure suspends the investment period, giving LPs a chance to exit or negotiate. No-fault divorce: LP majority can remove the GP without cause — rare to trigger but valuable to have. LPAC (LP Advisory Committee): a subset of large LPs that approves conflicts of interest, valuations, and extensions. Most-favoured nation (MFN): ensures you receive the best terms given to any other LP. Side letters: bilateral agreements granting specific LPs preferred economics or rights — always ask what side letters exist.",
      },
      {
        type: "example",
        title: "Mini-case: fee offset negotiation",
        content:
          "A GP earns $5M in monitoring fees and $3M in transaction fees from portfolio companies. If the LPA has an 80% fee offset, $6.4M reduces the management fee. At 100% offset, $8M reduces it. Over a 10-year fund, a 20-percentage-point difference in fee offset rates can cost LPs millions. Large LPs negotiate 100% offsets; smaller LPs may accept 80% without realising the economics.",
      },
      {
        type: "exercise",
        title: "Quick exercise",
        content:
          "You are reviewing an LPA with a 100% catch-up clause and an 8% hurdle. Explain to a colleague what this means for the order of distributions between the LP and GP.",
      },
    ],
    quiz: [
      {
        questionId: "d11q1",
        type: "multiple-choice",
        prompt: "What does a 'key man clause' in an LPA typically provide?",
        options: [
          "It guarantees the GP hits the target IRR or returns fees",
          "It allows the GP to replace underperforming portfolio company management",
          "It suspends the investment period if named key individuals leave the GP",
          "It limits LP transfers to pre-approved secondary buyers",
        ],
        correctAnswer:
          "It suspends the investment period if named key individuals leave the GP",
      },
      {
        questionId: "d11q2",
        type: "multiple-choice",
        prompt: "What is the purpose of a GP clawback provision?",
        options: [
          "Allow the GP to recall LP capital after distributions",
          "Require the GP to return carry paid on early wins if aggregate fund profits are later insufficient",
          "Permit the GP to extend the fund life without LP consent",
          "Reduce the management fee if the fund misses its return target",
        ],
        correctAnswer:
          "Require the GP to return carry paid on early wins if aggregate fund profits are later insufficient",
      },
      {
        questionId: "d11q3",
        type: "multiple-choice",
        prompt: "A 100% management fee offset means:",
        options: [
          "The GP waives its management fee entirely",
          "All portfolio company fees earned by the GP reduce the LP management fee dollar for dollar",
          "LPs receive a 100% return of management fees at fund close",
          "The GP's carry is calculated before deducting management fees",
        ],
        correctAnswer:
          "All portfolio company fees earned by the GP reduce the LP management fee dollar for dollar",
      },
      {
        questionId: "d11q4",
        type: "multiple-choice",
        prompt: "What is an MFN (most-favoured nation) clause?",
        options: [
          "A clause limiting the GP from investing in foreign jurisdictions",
          "A guarantee that one LP's economics are at least as favourable as any other LP's",
          "A provision restricting the GP from raising a successor fund during the investment period",
          "A term requiring the GP to give LPs first refusal on co-investments",
        ],
        correctAnswer:
          "A guarantee that one LP's economics are at least as favourable as any other LP's",
      },
      {
        questionId: "d11q5",
        type: "short-response",
        prompt:
          "Why should an LP ask about side letters when reviewing an LPA, and what might they reveal?",
        modelAnswer:
          "Side letters are bilateral agreements granting specific LPs better terms — lower fees, co-investment rights, more frequent reporting, or redemption rights not in the main LPA. If another LP has a 1.5% management fee while you are paying 2%, or has co-investment rights you do not, your economics are inferior even with an MFN. Side letters expose the real fee structure and the GP's willingness to negotiate. Always ask what side letters exist and request MFN treatment to capture any superior terms.",
      },
    ],
    sources: [
      "ILPA Principles 3.0 — model LPA provisions",
      "CFA Institute alternative investments — LP agreement terms",
      "ILPA fee transparency template and reporting standards",
    ],
  },

  // ── Day 12 ─────────────────────────────────────────────────────────────────
  {
    lessonId: "day-12",
    blocks: [
      {
        type: "intro",
        title: "Why this matters",
        content:
          "PE manager selection is where most institutional alpha is made or lost. The dispersion between top-quartile and bottom-quartile PE managers is far wider than in public markets — selecting the wrong GP is not just underperformance, it can be a permanent impairment of capital.",
      },
      {
        type: "teaching",
        title: "The evaluation framework",
        content:
          "Assess four dimensions. People: who are the investment professionals, how long have they worked together, what is the team's continuity? Process: how does the GP source, evaluate, and exit deals — is it repeatable? Performance: what do the numbers say net of fees, and does the value bridge support the narrative? Portfolio: what does the current book look like — concentration, vintage, sector? Each dimension should hold up independently. A great track record with team turnover is not a safe re-up.",
      },
      {
        type: "teaching",
        title: "Distinguishing luck from skill",
        content:
          "PE track records are short, lumpy, and easily gamed. Key questions: Is performance concentrated in one or two deals (wide dispersion within the fund)? Did the strategy match the macro environment (tail winds, not skill)? How does the fund compare to vintage-year peers on PME? Is the team that produced the track record still intact? Has the strategy drifted — larger fund size, different sectors, more leverage? A GP who produced great returns in a small fund with five partners and now runs a $5B fund with thirty analysts is a different product.",
      },
      {
        type: "example",
        title: "Mini-case: track record concentration",
        content:
          "A GP's Fund II shows 2.8x TVPI and 24% net IRR. On inspection, one healthcare deal — a 6x return — accounts for 55% of fund-level profit. Remove it and the fund returns 1.7x. The GP's narrative is 'consistent operational improvement across the portfolio.' The data says otherwise. This single-deal concentration is a yellow flag — great outcome, but not repeatable strategy.",
      },
      {
        type: "exercise",
        title: "Quick exercise",
        content:
          "A GP has a strong 15-year track record but raised their current fund at twice the size of the last one and hired 12 new investment professionals in the past three years. What specific risks does this create, and what questions would you ask in the meeting?",
      },
    ],
    quiz: [
      {
        questionId: "d12q1",
        type: "multiple-choice",
        prompt:
          "Which is the most important indicator that a GP's past performance may not be repeatable?",
        options: [
          "The fund used leverage across most portfolio companies",
          "Returns were concentrated in one or two outlier deals rather than broad across the portfolio",
          "The fund's IRR exceeded the PME benchmark",
          "The GP charged a 2.5% management fee on committed capital",
        ],
        correctAnswer:
          "Returns were concentrated in one or two outlier deals rather than broad across the portfolio",
      },
      {
        questionId: "d12q2",
        type: "multiple-choice",
        prompt:
          "Why does a significant increase in fund size raise due diligence concerns?",
        options: [
          "Larger funds must invest in more geographies, increasing currency risk",
          "A larger fund may require larger deals or more portfolio companies, potentially outside the GP's proven strategy",
          "Management fees decrease proportionally at larger fund sizes",
          "Larger funds take longer to invest, extending the J-curve",
        ],
        correctAnswer:
          "A larger fund may require larger deals or more portfolio companies, potentially outside the GP's proven strategy",
      },
      {
        questionId: "d12q3",
        type: "multiple-choice",
        prompt:
          "What is 'attribution analysis' and why is it central to PE due diligence?",
        options: [
          "The process of allocating management fees to individual LPs",
          "Breaking fund returns into deal-level contributions to assess concentration and consistency",
          "Attributing performance to macro factors vs. GP skill using regression analysis",
          "Assigning credit for deals to specific investment professionals on the team",
        ],
        correctAnswer:
          "Breaking fund returns into deal-level contributions to assess concentration and consistency",
      },
      {
        questionId: "d12q4",
        type: "multiple-choice",
        prompt:
          "A GP's lead partner — who sourced and managed the fund's best deals — retired before the new fund close. How should this affect your assessment?",
        options: [
          "It is irrelevant if the fund's brand and strategy are unchanged",
          "It is a material key-person event; the track record may not transfer to the remaining team",
          "It improves the investment team's economics, aligning incentives better",
          "It only matters if the LPA had a named key man clause referencing that partner",
        ],
        correctAnswer:
          "It is a material key-person event; the track record may not transfer to the remaining team",
      },
      {
        questionId: "d12q5",
        type: "short-response",
        prompt:
          "Describe two specific questions you would ask a GP in a manager meeting to test whether their claimed operational value creation is real and repeatable.",
        modelAnswer:
          "First: 'Can you walk me through the value bridge for your three largest exits — specifically, how much of EBITDA growth was organic versus from acquisitions, and what operational initiatives drove margin improvement?' This tests whether the GP can quantify their impact. Second: 'Which deals in your last fund underperformed and what did you learn from them?' A GP who cannot describe failures credibly has either not made any — unlikely — or is not being candid. Genuine operators can name specific mistakes and explain what changed.",
      },
    ],
    sources: [
      "CFA Institute alternative investments — manager selection framework",
      "ILPA due diligence questionnaire (DDQ) template",
      "Cambridge Associates manager research methodology",
    ],
  },

  // ── Day 13 ─────────────────────────────────────────────────────────────────
  {
    lessonId: "day-13",
    blocks: [
      {
        type: "intro",
        title: "Why this matters",
        content:
          "PE funds do not have a Bloomberg ticker. Benchmarking them requires deliberate methodology choices — and those choices dramatically affect whether a fund looks good or average. Understanding how benchmarks work prevents you from being misled by selective GP comparisons.",
      },
      {
        type: "teaching",
        title: "Peer benchmarks and their limits",
        content:
          "The most common benchmark is a vintage-year peer median or quartile ranking from data providers like Cambridge Associates, Preqin, or Burgiss. Quartile rankings compare a fund to peers in the same vintage and strategy. Problems: survivorship bias (failed funds underreport), reporting lags (GPs self-report, timing varies), and strategy heterogeneity (a 'buyout' category mixes small-cap, mid-market, and large-cap). Top-quartile in a weak vintage may be bottom-quartile in a strong one.",
      },
      {
        type: "teaching",
        title: "PME: the public market equivalent",
        content:
          "PME (Public Market Equivalent) benchmarks PE against a hypothetical investment in a public index with the same cash flow timing. The Kaplan-Schoar PME invests each capital call into the index and redeems each distribution. A PME > 1.0 means the PE fund outperformed the index on a like-for-like cash flow basis. Direct Alpha (Modified PME) converts this to an annualised excess return. PME is the most rigorous benchmark because it controls for the timing of cash flows — the same timing advantage that inflates PE IRR relative to a simple time-weighted return.",
      },
      {
        type: "example",
        title: "Mini-case: misleading quartile ranking",
        content:
          "A GP presents their fund as 'top quartile, vintage 2014.' The Cambridge Associates benchmark shows the median vintage-2014 buyout fund at 1.7x TVPI. The GP's fund is at 1.9x — legitimately top quartile. But the S&P 500 returned approximately 2.3x over the same period. The PME is 0.82 — the fund underperformed public equities on a cash-flow-adjusted basis. The fund is simultaneously 'top quartile vs. PE peers' and 'below benchmark vs. public markets.' Both statements are true.",
      },
      {
        type: "exercise",
        title: "Quick exercise",
        content:
          "A GP shows you a top-quartile IRR ranking without providing a PME. What are two reasons you should ask for the PME before drawing conclusions?",
      },
    ],
    quiz: [
      {
        questionId: "d13q1",
        type: "multiple-choice",
        prompt: "What does a PME greater than 1.0 indicate?",
        options: [
          "The fund returned more than one dollar for every dollar called",
          "The fund outperformed a public-market index on a cash-flow-adjusted basis",
          "The GP earned carried interest above the hurdle rate",
          "The fund's IRR exceeded the benchmark IRR",
        ],
        correctAnswer:
          "The fund outperformed a public-market index on a cash-flow-adjusted basis",
      },
      {
        questionId: "d13q2",
        type: "multiple-choice",
        prompt:
          "Why do survivorship bias and self-reporting lag distort PE peer benchmarks?",
        options: [
          "Failed funds stop reporting, inflating the median; slow reporting masks recent underperformance",
          "Top-quartile funds report early, making the peer group look better than it is",
          "Survivorship bias only affects venture capital, not buyout",
          "Self-reporting lag reduces the DPI of the peer group artificially",
        ],
        correctAnswer:
          "Failed funds stop reporting, inflating the median; slow reporting masks recent underperformance",
      },
      {
        questionId: "d13q3",
        type: "multiple-choice",
        prompt:
          "A fund is top-quartile vs. PE peers but has a PME of 0.85. What is the correct interpretation?",
        options: [
          "The fund outperformed both PE peers and public markets",
          "The fund beat PE peers but underperformed a public-market index on a cash-flow-equivalent basis",
          "The PME of 0.85 is too low to draw conclusions about public-market comparison",
          "The fund's IRR must be recalculated using the modified PME methodology",
        ],
        correctAnswer:
          "The fund beat PE peers but underperformed a public-market index on a cash-flow-equivalent basis",
      },
      {
        questionId: "d13q4",
        type: "multiple-choice",
        prompt:
          "Which benchmark data provider is considered most comprehensive for PE peer comparisons?",
        options: [
          "Bloomberg — uses market pricing for PE holdings",
          "Cambridge Associates / Burgiss — uses pooled fund-level cash flow data from institutional LPs",
          "Preqin — primary source for IRR calculations only",
          "S&P Capital IQ — covers public and private markets equally",
        ],
        correctAnswer:
          "Cambridge Associates / Burgiss — uses pooled fund-level cash flow data from institutional LPs",
      },
      {
        questionId: "d13q5",
        type: "short-response",
        prompt:
          "Why is it insufficient to evaluate a PE fund solely on its quartile ranking versus peers?",
        modelAnswer:
          "Quartile rankings only compare a fund to other PE funds — not to the opportunity cost of public market exposure. A fund can be top quartile in a weak vintage and still underperform what LPs could have earned in a passive index. PME is necessary to answer the core question: did the PE fund justify its illiquidity, complexity, and fees relative to a public alternative? Additionally, quartile rankings are distorted by survivorship bias, strategy heterogeneity within categories, and variable reporting lags across GPs.",
      },
    ],
    sources: [
      "Kaplan and Schoar (2005) — PME methodology",
      "Cambridge Associates private equity benchmark reports",
      "Burgiss private equity performance data methodology",
      "CFA Institute alternative investments — performance benchmarking",
    ],
  },

  // ── Day 14 ─────────────────────────────────────────────────────────────────
  {
    lessonId: "day-14",
    blocks: [
      {
        type: "intro",
        title: "Why this matters",
        content:
          "PE is not a one-time allocation — it is a programme. Without deliberate pacing, your PE allocation drifts well below or above target, vintage years cluster dangerously, and liquidity management becomes reactive. Pacing is the operational core of running a PE programme.",
      },
      {
        type: "teaching",
        title: "Why PE allocation management is different",
        content:
          "Unlike public equities, you cannot buy or sell PE exposure on demand. You commit capital today, it gets drawn over three to five years, and distributions trickle back over seven to twelve years. If you want a 15% PE allocation, you must commit 2–3x your target NAV each cycle — because much of your committed capital is not yet drawn, and distributions from mature funds are simultaneously returning capital. The result: to maintain a 15% allocation, a $1B portfolio needs to commit roughly $60–100M per year.",
      },
      {
        type: "teaching",
        title: "Building a pacing model",
        content:
          "A pacing model projects forward NAV by modelling: (1) future capital calls from existing commitments (typically 20–30% of unfunded commitment per year), (2) future distributions from existing holdings (typically low in years 1–4, peaking in years 5–8), (3) planned new commitments. The goal is a stable NAV near your target as a percent of total portfolio. Vintage year diversification — committing across several consecutive years — reduces concentration risk from a single macro cycle.",
      },
      {
        type: "example",
        title: "Mini-case: over-commitment problem",
        content:
          "An endowment targets 20% PE on a $500M portfolio ($100M target NAV). In 2021, the CIO commits $120M to new funds — excited by strong 2020 vintages. Existing funds accelerate capital calls. PE NAV spikes to 28% of the portfolio as public markets fall in 2022. The endowment is illiquid and over-allocated to PE. It cannot rebalance. The error was committing based on enthusiasm rather than a model that accounted for existing unfunded commitments.",
      },
      {
        type: "exercise",
        title: "Quick exercise",
        content:
          "You manage a $2B endowment targeting 12% PE allocation ($240M NAV). Current PE NAV is $160M, and you have $80M in unfunded commitments. How much additional commitment capacity do you have before hitting your target allocation, and what factors would you consider?",
      },
    ],
    quiz: [
      {
        questionId: "d14q1",
        type: "multiple-choice",
        prompt:
          "Why must a PE programme commit more than its target NAV in any given year?",
        options: [
          "Because PE funds charge fees on committed rather than invested capital",
          "Because capital is drawn over years and distributions return capital simultaneously, requiring over-commitment to maintain target exposure",
          "Because vintage year diversification requires investing in multiple strategies per year",
          "Because PE NAV is reported on a lag and is systematically understated",
        ],
        correctAnswer:
          "Because capital is drawn over years and distributions return capital simultaneously, requiring over-commitment to maintain target exposure",
      },
      {
        questionId: "d14q2",
        type: "multiple-choice",
        prompt: "What is the primary purpose of a PE pacing model?",
        options: [
          "To calculate the IRR of the total PE programme",
          "To project future NAV and commitment needs to keep the allocation near its target",
          "To determine the optimal number of GPs in the PE portfolio",
          "To compare PE returns to the public-market benchmark each quarter",
        ],
        correctAnswer:
          "To project future NAV and commitment needs to keep the allocation near its target",
      },
      {
        questionId: "d14q3",
        type: "multiple-choice",
        prompt: "Vintage year diversification in a PE programme is designed to:",
        options: [
          "Maximise the number of GPs in the portfolio",
          "Reduce concentration in a single macro or credit cycle that affects entry valuations",
          "Ensure all funds in the programme mature in the same year",
          "Comply with ERISA diversification requirements for pension funds",
        ],
        correctAnswer:
          "Reduce concentration in a single macro or credit cycle that affects entry valuations",
      },
      {
        questionId: "d14q4",
        type: "multiple-choice",
        prompt:
          "An endowment is significantly over-allocated to PE versus its target. What is the most practical near-term option?",
        options: [
          "Immediately redeem LP interests in all underperforming funds",
          "Pause new commitments and wait for distributions from maturing funds to reduce NAV",
          "Increase the target allocation to match the current exposure",
          "Request emergency capital calls from portfolio company management",
        ],
        correctAnswer:
          "Pause new commitments and wait for distributions from maturing funds to reduce NAV",
      },
      {
        questionId: "d14q5",
        type: "short-response",
        prompt:
          "Explain the concept of 'over-commitment' in PE portfolio management and the risk it creates.",
        modelAnswer:
          "Over-commitment means pledging more capital to PE funds than you expect to have to fund at any one time, relying on the fact that calls and distributions rarely align to create a funding shortfall. It allows LPs to maintain target NAV without holding excess cash. The risk is a liquidity squeeze: if capital calls accelerate (multiple funds deploying simultaneously), distributions slow (no exits in a downturn), and the rest of the portfolio declines, the LP may struggle to fund calls. The 2008–09 crisis exposed many endowments that had over-committed aggressively and then faced simultaneous calls with no liquidity to fund them.",
      },
    ],
    sources: [
      "CFA Institute alternative investments — portfolio construction and pacing",
      "ILPA model LP reporting and pacing guidance",
      "Yale Endowment annual reports — PE pacing framework",
    ],
  },

  // ── Day 15 ─────────────────────────────────────────────────────────────────
  {
    lessonId: "day-15",
    blocks: [
      {
        type: "intro",
        title: "Why this matters",
        content:
          "The secondary market has grown from a niche liquidity mechanism into a $100B+ annual market that creates genuine opportunities for both buyers and sellers. Understanding it means you can use it proactively — not just react when an LP needs an exit.",
      },
      {
        type: "teaching",
        title: "LP-led secondaries",
        content:
          "In an LP-led secondary, an existing LP sells their fund interest to a secondary buyer — typically at a discount to NAV. Sellers include LPs managing over-allocation, rebalancing portfolios, or exiting legacy relationships. Buyers acquire a seasoned portfolio at a discount, with reduced J-curve effect and known underlying assets. Pricing depends on fund quality, age, sector, and market conditions. Discounts widened significantly in 2022–23 as rates rose and PE NAVs were slow to mark down.",
      },
      {
        type: "teaching",
        title: "GP-led secondaries and continuation vehicles",
        content:
          "In a GP-led secondary, the GP — not the LP — initiates the transaction. The most common structure is a continuation vehicle (CV): the GP moves one or more portfolio companies from the original fund into a new vehicle. Existing LPs can cash out at NAV or roll their interest into the CV. New capital (from secondary buyers) enters the CV. The CV allows the GP to extend the hold on high-quality assets beyond the fund's term. Conflict of interest is significant: the GP is both seller (old fund) and buyer (new vehicle). LPAC approval and independent valuation are critical.",
      },
      {
        type: "example",
        title: "Mini-case: LP portfolio sale",
        content:
          "A pension fund holds 22 PE fund interests worth $850M at reported NAV. It decides to exit 15 of them to reduce manager count and free liquidity. A secondary buyer offers 88 cents on the dollar ($748M) for the full portfolio. The pension accepts — not because the assets are bad, but because the liquidity and simplification are worth the 12% discount. For the buyer: acquiring known, mature assets at an 88-cent entry point with a shorter path to distributions and no blind-pool risk.",
      },
      {
        type: "exercise",
        title: "Quick exercise",
        content:
          "A GP approaches you with a continuation vehicle for their best-performing portfolio company, offering existing LPs the option to cash out at NAV or roll in. What conflict-of-interest concerns do you raise, and what governance protections do you require?",
      },
    ],
    quiz: [
      {
        questionId: "d15q1",
        type: "multiple-choice",
        prompt: "In an LP-led secondary transaction, who initiates the sale?",
        options: [
          "The GP, seeking to return capital early to LPs",
          "An existing LP selling their fund interest to a secondary buyer",
          "The portfolio company's management team seeking a liquidity event",
          "The fund's placement agent facilitating a transfer",
        ],
        correctAnswer:
          "An existing LP selling their fund interest to a secondary buyer",
      },
      {
        questionId: "d15q2",
        type: "multiple-choice",
        prompt:
          "What is the primary advantage of a secondary purchase for the buyer versus a primary fund commitment?",
        options: [
          "Secondary buyers receive lower management fees than primary LPs",
          "Secondary buyers acquire seasoned assets with known holdings, reduced J-curve, and a shorter path to distributions",
          "Secondary buyers can redeem their interest on demand unlike primary LPs",
          "Secondary purchases provide access to GP co-investment rights",
        ],
        correctAnswer:
          "Secondary buyers acquire seasoned assets with known holdings, reduced J-curve, and a shorter path to distributions",
      },
      {
        questionId: "d15q3",
        type: "multiple-choice",
        prompt:
          "What is a continuation vehicle (CV) and who typically initiates it?",
        options: [
          "A new fund raised by an LP to hold their legacy PE positions; initiated by the LP",
          "A new vehicle initiated by the GP to extend the hold on select portfolio companies beyond the original fund term",
          "A regulatory structure used to wind down a PE fund's remaining assets",
          "A feeder fund structure used by smaller LPs to access large buyout funds",
        ],
        correctAnswer:
          "A new vehicle initiated by the GP to extend the hold on select portfolio companies beyond the original fund term",
      },
      {
        questionId: "d15q4",
        type: "multiple-choice",
        prompt:
          "Why does a GP-led secondary create a significant conflict of interest?",
        options: [
          "The GP earns double management fees during the transition period",
          "The GP acts as both seller on behalf of the old fund and buyer setting the price for the new vehicle",
          "Existing LPs are forced to sell at a discount set by the secondary buyer",
          "The GP's carry is forfeited in the old fund and restarted in the new vehicle",
        ],
        correctAnswer:
          "The GP acts as both seller on behalf of the old fund and buyer setting the price for the new vehicle",
      },
      {
        questionId: "d15q5",
        type: "short-response",
        prompt:
          "As an LP, what protections would you require before approving a GP-led continuation vehicle?",
        modelAnswer:
          "Three key protections: first, an independent third-party valuation of the assets being transferred — the price should not be set solely by the GP. Second, LPAC approval with a genuine ability to reject the transaction, not just rubber-stamp it. Third, a real choice: existing LPs should receive a fair cash-out option at the independent valuation, not be pressured to roll in. Additionally, new carry economics in the CV should be reset with a fresh hurdle — not carry on gains already earned in the original fund. Transparency about what the GP is receiving in management fees and carry from the new vehicle is essential.",
      },
    ],
    sources: [
      "Evercore secondary market advisory — annual secondary market report",
      "CFA Institute alternative investments — secondary market structures",
      "ILPA GP-led secondaries guidance and best practices",
    ],
  },

  // ── Day 16 ─────────────────────────────────────────────────────────────────
  {
    lessonId: "day-16",
    blocks: [
      {
        type: "intro",
        title: "Why this matters",
        content:
          "Co-investments are one of the most marketed LP benefits in PE — and one of the least understood. Done well, they reduce fees and build portfolio concentration in your highest-conviction managers. Done poorly, they expose you to adverse selection, concentrated risk, and deals you are not equipped to underwrite.",
      },
      {
        type: "teaching",
        title: "How co-investments work",
        content:
          "A co-investment is a direct investment alongside a GP into a specific portfolio company — outside the main fund. The GP offers co-invest to select LPs (typically larger, more sophisticated ones) when a deal exceeds the fund's concentration limit or the GP wants to move faster than the fund can commit. Co-investments are typically offered at zero or reduced fees and carry — a meaningful economic advantage over fund-level economics.",
      },
      {
        type: "teaching",
        title: "The adverse selection problem",
        content:
          "The core risk is adverse selection: GPs may offer co-invest on deals that are too large for the fund (size-driven), where the GP needs certainty of close (timing-driven), or where the deal quality is mixed (quality-driven). Top GPs with oversubscribed funds rarely need to offer co-invest — they fill deals internally. GPs who routinely need co-invest capital may be signalling that their LP base is not willing to let the fund take full exposure. Always ask: why is this deal being offered to us?",
      },
      {
        type: "example",
        title: "Mini-case: fee savings vs. concentration risk",
        content:
          "An LP commits $50M to a buyout fund (2% fee, 20% carry) and receives a $20M co-invest opportunity in the fund's largest deal at zero fee and carry. The fee savings over five years are roughly $2M. But the co-invest adds $20M of single-company exposure on top of the fund's existing position in that same company. If the deal fails, the LP loses more than if they had only the fund exposure. The fee savings are real; the concentration risk must be priced in.",
      },
      {
        type: "exercise",
        title: "Quick exercise",
        content:
          "A GP calls on Friday afternoon offering a $15M co-investment that must close by Monday. What does the short timeline tell you about the deal, and how do you respond?",
      },
    ],
    quiz: [
      {
        questionId: "d16q1",
        type: "multiple-choice",
        prompt: "What is the primary economic advantage of a co-investment for an LP?",
        options: [
          "Co-investments provide guaranteed returns above the fund hurdle rate",
          "Co-investments are typically offered at zero or reduced management fees and carry",
          "Co-investments allow LPs to redeem capital faster than the main fund",
          "Co-investments provide priority distributions ahead of other LPs",
        ],
        correctAnswer:
          "Co-investments are typically offered at zero or reduced management fees and carry",
      },
      {
        questionId: "d16q2",
        type: "multiple-choice",
        prompt: "What is adverse selection risk in the co-investment context?",
        options: [
          "The risk that the LP selects co-investments in sectors outside their expertise",
          "The risk that GPs offer co-invest on their weaker deals while keeping best deals fully in-fund",
          "The risk of investing in a company at a higher valuation than the fund paid",
          "The risk that other LPs in the same co-invest decline, leaving the LP with excess exposure",
        ],
        correctAnswer:
          "The risk that GPs offer co-invest on their weaker deals while keeping best deals fully in-fund",
      },
      {
        questionId: "d16q3",
        type: "multiple-choice",
        prompt:
          "An LP holds a $30M position in a buyout fund that owns 15% of Company X. The LP also co-invests $10M directly into Company X. What risk does this create?",
        options: [
          "The LP now pays double management fees on the Company X exposure",
          "The LP has concentrated exposure to Company X beyond what the fund alone would have provided",
          "The co-invest invalidates the LP's MFN rights in the main fund",
          "The LP's IRR on the fund will be diluted by the co-invest",
        ],
        correctAnswer:
          "The LP has concentrated exposure to Company X beyond what the fund alone would have provided",
      },
      {
        questionId: "d16q4",
        type: "multiple-choice",
        prompt:
          "A GP consistently offers co-investments to LPs on nearly every deal. What might this signal?",
        options: [
          "The GP is exceptionally well-aligned with LPs by sharing deal flow broadly",
          "The fund may be undersized relative to the deals being pursued, or the GP's LP base is not confident enough to let the fund take full positions",
          "The GP is maximising LP fee savings as a competitive differentiator",
          "The GP's LPA requires co-investment offers on all deals above $50M",
        ],
        correctAnswer:
          "The fund may be undersized relative to the deals being pursued, or the GP's LP base is not confident enough to let the fund take full positions",
      },
      {
        questionId: "d16q5",
        type: "short-response",
        prompt:
          "What three questions would you ask before accepting a co-investment opportunity from a GP?",
        modelAnswer:
          "First: Why is this being offered to us — is the fund at its concentration limit, or does the GP need capital to close quickly? A timing-driven offer deserves more scrutiny. Second: What is the fund's position in this company, and what will our total exposure be across both the fund and the co-invest? You want to understand portfolio-level concentration. Third: What is the full investment thesis, and do we have the internal capability to underwrite a single-name direct position? Co-investments require deal-level diligence, not just fund-level diligence.",
      },
    ],
    sources: [
      "ILPA co-investment best practices guidance",
      "CFA Institute alternative investments — co-investment structures",
      "Preqin co-investment market analysis",
    ],
  },

  // ── Day 17 ─────────────────────────────────────────────────────────────────
  {
    lessonId: "day-17",
    blocks: [
      {
        type: "intro",
        title: "Why this matters",
        content:
          "Adding PE to a portfolio is not just a return decision — it is a liquidity, governance, and complexity decision. Understanding how PE fits in a broader allocation framework helps you size it correctly and set realistic expectations for what it can and cannot do.",
      },
      {
        type: "teaching",
        title: "The illiquidity premium argument",
        content:
          "The theoretical case for PE rests on an illiquidity premium: investors who accept locked-up capital, complex reporting, and manager-selection risk should earn more than a passive public-market investor. Empirically, evidence is mixed. Net-of-fee PE returns have outperformed public equities in some periods and underperformed in others depending on vintage, strategy, and manager selection. The premium is not guaranteed — it must be earned through manager selection and programme discipline.",
      },
      {
        type: "teaching",
        title: "Sizing PE in a portfolio",
        content:
          "PE sizing depends on three constraints. Liquidity: PE capital is locked up for 7–12 years; the allocation must be sized within the portfolio's liquidity budget — typically no more than 20–30% for an endowment, less for a pension with near-term liabilities. Return objective: PE should be expected to beat the equivalent public-market benchmark by enough to justify illiquidity and complexity — often targeted at 200–300bps net of fees over a PME benchmark. Governance capacity: PE requires ongoing manager selection, pacing management, and reporting — it is a resource-intensive asset class.",
      },
      {
        type: "example",
        title: "Mini-case: sizing for a pension vs. endowment",
        content:
          "A university endowment with no near-term spending constraints (other than a 5% annual distribution) can allocate 25–35% to PE — long time horizon, perpetual capital. A corporate pension fund with defined benefit obligations payable in 5–10 years might target 8–12% — liquidity needs constrain the illiquid allocation. Both are rational. The PE allocation is a function of liability structure as much as return expectations.",
      },
      {
        type: "exercise",
        title: "Quick exercise",
        content:
          "A foundation asks you whether to increase its PE allocation from 10% to 20%. What three questions do you ask before making a recommendation?",
      },
    ],
    quiz: [
      {
        questionId: "d17q1",
        type: "multiple-choice",
        prompt: "What is the theoretical basis for expecting a PE return premium over public equities?",
        options: [
          "PE managers have access to better macroeconomic forecasts than public equity managers",
          "Investors accepting illiquidity, complexity, and manager risk should be compensated with higher expected returns",
          "PE portfolios are more diversified than public equity indices",
          "PE fees are lower than mutual fund fees, improving net returns",
        ],
        correctAnswer:
          "Investors accepting illiquidity, complexity, and manager risk should be compensated with higher expected returns",
      },
      {
        questionId: "d17q2",
        type: "multiple-choice",
        prompt:
          "Which factor most limits the appropriate PE allocation size for a defined benefit pension fund?",
        options: [
          "Regulatory restrictions on alternative investments",
          "Near-term liquidity needs to fund benefit payments",
          "Manager concentration limits in the LPA",
          "The fund's inability to conduct co-investments",
        ],
        correctAnswer: "Near-term liquidity needs to fund benefit payments",
      },
      {
        questionId: "d17q3",
        type: "multiple-choice",
        prompt:
          "A PE programme targets 250bps of net outperformance over a public-market PME benchmark. What does this mean in practice?",
        options: [
          "The PE portfolio must beat the S&P 500 IRR by 2.5% annualised net of all fees",
          "The PME of the PE programme should be at least 1.0 plus a 2.5% annual excess return equivalent",
          "The GP's gross IRR must exceed the LP's hurdle rate by 2.5%",
          "The PE allocation must produce a 2.5x TVPI above the public benchmark TVPI",
        ],
        correctAnswer:
          "The PME of the PE programme should be at least 1.0 plus a 2.5% annual excess return equivalent",
      },
      {
        questionId: "d17q4",
        type: "multiple-choice",
        prompt:
          "Why is 'governance capacity' a genuine constraint on PE allocation size?",
        options: [
          "PE governance requires board approval for every co-investment",
          "PE requires ongoing manager diligence, pacing management, and complex reporting that demands internal staff resources",
          "ERISA rules require governance reviews for every PE commitment above $10M",
          "Larger PE allocations require more frequent LPAC participation, consuming staff time",
        ],
        correctAnswer:
          "PE requires ongoing manager diligence, pacing management, and complex reporting that demands internal staff resources",
      },
      {
        questionId: "d17q5",
        type: "short-response",
        prompt:
          "Explain why the illiquidity premium in PE is not guaranteed and what conditions must be met to earn it.",
        modelAnswer:
          "The illiquidity premium is a compensation for accepting locked-up capital, manager risk, and complexity — but it is not automatic. It must be earned through above-median manager selection (PE dispersion is wide, so median managers may not outperform public markets net of fees), disciplined vintage year diversification (a single bad vintage can drag programme returns), and sustained programme governance (pacing, diligence, and relationships). Empirically, the premium has been realised by sophisticated institutional investors with strong governance and long track records in the asset class, but not by all investors. A poorly constructed PE programme can underperform public equities after fees.",
      },
    ],
    sources: [
      "CFA Institute alternative investments — PE in the portfolio context",
      "CAIA Level II — alternative asset allocation",
      "Swensen, David — Pioneering Portfolio Management (endowment framework)",
    ],
  },

  // ── Day 18 ─────────────────────────────────────────────────────────────────
  {
    lessonId: "day-18",
    blocks: [
      {
        type: "intro",
        title: "Why this matters",
        content:
          "PE NAV is not a market price — it is an estimate. Understanding how it is calculated and where it can be manipulated is essential for interpreting quarterly reports, understanding volatility, and identifying GPs who are managing marks rather than managing companies.",
      },
      {
        type: "teaching",
        title: "How PE NAV is calculated",
        content:
          "PE portfolio companies are valued using appraisal methods: comparable company multiples (EV/EBITDA relative to public peers), discounted cash flow, recent transaction comparables, or cost for early-stage companies. The GP estimates the value quarterly; the fund's auditor reviews annually. FASB ASC 820 (fair value accounting) requires GPs to mark at 'exit price' — the price a market participant would pay — but the inputs involve significant judgment. Valuations are self-reported between annual audits.",
      },
      {
        type: "teaching",
        title: "Smoothing, stale marks, and the correlation illusion",
        content:
          "Because PE valuations are lagged and based on appraisals rather than daily prices, they do not move in sync with public markets. This creates artificially low reported volatility and correlation with equities — a statistical artefact, not a real portfolio benefit. In a market downturn, PE NAVs fall with a lag of one to two quarters. This smoothing makes PE look like a diversifier in short-term analysis. Over full market cycles, the correlation to equity markets is substantially higher than quarterly data suggest.",
      },
      {
        type: "example",
        title: "Mini-case: stale marks in 2022",
        content:
          "In 2022, public equity markets fell 20%. Many PE funds reported flat or slightly negative NAVs through Q3 2022, citing 'portfolio company resilience.' By Q1 2023, many had marked down 10–15% as audits forced reconciliation with market reality. LPs who relied on Q3 2022 NAV for asset allocation decisions were working with stale data. The lesson: in a rapidly moving market, treat recent PE NAVs as lagged indicators, not current values.",
      },
      {
        type: "exercise",
        title: "Quick exercise",
        content:
          "A GP's quarterly report shows portfolio company valuations unchanged despite a 25% decline in the public-market peer group multiple. What questions would you ask at the next LP call?",
      },
    ],
    quiz: [
      {
        questionId: "d18q1",
        type: "multiple-choice",
        prompt: "How do PE GPs typically value portfolio companies between liquidity events?",
        options: [
          "Using daily market prices from comparable public companies",
          "Using appraisal methods including comparable multiples, DCF, and recent transaction comparables",
          "Using the original cost of the investment adjusted for inflation",
          "Using a standardised formula set by the LPAC",
        ],
        correctAnswer:
          "Using appraisal methods including comparable multiples, DCF, and recent transaction comparables",
      },
      {
        questionId: "d18q2",
        type: "multiple-choice",
        prompt:
          "Why does PE appear to have lower volatility and correlation to public equities than it actually does?",
        options: [
          "PE investments are structurally uncorrelated to equity market risk factors",
          "PE NAV is based on lagged appraisals rather than daily market prices, creating a smoothing effect",
          "PE managers hedge currency and equity risk at the portfolio company level",
          "PE reporting standards require smoothing over a four-quarter rolling average",
        ],
        correctAnswer:
          "PE NAV is based on lagged appraisals rather than daily market prices, creating a smoothing effect",
      },
      {
        questionId: "d18q3",
        type: "multiple-choice",
        prompt:
          "What is the most reliable time to assess the accuracy of a fund's reported NAV?",
        options: [
          "At each quarter-end, when the GP submits its self-reported marks",
          "Following the annual independent audit, when auditors have reviewed valuations",
          "At fund inception, when entry prices were set at arm's length",
          "After each capital call, when the GP revalues the full portfolio",
        ],
        correctAnswer:
          "Following the annual independent audit, when auditors have reviewed valuations",
      },
      {
        questionId: "d18q4",
        type: "multiple-choice",
        prompt:
          "A GP consistently marks portfolio companies at the high end of the public peer multiple range. What concern does this raise?",
        options: [
          "The GP may be violating FASB ASC 820 fair value requirements",
          "The GP may be managing marks upward to support fundraising or performance reporting",
          "Portfolio company revenue must be growing faster than peers to justify higher multiples",
          "High multiples reduce the fund's DPI relative to TVPI",
        ],
        correctAnswer:
          "The GP may be managing marks upward to support fundraising or performance reporting",
      },
      {
        questionId: "d18q5",
        type: "short-response",
        prompt:
          "What are two practical ways an LP can assess whether a GP's NAV marks are credible?",
        modelAnswer:
          "First, compare reported valuations to the public-market peer group multiples over time. If the GP's marks have not moved while comparable public companies declined 20–30%, the marks are likely stale. Ask specifically: what multiple is being applied and why is it above/below the peer median? Second, track the 'exit multiple surprise' across prior fund exits — when deals were sold, did they exit at valuations above or below the last reported NAV? GPs who consistently exit above NAV are conservative markers; those who exit below NAV were holding inflated marks. A pattern of downward surprises at exit is a significant credibility concern.",
      },
    ],
    sources: [
      "FASB ASC 820 — fair value measurement standards",
      "ILPA reporting and valuation best practices",
      "CFA Institute alternative investments — PE valuation and reporting",
    ],
  },

  // ── Day 19 ─────────────────────────────────────────────────────────────────
  {
    lessonId: "day-19",
    blocks: [
      {
        type: "intro",
        title: "Why this matters",
        content:
          "ESG is no longer optional in institutional PE. Most large LPs have ESG policy requirements; regulators in Europe and increasingly in the US are expanding disclosure mandates; and GPs are integrating ESG into value creation plans. You need to distinguish substantive practice from marketing.",
      },
      {
        type: "teaching",
        title: "ESG integration in PE vs. public markets",
        content:
          "In public equities, ESG integration typically means screening and tilting a portfolio based on third-party ratings. In PE, the GP controls the company — they can directly change governance structures, environmental practices, and social policies. This makes PE potentially more impactful than public ESG, but also harder to measure. PE ESG integration typically involves pre-investment ESG due diligence, value creation plans with ESG components (e.g. decarbonisation targets, board diversity), and exit preparation that anticipates ESG scrutiny from strategic buyers.",
      },
      {
        type: "teaching",
        title: "ESG vs. impact investing",
        content:
          "ESG integration aims to identify and manage material risks and opportunities — it is risk and return-motivated. Impact investing intentionally targets measurable positive social or environmental outcomes alongside financial returns. The distinction matters: a buyout fund integrating ESG is not an impact fund. Impact investing requires additionality (would the impact have happened without the investment?), measurability (standardised metrics), and intentionality. Blurring the two is a common form of greenwashing.",
      },
      {
        type: "example",
        title: "Mini-case: ESG in a GP value creation plan",
        content:
          "A mid-market industrial buyout GP acquires a manufacturing business. The value creation plan includes: reducing Scope 1 emissions by 30% over the hold period (lowers operating costs and expands the strategic buyer universe), installing an independent board with two new directors (improves governance for IPO readiness), and formalising supplier ESG audit requirements (reduces supply chain risk flagged by strategic buyers). Exit proceeds are 15% above initial target — the ESG initiatives directly supported the higher exit multiple from a strategic buyer with a net-zero supply chain commitment.",
      },
      {
        type: "exercise",
        title: "Quick exercise",
        content:
          "A GP claims their fund is 'ESG-integrated' and provides a one-page ESG policy. What specific questions would you ask to determine whether the ESG integration is substantive?",
      },
    ],
    quiz: [
      {
        questionId: "d19q1",
        type: "multiple-choice",
        prompt:
          "What is the key difference between ESG integration and impact investing?",
        options: [
          "ESG integration applies only to public equities; impact investing applies to private markets",
          "ESG integration manages risk and return; impact investing intentionally targets measurable positive outcomes",
          "Impact investing excludes fossil fuel companies; ESG integration does not",
          "ESG integration is required by regulators; impact investing is voluntary",
        ],
        correctAnswer:
          "ESG integration manages risk and return; impact investing intentionally targets measurable positive outcomes",
      },
      {
        questionId: "d19q2",
        type: "multiple-choice",
        prompt:
          "Why does PE have more potential ESG impact than public equity investing?",
        options: [
          "PE funds are exempt from ESG disclosure requirements, allowing more flexibility",
          "PE GPs have controlling ownership and direct influence over portfolio company practices",
          "PE investments are held longer, giving more time for ESG initiatives to compound",
          "PE companies are smaller and more responsive to investor pressure than large public companies",
        ],
        correctAnswer:
          "PE GPs have controlling ownership and direct influence over portfolio company practices",
      },
      {
        questionId: "d19q3",
        type: "multiple-choice",
        prompt: "What is 'greenwashing' in the context of PE ESG claims?",
        options: [
          "A GP investing exclusively in environmental sectors such as clean energy",
          "Overstating ESG integration or impact in marketing materials without substantive underlying practice",
          "Applying public-equity ESG screening methods to PE portfolios",
          "Excluding high-carbon industries from a fund regardless of financial merit",
        ],
        correctAnswer:
          "Overstating ESG integration or impact in marketing materials without substantive underlying practice",
      },
      {
        questionId: "d19q4",
        type: "multiple-choice",
        prompt:
          "Which regulatory framework has most significantly increased ESG disclosure requirements for PE managers in recent years?",
        options: [
          "Basel III — capital requirements for financial institutions",
          "EU Sustainable Finance Disclosure Regulation (SFDR) — Article 8 and 9 fund classifications",
          "ERISA fiduciary standards for US pension fund PE allocations",
          "SEC Regulation D — private placement reporting requirements",
        ],
        correctAnswer:
          "EU Sustainable Finance Disclosure Regulation (SFDR) — Article 8 and 9 fund classifications",
      },
      {
        questionId: "d19q5",
        type: "short-response",
        prompt:
          "How would you distinguish a GP with substantive ESG integration from one using ESG as a marketing label?",
        modelAnswer:
          "Ask for specific evidence at the deal level: How does ESG diligence affect the investment decision — can they name a deal they passed on due to ESG risk? What ESG metrics are tracked across the portfolio and how are they reported to LPs? Are ESG KPIs built into value creation plans with measurable targets? Who on the investment team owns ESG diligence — a dedicated partner or a generic policy document? Finally, look at exits: did ESG improvements demonstrably expand the buyer universe or improve exit multiples? A GP who cannot give deal-specific answers is likely providing marketing language, not operational practice.",
      },
    ],
    sources: [
      "UN Principles for Responsible Investment (UNPRI) — PE implementation guidance",
      "EU SFDR Article 8 and 9 classification framework",
      "ILPA ESG assessment framework",
      "CFA Institute ESG investing — private markets application",
    ],
  },

  // ── Day 20 ─────────────────────────────────────────────────────────────────
  {
    lessonId: "day-20",
    blocks: [
      {
        type: "intro",
        title: "Why this matters",
        content:
          "This final lesson is not new content — it is a synthesis. PE fluency is not about memorising definitions. It is about being able to walk into a manager meeting, listen critically, ask better questions than the GP expects, and leave with a clearer view of whether this is a manager worth backing.",
      },
      {
        type: "teaching",
        title: "The mental model: from fund mechanics to allocator judgment",
        content:
          "The 20-day curriculum built a layered mental model. Layers 1–5: how PE funds work — structure, incentives, cash flows, IRR, multiples. You can now read a performance summary and know what is real and what is a reporting artefact. Layers 6–10: how strategies work — fund life cycles, buyout mechanics, sub-strategy differences, value creation, exits. You can evaluate whether a GP's narrative is consistent with their data. Layers 11–15: how programmes are managed — LPA terms, manager selection, benchmarking, pacing, secondaries. You can structure a PE programme and negotiate like an institutional LP. Layers 16–20: advanced topics — co-investments, allocation sizing, reporting quality, ESG. You can run a complete diligence process.",
      },
      {
        type: "teaching",
        title: "The five questions that matter most in a manager meeting",
        content:
          "1. What drove your returns — walk me through the value bridge on your last three exits. (Tests whether returns are real and repeatable.) 2. Where have you been wrong, and what did you learn? (Tests intellectual honesty and process quality.) 3. How does your PME compare to the relevant public benchmark? (Tests whether PE outperformed the alternative.) 4. What has changed in your team and strategy since your last fund? (Tests key-person and strategy-drift risk.) 5. What terms are you offering, and what side letters exist for other LPs? (Tests economic alignment and fairness.)",
      },
      {
        type: "example",
        title: "Full meeting scenario",
        content:
          "A mid-market GP presents Fund V: 'Top-quartile IRR of 24% net, 2.6x TVPI, strong operational track record.' Your checklist: Ask for PME — the GP says 1.15x vs. Russell 2000. Ask for value bridge — three of five exits show EBITDA growth > 40%; two are flat with multiple expansion. Ask about team — the GP's founding partner moved to chairman; a new CIO joined two years ago. Ask about fund size — Fund V is $1.2B, up from $600M. Ask about terms — 2/20 with 100% fee offset, MFN available. Assessment: strong PME, mostly real operational alpha, but key-person transition and fund size doubling are yellow flags requiring deeper team diligence.",
      },
      {
        type: "exercise",
        title: "Final exercise",
        content:
          "Write a one-paragraph investment memo summary for the GP described in the example above: what are the two strongest positives and the two most important risks you would continue to diligence before making a commitment decision?",
      },
    ],
    quiz: [
      {
        questionId: "d20q1",
        type: "multiple-choice",
        prompt:
          "A GP presents 26% gross IRR and 2.4x TVPI for their latest fund. What is the single most important additional metric to request?",
        options: [
          "The fund's DPI to understand how much has been realised",
          "The fund's management fee rate",
          "The number of portfolio companies in the fund",
          "The fund's vintage year relative to the prior fund",
        ],
        correctAnswer:
          "The fund's DPI to understand how much has been realised",
      },
      {
        questionId: "d20q2",
        type: "multiple-choice",
        prompt:
          "After 20 days of study, which statement best describes the role of PME in PE manager evaluation?",
        options: [
          "PME is a secondary metric used only when IRR is unavailable",
          "PME is the most rigorous benchmark because it controls for cash flow timing and compares PE to the actual alternative investment",
          "PME is only relevant for buyout funds, not growth equity or venture",
          "PME measures GP skill independent of market conditions",
        ],
        correctAnswer:
          "PME is the most rigorous benchmark because it controls for cash flow timing and compares PE to the actual alternative investment",
      },
      {
        questionId: "d20q3",
        type: "multiple-choice",
        prompt:
          "Which combination of findings in a manager meeting should most increase your conviction in a GP?",
        options: [
          "Top-quartile IRR, large fund size increase, and new senior hires replacing founding partners",
          "Strong PME, broad-based EBITDA growth across exits, stable team, and disciplined fund size",
          "High gross IRR driven by one outlier deal, low DPI, and an aggressive catch-up clause",
          "Top-quartile ranking in a strong vintage, high RVPI, and extensive co-investment programme",
        ],
        correctAnswer:
          "Strong PME, broad-based EBITDA growth across exits, stable team, and disciplined fund size",
      },
      {
        questionId: "d20q4",
        type: "multiple-choice",
        prompt:
          "Which of the following is the best single indicator that a PE fund's reported returns are built on repeatable skill rather than market conditions?",
        options: [
          "The fund is top quartile in its vintage year peer group",
          "The fund's value bridge shows consistent EBITDA margin improvement across multiple portfolio companies in different sectors",
          "The fund's IRR exceeds the hurdle rate in every quarterly report",
          "The fund manager has more than 20 years of PE experience",
        ],
        correctAnswer:
          "The fund's value bridge shows consistent EBITDA margin improvement across multiple portfolio companies in different sectors",
      },
      {
        questionId: "d20q5",
        type: "short-response",
        prompt:
          "You are preparing a one-paragraph recommendation on whether to commit to a PE fund. Name the five data points you would prioritise and briefly explain why each matters.",
        modelAnswer:
          "1. Net IRR and PME: together these tell you the absolute return and whether it beat the public-market alternative after accounting for cash flow timing. 2. DPI: separates real cash returned from paper marks — critical for assessing how much of the GP's track record is realised. 3. Value bridge across exits: shows whether returns were driven by repeatable operational improvement or by market-timing and leverage — the former is more durable. 4. Team continuity since the track record was built: the track record belongs to the people who made the decisions; a changed team is a different product. 5. Fund size relative to prior funds: a large size increase strains strategy, deal sourcing, and GP attention — it must be justified by a credible explanation of how the strategy scales.",
      },
    ],
    sources: [
      "CFA Institute alternative investments — full curriculum synthesis",
      "CAIA Level I and II — private equity comprehensive review",
      "ILPA principles and due diligence guidance — complete framework",
      "Kaplan and Schoar (2005); Harris, Jenkinson, Kaplan (2014) — PE performance research",
    ],
  },
];

export function getLessonContent(lessonId: string): LessonContent | undefined {
  return lessonContents.find((l) => l.lessonId === lessonId);
}
