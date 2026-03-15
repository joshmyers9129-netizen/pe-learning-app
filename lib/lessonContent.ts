import { LessonContent } from "./types";

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
          "Every PE metric — IRR, TVPI, DPI, PME — is anchored in the fund structure. Without the structural model, you cannot identify when IRR is being distorted — whether by subscription line mechanics (Day 3–4) or by early exit concentration — why NAV is not the same thing as value, or why a year-3 performance number is nearly useless for cross-fund comparison. A CFA charterholder approaching PE with a public-equity mental model — continuous liquidity, daily NAV, mark-to-market pricing — will have systematically wrong intuitions across every dimension of PE analysis. The fund model is not introductory material you learn once and shelve. It is the analytical skeleton on which all subsequent PE reasoning hangs.",
      },
      // ── Teaching blocks ───────────────────────────────────────────────────
      {
        type: "teaching",
        title: "The closed-end structure: design, not constraint",
        content:
          "A PE fund is a closed-end vehicle — the capital pool is fixed at close, with no new subscriptions, no redemptions, and no daily NAV. The fund has a defined term (typically 10 years, with one or two one-year extension rights subject to LP approval). LPs cannot exit by redeeming their interest; secondary market sales to a willing buyer are the only exit path.\n\nThis design is deliberate. It enables three things the PE return model requires:\n\n- **Illiquidity premium** — LPs surrender liquidity and expect compensation in return\n- **Multi-year operational control** — a GP with a stable capital base can execute 3–5 year operational improvements without the threat of capital withdrawal\n- **Incentive alignment** — carry is earned on fund-level total returns across the fund's full life, not on quarterly NAV marks\n\nThe analogy to a listed closed-end fund (CEF) is imperfect: a CEF trades at a market price that may diverge sharply from NAV, while a PE fund has neither. The governing legal document — the limited partnership agreement (LPA) — defines the structure, terms, and GP authority.",
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
          "Tracing a dollar of committed capital through the fund lifecycle:\n\n(1) **LP commits $1.00** — the dollar sits in the LP's liquid portfolio, subject to call.\n(2) **GP issues a capital call**; LP funds approximately $0.90 net of management fee offsets called that year. GPs sometimes bridge acquisitions using a subscription line credit facility before calling LP capital, which delays the LP's cash outflow date and mechanically inflates reported IRR. Full subscription line mechanics in Day 3.\n(3) **GP closes an acquisition** — called equity plus debt financing (typically 4–6x EBITDA for a buyout) funds the enterprise value.\n(4) **Portfolio company operates**; GP marks it quarterly for NAV purposes — LP sees TVPI build, but it is unrealized until exit.\n(5) **GP exits** via trade sale, sponsor-to-sponsor transaction, or IPO; gross proceeds flow to the fund and are distributed through a waterfall: LP capital returned first, then preferred return, then GP carry on remaining profits. Full waterfall mechanics in Day 2.\n(6) **LP receives a net cash distribution.**\n\nDPI at any point reflects only what has been wired; RVPI reflects GP-determined interim value for the remaining portfolio. A fund with TVPI 1.8x and DPI 0.3x has mostly unrealized, unconfirmed returns — a distinction that is not cosmetic. Full multiple mechanics in Day 5.",
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
          "TVPI = DPI + RVPI. DPI is confirmed cash received by LPs; RVPI is GP-estimated residual value; TVPI combines both into a single headline. The split between them is more analytically important than the total — a TVPI of 1.45x means something very different with DPI 1.30x versus DPI 0.15x. Day 5 covers the full framework for reading and stress-testing each component.",
        whyItMatters:
          "When a GP presents TVPI, ask immediately: what is the DPI/RVPI split? That single question reveals how much of the headline is confirmed cash versus GP-estimated interim marks. Learning to disaggregate TVPI into its confirmed and estimated components is one of the most important skills in PE performance analysis.",
        sourceNote:
          "TVPI, DPI, and RVPI definitions: ILPA Performance Reporting Standards; IPEV Valuation Guidelines, current edition.",
      },
      // ── Visual 3 ─────────────────────────────────────────────────────────
      {
        type: "visual",
        title: "The J-Curve: Early Negative IRR Is Structural",
        visualId: "j-curve",
        caption:
          "Early fund IRR is structurally negative — a direct arithmetic consequence of management fee drag before exits generate cash, not a signal of investment quality. The full arithmetic and strategy-level differences are in Day 3.",
        whyItMatters:
          "A GP presenting year-3 IRR is structurally showing you the fee-drag trough, not their track record. Understanding the J-curve as arithmetic — not signal — is one of the most important reframes in PE performance analysis. The questions that are actually informative at year 3 (deployment pace, exit pipeline, NAV composition) are the subject of Day 3.",
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
          "GPs use fund-model vocabulary precisely in meetings. A CFA-fluent LP who does not speak this language will be dependent on GP framing.\n\n| Term | Definition | Covered In |\n|---|---|---|\n| Committed capital | Total LP obligations, including uncalled | Day 1 |\n| Paid-in capital (called capital) | LP capital actually drawn to date | Day 1 |\n| Invested capital | Capital deployed into portfolio companies (paid-in minus fees) | Day 1 |\n| Follow-on reserve | Committed capital reserved for subsequent investments in existing portfolio companies | Day 1 |\n| NAV | GP-determined fair value of the remaining portfolio per ASC 820 / IPEV guidelines | Day 5 |\n| TVPI | (Distributions + NAV) / paid-in; the all-in value multiple | Day 5 |\n| DPI | Distributions / paid-in; the only confirmed performance figure | Day 5 |\n| RVPI | NAV / paid-in; the estimated, unrealized component of TVPI | Day 5 |\n| Gross IRR | Fund-level return before management fees and carry | Day 4 |\n| Net IRR | LP-level return after all fees and carry; the only LP-comparable figure | Day 4 |\n\nIn a meeting, 'Fund IV is 68% deployed in year three' means the GP has called approximately 68% of total commitments three years into a 5-year investment period — somewhat ahead of average pace — leaving roughly 32% (less the follow-on reserve) available for new platforms.",
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
          "**What year-4 metrics can tell you:**\n- Deployment pace — compare called capital to the investment period to assess whether the GP is behind, on pace, or ahead for new platforms\n- Confirmed realized value — DPI is cash actually wired to LPs, not subject to valuation interpretation\n- Whether any early exits have occurred\n\n**What year-4 metrics cannot tell you:**\n- Ultimate fund performance — year-4 IRR is mechanically distorted by the J-curve and by the timing of any early exits; a single early exit in year 3 can double the reported interim IRR regardless of portfolio quality\n- Whether RVPI marks are accurate — RVPI is GP-determined fair value per ASC 820 methodologies and while audited for process, is not market-confirmed\n- Quartile ranking reliability — Harris, Jenkinson, and Kaplan (2014) show fund quartile rankings based on early interim metrics shift substantially by final realization; a year-4 top-quartile label carries far less signal than a year-8 one\n\nThe professionally correct posture at year 4: treat DPI as confirmed value, deployment pace as a structural check, and RVPI and interim IRR as indicative only.",
      },
      // ── Exercise ──────────────────────────────────────────────────────────
      {
        type: "exercise",
        title: "Applied exercise: reading a year-4 fund update",
        content:
          "A GP presents Fund III at a first meeting. Fund size: $1.8 billion. Vintage: 2019. Fund age: 4 years. Reported metrics: net IRR 7.2%, TVPI 1.28x, DPI 0.18x, RVPI 1.10x. The GP describes the fund as 'tracking well against benchmark.' Work through the following before proceeding to the quiz:\n\n1. What does the DPI/TVPI split tell you about the source and reliability of the apparent returns?\n2. A 7.2% net IRR at year 4 of a 2019-vintage buyout fund — is this underperformance or structurally expected?\n3. The GP notes the top three portfolio companies represent 62% of current NAV. What specific risk does this concentration create for RVPI reliability?\n4. What single additional data point would most improve your ability to evaluate Fund III quality at this stage?",
      },
      // ── Meeting application ───────────────────────────────────────────────
      {
        type: "meeting-application",
        title: "In the manager meeting: four high-signal questions",
        content:
          "Armed with the fund model, these questions become natural entry points for any first GP meeting.\n\n1. **\"What is your current DPI, and what is your expected timeline to reach 1.0x DPI on Fund III?\"** — Separates GP confidence from confirmed value; forces a conversation about exit timing and visibility.\n2. **\"How much of your follow-on reserve has been utilized so far, and do you have any concerns about reserve adequacy for the remaining portfolio companies?\"** — Tests capital discipline within the fund and reveals whether the GP manages the portfolio as a capital allocation problem.\n3. **\"Walk me through your expected capital call schedule for Fund IV in years 1 through 3 — what pace should we model for liquidity planning?\"** — Establishes LP liquidity planning inputs and signals you understand capital call mechanics.\n4. **\"On Fund III, what is the RVPI distribution across remaining portfolio companies — how concentrated is the unrealized NAV?\"** — Probes concentration risk in the unrealized return and forces a company-level conversation that most LPs never initiate.",
      },
      // ── Allocator application ─────────────────────────────────────────────
      {
        type: "meeting-application",
        title: "Allocator application: three structural challenges from the fund model",
        content:
          "The fund model creates three structural portfolio management challenges for any LP allocating across multiple PE managers.\n\n1. **Pacing risk:** an LP committing $150 million per year across four to six funds simultaneously may have $400–600 million in uncalled commitments outstanding at any time. A pacing model projecting expected capital calls by fund and year is not optional — it is a basic operational tool. Over-commitment works until multiple GPs simultaneously accelerate calls in a strong vintage year, creating a call crisis against a single LP's liquidity position.\n2. **Vintage year concentration:** the fund model's 3–5 year investment periods mean that two sequential fund commitments may acquire companies at materially different macro conditions. A PE portfolio concentrated in two or three vintage years carries macro-entry risk that is invisible on a portfolio NAV report but often materializes in the harvest phase.\n3. **The denominator effect:** when public markets sell off sharply, PE NAVs are slow to mark down because GP interim valuations lag market conditions. This mechanically inflates the apparent portfolio weight of PE even as the economic value of those companies has likely declined — a structural artifact, not a signal of PE outperformance.",
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
        questionId: "d1q8",
        type: "short-response",
        prompt:
          "A pension fund CIO asks you to explain why a PE fund's committed capital differs from its invested capital, and why this distinction matters for the pension's liquidity planning. Write two to three sentences as you would say them in that conversation.",
        modelAnswer:
          "Committed capital is the total legal obligation the pension has agreed to fund over the life of the fund; invested capital is only what has actually been called and deployed to date. The uncalled balance — typically 60–80% of commitment in the first two years — remains a contingent liability that can be drawn with as little as 10 business days' notice. This means the pension must hold liquid reserves against uncalled commitments rather than fully deploying that capital elsewhere, which requires a formal pacing model to manage call timing against portfolio liquidity needs.",
      },
      {
        questionId: "d1q10",
        type: "short-response",
        prompt:
          "Describe two things you can reliably conclude and two things you cannot reliably conclude from a buyout fund's reported metrics at year four of a 10-year fund life.",
        modelAnswer:
          "Reliably concludable: (1) Deployment pace — comparing called capital to the investment period gives a clear signal of whether the GP is behind, on pace, or ahead for new platform investments, which affects follow-on reserve adequacy and new-platform capacity. (2) Confirmed realized value — DPI is cash actually wired to LPs; it is not subject to valuation methodology or GP discretion. Not reliably concludable: (1) Ultimate fund performance — year-4 IRR and TVPI are heavily distorted by J-curve mechanics and GP interim marks; Harris, Jenkinson, and Kaplan (2014) find that interim PE metrics have limited predictive validity before 60–70% of fund economic life has elapsed. (2) Unrealized portfolio quality — RVPI reflects GP-applied ASC 820 fair value methodologies that can diverge materially from eventual exit prices; concentration in a few large companies amplifies this uncertainty.",
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
          "Management fees are the GP's operating budget — covering staff, office, legal, travel, and diligence costs. At 2% of committed capital, a $2B fund generates $40M per year whether or not a dollar is deployed. This is intentional: the GP's team is fully engaged sourcing and evaluating deals before capital is put to work.\n\n**Fee basis matters more than headline rate.** The step-down timing — when the fee base shifts from committed to invested capital, and at what rate — determines cumulative fee drag far more than the 2% headline.\n\n| Structure | Yrs 1–5 | Yrs 6–10 | 10-Year Total |\n|---|---|---|---|\n| A: 2% on committed ($2B) throughout | $40M/yr = $200M | $40M/yr = $200M | **$400M** |\n| B: 2% committed → 1.5% invested ($1.7B) | $40M/yr = $200M | $25.5M/yr = $127.5M | **$327.5M** |\n| **LP savings (Structure B)** | — | **$72.5M** | **$72.5M** |\n\nOn a $2B fund, the $72.5M difference reduces LP net MOIC by approximately 3.6 cents per dollar of commitment. ILPA Principles 3.0 recommends that fee terms disclose the basis, step-down trigger, and the formula for calculating the post-investment-period base explicitly.",
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
          "The 20% headline carry understates true GP economics when management fees are layered on top. On a $1B fund returning $1.85B net (after fees), total LP profit = $850M. GP carry = 20% × $850M = $170M. Management fees over 10 years (2% → 1.5% step-down) ≈ $150M. Total GP gross economics = $170M + $150M = $320M against $1B of LP capital — an effective 32% of LP capital transferred to the GP in aggregate.\n\nThis framing matters for LP return attribution: the $1.85B net available to LPs already reflects the $150M fee drag; the carry is an additional 20% on remaining profits. Gross-to-net IRR drag on a typical 2%/20% fund runs 6–8 percentage points annually — Day 4 covers the full decomposition. This gap is why net IRR — and net MOIC — are the only economically meaningful comparisons for LPs.",
      },
      {
        type: "teaching",
        title: "Fee offsets: monitoring fees, transaction fees, directors' fees",
        content:
          "GPs historically earned additional revenue directly from portfolio companies. Without a fee offset provision, these payments represent additional GP compensation above the management fee — borne economically by portfolio companies and therefore funded by LP capital.\n\n| Fee Type | Source | Typical Rate | Without Offset | With 100% Offset |\n|---|---|---|---|---|\n| Monitoring fees | Annual retainer from portfolio company | $1–3M/company/year | GP revenue above mgmt fee | Credited against LP mgmt fee |\n| Transaction fees | Deal closing at entry and exit | 0.5–1% of EV | GP revenue above mgmt fee | Credited against LP mgmt fee |\n| Directors' fees | Board compensation | Variable | GP revenue above mgmt fee | Credited against LP mgmt fee |\n\nILPA Principles 3.0 recommends 100% fee offsets as best practice. A partial offset (e.g., 80%) allows the GP to retain 20% as incremental revenue. The due diligence implication: in large buyout funds, transaction fees on a $1B+ deal can exceed $10–15M. With a 100% offset, that amount reduces the LP's management fee burden. Without an offset, it is pure GP revenue on top of management fees. Always ask: 'What is the exact offset rate, and can you show me the fee offset schedule for Fund III?' A fund that does not report this cleanly is concealing meaningful compensation.",
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
          "Fee terms determine economic sharing; governance provisions determine whether LPs can enforce alignment when it breaks down.\n\n**LPAC (Limited Partnership Advisory Committee)**\nRepresents a subset of large LPs; reviews conflicts of interest, approves unusual valuation approaches, and consents to major fund changes (term extensions, strategy modifications). LPAC has no authority over investment decisions — its role is fiduciary oversight of process and conflicts. Being a named LPAC member requires active engagement and legal resources; many LPs commit without pursuing LPAC seats, limiting their oversight capability.\n\n**Key-person provisions**\nDefine the named individuals — typically 2–4 senior partners — whose continued active engagement triggers a key-person event if they depart, reduce their time, or lose decision-making authority. A key-person event suspends the investment period pending an LP vote to continue, restructure, or wind down. Watch for loose language: 'materially involved' is weaker than 'dedicated majority of professional time.' Read this clause carefully before signing.\n\n**Clawback**\nThe GP's obligation to return carry that exceeded its ultimate entitlement is legally straightforward but operationally difficult. Clawback applies at wind-down and requires GPs to return carry distributed 7–10 years earlier — which may have been spent. Real enforceability requires escrow of 25–30% of carried interest distributions held until fund wind-down; without it, clawback is a claim on potentially illiquid former partners with limited practical recoverability.",
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
          "**What fee terms can tell you:**\n- The minimum LP return required before carry is triggered — the preferred return threshold is contractual and precise\n- The economic cost of the management fee — basis and step-down terms can be modeled to project total dollar cost over the fund life\n- Whether incentives are aligned on loss-avoidance — a GP with meaningful unfinanced fund commitment has real capital at risk on the downside, not just unrealized carry\n\n**What fee terms cannot tell you:**\n- Whether the GP will actually generate returns above the hurdle — terms indicate alignment but not skill; a perfectly structured agreement with a mediocre manager transfers less wealth only because there are fewer profits to share\n- Whether the GP will exercise conservative judgment during the catch-up window — a GP collecting 100% during catch-up technically has incentive to delay final distributions; each additional dollar of net proceeds earns them 100 cents\n- Whether clawback is economically meaningful — the legal provision exists in most LPAs; actual recoverability at wind-down depends on escrow mechanics and GP partner financial position, neither visible from the term sheet alone",
      },
      // ── Exercise ──────────────────────────────────────────────────────────
      {
        type: "exercise",
        title: "Applied exercise: comparing two fee structures",
        content:
          "Fund A: $1.5B committed, 2% on committed capital for 10 years, 20% carry above 8% compound preferred return, 100% catch-up, 80% fee offset. Fund B: $1.5B committed, 2% on committed capital during 5-year investment period then 1.5% on invested capital ($1.3B deployed), 20% carry above 8% compound preferred return, 80% catch-up, 100% fee offset. Both funds have identical investment strategies and gross return assumptions. Work through the following:\n\n1. Project total management fees for each fund over 10 years; assume $1.3B deployed by end of year 5.\n2. In Fund A, the GP earns $25M in transaction fees on a major deal in year 3 with an 80% offset. How much of this reaches LPs versus the GP? In Fund B, the same transaction generates the same fees with 100% offset. What is the difference?\n3. At exit, total LP profit above cost = $700M on each fund. Under Fund A's full catch-up, and Fund B's partial catch-up, describe how LP cash flows differ during the catch-up phase — even though the total GP carry is the same.",
      },
      // ── Meeting application ───────────────────────────────────────────────
      {
        type: "meeting-application",
        title: "In the manager meeting: five targeted questions",
        content:
          "With the incentive stack fully mapped, these questions become natural.\n\n1. **\"On the management fee, does the 2% step down at investment period close — and what is the post-investment-period base, committed or invested?\"** — Probes the largest variable in cumulative fee drag.\n2. **\"What percentage of transaction and monitoring fees is offset against the management fee — and can you show us the fee offset ledger for Fund III?\"** — Identifies hidden GP compensation; a GP who resists showing the ledger has something to disclose.\n3. **\"Is the GP catch-up full or partial — and how was it structured in your prior fund?\"** — Tests consistency between fund terms and whether the GP is hardening on LP-unfavorable structures.\n4. **\"How is the GP commitment funded — is it personal capital, a loan against future carry, or deferred management fees?\"** — The single most revealing question about whether alignment is real or nominal.\n5. **\"What clawback protection do you provide — is there an escrow, and at what percentage of carry distributions?\"** — Tests whether the legal obligation is backed by real collateral.",
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
          "Capital calls are the operational trigger of the J-curve — the mechanism by which LP cash flows into the fund and management fee drag begins accumulating before any returns are generated. (Full capital call anatomy, notice mechanics, and default provisions are in Day 1. This block focuses on how call timing shapes the J-curve.)\n\nThe call schedule is not uniform. Empirically, PE funds call capital on an S-curve: heavy front-loading in years 1–3 (typically 20–30% of commitments in year 1), continuing deployment in years 3–5 (reaching 50–85%), and lighter opportunistic calls for follow-ons and fees in harvest years. This uneven pattern matters for two reasons:\n\n1. **IRR sensitivity to early calls**: Every dollar called before it generates returns creates a drag in the IRR calculation. The earlier and larger the calls relative to the first exits, the deeper the J-curve trough.\n2. **LP liquidity planning**: An LP managing a $500M PE portfolio across 6 funds may receive 3–6 capital call notices in a single quarter during an active deployment environment — correlated across the portfolio in strong deal environments. A pacing model (covered later in this lesson) is the structural tool for managing this.",
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
          "Two funds with identical investment quality can show materially different J-curves depending on structural and operational factors. The investment implication: a GP with a shallow early J-curve is not necessarily a better performer — they may simply have used a subscription line or had one lucky early exit. Interrogate the source of any unusually shallow trough before concluding anything about quality.\n\n| Factor | Trough Effect | Mechanism |\n|---|---|---|\n| High mgmt fees on committed capital (2% × $1B) | **Deeper** | $20M/yr drag accumulates before any value creation |\n| Slow deployment | **Deeper** | Extends the window of negative net cash flow |\n| Early write-downs | **Deeper** | Marks below cost without any realized loss |\n| No subscription line | **Deeper** | LP capital called at day zero of each deal |\n| Fast deployment | **Shallower** | Compresses the gap between call and value creation |\n| High fee offsets | **Shallower** | Transaction fees credited reduce net fee drag |\n| Early profitable exits | **Shallower** | DPI builds earlier; even one strong exit changes the IRR trajectory |\n| Subscription line use | **Shallower reported** | Delays LP outflows — improves IRR optics only, not LP economics |",
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
          "A subscription line credit facility is a short-term revolving credit facility secured against uncalled LP commitments. The GP uses it to fund acquisitions immediately at deal close, then calls LP capital weeks or months later to repay the line. The J-curve implication is direct: delaying LP cash outflows shifts the IRR denominator forward in time, compressing the measured holding period and shallowing the reported trough — without changing a single investment outcome. A fund using a 6-month subscription line for all calls can report +2% IRR at year 3 while an identical fund without the line shows −1%: same deals, same exits, different reported curve.\n\n**What to notice:** A GP citing strong early-year IRR — or claiming to outperform peers at the same stage — should be asked whether both funds use the same subscription line practice. This is a J-curve shape issue here; Day 4 covers the full IRR-level mechanics of subscription line inflation, including the quantification methodology and ILPA 2017 dual-reporting guidance.",
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
          "The J-curve depth and timing differ materially across PE sub-strategies. Using the same early-year IRR benchmark across strategies produces systematically wrong conclusions.\n\n| Strategy | Fee Basis | Avg Hold | First Exits | Trough | IRR Signal Arrives | Key Caveat |\n|---|---|---|---|---|---|---|\n| Buyout | 1.5–2% committed | 3–6 yrs | Yrs 4–7 | Deep | Yrs 5–7 | Leverage amplifies both depth and recovery |\n| Growth equity | Lower, often invested | 3–5 yrs | Yrs 3–5 | Shallow | Yrs 4–6 | Less leverage; more predictable exits |\n| Venture | 2% committed | 7–12 yrs | Yrs 5–10+ | Deepest, longest | Yrs 8–12 | Year-3 VC IRR is nearly meaningless; write-offs common |\n| Secondaries | Lower; on net asset value | 2–5 yrs from purchase | Yrs 1–3 | Near-flat | Near-immediate | J-curve is largely eliminated; comparison to primary funds is invalid |\n\nNote on VC: NAVs can jump sharply on a financing round mark-up while unrealized risk remains high — the denominator effect (public market drawdown inflating apparent PE portfolio weight) is most pronounced for VC portfolios for this reason.",
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
          "A GP presents two scenarios for Fund IV at year 3: Scenario A shows −2% net IRR and 0.96x TVPI. The GP used no subscription line. Scenario B shows +3% net IRR and 1.07x TVPI. The GP used a 6-month subscription line for all calls. Both scenarios involve the same deals, same timing, same portfolio marks. Work through the following:\n\n1. Is Scenario A or B a better-performing fund? What does the IRR difference actually reflect?\n2. The GP offers the following comparison: 'Our peer fund at the same stage shows −5% net IRR — we're 8 points ahead.' The peer fund used no subscription line. What is the most likely explanation for the gap, and how would you test it?\n3. If Fund IV's first significant exit (a 2.8x gross MOIC on the largest investment) occurs in year 4, what would you expect to happen to the reported net IRR? Would this be evidence of investment skill at that point?",
      },
      // ── Meeting application ───────────────────────────────────────────────
      {
        type: "meeting-application",
        title: "In the manager meeting: five targeted questions on J-curve and calls",
        content:
          "With the J-curve framework internalized, these questions become natural checkpoints.\n\n1. **\"What is your current deployment pace against the investment period close date — and what percentage is reserved for follow-ons in existing portfolio companies?\"** — Establishes how much new-platform capacity remains versus how much capital is committed to incumbents.\n2. **\"For Fund III's current TVPI, how much is GP marks above cost versus capital actually returned?\"** — Probes whether the positive TVPI is confirmed economics or interim valuation; the DPI/RVPI split answers this directly.\n3. **\"Do you use a subscription line, and can you provide both adjusted and unadjusted IRR for Fund III?\"** — Tests whether reported IRR includes mechanical inflation.\n4. **\"When do you expect the first major exit from Fund IV — and is there a specific portfolio company where exit timing is most visible?\"** — Shifts the conversation from current metrics (mostly uninformative) to exit pipeline, where the actual performance signal lives.\n5. **\"When you say you're tracking in line with prior fund vintage — are you comparing adjusted or unadjusted IRR, and are the prior funds also at the same stage of economic life?\"** — Identifies whether the 'prior fund' comparison is valid or misleading.",
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
      // ── Meeting cold open ─────────────────────────────────────────────────
      {
        type: "intro",
        title: "Meeting cold open",
        content:
          "A GP opens their Fund III presentation with: 'Net IRR is 22.4% — top quartile for the 2018 vintage, 600 basis points above the Cambridge Associates buyout median.' A cautious LP writes it down. A fluent one asks immediately: 'Is that adjusted for subscription line use? What is the net MOIC alongside that IRR? And is the Cambridge comparison using funds at the same stage of economic life, or the fully realized vintage universe?' Three questions that unpack whether 22.4% is clean or mechanically inflated, whether it represents LP wealth creation or merely fast deployment timing, and whether the peer comparison is valid or misleading. This lesson builds the analytical framework behind every one of those questions.",
      },
      // ── Framing ───────────────────────────────────────────────────────────
      {
        type: "framing",
        title: "IRR: the right metric and the wrong one",
        content:
          "IRR is the dominant PE performance metric because it captures both the magnitude and timing of returns in a single annualized figure. It is also the most gamed metric in private equity. The same investments, the same exits, the same economic outcomes can produce materially different reported IRRs depending on subscription line use, capital recycling provisions, early exit concentration, and fee basis. A CFA charterholder trained in public equity performance measurement — where IRR has a precise, unambiguous application in DCF analysis — may assume PE IRR carries similar precision. It does not. PE IRR is sensitive to LP cash flow timing in ways that are partially operationally controlled by the GP. Fluency with IRR means knowing exactly what it measures, when its value as a signal is high, when it is low or distorted, and what complementary metrics are necessary to complete the performance picture.",
      },
      // ── Teaching blocks ───────────────────────────────────────────────────
      {
        type: "teaching",
        title: "IRR mechanics: the annualized discount rate on LP cash flows",
        content:
          "IRR is the annualized discount rate r that makes the net present value of all fund cash flows equal to zero: NPV = sum of [CF_t / (1 + r)^t] = 0, where CF_t is the net cash flow at each period t — negative for capital calls, positive for distributions. At the measurement date, remaining NAV is treated as a terminal cash flow (as if it were distributed). The IRR calculation iterates to find the single rate satisfying this equality. Key mathematical properties: (1) IRR is time-sensitive — a $5M return in year 1 contributes the same NPV as a much larger return in year 5 at the same IRR. This is not a flaw; it reflects genuine time-value-of-money economics. (2) IRR is not capital-sensitive — a small investment that returns quickly can produce a very high IRR while contributing modest absolute LP wealth. A $10M investment returning $50M in year 1 generates ~400% IRR; a $500M investment returning $1.1B in year 7 generates ~12% IRR. The second created $600M of LP wealth versus $40M for the first. (3) Gross IRR is calculated at the investment or fund level before management fees and carried interest — it is not relevant to LP economics. Net IRR reflects actual LP cash flows after all fees; it is the only figure meaningful for LP-to-LP comparison. The gross-to-net spread at a typical 2%/20% fund with strong performance is 6–8 percentage points annually. A GP who presents gross IRR as their headline metric without noting this gap is presenting an economically misleading figure.",
      },
      {
        type: "teaching",
        title: "IRR vs. MOIC: time versus capital — what each metric captures",
        content:
          "IRR and MOIC (multiple of invested capital) measure different dimensions of return and can rank investments in opposite orders. IRR answers: at what annualized rate did my capital compound? MOIC answers: how many dollars did I receive per dollar invested? These two metrics are complementary, not redundant. A fund cannot be fully evaluated on either alone. Classic illustration of divergence: Investment A — $10M invested, $50M returned in 14 months. MOIC = 5.0x. IRR = approximately 320%. Investment B — $200M invested, $480M returned in 8 years. MOIC = 2.4x. IRR = approximately 11.5%. Investment A shows spectacular IRR and $40M of LP wealth. Investment B shows modest IRR and $280M of LP wealth. A manager who concentrates on fast, small-capital exits can show top-decile IRR while delivering less absolute LP wealth than a patient, large-capital manager. This is not hypothetical: PE funds with frequent, fast exits on small investments routinely report higher IRRs than funds that put more capital to work in complex, multi-year transformations — even when the latter create substantially more LP value. The analytical implication: always report IRR and MOIC together. A 25% net IRR with 1.65x net MOIC is a fundamentally different fund from 16% net IRR with 2.4x net MOIC. Neither is universally better — the relevant question is whether the LP's objective is maximizing annualized return (IRR) or maximizing terminal wealth (MOIC). Most institutional LPs care about both, which is why both are required.",
      },
      {
        type: "teaching",
        title: "Gross vs. net IRR: the gap and what it contains",
        content:
          "The gross-to-net IRR spread is not a simple fee subtraction — it is the cumulative present value impact of multiple fee components interacting with the timing of fund cash flows. Components of gross-to-net drag: (1) Management fees: 1.5–2% per year on committed or invested capital for 10 years, drawn before deployment generates returns. Management fee drag alone represents approximately 1.5–2.0 percentage points of IRR annually. (2) Carried interest: 20% of profits above the preferred return, paid when exits occur. In a well-performing fund with 2.0x net MOIC, carry represents approximately 4–6 additional IRR points depending on waterfall structure and profit timing. (3) Fund-level expenses: legal, accounting, audit, administration — typically 0.1–0.2% of NAV per year; smaller component. Total gross-to-net spread on a $1B fund with 22% gross IRR: management fees reduce it by approximately 1.5–2 points; carry reduces it by approximately 4–5 points; net result is 14–16% net IRR. The 6–8 point spread is structural. It narrows if gross returns are very high (carry is fixed percentage but management fee drag becomes relatively smaller); it widens if gross returns are near the hurdle (management fees are charged regardless). Key implication for LP analysis: gross IRR comparisons across managers are economically meaningless unless fee structures are identical. A GP with 22% gross and 15% net on a step-down, 100%-offset structure delivers better LP economics than one with 22% gross and 13% net on full committed-capital basis. The fee structure is not a cosmetic detail — it is a direct determinant of LP realized return.",
      },
      // ── Visual 1 ─────────────────────────────────────────────────────────
      {
        type: "visual",
        title: "Distribution Waterfall: How Gross Proceeds Become Net LP Returns",
        visualId: "fee-waterfall",
        caption:
          "The distribution waterfall (covered in Day 2) determines when and how gross proceeds flow to LPs versus GPs. In the IRR context, its importance is as the mechanism that creates gross-to-net drag: management fees are extracted continuously before exits; then the 20% carry on profits above the preferred return reduces what reaches the LP at distribution. The cumulative effect on a typical 2%/20% fund: 6–8 IRR percentage points separating gross from net.",
        whyItMatters:
          "When a GP presents gross IRR as a headline figure, the waterfall framework lets you reconstruct what the LP actually received. The gross-to-net spread is structurally determined by fee basis, carry rate, and waterfall structure — all negotiated at fund formation. A GP who presents only gross IRR without the net is presenting an economically misleading figure: the gap is not noise, it is 6–8 annualized percentage points.",
        sourceNote:
          "Gross-to-net spread mechanics: CFA Institute Private Markets and Alternative Investments curriculum; ILPA Fee Reporting Template (2016–2022 editions); ILPA Principles 3.0, Section 4 (economic terms).",
      },
      // ── Teaching blocks continued ─────────────────────────────────────────
      {
        type: "teaching",
        title: "IRR manipulation: six documented mechanisms",
        content:
          "IRR can be mechanically inflated without any change in the underlying investments or LP economics. None of these mechanisms constitute fraud when within LPA terms — but all make cross-fund IRR comparison unreliable without detailed disclosure.\n\n| # | Mechanism | How It Inflates IRR | What to Ask |\n|---|---|---|---|\n| 1 | **Subscription line credit facilities** | Delaying LP cash outflows 60–180 days compresses the measured investment period. A 90-day delay on $200M at 20% IRR = ~$9.9M of mechanical IRR benefit with no economic gain. | Request unadjusted IRR alongside reported figure (ILPA 2017 guidance) |\n| 2 | **Early exit concentration** | Small investments exited fast at high MOICs (1.5–2.0x in 12–18 months) generate outsized per-dollar IRR while large, slow positions — where most LP wealth is at stake — remain unrealized. | Compare top-3 IRR investments as % of total committed capital |\n| 3 | **Capital recycling** | Some LPAs allow early distributions to be reinvested without a new call. Paid-in remains $100M while invested capital grows to $200M — inflating multiples on subsequent exits. | Check LPA for recycling provisions and their scope |\n| 4 | **Selective benchmark comparison** | Presenting IRR against a Cambridge/Preqin median that includes fully-realized older vintages, while current fund benefits from J-curve inflection vs. a comparison set still at trough. | Confirm benchmark universe: same vintage year and same lifecycle stage |\n| 5 | **PIK and accruing preferred structures** | Portfolio companies with pay-in-kind interest or accruing preferred equity accumulate GP marks without cash realization — building apparent TVPI and IRR on non-cash income. | Identify PIK structures in portfolio company capital stacks |\n| 6 | **Expense allocation** | Allocating portfolio company management or advisory costs to fund-level accounts reduces apparent fund expenses at the expense of LP capital. | Review fund-level expense schedule against portfolio company P&Ls |",
      },
      {
        type: "teaching",
        title: "The reinvestment rate assumption: why IRR overstates multi-period compound returns",
        content:
          "IRR carries an implicit and undisclosed assumption: that all intermediate cash distributions are reinvested at the same IRR for the remainder of the fund's life. For a fund targeting 20% net IRR, this means the IRR formula treats a $50M distribution in year 3 as though it will earn 20% annually until year 10. In practice, LP alternatives — investment-grade fixed income, public equity, or the next PE commitment — may return 7–12%. This reinvestment gap means that the IRR calculation systematically overstates the actual multi-period compounding rate that a LP experiences across their full capital base. MIRR (Modified IRR) addresses this by specifying an explicit reinvestment rate for interim distributions, typically the LP's cost of capital or a conservative public equity return. MIRR is rarely reported in PE practice, but it provides a more accurate estimate of compound wealth creation. Practical implication: a PE portfolio reporting 18% composite net IRR is probably overstating actual compounding by 3–5 percentage points if distributions are reinvested in lower-returning instruments. This does not invalidate IRR as a performance metric — it is the industry standard and necessary for manager-to-manager comparison — but it does mean that LP-level wealth projections based on PE IRR unmodified tend to overestimate terminal portfolio size. MOIC provides a capital-neutral check: if IRR is 18% but MOIC is only 1.4x after 6 years, the reinvestment assumption is working overtime in the IRR calculation.",
      },
      {
        type: "teaching",
        title: "PME: the proper benchmark for PE IRR comparison",
        content:
          "Public Market Equivalent (PME) addresses the fundamental benchmarking problem in PE performance measurement. Any raw PE fund IRR is a function of both manager skill and the macro environment: a fund deploying in 2009–2013 and exiting in 2016–2020 benefited from post-GFC recovery, compressed entry multiples, rising exit multiples, and historically cheap leverage — advantages independent of investment quality. A fund deploying in 2007–2010 faced peak entry multiples, the credit crisis, and a constrained exit environment — headwinds independent of management competence. Comparing IRRs across these two contexts compares environments as much as managers. PME replicates each fund's exact LP cash flow schedule — using the same call dates and amounts, the same distribution dates and amounts — against a public index. If a LP had received their capital calls and distributions at the same times but invested in the public index instead, what would they have earned? If PE IRR exceeds PME, the manager has generated alpha over the public market alternative on matched capital and timing. Three PME methodologies in common use: (1) Kaplan-Schoar PME (Kaplan and Schoar, 2005) — ratio of terminal value of all distributions (reinvested at the public market index return) to terminal value of all capital calls (invested at the same index). A PME > 1.0 indicates PE outperformance. (2) mPME (Cambridge Associates modified PME) — adjusts Kaplan-Schoar for the 'infinite share' problem in highly distributed funds; the most widely used form in LP institutional practice. (3) Direct Alpha — computes the annualized alpha of the PE-versus-public comparison, expressed in percentage points. Kaplan and Schoar (2005) found that the average PE fund approximately matched public markets net of fees, with top-quartile funds significantly outperforming. Harris, Jenkinson, and Kaplan (2014) found consistent outperformance for buyouts specifically, averaging approximately 3% annual PME premium over S&P 500 in the 1984–2008 period. The LP implication: always request PME alongside IRR. A 20% net IRR in a 2012 vintage — when the S&P 500 returned approximately 16% annualized over the same period — represents modest alpha. A 20% net IRR in a 2016 vintage against a comparable public benchmark is more meaningful.",
      },
      // ── Visual 2 ─────────────────────────────────────────────────────────
      {
        type: "visual",
        title: "TVPI, DPI, and RVPI: IRR and Multiples Are Complementary Metrics",
        visualId: "multiples-relationship",
        caption:
          "TVPI = DPI + RVPI. A high IRR with most value in RVPI indicates fast early exits or subscription line inflation, with a large unrealized portfolio still at risk. A high MOIC with moderate IRR indicates patient, large-capital deployment. Both metrics are required to reconstruct what actually happened — IRR alone provides an incomplete picture of LP economics.",
        whyItMatters:
          "IRR and MOIC are not substitutes — they are complementary lenses on the same underlying cash flows. High IRR with low DPI and high RVPI at a mature fund stage is a warning signal: it suggests headline performance is largely unconfirmed. Cross-reading IRR against the DPI/RVPI split is a fundamental analytical discipline for any LP evaluating a manager.",
        sourceNote:
          "TVPI, DPI, RVPI definitions and interrelation: ILPA Performance Reporting Standards; IPEV Valuation Guidelines, current edition (ipev.org).",
      },
      // ── Teaching block: strategy-level IRR differences ─────────────────
      {
        type: "teaching",
        title: "IRR across PE sub-strategies: calibrating expectations",
        content:
          "IRR benchmarks differ materially across PE sub-strategies. Comparing a fund's IRR to a single 'PE median' without strategy and vintage adjustment is analytically invalid.\n\n| Strategy | Median Net IRR (mature vintage) | Top Quartile | Distribution Shape | IRR Comparability Note |\n|---|---|---|---|---|\n| Large/mid-cap buyout | 12–18% | 20%+ | Normal-ish; moderate spread | Standard CA benchmark applies; vintage and leverage era matter |\n| Small/mid-cap buyout | Higher median than mega-cap | Varies | Moderate spread | Smaller markets less efficient; single exit moves needle |\n| Growth equity | 10–15% | ~18%+ | Tighter distribution | More predictable; lower leverage |\n| Venture capital | Below buyout median (average fund) | 30–50%+ | Extreme power-law distribution | **Median VC IRR is nearly meaningless** — the average hides the power-law; top-decile drives all the value |\n| PE secondaries | Highest early-period IRR | N/A | Compressed J-curve | **Not comparable to primary funds** — J-curve eliminated because capital is deployed into mature assets |\n\nThese structural differences are why vintage-and-strategy-adjusted benchmarks — not a single PE median — are the correct reference for any individual fund IRR comparison.",
      },
      // ── Worked example ────────────────────────────────────────────────────
      {
        type: "example",
        title: "Worked example: two funds, same IRR, different outcomes",
        content:
          "Two funds, same 2016 vintage, both reporting 19% net IRR at year 8 in 2024. On raw IRR, they appear identical. Examining each through multiple lenses reveals fundamentally different performance realities. Fund Apex: $1.5B committed. Deployed $1.4B across 9 companies in 2016–2019. No subscription line. Distributed $1.89B to LPs (DPI = 1.35x). Remaining NAV = $560M (RVPI = 0.40x). TVPI = 1.75x. Net IRR = 19%. PME vs. S&P 500 = 1.09x (outperformed the public market equivalent by 9%). Fund Beacon: $1.5B committed. Deployed $1.3B. Used 12-month subscription line for all calls throughout 2016–2018. Distributed $1.30B (DPI = 1.00x). Remaining NAV = $1.17B (RVPI = 0.90x). TVPI = 1.90x. Reported net IRR = 19%. Subscription-line-adjusted net IRR = 15.5%. PME vs. S&P 500 = 0.97x (slight underperformance after adjusting for LP cash flow timing). Same reported IRR; dramatically different pictures. Apex has returned 1.35x in cash — LP money is largely back, confirmed, in the bank. Beacon has returned just 1.00x — LP capital barely back, with 0.90x of the total value sitting in a GP-marked portfolio that has not yet faced exit pricing. Apex's 19% IRR reflects genuine LP economics; Beacon's 19% is approximately 3.5 points subscription-line-inflated and nearly the full value sits in marks that have not been tested. If Beacon exits its remaining portfolio at a 20% discount to current NAV (plausible in a compressed multiple environment), its net TVPI falls from 1.90x to approximately 1.72x — still below Apex's confirmed 1.75x. The PME comparison confirms Apex as the genuine outperformer: 1.09x PME vs. 0.97x, a difference that is invisible on raw IRR alone. This example explains why institutional LPs with rigorous processes require subscription-line-adjusted IRR and PME reporting alongside headline metrics.",
      },
      // ── Visual 3 ─────────────────────────────────────────────────────────
      {
        type: "visual",
        title: "Subscription Line Effect: Same Fund, Different IRR",
        visualId: "irr-subscription-line",
        caption:
          "A 6-month subscription line delays LP capital calls by 6 months, shrinking the measured investment period and mechanically inflating reported net IRR by ~2–3 percentage points — without changing a single investment outcome. MOIC is identical; IRR is not.",
        whyItMatters:
          "When a GP reports net IRR without disclosing subscription line usage, you cannot know whether performance reflects investment skill or timing mechanics. ILPA 2017 guidance recommends GPs report both adjusted and unadjusted IRR. If a GP reports only one figure, asking which it is — and requesting the adjusted figure — is a basic due diligence step.",
        sourceNote:
          "Subscription line IRR inflation methodology: ILPA Subscription Line of Credit and Alignment of Interest Guidance (2017). Quantification of IRR impact: Phalippou, L. and Gottschalg, O. (2009), Review of Financial Studies 22(4).",
      },
      // ── Source note ───────────────────────────────────────────────────────
      {
        type: "source-note",
        title: "Sources for this lesson",
        content:
          "IRR mechanics and calculation methodology: CFA Institute, Private Markets and Alternative Investments curriculum. Gross vs. net IRR gap and fee drag components: ILPA Fee Reporting Template (2016–2022 editions); ILPA Principles 3.0, Section 4 (economic terms). Subscription line IRR inflation quantification: ILPA Subscription Line of Credit and Alignment of Interest Guidance (2017). IRR limitations, reinvestment rate assumption, and MIRR: Phalippou, L. and Gottschalg, O. (2009), 'The Performance of Private Equity Funds,' Review of Financial Studies 22(4), 1747–1776. PME methodology development: Kaplan, S. and Schoar, A. (2005), 'Private Equity Performance: Returns, Persistence, and Capital Flows,' Journal of Finance 60(4), 1791–1823. PME empirical results for buyouts: Harris, R., Jenkinson, T., and Kaplan, S. (2014), 'Private Equity Performance: What Do We Know?' Journal of Finance 69(5), 1851–1882. Cambridge Associates mPME methodology: Cambridge Associates private equity benchmarking methodology documentation. IRR vs. MOIC tradeoffs and strategy-level benchmarks: CAIA Association Level II, private equity performance measurement chapters; Preqin Global Private Equity Report, annual benchmarking methodology. Capital recycling mechanics: ILPA educational materials on fund terms and LPA provisions.",
      },
      // ── Weak vs. strong answer ────────────────────────────────────────────
      {
        type: "weak-answer",
        title: "Weak vs. strong: responding to an IRR performance claim",
        content:
          "The GP says: 'Fund III is generating 22.4% net IRR — top quartile for the 2018 vintage, 600 basis points above the Cambridge Associates buyout median.' Weak LP response: 'That is impressive. What is your target IRR for Fund IV?' Why it is weak: the LP has accepted the metric at face value, failed to probe whether the 22.4% is subscription-line-adjusted, has not asked for PME, and has not validated whether the Cambridge benchmark comparison uses comparable vintage-year and lifecycle stage. The LP has received the GP's framing uncritically. Strong LP response: 'Is that 22.4% adjusted for subscription line use, and can you provide the unadjusted figure as well? And can you show the PME — either Kaplan-Schoar or mPME against the S&P 500 — so we can assess whether that IRR represents outperformance over the public market alternative on matched cash flows? Also, is the Cambridge top-quartile comparison to fully realized 2018-vintage funds or to funds at the same stage of economic life?' Why it is strong: it identifies the three most important questions about any IRR claim — cleanliness of the metric, alpha versus the public market, and validity of the benchmark comparison universe. A GP who can answer all three questions with clear data is presenting transparently. One who deflects or lacks the data has told you something important about how they manage LP reporting.",
      },
      // ── Inference boundary ────────────────────────────────────────────────
      {
        type: "inference-boundary",
        title: "Inference boundary: what IRR can and cannot tell you",
        content:
          "**What IRR can tell you:**\n- The precise annualized rate of return on LP capital actually called and returned — this is the mathematical definition, accurate given correct cash flow data\n- The time sensitivity of the return — at the same MOIC, a higher IRR means capital was returned faster, which has genuine economic value if reinvestment alternatives exist\n- Whether the preferred return threshold has been exceeded — if net IRR is above the hurdle, the GP has triggered carry entitlement on distributions to date\n- Comparative performance across managers on a vintage-year-adjusted, PME-adjusted basis — net IRR is the primary cross-manager comparison tool when applied consistently\n\n**What IRR cannot tell you:**\n- Amount of LP wealth created — IRR is indifferent to scale; a 30% IRR on $5M and a 30% IRR on $500M are economically incomparable in absolute dollar terms\n- Investment quality without PME adjustment — vintage year conditions affect IRR independently of manager skill; two managers can produce identical IRRs through different combinations of skill and luck\n- Whether reported IRR is comparable across managers — subscription line use, recycling provisions, and denominator treatment all affect the metric without reflecting economic differences\n- The certainty of unrealized returns — a fund reporting 22% IRR at year 6 with DPI 0.3x and RVPI 1.6x has confirmed almost nothing at that IRR; the figure rests on interim marks",
      },
      // ── Exercise ──────────────────────────────────────────────────────────
      {
        type: "exercise",
        title: "Applied exercise: dissecting two fund IRR presentations",
        content:
          "Fund Anchor and Fund Bridge both closed in 2017. Both report 20% net IRR at year 8. Additional data: Fund Anchor — $800M committed, DPI 1.35x, RVPI 0.55x, no subscription line used. Fund Bridge — $800M committed, DPI 0.85x, RVPI 1.25x, used a 9-month subscription line for all calls; unadjusted IRR = 16.5%. Work through the following:\n\n1. On a confirmed LP wealth basis — dollars actually returned per dollar committed — which fund has delivered more? By how much, in dollar terms, on $800M committed?\n2. What is the most likely explanation for Fund Bridge's 3.5 percentage point gap between reported 20% and unadjusted 16.5% IRR?\n3. Fund Bridge's RVPI is 1.25x — what specific information about the remaining portfolio would you need to evaluate whether this mark is reliable?\n4. A pension fund CIO is choosing between Fund Anchor's manager and Fund Bridge's manager for a new commitment. Which fund is the stronger basis for a new commitment, and what is the single most important remaining question?",
      },
      // ── Meeting application ───────────────────────────────────────────────
      {
        type: "meeting-application",
        title: "In the manager meeting: five targeted questions on IRR",
        content:
          "With the IRR framework internalized, these questions become standard entry points for any fund performance review.\n\n1. **\"Is the net IRR you are presenting adjusted or unadjusted for subscription line use — and can you provide both figures for Fund III?\"** — Establishes whether the reported metric is comparable to managers who do not use subscription lines; a GP unable to provide both numbers cannot support a clean comparison.\n2. **\"What is your net MOIC alongside the IRR — and for each prior fund, can you show where DPI and RVPI stood at the same stage of life?\"** — Pairs the time metric with the capital metric; reveals whether a high IRR reflects broad portfolio performance or a few fast exits on small capital.\n3. **\"Can you provide PME for Fund III — either Kaplan-Schoar or Cambridge mPME against the S&P 500 — showing performance against the public market alternative on matched cash flows?\"** — The single most rigorous test of whether PE value has been created versus market beta captured; a GP who cannot produce PME data either does not track it or knows the result is unflattering.\n4. **\"On your gross-to-net spread, can you break it down between management fees, carried interest, and other fund expenses?\"** — Tests fee transparency; a GP who knows their gross-to-net spread in detail is managing LP economics carefully; one who cannot answer without looking it up is not.\n5. **\"For your top three investments by gross IRR, what percentage of total committed capital did they represent — and how does the remainder of the portfolio look on a MOIC basis?\"** — Probes whether headline IRR is concentrated in a few fast, small-capital wins while the majority of LP money earns more modest returns.",
      },
      // ── Allocator application ─────────────────────────────────────────────
      {
        type: "meeting-application",
        title: "Allocator application: portfolio-level IRR and PME construction",
        content:
          "For a portfolio allocator tracking a diversified PE program, IRR is both the primary performance tool and a structural analytical challenge. The challenge: a PE portfolio's aggregate IRR is not the arithmetic average of individual fund IRRs. Each fund has different cash flow timing, different capital scales, and different stage of economic life. Averaging fund-level IRRs produces a meaningless composite number. The correct approach is to aggregate all fund-level LP cash flows — treating each capital call as an outflow and each distribution as an inflow, with period-ending NAV as a terminal value — and compute a single portfolio-level IRR from the consolidated cash flow stream. This 'whole-portfolio IRR' correctly weights each fund by actual LP cash flow size and timing. For a mature $2B PE program, the difference between averaging individual fund IRRs and computing a consolidated portfolio IRR can be 2–4 percentage points — a material discrepancy for board reporting. Portfolio-level PME is computed similarly: replicate the entire consolidated cash flow stream against the benchmark index, compute the public return on the same LP cash flow sequence, and compare. This tells the allocator whether their entire PE program has outperformed the public market on a capital-matched, timing-matched basis — the most rigorous available measure of PE program quality. Practical requirement: individual fund reporting must include cash flows at sufficient granularity (call date and amount, distribution date and amount, NAV by quarter) to enable this consolidation. Summary metrics provided by GPs — a single annual IRR figure — are insufficient for portfolio-level analysis.",
      },
    ],
    quiz: [
      {
        questionId: "d4q1",
        type: "multiple-choice",
        prompt:
          "IRR is calculated as the discount rate that makes the NPV of all fund cash flows equal to zero. Which property of this calculation creates the most significant challenge for cross-fund comparison?",
        options: [
          "IRR uses compound interest, while MOIC uses simple interest, making them mathematically incompatible",
          "IRR is sensitive to the timing of LP cash flows, which can be partially controlled by the GP through subscription line use and exit sequencing",
          "IRR can only be calculated after all fund assets are fully realized, making interim comparisons impossible",
          "IRR double-counts management fees because they are charged on committed capital before deployment",
        ],
        correctAnswer:
          "IRR is sensitive to the timing of LP cash flows, which can be partially controlled by the GP through subscription line use and exit sequencing",
      },
      {
        questionId: "d4q2",
        type: "multiple-choice",
        prompt:
          "Fund A reports 28% gross IRR and 16% net IRR. Fund B reports 22% gross IRR and 15% net IRR. Which comparison is most analytically sound for an LP evaluating these funds?",
        options: [
          "Fund A is stronger — higher gross IRR indicates superior investment selection before fees",
          "The funds are approximately equivalent on an LP-economics basis — the 1 percentage point net difference is within normal margin of error",
          "Net IRR is the only relevant LP comparison; Fund A's 16% net may reflect a less favorable fee structure than Fund B's 15% net if gross returns differ by 6 points",
          "Fund B is stronger because a smaller gross-to-net gap of 7 points indicates better fee terms than Fund A's 12-point gap",
        ],
        correctAnswer:
          "Net IRR is the only relevant LP comparison; Fund A's 16% net may reflect a less favorable fee structure than Fund B's 15% net if gross returns differ by 6 points",
      },
      {
        questionId: "d4q3",
        type: "multiple-choice",
        prompt:
          "A GP uses a 12-month subscription line for all capital calls. A peer GP in the same vintage year does not use a subscription line. All else equal, how does this affect the comparison of their reported net IRRs?",
        options: [
          "The subscription line GP's IRR is overstated because the delayed LP cash outflows compress the effective investment period, inflating the annualized rate without improving LP economics",
          "The subscription line GP's IRR is understated because the fund incurs interest expense on the credit line, increasing the cost basis of investments",
          "Both GPs' IRRs are equally valid because the LP economics — MOIC and total distributions — are identical regardless of subscription line use",
          "The subscription line GP's IRR is only comparable after converting both funds to a committed-capital denominator basis",
        ],
        correctAnswer:
          "The subscription line GP's IRR is overstated because the delayed LP cash outflows compress the effective investment period, inflating the annualized rate without improving LP economics",
      },
      {
        questionId: "d4q4",
        type: "multiple-choice",
        prompt:
          "Investment X: $8M invested, $36M returned in 18 months (4.5x MOIC, approximately 250% IRR). Investment Y: $300M invested, $720M returned in 8 years (2.4x MOIC, approximately 11.5% IRR). Which conclusion is most accurate?",
        options: [
          "Investment X is superior — a 250% IRR dramatically exceeds Investment Y's 11.5%",
          "Investment Y created more LP wealth in absolute dollar terms ($420M vs. $28M), though Investment X's IRR is higher due to the small capital base and rapid return",
          "Investment Y is superior — the longer hold period and larger capital base indicate a more sophisticated investment strategy",
          "Both investments are equivalent for a portfolio context because IRR and MOIC are always proportional",
        ],
        correctAnswer:
          "Investment Y created more LP wealth in absolute dollar terms ($420M vs. $28M), though Investment X's IRR is higher due to the small capital base and rapid return",
      },
      {
        questionId: "d4q5",
        type: "multiple-choice",
        prompt:
          "What does a Kaplan-Schoar PME of 1.12x indicate about a PE fund's performance?",
        options: [
          "The fund returned 1.12x more than LP committed capital — equivalent to a 12% gross MOIC",
          "The fund outperformed the public market benchmark on a matched cash-flow basis: LP capital deployed in PE generated 12% more terminal value than if it had been invested in the public index at the same times",
          "The fund's net IRR exceeded the public market IRR by 1.12 percentage points on an annualized basis",
          "12% of the fund's returns are attributable to market beta and 88% to GP alpha",
        ],
        correctAnswer:
          "The fund outperformed the public market benchmark on a matched cash-flow basis: LP capital deployed in PE generated 12% more terminal value than if it had been invested in the public index at the same times",
      },
      {
        questionId: "d4q8",
        type: "short-response",
        prompt:
          "A pension fund investment committee member says: 'Our PE program is generating 19% net IRR — that is 8 percentage points above our 11% public equity return over the same period. This proves our PE allocation is adding value.' What is the analytical problem with this comparison, and what would a rigorous assessment require?",
        modelAnswer:
          "The 8-point IRR gap is not a valid measure of PE alpha over public equity because the two IRRs are calculated on different cash flow bases and timings. The pension's public equity return is typically time-weighted and reflects a continuously invested capital base, while the PE IRR is a money-weighted return on irregular capital calls and distributions over 8–10 years. To determine whether PE is adding value over the public market alternative, the correct tool is PME: replicate the pension's exact PE capital call and distribution dates and amounts against a public index, compute what the public return would have been on the same LP dollars at the same times, and compare that to the PE return. If PE PME exceeds 1.0x (or if Direct Alpha is positive), PE has generated genuine alpha on matched capital. If the public equivalent return is, say, 15% on the same cash flows, the true alpha is 4 percentage points — not 8. Without PME, the 8-point gap confuses capital weighting, vintage year effects, and market beta with actual manager-generated excess return.",
      },
      {
        questionId: "d4q9",
        type: "short-response",
        prompt:
          "Explain to a first-year analyst why averaging the net IRRs of six funds in a PE portfolio does not produce a valid portfolio-level IRR. What is the correct methodology?",
        modelAnswer:
          "Averaging individual fund IRRs is invalid because IRR is a nonlinear, cash-flow-timing-sensitive metric. A fund that called $100M early and returned $200M in year 3 (a high IRR on small capital) and a fund that called $900M and is still deploying (a low interim IRR on large capital) will average to a meaningless number because the average ignores the fact that 90% of the LP's money is in the second fund. The correct methodology is to consolidate all fund-level cash flows — treating each capital call across all funds as an outflow by date, each distribution as an inflow by date, and the sum of period-ending NAVs as a terminal value — into a single combined cash flow stream, then solve for the single IRR of that consolidated stream. This 'whole-portfolio IRR' correctly weights each fund by actual LP capital deployed and returned, not by fund count. It may differ from the simple average by 2–4 percentage points for a mature diversified PE program.",
      },
    ],
    sources: [
      "CFA Institute: Private Markets and Alternative Investments curriculum — IRR mechanics and performance measurement",
      "ILPA Subscription Line of Credit and Alignment of Interest Guidance (2017)",
      "ILPA Fee Reporting Template (2016–2022 editions) — gross-to-net decomposition",
      "Kaplan, S. and Schoar, A. (2005). 'Private Equity Performance: Returns, Persistence, and Capital Flows.' Journal of Finance 60(4), 1791–1823",
      "Harris, R., Jenkinson, T., and Kaplan, S. (2014). 'Private Equity Performance: What Do We Know?' Journal of Finance 69(5), 1851–1882",
      "Phalippou, L. and Gottschalg, O. (2009). 'The Performance of Private Equity Funds.' Review of Financial Studies 22(4), 1747–1776",
      "Cambridge Associates: mPME methodology and private equity benchmark commentary",
      "CAIA Association Level II: private equity performance measurement chapters",
      "Preqin Global Private Equity Report (annual) — net IRR benchmarks by strategy and vintage",
    ],
  },

  // ── Day 5 ──────────────────────────────────────────────────────────────────
  {
    lessonId: "day-05",
    blocks: [
      // ── Meeting cold open ─────────────────────────────────────────────────
      {
        type: "intro",
        title: "Meeting cold open",
        content:
          "At a year-8 fund review, the GP presents: 'TVPI is 1.9x, net IRR is 17%, DPI as of last quarter is 0.85x.' A junior analyst records the strong headline. A senior LP leans forward: 'With 1.9x TVPI but DPI of only 0.85x at year eight, more than half of the reported value is still in unrealized NAV. Can you walk through the composition of that RVPI? Specifically, what EV/EBITDA multiple are you applying to the three largest remaining portfolio companies, and how does that compare to comparable transaction multiples in their sectors today?' The question distinguishes confirmed return — 0.85x in cash received — from estimated return — 1.05x in interim GP marks — and probes whether the marks are defensible at current market multiples or reflect peak-cycle assumptions in a trough-cycle environment. This is what multiple literacy enables. This lesson teaches the full analytical framework.",
      },
      // ── Framing ───────────────────────────────────────────────────────────
      {
        type: "framing",
        title: "Why multiples and IRR are complementary, not redundant",
        content:
          "IRR tells you the annualized rate at which capital has compounded. The return multiples tell you how much value has been created — and critically, how much of that reported value is confirmed cash versus GP-estimated interim marks. TVPI without DPI is analytically incomplete. A fund reporting TVPI 2.0x at year three is presenting almost entirely GP-applied valuations against cost; the 'return' is provisional. The same TVPI 2.0x at year nine with DPI 1.85x is near-total confirmation in cash. The headline figure is identical; the analytical meaning is diametrically different. IRR can be inflated by subscription line mechanics; multiples are immune to that specific distortion. But multiples have their own vulnerability: RVPI is a GP-determined estimate, not a market price, and the methodologies underlying it are Level 3 fair value — management judgment reviewed by auditors, not verified by transaction. Reading multiples correctly means understanding what each of the three components captures, how they evolve across the fund lifecycle, what the RVPI valuation methodology implies about reliability, and how to use the DPI/RVPI split to evaluate any fund performance presentation.",
      },
      // ── Teaching blocks ───────────────────────────────────────────────────
      {
        type: "teaching",
        title: "TVPI: definition, denominator choices, and the all-in multiple",
        content:
          "TVPI (Total Value to Paid-In) = (cumulative LP distributions + current NAV) / paid-in capital. It is the broadest single summary of a fund's performance at any point in its life — the all-in multiple combining confirmed cash returns and estimated residual value into one figure. Paid-in capital is the ILPA-standard denominator: total LP capital actually called to date (including management fees and expenses called, not just capital deployed into investments). Some GPs report TVPI on an invested capital basis — excluding fees from the denominator — which produces a higher number. Illustration: a $1B fund with $850M called ($750M deployed + $100M in fees), $120M distributed, and $1.05B NAV. TVPI on paid-in (ILPA standard) = ($120M + $1.05B) / $850M = 1.38x. TVPI on invested capital = ($120M + $1.05B) / $750M = 1.56x. The 0.18x difference reflects denominator treatment, not performance. Before comparing TVPI across managers or against a benchmark, confirm denominator basis. A GP who presents TVPI without specifying the denominator — and who uses invested capital basis while their benchmark uses paid-in — is presenting a systematically higher number against a lower reference. This is the most common denominator misalignment in PE performance reporting.",
      },
      {
        type: "teaching",
        title: "DPI: the only confirmed number in PE performance reporting",
        content:
          "DPI (Distributions to Paid-In) = cumulative cash distributions to LPs / paid-in capital. DPI is the only metric in PE performance reporting that is fully confirmed: it represents actual cash wired to LPs, net of all carried interest and fees, and is not subject to GP valuation methodology, interim mark judgment, or audit-process-but-not-output verification. It is the LP equivalent of cash-on-cash return. DPI milestones carry specific economic meanings. DPI < 1.0x: LP has not yet recouped contributed capital in cash, regardless of what the NAV reports. DPI = 1.0x: LP has received back their full paid-in capital. DPI > 1.0x: LP has received more cash than they put in — realized profit in hand. The evolution of DPI over a fund's life follows the exit profile: effectively zero during the investment period (years 1–5); building gradually with early exits (years 4–7); accelerating in the harvest phase (years 7–10). At fund wind-down, DPI equals the final realized multiple. Any residual NAV at that point becomes the final distribution. An LP managing a $2B PE program should track DPI across all fund positions as the measure of capital available for redeployment. TVPI may show the program is 'performing well'; DPI shows whether that performance is real cash or marks. The difference is an operational planning distinction, not an academic one: DPI represents actual capital the LP can commit to a new fund; RVPI is a contingent receivable that may or may not materialize.",
      },
      // ── Visual 1 ─────────────────────────────────────────────────────────
      {
        type: "visual",
        title: "TVPI, DPI, and RVPI: The Complete Multiple Framework",
        visualId: "multiples-relationship",
        caption:
          "TVPI = DPI + RVPI. In early fund years, RVPI dominates — almost all reported value is GP-estimated interim marks. As exits accumulate (years 5–9), DPI builds and RVPI declines. A fund approaching wind-down should have DPI representing 85–95%+ of total TVPI. Persistent high RVPI in a year-8+ fund warrants close investigation of the remaining portfolio.",
        whyItMatters:
          "Separating TVPI into its DPI and RVPI components is the most important single analytical disaggregation in PE performance review. It tells you the proportion of headline performance that is confirmed versus estimated — a distinction that is invisible in the TVPI multiple alone or in the net IRR figure. Any performance presentation that leads with TVPI without immediately disclosing the DPI/RVPI split is incomplete.",
        sourceNote:
          "TVPI, DPI, RVPI definitions and denominator standards: ILPA Performance Reporting Standards (ilpa.org); IPEV Valuation Guidelines, current edition (ipev.org); ILPA Principles 3.0, Section 5 (reporting and transparency).",
      },
      // ── Teaching blocks continued ─────────────────────────────────────────
      {
        type: "teaching",
        title: "RVPI: GP-determined fair value and the limits of interim marks",
        content:
          "RVPI (Residual Value to Paid-In) = current portfolio NAV / paid-in capital. NAV is GP-determined fair value of remaining investments, calculated under FASB ASC 820 (US GAAP) or IFRS 13, using IPEV Valuation Guidelines as practical methodology. ASC 820 establishes a fair value hierarchy. Level 1: observable quoted market prices — almost never applicable for private companies. Level 2: observable inputs other than quoted prices (comparable transactions, public market multiples). Level 3: unobservable inputs — management judgment, typically EV/EBITDA applied to portfolio company EBITDA, DCF with assumed discount rates, or price of last financing round. The vast majority of PE portfolio company valuations are Level 3. This means the GP's judgment drives the RVPI number within an audit-reviewed process. Critical distinction: auditors verify that the GP followed a fair-value-compliant process (ASC 820 methodology); they do not verify whether the resulting valuation is accurate. A GP who values all remaining companies at the entry multiple (regardless of operational performance) and a GP who marks each company based on current comparable transactions and EBITDA trajectories are both ASC 820-compliant, with materially different RVPI levels. Jenkinson, Sousa, and Stucke (2013) examined GP interim valuations relative to eventual exit values and found that GPs tend on average to mark investments approximately at fair value — but with significant cross-sectional dispersion, and with evidence of strategic smoothing: marks are slow to decline when companies underperform and quick to reflect gains when they outperform. The upshot: treat RVPI as an informed estimate with a wide confidence interval, not as a market price.",
      },
      {
        type: "teaching",
        title: "How multiples evolve across the fund lifecycle: calibrating expectations",
        content:
          "Reading multiples at a given fund age requires anchoring to the lifecycle phase. A TVPI of 1.4x is a strong early signal at year 4; it is a weak signal at year 9. The table below gives buyout fund calibration benchmarks.\n\n| Fund Age | Phase | Typical DPI | Typical TVPI | RVPI Character | Signal Quality |\n|---|---|---|---|---|---|\n| Yrs 1–2 | Early deployment | 0 | ~1.0x or below | NAV at cost minus fees | None — structural only |\n| Yrs 3–4 | Deployment peak | 0–0.1x | 1.0–1.25x | Carries essentially all reported value | Deployment pace only |\n| Yrs 5–6 | Inv. period closing; first exits | 0.15–0.45x | 1.25–1.55x | Significant; DPI starting to build | First meaningful signal |\n| Yrs 7–8 | Active harvest | 0.8–1.4x | 1.5–2.0x | Declining toward residual | Strong signal |\n| Yrs 9–10 | Wind-down | 1.4–2.0x | Converging with DPI | Small, diminishing (holdback escrows) | Near-confirmed |\n\n**Cambridge Associates calibration:** For 2015–2018 vintage buyout funds at year 8, median DPI is in the 0.9–1.2x range. A fund materially below this range at year 8 is either pursuing a deliberate back-loaded exit strategy or encountering portfolio difficulties. Persistent high RVPI at year 8+ deserves specific scrutiny: it may indicate the GP is holding companies at inflated marks they have been unable to exit at current values.",
      },
      // ── Visual 2 ─────────────────────────────────────────────────────────
      {
        type: "visual",
        title: "IRR vs. DPI Over Fund Life: Marks vs. Cash",
        visualId: "j-curve-dpi-overlay",
        caption:
          "IRR and DPI follow different trajectories. IRR recovers from its trough as portfolio companies are marked up; DPI builds only when exits produce actual cash. The shaded zone (Yr 5–7) is where IRR commonly improves while DPI stays flat — a signal that recovery is mark-driven, not exit-driven.",
        whyItMatters:
          "A fund reporting improving IRR with flat DPI is marking up unrealized positions. The gains exist only on paper until exits confirm them. Cambridge Associates benchmark data shows median DPI for 2015–2018 vintage buyout funds at year 8 in the 0.9–1.2x range — a fund materially below that range with strong reported IRR deserves specific scrutiny.",
        sourceNote:
          "DPI evolution and median benchmarks by vintage year: Cambridge Associates Private Equity Benchmark Commentary; ILPA Performance Reporting Standards, quarterly reporting guidance.",
      },
      {
        type: "teaching",
        title: "The denominator problem: paid-in vs. committed vs. invested capital",
        content:
          "Three distinct denominators appear in PE performance reporting, and their selection materially changes the multiple — without changing a single underlying investment outcome. Confirming denominator basis is a prerequisite step before any benchmark comparison.\n\n| Denominator | What It Includes | Who Uses It | TVPI Effect |\n|---|---|---|---|\n| **Committed capital** | Full LP obligation (called + uncalled) | LPs computing own program return | Most conservative; low in early years when capital is uncalled |\n| **Paid-in capital** (ILPA standard) | LP capital actually called to date | Industry standard; CA/Preqin benchmarks | Moderate; rises as % called increases |\n| **Invested capital** (net of fees) | Capital deployed only; excludes fees/expenses | GPs seeking favorable presentation | Highest; removes fee drag from denominator |\n\n**Numerical illustration** — same fund at year 5 (Committed = $1.5B, Paid-in = $1.1B, Invested ex-fees = $0.95B; Distributions = $180M, NAV = $1.25B):\n\n| Denominator | Calculation | TVPI |\n|---|---|---|\n| Committed ($1.5B) | $1.43B / $1.5B | **0.95x** |\n| Paid-in ($1.1B) | $1.43B / $1.1B | **1.30x** |\n| Invested ($0.95B) | $1.43B / $0.95B | **1.51x** |\n\nThe 0.56x spread between committed-basis and invested-basis TVPI is entirely denominator-driven. A GP using invested capital basis against a Cambridge benchmark (paid-in basis) is presenting a systematically inflated relative figure.",
      },
      {
        type: "teaching",
        title: "Using multiples for cross-fund comparison: valid approaches and common pitfalls",
        content:
          "Multiples are more comparable across funds than IRR in one specific dimension: they are not sensitive to subscription line use or cash flow timing. A 2.0x net TVPI means the same economic outcome — two dollars returned per dollar invested — regardless of whether the fund achieved it in 7 or 12 years (though the IRR would differ dramatically).\n\n**Valid multiple comparison requires:**\n- Same denominator basis — paid-in consistently applied\n- Comparable fund age — year-4 TVPI vs. year-9 TVPI conflates lifecycle stage with performance\n- Comparable proportion of realization — a year-8 fund with DPI 1.35x, TVPI 1.75x is more reliable than one with DPI 0.45x, TVPI 1.75x; the former is near-confirmed, the latter is mostly marks\n\n**Common pitfalls in multiple comparison:**\n\n- **Vintage year effects:** Entry multiples, financing availability, and exit conditions vary significantly. A 2006-vintage fund with 1.8x TVPI deployed into 9–10x buyout multiples with aggressive leverage is a different risk-adjusted result from a 2012-vintage fund at the same multiple entering at 7–8x.\n- **Fund size effects:** A $500M fund and a $5B fund face different deal dynamics, competition, and diversification constraints. Comparing their TVPIs without acknowledging structural differences may not isolate skill.\n- **Sector concentration:** A healthcare-heavy fund and a diversified industrials fund may have structurally different multiple trajectories for the same vintage year; sector performance is part of the return, not purely skill.\n- **Confirmed-return asymmetry:** Two funds with identical TVPI but DPI 1.4x vs. DPI 0.4x represent fundamentally different states. The first has validated most of its performance in cash; the second still needs to exit at current marks. Never compare TVPIs without disaggregating DPI.",
      },
      // ── Teaching block: valuation methodologies and RVPI decomposition ────
      {
        type: "teaching",
        title: "RVPI decomposition: separating EBITDA growth from multiple expansion",
        content:
          "RVPI is a single number that can obscure fundamentally different sources of apparent value creation. A GP marking a company from $400M entry value to $560M current NAV has generated a $160M mark-up — but the source matters for predicting whether it will be confirmed at exit. Three possible drivers of the $160M increase: (1) EBITDA growth — the company grew EBITDA from $50M at entry to $70M today at the same 8x EV/EBITDA multiple, producing $70M × 8x = $560M. This is genuine operational value creation backed by cash flows; it is durable and likely to survive exit. (2) Multiple expansion — EBITDA remains $50M but sector transaction multiples rose from 8x to 11.2x: $50M × 11.2x = $560M. This is market-driven rather than operational; it will reverse if multiples normalize at exit. (3) A combination — EBITDA grew 20% to $60M, but the mark also applies the current sector average of 9.3x instead of the 8x at entry: $60M × 9.3x = $558M. Approximately $60M of the gain is operational (EBITDA growth at entry multiple); the remaining $100M is multiple expansion that has not been 'earned' through operational improvements. Distinguishing these sources requires company-level data that GPs typically share in annual reports but not always in quarterly updates. In a due diligence meeting, asking 'What percentage of the NAV mark-up in your current portfolio reflects EBITDA growth at entry multiples versus re-rating to current sector multiples?' is one of the highest-signal questions an LP can ask about RVPI quality.",
      },
      // ── Worked example ────────────────────────────────────────────────────
      {
        type: "example",
        title: "Worked example: reading fund metrics side by side across two GPs",
        content:
          "An LP is reviewing two 2016-vintage buyout managers for a new fund commitment in 2024 (year 8 of each fund). Both have $2.0B committed. Manager Crest (Fund III, 2016 vintage, year 8): Paid-in: $1.9B (95% called). Distributions: $2.28B. NAV: $0.57B. DPI: $2.28B / $1.9B = 1.20x. RVPI: $0.57B / $1.9B = 0.30x. TVPI: 1.50x. Net IRR: 13.5%. 3 of 10 companies remain in portfolio; largest is 40% of remaining NAV. Fee basis: invested capital post-year-5. Manager Dune (Fund III, 2016 vintage, year 8): Paid-in: $1.85B. Distributions: $1.85B. NAV: $1.48B. DPI: $1.85B / $1.85B = 1.00x. RVPI: $1.48B / $1.85B = 0.80x. TVPI: 1.80x. Net IRR: 18.2%. 6 of 11 companies remain in portfolio. Valuation basis: 11.5x EV/EBITDA vs. sector comparables at 9x. Fee basis: paid-in capital throughout (no step-down). Initial impression: Dune looks much stronger — 1.80x TVPI vs. 1.50x, 18.2% vs. 13.5% IRR. Disaggregation tells a more complex story. Crest: DPI 1.20x at year 8 means $1.20 in cash returned per LP dollar called — above the Cambridge Associates median (0.9–1.2x) for 2016-vintage buyout funds. RVPI 0.30x is a manageable residual on 3 remaining companies. Even a 30% markdown on remaining NAV would reduce TVPI from 1.50x to only 1.41x — the floor is visible and well-supported by confirmed cash. Dune: DPI 1.00x at year 8 — LP has just recouped paid-in capital in cash. RVPI 0.80x is by far the dominant value driver. The 6 remaining companies are marked at 11.5x EV/EBITDA against a sector where comparable transactions are pricing at 9x — a 28% multiple premium embedded in the marks. Stress test: apply 9x to the same EBITDA base (holding EBITDA flat — no operational assumption). Revised NAV = $1.48B × (9 / 11.5) = $1.16B. Revised RVPI = $1.16B / $1.85B = 0.63x. Revised TVPI = 1.63x. Under this conservative scenario, Dune's adjusted TVPI of 1.63x and Crest's confirmed 1.50x (plus residual 0.30x) are much closer. Dune's 18.2% IRR premium over Crest's 13.5% should also be tested: Dune's fee basis (no step-down on committed capital) creates higher management fee drag that partially offsets the apparent TVPI advantage. The correct conclusion: Crest has delivered a more confirmed return with lower residual risk; Dune shows a higher headline but the majority of the performance story has yet to be tested by the market. The question for Fund IV is which manager has more predictable future performance — which is a diligence question, not answerable from these metrics alone.",
      },
      // ── Visual 3 ─────────────────────────────────────────────────────────
      {
        type: "visual",
        title: "PE Fund Lifecycle: Where Multiples Sit at Each Phase",
        visualId: "fund-lifecycle-timeline",
        caption:
          "Overlaying the multiples on the lifecycle: DPI = 0 through most of the investment period; builds during early harvest; accelerates in the main harvest phase. RVPI peaks near investment period close (where all value is marks and none is cash), then systematically declines as exits convert marks to confirmed distributions. At wind-down, DPI should approximately equal total TVPI.",
        whyItMatters:
          "Locating a fund's current DPI and RVPI within the lifecycle phase provides essential temporal context for any multiple interpretation. TVPI 1.4x is a strong signal at year 4 and a weak signal at year 9. RVPI 0.8x at year 4 is structurally expected; at year 9 it is a monitoring flag requiring explanation.",
        sourceNote:
          "Fund lifecycle phases and typical multiple trajectories: CAIA Association Level II, private equity performance chapters; Cambridge Associates PE benchmark commentary, DPI and TVPI distribution data by vintage year.",
      },
      // ── Source note ───────────────────────────────────────────────────────
      {
        type: "source-note",
        title: "Sources for this lesson",
        content:
          "TVPI, DPI, RVPI definitions and denominator standards: ILPA Performance Reporting Standards (ilpa.org); ILPA Principles 3.0, Section 5 (reporting and transparency). IPEV Valuation Guidelines (ipev.org) — fair value methodology for Level 3 assets including EV/EBITDA and DCF approaches. FASB ASC 820 Fair Value Measurement hierarchy; IFRS 13 (international equivalent). Cambridge Associates Private Equity Benchmark Commentary — median DPI and TVPI by vintage year and fund age, historical calibration data. Interim mark accuracy and GP valuation behavior: Jenkinson, T., Sousa, M., and Stucke, R. (2013), 'How Fair Are the Valuations of Private Equity Funds?' SSRN Working Paper 2229547. Performance reporting denominator practices: ILPA Fee Reporting Template and accompanying technical notes; Preqin GP benchmarking methodology documentation. Multiple expansion vs. EBITDA growth decomposition: CAIA Association Level II, buyout value creation frameworks; CFA Institute Private Markets and Alternative Investments curriculum.",
      },
      // ── Weak vs. strong answer ────────────────────────────────────────────
      {
        type: "weak-answer",
        title: "Weak vs. strong: responding to a TVPI-led performance presentation",
        content:
          "The GP opens with: 'Fund III TVPI is 1.9x with 18% net IRR — clearly top-quartile performance.' Weak LP response: 'That is really strong. What is your strategy for Fund IV — are you maintaining the same sector focus?' Why it is weak: the LP has accepted the headline without disaggregating the metric, asked nothing about the DPI/RVPI split, and moved on to the next fund without understanding whether the 1.9x is confirmed or estimated. Strong LP response: 'Can you break down that 1.9x between DPI and RVPI? For a fund at year eight, I would expect DPI to be carrying the majority of that — where do you stand, and what is the composition of the remaining RVPI in terms of number of companies, their marks versus sector comparables, and your expected exit timeline?' Why it is strong: it immediately disaggregates the headline into its confirmed and estimated components, establishes the LP's expectation for what the DPI/RVPI split should look like at year eight, and requests the three pieces of information (mark methodology, sector comparables, exit timeline) needed to evaluate the RVPI reliability. A GP who can answer this question fully and confidently — with specific multiples, company-level color, and a credible exit schedule — is presenting a defensible performance picture. One who deflects or gives only vague answers about 'strong pipeline' is signaling that the marks have not been stress-tested.",
      },
      // ── Inference boundary ────────────────────────────────────────────────
      {
        type: "inference-boundary",
        title: "Inference boundary: what multiples can and cannot tell you",
        content:
          "**What multiples can tell you:**\n- TVPI as a comprehensive value summary — combining confirmed distributions and current estimated residual into the most complete single multiple available at any lifecycle stage\n- DPI as the confirmed floor — DPI is actual cash received; it cannot be restated or revised downward\n- The DPI/RVPI split reveals what proportion of performance is confirmed versus estimated; a year-9 fund with DPI 1.6x and RVPI 0.2x has nearly fully validated its returns\n- Fund maturity relative to benchmark — comparing DPI to Cambridge Associates vintage-year medians diagnoses whether harvest pace is normal, ahead, or behind\n\n**What multiples cannot tell you:**\n- Whether RVPI marks will be confirmed at exit — Jenkinson, Sousa, and Stucke (2013) found average GP marks broadly accurate in the cross-section but with meaningful upward bias for struggling companies specifically\n- Whether TVPI growth reflects operational value creation or market multiple expansion — decomposing the source requires company-level data beyond what quarterly reports provide\n- Whether the GP's valuation methodology is conservative or aggressive — two GPs using the same ASC 820 framework with different EBITDA and multiple assumptions can produce very different RVPI for economically similar portfolios\n- Whether future performance will match current trajectory — portfolio concentration, GP team changes, exit market conditions, and macro environment all affect final TVPI in ways not visible from current multiples",
      },
      // ── Exercise ──────────────────────────────────────────────────────────
      {
        type: "exercise",
        title: "Applied exercise: stress-testing a fund's multiples",
        content:
          "A $1.5B committed buyout fund is in year 7. Paid-in: $1.4B. Distributions: $980M. NAV: $1.12B. 5 of 10 original companies remain. The GP reports TVPI using an 'invested capital' denominator of $1.25B (net of fees called). Work through the following:\n\n1. Compute DPI and RVPI on the ILPA-standard paid-in denominator of $1.4B, and confirm they sum to TVPI. Then compute TVPI on the GP's reported invested capital basis. What is the denominator-driven difference?\n2. The largest remaining company is marked at $560M — 50% of NAV. It was acquired at 9x EV/EBITDA on $50M trailing EBITDA. Today, trailing EBITDA has declined 10% to $45M, but the GP is applying 11x forward EBITDA (consensus forward EBITDA: $55M). At entry-comparable trailing EBITDA at a 9x multiple, what would this company be worth? What happens to the fund's TVPI and RVPI under that scenario?\n3. If the revised NAV for all remaining companies is $840M rather than $1.12B (a 25% markdown reflecting exit-realistic multiples), what is the revised TVPI on a paid-in capital basis?\n4. Compare the original reported TVPI to the two revised scenarios. What does this tell you about the risk embedded in RVPI at a 25% discount?",
      },
      // ── Meeting application ───────────────────────────────────────────────
      {
        type: "meeting-application",
        title: "In the manager meeting: five targeted questions on multiples",
        content:
          "With the multiples framework internalized, these questions become natural checkpoints in any fund review.\n\n1. **\"Can you break down your current TVPI into DPI and RVPI — and for a fund at this lifecycle stage, what DPI do you expect to reach by wind-down?\"** — Establishes the composition of headline performance and tests the GP's conviction and exit visibility.\n2. **\"For the RVPI component, what valuation methodology are you applying to the three largest remaining companies — and what current sector comparables are you using as the multiple anchor?\"** — Forces the GP to defend Level 3 assumptions and reveals whether marks reflect current transaction markets or peak-cycle multiples applied without adjustment.\n3. **\"Is your TVPI reported on paid-in capital or invested capital basis — and does the denominator include management fees and expenses called, per ILPA standards?\"** — Confirms denominator consistency before any benchmark comparison; a GP using invested capital basis against a Cambridge benchmark (paid-in basis) is presenting an inflated relative figure.\n4. **\"How does your current DPI compare to the Cambridge Associates median for your vintage year at this fund age?\"** — Benchmarks confirmed returns against a standard reference; a GP who does not know this number has not prepared the LP-relevant comparison an institutional review requires.\n5. **\"For the companies still in RVPI, how much of the mark-up from entry reflects actual EBITDA growth versus sector multiple re-rating since your entry underwriting?\"** — The most analytically rigorous RVPI question: separates genuine operational value creation from market multiple expansion that will reverse at exit if multiples normalize.",
      },
      // ── Allocator application ─────────────────────────────────────────────
      {
        type: "meeting-application",
        title: "Allocator application: tracking multiples across a PE program",
        content:
          "For a portfolio allocator managing a diversified PE program, the multiples provide a cash flow accounting framework that IRR cannot. A quarterly NAV reconciliation tracks: total paid-in across all fund positions, total distributed across all positions (summing each fund's DPI × paid-in), total estimated residual NAV (summing each fund's RVPI × paid-in), and net cash position (distributed minus paid-in) indicating when the program became net-positive. The RVPI total across the portfolio should be periodically stress-tested: if all remaining marks were discounted by 20% (a conservative exit environment assumption), what happens to total portfolio TVPI? An allocator whose full program performance sits in RVPI — because the program is dominated by young funds that have not yet exited — carries a fundamentally different risk profile from one with half the value confirmed in DPI. Vintage year management is the structural tool for controlling DPI accumulation. A mature vintage (year 8+) should be generating heavy distributions that provide reinvestment capital for new commitments. A portfolio concentrated in two or three vintage years will experience an extended period of all-call-no-distribution, followed by a concentrated harvest phase — creating a lumpy DPI profile with gaps between distribution peaks. The well-constructed PE program stages vintage year entries to produce a consistent DPI stream that partially self-finances new commitments — sometimes called the 'self-funding' PE program — which larger institutional LPs deliberately structure toward over 10–15 year program development.",
      },
    ],
    quiz: [
      {
        questionId: "d5q1",
        type: "multiple-choice",
        prompt:
          "TVPI is reported on paid-in capital of $1.2B for one fund and on invested capital of $1.05B for another. Distributions and NAV are identical for both funds at $2.1B combined value. Which conclusion is correct?",
        options: [
          "The second fund has better performance — a higher TVPI on invested capital reflects superior deployment efficiency",
          "The TVPI figures are not comparable without harmonizing to the same denominator basis; the 0.15x difference is denominator-driven, not performance-driven",
          "The first fund has better performance because the ILPA paid-in standard produces a more conservative and reliable TVPI",
          "TVPI denominator choice does not affect comparison validity because both figures measure the same underlying investment outcome",
        ],
        correctAnswer:
          "The TVPI figures are not comparable without harmonizing to the same denominator basis; the 0.15x difference is denominator-driven, not performance-driven",
      },
      {
        questionId: "d5q2",
        type: "multiple-choice",
        prompt:
          "A buyout fund in year 9 reports TVPI 1.9x and DPI 0.55x. Which statement most accurately characterizes this fund's performance status?",
        options: [
          "The fund is a strong performer — 1.9x TVPI at year 9 is above the historical buyout median",
          "The fund has a significant realized-versus-estimated mismatch: only 0.55x in cash has been confirmed, while 1.35x (the RVPI component) remains in GP-marked NAV at year 9 — a late-lifecycle red flag",
          "The fund's DPI of 0.55x indicates that most LP capital has been returned, with the remainder distributed via NAV marks",
          "The fund is in the early harvest phase and the DPI will build rapidly in the next 12 months",
        ],
        correctAnswer:
          "The fund has a significant realized-versus-estimated mismatch: only 0.55x in cash has been confirmed, while 1.35x (the RVPI component) remains in GP-marked NAV at year 9 — a late-lifecycle red flag",
      },
      {
        questionId: "d5q3",
        type: "multiple-choice",
        prompt:
          "DPI = 1.0x at a fund's current reporting date. What does this precisely indicate?",
        options: [
          "The fund has returned all gross proceeds — invested capital plus all profits",
          "The fund has returned LP paid-in capital in cash distributions; LP has recouped contributed capital but not yet received any profit in cash",
          "The fund has achieved its preferred return threshold and the GP will now begin earning carried interest",
          "The fund is in the top quartile for DPI relative to its vintage year peers",
        ],
        correctAnswer:
          "The fund has returned LP paid-in capital in cash distributions; LP has recouped contributed capital but not yet received any profit in cash",
      },
      {
        questionId: "d5q4",
        type: "multiple-choice",
        prompt:
          "A GP is valuing a portfolio company using 11x EV/EBITDA when current comparable transaction multiples in the sector are 9x. The company's EBITDA is unchanged from entry. Under ASC 820, which statement is most accurate?",
        options: [
          "The GP's valuation is non-compliant because ASC 820 requires that current transaction multiples be used as the primary Level 2 input",
          "The GP's valuation may be technically ASC 820-compliant if they can document a reasonable basis for the premium, but it embeds significant exit risk if sector multiples remain at 9x",
          "The GP's valuation is automatically validated by the external auditor's sign-off on the annual financial statements",
          "The 11x multiple is appropriate because ASC 820 requires forward-looking assumptions that may anticipate multiple recovery",
        ],
        correctAnswer:
          "The GP's valuation may be technically ASC 820-compliant if they can document a reasonable basis for the premium, but it embeds significant exit risk if sector multiples remain at 9x",
      },
      {
        questionId: "d5q5",
        type: "multiple-choice",
        prompt:
          "Two funds have identical TVPI of 1.75x at year 8. Fund P has DPI 1.40x, RVPI 0.35x. Fund Q has DPI 0.55x, RVPI 1.20x. Which is the most accurate characterization?",
        options: [
          "Fund P is superior — a higher DPI confirms a larger proportion of the TVPI in cash, with minimal remaining uncertainty",
          "The funds are equivalent because TVPI is the comprehensive performance metric that subsumes both DPI and RVPI",
          "Fund Q is superior because high RVPI indicates active value creation still underway in the portfolio",
          "Neither fund can be evaluated without knowing their respective net IRRs and management fee structures",
        ],
        correctAnswer:
          "Fund P is superior — a higher DPI confirms a larger proportion of the TVPI in cash, with minimal remaining uncertainty",
      },
      {
        questionId: "d5q8",
        type: "short-response",
        prompt:
          "A GP presents Fund III with TVPI 1.85x and net IRR 16%. A colleague says: 'TVPI is the more reliable metric because unlike IRR, it is not affected by subscription line mechanics.' Evaluate this claim — is it accurate, and what limitation of TVPI does it overlook?",
        modelAnswer:
          "The claim is partially correct: TVPI (the multiple of invested capital) is indeed not affected by subscription line use, because a subscription line changes the timing of LP cash flows but does not change how many dollars the LP put in (paid-in capital denominator) or how many dollars they received back (distributions numerator). MOIC and TVPI are subscription-line-neutral metrics. However, the claim overlooks TVPI's primary vulnerability: the RVPI component of TVPI is a GP-determined fair value estimate under ASC 820, not a market-validated number. A fund with TVPI 1.85x composed of DPI 0.4x and RVPI 1.45x has 78% of its headline multiple sitting in marks that have not been confirmed through exits. Those marks could be aggressive (sector multiple expansion applied without adjustment, flat or declining EBITDA treated as though recovery is certain) or conservative. IRR's subscription line problem makes it overstate annualized rate; TVPI's RVPI problem makes it potentially overstate total value. Both metrics have vulnerabilities — in different dimensions. The complementary set — DPI (confirmed), RVPI (estimated), IRR (time-weighted), MOIC (capital-weighted), PME (alpha-adjusted) — is more robust than any single metric.",
      },
      {
        questionId: "d5q9",
        type: "short-response",
        prompt:
          "Explain to a new LP analyst why a year-9 buyout fund with TVPI 1.8x and DPI 0.6x warrants more scrutiny than a year-9 fund with TVPI 1.6x and DPI 1.45x — even though the first fund shows a higher headline multiple.",
        modelAnswer:
          "The year-9 fund with TVPI 1.8x and DPI 0.6x has 1.2x of its headline multiple — fully two-thirds of the total value — sitting in RVPI: GP-marked estimates of remaining portfolio value that have not yet been confirmed through exits. At year nine of a typical 10-year fund, a DPI of only 0.6x means the GP has returned just 60 cents per LP dollar in cash after nine years. This is dramatically below the Cambridge Associates median for 2014–2016 vintage buyout funds (approximately 0.9–1.2x DPI at year 8–9). The RVPI of 1.2x is a large, concentrated estimate — and if the remaining companies are marked at aggressive multiples relative to current comparables, the exit prices may fall well short of those marks. The fund with TVPI 1.6x and DPI 1.45x has confirmed 1.45x of its total value in cash — 91% of its headline is real. The residual RVPI of 0.15x is modest and manageable. Even a 50% markdown on the remaining NAV would reduce TVPI from 1.6x to only 1.525x — a trivial revision. The higher-TVPI fund has more total apparent value on paper, but far less certainty about whether that value will be received. For a prospective LP evaluating these two managers for a new fund, the demonstrated ability to actually return capital in cash is more relevant evidence of skill than GP-marked interim estimates.",
      },
    ],
    sources: [
      "ILPA Performance Reporting Standards — TVPI, DPI, RVPI definitions and denominator guidance (ilpa.org)",
      "ILPA Principles 3.0, Section 5 — reporting standards and transparency requirements",
      "IPEV Valuation Guidelines, current edition (ipev.org) — Level 3 fair value methodology for PE portfolio companies",
      "FASB ASC 820 — Fair Value Measurement; IFRS 13 (international equivalent)",
      "Jenkinson, T., Sousa, M., and Stucke, R. (2013). 'How Fair Are the Valuations of Private Equity Funds?' SSRN Working Paper 2229547",
      "Cambridge Associates Private Equity Benchmark Commentary — median DPI and TVPI by vintage year and fund age",
      "CAIA Association Level II: buyout value creation, multiple decomposition, and return attribution chapters",
      "CFA Institute: Private Markets and Alternative Investments curriculum — fair value and PE performance reporting",
      "Preqin Global Private Equity Report (annual) — fund multiple benchmarks by vintage, strategy, and geography",
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
