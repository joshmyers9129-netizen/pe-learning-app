import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "PE Learning",
  description: "Private equity fluency through structured daily lessons",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <Nav />
          <main className="pb-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
