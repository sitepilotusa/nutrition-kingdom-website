"use client";

import { useEffect, useRef, useState } from "react";

type LazyGoogleMapProps = {
  src: string;
  title: string;
  className?: string;
};

export default function LazyGoogleMap({ src, title, className }: LazyGoogleMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad) return;
    const container = containerRef.current;
    if (!container) return;

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            setShouldLoad(true);
            observer.disconnect();
          }
        },
        { rootMargin: "300px 0px" }
      );

      observer.observe(container);
      return () => observer.disconnect();
    }

    setShouldLoad(true);
  }, [shouldLoad]);

  return (
    <div ref={containerRef} className={className}>
      {shouldLoad ? (
        <iframe
          title={title}
          src={src}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div
          aria-hidden="true"
          className="h-full w-full animate-pulse bg-slate-200"
        />
      )}
    </div>
  );
}

