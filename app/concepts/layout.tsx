import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concept Map",
  description: "Visualize lesson dependencies and identify weak foundations.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
