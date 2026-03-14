import Link from "next/link";
import { getAllLessons } from "@/data/lessons";

export default function Home() {
  const lessons = getAllLessons();

  return (
    <main className="min-h-screen bg-[#FBF7F3] px-4 py-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-[24px] font-bold text-[#000000]">
          PE Learning App
        </h1>
        <section className="space-y-2">
          <h2 className="text-[13px] font-semibold uppercase tracking-widest text-[#404040] mb-3">
            Module 1 — PE Foundations
          </h2>
          <ul className="space-y-2">
            {lessons.map((lesson) => (
              <li key={lesson.lessonId}>
                <Link
                  href={`/lesson/${lesson.lessonId}`}
                  className="flex items-center justify-between bg-white rounded-lg border border-[#F0E6DD] shadow-sm px-4 py-3 hover:border-[#2294BD] transition-colors"
                >
                  <div>
                    <span className="text-[12px] text-[#404040] mr-2">
                      Day {lesson.dayNumber}
                    </span>
                    <span className="text-[15px] font-semibold text-[#000000]">
                      {lesson.title}
                    </span>
                  </div>
                  <span className="text-[12px] text-[#404040] shrink-0 ml-3">
                    {lesson.estimatedMinutes} min
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
