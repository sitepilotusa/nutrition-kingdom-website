"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="container-max mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-lemon gradient-brand text-xl sm:text-2xl md:text-3xl font-bold">
          Nutrition Kingdom
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-1 sm:gap-2">
          <Link
            href="/menu"
            data-attr="nav-menu"
            className={`px-2 py-2 sm:px-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${
              pathname === "/menu"
                ? "nav-btn-active"
                : "nav-btn-default"
            }`}
            aria-current={pathname === "/menu" ? "page" : undefined}
          >
            Menu
          </Link>
          <Link
            href="/contact"
            data-attr="nav-contact"
            className={`px-2 py-2 sm:px-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${
              pathname === "/contact"
                ? "nav-btn-active"
                : "nav-btn-default"
            }`}
            aria-current={pathname === "/contact" ? "page" : undefined}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}


