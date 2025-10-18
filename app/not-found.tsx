"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function NotFound() {
  useEffect(() => {
    document.body.classList.add("no-chrome");
    return () => {
      document.body.classList.remove("no-chrome");
    };
  }, []);

  return (
    <main className="min-h-screen bg-white font-sans">
      <section className="relative flex min-h-screen items-center">
        <div className="hero-section absolute inset-0" aria-hidden="true" />
        <div className="relative z-10 container-max mx-auto flex px-6 py-16 text-center">
          <div className="mx-auto flex max-w-2xl flex-col gap-10 rounded-3xl bg-white/85 p-10 shadow-xl backdrop-blur">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-3 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-green-700 shadow-sm ring-1 ring-green-100">
                <span className="h-2 w-2 rounded-full bg-green-500" aria-hidden="true" />
                Page Not Found
              </span>
              <h1 className="font-lemon gradient-brand text-5xl md:text-6xl font-bold">
                Oops! That Smoothie Is off the Menu
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                We couldn&apos;t find the page you&apos;re looking for. Maybe you were after our menu, store hours, or a delicious protein shake instead?
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/"
                className="btn-green inline-flex items-center justify-center rounded-xl px-8 py-4 text-lg font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-green-200"
              >
                Back to Home
              </Link>
              <Link
                href="/menu"
                className="btn-green-outline inline-flex items-center justify-center rounded-xl px-8 py-4 text-lg font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-green-200"
              >
                Explore the Menu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
