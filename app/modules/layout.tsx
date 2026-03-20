import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modules",
  description: "Browse and track progress through the PE curriculum modules.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
