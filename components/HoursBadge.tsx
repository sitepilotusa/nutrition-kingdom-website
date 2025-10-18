"use client";

import { useEffect, useState } from "react";
import { getOpenStatusMessage } from "@/lib/hours";

export default function HoursBadge() {
  const [message, setMessage] = useState<string>("");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const update = () => setMessage(getOpenStatusMessage(new Date()));
    update();
    const t = setInterval(update, 60000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (document.body.classList.contains("no-chrome")) {
        setIsVisible(false);
        return;
      }

      const footer = document.querySelector('footer');
      if (!footer) {
        setIsVisible(true);
        return;
      }

      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (footerRect.top <= windowHeight && footerRect.bottom >= 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    const mutationObserver = new MutationObserver(handleScroll);
    mutationObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    const resizeObserver = new ResizeObserver(handleScroll);
    resizeObserver.observe(document.body);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      mutationObserver.disconnect();
      resizeObserver.disconnect();
    };
  }, []);

  if (!message || !isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40" aria-live="polite">
      <div className="hours-badge">
        <span className="font-semibold">{message}</span>
      </div>
    </div>
  );
}
