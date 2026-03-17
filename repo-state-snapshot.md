# Repo State Snapshot
_Generated March 2026 — for use by a content-writing model targeting Lessons 11–20._

---

## 1. Current Repo Status

**Branch:** `claude/repo-snapshot-audit-BlRq9`

**Uncommitted changes:** None. Working tree is clean.

**Unmerged vs main:** The branch is ahead of main via PRs already merged (#18–21). No divergent unmerged commits.

**Lessons 11–15 status:** Thin. They exist in `lib/lessonContent.ts` with real (non-placeholder) content, but each has only 4–5 short blocks (intro + 2 teaching blocks + mini-case + quick exercise). No visuals, no `inference-boundary`, no `weak-answer`, no `meeting-application`, no `source-note` blocks. Quiz is 4 MC + 1 short-response. Content word count is roughly 400–600 words each, versus 3,000–5,000 words in Days 1–10. They do not meet the Dense Technical rubric standard.

**Critical additional finding:** There is a topic mismatch between `lib/modules.ts` (the curriculum map) and `lib/lessonContent.ts` for multiple lessons:
- `modules.ts` day-12 = "PME and the Benchmarking Toolkit"; `lessonContent.ts` day-12 = manager selection content
- `modules.ts` day-13 = "Manager Selection and GP Underwriting"; `lessonContent.ts` day-13 = PME/benchmarking content
- `modules.ts` day-17 = "Reporting, NAV, and Mark Integrity"; `lessonContent.ts` day-17 = illiquidity premium / PE-in-portfolio content
- `modules.ts` day-18 = "PE in the Portfolio: Allocation and the Illiquidity Premium"; `lessonContent.ts` day-18 = NAV/marking content

Days 12–13 are topic-swapped. Days 17–18 are topic-swapped.

**Recent changes to curriculum map:** Yes. The last three commits before the PR merge updated `modules.ts` with premium-standard learning objectives for all 20 lessons, corrected topic boundaries for days 11–20, and added `subscription-line` to day-12 topics. These updates are in the curriculum map only — `lessonContent.ts` was not updated to match.

---

## 2. Content Source of Truth

| Role | File |
|---|---|
| Lesson bodies (all blocks, quizzes, sources) | `lib/lessonContent.ts` |
| Module structure / curriculum sequence | `lib/modules.ts` |
| Lesson + block schema / type definitions | `lib/types.ts` |
| Quiz structure (MC and short-response types) | `lib/types.ts` |
| Visual components registry | `components/visuals/index.ts` |
| Visual rendering components | `components/visuals/*.tsx` (8 files) |
| Source-note support | `lib/types.ts` — `source-note` is a valid `LessonBlockType`; rendered via the block renderer in `app/lesson/[lessonId]/page.tsx` |
| Quality standard | `lesson-quality-rubric.md` |
| Schema reference example | `lesson-schema.json` (Day 1 only; used as reference, not consumed at runtime) |

---

## 3. Lessons 1–15 Snapshot

**Day 1 — How Private Equity Actually Works**
- Job: Build the closed-end fund model as the analytical skeleton for all subsequent PE reasoning.
- Status: Fully premium. ~3,500 words, 10+ blocks, 2 visuals, `inference-boundary`, `weak-answer`, `meeting-application` ×2, `source-note`.
- Topics: Closed-end structure, commitment vs. called capital, unfunded commitments, fund lifecycle phases, capital flow anatomy (commitment → distribution)
- Overlap risk: Day 3 (J-curve and capital calls) — Day 1 introduces both concepts; Day 3 deepens them. Risk of partial repetition if Day 3 doesn't clearly advance the framing.

**Day 2 — GPs, LPs, and the Incentive Stack**
- Job: Explain the GP/LP relationship, management fees, carried interest, and how incentive alignment works structurally.
- Status: Fully premium (rewritten in PR #19).
- Topics: GP/LP roles, management fee mechanics, carried interest, preferred return/hurdle, incentive alignment vs. misalignment
- Overlap risk: Day 11 (waterfall/LPA economics) — Day 2 introduces carry conceptually; Day 11 needs to deepen into waterfall construction without re-teaching the basics.

**Day 3 — Capital Calls and the J-Curve**
- Job: Mechanically explain the capital call process and why net IRR goes negative before going positive.
- Status: Fully premium (PR #19).
- Topics: Capital call mechanics and notice periods, subscription line credit facilities, J-curve depth drivers, J-curve shape across strategies, DPI vs. RVPI during the trough
- Overlap risk: Day 1 (capital calls introduced), Day 4 (IRR mechanics). Day 3 must own the J-curve fully to prevent Day 4 from retreating to it.

**Day 4 — IRR: What It Measures and Where It Breaks**
- Job: Teach IRR calculation mechanics and the three ways IRR misleads in PE contexts.
- Status: Fully premium (PR #19).
- Topics: IRR calculation and timing sensitivity, gross vs. net IRR, subscription line inflation of IRR, IRR vs. MOIC tradeoffs, early-exit IRR distortion
- Overlap risk: Day 5 (TVPI/DPI/RVPI) — the DPI vs. RVPI distinction and confirmed vs. unrealized value are needed in both. Day 12 (PME) inherits IRR methodology.

**Day 5 — TVPI, DPI, and RVPI Explained**
- Job: Teach the three multiples and the DPI/RVPI split as the primary lens for evaluating GP-reported performance.
- Status: Fully premium (PR #19).
- Topics: TVPI/DPI/RVPI definitions and additive relationship, the DPI/TVPI split as a realized-vs-unrealized signal, RVPI reliability and interim NAV dependence, multiples alongside IRR
- Overlap risk: Day 1 (multiples introduced briefly as orientation), Day 12 (PME uses fund cash flows derived from the same multiples data).

**Day 6 — Fund Life Cycles and Vintage Years**
- Job: Teach how to interpret any PE fund's metrics correctly by lifecycle phase and why vintage year is the primary benchmarking axis.
- Status: Fully premium (PR #20).
- Topics: Investment period vs. harvest phase mechanics, vintage year as primary benchmarking axis, lifecycle-appropriate metrics at each phase, vintage peer group construction
- Overlap risk: Day 12/13 (benchmarking and PME heavily overlap vintage-year framing). Day 6 needs to stop at descriptive vintage framing; quantitative benchmarking is Day 12/13.

**Day 7 — Buyout Strategy Fundamentals**
- Job: Explain buyout deal selection, capital structure design, and LBO return attribution.
- Status: Fully premium (PR #20).
- Topics: Five buyout target selection criteria, capital structure and leverage amplification, three-driver value bridge (EBITDA growth, multiple expansion, leverage paydown), entry multiple interrogation
- Overlap risk: Day 9 (value creation). Day 7 introduces the value bridge; Day 9 must deepen the operational side without restating it. Day 10 (exits) inherits exit multiple mechanics from Day 7.

**Day 8 — Growth Equity vs. Buyout vs. Venture**
- Job: Compare the three sub-strategies across analytical dimensions relevant to portfolio construction and strategy drift detection.
- Status: Fully premium (PR #20).
- Topics: Six-dimension comparison (leverage, stage, control, return drivers, risk profile, benchmark), portfolio construction role of each sub-strategy, strategy drift signals, sub-strategy-appropriate J-curve expectations
- Overlap risk: Day 7 (buyout mechanics) and Day 9 (value creation) — Day 8 summarizes both in comparative form. Risk of feeling like a digest of prior lessons rather than advancing the learner.

**Day 9 — Value Creation in PE Portfolio Companies**
- Job: Distinguish the four types of EBITDA growth by repeatability and teach how to audit a GP's value creation claims.
- Status: Fully premium (PR #20).
- Topics: Four forms of EBITDA growth (organic margin, revenue, acquisition, financial engineering), operating partner substance vs. marketing, value creation red flags, portfolio-level auditing of GP claims
- Overlap risk: Day 7 (value bridge introduced there). Day 9 needs to extend from attribution math to operational audit skill, not re-explain the bridge.

**Day 10 — Exit Paths: Trade Sales, IPOs, and Secondaries**
- Job: Explain exit mechanics and valuation dynamics for each route and quantify the IRR/MOIC tradeoff in exit timing.
- Status: Fully premium (PR #20).
- Topics: Trade sale, IPO, sponsor-to-sponsor secondary mechanics, IRR/MOIC timing tradeoff arithmetic, secondary buyout as portfolio quality signal, exit pattern analysis as diligence input
- Overlap risk: Day 15 (secondary market). Day 10 covers secondary buyout as an exit; Day 15 covers the secondary LP market. The distinction must be made explicit — modules.ts correctly flags this in Day 15's objectives.

**Day 11 — Distribution Waterfalls and LPA Economics**
_(Module title; content is LPA governance terms, not waterfall construction)_
- Job (per modules.ts): Construct American and European waterfalls, compute catch-up and clawback mechanics.
- Status: **Thin and topic-mismatched.** Content covers LPA governance terms (key man, no-fault divorce, LPAC, MFN, side letters, fee offsets) but does NOT include waterfall construction or numeric calculations. The `modules.ts` learning objectives are not fulfilled by the current content.
- Topics covered (actual): Management fee structure, catch-up clause (brief), clawback (definition only), fee offset rates, key man clause, MFN, side letters
- Overlap risk: Day 2 (carry and management fee). The content in Day 11 substantially retreads Day 2's incentive stack coverage without adding waterfall math.

**Day 12 — PME and the Benchmarking Toolkit**
_(Module title; content is actually manager selection)_
- Job (per modules.ts): Calculate KS-PME, distinguish PME variants, identify peer benchmark distortions, quantify subscription line IRR inflation.
- Status: **Thin and topic-swapped.** The `lessonContent.ts` day-12 content is a manager selection lesson ("where most institutional alpha is made or lost"), covering the four-dimension evaluation framework, track record concentration, and fund-size creep. It is not a PME lesson.
- Topics covered (actual): Four-dimension manager evaluation (people/process/performance/portfolio), track record concentration, luck vs. skill, strategy drift and fund-size creep
- Overlap risk: Day 13 (which contains the PME content that should be here).

**Day 13 — Manager Selection and GP Underwriting**
_(Module title; content is actually PME/benchmarking)_
- Job (per modules.ts): Apply a four-dimension evaluation framework, decompose track record attribution, recognize drift and team risk.
- Status: **Thin and topic-swapped.** The `lessonContent.ts` day-13 content is a benchmarking lesson covering peer benchmarks, survivorship bias, and PME methodology. It is not a manager selection lesson.
- Topics covered (actual): Vintage-year peer benchmarks and their distortions, PME definition and mechanics, survivorship bias, strategy heterogeneity in benchmark categories, mini-case of fund top-quartile vs. PME 0.82
- Overlap risk: Day 12 (which contains the manager selection content that should be here).

**Day 14 — Portfolio Construction and Commitment Pacing**
- Job: Build a pacing model framework and manage vintage-year concentration risk.
- Status: Thin. Content is directionally correct (matches module title and topics), but covers only the conceptual layer — no actual pacing model math, no over-commitment ratio calculation, no worked numeric. 5 blocks, ~500 words.
- Topics covered: Why PE allocation requires over-commitment, forward NAV projection concept, vintage diversification, over-commitment problem (endowment mini-case)
- Overlap risk: Day 6 (vintage year risk introduced there), Day 18 (PE allocation sizing). Day 14 pacing mechanics and Day 18 allocation sizing need clear subject boundaries.

**Day 15 — Secondaries: LP-Led, GP-Led, and Continuation Vehicles**
- Job: Explain pricing mechanics of LP-led secondaries, structural conflicts in GP-led deals, and the roll/sell/decline decision for continuation vehicles.
- Status: Thin but topic-aligned. Covers LP-led secondaries, GP-led and continuation vehicles, conflicts of interest in CVs. 5 blocks, ~600 words. No pricing math.
- Topics covered: LP-led secondary mechanics and pricing, GP-led secondary and CV structure, conflict of interest and LPAC protection, LP portfolio sale mini-case
- Overlap risk: Day 10 (secondary buyout as an exit). Must explicitly distinguish LP secondary market from secondary buyout exit — modules.ts learning objective #4 for Day 15 calls this out.

---

## 4. Planned Lessons 16–20 Snapshot

All five exist in `lessonContent.ts` with real (non-placeholder) content. Same thin structure as Days 11–15: 5 blocks, 4 MC + 1 short-response, ~400–600 words each.

**Days 16–20 intended subjects (from modules.ts):**

- **Day 16: "Co-investments: Economics and Adverse Selection"** — already has content on this exact topic. No swap. Teaching job: calculate net return impact of zero-fee co-invest, identify adverse selection signals, assess concentration risk, build a co-invest programme policy.

- **Day 17 (module): "Reporting, NAV, and Mark Integrity"** — content at day-17 ID covers illiquidity premium and PE allocation sizing (topics belonging to Day 18). **Swapped with Day 18.** Teaching job (per modules.ts): explain ASC 820 Level 3 valuation, quantify smoothing effect, use exit-multiple-surprise analysis, stress-test NAV credibility.

- **Day 18 (module): "PE in the Portfolio: Allocation and the Illiquidity Premium"** — content at day-18 ID covers ASC 820 NAV, smoothing, stale marks (topics belonging to Day 17). **Swapped with Day 17.** Teaching job (per modules.ts): assess empirical evidence for illiquidity premium, size PE allocation against three binding constraints, compare allocation frameworks across institution types.

- **Day 19: "GP Governance, ESG, and Ongoing LP Oversight"** — content covers ESG integration and SFDR. Governance/LPAC/ongoing oversight is lighter; ESG dominates. Teaching job (per modules.ts): identify post-commitment GP conflicts, distinguish substantive ESG from marketing, explain SFDR Article 8/9, build a monitoring framework.

- **Day 20: "Capstone: Manager Meeting Simulation"** — content is a synthesis lesson with 5 questions and a worked meeting example. On-topic but thin for a capstone. Teaching job: analyze a realistic GP presentation, integrate all prior signals into a single investment judgment, draft a commit-or-pass recommendation.

None of Days 16–20 fulfill the `modules.ts` learning objectives (which are detailed and quantitative). All are thin drafts.

---

## 5. AI Helper Status

- **Live when `OPENROUTER_API_KEY` is present:** Yes. `GET /api/ai-help` returns `{ available: true/false }` based on env var presence. The `AiHelper` component in the lesson renderer only shows if `available === true`.
- **Model called:** `anthropic/claude-haiku-4-5` via OpenRouter (`app/api/ai-help/route.ts` line 58).
- **Files controlling behavior:**
  - `app/api/ai-help/route.ts` — system prompt, model, temperature (0.4), max tokens (700)
  - `components/AiHelper.tsx` — client component, availability check, UI rendering
- **4-part teaching format:** Yes, actively in use. The system prompt in `route.ts` specifies exactly four labeled sections: "Plain-English explanation," "What this really means in PE," "Common mistake or pitfall," and "What to ask in a manager meeting."

---

## 6. Things to Know Before Writing Lessons 11–20

**Schema constraints**
- `LessonContent` requires `lessonId`, `blocks[]`, `quiz[]`, `sources[]`. No optional fields at the top level.
- `LessonBlock` has `type`, `title`, `content` (required except for `visual`), and optional fields: `visualId`, `src`, `caption`, `sourceNote`, `whyItMatters`.
- `quiz` supports two types: `MCQuestion` (requires `options[]` and `correctAnswer`) and `SRQuestion` (requires `modelAnswer`). Both require `questionId` and `type`.
- `estimatedMinutes` lives in `modules.ts`, not `lessonContent.ts`. They are decoupled — updating one does not update the other.

**Formatting constraints**
- `renderContent()` in the lesson page handles: `**bold**`, `\n\n` paragraph breaks, `- ` bullet lists, `1. ` numbered lists. **Tables are not rendered** — they will display as raw pipe-delimited text. Day 1 uses a table in the "Meeting vocabulary" block; that block renders as a prose table only if the renderer is extended. Currently it renders poorly.
- Inline markdown other than bold is not parsed (no `*italic*`, no `` `code` ``, no links).
- Nested lists are not supported.

**Block types that render especially well**
- `teaching` with `\n\n`-separated paragraphs and `- ` bullet sub-lists (clean rendering, appropriate visual weight)
- `example` with multi-step numeric worked examples using bullet or numbered list structure
- `visual` blocks with a registered `visualId` — the 8 visuals in the registry (`fund-lifecycle-timeline`, `j-curve`, `multiples-relationship`, `fee-waterfall`, `j-curve-depth-factors`, `irr-subscription-line`, `j-curve-dpi-overlay`, `irr-vs-moic`) are all interactive SVG components that render well
- `source-note` renders distinctly and is used only in Days 1–10; appropriate for all lessons with citable claims
- `meeting-application` and `weak-answer` render well and are used in Days 1–10 but absent from Days 11–20

**Block types that render poorly**
- Markdown tables (pipe-delimited) inside any block `content` field — no table parser exists; output is raw text
- Any block with `\n` single line breaks (not `\n\n`) — treated as a single paragraph, not a line break

**Content drift and README drift**
- `todo.md` describes the app as pre-lesson-renderer ("Phase 4: Seed content"). This is stale; the lesson renderer was built and is functional.
- `review-notes.md` is dated March 2026 but was written before the lesson renderer existed (it flags `lessonContent.ts` as "imported nowhere and rendered nowhere" — no longer accurate).
- `lesson-schema.json` contains only Day 1 and does not reflect current content structure (it's a reference artifact, not used at runtime).
- The critical live issue: `modules.ts` and `lessonContent.ts` are currently out of sync for days 12–13 (topic-swapped) and 17–18 (topic-swapped). If you write new content for Day 12 targeting PME, it will be served under the `day-12` lessonId, and the module page will display it with the modules.ts Day 12 title "PME and the Benchmarking Toolkit" — which is correct. But the existing `lessonContent.ts` day-12 (manager selection) needs to move to `day-13`, and vice versa. Same resolution needed for days 17 and 18. **Write against modules.ts learning objectives, not current lessonContent.ts block content.**
- Days 11–15 in modules.ts have detailed, quantitative learning objectives that were rewritten in the last PR but the lesson body content has not been updated to match. The modules.ts objectives are the authoritative spec.

---

## 7. Lessons 21–50 Roadmap Skeleton

_Note: Valuation / mark credibility (covered in Lesson 17) conceptually precedes benchmarking interpretation (Lesson 12) and NAV reporting (Lesson 18), but Lessons 1–20 remain unchanged._

---

**Lesson 21: Fund Documentation Literacy (LPA, Side Letters, MFN)**
- Objective: Build fluency with the key documents governing LP commitments. Identify the provisions that most directly affect LP economics, governance rights, and flexibility.
- Prerequisites: 2, 11
- Allocator takeaway: An LP who has not read the LPA and negotiated side-letter terms before closing is flying blind on economics and control.

---

**Lesson 22: Governance and Conflicts in Practice (LPAC, Valuations, GP-Led Actions)**
- Objective: Explain how LPACs function and the categories of conflicts they are designed to catch. Understand how valuation committees and GP-led transaction approvals interact with LP governance.
- Prerequisites: 11, 21
- Allocator takeaway: LPAC representation is only as valuable as the LP's willingness to vote against the GP and the information quality provided to make that decision.

---

**Lesson 23: Reporting and Data Quality (ILPA Templates as Allocator Infrastructure)**
- Objective: Explain the ILPA Reporting Template standard and what it enables for portfolio-level aggregation. Identify the data quality failures that make cross-GP comparison unreliable.
- Prerequisites: 5, 12, 21
- Allocator takeaway: Standardized reporting is not an administrative nicety — it is the prerequisite for running a multi-manager programme with any analytical discipline.

---

**Lesson 24: Valuation Governance for Private Assets (IPEV, ASC 820, Mark Credibility)**
- Objective: Explain the IPEV and ASC 820 frameworks and the governance structures that produce credible interim marks. Distinguish valuation methodology from valuation judgment.
- Prerequisites: 5, 17
- Allocator takeaway: A GP with no independent valuation oversight and no exit-surprise track record is asking you to trust marks that have never been tested.

---

**Lesson 25: Fund Finance Beyond Subscription Lines (NAV Facilities and Implications)**
- Objective: Explain NAV-based credit facilities — how they are structured, why GPs use them, and the LP risks they introduce. Distinguish subscription lines from NAV facilities in economic and governance terms.
- Prerequisites: 3, 11, 21
- Allocator takeaway: NAV facilities can manufacture DPI without realizing value — allocators must adjust for this when assessing fund performance.

---

**Lesson 26: Liquidity and Commitment Management Across a Multi-Sleeve Program**
- Objective: Build a liquidity framework that integrates capital call obligations, distribution expectations, and secondary optionality across multiple fund vintages and strategies. Quantify the liquidity buffer required to avoid forced selling.
- Prerequisites: 3, 14, 15, 25
- Allocator takeaway: A programme with no liquidity reserve and no secondary access plan is one bad vintage away from a forced asset sale.

---

**Lesson 27: Venture as a Power-Law Game (Return Distributions and Implications)**
- Objective: Explain why VC fund returns follow a power-law distribution and what this means for portfolio construction, manager selection, and benchmark interpretation. Contrast with buyout return distributions.
- Prerequisites: 4, 5, 8
- Allocator takeaway: VC benchmarking and manager selection logic must be rebuilt around power-law expectations — applying buyout intuitions produces the wrong decisions.

---

**Lesson 28: Venture Map and Stage Taxonomy (Seed to Growth; Fund Archetypes)**
- Objective: Map the venture ecosystem by stage and fund archetype, from pre-seed to late-stage/crossover. Identify the analytical and governance differences between stage categories that matter for allocator diligence.
- Prerequisites: 8, 27
- Allocator takeaway: Stage confusion is the most common allocator error in VC — each stage has a different return driver, risk profile, and evaluation standard.

---

**Lesson 29: Cap Tables and Ownership Math for Allocators**
- Objective: Read a cap table and calculate LP ownership, dilution, and economic entitlement through financing rounds. Understand pro rata rights and their portfolio management implications.
- Prerequisites: 28
- Allocator takeaway: An allocator who cannot read a cap table cannot assess whether a GP is defending LP economics or letting it erode.

---

**Lesson 30: Seed Instruments (SAFEs / Convertibles) and Allocator Implications**
- Objective: Explain SAFE and convertible note mechanics — conversion triggers, valuation caps, and discount rates — and translate them into LP economic impact at conversion.
- Prerequisites: 29
- Allocator takeaway: Seed instrument terms determine who captures value at Series A — allocators should understand whether the GP negotiated those terms from strength or defaulted to founder-friendly structures.

---

**Lesson 31: Preferred Terms I (Liquidation Preference and Company-Level Waterfalls)**
- Objective: Construct a company-level distribution waterfall using liquidation preference mechanics. Quantify LP economic outcomes under multiple exit scenarios including below-preference exits.
- Prerequisites: 29, 30
- Allocator takeaway: The liquidation preference stack in a late-stage company is the primary determinant of LP recovery in a flat or down exit — understand it before treating RVPI as face value.

---

**Lesson 32: Preferred Terms II (Anti-Dilution, Pro Rata, Control Rights)**
- Objective: Explain anti-dilution protection mechanics (broad-based vs. full ratchet), pro rata investment rights, and information and board control provisions. Assess how these terms affect LP outcomes in down rounds and control contests.
- Prerequisites: 31
- Allocator takeaway: Anti-dilution and control provisions separate managers who protect LP economics from those who let it drift — these terms are diligence inputs, not boilerplate.

---

**Lesson 33: Venture Valuation and Marks (Down Rounds, Structured Rounds, 409A Reality)**
- Objective: Explain how VC interim marks are set, how structured rounds can mask flat or down performance, and how 409A appraisals relate to LP-reported NAV. Identify the mark inflation techniques common in late-stage portfolios.
- Prerequisites: 24, 31, 32
- Allocator takeaway: A fund with concentrated late-stage exposure and no structured-round disclosure deserves extra scrutiny on whether RVPI reflects realisable value.

---

**Lesson 34: Venture Underwriting by Business Model and Sector**
- Objective: Apply business-model-specific underwriting logic to SaaS, marketplace, deep tech, and consumer categories. Identify the key value-creation assumptions and the failure modes specific to each model.
- Prerequisites: 28, 29
- Allocator takeaway: A GP who applies generic VC underwriting across business models is likely to be outcompeted by specialists in the sectors that require domain depth.

---

**Lesson 35: Venture Portfolio Management (Follow-Ons, Reserves, Signaling)**
- Objective: Explain GP reserve management mechanics, the follow-on decision framework, and the signaling effects of a GP's participation or non-participation in a subsequent round. Quantify the impact of reserve allocation decisions on fund-level returns.
- Prerequisites: 27, 29, 31
- Allocator takeaway: Reserve discipline is one of the clearest signals of a VC manager's portfolio management skill — ask how it is governed and who makes the call.

---

**Lesson 36: Venture Exits and Liquidity (IPO, M&A, Tenders, Secondaries)**
- Objective: Explain the mechanics and timing dynamics of each VC exit route, including lock-up implications for IPOs, tender offer structures, and secondary transactions at the company level. Quantify the LP liquidity and DPI implications of each path.
- Prerequisites: 10, 35
- Allocator takeaway: IPO is not a liquidity event for LPs until lock-up expires — DPI from VC funds is structurally delayed relative to buyout and requires a distribution policy in advance.

---

**Lesson 37: Growth Equity Mechanics (Minority Investing and Value Creation)**
- Objective: Explain growth equity deal structures, minority protections, and the return drivers specific to minority investing in high-growth businesses. Distinguish growth equity value creation logic from buyout and VC.
- Prerequisites: 8, 29, 31
- Allocator takeaway: Growth equity returns depend on revenue growth and multiple maintenance, not leverage — a GP pitching growth equity with buyout-style return attribution is misrepresenting the strategy.

---

**Lesson 38: Late-Stage Venture and Crossover Dynamics (Structure, Duration, Marks)**
- Objective: Explain the structural features of late-stage and crossover rounds, the duration and mark risk they introduce to VC portfolios, and the conflicts that arise when crossover investors hold both public and private stakes.
- Prerequisites: 33, 36, 37
- Allocator takeaway: Late-stage VC exposure extends fund duration and introduces structured instrument complexity that requires the same scrutiny as private credit.

---

**Lesson 39: Allocator Diligence for VC and Growth Managers (Evidence, Ownership, Discipline)**
- Objective: Apply a VC-specific diligence framework covering ownership concentration, reserve governance, follow-on discipline, and mark credibility. Identify the questions that separate signal from noise in a VC manager meeting.
- Prerequisites: 13, 27, 35, 38
- Allocator takeaway: VC diligence requires a different evidentiary standard than buyout — the key questions are about portfolio construction discipline and mark integrity, not leverage and EBITDA.

---

**Lesson 40: Private Credit Strategy Map (Direct Lending, Mezz, Distressed, ABF)**
- Objective: Map the private credit universe by sub-strategy, risk/return position, and structural characteristics. Establish the analytical vocabulary required before entering any sub-strategy in depth.
- Prerequisites: 8
- Allocator takeaway: Private credit is not a single strategy — conflating direct lending, distressed, and ABF in a single allocation is a portfolio construction error with meaningful risk consequences.

---

**Lesson 41: Direct Lending Underwriting (Unitranche, Collateral, Sponsor Dynamics)**
- Objective: Explain unitranche structure and economics, the underwriting variables that determine lender outcomes, and how sponsor relationships shape deal flow and pricing. Identify the credit metrics that distinguish strong from weak direct lending underwriting.
- Prerequisites: 40
- Allocator takeaway: Direct lending return quality depends entirely on underwriting discipline and sponsor alignment — a manager with concentrated exposure to one sponsor channel carries concentration risk that AUM growth compounds.

---

**Lesson 42: Credit Agreements and Lender Protections (Covenants, EBITDA Add-Backs, Cov-Lite)**
- Objective: Read a credit agreement for the provisions that matter to LP outcomes: financial covenants, EBITDA definition scope, and the implications of cov-lite structures for early intervention. Quantify the information loss to lenders in cov-lite deals.
- Prerequisites: 41
- Allocator takeaway: A GP who cannot explain their covenant package and EBITDA definition methodology in a meeting does not have adequate underwriting oversight.

---

**Lesson 43: Private Credit Portfolio Construction and Risk Measurement (Defaults, Recovery, Valuation, Liquidity)**
- Objective: Build a private credit portfolio risk framework covering default rate assumptions, recovery rate sensitivity, mark-to-model valuation risk, and liquidity mismatch. Stress-test a direct lending portfolio under a recession scenario.
- Prerequisites: 24, 41, 42
- Allocator takeaway: Private credit NAV is only as credible as the default and recovery assumptions behind it — demand stress-case disclosure, not just base-case marks.

---

**Lesson 44: Distressed and Special Situations Credit (Workouts and Control Rights)**
- Objective: Explain distressed investing strategies — pre-petition purchasing, DIP lending, and loan-to-own — and the governance rights that flow from each. Identify the analytical and legal capabilities required to execute distressed strategies with LP capital at risk.
- Prerequisites: 40, 42
- Allocator takeaway: Distressed credit is a legal and operational capability business, not just a credit business — diligence must extend beyond return history to restructuring team depth.

---

**Lesson 45: Asset-Based Finance and Specialty Credit (Different Underwriting DNA)**
- Objective: Explain the underwriting logic for asset-based finance — how collateral quality, prepayment optionality, and structural subordination replace traditional cash-flow underwriting. Identify the risk factors specific to ABF that do not apply to sponsor-backed direct lending.
- Prerequisites: 40, 41
- Allocator takeaway: ABF underwriting is collateral-first and prepayment-sensitive — allocators who apply direct lending diligence frameworks to ABF will miss the structural risks that matter.

---

**Lesson 46: Private Credit Vehicles (Closed-End vs. Evergreen; BDCs; Gating and Conflicts)**
- Objective: Compare closed-end and evergreen private credit fund structures across liquidity, fee, and governance dimensions. Explain BDC mechanics and the gating and conflict-of-interest risks specific to retail-accessible credit vehicles.
- Prerequisites: 1, 40, 43
- Allocator takeaway: Evergreen and BDC structures create liquidity mismatches that closed-end vehicles do not — the terms governing redemption and gating are the first thing to read in any private credit vehicle document.

---

**Lesson 47: Real Estate Strategy Map and Benchmarks (NPI, ODCE; Appraisal-Based Issues)**
- Objective: Map the real estate strategy universe by risk tier (core, value-add, opportunistic) and explain the NPI and ODCE benchmark methodologies and their appraisal-based limitations. Identify how benchmark construction distorts apparent volatility and correlation.
- Prerequisites: 8, 24
- Allocator takeaway: Real estate benchmark smoothing is more severe than PE — reported volatility and correlation understate actual risk, and an allocator who uses them at face value will overprice diversification.

---

**Lesson 48: Real Estate Underwriting and Risk (NOI, Cap Rates, Leases, Leverage, Refinancing)**
- Objective: Apply a real estate underwriting framework from NOI projection through cap rate selection, lease structure risk, and leveraged return attribution. Stress-test a value-add acquisition against a cap rate expansion and refinancing risk scenario.
- Prerequisites: 47
- Allocator takeaway: Cap rate assumptions and lease rollover risk are the two most commonly optimistic underwriting inputs — interrogate both before accepting a GP's projected return.

---

**Lesson 49: Real Estate Debt (Senior, Mezz, Pref; Loss Waterfalls)**
- Objective: Explain real estate capital stack construction from senior loan through mezzanine and preferred equity, including loss waterfall mechanics and the inflection points that determine LP recovery. Compare real estate debt to direct lending across risk, recovery, and structural protection dimensions.
- Prerequisites: 42, 48
- Allocator takeaway: Real estate mezz and preferred equity carry equity-like risk at credit-like nominal yields — the loss waterfall position is the only fact that matters under stress.

---

**Lesson 50: CIO-Style Private Markets Integration (Targets, Pacing, Governance, Risk, Rebalancing)**
- Objective: Integrate private markets allocation across PE, VC, private credit, and real assets into a coherent programme — setting targets, managing pacing, governing manager relationships, and rebalancing within liquidity constraints. Apply a total-portfolio risk lens to private markets concentration and correlation assumptions.
- Prerequisites: 14, 18, 26, 39, 43, 46, 49
- Allocator takeaway: The CIO job in private markets is not manager selection — it is building a programme architecture that generates the targeted exposure reliably across cycles while staying within governance and liquidity constraints.

---

## Appendices

### Sector / sub-strategy appendix
Placeholder for later buildout.

### Firms / manager archetypes appendix
Placeholder for later buildout.
