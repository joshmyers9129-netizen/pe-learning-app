import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search",
  description: "Search across all PE lesson titles, topics, and content.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
