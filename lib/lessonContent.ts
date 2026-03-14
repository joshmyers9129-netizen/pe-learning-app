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
      // ── Meeting cold open ─────────────────────────────────────────────────
      {
        type: "intro",
        title: "Meeting cold open",
        content:
          "The GP's head of investor relations slides a fund summary across the table: 'Fund IV is $3.2 billion, currently 68% deployed in year three, with a $1.1 billion NAV and a 35% follow-on reserve against remaining commitments.' In one sentence: four distinct concepts — deployment pace relative to the investment period, interim NAV versus paid-in capital, follow-on reserve adequacy, and committed versus deployed capital. If you don't have the fund model internalized, you cannot interrogate any of them in real time. This lesson builds that model.",
      },
      // ── Framing ───────────────────────────────────────────────────────────
      {
        type: "framing",
        title: "Why the fund model is the foundation",
        content:
          "Every PE metric — IRR, TVPI, DPI, PME — is anchored in the fund structure. Without the structural model, you cannot identify when IRR is being distorted — whether by a subscription line (a revolving credit facility secured against uncalled LP commitments, used to bridge acquisitions before calling LP capital; this delays the LP's cash outflow date and mechanically inflates reported IRR without improving LP economics) or by early exit concentration — why NAV is not the same thing as value, or why a year-3 performance number is nearly useless for cross-fund comparison. A CFA charterholder approaching PE with a public-equity mental model — continuous liquidity, daily NAV, mark-to-market pricing — will have systematically wrong intuitions across every dimension of PE analysis. The fund model is not introductory material you learn once and shelve. It is the analytical skeleton on which all subsequent PE reasoning hangs.",
      },
      // ── Teaching blocks ───────────────────────────────────────────────────
      {
        type: "teaching",
        title: "The closed-end structure: design, not constraint",
        content:
          "A PE fund is a closed-end vehicle — the capital pool is fixed at close, with no new subscriptions, no redemptions, and no daily NAV. The fund has a defined term (typically 10 years, with one or two one-year extension rights subject to LP approval). LPs cannot exit by redeeming their interest; secondary market sales to a willing buyer are the only exit path. This design is deliberate. It enables three things the PE return model requires: the illiquidity premium — LPs surrender liquidity and expect compensation in return; multi-year operational control — a GP with a stable capital base can execute 3–5 year operational improvements without the threat of capital withdrawal; and incentive alignment — carry is earned on fund-level total returns across the fund's full life, not on quarterly NAV marks. The analogy to a listed closed-end fund (CEF) is imperfect: a CEF trades at a market price that may diverge sharply from NAV, while a PE fund has neither. The governing legal document — the limited partnership agreement (LPA) — defines the structure, terms, and GP authority.",
      },
      {
        type: "teaching",
        title: "Capital commitment vs. capital calls: the operational mechanic",
        content:
          "When an LP signs the LPA and commits $50 million, they are making a legally binding obligation to fund capital calls up to $50 million over the fund's life — not writing a check. The GP calls capital — issues a formal capital call notice — when funds are needed: to close an investment, pay management fees, or cover fund expenses. Notices typically require LP funding within 10 business days, though specific terms vary by LPA. This distinction is critical at every level of analysis. A fund with $2 billion in commitments and $800 million called at year 2 is an $800 million fund operationally — the remaining $1.2 billion is a contingent obligation on LP balance sheets. Deployment pace — the rate at which the GP calls and deploys capital — affects the fee base, shapes the J-curve, and drives the IRR calculation. An LP managing a $200 million PE allocation across six funds may have $120–150 million in uncalled commitments outstanding simultaneously, all callable with 10 days' notice. This is not a theoretical liquidity risk; it is a recurring operational reality for any institutional LP with a meaningful PE program.",
      },
      {
        type: "teaching",
        title: "Unfunded commitments: the hidden balance sheet item",
        content:
          "Unfunded commitments — the gap between what an LP has committed and what has been called — sit as a contingent liability until drawn. This creates three structural risks that LPs frequently underestimate. First, timing correlation: GPs often accelerate capital calls during favorable deal environments, which historically coincide with periods when LP liquid portfolios face competing demands. Second, over-commitment mechanics: institutional LPs routinely commit 1.2–1.5x their target PE allocation on the empirical basis that GPs historically call 85–95% of commitments over a fund's life. This works until multiple GPs in a portfolio simultaneously reach high deployment in a single vintage year, concentrating liquidity demand. Third, default risk: failure to fund a capital call within the LPA-defined notice period triggers severe contractual penalties — typically suspension of voting rights, forced sale of LP interest at a significant discount (often 50–75 cents on the dollar), or forfeiture of the uncalled balance. ILPA Principles 3.0 recommends 15+ business days' notice as best practice, but this is advisory, not a legal requirement.",
      },
      // ── Visual 1 ─────────────────────────────────────────────────────────
      {
        type: "visual",
        title: "PE Fund Lifecycle — The Four Phases",
        visualId: "fund-lifecycle-timeline",
        caption:
          "The four phases overlap in practice. Value creation for early acquisitions begins before the investment period closes; harvesting often begins before all value-creation work is complete.",
        whyItMatters:
          "The investment period close date is a structural boundary that constrains GP discretion on new platform investments — and defines when LP unfunded commitment exposure shrinks from full commitment to follow-on reserve only.",
        sourceNote:
          "Phase definitions and typical timing: CAIA Association Level II curriculum, private equity fund structure chapters.",
      },
      // ── Teaching blocks continued ─────────────────────────────────────────
      {
        type: "teaching",
        title: "Fund lifecycle phases: operational mechanics and overlaps",
        content:
          "The investment period (typically years 1–5, sometimes 4–6) defines the GP's authority to make new platform investments. Once it closes, called capital can only be used for follow-on investments in existing portfolio companies and for fund expenses — a significant constraint on GP discretion. The harvest phase has no clean start date: GPs exit when conditions allow, which may compress into years 7–9 (typical) or extend to year 10 and beyond (common when credit markets tighten or exit multiples compress). This temporal ambiguity has material implications for performance measurement. A fund that completes most exits in year 7 versus year 9 of a 10-year life will show meaningfully different IRRs even with identical terminal multiples — because IRR is highly sensitive to cash flow timing. Tracking investment period close against current fund age is a basic allocator data point that most investors underutilize.",
      },
      {
        type: "teaching",
        title: "Capital flow anatomy: commitment to distribution",
        content:
          "Tracing a dollar of committed capital through the fund lifecycle: (1) LP commits $1.00 — the dollar sits in the LP's liquid portfolio, subject to call. (2) GP issues a capital call; LP funds approximately $0.90 net of any management fee offsets that year. If the fund uses a subscription line credit facility — a short-term revolving facility secured by uncalled LP commitments — the GP may bridge the acquisition with the credit line and call LP capital weeks later. This delays LP cash outflow and mechanically inflates reported IRR without improving the LP's actual economics. (3) GP closes an acquisition — the called equity plus debt financing (typically 4–6x EBITDA for a buyout) funds the enterprise value. (4) Portfolio company operates under GP oversight; GP marks it quarterly for NAV purposes — LP sees TVPI build, but it is unrealized. (5) GP exits via trade sale, sponsor-to-sponsor transaction, or IPO; gross proceeds flow to the fund. (6) A distribution waterfall governs how gross proceeds are sequenced: LP capital is returned first, then LPs receive their preferred return (typically 8% per annum compounded), and only after these thresholds does the GP earn carried interest on remaining profits. This sequencing matters because it defines when GP economics begin — American and European waterfall structures differ on this question. Full mechanics are in Day 11. (7) LP receives a net cash distribution. DPI at any point reflects only what has been wired; RVPI reflects GP-determined interim value for the remaining portfolio. A fund with TVPI 1.8x and DPI 0.3x has mostly unrealized, unconfirmed returns — a distinction that is not cosmetic.",
      },
      // ── Worked example ────────────────────────────────────────────────────
      {
        type: "example",
        title: "Worked example: tracing a $2 billion buyout fund",
        content:
          "Fund IV: $2 billion committed, 2%/20% structure, 8% preferred return, 5-year investment period, 10-year term. Years 1–2: GP calls $600 million (30% of commitments) for 4 platform acquisitions at $150 million average equity per deal. Management fees: $40 million/year on committed capital. NAV marked near cost. Net IRR: −4% (fee drag before any realized gains; structurally expected). Years 3–4: Additional $800 million called for 4 more platforms and follow-ons. Total called: $1.4 billion. No exits. Three companies marked up on EBITDA growth. TVPI: 1.15x, DPI: 0.0x, Net IRR: ~3% (J-curve still dominant). Years 5–7: First exits begin. Trade sale of Company A — acquired for $150 million equity, sold for $330 million equity value, 2.2x gross MOIC. Partial IPO of Company B. DPI builds to 0.40x. TVPI: 1.45x, Net IRR: ~12%. Years 8–10: Harvest accelerates. Five of eight remaining companies exit. Final two held in continuing NAV. Net TVPI: 1.85x, DPI: 1.55x, RVPI: 0.30x, Net IRR: 16.5%. The year-2 IRR of −4% and the year-10 IRR of 16.5% describe the same fund — one of the most important structural insights in all of PE analysis. A manager presenting their year-3 metrics at a first meeting is showing you the J-curve trough, not their track record. Deal mechanics behind Company A's 2.2x gross MOIC: entry at $50M trailing EBITDA, 8x EV/EBITDA = $400M enterprise value. Financing: $150M LP equity contribution, $250M acquisition debt (5x EBITDA). Four-year hold — EBITDA grown to $65M through margin improvement and a bolt-on acquisition; exit multiple held at 8x = $520M EV. Debt reduced to $190M through operating cash flow. Exit equity: $520M − $190M = $330M. Gross MOIC: $330M ÷ $150M = 2.2x. Without leverage, the same $400M → $520M EV appreciation (30% total gain) returns only $150M × 1.30 = $195M — a 1.3x MOIC rather than 2.2x. Financial leverage amplified a modest 30% EV gain into a 120% equity return. This is why entry EV/EBITDA multiple and acquisition leverage quantum are the two variables most closely interrogated in any buyout discussion.",
      },
      // ── Visual 2 ─────────────────────────────────────────────────────────
      {
        type: "visual",
        title: "TVPI, DPI, and RVPI: How the Multiples Relate",
        visualId: "multiples-relationship",
        caption:
          "TVPI = DPI + RVPI. In early and middle fund years, most of TVPI consists of unrealized RVPI. As exits accumulate, DPI rises and RVPI falls toward zero. A fund reporting TVPI 1.45x with DPI 0.40x has confirmed only 0.40x in cash.",
        whyItMatters:
          "Comparing two funds on TVPI alone merges confirmed cash returns with GP-marked estimates into a single number. The DPI/RVPI split is the fastest single indicator of how much a fund's headline multiple is backed by actual distributions versus interim marks that have not yet faced exit pricing.",
        sourceNote:
          "TVPI, DPI, and RVPI definitions: ILPA Performance Reporting Standards; IPEV Valuation Guidelines, current edition.",
      },
      // ── Visual 3 ─────────────────────────────────────────────────────────
      {
        type: "visual",
        title: "The J-Curve: Early Negative IRR Is Structural",
        visualId: "j-curve",
        caption:
          "The J-curve is a direct consequence of fee drag before exits occur — not a signal of poor investment quality. The inflection point typically arrives around year 4–5; meaningful performance signal begins after year 6–7.",
        whyItMatters:
          "A GP presenting their current fund's IRR before the inflection point is showing you a metric that is mathematically certain to improve as exits occur. The relevant question is not the current IRR but the pace of deployment relative to the investment period and the quality of the unrealized portfolio.",
        sourceNote:
          "J-curve mechanics and empirical timing: CAIA Level II; Cambridge Associates Private Equity Benchmark Commentary.",
      },
      // ── Teaching blocks continued ─────────────────────────────────────────
      {
        type: "teaching",
        title: "The blind pool: what the LP is actually buying",
        content:
          "A PE fund is a blind pool — the LP commits capital before the portfolio is constructed. At the time of commitment, the GP may have one or two warehoused deals, but the majority of the portfolio is unidentified. The LP is buying GP judgment, sourcing capability, and operational capacity — not a portfolio. This structural fact has several decision-relevant implications. First, past performance is the primary evidence available in manager selection, which creates the question of what predictive content it carries — a contested empirical question covered in Day 12. Second, the LPA defines the investment mandate: permitted sectors, geographies, deal size ranges, concentration limits, and leverage parameters. An LP who has not reviewed the LPA (or at minimum the PPM summary) does not know what the GP is authorized to do with their capital. Third, fund sequence matters: a GP managing their final fund before a senior departure has different incentives than one building toward Fund V. GP team continuity and succession planning are frequently underweighted in LP diligence.",
      },
      {
        type: "teaching",
        title: "Meeting vocabulary: the precise language of the fund model",
        content:
          "GPs use fund-model vocabulary precisely in meetings. A CFA-fluent LP who does not speak this language will be dependent on GP framing. Key terms: 'Committed capital' — total LP obligations, including uncalled. 'Paid-in capital' (also 'called capital') — actual cash drawn from LPs to date. 'Invested capital' — capital deployed into portfolio companies (paid-in minus management fees and expenses). 'NAV' — GP-determined fair value of the remaining portfolio per FASB ASC 820 and IPEV guidelines. 'TVPI' — (distributions + NAV) / paid-in; the total value multiple. 'DPI' — distributions / paid-in; the realized multiple, the only confirmed performance. 'RVPI' — NAV / paid-in; the unrealized component of TVPI. 'Gross IRR' — fund-level return before management fees and carry. 'Net IRR' — LP-level return after all fees and carry; the only number that matters for LP comparison. 'Follow-on reserve' — portion of committed capital reserved for subsequent investments in existing portfolio companies. In a meeting, 'Fund IV is 68% deployed in year three' means the GP has called approximately 68% of total commitments three years into a 5-year investment period — somewhat ahead of average pace — leaving roughly 32% (less the follow-on reserve) available for new platforms.",
      },
      // ── Source note ───────────────────────────────────────────────────────
      {
        type: "source-note",
        title: "Sources for this lesson",
        content:
          "Fund structure mechanics and LP governance: ILPA Principles 3.0 (ilpa.org/principles). Fund lifecycle and mechanics: CAIA Association Level II, private equity fund structure chapters. Capital call conventions and defaulting LP provisions: ILPA Principles 3.0, Section 3 (LP default provisions and recommended notice periods); specific penalty ranges reflect representative LPA terms as surveyed in ILPA educational materials — actual terms vary by fund. LP over-commitment practice and historical draw-down rates: Preqin Investor Outlook: Alternative Assets (LP survey, annual editions); the 85–95% historical call rate reflects Preqin and ILPA survey data and is not a contractual guarantee. Subscription line credit facilities and IRR impact: ILPA Subscription Line of Credit and Alignment of Interest Guidance (2017). PE NAV and fair value methodology: FASB ASC 820 (Fair Value Measurement); IPEV Valuation Guidelines, current edition (ipev.org). Benchmark timing thresholds: Cambridge Associates Private Equity Benchmark Commentary, interim vs. final performance methodology. Interim valuation predictive validity: Harris, R., Jenkinson, T., and Kaplan, S. (2014), 'Private Equity Performance: What Do We Know?' Journal of Finance 69(5), 1851–1882.",
      },
      // ── Weak vs. strong answer ────────────────────────────────────────────
      {
        type: "weak-answer",
        title: "Weak vs. strong: responding to a deployment pace update",
        content:
          "The GP says: 'Fund IV is 68% deployed in year three, and we have a strong pipeline for the remaining investable capital.' Weak LP response: 'That's impressive pace — what are you seeing in terms of entry multiples right now?' Why it's weak: the LP has accepted the GP's framing, pivoted to a generic market question, and completely missed the most important structural implication of 68% deployment in year three of a five-year investment period. Strong LP response: 'With 68% called and two years remaining in the investment period, your remaining investable capacity is roughly $640 million — but how much of that is reserved for follow-ons in your existing portfolio companies? Are any companies likely to require incremental capital beyond your original reserve estimates?' Why it's strong: it deconstructs the remaining investable capital into new-platform capacity versus follow-on reserve, identifies the relevant risk (follow-on reserve adequacy as the portfolio matures), and signals that the LP understands the structural difference between deployment pace and available new-platform capacity. This is the distinction between an LP who has the fund model internalized and one who is following the GP's narrative.",
      },
      // ── Inference boundary ────────────────────────────────────────────────
      {
        type: "inference-boundary",
        title: "Inference boundary: what year-4 metrics can and cannot tell you",
        content:
          "At year four of a typical 10-year buyout fund, reported metrics include DPI, TVPI, and net IRR. What can be reliably concluded: deployment pace (compare called capital to the investment period to assess whether the GP is behind, on pace, or ahead for new platforms); confirmed realized value (DPI is cash actually wired to LPs, not subject to valuation interpretation); whether any early exits have occurred. What cannot be reliably concluded: ultimate fund performance. Year-4 IRR is mechanically distorted by the J-curve and by the timing of any early exits — a single early exit in year 3 can double the reported interim IRR regardless of portfolio quality. The RVPI component of TVPI is GP-determined fair value per ASC 820 methodologies (comparable transactions, DCF, last-round pricing) and while audited for process, it is not market-confirmed. Cambridge Associates' benchmark methodology limits interim performance comparisons to funds where at least 60–70% of economic life has elapsed, on the basis that earlier metrics have insufficient predictive validity. Harris, Jenkinson, and Kaplan (2014) corroborate this pattern: fund quartile rankings based on early interim metrics shift substantially by final realization, meaning a year-4 top-quartile label carries far less signal than a year-8 one. The professionally correct posture in year 4: treat DPI as confirmed value, deployment pace as a structural check, and RVPI and interim IRR as indicative only.",
      },
      // ── Exercise ──────────────────────────────────────────────────────────
      {
        type: "exercise",
        title: "Applied exercise: reading a year-4 fund update",
        content:
          "A GP presents Fund III at a first meeting. Fund size: $1.8 billion. Vintage: 2019. Fund age: 4 years. Reported metrics: net IRR 7.2%, TVPI 1.28x, DPI 0.18x, RVPI 1.10x. The GP describes the fund as 'tracking well against benchmark.' Work through the following before proceeding to the quiz: (a) What does the DPI/TVPI split tell you about the source and reliability of the apparent returns? (b) A 7.2% net IRR at year 4 of a 2019-vintage buyout fund — is this underperformance or structurally expected? (c) The GP notes the top three portfolio companies represent 62% of current NAV. What specific risk does this concentration create for RVPI reliability? (d) What single additional data point would most improve your ability to evaluate Fund III quality at this stage?",
      },
      // ── Meeting application ───────────────────────────────────────────────
      {
        type: "meeting-application",
        title: "In the manager meeting: four high-signal questions",
        content:
          "Armed with the fund model, these questions become natural entry points for any first GP meeting. (1) 'What is your current DPI, and what is your expected timeline to reach 1.0x DPI on Fund III?' — Separates GP confidence from confirmed value; forces a conversation about exit timing and visibility. (2) 'How much of your follow-on reserve has been utilized so far, and do you have any concerns about reserve adequacy for the remaining portfolio companies?' — Tests capital discipline within the fund and reveals whether the GP manages the portfolio as a capital allocation problem. (3) 'Walk me through your expected capital call schedule for Fund IV in years 1 through 3 — what pace should we model for liquidity planning?' — Establishes LP liquidity planning inputs and signals you understand capital call mechanics. (4) 'On Fund III, what is the RVPI distribution across remaining portfolio companies — how concentrated is the unrealized NAV?' — Probes concentration risk in the unrealized return and forces a company-level conversation that most LPs never initiate.",
      },
      // ── Allocator application ─────────────────────────────────────────────
      {
        type: "meeting-application",
        title: "Allocator application: three structural challenges from the fund model",
        content:
          "The fund model creates three structural portfolio management challenges for any LP allocating across multiple PE managers. First, pacing risk: an LP committing $150 million per year across four to six funds simultaneously may have $400–600 million in uncalled commitments outstanding at any time. A pacing model — projecting expected capital calls by fund and year against available liquid reserves — is not optional; it is a basic operational tool for a functioning PE program. Over-commitment works until multiple GPs simultaneously accelerate calls in a strong vintage year, creating a call crisis against a single LP's liquidity position. Second, vintage year concentration: the fund model's 3–5 year investment periods mean that two sequential fund commitments may acquire companies at materially different macro conditions. A PE portfolio concentrated in two or three vintage years carries macro-entry risk that is invisible on a portfolio NAV report but often materializes in the harvest phase. Third, the denominator effect: when public markets sell off sharply, PE NAVs are slow to mark down because GP interim valuations lag market conditions. This mechanically inflates the apparent portfolio weight of PE even as the economic value of those companies has likely declined. Understanding this as a structural artifact of the fund model — not a signal of PE outperformance — is essential for avoiding forced rebalancing decisions at the worst time.",
      },
    ],
    quiz: [
      {
        questionId: "d1q1",
        type: "multiple-choice",
        prompt:
          "Which statement most precisely describes how LP committed capital works in a PE fund?",
        options: [
          "Committed capital is transferred to the fund at final close and held in a segregated escrow account until the GP deploys it into investments",
          "Committed capital is a binding LP obligation to fund capital calls issued by the GP, up to the committed amount, over the fund's investment period",
          "Committed capital establishes the GP's maximum debt financing capacity across portfolio company acquisitions",
          "Committed capital is recorded as paid-in capital on the fund's financial statements from the date of the LP's subscription agreement",
        ],
        correctAnswer:
          "Committed capital is a binding LP obligation to fund capital calls issued by the GP, up to the committed amount, over the fund's investment period",
      },
      {
        questionId: "d1q2",
        type: "multiple-choice",
        prompt:
          "An LP commits $100 million to a PE fund at final close. Two years later, the GP has called $35 million. Which statement is correct?",
        options: [
          "The LP has fully satisfied its commitment; no further calls can be made",
          "The LP owes $35 million — only the amount already called constitutes ongoing obligation",
          "The LP has $65 million in uncalled commitment remaining, constituting a binding legal obligation",
          "The remaining obligation is determined by fund NAV at the time of each future call",
        ],
        correctAnswer:
          "The LP has $65 million in uncalled commitment remaining, constituting a binding legal obligation",
      },
      {
        questionId: "d1q3",
        type: "multiple-choice",
        prompt:
          "A buyout fund reports TVPI 1.55x and DPI 0.20x at year 5. Which interpretation is most accurate?",
        options: [
          "The fund has outperformed — 1.55x exceeds the historical buyout median TVPI",
          "Most of the apparent return is unrealized, GP-marked NAV; only 20 cents per dollar has been confirmed via actual distribution",
          "The fund has returned most LP capital; a DPI of 0.20x represents the majority of net proceeds",
          "The fund is deep in the harvest phase, with the majority of exits already completed",
        ],
        correctAnswer:
          "Most of the apparent return is unrealized, GP-marked NAV; only 20 cents per dollar has been confirmed via actual distribution",
      },
      {
        questionId: "d1q4",
        type: "multiple-choice",
        prompt: "The J-curve in PE fund performance primarily reflects:",
        options: [
          "A deliberate return-smoothing policy applied by GP accountants during the investment period",
          "Sequential losses on early investments later recovered through portfolio follow-on investments",
          "The drag of management fees and early-period valuation marks before exits generate meaningful distributions",
          "The mathematical effect of reinvesting portfolio company earnings during the holding period",
        ],
        correctAnswer:
          "The drag of management fees and early-period valuation marks before exits generate meaningful distributions",
      },
      {
        questionId: "d1q5",
        type: "multiple-choice",
        prompt:
          "An LP receives a capital call notice requiring funding in 10 business days during a period of significant public equity market stress. Which risk is most specific to the PE fund model?",
        options: [
          "The GP may permanently reduce the fund size if the LP does not respond promptly",
          "The LP may need to liquidate depressed public equity holdings to meet the call, creating forced selling at a poor time",
          "The fund's IRR will be permanently impaired proportionally to the LP's response delay",
          "The GP will substitute another institutional LP within 5 business days if the original LP does not respond",
        ],
        correctAnswer:
          "The LP may need to liquidate depressed public equity holdings to meet the call, creating forced selling at a poor time",
      },
      {
        questionId: "d1q6",
        type: "multiple-choice",
        prompt:
          "After a PE fund's investment period closes, which activity can the GP still conduct?",
        options: [
          "Source and close new platform acquisitions if an exceptional opportunity arises",
          "Call capital for management fees and for follow-on investments in existing portfolio companies",
          "Transfer uncalled commitment obligations to a successor fund without LP consent",
          "Extend the investment period by up to 12 months using GP-only written consent",
        ],
        correctAnswer:
          "Call capital for management fees and for follow-on investments in existing portfolio companies",
      },
      {
        questionId: "d1q7",
        type: "multiple-choice",
        prompt:
          "A GP reports a gross IRR of 22% and a net IRR of 15.5% on Fund III. The 6.5 percentage-point gap primarily reflects:",
        options: [
          "Currency hedging costs and FX translation losses on cross-border portfolio companies",
          "The return difference between leveraged buyout investments and organic growth investments within the fund",
          "Management fees, carried interest, and fund-level expenses reducing LP-level returns",
          "The difference between IRR calculated on committed capital versus paid-in capital",
        ],
        correctAnswer:
          "Management fees, carried interest, and fund-level expenses reducing LP-level returns",
      },
      {
        questionId: "d1q8",
        type: "short-response",
        prompt:
          "A pension fund CIO asks you to explain why a PE fund's committed capital differs from its invested capital, and why this distinction matters for the pension's liquidity planning. Write two to three sentences as you would say them in that conversation.",
        modelAnswer:
          "Committed capital is the total legal obligation the pension has agreed to fund over the life of the fund; invested capital is only what has actually been called and deployed to date. The uncalled balance — typically 60–80% of commitment in the first two years — remains a contingent liability that can be drawn with as little as 10 business days' notice. This means the pension must hold liquid reserves against uncalled commitments rather than fully deploying that capital elsewhere, which requires a formal pacing model to manage call timing against portfolio liquidity needs.",
      },
      {
        questionId: "d1q9",
        type: "short-response",
        prompt:
          "Why is it professionally hazardous to compare net IRRs from two PE funds with different vintage years without additional context? What does a more rigorous comparison require?",
        modelAnswer:
          "IRR is highly sensitive to cash flow timing and to the macro environment at entry. A fund deploying in 2012–2015 and exiting 2016–2019 benefited from multiple expansion and low financing costs that improved IRR independent of manager skill; a fund deploying in 2007–2010 faced peak entry multiples and the credit crisis. Cross-vintage IRR comparison conflates manager decisions with macro environment. A rigorous comparison requires PME (public market equivalent) methodology — replicating each fund's exact capital call and distribution timing against a public index to isolate the return attributable to the manager over the market alternative. Kaplan-Schoar PME, mPME (Cambridge Associates), and Direct Alpha are the three most common PME methods. Vintage year diversification is the LP-level portfolio implication: no single vintage year should dominate a PE program.",
      },
      {
        questionId: "d1q10",
        type: "short-response",
        prompt:
          "Describe two things you can reliably conclude and two things you cannot reliably conclude from a buyout fund's reported metrics at year four of a 10-year fund life.",
        modelAnswer:
          "Reliably concludable: (1) Deployment pace — comparing called capital to the investment period gives a clear signal of whether the GP is behind, on pace, or ahead for new platform investments, which affects follow-on reserve adequacy and new-platform capacity. (2) Confirmed realized value — DPI is cash actually wired to LPs; it is not subject to valuation methodology or GP discretion. Not reliably concludable: (1) Ultimate fund performance — year-4 IRR and TVPI are heavily distorted by J-curve mechanics and GP interim marks; Harris, Jenkinson, and Kaplan (2014) find that interim PE metrics have limited predictive validity before 60–70% of fund economic life has elapsed. (2) Unrealized portfolio quality — RVPI reflects GP-applied ASC 820 fair value methodologies that can diverge materially from eventual exit prices; concentration in a few large companies amplifies this uncertainty.",
      },
      {
        questionId: "d1q11",
        type: "short-response",
        prompt:
          "A first-time LP says: 'We're not concerned about capital calls — we're a large institution and we always have cash available.' What specific structural risk are they underestimating, and what would you tell them?",
        modelAnswer:
          "The risk is not simple cash availability but the intersection of three factors: (1) timing correlation — GPs tend to accelerate calls during strong deal environments, which historically overlap with periods when LP liquid portfolios face competing demands; (2) simultaneous calls — an LP running an over-committed portfolio may face multiple GPs calling simultaneously in an active vintage year, concentrating liquidity demand in a short window; (3) severe default penalties — failing to fund a call within the LPA-defined notice period triggers contractual penalties including loss of voting rights, forced sale of LP interest at 50–75 cents on the dollar, and forfeiture of uncalled balance. A functioning PE program requires a formal pacing model, a dedicated unfunded commitment reserve (typically 25–35% of uncalled commitments in liquid instruments), and stress testing of simultaneous call scenarios. 'Having cash available' is not the same as being structurally prepared for PE's specific call mechanics.",
      },
    ],
    sources: [
      "ILPA Principles 3.0 — governance, fee transparency, and LP rights (ilpa.org/principles)",
      "CAIA Association Level II: private equity fund structure and mechanics chapters",
      "Cambridge Associates Private Equity Benchmark Commentary — performance calibration and PME methodology",
      "Harris, R., Jenkinson, T., and Kaplan, S. (2014). 'Private Equity Performance: What Do We Know?' Journal of Finance 69(5), 1851–1882",
      "FASB ASC 820 Fair Value Measurement — PE NAV and interim valuation standards",
      "IPEV Valuation Guidelines, current edition (ipev.org) — private equity fair value methodology",
      "CFA Institute: Private Markets and Alternative Investments curriculum",
    ],
  },

  // ── Day 2 ──────────────────────────────────────────────────────────────────
  {
    lessonId: "day-02",
    blocks: [
      // ── Meeting cold open ─────────────────────────────────────────────────
      {
        type: "intro",
        title: "Meeting cold open",
        content:
          "The GP's head of IR walks through Fund IV economics: 'Management fee is 2% on committed capital through the investment period, then steps to 1.5% on invested capital. Carry is 20% above an 8% preferred return. We run a 100% GP catch-up. Our own commitment is 3% of fund, and we've agreed to 100% fee offsets for any monitoring or transaction fees.' Five distinct economic terms in three sentences. If you don't have the incentive stack mapped — how each term interacts with the others — you cannot evaluate alignment, identify LP-unfriendly structures, or compare terms across managers. This lesson teaches the mechanics behind each term and shows how they add up.",
      },
      // ── Framing ───────────────────────────────────────────────────────────
      {
        type: "framing",
        title: "Why '2-and-20' is not a single thing",
        content:
          "'2-and-20 with an 8% hurdle' describes a range of actual economics so wide that two funds using this shorthand may transfer materially different amounts from LPs to GPs depending on: whether the fee basis steps down from committed to invested capital (and when), whether the hurdle is simple or compounded, whether the GP catch-up is 100% or 80%, whether fee offsets return monitoring and transaction fees in full, whether clawback provisions are backed by meaningful escrow, and whether the GP commitment is personal capital or carry-loan-financed. A CFA charterholder who accepts '2-and-20' as a complete term sheet has missed the most consequential variation in PE fee structures. This lesson teaches the working mechanics of each component.",
      },
      // ── Teaching blocks ───────────────────────────────────────────────────
      {
        type: "teaching",
        title: "Management fees: basis, step-down, and the dollar impact",
        content:
          "Management fees are the GP's operating budget — covering staff, office, legal, travel, and diligence costs. At 2% of committed capital, a $2B fund generates $40M per year whether or not a dollar is deployed. This is intentional: the GP's team is fully engaged sourcing and evaluating deals before capital is put to work. Fee basis matters more than headline rate. Consider a $2B fund with two structures: Structure A charges 2% of committed capital for the full 10-year term. Structure B charges 2% on committed capital through the 5-year investment period, then 1.5% on invested capital ($1.7B deployed) thereafter. Cumulative fees: Structure A = $40M × 10 = $400M. Structure B = ($40M × 5) + ($25.5M × 5) = $200M + $127.5M = $327.5M. The difference — $72.5M — goes entirely to the GP in Structure A and is not available for LP returns. On a $2B fund, this fee difference alone reduces LP net MOIC by approximately 3.6 cents per dollar of commitment. ILPA Principles 3.0 recommends that fee terms be disclosed with explicit basis, step-down triggers, and the formula for calculating the post-investment-period base.",
      },
      {
        type: "teaching",
        title: "The preferred return: mechanics, compounding, and why 8%",
        content:
          "The preferred return (hurdle rate) is the annualized return LPs must receive on paid-in capital before the GP earns any carried interest. The standard is 8% per annum, compounded annually on unreturned capital — a figure calibrated historically to long-run public equity returns, establishing that the LP should achieve a public-equity-equivalent outcome before GP participation begins. Compounding matters at longer hold periods. A $500M fund with 8% compounded hurdle over a 6-year average hold accumulates a preferred return obligation of $500M × (1.08⁶ − 1) = $294M — meaningfully larger than a simple 8% × 6 × $500M = $240M simple-interest hurdle. LPAs that specify 'simple' hurdles (rare but present in older or smaller-fund documentation) systematically understate the LP's protection at multi-year holds. The preferred return is not guaranteed — if the fund underperforms the hurdle after fees, the GP earns nothing in carry, and the LP still receives the inferior net return. It is a threshold for carry participation, not a contractual promise of performance.",
      },
      {
        type: "teaching",
        title: "GP catch-up: full vs. partial, and the arithmetic",
        content:
          "After the preferred return tranche is satisfied, the GP catch-up determines how rapidly the GP reaches its carried interest entitlement on total profits. Under a 100% (full) catch-up, the GP receives 100% of subsequent distributions until the GP has earned exactly 20% of all profits distributed to date — LP cash flow pauses entirely during this tranche. The algebra: if the LP has received $P in preferred return, the GP catch-up amount equals P × (carry_rate / (1 − carry_rate)) = P × (0.20 / 0.80) = P × 0.25. On a $294M preferred return, the catch-up is $294M × 0.25 = $73.5M entirely to the GP. Under a partial (80/20) catch-up, the GP receives 80% and the LP receives 20% during this phase, extending it in duration but providing LP cash flow throughout. Economic endpoint is identical: both structures ultimately deliver 20% of total profits to the GP. The difference is timing and LP cash flow experience during the catch-up window. Institutional LPs with strong negotiating leverage often push for partial catch-ups specifically because they preserve LP distributions during a period when the portfolio may be at peak risk (before harvest is complete).",
      },
      // ── Visual 1 ─────────────────────────────────────────────────────────
      {
        type: "visual",
        title: "Distribution Waterfall — The Sequence of LP and GP Payments",
        visualId: "fee-waterfall",
        caption:
          "The waterfall sequences distributions in fixed order: LP capital first, then preferred return, then GP catch-up, then the 80/20 carried-interest split. The GP earns zero carry until steps 1 and 2 are fully satisfied.",
        whyItMatters:
          "Understanding the waterfall tells you when GP carry economics begin — and therefore what the GP's incentive actually is at each stage of the fund. A GP who has not cleared the preferred return has no carry upside yet, which affects their exit timing pressure.",
        sourceNote:
          "Waterfall mechanics and LP protection provisions: ILPA Principles 3.0, Section 4 (economic terms). European vs. American waterfall structures: CAIA Level II, private equity fund terms chapters.",
      },
      {
        type: "teaching",
        title: "Carried interest: effective rate and total GP economics",
        content:
          "The 20% headline carry understates true GP economics when management fees are layered on top. On a $1B fund returning $1.85B net (after fees), total LP profit = $850M. GP carry = 20% × $850M = $170M. Management fees over 10 years (2% → 1.5% step-down) ≈ $150M. Total GP gross economics = $170M + $150M = $320M against $1B of LP capital — an effective 32% of LP capital transferred to the GP in aggregate. This framing matters for LP return attribution: the $1.85B net available to LPs already reflects the $150M fee drag; the carry is an additional 20% on remaining profits. Gross-to-net drag on a strong-performing fund is routinely 6–8 percentage points of IRR annually. A fund with 22% gross IRR and 15% net IRR is not unusual; the gap is structurally explained by management fees (1.5–2 percentage points) plus carried interest (4–6 percentage points depending on timing and profit level). This gap is why net IRR — and net MOIC — are the only economically meaningful comparisons for LPs.",
      },
      {
        type: "teaching",
        title: "Fee offsets: monitoring fees, transaction fees, directors' fees",
        content:
          "GPs historically earned additional revenue directly from portfolio companies: monitoring fees (annual retainers, typically $1–3M per company per year), transaction fees (deal closing fees, typically 0.5–1% of enterprise value at entry and exit), and directors' fees (board compensation). Without a fee offset provision, these payments represent additional GP compensation above the management fee — borne economically by portfolio companies and therefore funded by LP capital. ILPA Principles 3.0 recommends 100% fee offsets as best practice: all monitoring and transaction fees credited against management fees, reducing the net management fee collected from LPs. A partial offset (e.g., 80%) allows the GP to retain 20% of these fees as incremental revenue. The due diligence implication: in large buyout funds, transaction fees on a $1B+ deal can exceed $10–15M. With a 100% offset, that amount reduces the LP's management fee burden. Without an offset, it is pure GP revenue on top of management fees. Always ask: 'What is the exact offset rate, and can you show me the fee offset schedule for Fund III?' A fund that does not report this cleanly is concealing meaningful compensation.",
      },
      // ── Worked example ────────────────────────────────────────────────────
      {
        type: "example",
        title: "Worked example: full waterfall on a $1B fund",
        content:
          "Fund IV: $1B committed, 2%/20% structure, 8% compound preferred return, 100% GP catch-up, 100% fee offset. Simplified management fees: $150M over fund life (Years 1–5: 2% on $1B = $20M/yr × 5 = $100M; Years 6–10: 1.5% on $900M invested = $13.5M/yr × 5 = $67.5M, rounded to $150M total). LP paid-in: $1B. Gross proceeds at exit: $2.0B. Net available for distribution: $2.0B − $150M = $1.85B. Waterfall distribution of $1.85B: Step 1 (Return of LP capital): $1.0B → LPs. Remaining: $850M. Step 2 (Preferred return, 6-year average hold, compounded): $1B × (1.08⁶ − 1) = $587M → LPs. Remaining: $850M − $587M = $263M. Step 3 (GP catch-up, 100%): GP catch-up target = $587M × (20/80) = $146.75M → GP. Remaining: $263M − $146.75M = $116.25M. Step 4 (Carried interest split): $116.25M × 80% = $93M → LPs; $116.25M × 20% = $23.25M → GP. Verification: LP total = $1,000M + $587M + $93M = $1,680M. GP total carry = $146.75M + $23.25M = $170M = exactly 20% × $850M total profit ✓. LP net MOIC = $1,680M / $1,000M = 1.68x net after fees. GP economics: $170M carry + $150M management fees = $320M total. Partial catch-up comparison (80/20): same economic endpoint ($170M carry), but LP receives 20% of distributions during the catch-up phase instead of zero. On $263M available in steps 3 and 4, LP receives $263M × 20% in catch-up + some in split versus $0 in catch-up + $93M in split. LP intermediate cash flows are larger under partial catch-up, though final amounts converge. The choice matters when fund harvest concentrates in years 7–9 — under full catch-up, LP may receive no cash for 1–2 additional years while GP clears its catch-up.",
      },
      {
        type: "teaching",
        title: "GP commitment: skin-in-the-game versus carry-loan financing",
        content:
          "GP fund commitments — the GP's own capital invested alongside LPs — serve as an alignment signal. The industry convention is 1–3%, with institutional LPs increasingly expecting 2–3% for established managers: on a $2B fund, 1% = $20M, 3% = $60M. The alignment argument: a GP with meaningful personal capital at risk approaches investment decisions with a different loss-aversion calculus than one whose only downside is unrealized carry. Practical caveat: GP commitments are frequently financed through management fee distributions, portfolio company loans, or dedicated carry-loan programs that extend credit against future carry distributions. A GP who has borrowed 90% of their $40M commitment against anticipated carry has invested approximately $4M of their own capital — the alignment signal is $4M, not $40M. In a due diligence meeting: 'How is the GP commitment funded — personal liquidity, a loan against expected carry, or deferred management fees?' A GP who answers clearly signals confidence in their track record. One who deflects reveals that the commitment is partially or fully leveraged and the alignment signal is correspondingly weaker.",
      },
      {
        type: "teaching",
        title: "Governance provisions: LPAC, key-person, clawback enforceability",
        content:
          "Fee terms determine economic sharing; governance provisions determine whether LPs can enforce alignment when it breaks down. (a) LPAC: the limited partnership advisory committee represents a subset of large LPs and reviews conflicts of interest, approves unusual valuation approaches, and consents to major fund changes (term extensions, strategy modifications). LPAC has no authority over investment decisions — its role is fiduciary oversight of process and conflicts. Being a named LPAC member requires active engagement and legal resources; many LPs commit to funds without pursuing LPAC seats, limiting their oversight capability. (b) Key-person provisions: define the named individuals — typically 2–4 senior partners — whose continued active engagement triggers a key-person event if they depart, reducing their time, or lose GP decision-making authority. A key-person event suspends the investment period pending an LP vote to continue, restructure, or wind down. 'Principal involvement' defined loosely ('materially involved') is weaker than 'dedicated majority of professional time.' Read this clause carefully before signing. (c) Clawback: the GP's obligation to return carry that exceeded its ultimate entitlement is legally straightforward but operationally difficult. Clawback applies at wind-down and requires GPs to return carry distributed 7–10 years earlier — which may have been spent. Real enforceability requires escrow of 25–30% of carried interest distributions held until fund wind-down; without it, clawback is a claim on potentially illiquid former partners with limited practical recoverability.",
      },
      // ── Source note ───────────────────────────────────────────────────────
      {
        type: "source-note",
        title: "Sources for this lesson",
        content:
          "Fee structure and economic terms: ILPA Principles 3.0, Section 4 (economic terms, fee offsets, clawback), ilpa.org/principles. GP catch-up mechanics and waterfall sequencing: CAIA Association Level II, private equity fund terms chapters. Management fee step-down and fee offset practices: ILPA Fee Reporting Template and Fee Transparency Initiative (2016–2022 editions). Preferred return conventions and market data: Preqin Global Private Equity Report (annual); fund term surveys reporting median hurdle rates, carry rates, and GP commitment levels. Clawback enforceability and escrow practices: Institutional Investor survey data on LP-GP term negotiations; American Bar Association Private Equity and Venture Capital Committee resources. GP commitment financing: Pitchbook/NVCA Venture Monitor and Cambridge Associates manager survey data on GP co-investment structures. CFA Institute: Private Markets and Alternative Investments curriculum, carried interest calculation methodology.",
      },
      // ── Weak vs. strong answer ────────────────────────────────────────────
      {
        type: "weak-answer",
        title: "Weak vs. strong: responding to a fee presentation",
        content:
          "The GP says: 'Our economics are industry-standard — 2% management fee, 20% carry above an 8% preferred return, consistent with our previous three funds.' Weak LP response: 'That's consistent with what we see across the market. Can you walk us through your current portfolio composition?' Why it's weak: the LP has accepted '2-and-20' as a complete description, missed the five variables that determine actual economics, and pivoted to a topic that doesn't address alignment at all. Strong LP response: 'Thank you. On the management fee, does the 2% step down post-investment period — and to what basis? On carry, is the catch-up full or partial, and is the preferred return compounded? And on fee offsets, what percentage of monitoring and transaction fees are credited back against the management fee?' Why it's strong: it demonstrates that the LP knows '2-and-20' is not a complete specification, probes the three variables with the largest dollar impact (fee step-down, catch-up structure, fee offsets), and signals to the GP that standard boilerplate will receive detailed scrutiny. This is the difference between an LP who knows PE economics and one who is following a checklist.",
      },
      // ── Inference boundary ────────────────────────────────────────────────
      {
        type: "inference-boundary",
        title: "Inference boundary: what fee terms can and cannot tell you",
        content:
          "What fee terms reliably indicate: (1) The minimum LP return required before carry is triggered — the preferred return threshold is contractual and precise. (2) The economic cost of the management fee — basis and step-down terms can be modeled to project total dollar cost over the fund life. (3) Whether incentives are aligned on loss-avoidance — a GP with meaningful unfinanced fund commitment has real capital at risk on the downside, not just unrealized carry. What fee terms cannot reliably indicate: (1) Whether the GP will actually generate returns above the hurdle — terms indicate alignment but not skill. A perfectly structured fee agreement with a mediocre manager transfers less wealth from LP to GP only because there are fewer profits to share. (2) Whether the GP will exercise judgment conservatively during the catch-up window — a GP who has cleared the preferred return threshold and is collecting 100% during catch-up technically has strong incentive to delay final distributions, as each additional dollar of net proceeds earns them 100 cents. This is a real tension in full catch-up structures. (3) Whether clawback is economically meaningful — the legal provision exists in most LPAs; actual recoverability at wind-down depends on escrow mechanics and GP partner financial position, neither of which is visible from the term sheet alone.",
      },
      // ── Exercise ──────────────────────────────────────────────────────────
      {
        type: "exercise",
        title: "Applied exercise: comparing two fee structures",
        content:
          "Fund A: $1.5B committed, 2% on committed capital for 10 years, 20% carry above 8% compound preferred return, 100% catch-up, 80% fee offset. Fund B: $1.5B committed, 2% on committed capital during 5-year investment period then 1.5% on invested capital ($1.3B deployed), 20% carry above 8% compound preferred return, 80% catch-up, 100% fee offset. Both funds have identical investment strategies and gross return assumptions. Work through the following: (a) Project total management fees for each fund over 10 years; assume $1.3B deployed by end of year 5. (b) In Fund A, the GP earns $25M in transaction fees on a major deal in year 3 with an 80% offset. How much of this reaches LPs versus the GP? In Fund B, the same transaction generates the same fees with 100% offset. What is the difference? (c) At exit, total LP profit above cost = $700M on each fund. Under Fund A's full catch-up, and Fund B's partial catch-up, describe how LP cash flows differ during the catch-up phase — even though the total GP carry is the same.",
      },
      // ── Meeting application ───────────────────────────────────────────────
      {
        type: "meeting-application",
        title: "In the manager meeting: five targeted questions",
        content:
          "With the incentive stack fully mapped, these questions become natural. (1) 'On the management fee, does the 2% step down at investment period close — and what is the post-investment-period base, committed or invested?' — Probes the largest variable in cumulative fee drag. (2) 'What percentage of transaction and monitoring fees is offset against the management fee — and can you show us the fee offset ledger for Fund III?' — Identifies hidden GP compensation; a GP who resists showing the ledger has something to disclose. (3) 'Is the GP catch-up full or partial — and how was it structured in your prior fund?' — Tests consistency between fund terms and whether the GP is hardening on LP-unfavorable structures. (4) 'How is the GP commitment funded — is it personal capital, a loan against future carry, or deferred management fees?' — The single most revealing question about whether alignment is real or nominal. (5) 'What clawback protection do you provide — is there an escrow, and at what percentage of carry distributions?' — Tests whether the legal obligation is backed by real collateral.",
      },
      // ── Allocator application ─────────────────────────────────────────────
      {
        type: "meeting-application",
        title: "Allocator application: fee drag and net return budgeting",
        content:
          "For an institutional LP building a PE program, fee structures aggregate across the portfolio. An LP with $500M committed across five $100M fund commitments, averaging 2%/20% with mixed step-down terms and 80% fee offsets, will transfer $50–75M in aggregate management fees and $80–120M in aggregate carry to GPs over 10 years — assuming a typical 1.7–2.0x net TVPI. This $130–195M total fee load represents 26–39% of LP committed capital. The correct LP budget posture: gross return targets must clear the hurdle by enough to generate an acceptable net return after total fee drag — typically a gross/net gap of 6–8 percentage points for a 2%/20% fund. When evaluating manager selection, the relevant comparison is not gross IRR versus benchmark but net IRR versus the LP's cost-of-capital and opportunity cost. A GP with 18% gross and 11% net who charges full catch-up and maintains committed-capital fee basis has poorer LP economics than a GP with 16% gross and 12% net under a step-down structure with 100% fee offsets — even though the gross IRR is lower.",
      },
    ],
    quiz: [
      {
        questionId: "d2q1",
        type: "multiple-choice",
        prompt:
          "A GP charges 2% management fee on committed capital for 10 years on a $2B fund. An LP-friendly alternative steps down to 1.5% on invested capital ($1.7B) after the 5-year investment period. What is the approximate dollar difference in total management fees between these two structures?",
        options: [
          "Approximately $10M — the difference is marginal and does not meaningfully affect LP returns",
          "Approximately $40M — the step-down saves LPs roughly one year's management fee",
          "Approximately $72.5M — the step-down generates material savings over the harvest period",
          "Approximately $127.5M — the step-down halves management fees for the entire harvest period",
        ],
        correctAnswer:
          "Approximately $72.5M — the step-down generates material savings over the harvest period",
      },
      {
        questionId: "d2q2",
        type: "multiple-choice",
        prompt:
          "A PE fund has an 8% compound preferred return. The LP commits $500M; the average hold period is 7 years. Approximately how much preferred return must the LP receive before the GP can earn any carried interest?",
        options: [
          "$280M — 8% × 7 years × $500M on a simple interest basis",
          "$340M — approximately 8% compounded for 7 years on $500M",
          "$500M — the LP must receive a full return of capital plus preferred return before any carry",
          "$170M — preferred return applies only to the unreturned capital at the time of the first distribution",
        ],
        correctAnswer:
          "$340M — approximately 8% compounded for 7 years on $500M",
      },
      {
        questionId: "d2q3",
        type: "multiple-choice",
        prompt:
          "Under a 100% GP catch-up provision, what happens to LP cash flows during the catch-up phase?",
        options: [
          "LP receives 20% of all distributions during catch-up, matching the long-run carried interest split",
          "LP cash flows pause entirely; 100% of distributions go to the GP until it has earned 20% of total profits",
          "LP receives a return of capital distributions during catch-up, but no profit distributions",
          "LP and GP share catch-up distributions 50/50 until the GP's carry target is reached",
        ],
        correctAnswer:
          "LP cash flows pause entirely; 100% of distributions go to the GP until it has earned 20% of total profits",
      },
      {
        questionId: "d2q4",
        type: "multiple-choice",
        prompt:
          "A GP earns $20M in transaction fees from a portfolio company closing. The LPA specifies an 80% fee offset. Which outcome is correct?",
        options: [
          "$20M is credited against management fees owed, reducing LP costs by $20M",
          "$16M is credited against management fees owed; the GP retains $4M as additional compensation",
          "$4M is credited against management fees owed; the GP retains $16M as additional compensation",
          "$20M is distributed directly to LPs as a special distribution outside the waterfall",
        ],
        correctAnswer:
          "$16M is credited against management fees owed; the GP retains $4M as additional compensation",
      },
      {
        questionId: "d2q5",
        type: "multiple-choice",
        prompt:
          "Which statement best describes why a GP commitment funded through a carry loan has weaker alignment than one funded from personal liquidity?",
        options: [
          "Carry loans are illegal in most jurisdictions and signal governance risk",
          "A carry-loan-financed commitment places no personal capital at risk — if the fund loses, the GP loses only unrealized carry, not actual wealth",
          "Carry loans increase GP leverage, amplifying their upside but also their downside",
          "A carry-loan GP commitment counts as LP capital and dilutes existing LPs' fund ownership",
        ],
        correctAnswer:
          "A carry-loan-financed commitment places no personal capital at risk — if the fund loses, the GP loses only unrealized carry, not actual wealth",
      },
      {
        questionId: "d2q6",
        type: "multiple-choice",
        prompt:
          "A PE fund reaches wind-down with a clawback obligation of $30M. The LPA requires no carried interest escrow. Which risk does this create?",
        options: [
          "The LP must contribute $30M in additional capital to cover the clawback obligation",
          "The GP can refuse the clawback if fewer than three LP partners request it",
          "The GP may have already spent or distributed the excess carry, making the legal claim difficult to collect",
          "The fund term automatically extends until the $30M clawback is fully recovered from future GP carry",
        ],
        correctAnswer:
          "The GP may have already spent or distributed the excess carry, making the legal claim difficult to collect",
      },
      {
        questionId: "d2q7",
        type: "multiple-choice",
        prompt:
          "A fund with a partial (80/20) catch-up versus one with a full (100%) catch-up will, at final wind-down:",
        options: [
          "Pay the GP more total carry under the partial catch-up, because distributions are prolonged",
          "Pay identical total carry in both cases — the difference is only the timing of LP cash flows during the catch-up phase",
          "Pay the GP less carry under the partial catch-up because the LP receives 20% during the catch-up, reducing the GP's share",
          "Depend entirely on fund size — partial catch-ups favor GPs on small funds but LPs on large funds",
        ],
        correctAnswer:
          "Pay identical total carry in both cases — the difference is only the timing of LP cash flows during the catch-up phase",
      },
      {
        questionId: "d2q8",
        type: "short-response",
        prompt:
          "A colleague says: 'The management fee is just a cost of doing business — what really matters is carry.' Why is this framing incomplete, and what does a more rigorous view of management fees require?",
        modelAnswer:
          "Management fees are not just a cost of doing business — they are a significant, predictable, fee-basis-sensitive transfer from LPs to the GP that occurs regardless of fund performance. On a large fund, the difference between committed-capital and invested-capital basis over 10 years can exceed $50–70M. Unlike carry, management fees are not contingent on GP performance: a fund that underperforms the hurdle rate and earns zero carry still collects full management fees. The rigorous view requires modeling total management fee drag as a present value alongside carry economics, and comparing total GP compensation — not just carry rate — across managers. The management fee effectively pre-funds GP operations from LP capital before a single dollar is invested.",
      },
      {
        questionId: "d2q9",
        type: "short-response",
        prompt:
          "Walk through the GP catch-up arithmetic for a fund where LP preferred return = $300M and the GP's carry rate is 20%. What is the GP catch-up amount, and what does it represent?",
        modelAnswer:
          "The GP catch-up amount = $300M × (20 / 80) = $75M. This represents the amount the GP must receive after the preferred return tranche before the standard 80/20 carried interest split begins. The catch-up ensures that the GP's total carry equals exactly 20% of all profits distributed so far at the end of the catch-up phase. At that point: LP has received $300M in preferred return, GP has received $75M in catch-up. Total distributed in profits above cost = $375M. GP share = $75M / $375M = 20%; LP share = $300M / $375M = 80%. The subsequent 80/20 split maintains this ratio going forward.",
      },
      {
        questionId: "d2q10",
        type: "short-response",
        prompt:
          "An LP tells you their LPAC seat gives them effective oversight of the GP's investment decisions. What is the correct understanding of LPAC authority, and what does it actually cover?",
        modelAnswer:
          "LPAC has no authority over investment decisions — it cannot veto acquisitions, mandate exits, or override the GP on any portfolio management question. Its role is fiduciary oversight of governance: reviewing conflicts of interest (related-party transactions, allocation policies when the GP manages multiple funds), approving valuations for hard-to-mark assets, consenting to material fund changes (term extensions, strategy amendments), and providing input on key-person events. Investment decisions remain entirely within GP discretion per the LPA. The LP conflating LPAC authority with investment oversight is making a material error about their actual governance rights.",
      },
      {
        questionId: "d2q11",
        type: "short-response",
        prompt:
          "A GP's fund term sheet shows 20% carried interest. A rigorous LP analysis estimates total GP economics of 30%+ of net profits. How does this gap arise, and what does it imply for LP net return expectations?",
        modelAnswer:
          "The gap arises because '20% carry' describes only the profit-sharing step of the waterfall, excluding management fees. On a fund with $150M in management fees over 10 years and $1B in net profits, the carry = $200M (20%). Total GP economics = $350M = 35% of net profits. Management fees are not profit-sharing but they do reduce LP net proceeds from $1B to $850M, which is then further reduced by carry. The LP net return must be budgeted against total GP take — not just headline carry. Practically, this means a gross return well above the hurdle is required to produce adequate LP economics after total fee load. For a fund charging 2%/20% with committed-capital basis and no step-down, gross returns of 15%+ are typically required to produce 10%+ net IRR for LPs.",
      },
    ],
    sources: [
      "ILPA Principles 3.0 — economic terms, fee offsets, clawback provisions (ilpa.org/principles)",
      "ILPA Fee Reporting Template and Fee Transparency Initiative (2016–2022 editions)",
      "CAIA Association Level II: private equity fund terms and GP/LP economics chapters",
      "Preqin Global Private Equity Report (annual) — fund term surveys, median fee rates, GP commitment data",
      "CFA Institute: Private Markets and Alternative Investments curriculum — carried interest calculation methodology",
      "Cambridge Associates: PE fund economics and net-return benchmarking methodology",
    ],
  },

  // ── Day 3 ──────────────────────────────────────────────────────────────────
  {
    lessonId: "day-03",
    blocks: [
      // ── Meeting cold open ─────────────────────────────────────────────────
      {
        type: "intro",
        title: "Meeting cold open",
        content:
          "A GP presents Fund III at your first meeting: 'We're three years in, net IRR is 4.8%, TVPI is 1.18x — we're tracking in line with where our prior funds were at this stage.' A cautious LP nods; a fluent one interrogates the claim. Year-3 metrics are structurally and mathematically dominated by fee drag and the absence of exits — not investment quality. The GP's 'in line with prior funds' statement is nearly always true and nearly always uninformative. This lesson gives you the analytical framework to understand precisely what is happening in those early fund years, why the numbers look the way they do, and what questions are actually worth asking.",
      },
      // ── Framing ───────────────────────────────────────────────────────────
      {
        type: "framing",
        title: "The J-curve as structural arithmetic, not performance signal",
        content:
          "The J-curve is not a feature of PE markets — it is a direct arithmetic consequence of the fund structure. Management fees are charged from day one on committed capital. Capital is called before it generates returns. Exits lag investments by 3–7 years. These three facts, combined with IRR's sensitivity to early negative cash flows, guarantee that every well-run PE fund will show negative or near-zero net IRR in years 1–3 and low single-digit IRR in years 3–4. The inflection point — where exits begin offsetting cumulative fee drag — typically arrives at years 4–6. Meaningful performance signal (where IRR begins to reflect investment quality rather than structural mechanics) arrives around years 6–8, after 60–70% of fund economic life has elapsed. Understanding the J-curve as structure lets you correctly interpret early metrics and ask the right questions: not 'why is your IRR low?' but 'what does your current deployment pace imply for the trough depth and timing of inflection?'",
      },
      // ── Teaching blocks ───────────────────────────────────────────────────
      {
        type: "teaching",
        title: "Capital call mechanics: anatomy, pacing, and what GPs can call for",
        content:
          "Capital calls are the operational trigger of the J-curve. Understanding their mechanics is prerequisite to understanding the curve's shape. A capital call notice formally requests LP funding, specifying: the amount called (in dollars and as a percentage of the LP's commitment), the intended use (platform acquisition, follow-on investment, management fees, fund expenses, or a combination), the funding date (typically 10 business days from notice, per LPA), and wire instructions. What GPs can legitimately call for: (1) New platform investments — the primary use during the investment period; (2) Follow-on investments in existing portfolio companies — permitted post-investment period; (3) Management fees — called pro-rata with other LP capital; (4) Fund-level expenses — legal, accounting, audit, administration. What they cannot call for post-investment-period close: new platform acquisitions. This constraint matters because it defines when LP unfunded commitment exposure shrinks from 'full commitment' to 'follow-on reserve only.' The call schedule is not uniform. Empirically, PE funds call capital unevenly: heavy front-loading (years 1–3), activity during core deployment (years 3–5), and lighter, opportunistic calls for follow-ons and fees in harvest years. An LP managing a $500M PE portfolio across 6 funds may receive 3–6 capital call notices in a single quarter during an active deployment environment.",
      },
      {
        type: "teaching",
        title: "The J-curve arithmetic: why IRR is structurally negative in early years",
        content:
          "IRR is the discount rate that sets the net present value of all cash flows to zero. In year one of a PE fund, the LP has paid in capital (negative cash flow) and received nothing back. The only 'return' is a GP-marked NAV — and NAV in year one is typically marked near cost, net of fees paid. Management fee drag alone — $20M/year on a $1B committed-capital fund — represents a −2% IRR contribution in year one if no capital is deployed. As capital is deployed across years 1–4, the IRR denominator grows (more capital paid in) while the numerator (distributions) remains near zero. The J-curve trough deepens as: more capital is called; fees compound; early investments are marked conservatively. The curve inflects as: the first exits produce cash distributions; DPI begins building; the return-of-capital numerator grows faster than the declining present value of those early negative flows. Numerical illustration: $1B fund calls $200M in year 1, pays $20M in fees. LP net position at year 1: −$220M cash out, NAV ≈ $180M (roughly cost minus fees). Implied 1-year IRR: approximately −(220 − 180)/200 = −20% on called capital. Not an investment loss — a structural consequence of calling capital before it generates returns. By year 3, $600M called, NAV ≈ $650M on rising marks, DPI = $0. Implied net IRR: still negative to low single digits. By year 6, first major exits produce $300M in distributions. IRR begins inflecting. By year 8–9, if exits are strong, IRR crosses 10–15%. The entire arc from −20% to +15% can describe a single excellent fund.",
      },
      // ── Visual 1 ─────────────────────────────────────────────────────────
      {
        type: "visual",
        title: "The J-Curve: Early Negative IRR Is Structural",
        visualId: "j-curve",
        caption:
          "The J-curve's trough typically bottoms at years 2–4; the inflection point arrives at years 4–6 as exits begin. Meaningful performance signal starts around year 6–8. The same fund can show −10% IRR at year 2 and +15% IRR at year 9.",
        whyItMatters:
          "When a GP presents their current fund at a meeting and shows a low early IRR, the correct analytical response is to interpret the metric structurally — not as investment quality evidence. The signal in early-year metrics is deployment pace and portfolio composition, not return quality.",
        sourceNote:
          "J-curve mechanics and empirical timing: CAIA Association Level II; Cambridge Associates Private Equity Benchmark Commentary, interim performance methodology.",
      },
      {
        type: "teaching",
        title: "What determines trough depth and inflection timing",
        content:
          "Two funds with identical investment quality can show materially different J-curves depending on structural and operational factors. Trough deepens when: (1) Management fees are high relative to called capital — a 2% fee on $1B committed creates $20M/year drag before deployment; (2) Deployment is slow — capital called early but invested over 4–5 years extends the window of negative net cash flow; (3) Early write-downs occur — a distressed portfolio company marked below cost in year 2 deepens the trough without any realized loss; (4) No subscription line — LP capital is called at deal close (day zero). Trough is shallower when: (1) Deployment is fast — the gap between capital call and value creation is compressed; (2) Fee offsets are high — transaction fees credited against management fees reduce net drag; (3) Early profitable exits generate DPI — even one strong early exit changes the IRR trajectory significantly; (4) Subscription lines delay LP outflows — though this improves IRR optics, not LP economics (see next section). The investment implication: a GP with a shallow early J-curve is not necessarily a better performer — they may simply have used a subscription line or had one lucky early exit. Interrogate the source of any unusually shallow trough before concluding anything about quality.",
      },
      // ── Visual 2 ─────────────────────────────────────────────────────────
      {
        type: "visual",
        title: "J-Curve Depth Factors",
        visualId: "j-curve-depth-factors",
        caption:
          "Structural and operational factors shift the J-curve's depth and timing independently of investment quality. A fund with a shallower trough has not necessarily outperformed — it may have used a subscription line or benefited from an early exit.",
        whyItMatters:
          "Comparing two funds' early-year IRRs without understanding these depth factors leads to false conclusions about relative quality. The relevant questions are: how deep was the trough, why, and how quickly did the inflection arrive?",
        sourceNote:
          "Subscription line mechanics and J-curve effects: ILPA Subscription Line of Credit and Alignment of Interest Guidance (2017). Fee offset impact on IRR: ILPA Fee Reporting Template and accompanying technical notes.",
      },
      {
        type: "teaching",
        title: "Subscription line credit facilities: mechanics and IRR inflation",
        content:
          "A subscription line credit facility is a short-term revolving credit facility extended to the GP and secured against uncalled LP commitments. Mechanics: the GP uses the credit line to fund acquisitions immediately at close, then issues a capital call to LPs weeks or months later to repay the facility. From the LP's perspective, the cash outflow is delayed — which mathematically moves the investment's day-zero further forward in time, compressing the measured holding period and mechanically increasing reported IRR. Example: Fund closes a $150M acquisition on January 1. Without a subscription line, LP is called $150M on January 1 — the investment clock starts day zero. With a 90-day subscription line, the GP borrows the $150M, calls LP capital on April 1. From the IRR calculator's perspective, the LP funded the deal 90 days later — a compounded 8% annual rate over 90 days is approximately $150M × 2% = $3M of IRR benefit. This is not economic benefit to the LP — the LP still owns the same deal for the same duration — but it reduces the measured duration, inflating the IRR. ILPA's 2017 guidance specifically addresses this: it recommends reporting both subscription-adjusted and unadjusted IRR so LPs can see the inflation. In due diligence: 'Do you use a subscription line, and can you provide both adjusted and unadjusted IRR for Fund III?' A GP who cannot or will not provide unadjusted IRR is concealing mechanical inflation.",
      },
      // ── Worked example ────────────────────────────────────────────────────
      {
        type: "example",
        title: "Worked example: year-by-year J-curve for a $1.5B fund",
        content:
          "Fund V: $1.5B committed, 2%/20% structure, 8% preferred return, 5-year investment period. Management fee: $30M/year during investment period on committed capital. Year 1: $300M called ($30M fees + $270M invested, 3 platforms). NAV: ~$280M (invested at cost minus fees). Distributions: $0. Net IRR: −11% (fee drag on called capital before any appreciation). Year 2: Additional $400M called ($30M fees + $370M deployed, 3 more platforms). Total called: $700M. NAV: $780M (first marks up slightly). DPI: $0. Net IRR: −6%. Year 3: Additional $350M called. Total called: $1.05B. NAV: $1.2B (2 companies marked up on EBITDA growth). DPI: $0. Net IRR: −1%. Year 4 (inflection): First exit — Company A sold for $420M equity (invested $160M equity, 2.6x gross). Distribution: $420M. Total called: $1.2B. NAV: $1.35B (remaining portfolio). DPI: 0.35x. Net IRR: +8% — the inflection arrives with the first real exit. Year 5: Investment period closes. Two more exits. Total called: $1.45B. DPI: 0.65x. TVPI: 1.42x. Net IRR: 11%. Year 7 (harvest peak): Five of nine companies exited. DPI: 1.25x. TVPI: 1.72x. Net IRR: 16%. Year 9 (near wind-down): All but two companies exited. DPI: 1.65x. TVPI: 1.82x. Net IRR: 17.5%. Subscription line comparison: if Fund V used a 180-day subscription line for all calls, reported year-3 IRR might read +2% instead of −1% — a 3-point improvement from pure mechanics. Same deals, same exits, different reported curve. An LP comparing Fund V (with subscription line) to a peer fund (without) on year-3 IRR will draw a misleading conclusion about relative quality.",
      },
      {
        type: "teaching",
        title: "J-curve variation across PE strategies",
        content:
          "The J-curve depth and timing differ materially across PE sub-strategies: Buyout funds (the canonical J-curve): typical management fee of 1.5–2% on committed capital; 3–6 year average holds; first exits typically years 4–7; inflection at years 4–6. Trough is deep but recovers reliably with harvest. Growth equity funds: lower leverage, shorter holds (3–5 years typical), often lower management fees. Shallower trough. IRR signal arrives earlier because the multiple compression risk is lower and exits are more predictable. Venture capital (deepest J-curve): portfolios may hold companies 8–12 years; write-downs and write-offs in years 1–5 are common; management fees on a 2% committed basis with no exits create deep, prolonged troughs. Interim venture IRR at year 3 is almost entirely meaningless. The denominator effect (public market denominator expansion inflating apparent PE weight) is most pronounced for VC portfolios because venture NAVs can jump sharply on a financing round mark-up while unrealized risk remains high. Understanding which strategy you're analyzing is prerequisite to interpreting any J-curve metric.",
      },
      {
        type: "teaching",
        title: "LP pacing model: construction and liquidity buffer sizing",
        content:
          "A pacing model is the LP's tool for managing capital call timing against portfolio liquidity. The input variables: (1) Committed capital by fund (total obligation outstanding); (2) Expected call schedule by fund — modeled as S-curve deployment, typically 20–30% called in year 1, 50–60% by year 3, 85–95% by year 5 or end of investment period; (3) Management fee calls (predictable, annual); (4) Follow-on reserve estimates (typically 20–30% of committed held for follow-ons in existing portfolio). Output: projected capital call demands by quarter, against which the LP stress-tests liquid portfolio adequacy. The liquidity buffer: institutional LPs typically maintain 25–35% of uncalled commitments in near-liquid instruments. Stress test: what if three of your six fund managers simultaneously accelerate deployment in a strong deal environment? Each GP's investment period may be at different stages, but correlated macro conditions (e.g., 2021 deal environment) can drive simultaneous call acceleration across a vintage-diversified portfolio. A practical rule: the pacing model should be run quarterly, updated with actual call data, and stress-tested annually for simultaneous 30% acceleration by all managers in the same quarter. An LP who has not built a pacing model is managing capital call exposure by intuition — a structural mistake.",
      },
      // ── Source note ───────────────────────────────────────────────────────
      {
        type: "source-note",
        title: "Sources for this lesson",
        content:
          "Capital call mechanics and default provisions: ILPA Principles 3.0, Section 3 (LP default and notice periods). Subscription line credit facilities and IRR inflation: ILPA Subscription Line of Credit and Alignment of Interest Guidance (2017). J-curve timing and empirical patterns: Cambridge Associates Private Equity Benchmark Commentary, interim versus final performance methodology. Interim performance predictive validity: Harris, R., Jenkinson, T., and Kaplan, S. (2014), 'Private Equity Performance: What Do We Know?' Journal of Finance 69(5), 1851–1882. J-curve variation across strategies: CAIA Association Level II, private equity and venture capital performance chapters. LP pacing model methodology: ILPA educational materials on portfolio construction; Cambridge Associates LP portfolio construction guidance. IRR mechanics and cash flow sensitivity: CFA Institute, Private Markets and Alternative Investments curriculum.",
      },
      // ── Weak vs. strong answer ────────────────────────────────────────────
      {
        type: "weak-answer",
        title: "Weak vs. strong: responding to a year-3 performance presentation",
        content:
          "The GP says: 'Fund III is tracking at 5.2% net IRR and 1.14x TVPI in year three — consistent with where our prior two funds were at the same stage.' Weak LP response: 'That's good to hear. Can you tell us about some of the portfolio companies — which ones are driving the TVPI?' Why it's weak: the LP has implicitly accepted the GP's framing that year-3 metrics are meaningful comparison points, pivoted to company-level color, and asked nothing that would actually test whether the fund is performing well or poorly. Strong LP response: 'Year-three metrics are mostly fee drag rather than performance signal — can you tell us your current deployment pace against the investment period, your first expected exit timeline, and how much of the TVPI is GP-marked appreciation versus fair-value marks near cost?' Why it's strong: it reframes the conversation to the metrics that are actually informative at year three (deployment pace, exit pipeline, NAV composition), refuses to treat interim IRR as performance evidence, and signals analytical literacy about the J-curve. A GP who responds defensively to this question should make you more cautious, not less.",
      },
      // ── Exercise ──────────────────────────────────────────────────────────
      {
        type: "exercise",
        title: "Applied exercise: diagnosing a J-curve presentation",
        content:
          "A GP presents two scenarios for Fund IV at year 3: Scenario A shows −2% net IRR and 0.96x TVPI. The GP used no subscription line. Scenario B shows +3% net IRR and 1.07x TVPI. The GP used a 6-month subscription line for all calls. Both scenarios involve the same deals, same timing, same portfolio marks. Work through the following: (a) Is Scenario A or B a better-performing fund? What does the IRR difference actually reflect? (b) The GP offers the following comparison: 'Our peer fund at the same stage shows −5% net IRR — we're 8 points ahead.' The peer fund used no subscription line. What is the most likely explanation for the gap, and how would you test it? (c) If Fund IV's first significant exit (a 2.8x gross MOIC on the largest investment) occurs in year 4, what would you expect to happen to the reported net IRR? Would this be evidence of investment skill at that point?",
      },
      // ── Meeting application ───────────────────────────────────────────────
      {
        type: "meeting-application",
        title: "In the manager meeting: five targeted questions on J-curve and calls",
        content:
          "With the J-curve framework internalized, these questions become natural checkpoints. (1) 'What is your current deployment pace against the investment period close date — and what percentage is reserved for follow-ons in existing portfolio companies?' — Establishes how much new-platform capacity remains versus how much capital is committed to incumbents. (2) 'For Fund III's current TVPI, how much is GP marks above cost versus capital actually returned?' — Probes whether the positive TVPI is confirmed economics or interim valuation; the DPI/RVPI split answers this directly. (3) 'Do you use a subscription line, and can you provide both adjusted and unadjusted IRR for Fund III?' — Tests whether reported IRR includes mechanical inflation. (4) 'When do you expect the first major exit from Fund IV — and is there a specific portfolio company where exit timing is most visible?' — Shifts the conversation from current metrics (mostly uninformative) to exit pipeline, where the actual performance signal lives. (5) 'When you say you're tracking in line with prior fund vintage — are you comparing adjusted or unadjusted IRR, and are the prior funds also at the same stage of economic life?' — Identifies whether the 'prior fund' comparison is valid or misleading.",
      },
      // ── Allocator application ─────────────────────────────────────────────
      {
        type: "meeting-application",
        title: "Allocator application: pacing model and liquidity stress",
        content:
          "The J-curve has a direct allocator implication: your portfolio will show depressed IRRs and low DPI for the first 3–5 years of any new fund commitment, and you will face capital calls during that period with no offsetting distributions. Pacing model inputs: for each fund in the portfolio, model expected capital calls by quarter (using S-curve deployment), management fee calls (annual, predictable), and expected distribution timing (using rough exit scenarios). The output is a quarterly cash flow projection showing net capital outflow (calls minus distributions) and when you expect the program to become self-funding (distributions exceed calls). A typical institutional PE portfolio reaches net-positive cash flow 5–8 years after the program begins, assuming consistent vintage-year commitments. Liquidity stress: model the scenario where all fund managers simultaneously accelerate deployment by 30% in a given 12-month window. This is not hypothetical — it happened in 2021 and again in parts of 2024. An LP without a liquidity buffer specifically sized against uncalled commitments is exposed to forced liquidation of other portfolio assets at the worst time. The correct posture: treat uncalled PE commitments as a contingent liability in your liquidity policy, not as invested capital.",
      },
    ],
    quiz: [
      {
        questionId: "d3q1",
        type: "multiple-choice",
        prompt:
          "A buyout fund reports −8% net IRR in year two. Which interpretation is most accurate?",
        options: [
          "The fund has made poor early investments that have been written down significantly",
          "The IRR reflects cumulative management fee drag before any exits have occurred — a structurally expected outcome",
          "The GP has deployed capital too slowly, causing the IRR to lag peers at the same stage",
          "The negative IRR will permanently impair the fund's ability to reach the preferred return threshold",
        ],
        correctAnswer:
          "The IRR reflects cumulative management fee drag before any exits have occurred — a structurally expected outcome",
      },
      {
        questionId: "d3q2",
        type: "multiple-choice",
        prompt:
          "Which factor would most directly DEEPEN the J-curve trough for a buyout fund?",
        options: [
          "An early profitable exit generating DPI in year 2",
          "A 100% management fee offset on all transaction fees",
          "A 2% management fee on committed capital with slow deployment over 5 years",
          "A partial catch-up provision rather than a full catch-up",
        ],
        correctAnswer:
          "A 2% management fee on committed capital with slow deployment over 5 years",
      },
      {
        questionId: "d3q3",
        type: "multiple-choice",
        prompt:
          "A GP uses a 6-month subscription line for all capital calls. Compared to a peer fund that calls capital at deal close, how does this affect the GP's reported IRR and LP economics?",
        options: [
          "IRR improves and LP economics improve — the subscription line creates real value by bridging deals efficiently",
          "IRR improves mechanically because LP cash outflows are delayed, but LP cash-on-cash returns and MOIC are unchanged",
          "IRR is unaffected; only the DPI calculation changes when subscription lines are used",
          "IRR declines because the fund pays interest on the subscription line, which increases the cost basis of investments",
        ],
        correctAnswer:
          "IRR improves mechanically because LP cash outflows are delayed, but LP cash-on-cash returns and MOIC are unchanged",
      },
      {
        questionId: "d3q4",
        type: "multiple-choice",
        prompt:
          "When does meaningful performance signal begin to emerge from a typical buyout fund's reported metrics?",
        options: [
          "Year 1–2, when interim marks reflect initial GP underwriting assumptions",
          "Year 3–4, when the investment period is complete and the full portfolio is marked",
          "Year 6–8, when 60–70% of fund economic life has elapsed and exits have occurred",
          "Year 10 at wind-down, when all assets are liquidated and final IRR is calculated",
        ],
        correctAnswer:
          "Year 6–8, when 60–70% of fund economic life has elapsed and exits have occurred",
      },
      {
        questionId: "d3q5",
        type: "multiple-choice",
        prompt:
          "A GP says 'Fund IV is tracking in line with where our prior two funds were at year three.' Which response most accurately evaluates this claim?",
        options: [
          "This is informative because cross-vintage IRR comparison at the same fund age eliminates vintage year bias",
          "This comparison controls for subscription line use only if all three funds used identical line structures",
          "Year-three metrics are structurally dominated by fee drag rather than investment quality, making this comparison nearly uninformative about relative performance",
          "This is a reliable performance indicator provided the fund sizes are comparable across all three vintages",
        ],
        correctAnswer:
          "Year-three metrics are structurally dominated by fee drag rather than investment quality, making this comparison nearly uninformative about relative performance",
      },
      {
        questionId: "d3q6",
        type: "multiple-choice",
        prompt:
          "An LP with $600M in uncalled PE commitments across six funds receives three simultaneous capital call notices in one quarter, totaling $90M. Why is having 'plenty of cash in the portfolio' insufficient liquidity planning for this situation?",
        options: [
          "The LP is legally required to maintain a dedicated bank account equal to 20% of total uncalled commitments",
          "Cash held in money market funds does not satisfy capital call requirements; only wire transfers from designated accounts are accepted",
          "The correct LP policy is a formal pacing model with a liquidity buffer explicitly sized against peak simultaneous call scenarios, not reliance on general portfolio cash",
          "Three simultaneous calls from different GPs would trigger an automatic fund-level default clause requiring LP counsel review",
        ],
        correctAnswer:
          "The correct LP policy is a formal pacing model with a liquidity buffer explicitly sized against peak simultaneous call scenarios, not reliance on general portfolio cash",
      },
      {
        questionId: "d3q7",
        type: "multiple-choice",
        prompt:
          "A venture capital fund reports −15% net IRR at year four. How does this compare analytically to a buyout fund reporting −4% at year four?",
        options: [
          "The VC fund is a worse performer — a −15% IRR at year four indicates early losses that are unlikely to recover",
          "Both IRRs are structurally expected for their respective strategy types; VC funds typically show deeper troughs due to longer holds, more early write-downs, and binary exit profiles",
          "The VC fund uses a different accounting standard, making direct IRR comparison impossible before year seven",
          "The buyout fund's −4% indicates a subscription line is inflating its IRR relative to the VC fund's more conservative reporting",
        ],
        correctAnswer:
          "Both IRRs are structurally expected for their respective strategy types; VC funds typically show deeper troughs due to longer holds, more early write-downs, and binary exit profiles",
      },
      {
        questionId: "d3q8",
        type: "short-response",
        prompt:
          "Explain the J-curve in plain English to a pension fund trustee who has never seen private equity performance data before. Use the fee mechanics and timing to explain why early negative IRRs are structural rather than a sign of poor performance.",
        modelAnswer:
          "In a PE fund, the GP charges management fees from day one — before any investments are made or exits generate cash. When we calculate IRR in year one or two, the denominator is capital we've already paid in, but the numerator is zero because no investments have been exited yet. So the math gives us a negative number: we've paid in money and gotten nothing back yet, even though our investments may actually be performing well. The IRR only improves when exits produce actual cash distributions — which typically takes 3–5 years for a buyout fund. The J-curve is the visual representation of this: IRR starts negative, bottoms out around years 2–4, and then rises sharply as exits accumulate. A negative year-2 IRR tells you the fund is behaving normally. What you actually want to know is: how is the portfolio marked, how is deployment tracking, and when is the first exit expected?",
      },
      {
        questionId: "d3q9",
        type: "short-response",
        prompt:
          "Two funds at year four show the following: Fund A: net IRR +5%, no subscription line. Fund B: net IRR +9%, 6-month subscription line for all calls. What are the two alternative explanations for the gap, and how would you test which one is correct?",
        modelAnswer:
          "Two explanations: (1) Fund B is a better-performing fund — the IRR premium reflects superior investment quality, stronger exit timing, or a less fee-intensive structure. (2) Fund B's subscription line use has mechanically inflated its IRR by delaying LP cash outflows, making its reported IRR non-comparable to Fund A. Both effects can coexist. To test: ask Fund B for unadjusted IRR (excluding the subscription line timing benefit). If the unadjusted IRR is approximately 5–6%, the gap is largely or entirely mechanical. If unadjusted IRR is still materially above Fund A's 5%, there is genuine performance content in the gap. Additionally, compare MOIC (cash-on-cash multiple) which is unaffected by subscription line timing — if both funds have similar MOIC at year four, the IRR difference is predominantly mechanical.",
      },
      {
        questionId: "d3q10",
        type: "short-response",
        prompt:
          "Describe the key inputs and outputs of an LP pacing model, and explain what 'stress testing' a pacing model means in practice.",
        modelAnswer:
          "Inputs: committed capital by fund (total obligation), expected call schedule (S-curve deployment model per fund — typically 20–30% year one, 50–60% by year three, 85–95% by end of investment period), annual management fee calls, follow-on reserve estimates per portfolio (typically 20–30% of committed), and expected distribution timing (modeled from exit pipeline). Outputs: projected quarterly capital calls by fund, net cash flow (calls minus distributions) by quarter, and the point at which the program becomes net-positive (distributions exceed calls). Stress testing means modeling the simultaneous acceleration scenario: what if all active fund managers accelerate deployment by 25–30% in a single 12-month window? This models peak call demand without assuming any distributing fund provides offsetting cash. The stress output should be compared against the LP's near-liquid reserve pool; if the stress scenario exceeds liquid reserves, the LP either needs to hold larger buffers or reduce new commitment pacing.",
      },
    ],
    sources: [
      "ILPA Principles 3.0 — capital call mechanics and default provisions, Section 3 (ilpa.org/principles)",
      "ILPA Subscription Line of Credit and Alignment of Interest Guidance (2017)",
      "Cambridge Associates Private Equity Benchmark Commentary — interim vs. final performance methodology",
      "Harris, R., Jenkinson, T., and Kaplan, S. (2014). 'Private Equity Performance: What Do We Know?' Journal of Finance 69(5), 1851–1882",
      "CAIA Association Level II: J-curve, capital call mechanics, and strategy-level performance chapters",
      "CFA Institute: Private Markets and Alternative Investments curriculum — IRR mechanics and cash flow timing",
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
