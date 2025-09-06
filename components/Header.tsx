"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      // Add/remove body class for mobile fixed header
      if (mobile) {
        document.body.classList.add('mobile-fixed-header');
      } else {
        document.body.classList.remove('mobile-fixed-header');
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      document.body.classList.remove('mobile-fixed-header');
    };
  }, []);

  return (
    <header
      className={`${isMobile ? 'mobile-header-fix' : 'sticky top-0'} z-50 backdrop-blur border-b border-slate-200 md:h-20`}
      style={{
        backgroundColor: 'rgba(248, 250, 252, 0.95)',
        // Safari-specific fixes for iOS header jumping
        WebkitBackdropFilter: 'blur(10px)',
        backdropFilter: 'blur(10px)',
        WebkitTransform: 'translateZ(0)',
        transform: 'translateZ(0)',
      }}
    >
      <div className="container-max mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-lemon gradient-brand text-xl sm:text-2xl md:text-3xl font-bold">
          Nutrition Kingdom
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-1 sm:gap-2">
          <Link
            href="/menu"
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


