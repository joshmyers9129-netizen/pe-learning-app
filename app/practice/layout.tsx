import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practice",
  description: "Cumulative quizzes and wrong-answer drills across PE lessons.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
