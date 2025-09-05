"use client";

import { useEffect, useState } from "react";
import { getOpenStatusMessage } from "@/lib/hours";

export default function HoursBadge() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const update = () => setMessage(getOpenStatusMessage(new Date()));
    update();
    const t = setInterval(update, 60000);
    return () => clearInterval(t);
  }, []);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40" aria-live="polite">
      <div className="hours-badge">
        <span className="font-semibold">{message}</span>
      </div>
    </div>
  );
}


