import { notFound } from "next/navigation";
import { getLessonById, getAllLessons } from "@/data/lessons";
import ReadingProgress from "@/components/ReadingProgress";
import LessonBlock from "@/components/LessonBlock";
import Quiz from "@/components/Quiz";

export function generateStaticParams() {
  return getAllLessons().map((l) => ({ id: l.lessonId }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function LessonPage({ params }: PageProps) {
  const { id } = await params;
  const lesson = getLessonById(id);
  if (!lesson) notFound();

  return (
    <>
      <ReadingProgress />

      <main className="min-h-screen bg-[#FBF7F3]">
        {/* Lesson header */}
        <header className="bg-white border-b border-[#F0E6DD] px-4 pt-5 pb-4">
          <div className="max-w-2xl mx-auto space-y-2">
            <div className="flex items-center gap-2 text-[12px] text-[#404040] font-medium">
              <span>Day {lesson.dayNumber}</span>
              <span aria-hidden="true">·</span>
              <span>{lesson.estimatedMinutes} min</span>
              <span aria-hidden="true">·</span>
              <span className="capitalize">{lesson.difficulty}</span>
            </div>

            <h1 className="text-[22px] font-bold leading-tight text-[#000000]">
              {lesson.title}
            </h1>

            {/* Learning objectives */}
            {lesson.learningObjectives.length > 0 && (
              <ul className="mt-3 space-y-1">
                {lesson.learningObjectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13px] text-[#404040]">
                    <span
                      aria-hidden="true"
                      className="mt-[3px] shrink-0 w-4 h-4 rounded-full border-2 border-[#2294BD] flex items-center justify-center"
                    >
                      <span className="block w-1.5 h-1.5 rounded-full bg-[#2294BD]" />
                    </span>
                    {obj}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </header>

        {/* Content */}
        <div className="max-w-2xl mx-auto px-4 py-5 space-y-6">
          {/* Lesson blocks */}
          <section aria-label="Lesson content" className="space-y-3">
            {lesson.blocks.map((block, i) => (
              <LessonBlock key={i} block={block} index={i} />
            ))}
          </section>

          {/* Divider */}
          <hr className="border-[#F0E6DD]" />

          {/* Quiz */}
          <Quiz questions={lesson.quiz} lessonId={lesson.lessonId} />

          {/* Divider */}
          <hr className="border-[#F0E6DD]" />

          {/* Sources */}
          <section aria-labelledby="sources-heading" className="pb-8">
            <h2
              id="sources-heading"
              className="text-[13px] font-semibold uppercase tracking-widest text-[#404040] mb-3"
            >
              Sources
            </h2>
            <ul className="space-y-1.5">
              {lesson.sources.map((src, i) => (
                <li
                  key={i}
                  className="text-[13px] text-[#404040] flex items-start gap-2"
                >
                  <span aria-hidden="true" className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-[#404040]" />
                  {src}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
