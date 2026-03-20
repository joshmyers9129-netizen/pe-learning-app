"use client";

import { use, useState, useEffect, useRef, useCallback } from "react";
import { getLessonContent, lessonContents } from "@/lib/lessonContent";
import { DEFAULT_MODULE_ID, getModuleById, getDefaultModule } from "@/lib/modules";
import {
  setLessonStatus,
  getQuizResult,
  getModuleProgress,
  saveQuizAttempt,
  getQuizHistory,
  recordWrongAnswers,
  saveLessonPosition,
  getLessonPosition,
} from "@/lib/progress";
import {
  MCQuestion,
  SRQuestion,
  QuizQuestion,
  QuizResult,
  QuizAttempt,
  WrongAnswer,
} from "@/lib/types";
import { AiHelper } from "@/components/AiHelper";
import { Block } from "./_components/Block";
import { MCQuestionCard } from "./_components/MCQuestionCard";
import { SRQuestionCard, type SRState } from "./_components/SRQuestionCard";
import { ConfidenceRating } from "./_components/ConfidenceRating";
import { PrereqGate } from "./_components/PrereqGate";
import { InjectedQuestionCard, type InjectedQuestion } from "./_components/InjectedQuestionCard";
import { QuizHistory } from "./_components/QuizHistory";

const MODULE_ID = DEFAULT_MODULE_ID;

// ── Spaced quiz injection ─────────────────────────────────────────────────────

function pickInjectedQuestions(currentLessonId: string, count: number): InjectedQuestion[] {
  if (typeof window === "undefined") return [];
  const progress = getModuleProgress(MODULE_ID);
  const mod = getDefaultModule();
  const pool: InjectedQuestion[] = [];

  for (const lesson of mod.lessons) {
    if (lesson.lessonId === currentLessonId) continue;
    if (progress[lesson.lessonId]?.status !== "completed") continue;
    const content = lessonContents.find((c) => c.lessonId === lesson.lessonId);
    if (!content) continue;
    for (const q of content.quiz) {
      if (q.type === "multiple-choice") {
        pool.push({
          ...q,
          questionId: `injected:${q.questionId}`,
          sourceLessonId: lesson.lessonId,
          sourceDayNumber: lesson.dayNumber,
        });
      }
    }
  }

  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count);
}

// ── page ──────────────────────────────────────────────────────────────────────

export default function LessonPage({
  params,
}: {
  params: Promise<{ lessonId: string }>;
}) {
  const { lessonId } = use(params);
  const content = getLessonContent(lessonId);
  const currentModule = getModuleById(MODULE_ID);
  const lesson = currentModule?.lessons.find((l) => l.lessonId === lessonId);

  // Spaced quiz injection — pick 2-3 questions from old completed lessons
  const [injectedQuestions] = useState<InjectedQuestion[]>(() =>
    pickInjectedQuestions(lessonId, 3)
  );
  const [injectedAnswers, setInjectedAnswers] = useState<Record<string, string>>({});
  const [injectedSubmitted, setInjectedSubmitted] = useState(false);

  // MC answers: questionId → selected option
  const [mcAnswers, setMcAnswers] = useState<Record<string, string>>({});
  // SR states: questionId → state + text
  const [srStates, setSrStates] = useState<
    Record<string, { state: SRState; value: string }>
  >({});
  // Whether MC section has been submitted
  const [mcSubmitted, setMcSubmitted] = useState(false);
  // Initialize from localStorage
  const [initState] = useState(() => {
    if (typeof window === "undefined") return { confidence: null as number | null, saved: false, quizHistory: [] as QuizAttempt[], prereqPassed: false };
    const existing = getQuizResult(lessonId);
    const history = getQuizHistory(lessonId);

    // Auto-mark in-progress
    if (!existing) {
      setLessonStatus(MODULE_ID, lessonId, "in-progress");
    }

    // Check prereqs
    let prereqOk = false;
    if (!lesson || lesson.prerequisites.length === 0) {
      prereqOk = true;
    } else {
      const progress = getModuleProgress(MODULE_ID);
      const lessonProg = progress[lessonId];
      if (lessonProg?.status === "completed" || lessonProg?.status === "in-progress") {
        prereqOk = true;
      }
      const noneComplete = lesson.prerequisites.some((p) => !progress[p] || progress[p].status === "not-started");
      if (!noneComplete) {
        // All prereqs at least started — show gate if lesson not started
      } else {
        prereqOk = true;
      }
    }

    return {
      confidence: existing?.confidence ?? null,
      saved: !!existing,
      quizHistory: history,
      prereqPassed: prereqOk,
    };
  });

  // Confidence
  const [confidence, setConfidence] = useState<number | null>(initState.confidence);
  // Saved result
  const [saved, setSaved] = useState(initState.saved);
  // Quiz retake
  const [retaking, setRetaking] = useState(false);
  const [quizHistory, setQuizHistory] = useState<QuizAttempt[]>(initState.quizHistory);
  // Prereq gate
  const [prereqPassed, setPrereqPassed] = useState(initState.prereqPassed);
  // Resume position
  const blocksRef = useRef<HTMLDivElement>(null);
  const positionRestoredRef = useRef(false);

  // Restore scroll position
  useEffect(() => {
    if (positionRestoredRef.current) return;
    positionRestoredRef.current = true;
    const pos = getLessonPosition(lessonId);
    if (pos && pos.scrollY > 0) {
      setTimeout(() => {
        window.scrollTo({ top: pos.scrollY, behavior: "instant" as ScrollBehavior });
      }, 100);
    }
  }, [lessonId]);

  // Warn before navigating away from in-progress quiz
  useEffect(() => {
    function handleBeforeUnload(e: BeforeUnloadEvent) {
      // Only warn if the user has started answering but hasn't saved yet
      const hasStartedQuiz =
        Object.keys(mcAnswers).length > 0 || Object.keys(srStates).length > 0;
      if (hasStartedQuiz && !saved) {
        e.preventDefault();
      }
    }
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [mcAnswers, srStates, saved]);

  // Save scroll position periodically
  const savePosition = useCallback(() => {
    if (!blocksRef.current) return;
    const blocks = blocksRef.current.children;
    let blockIndex = 0;
    for (let i = 0; i < blocks.length; i++) {
      const rect = blocks[i].getBoundingClientRect();
      if (rect.top > 0) break;
      blockIndex = i;
    }
    saveLessonPosition(lessonId, blockIndex, window.scrollY);
  }, [lessonId]);

  const posTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (posTimerRef.current) clearTimeout(posTimerRef.current);
      posTimerRef.current = setTimeout(savePosition, 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [savePosition]);

  if (!content || !lesson) {
    return (
      <main className="min-h-screen bg-[#FBF7F3] flex items-center justify-center">
        <p className="text-sm text-[#404040]">Lesson not found.</p>
      </main>
    );
  }

  const lessons = currentModule?.lessons ?? [];
  const currentIndex = lessons.findIndex((l) => l.lessonId === lessonId);
  const nextLesson = currentIndex >= 0 && currentIndex < lessons.length - 1
    ? lessons[currentIndex + 1]
    : null;

  const mcQuestions = content.quiz.filter(
    (q): q is MCQuestion => q.type === "multiple-choice"
  );
  const srQuestions = content.quiz.filter(
    (q): q is SRQuestion => q.type === "short-response"
  );
  const allQuestions: QuizQuestion[] = content.quiz;

  const mcAllAnswered = mcQuestions.every((q) => mcAnswers[q.questionId]);
  const srAllSubmitted = srQuestions.every(
    (q) => srStates[q.questionId]?.state === "submitted"
  );
  const quizComplete =
    (mcQuestions.length === 0 || mcSubmitted) && srAllSubmitted;

  const mcScore =
    mcQuestions.length > 0
      ? mcQuestions.filter((q) => mcAnswers[q.questionId] === q.correctAnswer)
          .length / mcQuestions.length
      : 1;

  function handleSave() {
    if (!confidence) return;
    const result: QuizResult = {
      score: mcScore,
      confidence,
      completedAt: new Date().toISOString(),
    };
    const attempt = saveQuizAttempt(lessonId, result);
    setQuizHistory((prev) => [...prev, attempt]);
    setLessonStatus(MODULE_ID, lessonId, "completed");

    const wrong: WrongAnswer[] = mcQuestions
      .filter((q) => mcAnswers[q.questionId] && mcAnswers[q.questionId] !== q.correctAnswer)
      .map((q) => ({
        lessonId,
        questionId: q.questionId,
        selectedAnswer: mcAnswers[q.questionId],
        attemptDate: new Date().toISOString(),
      }));
    if (wrong.length > 0) {
      recordWrongAnswers(wrong);
    }

    setSaved(true);
    setRetaking(false);
  }

  function handleRetake() {
    setMcAnswers({});
    setSrStates({});
    setMcSubmitted(false);
    setInjectedAnswers({});
    setInjectedSubmitted(false);
    setConfidence(null);
    setSaved(false);
    setRetaking(true);
  }

  const questionIndex = (q: QuizQuestion) => allQuestions.indexOf(q);

  // ── AI helper prompts ────────────────────────────────────────────────────────
  const topicStr = lesson.topics.slice(0, 3).join(", ");
  const wrongMcDetails = mcQuestions
    .filter((q) => mcAnswers[q.questionId] && mcAnswers[q.questionId] !== q.correctAnswer)
    .map((q) => `• "${q.prompt}"\n  Correct: "${q.correctAnswer}" | My answer: "${mcAnswers[q.questionId]}"`)
    .join("\n");
  const mcHelpPrompt =
    `Lesson: "${lesson.title}" | Topic: ${topicStr}\n` +
    (wrongMcDetails ? `Questions I got wrong:\n${wrongMcDetails}\n\n` : "") +
    `Explain the correct reasoning and help me understand the underlying PE concepts.`;
  const confidenceHelpPrompt =
    `Lesson: "${lesson.title}" | Topic: ${topicStr} | Confidence: ${confidence ?? "?"}/5` +
    (wrongMcDetails ? `\nI also got these MC questions wrong:\n${wrongMcDetails}` : "") +
    `\n\nHelp me solidify my understanding of these PE concepts.`;

  return (
    <main className="min-h-screen bg-[#FBF7F3]">
      <div className="max-w-2xl mx-auto px-4 py-8 sm:py-10">
        {/* Header */}
        <div className="mb-8">
          <a
            href="/modules"
            className="text-xs text-[#2294BD] hover:underline mb-3 inline-block"
          >
            ← Modules
          </a>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-xs font-bold text-[#404040] uppercase tracking-widest">
              Day {lesson.dayNumber} of {lessons.length}
            </span>
            <span className="text-xs text-[#D0C8C0]" aria-hidden="true">·</span>
            <span className="text-xs text-[#404040]">
              {lesson.estimatedMinutes} min
            </span>
          </div>
          <h1 className="text-2xl font-bold text-[#000000] leading-snug">
            {lesson.title}
          </h1>
        </div>

        {/* Prereq gate */}
        {!prereqPassed && lesson.prerequisites.length > 0 && (
          <PrereqGate
            prereqIds={lesson.prerequisites}
            onPass={() => setPrereqPassed(true)}
            onSkip={() => setPrereqPassed(true)}
          />
        )}

        {/* Learning blocks */}
        <div className="mb-8" ref={blocksRef}>
          {content.blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>

        {/* Quiz */}
        <div className="rounded-2xl border border-[#E8DDD4] bg-white px-6 py-6 mb-4" role="region" aria-label="Quiz section">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-[10px] font-bold text-[#404040] uppercase tracking-widest mb-0.5">
                Check your understanding
              </h2>
              <p className="text-[15px] font-semibold text-[#000000]">Quiz</p>
            </div>
            <div className="flex items-center gap-2">
              {saved && !retaking && (
                <button
                  onClick={handleRetake}
                  className="text-xs text-[#404040] hover:text-[#2294BD] font-medium px-2.5 py-1 rounded-lg border border-[#E8DDD4] hover:border-[#2294BD]/50 transition-colors"
                >
                  Retake quiz
                </button>
              )}
              {saved && !retaking && (
                <span className="text-xs text-[#2294BD] bg-[#2294BD]/10 px-2.5 py-1 rounded-lg font-medium">
                  Completed
                </span>
              )}
              {retaking && (
                <span className="text-xs text-[#FAA51A] bg-[#FAA51A]/10 px-2.5 py-1 rounded-lg font-medium">
                  Attempt #{quizHistory.length + 1}
                </span>
              )}
            </div>
          </div>

          {/* Quiz attempt history */}
          <QuizHistory attempts={quizHistory} />

          {/* Spaced recall injection — questions from older lessons */}
          {injectedQuestions.length > 0 && (
            <div className="mb-6">
              <div className="rounded-xl border border-[#7C5CBF]/15 bg-[#7C5CBF]/[0.03] px-5 py-4">
                <p className="text-[10px] font-bold text-[#7C5CBF] uppercase tracking-widest mb-1">
                  Spaced recall
                </p>
                <p className="text-xs text-[#404040] mb-4">
                  These questions are from earlier lessons — quick retrieval practice to keep older material fresh.
                </p>
                {injectedQuestions.map((q) => (
                  <InjectedQuestionCard
                    key={q.questionId}
                    q={q}
                    submitted={injectedSubmitted}
                    selected={injectedAnswers[q.questionId] ?? null}
                    onSelect={(v) => {
                      if (!injectedSubmitted)
                        setInjectedAnswers((prev) => ({ ...prev, [q.questionId]: v }));
                    }}
                  />
                ))}
                {!injectedSubmitted && (
                  <button
                    disabled={!injectedQuestions.every((q) => injectedAnswers[q.questionId])}
                    onClick={() => setInjectedSubmitted(true)}
                    className="w-full rounded-xl bg-[#7C5CBF] text-white text-sm font-semibold py-2.5 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#6B4DAE] transition-colors"
                  >
                    Check recall
                  </button>
                )}
                {injectedSubmitted && (
                  <div role="status" className={`rounded-xl px-4 py-2.5 text-sm font-medium border ${
                    injectedQuestions.every((q) => injectedAnswers[q.questionId] === q.correctAnswer)
                      ? "bg-[#2294BD]/10 text-[#2294BD] border-[#2294BD]/20"
                      : "bg-[#FAA51A]/10 text-[#9B6A00] border-[#FAA51A]/20"
                  }`}>
                    {injectedQuestions.filter((q) => injectedAnswers[q.questionId] === q.correctAnswer).length}/{injectedQuestions.length} recalled from earlier lessons
                  </div>
                )}
              </div>
            </div>
          )}

          {/* MC questions */}
          {mcQuestions.map((q) => (
            <MCQuestionCard
              key={q.questionId}
              q={q}
              index={questionIndex(q)}
              submitted={mcSubmitted}
              selected={mcAnswers[q.questionId] ?? null}
              onSelect={(v) => {
                if (!mcSubmitted)
                  setMcAnswers((prev) => ({ ...prev, [q.questionId]: v }));
              }}
            />
          ))}

          {/* MC submit */}
          {mcQuestions.length > 0 && !mcSubmitted && (
            <button
              disabled={!mcAllAnswered}
              onClick={() => setMcSubmitted(true)}
              className="w-full rounded-xl bg-[#000000] text-white text-sm font-semibold py-3 mb-7 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#222] transition-colors"
            >
              Check answers
            </button>
          )}

          {/* MC score banner */}
          {mcSubmitted && mcQuestions.length > 0 && (
            <div className="mb-7">
              <div
                role="status"
                className={`rounded-xl px-4 py-3 flex items-center gap-3 border ${
                  mcScore === 1
                    ? "bg-[#2294BD]/10 border-[#2294BD]/25 text-[#2294BD]"
                    : mcScore >= 0.5
                    ? "bg-[#FAA51A]/10 border-[#FAA51A]/25 text-[#9B6A00]"
                    : "bg-[#D9532B]/8 border-[#D9532B]/20 text-[#D9532B]"
                }`}
              >
                <span className="text-lg font-bold" aria-hidden="true">
                  {mcScore === 1 ? "\u2713" : mcScore >= 0.5 ? "~" : "\u2717"}
                </span>
                <span className="text-sm font-semibold">
                  {Math.round(mcScore * mcQuestions.length)}/{mcQuestions.length}{" "}
                  correct
                </span>
                <span className="text-sm text-[#404040] font-normal">
                  {mcScore === 1
                    ? "— perfect score"
                    : mcScore >= 0.5
                    ? "— review the highlighted answers"
                    : "— revisit the lesson material"}
                </span>
              </div>
              {mcScore < 1 && (
                <AiHelper
                  prompt={mcHelpPrompt}
                  label="Explain this more simply"
                />
              )}
            </div>
          )}

          {/* SR questions */}
          {srQuestions.map((q) => (
            <SRQuestionCard
              key={q.questionId}
              q={q}
              index={questionIndex(q)}
              lessonId={lessonId}
              state={srStates[q.questionId]?.state ?? "unanswered"}
              value={srStates[q.questionId]?.value ?? ""}
              onChange={(v) =>
                setSrStates((prev) => ({
                  ...prev,
                  [q.questionId]: {
                    state: prev[q.questionId]?.state ?? "unanswered",
                    value: v,
                  },
                }))
              }
              onSubmit={() =>
                setSrStates((prev) => ({
                  ...prev,
                  [q.questionId]: {
                    state: "submitted",
                    value: prev[q.questionId]?.value ?? "",
                  },
                }))
              }
            />
          ))}
        </div>

        {/* Confidence + save */}
        {quizComplete && (
          <>
            <ConfidenceRating value={confidence} onChange={setConfidence} />
            {confidence !== null && confidence <= 2 && (
              <AiHelper
                prompt={confidenceHelpPrompt}
                label="Explain this more simply"
              />
            )}
            {!saved && (
              <button
                disabled={!confidence}
                onClick={handleSave}
                className="w-full mt-3 rounded-xl bg-[#2294BD] text-white text-sm font-semibold py-3 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#1a7ea8] transition-colors"
              >
                Save and mark complete
              </button>
            )}
            {saved && (
              <div className="mt-3 rounded-xl bg-[#2294BD]/10 border border-[#2294BD]/20 px-4 py-3 flex items-center gap-2" role="status">
                <span className="text-[#2294BD] font-bold" aria-hidden="true">&#10003;</span>
                <span className="text-sm text-[#2294BD] font-medium">
                  Lesson complete — good work.
                </span>
                {nextLesson ? (
                  <a
                    href={`/lesson/${nextLesson.lessonId}`}
                    className="ml-auto text-xs text-[#2294BD] font-semibold hover:underline whitespace-nowrap"
                  >
                    Day {nextLesson.dayNumber} →
                  </a>
                ) : (
                  <a
                    href="/modules"
                    className="ml-auto text-xs text-[#2294BD] font-semibold hover:underline"
                  >
                    All done →
                  </a>
                )}
              </div>
            )}
          </>
        )}

        {/* Sources */}
        {content.sources.length > 0 && (
          <div className="mt-8 border-t border-[#E8DDD4] pt-5">
            <p className="text-[10px] font-bold text-[#9A918A] uppercase tracking-widest mb-3">
              Sources
            </p>
            <ol className="space-y-1.5 list-decimal list-inside">
              {content.sources.map((s, i) => (
                <li key={i} className="text-[11px] text-[#9A918A] leading-relaxed">
                  {s}
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </main>
  );
}
