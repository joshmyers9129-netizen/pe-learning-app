import type { Metadata } from "next";
import { getDefaultModule } from "@/lib/modules";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lessonId: string }>;
}): Promise<Metadata> {
  const { lessonId } = await params;
  const mod = getDefaultModule();
  const lesson = mod.lessons.find((l) => l.lessonId === lessonId);

  if (!lesson) {
    return { title: "Lesson" };
  }

  return {
    title: `Day ${lesson.dayNumber}: ${lesson.title}`,
    description: lesson.learningObjectives[0] ?? `PE lesson ${lesson.dayNumber}`,
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
