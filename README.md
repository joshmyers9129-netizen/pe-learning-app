# PE Learning App

A self-paced, client-side web app for building Private Equity fluency. Designed for CFA charterholders with public-markets backgrounds who need to get up to speed on PE concepts quickly.

---

## What it does

- Walks you through a 20-lesson curriculum covering PE fund structure, performance metrics, strategy, manager selection, portfolio construction, and more.
- After each lesson you take a short quiz, rate your confidence, and mark the lesson complete.
- A review queue surfaces flashcards and mini-cases from completed lessons, prioritized by how long ago you finished each lesson.
- A dashboard shows module progress, cards due for review, and your weakest topics.
- All state is stored in `localStorage` — no account, no backend, no data leaves your browser.

---

## Routes

| Route | Purpose |
|---|---|
| `/` | Dashboard: progress summary, next lesson, due review cards, weak topics |
| `/modules` | Full lesson list with status indicators; click to toggle or navigate |
| `/lesson/[lessonId]` | Lesson content, interactive quiz, confidence rating, mark-complete |
| `/review` | Review card queue grouped by priority or topic; dismiss cards for the day |

---

## Curriculum structure

One module: **Private Equity Foundations** (`pe-foundations`)

- **20 lessons** (Day 1–20), ~20–30 min each
- Difficulties: foundational → intermediate → advanced
- Each lesson has prerequisites, learning objectives, content blocks, and a short quiz
- **~31 review cards** (~1–2 per lesson): flashcards, mini-cases, and reteach cards

Day range overview:
- Days 1–6: Fund mechanics, GP/LP, capital calls, J-curve, IRR, multiples, fund lifecycle
- Days 7–10: Buyout, growth equity, venture, value creation, exits
- Days 11–16: Fund terms, manager selection, benchmarking (PME), portfolio construction, secondaries, co-investments
- Days 17–20: Asset allocation, reporting/NAV, ESG, synthesis

---

## Progress and review logic

**Progress** (`localStorage` key: `pe-app-progress`)
- Each lesson has a status: `not-started` | `in-progress` | `completed`
- `in-progress` and `completed` are timestamped
- Completing a lesson requires finishing the quiz and saving a confidence rating (1–5)

**Review queue** (`localStorage` key: `pe-app-review`)
- Only lessons that are `in-progress` or `completed` surface review cards
- Priority is computed from a multi-factor score combining five signals:
  - **Recency** — in-progress or completed >7 days ago scores highest; <2 days scores lowest
  - **Quiz score** — fraction of questions correct; below 0.75 adds urgency, below 0.5 adds more
  - **Confidence** — self-rating 1–5 after the quiz; ≤2 adds urgency, =3 adds a little
  - **Struggle count** — times the user hit "Still learning" on this card in review sessions
  - **Topic weakness** — average quiz score across all lessons sharing this card's topic; a weak topic area lifts every card in it
- Scores map to bands: ≥4 → high, ≥2 → medium, else → low
- Cards are sorted high → medium → low, then by day number within each band
- "Done for now" dismisses a card for the rest of the calendar day; it reappears the next day

**Quiz results** (`localStorage` key: `pe-app-quiz`) store score (fraction correct) and confidence per lesson.

---

## Local setup

```bash
git clone <repo-url>
cd pe-learning-app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Node 18+ required. No database or backend setup needed.

---

## Environment variables

Copy `.env.example` to `.env.local` (never commit `.env.local`):

```
OPENROUTER_API_KEY=
```

- `OPENROUTER_API_KEY` — your [OpenRouter](https://openrouter.ai) key. When set, an "Explain this more simply" button appears on quiz questions, the confidence-rating step, and review cards (after the answer is revealed). The button calls the OpenRouter API (model: `anthropic/claude-haiku-4-5`) and returns a structured four-part explanation tailored for someone with a public-markets background: plain-English summary, PE-practitioner context, common pitfall, and a question to ask in a manager meeting. Leave blank (or omit) to disable AI entirely.

The app works fully without AI. When the key is absent, all AI UI is hidden.

---

## Deploying to Vercel

1. Push the repo to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add environment variables in the Vercel project settings (optional):
   - `OPENROUTER_API_KEY` — set this to enable the AI helper; omit to disable
4. Deploy — no build configuration needed beyond the defaults for Next.js

Because all user data is in `localStorage`, there is nothing to provision server-side.
