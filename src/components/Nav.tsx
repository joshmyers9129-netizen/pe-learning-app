"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Today" },
  { href: "/modules", label: "Modules" },
  { href: "/review", label: "Review" },
  { href: "/progress", label: "Progress" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b border-black/10 sticky top-0 z-40">
      <div className="max-w-3xl mx-auto px-4 flex items-center h-14 gap-1">
        <Link href="/" className="font-semibold text-sm mr-4 text-black">
          PE Learning
        </Link>
        {links.map(({ href, label }) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                active
                  ? "bg-access text-white font-medium"
                  : "text-muted hover:bg-cream hover:text-black"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
