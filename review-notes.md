# App Review Notes
_Senior product engineer + learning-design review — March 2026_

---

## A. Overall Verdict

- The data layer, content quality, and visual design are production-ready for a personal tool. The bones are solid.
- The core user journey — opening a lesson and learning from it — is completely missing. `lib/lessonContent.ts` has 1,368 lines of authored content that is never rendered.
- The review system works as a UI but has no memory (dismissals reset on refresh) and no signal from quiz performance, making the priority logic decorative.
- Modularity is better than average for a personal app, but two hardcoded values (`modules[0]` and `MODULE_ID = "pe-foundations"`) quietly prevent the multi-module architecture from working.
- This is a well-structured v0.5: great for exploring and tracking progress, not yet functional for learning.

---

## B. Scores

| Category | Score | Justification |
|---|---|---|
| Product usefulness | 2/5 | No lesson renderer means the product's core interaction — reading and doing a lesson — doesn't exist |
| Modularity / extensibility | 4/5 | Module > Lesson hierarchy is clean; two hardcoded strings block multi-module use in practice |
| Lesson/content structure | 4/5 | All 20 lessons authored with consistent 4-block + 2MC+1SR schema; sources are generic, not citable |
| Mastery tracking / review queue | 2/5 | Time-based priority only; dismissals are ephemeral; no quiz signal; no spaced repetition |
| Mobile UX | 3/5 | Clean layout but tiny status dot touch target, no iOS safe-area on NavBar, crowded review card header |
| AI helper | 1/5 | Not built; brief anticipates it; placeholder gap only |
| Code organization | 4/5 | Clean separation of concerns; two minor issues: `"use client"` in lib file, dead `moduleId` prop |
| Deployment readiness | 3/5 | Appropriate for personal use; no security headers, `^` version pinning, no `.gitignore` check |

---

## C. Top 10 Issues (by importance)

1. **No lesson detail page.** `lib/lessonContent.ts` — all 20 lessons with blocks, quiz, exercises, and visuals — is imported nowhere and rendered nowhere. The `visualId` registry (`components/visuals/index.ts`) has no consumer. The content exists only as dead data.

2. **Dismissals don't persist.** `app/review/page.tsx` — `dismissed` is local `useState`. Refreshing the page resets it. Every dismissed card reappears, making the review session feel broken on return.

3. **Quiz performance is never recorded.** `lib/types.ts` defines `QuizQuestion.correctAnswer`, but nothing reads it, scores it, or writes the result to `localStorage`. The mastery/weakness model described in `build-brief.txt` ("correctness, confidence, and recency") doesn't exist yet.

4. **Review queue priority is purely time-based.** `lib/reviewQueue.ts` lines 9–19 — `computePriority` ignores correctness and confidence entirely. An in-progress lesson immediately generates high-priority review cards even before the user has read anything. After 7 days all lessons resurface as high, regardless of demonstrated mastery.

5. **`MODULE_ID` is hardcoded in review page.** `app/review/page.tsx` line 15 — `const MODULE_ID = "pe-foundations"`. Multi-module review will silently skip all non-PE content without any error.

6. **`modules[0]` is hardcoded in modules page.** `app/modules/page.tsx` line 199 — `const currentModule = modules[0]`. Adding a second module requires UI changes, not just data.

7. **No iOS safe-area handling on NavBar.** `components/NavBar.tsx` — fixed bottom nav has no `padding-bottom: env(safe-area-inset-bottom)`. On iPhone, the home indicator overlaps the nav labels.

8. **Status dot touch target is ~10px.** `app/modules/page.tsx` lines 163–170 — the `<button>` wrapping `StatusDot` (`w-2.5 h-2.5`) has `p-0.5` padding, giving a ~13px effective tap target. Apple HIG recommends 44px minimum. This is the primary interaction on mobile.

9. **`"use client"` in a lib file.** `lib/progress.ts` line 1 — this directive is meaningful only on React components. In a plain TS module, it's harmless but misleading and technically incorrect.

10. **Dead `moduleId` prop on `FeaturedModuleCard`.** `app/modules/page.tsx` line 72 — `moduleId` is accepted as a prop but used nowhere inside the component. Dead props indicate incomplete wiring (probably intended for navigation routing).

---

## D. Top 10 Improvements (by ROI)

1. **Build `/modules/[lessonId]` lesson detail page.** This single route unlocks everything: all 20 authored lessons, 3 visuals, all quizzes, exercises, and sources. The data is 100% ready. This is the highest-leverage hour of work in the project.

2. **Persist dismissed cards to localStorage.** `lib/progress.ts` or a new `lib/reviewState.ts` — add a `dismissedCards: string[]` key. Fix the review session feeling on return. One function, ~10 lines.

3. **Auto-transition lesson status from the lesson detail page.** On open → set `in-progress`. On quiz completion → set `completed`. Removes the manual dot-toggling friction and makes the status system meaningful.

4. **Record quiz results (correct/incorrect + confidence).** Extend `LessonProgress` with `quizResults?: { questionId: string; correct: boolean; confidence: number }[]`. Feed into `computePriority`. This is the difference between time-based and mastery-based review.

5. **Fix NavBar safe-area inset.** Add `style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}` to the nav element. Two-minute fix that prevents nav content from being hidden on every iPhone.

6. **Enlarge status toggle touch target.** Increase the button padding to at least `p-3` or convert the entire `LessonRow` into a tappable element with `role="button"`. Critical for mobile use.

7. **Remove the `MODULE_ID` hardcode in review page.** Accept `moduleId` as a prop/param or derive it from a shared context. One change that unblocks multi-module review.

8. **Move `TOPIC_LABELS` to `lib/topics.ts`.** Currently in `app/review/page.tsx` lines 50–99. This is data, not UI, and will need to grow for future modules.

9. **Tighten `QuizQuestion` type.** Convert to a discriminated union: `type: "multiple-choice"` requires `options: string[]` and `correctAnswer: string` (non-optional). `type: "short-response"` has neither. Currently both fields are optional, allowing inconsistent data to pass TypeScript.

10. **Add a `/` Dashboard ("Today" view).** The build brief calls for a Dashboard/Today as the primary home screen. The current redirect to `/modules` misses the brief's intent: show today's lesson, pending review count, and streak.

---

## E. Files to Inspect First

| File | Reason |
|---|---|
| `app/modules/page.tsx` | The only functional page; hardcode at line 199, tiny touch target at line 163 |
| `lib/reviewQueue.ts` | Core priority logic; `computePriority` (lines 9–19) is the entire brain of the review system |
| `lib/lessonContent.ts` | 1,368 lines of content with no renderer — defines scope of the lesson detail page |
| `lib/types.ts` | Weak `QuizQuestion` typing; `Lesson.difficulty` typed as `string` not a union |
| `lib/progress.ts` | Persistence layer; needs extension for quiz results and dismissed cards |
| `components/visuals/index.ts` | `LESSON_VISUALS` registry has no consumer yet — shows the wiring gap |

---

## F. Recommended Next-Step Plan

### Do now
- Build `/modules/[lessonId]` — render blocks (intro/teaching/example/exercise), visual from registry, quiz (display only), sources. This makes the app actually usable.
- Fix NavBar safe-area inset (`env(safe-area-inset-bottom)`) — two minutes, affects every iPhone user.
- Persist dismissed card IDs to localStorage in `lib/progress.ts`.

### Do next
- Auto-transition lesson status on open/quiz-complete rather than requiring manual dot toggling.
- Record quiz correctness and confidence to `LessonProgress`; update `computePriority` in `reviewQueue.ts` to use it.
- Enlarge the status dot tap target or make the full lesson row tappable.
- Remove hardcoded `MODULE_ID` and `modules[0]` — pass dynamically so multi-module routing works without code changes.

### Do later
- Build a Dashboard / Today view as the proper home screen (per `build-brief.txt`).
- Move `TOPIC_LABELS` to `lib/topics.ts`.
- Tighten `QuizQuestion` to a discriminated union type.
- Add a Progress page (topic mastery heatmap, streak).
- Add spaced repetition scheduling (SM-2 or similar) once quiz data is flowing.

### Do not do yet
- AI helper integration — no value until the lesson detail loop is complete and you have quiz data worth augmenting.
- Second module content — the multi-module plumbing works; no need to author more until the lesson renderer proves out the schema.
- Database or auth — localStorage is sufficient for personal use.
- Charting libraries — the existing SVG visuals are clean and sufficient.
