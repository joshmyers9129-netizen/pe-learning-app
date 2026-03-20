import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Review",
  description: "Spaced repetition review cards for PE concepts.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
