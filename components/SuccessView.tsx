"use client";

import { useEffect, useState } from "react";

type SuccessViewProps = {
  label: string;
  animate?: boolean;
  size?: "small" | "default";
};

export default function SuccessView({
  label,
  animate: controlledAnimate,
  size = "default",
}: SuccessViewProps) {
  const [internalAnimate, setInternalAnimate] = useState(false);
  const animate = controlledAnimate ?? internalAnimate;

  useEffect(() => {
    if (controlledAnimate !== undefined) {
      return;
    }

    const timer = window.setTimeout(() => setInternalAnimate(true), 50);
    return () => window.clearTimeout(timer);
  }, [controlledAnimate]);

  const circleSize = size === "small" ? "h-20 w-20" : "h-24 w-24";
  const iconSize = size === "small" ? 34 : 40;

  return (
    <div className="flex max-w-sm flex-col items-center justify-center text-center">
      <div className={size === "small" ? "relative" : "relative mb-8"}>
        <div
          className={`relative z-10 mx-auto flex ${circleSize} items-center justify-center rounded-full p-[2px] shadow-xl transition-all duration-700 ease-out ${
            animate ? "scale-100 rotate-0" : "scale-0 rotate-45"
          }`}
          style={{
            background: "linear-gradient(135deg, #16a34a 0%, #22c55e 100%)",
            transformOrigin: "center",
          }}
        >
          <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={iconSize}
              height={iconSize}
              fill="none"
              className={`transition-all duration-500 ease-out ${
                animate ? "scale-100 opacity-100" : "scale-75 opacity-0"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <path
                d="M20 6 9 17l-5-5"
                stroke="url(#nutrition-success-gradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="nutrition-success-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#16a34a" />
                  <stop offset="100%" stopColor="#22c55e" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div
          className={`absolute inset-0 rounded-full transition-all duration-1000 ease-out ${
            animate ? "scale-150 opacity-0" : "scale-100 opacity-50"
          }`}
          style={{
            background: "linear-gradient(135deg, #16a34a 0%, #22c55e 100%)",
            transitionDelay: "400ms",
          }}
        />
      </div>

      <p
        className={`font-semibold text-gray-900 transition-all duration-500 ease-out ${
          size === "small" ? "mt-6 text-base" : "text-lg"
        } ${animate ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        style={{ transitionDelay: "600ms" }}
      >
        {label}
      </p>
    </div>
  );
}
