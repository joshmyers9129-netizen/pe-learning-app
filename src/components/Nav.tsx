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
    <header className="py-4 mb-2 border-b border-cream">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-sm tracking-wide text-access">PE Learning</span>
        <nav className="flex gap-4">
          {links.map(({ href, label }) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors ${
                  active
                    ? "text-access border-b-2 border-access pb-0.5"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
