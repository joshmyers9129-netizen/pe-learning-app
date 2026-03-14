"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import { getLesson, getModule } from "@/data";
import {
  completeLesson,
  isLessonCompleted,
  getLessonProgress,
} from "@/lib/progress";
import LessonBlock from "@/components/lesson/LessonBlock";
import QuizSection from "@/components/lesson/QuizSection";
import ConfidenceRating from "@/components/lesson/ConfidenceRating";
import type { ConfidenceLevel } from "@/types/content";

interface Props {
  params: { moduleId: string; lessonId: string };
}

type Stage = "reading" | "quiz" | "confidence" | "done";

export default function LessonPage({ params }: Props) {
  const lesson = getLesson(params.moduleId, params.lessonId);
  const mod = getModule(params.moduleId);
  const router = useRouter();

  const [stage, setStage] = useState<Stage>("reading");
  const [quizScore, setQuizScore] = useState(0);
  const [confidence, setConfidence] = useState<ConfidenceLevel | null>(null);
  const [alreadyDone, setAlreadyDone] = useState(false);

  useEffect(() => {
    if (lesson && mod) {
      setAlreadyDone(isLessonCompleted(mod.moduleId, lesson.lessonId));
    }
  }, [lesson, mod]);

  if (!lesson || !mod) return notFound();

  if (lesson.status === "stub") {
    return (
      <div className="space-y-4">
        <Link href={`/modules/${mod.moduleId}`} className="text-sm text-muted hover:text-black">
          ← {mod.title}
        </Link>
        <div className="card p-6 text-center">
          <p className="font-semibold mb-1">Day {lesson.dayNumber}: {lesson.title}</p>
          <p className="text-sm text-muted">This lesson is coming soon.</p>
        </div>
      </div>
    );
  }

  function handleQuizComplete(score: number) {
    setQuizScore(score);
    setStage("confidence");
  }

  function handleFinish() {
    if (!confidence) return;
    completeLesson(
      mod!.moduleId,
      lesson!.lessonId,
      quizScore,
      confidence,
      lesson!.topics
    );
    setStage("done");
  }

  // Find next available lesson
  const allLessons = mod.lessons.filter((l) => l.status === "available");
  const currentIdx = allLessons.findIndex((l) => l.lessonId === lesson.lessonId);
  const nextLesson = allLessons[currentIdx + 1] ?? null;

  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted">
        <Link href={`/modules/${mod.moduleId}`} className="hover:text-black">
          {mod.title}
        </Link>
        <span>/</span>
        <span>Day {lesson.dayNumber}</span>
      </div>

      {/* Lesson header */}
      <div>
        <h1 className="text-2xl font-semibold">{lesson.title}</h1>
        <div className="flex items-center gap-3 mt-2 text-sm text-muted">
          <span>{lesson.estimatedMinutes} min</span>
          <span>·</span>
          <span className="capitalize">{lesson.difficulty}</span>
          {alreadyDone && (
            <>
              <span>·</span>
              <span className="text-green-600 font-medium">Completed</span>
            </>
          )}
        </div>
      </div>

      {/* Learning objectives */}
      <div className="card p-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">
          Learning objectives
        </p>
        <ul className="space-y-1">
          {lesson.learningObjectives.map((obj, i) => (
            <li key={i} className="text-sm flex gap-2">
              <span className="text-access mt-0.5">▸</span>
              <span>{obj}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Content blocks */}
      {stage === "reading" && (
        <>
          <div className="space-y-4">
            {lesson.blocks.map((block, i) => (
              <LessonBlock key={i} block={block} />
            ))}
          </div>

          {lesson.quiz.length > 0 && (
            <div className="pt-2">
              <button
                onClick={() => setStage("quiz")}
                className="btn-primary"
              >
                Take the quiz
              </button>
            </div>
          )}
        </>
      )}

      {/* Quiz */}
      {stage === "quiz" && (
        <QuizSection questions={lesson.quiz} onComplete={handleQuizComplete} />
      )}

      {/* Confidence */}
      {stage === "confidence" && (
        <div className="card p-5 space-y-5">
          <div className="card p-4 bg-white">
            <p className="text-sm font-semibold">
              Quiz score:{" "}
              <span
                className={
                  quizScore >= 0.8
                    ? "text-green-700"
                    : quizScore >= 0.5
                    ? "text-amber"
                    : "text-rust"
                }
              >
                {Math.round(quizScore * 100)}%
              </span>
            </p>
          </div>
          <ConfidenceRating value={confidence} onChange={setConfidence} />
          <button
            onClick={handleFinish}
            disabled={!confidence}
            className="btn-primary"
          >
            Finish lesson
          </button>
        </div>
      )}

      {/* Done */}
      {stage === "done" && (
        <div className="card p-5 space-y-4">
          <p className="text-lg font-semibold">Lesson complete.</p>
          <p className="text-sm text-muted">
            Your progress and confidence have been saved.
          </p>
          <div className="flex gap-3 flex-wrap">
            {nextLesson && (
              <Link
                href={`/lessons/${mod.moduleId}/${nextLesson.lessonId}`}
                className="btn-primary"
              >
                Next: Day {nextLesson.dayNumber}
              </Link>
            )}
            <Link href={`/modules/${mod.moduleId}`} className="btn-secondary">
              Back to module
            </Link>
          </div>
        </div>
      )}

      {/* Sources */}
      {lesson.sources.length > 0 && stage === "reading" && (
        <div className="border-t border-black/10 pt-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">
            Sources
          </p>
          <ul className="space-y-1">
            {lesson.sources.map((s, i) => (
              <li key={i} className="text-xs text-muted">
                {s}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
