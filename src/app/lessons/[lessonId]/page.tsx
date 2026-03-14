"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getLesson } from "@/data/lessons";
import { loadProgress, completeLesson } from "@/lib/progress";
import { Lesson, QuizQuestion } from "@/types";

type Params = { lessonId: string };

export default function LessonPage({ params }: { params: Promise<Params> }) {
  const { lessonId } = use(params);
  const lesson = getLesson(lessonId);
  const router = useRouter();

  const [phase, setPhase] = useState<"reading" | "quiz" | "confidence" | "done">(
    "reading"
  );
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [confidence, setConfidence] = useState<number>(3);
  const [alreadyDone, setAlreadyDone] = useState(false);

  useEffect(() => {
    const p = loadProgress();
    if (p.lessonProgress[lessonId]) setAlreadyDone(true);
  }, [lessonId]);

  if (!lesson) {
    return (
      <div className="pt-8 text-sm text-gray-500">
        Lesson not found.{" "}
        <button onClick={() => router.back()} className="text-access">
          Go back
        </button>
      </div>
    );
  }

  if (lesson.isPlaceholder) {
    return (
      <div className="pt-8 space-y-4">
        <button
          onClick={() => router.back()}
          className="text-sm text-gray-500 hover:text-black"
        >
          ← Back
        </button>
        <div className="rounded-xl border border-gray-200 px-6 py-8 text-center">
          <p className="font-semibold mb-2">Day {lesson.dayNumber}: {lesson.title}</p>
          <p className="text-sm text-gray-500">This lesson is being developed. Check back soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5 pt-4">
      <button
        onClick={() => router.back()}
        className="text-sm text-gray-500 hover:text-black"
      >
        ← Back
      </button>

      {/* Lesson header */}
      <div className="border-b border-gray-100 pb-4">
        <p className="text-xs text-gray-500 mb-1">
          Day {lesson.dayNumber} · {lesson.estimatedMinutes} min ·{" "}
          <span className="capitalize">{lesson.difficulty}</span>
        </p>
        <h1 className="text-xl font-bold">{lesson.title}</h1>
        {alreadyDone && (
          <span className="inline-block mt-1.5 text-xs bg-access/10 text-access px-2 py-0.5 rounded-full font-medium">
            Completed
          </span>
        )}
      </div>

      {/* Objectives */}
      {phase === "reading" && lesson.learningObjectives.length > 0 && (
        <div className="bg-light-cream rounded-xl px-4 py-3">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Objectives
          </p>
          <ul className="space-y-1">
            {lesson.learningObjectives.map((obj, i) => (
              <li key={i} className="text-sm flex gap-2">
                <span className="text-access shrink-0">→</span>
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Reading phase */}
      {phase === "reading" && (
        <>
          <div className="space-y-4">
            {lesson.blocks.map((block, i) => (
              <BlockCard key={i} block={block} />
            ))}
          </div>
          {lesson.sources.length > 0 && (
            <div className="text-xs text-gray-400 border-t border-gray-100 pt-3 space-y-0.5">
              <p className="font-medium">Sources</p>
              {lesson.sources.map((s, i) => (
                <p key={i}>{s}</p>
              ))}
            </div>
          )}
          <button
            onClick={() => {
              if (lesson.quiz.length > 0) setPhase("quiz");
              else setPhase("confidence");
            }}
            className="w-full bg-access text-white font-semibold py-3 rounded-xl hover:bg-opacity-90 transition-colors"
          >
            {lesson.quiz.length > 0 ? "Take Quiz →" : "Rate Confidence →"}
          </button>
        </>
      )}

      {/* Quiz phase */}
      {phase === "quiz" && (
        <QuizSection
          questions={lesson.quiz}
          answers={answers}
          onChange={(qId, val) => setAnswers((prev) => ({ ...prev, [qId]: val }))}
          onSubmit={() => setPhase("confidence")}
        />
      )}

      {/* Confidence phase */}
      {phase === "confidence" && (
        <ConfidenceSection
          lesson={lesson}
          answers={answers}
          confidence={confidence}
          onConfidenceChange={setConfidence}
          onComplete={() => {
            completeLesson(lessonId, answers, confidence);
            setPhase("done");
          }}
        />
      )}

      {/* Done */}
      {phase === "done" && (
        <div className="text-center py-8 space-y-4">
          <div className="text-4xl">✓</div>
          <p className="font-semibold text-lg">Lesson complete!</p>
          <p className="text-sm text-gray-500">
            Your mastery scores and review queue have been updated.
          </p>
          <div className="flex gap-3 justify-center">
            <button
              onClick={() => router.push("/")}
              className="border border-gray-200 text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-50"
            >
              Back to Today
            </button>
            <button
              onClick={() => router.push("/modules")}
              className="bg-access text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-opacity-90"
            >
              All Lessons
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function BlockCard({ block }: { block: Lesson["blocks"][number] }) {
  const styles: Record<string, string> = {
    intro: "border-l-4 border-access bg-access/5",
    teaching: "border border-gray-200",
    example: "border-l-4 border-fast bg-fast/5",
    exercise: "border-l-4 border-rust bg-rust/5",
  };
  const icons: Record<string, string> = {
    intro: "Why",
    teaching: "Learn",
    example: "Example",
    exercise: "Exercise",
  };
  return (
    <div className={`rounded-r-xl px-4 py-3 ${styles[block.type] || "border border-gray-200 rounded-xl"}`}>
      <div className="flex items-center gap-2 mb-1.5">
        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
          {icons[block.type] ?? block.type}
        </span>
        <span className="text-sm font-semibold">{block.title}</span>
      </div>
      <p className="text-sm leading-relaxed text-gray-700">{block.content}</p>
    </div>
  );
}

function QuizSection({
  questions,
  answers,
  onChange,
  onSubmit,
}: {
  questions: QuizQuestion[];
  answers: Record<string, string>;
  onChange: (qId: string, val: string) => void;
  onSubmit: () => void;
}) {
  const mcQuestions = questions.filter((q) => q.type === "multiple-choice");
  const allMcAnswered = mcQuestions.every((q) => answers[q.questionId]);

  return (
    <div className="space-y-5">
      <h2 className="font-semibold">Quiz</h2>
      {questions.map((q, i) => (
        <div key={q.questionId} className="space-y-2">
          <p className="text-sm font-medium">
            {i + 1}. {q.prompt}
          </p>
          {q.type === "multiple-choice" && q.options ? (
            <div className="space-y-2">
              {q.options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => onChange(q.questionId, opt)}
                  className={`w-full text-left text-sm px-3 py-2.5 rounded-lg border transition-colors ${
                    answers[q.questionId] === opt
                      ? "border-access bg-access/5 text-access font-medium"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          ) : (
            <textarea
              value={answers[q.questionId] ?? ""}
              onChange={(e) => onChange(q.questionId, e.target.value)}
              placeholder="Your answer…"
              rows={3}
              className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 resize-none focus:outline-none focus:border-access"
            />
          )}
        </div>
      ))}
      <button
        onClick={onSubmit}
        disabled={!allMcAnswered}
        className="w-full bg-access text-white font-semibold py-3 rounded-xl disabled:opacity-40 hover:bg-opacity-90 transition-colors"
      >
        Submit Quiz →
      </button>
    </div>
  );
}

function ConfidenceSection({
  lesson,
  answers,
  confidence,
  onConfidenceChange,
  onComplete,
}: {
  lesson: Lesson;
  answers: Record<string, string>;
  confidence: number;
  onConfidenceChange: (n: number) => void;
  onComplete: () => void;
}) {
  // Show quiz results
  const mcQuestions = lesson.quiz.filter((q) => q.type === "multiple-choice");
  const correct = mcQuestions.filter(
    (q) => answers[q.questionId] === q.correctAnswer
  ).length;
  const score =
    mcQuestions.length > 0
      ? Math.round((correct / mcQuestions.length) * 100)
      : null;

  const labels = [
    "Not confident",
    "Shaky",
    "Decent",
    "Good",
    "Solid",
  ];

  return (
    <div className="space-y-5">
      {score != null && (
        <div className="rounded-xl border border-gray-200 px-4 py-4 text-center">
          <p className="text-3xl font-bold text-access">{score}%</p>
          <p className="text-sm text-gray-500 mt-0.5">
            {correct}/{mcQuestions.length} correct
          </p>
        </div>
      )}

      <div>
        <p className="font-semibold mb-3">How confident do you feel about this material?</p>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              onClick={() => onConfidenceChange(n)}
              className={`flex-1 py-3 rounded-xl border font-bold text-sm transition-colors ${
                confidence === n
                  ? "border-access bg-access text-white"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              {n}
            </button>
          ))}
        </div>
        <p className="text-xs text-center text-gray-500 mt-1.5">
          {labels[confidence - 1]}
        </p>
      </div>

      <button
        onClick={onComplete}
        className="w-full bg-access text-white font-semibold py-3 rounded-xl hover:bg-opacity-90 transition-colors"
      >
        Complete Lesson ✓
      </button>
    </div>
  );
}
