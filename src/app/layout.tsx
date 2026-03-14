import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PE Learning App",
  description: "Private equity learning for allocators",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
