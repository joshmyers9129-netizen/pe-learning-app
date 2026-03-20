import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calibration",
  description: "Compare your confidence ratings against actual quiz performance.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
