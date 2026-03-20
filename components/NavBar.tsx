"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { href: "/", label: "Today" },
  { href: "/modules", label: "Modules" },
  { href: "/practice", label: "Practice" },
  { href: "/review", label: "Review" },
  { href: "/search", label: "Search" },
  { href: "/concepts", label: "Map" },
] as const;

export default function NavBar() {
  const path = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E8DDD4] z-10" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }} aria-label="Main navigation">
      <div className="max-w-2xl mx-auto flex">
        {TABS.map(({ href, label }) => {
          const active = path === href;
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={`flex-1 flex items-center justify-center py-3.5 text-xs font-medium transition-colors ${
                active
                  ? "text-[#2294BD] border-t-2 border-[#2294BD] -mt-px"
                  : "text-[#404040] hover:text-[#000000]"
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
