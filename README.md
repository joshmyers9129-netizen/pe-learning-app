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
- **60 review cards** (3 per lesson): flashcards, mini-cases, and reteach cards

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
- Priority is computed from time since completion: in-progress = high; >7 days = high; 2–7 days = medium; <2 days = low
- Cards are sorted high → medium → low, then by day number within each group
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
NEXT_PUBLIC_AI_ENABLED=false
OPENROUTER_API_KEY=
```

- `NEXT_PUBLIC_AI_ENABLED` — set to `true` to show AI helper buttons on lesson and review pages
- `OPENROUTER_API_KEY` — your [OpenRouter](https://openrouter.ai) key; required if AI is enabled

The app works fully without AI. When disabled, all AI UI is hidden.

---

## Deploying to Vercel

1. Push the repo to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add environment variables in the Vercel project settings:
   - `OPENROUTER_API_KEY` (if using AI)
   - `NEXT_PUBLIC_AI_ENABLED=true` (if using AI)
4. Deploy — no build configuration needed beyond the defaults for Next.js

Because all user data is in `localStorage`, there is nothing to provision server-side.
