"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-slate-200" style={{backgroundColor: 'rgba(248, 250, 252, 0.95)'}}>
      <div className="container-max mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-lemon gradient-brand text-3xl font-bold">
          Nutrition Kingdom
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-2">
          <Link
            href="/menu"
            className={`px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 ${
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
            className={`px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 ${
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


