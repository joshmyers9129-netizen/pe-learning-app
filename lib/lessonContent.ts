import { LessonContent } from "./types";

const SOURCES = {
  core: [
    "ILPA educational materials (ilpa.org)",
    "CFA Institute private markets curriculum",
    "CAIA private equity curriculum references",
  ],
  performance: [
    "ILPA performance reporting standards",
    "CFA Institute Global Investment Performance Standards (GIPS)",
    "Cambridge Associates PE benchmarking methodology",
  ],
  advanced: [
    "ILPA educational materials (ilpa.org)",
    "Preqin Global Private Equity Report",
    "Cambridge Associates PE benchmarking methodology",
  ],
};

export const allLessonContent: LessonContent[] = [
  // ─── Day 1 ───────────────────────────────────────────────────────────────
  {
    lessonId: "day-01",
    blocks: [
      {
        type: "intro",
        title: "Why this matters",
        content:
          "You cannot follow a GP meeting if you do not have the fund model in your head. Every metric, term, and negotiation in PE flows from this baseline structure.",
      },
      {
        type: "teaching",
        title: "The PE fund model",
        content:
          "A PE fund is a closed-end vehicle. LPs commit capital; the GP draws it down through capital calls, invests in portfolio companies, manages them, then exits and distributes proceeds. The fund typically runs 10 years: a 4–5 year investment period followed by a harvest period. LPs cannot withdraw early — hence the illiquidity premium.",
        visualId: "fund-lifecycle-timeline",
      },
      {
        type: "example",
        title: "A $2B fund in practice",
        content:
          "A GP raises a $2B fund. LPs commit but do not wire cash on day one. Over four years the GP issues capital calls as deals close — perhaps $400M in year one, $600M in year two, and so on. From year five onward, the GP sells holdings and distributes proceeds. Final IRR and multiples are calculated on the full stream of calls and distributions.",
      },
      {
        type: "exercise",
        title: "Quick exercise",
        content:
          "In one or two sentences, explain why committed capital is not the same as invested capital, and what that means for LP liquidity planning.",
      },
    ],
    quiz: [
      {
        questionId: "d1q1",
        type: "multiple-choice",
        prompt: "Which best describes a typical PE fund?",
        options: [
          "Open-end vehicle with daily subscriptions and redemptions",
          "Closed-end fund where capital is committed upfront but drawn over time",
          "Passive vehicle that tracks a private-company benchmark",
          "Permanent capital vehicle with no distribution cycle",
        ],
        correctAnswer:
          "Closed-end fund where capital is committed upfront but drawn over time",
      },
      {
        questionId: "d1q2",
        type: "multiple-choice",
        prompt: "What is the GP's primary role in a PE fund?",
        options: [
          "Provide the majority of capital and outsource investment decisions",
          "Manage the fund, source deals, make investments, and oversee exits",
          "Act as a reporting agent for LPs without investment discretion",
          "Match LP flows with public-market liquidity",
        ],
        correctAnswer:
          "Manage the fund, source deals, make investments, and oversee exits",
      },
      {
        questionId: "d1q3",
        type: "short-response",
        prompt:
          "Why does the capital call structure create a liquidity management challenge for LPs?",
      },
    ],
    sources: SOURCES.core,
  },

  // ─── Day 2 ───────────────────────────────────────────────────────────────
  {
    lessonId: "day-02",
    blocks: [
      {
        type: "intro",
        title: "Why this matters",
        content:
          "Fee and carry structures directly affect your net returns. Misunderstanding them leads to mispriced commitments and missed negotiating opportunities.",
      },
      {
        type: "teaching",
        title: "The 2-and-20 incentive stack",
        content:
          "The GP earns a management fee (typically 2% annually on committed capital, stepping down to invested capital after the investment period) and carried interest (typically 20% of profits above an 8% hurdle rate). The hurdle ensures LPs recover capital plus a preferred return before carry is paid. Some funds include a GP catch-up provision after the hurdle is cleared.",
      },
      {
        type: "example",
        title: "Fee step-down in action",
        content:
          "A GP manages a $1B fund. In years 1–5, the 2% fee is charged on $1B committed capital = $20M/yr. After year 5, the fee steps to invested capital of $600M = $12M/yr. This step-down aligns the GP's interest with deployment quality, not just AUM size.",
      },
      {
        type: "exercise",
        title: "Quick exercise",
        content:
          "A $500M fund charges 2% on committed capital for the first four years, then 1.75% on invested capital ($320M) thereafter. Calculate the management fee in year 3 and year 7.",
      },
    ],
    quiz: [
      {
        questionId: "d2q1",
        type: "multiple-choice",
        prompt: "What is carried interest?",
        options: [
          "A fixed annual fee paid regardless of performance",
          "The GP's share of fund profits above the hurdle rate",
          "A fee charged on each capital call",
          "An LP reimbursement for fund expenses",
        ],
        correctAnswer: "The GP's share of fund profits above the hurdle rate",
      },
      {
        questionId: "d2q2",
        type: "multiple-choice",
        prompt:
          "Why do management fees typically step down from committed to invested capital?",
        options: [
          "To reduce LP administrative burden",
          "To align GP incentives with deployment quality rather than AUM size",
          "Because regulatory rules require it after year five",
          "To match the fee basis of hedge funds",
        ],
        correctAnswer:
          "To align GP incentives with deployment quality rather than AUM size",
      },
      {
        questionId: "d2q3",
        type: "short-response",
        prompt:
          "Explain how the hurdle rate protects LP interests before carry is paid.",
      },
    ],
    sources: SOURCES.core,
  },

  // ─── Day 3 ───────────────────────────────────────────────────────────────
  {
    lessonId: "day-03",
    blocks: [
      {
        type: "intro",
        title: "Why this matters",
        content:
          "The J-curve is why PE looks bad early and good late. Understanding it prevents panic at interim reports and helps you plan LP liquidity correctly.",
      },
      {
        type: "teaching",
        title: "Capital calls and the J-curve",
        content:
          "Capital calls are issued as deals close — not on a fixed schedule. LPs typically have 10 business days to fund each call. Early in fund life, fees are charged before investments are made, and early marks may reflect writedowns, pushing interim IRR negative. As exits generate distributions the curve inflects upward. Reliable IRR is only available when the fund is 60–70% through its life.",
        visualId: "j-curve",
      },
      {
        type: "example",
        title: "The J-curve illustrated",
        content:
          "In year 1, an LP commits $10M to a fund. The GP calls $2M for investments and charges $200K in fees. Interim IRR: deeply negative. By year 6, exits return $8M cash. By year 10, total distributions of $22M produce a 2.2x TVPI and strong IRR — but early investors had to weather years of negative interim reporting.",
      },
      {
        type: "exercise",
        title: "Quick exercise",
        content:
          "List three specific reasons why interim PE IRR is unreliable in the first three years of a fund's life.",
      },
    ],
    quiz: [
      {
        questionId: "d3q1",
        type: "multiple-choice",
        prompt: "Why does the J-curve occur in PE funds?",
        options: [
          "LPs withdraw capital early, reducing the fund size",
          "Fees and early writedowns hit before exits generate returns",
          "GPs invest too quickly, creating overcrowding",
          "Management fees are charged only in the first two years",
        ],
        correctAnswer:
          "Fees and early writedowns hit before exits generate returns",
      },
      {
        questionId: "d3q2",
        type: "multiple-choice",
        prompt:
          "An LP receives a capital call notice on Monday. When must the funds typically be wired?",
        options: [
          "Within 30 calendar days",
          "Within 10 business days",
          "At the LP's discretion during the investment period",
          "At the end of the fiscal quarter",
        ],
        correctAnswer: "Within 10 business days",
      },
      {
        questionId: "d3q3",
        type: "short-response",
        prompt:
          "At what stage in a fund's life does interim IRR become reasonably meaningful, and why?",
      },
    ],
    sources: SOURCES.core,
  },

  // ─── Day 4 ───────────────────────────────────────────────────────────────
  {
    lessonId: "day-04",
    blocks: [
      {
        type: "intro",
        title: "Why this matters",
        content:
          "IRR is the universal PE performance currency. You need to calculate it fluently and spot when it is being gamed or misused.",
      },
      {
        type: "teaching",
        title: "IRR: definition and limits",
        content:
          "IRR is the annualised discount rate that makes the NPV of all cash flows equal zero. It rewards fast returns — small funds or early distributions can inflate IRR without proportional capital creation. Gross IRR is before fees and carry; net IRR is what LPs actually earn. GPs can game IRR via subscription credit lines (delaying capital calls) or by distributing early on the best deals and holding laggards.",
      },
      {
        type: "example",
        title: "Same IRR, different scale",
        content:
          "Fund A: $500M invested, 25% gross IRR. Fund B: $50M invested, 25% gross IRR. Both look identical on IRR. Fund A created roughly $625M of gross profit; Fund B created $62.5M. IRR doesn't capture the magnitude of capital creation — that's what multiples fix.",
      },
      {
        type: "exercise",
        title: "Quick exercise",
        content:
          "Identify two specific practices a GP could use to inflate IRR without genuinely improving investment returns. Explain the mechanism for each.",
      },
    ],
    quiz: [
      {
        questionId: "d4q1",
        type: "multiple-choice",
        prompt: "What does IRR measure in a PE context?",
        options: [
          "The total multiple of capital invested",
          "The annualised return that makes NPV of all cash flows equal zero",
          "The ratio of distributions to paid-in capital",
          "The average annual return on invested capital",
        ],
        correctAnswer:
          "The annualised return that makes NPV of all cash flows equal zero",
      },
      {
        questionId: "d4q2",
        type: "multiple-choice",
        prompt:
          "How do subscription credit lines affect reported IRR, all else equal?",
        options: [
          "They reduce IRR by increasing fund expenses",
          "They inflate IRR by delaying the start date of LP capital calls",
          "They have no effect on IRR calculations",
          "They reduce IRR by adding leverage costs",
        ],
        correctAnswer:
          "They inflate IRR by delaying the start date of LP capital calls",
      },
      {
        questionId: "d4q3",
        type: "short-response",
        prompt:
          "Why is gross IRR insufficient on its own when evaluating a PE manager's track record?",
      },
    ],
    sources: SOURCES.performance,
  },

  // ─── Day 5 ───────────────────────────────────────────────────────────────
  {
    lessonId: "day-05",
    blocks: [
      {
        type: "intro",
        title: "Why this matters",
        content:
          "Multiples tell you what IRR hides: how much actual wealth was created. Together, TVPI, DPI, and RVPI give a complete picture of where a fund stands.",
      },
      {
        type: "teaching",
        title: "TVPI, DPI, and RVPI defined",
        content:
          "TVPI (Total Value to Paid-In) = (distributions + residual NAV) / paid-in capital. It is the headline multiple. DPI (Distributions to Paid-In) = cash returned / paid-in capital. It is the realized component only. RVPI (Residual Value to Paid-In) = NAV / paid-in capital — the unrealized portion. TVPI = DPI + RVPI. Late in fund life, RVPI should shrink toward zero as the GP exits holdings. High RVPI in a mature fund is a warning sign.",
        visualId: "multiples-relationship",
      },
      {
        type: "example",
        title: "Reading the multiples at fund maturity",
        content:
          "A fund in year nine reports 1.8x TVPI. DPI is 0.6x and RVPI is 1.2x. The LP has received back only 60 cents per dollar invested in cash — more than half the promised return is still locked in unrealized marks. Scrutinize those marks and ask whether the GP has a credible path to exit.",
      },
      {
        type: "exercise",
        title: "Quick exercise",
        content:
          "A fund reports 2.1x TVPI and 1.4x DPI. What is the RVPI? Is this concerning if the fund is in year four versus year nine? Explain.",
      },
    ],
    quiz: [
      {
        questionId: "d5q1",
        type: "multiple-choice",
        prompt:
          "Why does DPI matter more than TVPI late in a fund's life?",
        options: [
          "DPI includes unrealized NAV, giving a fuller picture",
          "DPI measures only realized cash returned, cutting through valuation uncertainty",
          "DPI adjusts for management fees; TVPI does not",
          "DPI is required by GIPS standards; TVPI is not",
        ],
        correctAnswer:
          "DPI measures only realized cash returned, cutting through valuation uncertainty",
      },
      {
        questionId: "d5q2",
        type: "multiple-choice",
        prompt:
          "A mature fund (year nine) reports 2.0x TVPI but only 0.5x DPI. What is the most likely concern?",
        options: [
          "The fund returned too much capital too early",
          "The GP is holding unrealized positions and may be managing marks",
          "Management fees are absorbing most of the returns",
          "The fund is overcapitalised relative to deal flow",
        ],
        correctAnswer:
          "The GP is holding unrealized positions and may be managing marks",
      },
      {
        questionId: "d5q3",
        type: "short-response",
        prompt:
          "Explain how a GP could show strong TVPI while actually underperforming from an LP's perspective.",
      },
    ],
    sources: SOURCES.performance,
  },

  // ─── Day 6 ───────────────────────────────────────────────────────────────
  {
    lessonId: "day-06",
    blocks: [
      {
        type: "intro",
        title: "Why this matters",
        content:
          "You cannot benchmark PE fairly without understanding vintage year context. Comparing funds across different macro environments is apples to oranges.",
      },
      {
        type: "teaching",
        title: "Fund phases and vintage year",
        content:
          "A PE fund moves through three phases: (1) Fundraising and early deployment (years 1–2), (2) Investment period (years 1–4/5), (3) Harvest and wind-down (years 5–10+). Vintage year is defined by the year of first close or first capital call. Funds of the same vintage faced the same credit conditions and entry valuations — making same-vintage comparisons the standard for benchmarking.",
        visualId: "fund-lifecycle-timeline",
      },
      {
        type: "example",
        title: "Vintage year comparison",
        content:
          "A 2007 vintage fund bought at peak valuations with expensive debt. A 2009 vintage fund bought in the post-GFC dislocation at discounted multiples. Both may show 'top-quartile' by their vintage — but the 2009 fund had a structural advantage. Comparing them directly distorts the picture.",
      },
      {
        type: "exercise",
        title: "Quick exercise",
        content:
          "A fund raised in 2021 is now in year four. Which phase is it likely in? What are the key reporting metrics you'd focus on at this stage, and why?",
      },
    ],
    quiz: [
      {
        questionId: "d6q1",
        type: "multiple-choice",
        prompt: "How is vintage year conventionally defined for a PE fund?",
        options: [
          "The year the fund holds its final close",
          "The year of the first close or first capital call",
          "The year the first investment is made",
          "The year the GP files regulatory documents",
        ],
        correctAnswer: "The year of the first close or first capital call",
      },
      {
        questionId: "d6q2",
        type: "multiple-choice",
        prompt:
          "Why is comparing 2007-vintage PE funds to 2009-vintage funds misleading?",
        options: [
          "They use different fee structures",
          "They faced different macro conditions and entry valuations",
          "They target different industry sectors",
          "They have different fund sizes",
        ],
        correctAnswer:
          "They faced different macro conditions and entry valuations",
      },
      {
        questionId: "d6q3",
        type: "short-response",
        prompt:
          "A fund is in year seven. Describe the phase it is likely in and what that implies for how you read its performance metrics.",
      },
    ],
    sources: SOURCES.core,
  },

  // ─── Day 7 ───────────────────────────────────────────────────────────────
  {
    lessonId: "day-07",
    blocks: [
      {
        type: "intro",
        title: "Why this matters",
        content:
          "Buyouts are the dominant PE strategy by AUM. Understanding LBO mechanics is the foundation for evaluating GP investment skill and return attribution.",
      },
      {
        type: "teaching",
        title: "LBO mechanics and return drivers",
        content:
          "A leveraged buyout acquires a company using a mix of equity (~40%) and debt (~60%). The three return drivers are: (1) Earnings growth — EBITDA expansion through revenue growth or margin improvement; (2) Multiple expansion — exiting at a higher EV/EBITDA than entry; (3) Debt paydown — as the company generates cash flow, equity value increases as leverage falls. Sustainable alpha comes from repeatable earnings growth, not from financial engineering alone.",
      },
      {
        type: "example",
        title: "Decomposing LBO returns",
        content:
          "A GP buys a company at 8x EBITDA using 60% debt. EBITDA grows 30% over five years. The exit multiple is 10x. The return was driven by all three levers: earnings growth increased the absolute value, the 8→10x re-rating added further upside, and debt paydown lifted equity value. An LP would ask: how much came from each driver?",
      },
      {
        type: "exercise",
        title: "Quick exercise",
        content:
          "Name the three return drivers in a leveraged buyout and briefly explain why relying primarily on multiple expansion is less attractive than earnings-led returns.",
      },
    ],
    quiz: [
      {
        questionId: "d7q1",
        type: "multiple-choice",
        prompt: "Which is NOT one of the three primary LBO return drivers?",
        options: [
          "EBITDA growth",
          "Multiple expansion",
          "Management fee reduction",
          "Leverage paydown",
        ],
        correctAnswer: "Management fee reduction",
      },
      {
        questionId: "d7q2",
        type: "multiple-choice",
        prompt:
          "Why is relying on multiple expansion alone a weak basis for GP alpha claims?",
        options: [
          "Multiple expansion is illegal under SEC rules",
          "It depends on market conditions, not GP operational skill, and is unlikely to repeat",
          "Multiple expansion always reduces IRR",
          "LPs cannot benefit from multiple expansion",
        ],
        correctAnswer:
          "It depends on market conditions, not GP operational skill, and is unlikely to repeat",
      },
      {
        questionId: "d7q3",
        type: "short-response",
        prompt:
          "How does higher leverage affect both the upside potential and downside risk of a buyout?",
      },
    ],
    sources: SOURCES.core,
  },

  // ─── Day 8 ───────────────────────────────────────────────────────────────
  {
    lessonId: "day-08",
    blocks: [
      {
        type: "intro",
        title: "Why this matters",
        content:
          "Sub-strategy distinctions affect risk profile, return drivers, and portfolio construction. Treating all PE as one bucket leads to misallocation.",
      },
      {
        type: "teaching",
        title: "Buyout vs. growth equity vs. venture",
        content:
          "Buyout: control stakes, mature cash-flowing businesses, 50–70% leverage, returns from all three LBO levers. Growth equity: minority stakes, high-growth companies, little or no leverage, returns driven almost entirely by earnings growth. Venture capital: early-stage, pre-revenue or early-revenue businesses, no leverage, power-law return distribution — most investments fail, winners must return the fund. Each has a different risk and liquidity profile.",
      },
      {
        type: "example",
        title: "Comparing two deals",
        content:
          "A buyout of an industrial manufacturer at 7x EBITDA with 55% debt is fundamentally different from a growth equity investment in a SaaS company growing 40% annually with no leverage. The manufacturer deal's success depends on operational improvement and debt management; the SaaS deal lives or dies on whether revenue growth sustains to justify the entry valuation.",
      },
      {
        type: "exercise",
        title: "Quick exercise",
        content:
          "For each sub-strategy (buyout, growth equity, venture), name the primary return driver and one key risk that distinguishes it from the others.",
      },
    ],
    quiz: [
      {
        questionId: "d8q1",
        type: "multiple-choice",
        prompt:
          "Which PE sub-strategy typically uses the most financial leverage?",
        options: [
          "Venture capital",
          "Growth equity",
          "Leveraged buyout",
          "Impact investing",
        ],
        correctAnswer: "Leveraged buyout",
      },
      {
        questionId: "d8q2",
        type: "multiple-choice",
        prompt:
          "Growth equity differs from buyout primarily because it:",
        options: [
          "Targets only technology companies",
          "Takes minority stakes with little leverage, relying on earnings growth for returns",
          "Invests only in pre-revenue businesses",
          "Charges higher management fees to compensate for lower leverage",
        ],
        correctAnswer:
          "Takes minority stakes with little leverage, relying on earnings growth for returns",
      },
      {
        questionId: "d8q3",
        type: "short-response",
        prompt:
          "Why does venture capital have a power-law return distribution, and what does that imply for how you evaluate a VC manager's track record?",
      },
    ],
    sources: SOURCES.core,
  },

  // ─── Day 9 ───────────────────────────────────────────────────────────────
  {
    lessonId: "day-09",
    blocks: [
      {
        type: "intro",
        title: "Why this matters",
        content:
          "Every GP claims operational value creation. You need a framework to verify those claims against actual portfolio data — not GP narratives.",
      },
      {
        type: "teaching",
        title: "Value creation levers and the value bridge",
        content:
          "PE value creation falls into three categories: (1) Operational improvement — revenue growth, margin expansion, bolt-on acquisitions; (2) Financial engineering — leverage effects, tax optimisation, balance sheet restructuring; (3) Multiple expansion — market re-rating. The value bridge is a deal-by-deal attribution framework that quantifies each lever. Top-quartile GPs show consistent operational improvement. Reliance on financial engineering or multiple expansion alone is not repeatable alpha.",
      },
      {
        type: "example",
        title: "When the narrative doesn't match the data",
        content:
          "A GP pitches 'operational expertise' as their edge. Their portfolio shows EBITDA margins declining across most holdings while EV/EBITDA exit multiples are 2x entry multiples. The data tells a different story: multiple expansion, not operations, drove returns. Ask for a value bridge decomposing each deal.",
      },
      {
        type: "exercise",
        title: "Quick exercise",
        content:
          "A GP shows 3.0x TVPI across five deals. Three deals returned 1.0–1.2x; two deals returned 5–6x. What questions does this attribution pattern raise about consistency and repeatability?",
      },
    ],
    quiz: [
      {
        questionId: "d9q1",
        type: "multiple-choice",
        prompt:
          "Which value creation lever is considered the most repeatable indicator of GP skill?",
        options: [
          "Multiple expansion",
          "Leverage paydown from low interest rates",
          "Operational improvement — revenue and margin growth",
          "Tax structure optimisation",
        ],
        correctAnswer:
          "Operational improvement — revenue and margin growth",
      },
      {
        questionId: "d9q2",
        type: "multiple-choice",
        prompt: "What does a value bridge show?",
        options: [
          "The timeline for future capital calls",
          "The deal-level attribution of returns across operational, financial, and multiple-expansion levers",
          "The comparison of PE returns to public market benchmarks",
          "The GP's carried interest calculation",
        ],
        correctAnswer:
          "The deal-level attribution of returns across operational, financial, and multiple-expansion levers",
      },
      {
        questionId: "d9q3",
        type: "short-response",
        prompt:
          "A GP claims 'operational value creation' but their portfolio shows declining margins. What specific data would you request to test their claim?",
      },
    ],
    sources: SOURCES.core,
  },

  // ─── Day 10 ──────────────────────────────────────────────────────────────
  {
    lessonId: "day-10",
    blocks: [
      {
        type: "intro",
        title: "Why this matters",
        content:
          "Exit route selection determines timing and valuation. Understanding the trade-offs helps you evaluate GP exit decisions and distribution timing.",
      },
      {
        type: "teaching",
        title: "The three main exit routes",
        content:
          "Trade sale: sell to a strategic acquirer. Often yields the highest multiple due to synergy premium, but requires a willing buyer. Secondary buyout: sell to another PE firm. Faster to execute but the new buyer must also generate a return, so entry valuations are disciplined. IPO: list on a public exchange. Provides liquidity over time but exposes timing risk and lock-up periods for the GP. Exit choice affects both DPI timing and the realised multiple.",
      },
      {
        type: "example",
        title: "Trade sale vs. IPO timing",
        content:
          "A GP has two exit options: a trade sale at 12x EBITDA with a 90-day close, or an IPO at 15x EBITDA with a 180-day lock-up during which markets could move. In a volatile market environment, the lower-multiple but certain trade sale may actually maximise realised LP proceeds after accounting for execution risk.",
      },
      {
        type: "exercise",
        title: "Quick exercise",
        content:
          "For each of the three exit routes, name one advantage and one risk from the LP's perspective.",
      },
    ],
    quiz: [
      {
        questionId: "d10q1",
        type: "multiple-choice",
        prompt:
          "Which exit route typically commands the highest valuation multiple?",
        options: [
          "Secondary buyout",
          "IPO",
          "Trade sale to a strategic acquirer",
          "Recapitalisation",
        ],
        correctAnswer: "Trade sale to a strategic acquirer",
      },
      {
        questionId: "d10q2",
        type: "multiple-choice",
        prompt: "A secondary buyout differs from a trade sale because:",
        options: [
          "It involves selling to a public company at a premium",
          "It sells the portfolio company to another PE firm, which must also generate a return",
          "It lists the company on a public exchange",
          "It allows LPs to sell their fund interests directly",
        ],
        correctAnswer:
          "It sells the portfolio company to another PE firm, which must also generate a return",
      },
      {
        questionId: "d10q3",
        type: "short-response",
        prompt:
          "How does the choice between an IPO and a trade sale affect LP liquidity and realised returns?",
      },
    ],
    sources: SOURCES.core,
  },

  // ─── Day 11 ──────────────────────────────────────────────────────────────
  {
    lessonId: "day-11",
    blocks: [
      {
        type: "intro",
        title: "Why this matters",
        content:
          "LPA terms define your rights, protections, and economics for a 10-year relationship. Signing without understanding the key provisions is a costly mistake.",
      },
      {
        type: "teaching",
        title: "Key LPA provisions",
        content:
          "Economic terms: management fee, carried interest rate, hurdle rate, GP catch-up. Governance terms: key man clause (suspends investment period if named partners depart), LPAC (LP advisory committee with consent rights over conflicts), no-fault divorce (LP supermajority can remove the GP), clawback (GP must return excess carry if later deals underperform). Most-favoured-nation (MFN) clauses give anchor LPs the right to match terms given to others.",
      },
      {
        type: "example",
        title: "Key man clause in practice",
        content:
          "A fund's LPA names two founding partners as key persons. When one departs mid-investment-period, the key man clause automatically suspends new investments. The LPAC must vote to reinstate or wind down. This protection exists precisely to prevent a fund from continuing under materially different leadership than LPs committed to.",
      },
      {
        type: "exercise",
        title: "Quick exercise",
        content:
          "List three LPA provisions that protect LPs from GP misconduct or underperformance. For each, describe the specific risk it addresses.",
      },
    ],
    quiz: [
      {
        questionId: "d11q1",
        type: "multiple-choice",
        prompt: "What does a key man clause do?",
        options: [
          "Sets minimum performance thresholds for carry to be paid",
          "Suspends the investment period if named key partners leave the GP",
          "Gives LPs the right to transfer interests without GP consent",
          "Limits the GP's ability to invest in related parties",
        ],
        correctAnswer:
          "Suspends the investment period if named key partners leave the GP",
      },
      {
        questionId: "d11q2",
        type: "multiple-choice",
        prompt: "What is a GP clawback provision?",
        options: [
          "The GP's right to call additional capital above the commitment",
          "An obligation for the GP to return excess carry if later deals underperform",
          "An LP right to reduce management fees mid-fund",
          "A requirement to hold a minimum GP commitment",
        ],
        correctAnswer:
          "An obligation for the GP to return excess carry if later deals underperform",
      },
      {
        questionId: "d11q3",
        type: "short-response",
        prompt:
          "Why is the LPAC (LP Advisory Committee) an important governance mechanism, and what types of decisions typically require its consent?",
      },
    ],
    sources: SOURCES.core,
  },

  // ─── Day 12 ──────────────────────────────────────────────────────────────
  {
    lessonId: "day-12",
    blocks: [
      {
        type: "intro",
        title: "Why this matters",
        content:
          "Manager selection is the single highest-impact decision in PE investing. A rigorous framework separates skill from luck and protects against repeat mistakes.",
      },
      {
        type: "teaching",
        title: "Manager evaluation framework",
        content:
          "Track record analysis: look at deal-level attribution (not just fund-level IRR), identify concentrated vs. broad-based returns, and separate realised from unrealised performance. Team assessment: who actually drove the returns? Has the team been stable since those deals were made? Strategy consistency: has the GP expanded into new geographies or strategies where their edge is unproven? Use reference calls with portfolio company management and former employees, not just GPs' chosen references.",
      },
      {
        type: "example",
        title: "The key-person problem",
        content:
          "A GP shows top-quartile IRR across three funds. The founding partner recently retired and 40% of the investment team has turned over in two years. Past performance was likely tied to the departed leader and their network. The LP must re-underwrite the current team independently — prior track record may not be attributable to who remains.",
      },
      {
        type: "exercise",
        title: "Quick exercise",
        content:
          "You have 30 minutes with a GP for a first meeting. Write three questions that would best reveal whether their track record reflects repeatable skill.",
      },
    ],
    quiz: [
      {
        questionId: "d12q1",
        type: "multiple-choice",
        prompt: "What is attribution analysis in PE due diligence?",
        options: [
          "Calculating the GP's share of fund carry",
          "Breaking down fund returns to identify which deals drove performance and whether wins were concentrated",
          "Comparing the fund's IRR to a public market index",
          "Assessing LP concentration in a fund",
        ],
        correctAnswer:
          "Breaking down fund returns to identify which deals drove performance and whether wins were concentrated",
      },
      {
        questionId: "d12q2",
        type: "multiple-choice",
        prompt:
          "When evaluating a GP re-up after significant team turnover, what is the most important question?",
        options: [
          "Whether the new team has lower compensation requirements",
          "Whether the track record is attributable to those who remain or those who departed",
          "Whether the fund size has increased to reflect the team's experience",
          "Whether the management fee was reduced to account for the transition",
        ],
        correctAnswer:
          "Whether the track record is attributable to those who remain or those who departed",
      },
      {
        questionId: "d12q3",
        type: "short-response",
        prompt:
          "How do you distinguish luck from skill when evaluating a PE manager's historical returns?",
      },
    ],
    sources: SOURCES.advanced,
  },

  // ─── Day 13 ──────────────────────────────────────────────────────────────
  {
    lessonId: "day-13",
    blocks: [
      {
        type: "intro",
        title: "Why this matters",
        content:
          "PE must earn the illiquidity premium over public markets. PME is the tool that forces that comparison on a like-for-like basis.",
      },
      {
        type: "teaching",
        title: "PME and benchmarking basics",
        content:
          "PME (Public Market Equivalent) replicates PE cash flows in a public index. The most common method (Kaplan-Schoar): invest each capital call into the index, and redeem each distribution from it. A PME > 1.0 means the PE fund outperformed the index on the same cash flow schedule. Challenges: index choice matters enormously (S&P 500 vs. Russell 2000 vs. MSCI World); horizon IRR can mislead in short windows; some GPs cherry-pick benchmark periods.",
      },
      {
        type: "example",
        title: "High IRR, PME below 1.0",
        content:
          "A PE fund reports 18% net IRR — impressive in isolation. But the same capital invested in the Russell 2000 on the same dates would have returned 20% annualised. PME = 0.92. The fund underperformed the public alternative after fees. IRR told one story; PME told the real one.",
      },
      {
        type: "exercise",
        title: "Quick exercise",
        content:
          "Explain in plain language why a PE fund with a high net IRR might still have a PME below 1.0. What does that tell you about value delivered to LPs?",
      },
    ],
    quiz: [
      {
        questionId: "d13q1",
        type: "multiple-choice",
        prompt: "What does a PME of 1.15 indicate?",
        options: [
          "The PE fund returned 15% IRR",
          "The PE fund outperformed the reference index by 15% on a like-for-like cash flow basis",
          "The fund's TVPI was 1.15x",
          "The fund's DPI exceeded RVPI by 15%",
        ],
        correctAnswer:
          "The PE fund outperformed the reference index by 15% on a like-for-like cash flow basis",
      },
      {
        questionId: "d13q2",
        type: "multiple-choice",
        prompt:
          "Why does benchmark selection matter significantly in PME analysis?",
        options: [
          "Different benchmarks use different accounting standards",
          "The choice of public index changes the PME result and can make the same fund look like an out- or underperformer",
          "Only GIPS-compliant benchmarks are legally permissible",
          "Benchmark selection affects the management fee calculation",
        ],
        correctAnswer:
          "The choice of public index changes the PME result and can make the same fund look like an out- or underperformer",
      },
      {
        questionId: "d13q3",
        type: "short-response",
        prompt:
          "A GP shows you their PME compared to the S&P 500. What additional benchmarks would you want to see, and why?",
      },
    ],
    sources: SOURCES.performance,
  },

  // ─── Day 14 ──────────────────────────────────────────────────────────────
  {
    lessonId: "day-14",
    blocks: [
      {
        type: "intro",
        title: "Why this matters",
        content:
          "Pacing errors compound over years. Too many commitments in one vintage leaves you over-allocated when markets fall; too few leaves you permanently underweight.",
      },
      {
        type: "teaching",
        title: "Pacing model mechanics",
        content:
          "A pacing model projects future capital calls and distributions to keep the PE allocation near a target. Because PE funds draw capital over 3–5 years and return it over 7–10, you must commit 2–3x your target NAV per cycle to sustain the allocation. Vintage diversification — committing to multiple funds across consecutive years — smooths J-curve effects and reduces concentration risk. Key inputs: target allocation percentage, current NAV, expected draw-down and distribution timing, and new fund sizes.",
        visualId: "j-curve",
      },
      {
        type: "example",
        title: "Pacing plan for a $1B endowment",
        content:
          "Target PE allocation: 20% of $1B = $200M target NAV. Current PE NAV: $150M. To close the gap and sustain allocation, commit $100–150M per year across 3–5 funds over three years. Model expected drawdowns (60–70% in years 1–3) and distributions (starting year 4–5) to avoid over-allocating in any single vintage.",
      },
      {
        type: "exercise",
        title: "Quick exercise",
        content:
          "A $500M foundation has a 15% PE target and zero current PE exposure. Sketch a three-year commitment plan specifying annual commitment amounts and the number of funds per year. State your assumptions.",
      },
    ],
    quiz: [
      {
        questionId: "d14q1",
        type: "multiple-choice",
        prompt: "What is the primary purpose of a PE pacing model?",
        options: [
          "To calculate the IRR of the existing portfolio",
          "To project future capital calls and distributions to maintain target allocation",
          "To compare fund performance across vintage years",
          "To determine the optimal leverage ratio for each fund",
        ],
        correctAnswer:
          "To project future capital calls and distributions to maintain target allocation",
      },
      {
        questionId: "d14q2",
        type: "multiple-choice",
        prompt:
          "Why must an LP typically commit 2–3x their target PE NAV per cycle?",
        options: [
          "PE funds charge fees on committed capital, requiring over-commitment to net out",
          "Funds draw capital slowly over years and return it even more slowly, so NAV at any point is well below total commitments",
          "Regulators require over-commitment buffers for alternative investments",
          "GPs reject commitments below a minimum threshold",
        ],
        correctAnswer:
          "Funds draw capital slowly over years and return it even more slowly, so NAV at any point is well below total commitments",
      },
      {
        questionId: "d14q3",
        type: "short-response",
        prompt:
          "What happens to a PE programme that stops making new commitments for two years? How would this affect the allocation over the following five years?",
      },
    ],
    sources: SOURCES.advanced,
  },

  // ─── Day 15 ──────────────────────────────────────────────────────────────
  {
    lessonId: "day-15",
    blocks: [
      {
        type: "intro",
        title: "Why this matters",
        content:
          "Secondaries have evolved from a distressed-seller's market into a strategic tool for both LPs managing liquidity and GPs extending hold periods on winning assets.",
      },
      {
        type: "teaching",
        title: "LP-led vs. GP-led secondaries",
        content:
          "LP-led secondaries: an LP sells their fund interests on the secondary market, typically at a discount to NAV, to access liquidity. Buyers gain exposure to a seasoned portfolio with visibility into underlying holdings. GP-led secondaries: the GP moves one or more portfolio companies into a new continuation vehicle. Existing LPs choose to cash out (take liquidity) or roll in at a negotiated price. GP-led transactions raise conflict-of-interest concerns since the GP is on both sides. NAV financing (borrowing against portfolio NAV) is a related but distinct liquidity tool.",
      },
      {
        type: "example",
        title: "A GP-led continuation vehicle",
        content:
          "A GP holds a high-performing software company in a fund approaching its 10-year limit. Rather than forcing a sale, the GP creates a new continuation vehicle. Existing LPs can cash out at 1.1x NAV or roll into the new vehicle. New secondary investors buy in at the same price. The GP retains the asset and continues to earn carry if the company grows further.",
      },
      {
        type: "exercise",
        title: "Quick exercise",
        content:
          "Describe two situations where an LP would rationally choose to sell on the secondary market despite a discount to NAV.",
      },
    ],
    quiz: [
      {
        questionId: "d15q1",
        type: "multiple-choice",
        prompt: "What is a GP-led secondary?",
        options: [
          "An LP selling fund interests on the secondary market",
          "A GP moving portfolio companies into a new continuation vehicle, giving LPs the option to cash out or roll in",
          "A GP buying back LP interests at a discount",
          "A secondary buyout of a portfolio company by another PE firm",
        ],
        correctAnswer:
          "A GP moving portfolio companies into a new continuation vehicle, giving LPs the option to cash out or roll in",
      },
      {
        questionId: "d15q2",
        type: "multiple-choice",
        prompt:
          "Why do GP-led secondaries raise conflict-of-interest concerns?",
        options: [
          "They allow LPs to exit without GP approval",
          "The GP effectively sets the price while being on both the buy and sell side of the transaction",
          "They bypass regulatory reporting requirements",
          "They require the GP to reduce their carried interest",
        ],
        correctAnswer:
          "The GP effectively sets the price while being on both the buy and sell side of the transaction",
      },
      {
        questionId: "d15q3",
        type: "short-response",
        prompt:
          "From an LP's perspective, what are the key factors to consider when deciding whether to cash out or roll into a GP-led continuation vehicle?",
      },
    ],
    sources: SOURCES.advanced,
  },

  // ─── Day 16 ──────────────────────────────────────────────────────────────
  {
    lessonId: "day-16",
    blocks: [
      {
        type: "intro",
        title: "Why this matters",
        content:
          "Co-investments offer fee savings but require independent underwriting. Getting the economics right demands understanding when you are getting a good deal — and when you are not.",
      },
      {
        type: "teaching",
        title: "Co-investment structure and adverse selection",
        content:
          "A co-investment allows an LP to invest directly alongside the fund in a specific deal, typically with no management fee and no carry (or reduced economics). GPs offer co-invest when a deal is too large for the fund alone or to reward favoured LPs. Adverse selection risk: are you getting access to the best deals, or to the ones the GP couldn't fully fill in the fund? Assess co-investment track records independently from the main fund — they often differ materially.",
      },
      {
        type: "example",
        title: "Co-invest adverse selection in practice",
        content:
          "A GP offers an LP a co-investment in a deal the fund is only 60% filling. The LP must independently evaluate: Why is there a 40% gap? Is the deal too large, or did other LPs pass? Did the GP offer this co-invest to its best or newest relationship? Checking the GP's historical co-invest IRR vs. main fund IRR often reveals the answer.",
      },
      {
        type: "exercise",
        title: "Quick exercise",
        content:
          "List two due diligence questions you would ask a GP specifically about their co-investment programme, beyond what you'd ask about the main fund.",
      },
    ],
    quiz: [
      {
        questionId: "d16q1",
        type: "multiple-choice",
        prompt:
          "What is the primary economic benefit of co-investments for LPs?",
        options: [
          "Access to exclusive deal flow not available to other investors",
          "Reduced or eliminated management fees and carried interest on the direct investment",
          "Higher leverage than the main fund",
          "Shorter investment horizon than the main fund",
        ],
        correctAnswer:
          "Reduced or eliminated management fees and carried interest on the direct investment",
      },
      {
        questionId: "d16q2",
        type: "multiple-choice",
        prompt: "Adverse selection in co-investments refers to the risk that:",
        options: [
          "Co-investments always have worse terms than the main fund",
          "GPs offer co-invest on deals other LPs have already declined or that are too large to fill",
          "Co-investments are subject to higher taxes than fund interests",
          "Co-investments cannot be sold on the secondary market",
        ],
        correctAnswer:
          "GPs offer co-invest on deals other LPs have already declined or that are too large to fill",
      },
      {
        questionId: "d16q3",
        type: "short-response",
        prompt:
          "How would you assess whether a GP's co-investment programme has historically been accretive or dilutive to your portfolio returns?",
      },
    ],
    sources: SOURCES.advanced,
  },

  // ─── Day 17 ──────────────────────────────────────────────────────────────
  {
    lessonId: "day-17",
    blocks: [
      {
        type: "intro",
        title: "Why this matters",
        content:
          "Sizing a PE allocation is not just about expected returns — it requires understanding illiquidity constraints, J-curve drag, and how PE fits your specific liability structure.",
      },
      {
        type: "teaching",
        title: "PE allocation frameworks",
        content:
          "The illiquidity premium argument: LPs accepting lock-up should earn excess returns above public markets. Empirical evidence is mixed — net-of-fee PE returns need to materially beat public benchmarks. Key constraints: (1) Liquidity needs — PE capital is locked up for 10 years; (2) J-curve drag — allocation underperforms reported NAV for years 1–4; (3) Pacing complexity — sustained allocation requires annual commitment discipline; (4) Governance resources — PE requires active monitoring and relationship management that smaller organisations may lack.",
      },
      {
        type: "example",
        title: "Two different institutional contexts",
        content:
          "A university endowment with a 30% PE allocation can sustain it because it has no near-term liabilities and a perpetual horizon. An insurance company with regulatory capital requirements and predictable claims might cap PE at 5% due to illiquidity and mark-to-model concerns. Same asset class, radically different allocation — driven by liability structure, not expected returns alone.",
      },
      {
        type: "exercise",
        title: "Quick exercise",
        content:
          "List three institutional characteristics that would lead you to recommend a lower PE allocation, and explain the reasoning for each.",
      },
    ],
    quiz: [
      {
        questionId: "d17q1",
        type: "multiple-choice",
        prompt: "The illiquidity premium argument for PE holds that:",
        options: [
          "PE is always less risky than public markets due to smoothed NAV",
          "Investors accepting illiquidity and lock-up should earn excess returns above comparable public investments",
          "PE returns are uncorrelated with public markets and therefore reduce portfolio risk",
          "PE outperforms public markets because GPs have access to non-public information",
        ],
        correctAnswer:
          "Investors accepting illiquidity and lock-up should earn excess returns above comparable public investments",
      },
      {
        questionId: "d17q2",
        type: "multiple-choice",
        prompt:
          "Which institutional factor most constrains the size of a PE allocation?",
        options: [
          "Tax treatment of carried interest",
          "Regulatory requirements and near-term liquidity needs",
          "The number of GPs willing to accept the LP",
          "Public disclosure requirements",
        ],
        correctAnswer: "Regulatory requirements and near-term liquidity needs",
      },
      {
        questionId: "d17q3",
        type: "short-response",
        prompt:
          "Why might an institutional investor maintain a PE allocation even if net-of-fee returns have only matched, not exceeded, public markets?",
      },
    ],
    sources: SOURCES.advanced,
  },

  // ─── Day 18 ──────────────────────────────────────────────────────────────
  {
    lessonId: "day-18",
    blocks: [
      {
        type: "intro",
        title: "Why this matters",
        content:
          "PE reporting can obscure true risk. Reading GP reports critically — and understanding what they do not show — is a core allocator skill.",
      },
      {
        type: "teaching",
        title: "NAV, valuation standards, and smoothing",
        content:
          "PE NAV is based on periodic appraisals (ASC 820 in the US), not daily market prices. This creates two problems: (1) Lagged marks — valuations reflect conditions from 2–4 quarters ago; (2) Artificial smoothing — reported volatility and correlation look lower than reality, which can mislead risk models. When reviewing GP quarterly reports, focus on valuation methodology, any changes in methodology, concentration of unrealised holdings, and the quality of commentary on individual portfolio companies.",
      },
      {
        type: "example",
        title: "Stable NAV through a market selloff",
        content:
          "During a sharp public-market correction, a PE fund's NAV barely moves for two quarters. This can look like diversification benefit — but it may simply reflect lagged appraisals that have not yet incorporated the macro environment. When the GP finally marks down, it often comes in a later quarterly report after public peers have already recovered.",
      },
      {
        type: "exercise",
        title: "Quick exercise",
        content:
          "You receive a quarterly PE report. Identify two specific items you would scrutinise to assess the quality and conservatism of the GP's valuations.",
      },
    ],
    quiz: [
      {
        questionId: "d18q1",
        type: "multiple-choice",
        prompt: "Why does PE NAV show lower volatility than public equity?",
        options: [
          "PE companies are genuinely less volatile than public companies",
          "PE NAV is based on lagged appraisals, not daily market prices",
          "PE funds hedge their equity exposure through derivatives",
          "PE fund returns are guaranteed by the GP",
        ],
        correctAnswer:
          "PE NAV is based on lagged appraisals, not daily market prices",
      },
      {
        questionId: "d18q2",
        type: "multiple-choice",
        prompt: "What does ASC 820 require for PE portfolio valuations?",
        options: [
          "Daily mark-to-market of all private holdings",
          "Fair value measurement using market participant assumptions",
          "Cost-basis accounting until an exit is realised",
          "Discounting to book value for illiquidity",
        ],
        correctAnswer:
          "Fair value measurement using market participant assumptions",
      },
      {
        questionId: "d18q3",
        type: "short-response",
        prompt:
          "How can the NAV smoothing effect mislead a portfolio risk model that includes PE alongside public equities?",
      },
    ],
    sources: SOURCES.performance,
  },

  // ─── Day 19 ──────────────────────────────────────────────────────────────
  {
    lessonId: "day-19",
    blocks: [
      {
        type: "intro",
        title: "Why this matters",
        content:
          "ESG has moved from optional reporting to embedded GP expectation. Knowing how to ask the right questions separates substantive ESG integration from greenwashing.",
      },
      {
        type: "teaching",
        title: "ESG in PE: integration vs. impact",
        content:
          "ESG integration: the GP uses environmental, social, and governance factors to identify risks and opportunities in the investment process and to prepare portfolio companies for exit to ESG-sensitive buyers. Impact investing: the GP targets specific measurable social or environmental outcomes alongside financial returns, with intentionality and additionality as requirements. Regulatory pressure (SFDR in Europe, SEC disclosure rules) and LP expectations are driving formalisation. The key LP due diligence question: is ESG embedded in the value-creation plan, or is it post-close checkbox compliance?",
      },
      {
        type: "example",
        title: "ESG as value creation vs. greenwashing",
        content:
          "GP A integrates ESG into 100-day plans: reducing carbon intensity in manufacturing portfolio companies to lower operating costs and expand the buyer universe at exit. GP B publishes an ESG policy PDF but makes no changes to portfolio company operations. Asking for a specific example of an ESG-driven operational improvement quickly distinguishes the two.",
      },
      {
        type: "exercise",
        title: "Quick exercise",
        content:
          "Draft two due diligence questions about ESG that would help you distinguish genuine integration from marketing language in a GP meeting.",
      },
    ],
    quiz: [
      {
        questionId: "d19q1",
        type: "multiple-choice",
        prompt:
          "What distinguishes impact investing from ESG integration in PE?",
        options: [
          "Impact investing avoids all companies with carbon emissions",
          "Impact investing targets specific measurable outcomes with intentionality and additionality, beyond risk mitigation",
          "ESG integration requires UN PRI signatory status; impact investing does not",
          "Impact investing uses higher leverage to amplify social returns",
        ],
        correctAnswer:
          "Impact investing targets specific measurable outcomes with intentionality and additionality, beyond risk mitigation",
      },
      {
        questionId: "d19q2",
        type: "multiple-choice",
        prompt:
          "How does ESG integration in PE primarily add value beyond compliance?",
        options: [
          "By eliminating all investments in regulated industries",
          "By reducing portfolio company risks, improving governance, and expanding the exit buyer universe",
          "By ensuring the GP is exempt from ESG-related litigation",
          "By generating a premium on management fees for ESG-labelled funds",
        ],
        correctAnswer:
          "By reducing portfolio company risks, improving governance, and expanding the exit buyer universe",
      },
      {
        questionId: "d19q3",
        type: "short-response",
        prompt:
          "How would you distinguish a GP with genuine ESG integration from one that is primarily engaged in greenwashing? What specific evidence would you seek?",
      },
    ],
    sources: [
      "UN PRI private equity guidance",
      "ILPA ESG data convergence initiative",
      "SFDR regulatory framework (EU)",
    ],
  },

  // ─── Day 20 ──────────────────────────────────────────────────────────────
  {
    lessonId: "day-20",
    blocks: [
      {
        type: "intro",
        title: "Why this matters",
        content:
          "PE fluency is not about memorising definitions — it is about using these concepts fluidly in real conversations to make better decisions and ask sharper questions.",
      },
      {
        type: "teaching",
        title: "Synthesis: the five metrics and the meeting checklist",
        content:
          "The five metrics to demand in any GP meeting: (1) Net IRR — after all fees; (2) TVPI and DPI — scale and cash returned; (3) PME — comparison to public alternatives; (4) Attribution — deal-level concentration and source of returns; (5) Team continuity — who is actually responsible for the track record. Meeting preparation checklist: review prior fund documents, quarterly reports, reference calls, and value bridge. During the meeting, probe consistency between narrative and data, exit track record, and forward strategy for the new fund.",
      },
      {
        type: "example",
        title: "Applying fluency in a GP meeting",
        content:
          "A GP opens with: '2.3x TVPI, 22% net IRR, top quartile.' A fluent LP responds: 'What is the DPI — how much cash has actually been returned? How does your PME compare to the Russell 2000? And are those returns broad-based or driven by one or two deals?' These three follow-ups move past headline marketing to the data that matters.",
      },
      {
        type: "exercise",
        title: "Capstone exercise",
        content:
          "You are preparing for a 45-minute first meeting with a mid-market buyout GP. Write five questions — spanning performance, team, strategy, and terms — that reflect the full curriculum. Justify why each question matters.",
      },
    ],
    quiz: [
      {
        questionId: "d20q1",
        type: "multiple-choice",
        prompt:
          "A GP reports 2.3x TVPI and 22% net IRR. Which follow-up question is most important?",
        options: [
          "What is the fund's management fee?",
          "What is the DPI — how much capital has actually been returned in cash?",
          "How many portfolio companies does the fund hold?",
          "What is the GP's office location?",
        ],
        correctAnswer:
          "What is the DPI — how much capital has actually been returned in cash?",
      },
      {
        questionId: "d20q2",
        type: "multiple-choice",
        prompt:
          "A fund shows 'top-quartile' performance. What is the single most important contextual factor needed to evaluate that claim?",
        options: [
          "The GP's headquarters city",
          "The fund's vintage year and the benchmark used for quartile ranking",
          "The number of LPs in the fund",
          "Whether the fund has a placement agent",
        ],
        correctAnswer:
          "The fund's vintage year and the benchmark used for quartile ranking",
      },
      {
        questionId: "d20q3",
        type: "short-response",
        prompt:
          "You have reviewed a GP's track record and are entering the meeting room. Synthesise the five key metrics you need and explain what each one tells you that the others do not.",
      },
    ],
    sources: SOURCES.advanced,
  },
];

export function getLessonContent(lessonId: string): LessonContent | undefined {
  return allLessonContent.find((lc) => lc.lessonId === lessonId);
}
