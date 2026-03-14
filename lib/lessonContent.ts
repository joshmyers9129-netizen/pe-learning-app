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

// Days 1–20: fully built lessons.
export const lessonContents: LessonContent[] = [
  // ── Day 1 ──────────────────────────────────────────────────────────────────
  {
    lessonId: "day-01",
    blocks: [
      // ── Cold open ──────────────────────────────────────────────────────────
      {
        type: "intro",
        title: "The meeting you are walking into",
        content:
          "You are twenty minutes into a first manager meeting. The GP says: 'We are fully committed in Fund V — running about 68% drawn at cost — and we expect to be back in market for Fund VI in roughly eighteen months once we work through the remaining deployment overhang.' The room nods. A slide appears showing Fund IV at 1.9x TVPI and 0.6x DPI. The GP adds: 'Fund IV is seasoned, two companies still to exit, and we think there is meaningful upside in both.' What did any of that mean? 'Fully committed' means the fundraise closed and LPs have signed for the full target. '68% drawn at cost' means the GP has called and deployed 68% of total committed capital into deals; 32% remains uncalled. '0.6x DPI' means LPs have received back 60 cents for every dollar they have put in — in cash, from actual exits. '1.9x TVPI' means the GP believes the total portfolio, realized plus unrealized marks, is worth 1.9x cost. The gap between 1.9x and 0.6x is 1.3x of unrealized, unvalidated value. If you could not decode that in real time, this lesson builds the model you need before you walk in the door.",
      },
      // ── Framing ────────────────────────────────────────────────────────────
      {
        type: "framing",
        title: "Why the fund model is the foundation of everything else",
        content:
          "Every concept in this curriculum — IRR, distribution waterfalls, PME benchmarks, carry mechanics, pacing models — presupposes that you understand the PE fund as a structural entity and know how capital moves through it. Without the fund model, you will pattern-match on numbers without understanding what they measure, and GPs who sense that gap will present performance narratives without the structural context that would allow those narratives to be interrogated. The fund model is also where public-markets intuition most reliably misleads. A CFA charterholder expects an NAV updated daily, capital redeemable on request, and returns expressed as an annualized rate against a benchmark. PE inverts all three: NAV is a GP estimate reviewed annually by auditors, capital is locked for a decade, and returns arrive as large irregular cash flows rather than a continuously priced account. This lesson recalibrates those assumptions deliberately. It is not a soft overview — it is a technical foundation. Work through it as such.",
      },
      // ── Teaching 1: closed-end structure ───────────────────────────────────
      {
        type: "teaching",
        title: "The closed-end structure: why illiquidity is design, not limitation",
        content:
          "A PE fund is a closed-end limited partnership with a fixed term — typically 10 years, with contractual options to extend one to two years with LP or LPAC consent — and a fixed pool of committed capital. Once the fund closes, no new investors may subscribe and no existing investors may redeem. The capital is contractually locked for the life of the fund. This structure is not a defect the industry tolerates; it is a precondition for the strategy. A buyout GP acquiring a manufacturing company with the thesis of building out a regional platform over five years, replacing senior management, and selling to a strategic buyer when EBITDA has doubled cannot execute that thesis if LPs can redeem capital on demand. Forced asset sales to meet redemptions would destroy the holding strategy entirely. The illiquidity of PE is a deliberate architectural choice made in service of the investment model — not a cost extracted from LPs without reason. Understanding this matters when LPs ask whether illiquidity premium arguments are credible. The right answer is that illiquidity is the structure, and the premium is what compensates LPs for accepting a structure that is a prerequisite for the strategy to exist at all.",
      },
      // ── Teaching 2: GP and LP roles ─────────────────────────────────────────
      {
        type: "teaching",
        title: "The two principals: what the GP and LP actually do",
        content:
          "The limited partnership has two classes of participant with structurally different roles. The general partner is the fund manager and active decision-maker: it sources investment opportunities, executes acquisitions, sits on portfolio company boards, oversees operational and financial improvement programs, and decides when and how to exit each position. The GP holds residual management rights — all decisions not explicitly reserved to LPs in the LPA belong to the GP. The GP also contributes capital alongside LPs, typically 1–3% of total fund size. This GP commitment is economically meaningful: at 1.5% of a $2.5B fund, the GP is investing $37.5M of its own capital, subordinate to LP capital in the distribution waterfall. Limited partners are passive investors by legal design. They commit capital, receive economic distributions, hold certain governance rights under the LPA — voting on LPAC matters, key-person clauses, fund extensions — but they have no role in individual investment decisions. An LP with strong views on a specific deal should be seeking a co-investment or a managed account structure, not attempting to influence a commingled fund. The LP's fundamental alignment mechanism is not control — it is incentive structure. The GP's largest economic payoff, carried interest, is contingent on LPs first clearing their preferred return. That alignment is imperfect in practice and will be examined carefully in Days 2 and 11.",
      },
      // ── Teaching 3: commitment as legal obligation ──────────────────────────
      {
        type: "teaching",
        title: "The LP commitment: a contingent liability, not a future investment",
        content:
          "An LP commitment is a legally binding contractual obligation to deliver capital on demand, up to the total committed amount, over the fund's investment period. The commitment is made at signing of the limited partnership agreement, before any deal is done — this is the 'blind pool' feature of PE. LPs commit to a manager and a strategy before knowing what companies the fund will buy. The LP does not transfer cash at fund closing; it makes a promise. That promise has real balance-sheet consequences. The correct characterization of an unfunded LP commitment is a contingent liability — not a future investment opportunity, not a soft allocation target. This distinction matters operationally. An endowment carrying $300M in unfunded PE commitments across eight active funds holds $300M in obligations callable within 10 business days at any time, with no control over the timing. If those calls arrive simultaneously during a market dislocation — as they did for some endowments in 2008 — the endowment must fund them from liquid reserves or face default. The 2008–2009 crisis produced documented LP defaults, including from institutions with PE allocations of 20–30% of their portfolios, caught between illiquid PE obligations and collapsing public equity values. This is not a theoretical risk. It is a recurring feature of LP liquidity management that flows directly from the legal nature of the commitment.",
      },
      // ── Teaching 4: capital calls ───────────────────────────────────────────
      {
        type: "teaching",
        title: "Capital calls: mechanics, notice periods, and default consequences",
        content:
          "The GP draws down LP commitments by issuing capital call notices — formal requests for a specific dollar amount from each LP, specifying the funding purpose and the wire deadline. Purposes include deal acquisitions, follow-on investments in existing portfolio companies, management fees, and fund formation expenses. Notice periods are typically 10 business days under standard LPA terms, though some LPAs allow as few as five. Each LP's share of every call is pro rata to its committed capital as a percentage of total fund commitments: an LP holding 4% of the fund receives 4% of every capital call. The GP has no obligation to give LPs advance notice of when calls will come or how large they will be — call timing is a function of deal activity, which is inherently unpredictable. Failure to fund a capital call on time is a default under the LPA. Default remedies are deliberately punitive: standard LPA provisions include forfeiture of the LP's interest at a discount (often 50–75 cents on the dollar, with the discount allocated to non-defaulting LPs or sold to a third party), loss of voting rights, and exclusion from future distributions until the default is cured with interest. In practice, institutional LP defaults are rare because the reputational cost in a relationship-driven market — permanent exclusion from future allocations by that GP and reputational damage across the GP community — exceeds the short-term liquidity relief of defaulting in all but the most extreme scenarios. The rarity of defaults should not obscure the severity of the obligation. Unfunded commitments are real liabilities.",
      },
      // ── Source note ────────────────────────────────────────────────────────
      {
        type: "source-note",
        title: "Capital call mechanics and LP default provisions",
        content:
          "Standard capital call notice requirements, pro-rata mechanics, and LP default remedies are detailed in ILPA Principles 3.0 (2019), Section 4, and ILPA's Model Limited Partnership Agreement provisions. The 10-business-day notice convention is market standard; actual LPA terms vary. LP defaults during the 2008–2009 crisis are documented in Preqin, 'LP Behaviour During the Financial Crisis' (2009), and in Lerner, Schoar, and Wongsunwai, 'Smart Institutions, Foolish Choices,' Journal of Finance, 2007.",
      },
      // ── Visual: fund lifecycle ──────────────────────────────────────────────
      {
        type: "visual",
        title: "The PE fund lifecycle — four overlapping phases",
        visualId: "fund-lifecycle-timeline",
        caption:
          "The four phases of a standard PE fund lifecycle, from fundraising close through final harvest distributions. Phases overlap — investment and value creation run concurrently for early portfolio companies.",
        whyItMatters:
          "The phase overlap is the structural explanation for a pattern you will see repeatedly in LP reporting: a fund in year four that is simultaneously making new acquisitions, actively managing its first portfolio companies, and beginning to show early exit activity. This is not unusual fund management — it is the natural consequence of the overlapping timeline. When a GP presents a fund in its fourth year with a TVPI above 1.0x but DPI near zero, that is not a flag. It is the expected state of a fund whose harvest phase has not yet begun. The timeline also explains why interim performance — any TVPI before year six or seven of a standard fund — has a weak empirical relationship to final realized returns.",
        sourceNote:
          "Original synthesis based on standard PE fund lifecycle structure as described in ILPA educational materials and CFA Institute private markets curriculum, 2024.",
      },
      // ── Teaching 5: how capital flows through the fund ──────────────────────
      {
        type: "teaching",
        title: "Capital flow: the four-stage arc from close to final distribution",
        content:
          "A PE fund's capital moves through four stages in sequence, though stages two through four overlap materially in practice. Stage one is fundraising: the GP markets the fund, conducts LP due diligence meetings, collects subscription documents, and holds a final close — typically 12 to 18 months after launch. Stage two is the investment period: the GP issues capital calls and deploys committed capital into acquisitions over three to five years. This is the period of negative LP cashflow — capital leaves LPs and enters the fund to be invested. Stage three is the value creation phase, which overlaps heavily with stage two. By year three, the GP is typically both making new investments and actively managing companies acquired in years one and two. Stage four is the harvest phase: portfolio companies are sold or taken public, proceeds are realized, and distributions flow to LPs. In a standard fund, meaningful distributions begin in years four to six — earlier for funds that exit opportunistically, later for funds with slower exit markets or longer hold theses. The standard 10-year fund life allows for roughly five years of investment activity and five years of managing toward exit, with extensions available if exit markets are unfavorable at year ten. A fund that extends its life is not necessarily underperforming — it may simply be unwilling to sell quality assets in a distressed exit environment.",
      },
      // ── Teaching 6: distributions ───────────────────────────────────────────
      {
        type: "teaching",
        title: "Distributions: how and when LPs receive proceeds",
        content:
          "When a portfolio company is sold, merger proceeds flow to the fund, and the fund distributes cash to LPs under the terms of the distribution waterfall in the LPA. The mechanics of the waterfall — who gets paid first, in what order, and how the GP earns carried interest — are covered in Day 2. For now, the key structural points are these. First, distributions are deal-event-driven, not time-driven. A fund that exits three companies in one quarter may return 40% of invested capital at once; a fund in a slow-exit environment may pay nothing for two consecutive years. LP cashflow from PE is lumpy by design. Second, distributions come in two economically distinct forms: return of capital (the LP receives back the dollars it contributed to that investment) and profit distributions (the LP receives its share of the gain above cost, net of carry). Third, the ratio of realized to unrealized performance — DPI to RVPI — is the most important indicator of how much of a fund's stated performance has been tested by the market. A fund with 1.8x TVPI and 0.2x DPI has returned almost nothing in cash and carries 1.6x of value that is a GP appraisal estimate, not a realized figure. A fund with 1.8x TVPI and 1.5x DPI has actually returned most of that value in cash. Same headline number, fundamentally different level of certainty.",
      },
      // ── Teaching 7: three states of capital ────────────────────────────────
      {
        type: "teaching",
        title: "Three states of LP capital: committed, invested, and realized",
        content:
          "LP capital in a PE fund exists in three states simultaneously, and confusing them is among the most common signs of a gap in PE fluency. Committed capital is the total contractual obligation — the number the LP signed for. Invested capital (also called called capital or paid-in capital) is the cumulative amount the GP has drawn down to date. Unrealized value — expressed as RVPI, residual value to paid-in capital — is the GP's estimate of what the current unrealized portfolio would be worth in an exit. Realized capital — expressed as DPI, distributions to paid-in capital — is cash that has actually been returned to LPs from completed exits. At any point in a fund's life, the relationship is: TVPI = DPI + RVPI, both measured relative to paid-in capital. And on the commitment side: total commitment = called capital to date plus remaining unfunded commitment. A GP who tells you their fund has 'returned capital' may mean distributions have begun — not that LPs have recovered everything they put in. Precision with these four terms is a prerequisite for reading any PE performance report correctly. You will use them in every lesson from Day 3 onward.",
      },
      // ── Visual 2: capital states ────────────────────────────────────────────
      {
        type: "visual",
        title: "LP capital states across a typical investment period",
        content:
          "Illustrative progression for a $100M LP commitment to a $2.5B fund (4% of fund). At fund close: committed $100M, called to date $0M, unfunded commitment $100M, DPI 0.0x, RVPI 0.0x. End of Year 2: called $38M, unfunded $62M, TVPI ~0.95x (early marks near cost). End of Year 4 (investment period close): called $88M, unfunded $12M reserved for follow-ons and fees, TVPI ~1.2x, DPI ~0.0x. End of Year 7: called $92M, unfunded $8M, TVPI ~1.6x, DPI ~0.5x (first exits complete). End of Year 10 (final distributions): called $95M total, TVPI 2.2x, DPI 2.2x (fully realized). Each dollar in the unfunded column is a legally binding, callable obligation — not an investment plan. The RVPI column shrinks to zero at fund end as every mark is tested by an actual transaction.",
        caption:
          "Illustrative capital state progression for a $100M LP commitment across a 10-year buyout fund lifecycle. All figures are approximate and representative of typical mid-market fund mechanics.",
        whyItMatters:
          "Most LPs new to the asset class focus on the called amount and treat the unfunded column as a planning assumption. It is not. It is a liability. More importantly, the RVPI column — which often represents 80–90% of reported TVPI in years two through five — is an appraisal, not a realized return. Understanding that TVPI is mostly unrealized until year seven or later is the single most important correction to make when reading PE performance reports from active funds.",
        sourceNote:
          "Original synthesis. Drawdown pace and TVPI build are representative of mid-market buyout fund mechanics per Cambridge Associates PE benchmark methodology and ILPA reporting standards.",
      },
      // ── Worked example ─────────────────────────────────────────────────────
      {
        type: "example",
        title: "Worked example: Cairn Partners Fund IV, a $2.4B mid-market buyout fund",
        content:
          "Cairn Partners closes Fund IV at $2.4B in January 2019. A university endowment commits $96M — exactly 4%. The fund charges 2% management fee on committed capital during the five-year investment period, stepping to 1.5% on invested capital thereafter. Carry is 20% above an 8% preferred return. Year 1 (2019): The GP calls $24M — $14.4M for two platform acquisitions, $9.6M for Year 1 management fees. Endowment unfunded commitment: $72M. Year 2–4 (2020–2022, investment period): Seven additional acquisitions are made. By end of 2022, the endowment has funded $76M of its $96M commitment. Remaining unfunded: $20M (reserved for follow-ons and fees). The portfolio holds nine companies. GP-reported NAV for the endowment's interest: $84M — roughly 11% above cost, reflecting early operational progress across the portfolio. DPI: 0.0x (no exits yet). TVPI: 1.11x ($84M NAV / $76M called). Year 6 (2024): The first two companies are sold — one at 2.6x gross MOIC, one at 1.8x. Endowment receives $31M in total distributions. DPI: 0.41x ($31M / $76M called). TVPI: 1.52x ($31M realized + $84M remaining unrealized / $76M). Year 9 (2027): Seven of nine companies exited. Total endowment distributions: $171M. Two companies remain, GP-marked at $18M. DPI: 2.25x. TVPI: 2.49x. Net IRR: 17.1%. Year 11 (2029, fund extended by one year): Final two exits. Total endowment distributions: $203M. Net IRR: 15.9%. TVPI: 2.67x. Note the IRR compression from Year 9 to Year 11: the same additional $32M gain, delivered 24 months later than modeled, costs approximately 120 basis points of annualized return. The extension year is not free even if the final MOIC improves.",
      },
      // ── Source note ────────────────────────────────────────────────────────
      {
        type: "source-note",
        title: "Worked example calibration",
        content:
          "Fund economics in this example are calibrated to historical mid-market buyout benchmarks. Net IRR range of 14–18% for top-half managers and TVPI range of 2.2–2.8x over a full fund life are consistent with Cambridge Associates Private Equity Index data for 2015–2019 vintage buyout funds (Cambridge Associates, 'Private Equity Index and Selected Benchmark Statistics,' 2023). Management fee and carry terms reflect ILPA fee survey medians for mid-market buyout funds.",
      },
      // ── Weak vs. strong ─────────────────────────────────────────────────────
      {
        type: "weak-answer",
        title: "Weak vs. strong answer: explaining a PE fund to a colleague",
        content:
          "The question: a colleague from the fixed income team asks you what a private equity fund actually is. Weak answer: 'It is basically a pool of money that a manager uses to buy private companies. You put money in, they invest it, and hopefully you make a good return over time.' This is not wrong, but it is useless. It treats PE as a mutual fund variant and omits every structural feature that distinguishes it from liquid alternatives. A colleague who leaves the conversation with this mental model will make bad intuitions about liquidity, NAV reliability, and return timing. Strong answer: 'A PE fund is a closed-end limited partnership where institutional investors make legally binding commitments — not cash transfers — that a specialist manager draws down over three to five years to buy and operate private companies. The capital is locked for ten years or more with no redemption right. Reported performance before year six or seven is mostly GP estimate, not realized cash. Cash returns come as irregular distributions when companies are sold. The manager earns a performance fee only after investors have cleared an 8% annual preferred return. The three things that are most different from public equities are: you cannot get out, the quoted value is an appraisal until there is an actual exit, and the returns arrive in large lumpy chunks over a decade rather than as a continuously priced account.' The strong answer identifies structure, the legal nature of the commitment, the timeline, what is and is not realized, and the incentive structure — and it positions all of this against public-markets intuition the questioner already holds.",
      },
      // ── Inference boundary ─────────────────────────────────────────────────
      {
        type: "inference-boundary",
        title: "What the Day 1 model does not tell you",
        content:
          "The structural framework built in this lesson — closed-end structure, committed vs. invested capital, capital calls, distributions, GP and LP roles, DPI vs. RVPI — is necessary but deliberately limited. It does not give you the tools to evaluate any specific fund on its merits. The fund model is the floor, not the ceiling of PE fluency. Specifically: it does not explain how PE returns are measured, when IRR misleads, or how to use MOIC alongside IRR correctly — that is Days 4 and 5. It does not explain how the GP's carried interest is calculated, when it is earned, or how the distribution waterfall sequences GP and LP payouts — that is Day 2 and Day 11. It does not address the J-curve dynamic or why interim TVPI has a poor empirical track record as a predictor of final returns — that is Day 3. It does not explain how GP-reported NAV is constructed, where it can be inflated, or what audit review actually catches — that is Day 18. A common error in LP meetings is treating familiarity with fund structure as investment judgment. Knowing what a capital call is and knowing whether a specific GP's track record reflects skill or vintage-year luck are entirely different competencies. This lesson provides the former. Days 4, 5, 12, and 13 build the latter.",
      },
      // ── Meeting application ─────────────────────────────────────────────────
      {
        type: "meeting-application",
        title: "Reading the GP's opening ten minutes: four real-time decodes",
        content:
          "In almost every first manager meeting, the GP opens with a fund overview that references committed capital, drawn capital, and portfolio performance. Four decodes you can now do in real time. Decode 1 — Draw-down status: when the GP says 'we are 72% deployed in Fund V,' that means the capital call process is roughly three-quarters complete and the investment portfolio is largely assembled. The remaining 28% will be called for follow-on investments, fees, and any deals sourced before the investment period closes. Ask: when does the investment period expire? Decode 2 — TVPI vs. DPI gap: when the GP presents 1.9x TVPI and 0.6x DPI, the gap (1.3x RVPI) is value that exists only as GP-estimated appraisal. The precise follow-up is: what percentage of TVPI is from companies already fully realized versus companies still held? A 1.9x TVPI built mostly from one large realized exit is a different signal than a 1.9x TVPI carried entirely by unrealized marks. Decode 3 — Early distribution timing: if the GP mentions Fund IV started distributing in Year 4, that is earlier than typical. Ask what drove it — opportunistic exits often precede full value-creation execution. A company sold in Year 4 may not have completed its operational improvement program. Decode 4 — Fund VI timing: if the GP says they expect to launch Fund VI in 18 months, they are beginning the successor fund pitch before the current portfolio is fully realized. Ask whether the Fund V team will be managing both funds simultaneously and how portfolio company attention will be divided during that overlap.",
      },
      // ── Allocator application ───────────────────────────────────────────────
      {
        type: "meeting-application",
        title: "Allocator application: sizing the obligation before you commit",
        content:
          "Before signing an LP commitment, three structural questions follow directly from the fund model built in this lesson. First: what is your total unfunded PE exposure relative to your liquid reserve capacity? A new $75M commitment added to an existing program with $350M in aggregate unfunded commitments means $425M in callable obligations, each requiring funding within 10 business days. A liquid portfolio sized at $200M is not sufficient to support this exposure during a simultaneous call event. Second: what is the call cadence of your existing commitments? Funds in early investment periods call capital most aggressively — a 2022 vintage fund may call 20–25% of committed capital in a single year at peak deployment pace. Understanding which vintages are in their peak call phase helps you model realistic near-term liquidity requirements, not just long-run averages. Third: does the vintage year create concentration risk? Committing heavily in a single calendar year means most of your entry multiples are anchored to the same market pricing environment. The fund model tells you what is contractually happening; the allocator's job is to layer on the portfolio-level implications of that structure across multiple simultaneous fund relationships.",
      },
      // ── Exercise ────────────────────────────────────────────────────────────
      {
        type: "exercise",
        title: "Exercise: unfunded commitment and capital state analysis",
        content:
          "Your foundation holds commitments to three PE funds currently in active investment periods. Fund A (vintage 2021, $100M commitment, mid-market buyout): 58% called to date. Fund B (vintage 2022, $60M commitment, growth equity): 32% called. Fund C (vintage 2023, $80M commitment, buyout): 12% called. The CIO asks for an analysis before the next investment committee meeting. (1) Calculate the aggregate unfunded commitment in dollar terms across all three funds. (2) Fund A's GP has just issued a capital call for 8% of the fund. How much does the foundation owe, and when? (3) Fund B reports a TVPI of 1.15x and DPI of 0.0x at the end of Year 2. Is this a performance concern? (4) The foundation's liquid fixed-income portfolio is $180M. Assess whether the current unfunded exposure is adequately supported.",
      },
    ],
    quiz: [
      // ── MC 1 ────────────────────────────────────────────────────────────────
      {
        questionId: "d1q1",
        type: "multiple-choice",
        prompt:
          "What is the primary structural difference between a PE closed-end fund and an open-end mutual fund?",
        options: [
          "PE funds invest only in private companies; mutual funds invest only in publicly listed securities",
          "PE funds have fixed terms and no investor redemption right; mutual funds offer periodic or daily liquidity",
          "PE funds charge carried interest; mutual funds charge only management fees",
          "PE funds are available only to pension funds; mutual funds are broadly available to retail investors",
        ],
        correctAnswer:
          "PE funds have fixed terms and no investor redemption right; mutual funds offer periodic or daily liquidity",
      },
      // ── MC 2 ────────────────────────────────────────────────────────────────
      {
        questionId: "d1q2",
        type: "multiple-choice",
        prompt:
          "An LP holds a $60M commitment in a $1.5B PE fund. The GP issues a capital call for $120M across the full fund. How much is the LP obligated to fund?",
        options: ["$4.8M", "$8.0M", "$60M", "$120M"],
        correctAnswer: "$4.8M",
      },
      // ── MC 3 ────────────────────────────────────────────────────────────────
      {
        questionId: "d1q3",
        type: "multiple-choice",
        prompt:
          "Which of the following most accurately defines an LP's unfunded PE commitment?",
        options: [
          "Capital the LP has already transferred to the fund that the GP has not yet deployed into deals",
          "A voluntary soft allocation the LP can reduce if market conditions deteriorate",
          "The portion of the LP's total commitment not yet called, representing a legally binding contingent obligation",
          "Capital held in escrow by a third-party custodian pending approval of individual investments",
        ],
        correctAnswer:
          "The portion of the LP's total commitment not yet called, representing a legally binding contingent obligation",
      },
      // ── MC 4 ────────────────────────────────────────────────────────────────
      {
        questionId: "d1q4",
        type: "multiple-choice",
        prompt:
          "A buyout fund in Year 6 of a 10-year term reports TVPI of 1.95x and DPI of 0.30x. What is the most accurate interpretation of this data?",
        options: [
          "The fund has returned nearly twice invested capital in cash, with residual upside remaining",
          "The fund is underperforming because DPI has not crossed 1.0x after six years",
          "Nearly all of the fund's reported performance is unrealized appraisal value; LPs have received limited cash from actual exits",
          "The fund has fully deployed capital twice over and is now in pure harvest mode",
        ],
        correctAnswer:
          "Nearly all of the fund's reported performance is unrealized appraisal value; LPs have received limited cash from actual exits",
      },
      // ── MC 5 ────────────────────────────────────────────────────────────────
      {
        questionId: "d1q5",
        type: "multiple-choice",
        prompt:
          "A GP announces that the investment period for Fund III ended six months ago. Which statement is most accurate regarding LP obligations on remaining uncalled capital?",
        options: [
          "All uncalled LP commitments are automatically cancelled at the end of the investment period",
          "The GP can no longer call capital for new platform investments but may still call remaining uncalled capital for follow-on investments, fees, and fund expenses per the LPA",
          "LPs must fund 100% of remaining uncalled capital within 30 days of investment period expiration",
          "The fund enters immediate liquidation mode and all holdings are sold within 12 months",
        ],
        correctAnswer:
          "The GP can no longer call capital for new platform investments but may still call remaining uncalled capital for follow-on investments, fees, and fund expenses per the LPA",
      },
      // ── MC 6 ────────────────────────────────────────────────────────────────
      {
        questionId: "d1q6",
        type: "multiple-choice",
        prompt:
          "Why does the GP contribute 1–3% of fund capital alongside LP commitments, rather than investing zero of its own capital?",
        options: [
          "SEC registration requirements mandate GP co-investment in registered fund vehicles",
          "GP capital covers management fees during the investment period so LPs pay nothing upfront",
          "The GP commitment aligns economic incentives — the GP shares downside risk and earns carry only after LPs recover capital plus the preferred return",
          "GP capital provides the liquidity buffer needed to fund capital calls on short notice",
        ],
        correctAnswer:
          "The GP commitment aligns economic incentives — the GP shares downside risk and earns carry only after LPs recover capital plus the preferred return",
      },
      // ── MC 7 ────────────────────────────────────────────────────────────────
      {
        questionId: "d1q7",
        type: "multiple-choice",
        prompt:
          "A PE fund manager says 'we have fully committed Fund V.' In the context of PE fund mechanics, what does this mean?",
        options: [
          "The fund has deployed all called capital into portfolio company investments",
          "The fund has raised all target capital from LPs and the fundraise is closed",
          "The fund has returned all committed capital to LPs through distributions",
          "The GP has committed to a five-year holding period for all current portfolio companies",
        ],
        correctAnswer:
          "The fund has raised all target capital from LPs and the fundraise is closed",
      },
      // ── SR 1 ────────────────────────────────────────────────────────────────
      {
        questionId: "d1q8",
        type: "short-response",
        prompt:
          "A GP presenting Fund V tells you that Fund IV is showing 2.2x TVPI with the investment period now closed. Name three specific follow-up questions you would ask to properly evaluate this claim, and explain briefly why each matters.",
        modelAnswer:
          "First, ask what percentage of the 2.2x TVPI is realized DPI versus unrealized RVPI. If DPI is 0.4x and RVPI is 1.8x, virtually all of the reported performance is still GP appraisal — unvalidated by actual exits. The 2.2x headline is a materially weaker signal in that case than it would be at 1.5x DPI. Second, ask how the two or three largest unrealized positions are valued relative to current public-market peer multiples. If the GP is marking portfolio companies at entry-year EV/EBITDA multiples that have since compressed in public markets, the RVPI component may be stale or inflated — and the investment period closing does not change that. Third, ask how Fund IV compares to vintage-year peers on a PME basis. A 2.2x TVPI from a 2016–2018 vintage fund competed against a public equity market that nearly doubled in the same period. Without a PME comparison against a relevant public benchmark, the raw TVPI multiple provides no information about whether the GP added value net of the market tailwind.",
      },
      // ── SR 2 ────────────────────────────────────────────────────────────────
      {
        questionId: "d1q9",
        type: "short-response",
        prompt:
          "Explain why an LP's unfunded PE commitment should be characterized as a contingent liability rather than a future investment opportunity, and describe one concrete scenario where mischaracterizing it creates a real problem.",
        modelAnswer:
          "An LP commitment to a PE fund is a legally binding contractual obligation, not a soft allocation target. Once executed, the LP must fund capital calls within the notice period in the LPA — typically 10 business days — and failure to do so is a default with severe contractual remedies including potential forfeiture of prior distributions and forced sale of the LP interest at a discount. The LP has no right to reduce or rescind the obligation unilaterally. This makes it a contingent liability that must be incorporated into liquidity planning, not a future investment that can be deferred if conditions change. A concrete failure scenario: an endowment carries $400M in aggregate unfunded PE commitments modeled as 'future PE allocation activity' and maintains only $150M in liquid reserves. In a year when public equity markets fall 25% and three vintage funds simultaneously enter peak deployment phases — each calling 15–20% of committed capital — the endowment faces $60–80M in calls within the same quarter. With liquid reserves depleted by portfolio rebalancing needs, the endowment must either sell equities at distressed prices, draw on credit facilities at elevated cost, or default on one or more commitments. Proper characterization as a contingent liability would have required a liquidity buffer sufficient to cover plausible simultaneous call scenarios under stress.",
      },
      // ── SR 3 ────────────────────────────────────────────────────────────────
      {
        questionId: "d1q10",
        type: "short-response",
        prompt:
          "A family office considering its first PE commitment is told by an advisor that investing in a PE fund is 'similar to buying into a mutual fund that holds private companies.' Identify three specific structural differences that make this characterization misleading, and explain what each means for how the family office should prepare.",
        modelAnswer:
          "First, capital is not transferred upfront. Unlike a mutual fund where a single purchase puts capital to work immediately, a PE commitment obliges the family office to fund capital calls in unpredictable tranches over three to five years on 10-business-day notice. The family office must maintain accessible liquidity throughout the investment period — not for one transaction, but for an ongoing series of calls whose timing it does not control. Second, there is no redemption. A mutual fund investor can sell at NAV on any business day. A PE LP cannot exit except through the secondary market, typically at a discount to GP-reported NAV and with significant transaction cost and friction. If the family office needs the capital back at any point in the 10-year fund life, its options are materially worse than a forced sale of liquid securities. Third, the reported 'value' between exits is a GP estimate, not a market price. A mutual fund NAV is computed daily using market prices of underlying holdings. PE interim NAV reflects the GP's appraisal — based on comparable company multiples, recent transactions, and DCF — reviewed by auditors only annually. A family office that monitors the 'value' of its PE investment in quarterly reports is reading an estimate, not a price. The actual realized value will only be known when each portfolio company is sold, which may be years away.",
      },
      // ── SR 4 ────────────────────────────────────────────────────────────────
      {
        questionId: "d1q11",
        type: "short-response",
        prompt:
          "In the exercise above, calculate the aggregate unfunded commitment across the three funds and assess whether the $180M liquid fixed-income portfolio adequately supports that exposure. Show your reasoning.",
        modelAnswer:
          "Aggregate unfunded commitments: Fund A — $100M committed, 58% called = $58M called, $42M unfunded. Fund B — $60M committed, 32% called = $19.2M called, $40.8M unfunded. Fund C — $80M committed, 12% called = $9.6M called, $70.4M unfunded. Total unfunded: $42M + $40.8M + $70.4M = $153.2M. At first glance, $180M in liquid assets appears to cover $153.2M in unfunded commitments. But this framing understates the risk for two reasons. First, a liquidity buffer for PE unfunded commitments should not be sized at 100% coverage — that would mean holding the buffer as near-zero-return cash or near-cash assets, which is wasteful. But sizing it at 1:1 also provides no cushion for simultaneous calls arriving during a period when the liquid portfolio is itself under stress — falling bond prices reduce the liquidation value of the fixed-income portfolio at the exact moment it may need to be accessed. Second, Fund C is in the earliest stage of its investment period and is likely to be the most call-active fund over the next 18 months, potentially calling 20–30% of its commitment in a single year. The foundation should model a stress scenario in which all three funds call 15% of committed capital simultaneously — a total call of approximately $36M — and confirm the liquid portfolio can absorb that without forced selling at distressed prices. A $180M fixed-income portfolio is marginally adequate under normal conditions but would benefit from a credit facility backstop for stress scenarios.",
      },
    ],
    sources: [
      "ILPA, 'ILPA Principles 3.0,' 2019 — Section 4: Transparency; Model LPA capital call and default provisions",
      "CFA Institute, 'CFA Program Curriculum, Level III — Private Markets Investments,' 2024",
      "CAIA Association, 'CAIA Level I: An Introduction to Core Topics in Alternative Investments,' 3rd ed.",
      "Cambridge Associates, 'Private Equity Index and Selected Benchmark Statistics,' Q4 2023",
      "Preqin, 'LP Behaviour During the Financial Crisis,' Special Report, 2009",
      "Lerner, J., Schoar, A., and Wongsunwai, W., 'Smart Institutions, Foolish Choices,' Journal of Finance, 2007",
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
