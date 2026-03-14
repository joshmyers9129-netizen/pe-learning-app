# Visual and Source Standard
## PE Learning App — Premium Lesson Authoring Guidelines

---

## Purpose and Scope

This document governs authoring standards for instructional visuals and source attribution across all premium PE lessons. It applies to all three lesson types (Standard, Dense Technical, Capstone) and operates alongside the Lesson Quality Rubric — specifically as the operative guidance for Dimension 6 (Instructional Value of Visuals) and Dimension 7 (Source Grounding).

---

## 1. Visual Minimums by Lesson Type

### Type 1 · Standard Lesson

**Default:** 0–1 instructional visual.

**When a visual is required:** One visual is required when the lesson covers a concept that has a natural spatial, sequential, or quantitative structure that prose cannot convey as efficiently. Examples: the J-curve (NAV over time), the fund lifecycle (overlapping investment and harvest phases), capital call and distribution timing, TVPI decomposition. If a learner would need to sketch a diagram to understand the concept, the lesson needs one built in.

**When a visual is not required:** Primarily verbal or procedural concepts — ILPA principles framing, fiduciary duty, side letter provisions, GP clawback mechanics — have no natural geometric structure. A Standard lesson on these topics may publish without a visual and still score 4 on Dimension 6, provided the prose fully carries the concept.

**Ceiling:** No more than 1 visual in a Standard lesson. Multiple visuals in a 15–25 minute lesson compete for cognitive load and signal that the prose is working less than it should.

---

### Type 2 · Dense Technical Lesson

**Minimum:** 1 instructional visual. A Dense Technical lesson that covers quantitative mechanics with no visual scores 2 on Dimension 6 regardless of prose quality.

**Target:** 1–2 instructional visuals.

**Content requirement:** At least one visual must carry quantitative or structural content not efficiently expressible in prose alone. A worked distribution waterfall displayed as a table, a cashflow timeline, or an annotated IRR sensitivity chart meets this standard. A decorative chart of generic industry data does not.

**When to add a second visual:** Only when a second distinct concept in the lesson has a natural visual representation the first visual cannot serve. Do not add a second visual to justify word count or fill space. If you are uncertain whether the second visual is load-bearing, apply the removal test in Section 3.

---

### Type 3 · Capstone / Checkpoint Lesson

**Minimum:** 1 instructional visual.

**Target:** 1–2 synthesis-oriented visuals.

**Synthesis requirement:** At least one visual should organize relationships across multiple prior concepts — a comparison table, decision matrix, annotated timeline, or framework diagram. A capstone visual should show how things connect, not just how one thing works. A well-constructed comparison table contrasting American and European waterfall mechanics across 5–6 labeled dimensions is a strong capstone visual. A repetition of a diagram from a prior Standard lesson is not.

---

## 2. Types of Visuals Permitted

The app supports two categories: **original synthesized visuals** and **external cited excerpts**.

### 2.1 Original Synthesized Visuals (Preferred)

Original visuals are built as React components in `components/visuals/`, registered in `LESSON_VISUALS`, and referenced by `block.visualId`. They are purpose-built for this curriculum and carry no attribution or copyright concern.

| Subtype | Description | Appropriate For |
|---------|-------------|-----------------|
| **Timeline** | Sequential phase diagram with labeled periods and overlap callouts | Fund lifecycle, investment and harvest overlap, pacing schedules |
| **Relationship diagram** | Shows how two or more quantities combine or decompose | TVPI = DPI + RVPI, fee waterfall components, carry mechanics |
| **Annotated SVG chart** | Stylized x/y curve with labeled inflection points and zones | J-curve shape, IRR sensitivity range, distribution pacing curves |
| **Comparison table** | Side-by-side structured grid of two or more entities across dimensions | American vs. European waterfall, buyout vs. growth vs. venture, LP vs. GP economics |
| **Decision matrix** | Conditional framework for screening or choosing | Manager selection red-flag checklist, co-investment sizing framework |

**Requirement:** Every original visual must carry content not efficiently conveyed in the surrounding prose. If the visual could be removed without comprehension loss, it does not belong.

---

### 2.2 External Cited Excerpts (Use Sparingly)

External visuals — figures or tables reproduced from ILPA guidance, CFA Institute curriculum, Cambridge Associates methodology documents, Preqin reports, or named academic papers — are permissible when the original source carries pedagogical authority that a synthesized version cannot replicate.

**Permitted only when all of the following are true:**
- The source is clearly public or educational: ILPA principles documents, CFA Institute curriculum, Cambridge Associates or Preqin public releases, peer-reviewed academic papers
- The source is cited completely (see Section 4)
- A synthesized version would lose meaningful authority — e.g., the ILPA model LPA waterfall diagram carries institutional credibility that a redrawn version does not

**Not permitted:**
- Figures from proprietary GP materials, manager tear sheets, or fund pitchbooks, even with identifying information removed
- Screenshots of licensed data terminals (Bloomberg, FactSet, PitchBook)
- Figures from books or journal articles where reproduction rights have not been verified

---

## 3. What Makes a Visual Instructional Rather Than Decorative

A visual is **load-bearing** when removing it would meaningfully reduce a learner's comprehension of the lesson concept. A visual is **decorative** when its removal leaves the lesson's conceptual completeness unchanged.

Apply all four tests. A visual that fails any one of them is likely decorative.

---

**Test 1 — The removal test.**
Could a motivated CFA-level reader build a complete and accurate mental model of this concept from the surrounding prose alone, without the visual? If yes, the visual is decorative.

**Test 2 — The prose-efficiency test.**
Does the visual communicate in one glance what would take a full paragraph — with lower retention — to express in text? The fund lifecycle's overlapping investment and harvest phases, for example, are naturally spatial. Describing the overlap in prose requires two sentences and produces less durable memory than seeing it as a diagram. If prose is just as fast and clear, the visual is not earning its place.

**Test 3 — The reference test.**
Does the surrounding prose explicitly point to the visual? ("As the J-curve diagram shows," "see the TVPI decomposition above.") A visual that is never referenced in the lesson text is not participating in the explanation and is not load-bearing.

**Test 4 — The structure test.**
Does the visual reveal a spatial, sequential, or proportional relationship that text cannot show as cleanly? Timelines show simultaneity. Decomposition diagrams show composition. Annotated curves show inflection and direction. If the concept has none of these structural properties, a visual is unlikely to add more than prose.

---

### Decorative Visual Patterns to Avoid

- Generic stock imagery (currency, handshakes, office buildings)
- Pie charts of PE market composition that do not connect to the lesson's core concept
- Decorative iconography (a padlock for "illiquid," a magnifying glass for "due diligence") that adds no information
- GP pitchbook marketing diagrams reproduced without a specific instructional purpose
- Charts that visually repeat what the surrounding prose already states completely

---

## 4. Citation and Source-Note Rules for Visuals

Each visual block (`type: "visual"`) exposes three fields. All three must be populated thoughtfully; none are optional for external visuals.

---

### `caption`

A one-sentence factual description of what the visual shows. Noun phrase or short declarative. Not an editorial comment; not a restatement of the block title.

**Good:** `"Four-phase PE fund lifecycle showing the overlap of investment period and early harvesting activity."`

**Weak:** `"Fund lifecycle diagram."` — Too minimal; adds no information the title does not already carry.

**Wrong:** `"This diagram is very useful for understanding PE fund structure."` — Editorial, not descriptive.

---

### `sourceNote`

**Mandatory for external visuals.** Optional but recommended for original visuals where the underlying data or terminology comes from a specific authoritative source.

**Format for external visuals:**
```
[Organization/Author], "[Document Title]," [Year], [section or page]. Reproduced for educational use.
```
Example: `ILPA, "ILPA Principles 3.0," 2019, Exhibit 4. Reproduced for educational use.`

**Format for original visuals drawing on external data:**
```
Original synthesis; data from [Source], [Year].
```
Example: `Original synthesis; performance data from Cambridge Associates Private Equity Index, Q4 2023.`

---

### `whyItMatters`

An annotation that connects the visual to the lesson's learning objective. Must not repeat the caption. Should explain why this particular representation — rather than prose alone — advances comprehension of the concept.

**Good:** `"The overlap between investment and harvest phases is difficult to convey in text. Seeing it spatially makes clear why early portfolio company exits occur before the fund has finished deploying capital — a common source of confusion when reading quarterly reports."`

**Weak:** `"This shows how the fund lifecycle works."` — Redundant with the caption; adds no pedagogical explanation.

---

## 5. When to Use Original Synthesized vs. External Cited Visuals

| Situation | Recommendation |
|-----------|----------------|
| Concept is structural or mechanical (fund lifecycle, TVPI decomposition, waterfall flow) | **Build original** — purpose-built diagram is cleaner and avoids attribution complexity |
| Worked numeric example specific to this lesson's fund economics | **Build original** — ensures numbers are internally consistent with surrounding content |
| Pedagogical authority of a specific institutional source adds irreplaceable credibility | **Cite external** — the fact that ILPA says this is part of the lesson; a redrawn version loses that signal |
| Concept involves published industry performance data (vintage-year dispersion, IRR by strategy) | **Cite external with complete source** — synthesizing real data tables without attribution misrepresents their authority |
| Either approach works with equal instructional effectiveness | **Build original** — eliminates attribution complexity and ensures visual style consistency across the curriculum |

---

## 6. Brief-Quote and Brief-Excerpt Guidance

The `quote` block type is for attributed statements: a brief excerpt from a published source, a named practitioner formulation, or the exact language of a regulatory or standards document that carries authority in its original wording.

### When to Use a Quote Block

- The exact language of a source carries meaning that paraphrase would weaken: ILPA's definition of "appropriate alignment," the SEC's formulation of investment adviser fiduciary duty, FASB ASC 820's definition of fair value
- A named practitioner's formulation of a concept is unusually precise and attribution to the individual adds credibility that the lesson would benefit from
- A widely cited phrase from a standard-setting body (GIPS, ILPA Principles, CFA Standards of Practice) is being introduced and its exact wording matters

### Length Limits

| Usage | Maximum Length |
|-------|----------------|
| Inline attribution within prose (not a quote block) | 1–2 sentences; ≤ 40 words |
| `quote` block | 3–5 sentences; ≤ 80 words |
| Excerpt for analytical engagement (excerpt + commentary) | ≤ 100 words of original text, with equal or greater commentary |

**Hard rule:** No passage may reproduce more than 100 words from any single copyrighted source, regardless of attribution. Where longer engagement is warranted, paraphrase and cite.

### Attribution Requirements for All Quotes

Every `quote` block must carry:
1. The exact original words, unedited
2. Author name or issuing organization
3. Document title
4. Year of publication
5. Section, page, or paragraph identifier where retrievable

**Example:**
```
type: "quote"
title: "ILPA on alignment of interest"
content: "The General Partner should bear meaningful economic exposure to the same risks as the Limited Partners."
sourceNote: "ILPA, 'ILPA Principles 3.0,' 2019, Section 2: Alignment of Interest."
```

### When Not to Use a Quote Block

- General background description that is not distinctively worded — paraphrase and cite in the lesson's `sources` array
- Definitions of standard field terminology (IRR, MOIC, DPI, J-curve) — these are widely settled and do not require quotation
- Any content where the specific words are not important and an accurate paraphrase would serve as well

---

## 7. Source Notes Throughout Lessons

Source attribution in a lesson operates at two levels: **lesson-level sources** listed in the `sources` array (rendered at the bottom of the lesson page), and **inline `source-note` blocks** for specific claims within the lesson flow.

---

### 7.1 Lesson-Level `sources` Array

**Purpose:** Lists the primary authoritative materials the lesson draws from. Appears at the bottom of the rendered lesson page.

**Format:** Each entry is a plain string with enough information for a motivated learner to locate the source.

**Preferred format:**
```
"[Organization/Author], '[Title],' [Year][, section/chapter if applicable]"
```

**Authoritative source preference (in order):**

1. ILPA guidance documents (Principles, fee disclosure templates, reporting standards, model LPA)
2. CFA Institute curriculum and standards publications
3. CAIA curriculum (Level I and Level II)
4. Cambridge Associates published benchmark methodology and named index reports
5. Preqin Global Private Equity Report (dated edition)
6. Named peer-reviewed academic papers (Journal of Finance, Review of Financial Studies, Journal of Financial Economics)
7. SEC guidance documents and no-action letters (for regulatory claims)
8. Named practitioner publications (for framing and practitioner perspective; not for data or regulatory claims)

**Minimum source counts:**

| Lesson Type | Minimum | Specificity Requirement |
|-------------|---------|------------------------|
| Standard | 2–3 | Generic citations acceptable for broadly settled content |
| Dense Technical | 3–4 | At least 1 specific (section/chapter-level) citation for each technical mechanism covered |
| Capstone | 3–5 | Specific citation for each novel or contested claim introduced |

---

### 7.2 Inline `source-note` Blocks

**Purpose:** Attribute a specific data point, regulatory claim, or contested convention at the point it appears in the lesson — not just at the footer.

**When required:**
- Specific numerical data (benchmark IRR ranges, performance dispersion statistics, market size figures) where the authority of the number is part of the pedagogical value
- Regulatory or standards claims where the exact source matters (FASB ASC 820, ERISA Section 404, SEC Investment Advisers Act provisions)
- Contested conventions where the source's position is itself the lesson (e.g., explaining how Cambridge Associates' mPME methodology differs from Kaplan-Schoar PME)

**When not required:**
- Broadly settled foundational content (the J-curve concept, closed-end fund structure, carried interest mechanics)
- Claims adequately covered by a standard curriculum source already listed in the lesson `sources` array
- Material fully attributed in an adjacent `quote` block

**Format:** Short and specific. Not a full bibliographic entry — enough to direct a motivated reader to the right document.

**Example:**
```
type: "source-note"
title: "Performance benchmark"
content: "Top-quartile net IRR ranges from Cambridge Associates Private Equity Index, Q4 2023. Dispersion figures from Preqin Global PE Report 2023."
```

---

### 7.3 Paraphrased Synthesis vs. Brief Excerpt

**Default: paraphrase and cite.** All lesson content drawn from a source should be written as the lesson author's own synthesis unless the exact wording of the original is pedagogically necessary.

| Approach | When to Use | Citation Required |
|----------|-------------|-------------------|
| **Paraphrased synthesis** | All standard instructional content that builds on source material | Cite in `sources` array; add `source-note` block for specific data or contested claims |
| **Brief inline quote (≤ 40 words)** | Standard terminology as defined by a standards body; exact definitions where precision matters | Attribute inline immediately after the quote: *Source, Title, Year* |
| **Quote block (≤ 80 words)** | Formulations where the original language carries irreplaceable authority | Fully attributed `quote` block with `sourceNote` populated |

---

### Prohibited Practices

- Any passage longer than 100 words from a single copyrighted source, regardless of attribution
- Unattributed specific claims about performance data, market conventions, or regulatory requirements
- Presenting a source's named framework as original synthesis without attribution (e.g., presenting the ILPA fee transparency template structure as original analysis without crediting ILPA)
- Using a source's exact wording in a `teaching` block without enclosing it in a `quote` block or clearly marking it as a quotation

---

## 8. Quick Reference Checklist

Use before publishing any lesson with visuals or non-trivial source claims.

**For each visual block:**
- [ ] Visual passes the removal test — a motivated reader would miss it
- [ ] Prose references the visual explicitly by name or phrase
- [ ] `caption` is a factual description, not editorial or redundant with the block title
- [ ] `whyItMatters` explains the pedagogical purpose, not just what the visual shows
- [ ] `sourceNote` is complete and present for external visuals
- [ ] External visuals are from public/educational sources only (ILPA, CFA, CAIA, public Preqin/Cambridge Associates releases)
- [ ] No visual reproduces content from GP proprietary materials or licensed data terminals

**For quotes and excerpts:**
- [ ] Exact original wording preserved — no embedded paraphrase inside a `quote` block
- [ ] Length ≤ 80 words in a `quote` block; ≤ 40 words for an inline attribution
- [ ] No single source passage exceeds 100 words total
- [ ] Full attribution present: organization, document title, year, section identifier

**For lesson sources:**
- [ ] `sources` array meets the minimum count for the lesson type
- [ ] Dense Technical and Capstone lessons have at least one section-level specific citation
- [ ] All specific numerical claims and contested conventions have a traceable source
- [ ] `source-note` blocks are present for data points or regulatory claims introduced within the lesson body

---

*Read alongside the [Lesson Quality Rubric](./lesson-quality-rubric.md), which scores visual quality (Dimension 6) and source grounding (Dimension 7) on the 1–5 integer scale used for publication decisions.*
