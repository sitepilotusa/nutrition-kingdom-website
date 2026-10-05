"use client";

import { type FormEvent, useEffect, useState } from "react";
import Script from "next/script";
import SuccessView from "@/components/SuccessView";

const formsApiBaseUrl = (process.env.NEXT_PUBLIC_FORMS_API_BASE_URL ?? "").replace(/\/$/, "");
const contactFormId = process.env.NEXT_PUBLIC_FORMS_CONTACT_FORM_ID ?? "";
const turnstileSiteKey = process.env.NEXT_PUBLIC_FORMS_TURNSTILE_SITE_KEY ?? "";

const resolveFormsEndpoint = (formId: string) => {
  if (!formsApiBaseUrl || !formId) {
    return "";
  }

  return `${formsApiBaseUrl}/api/forms/${formId}/submissions`;
};

const resetTurnstile = () => {
  if (!turnstileSiteKey || typeof window === "undefined") {
    return;
  }

  const turnstile = (window as typeof window & {
    turnstile?: { reset: () => void };
  }).turnstile;

  turnstile?.reset();
};

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showSuccessOverlay, setShowSuccessOverlay] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    if (!showSuccessOverlay) {
      return;
    }

    const timer = window.setTimeout(() => setShowSuccessOverlay(false), 5000);
    return () => window.clearTimeout(timer);
  }, [showSuccessOverlay]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    const endpoint = resolveFormsEndpoint(contactFormId);
    if (!endpoint) {
      setStatus("error");
      setErrorMessage("Form is not configured yet.");
      return;
    }

    setStatus("submitting");
    setErrorMessage(null);

    const formData = new FormData(form);
    const clean = (value: FormDataEntryValue | null) =>
      typeof value === "string" ? value.trim() : "";
    const turnstileToken = clean(formData.get("cf-turnstile-response"));

    if (turnstileSiteKey && !turnstileToken) {
      setStatus("error");
      setErrorMessage("Please complete the anti-spam check.");
      return;
    }

    const payload = {
      first_name: clean(formData.get("first_name")),
      last_name: clean(formData.get("last_name")),
      email: clean(formData.get("email")),
      phone: clean(formData.get("phone")),
      message: clean(formData.get("message")),
    };

    try {
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };

      if (turnstileToken) {
        headers["X-Turnstile-Token"] = turnstileToken;
      }

      const response = await fetch(endpoint, {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const responseBody = await response.json().catch(() => null);
        setStatus("error");
        setErrorMessage(responseBody?.error ?? "Submission failed. Please try again.");
        resetTurnstile();
        return;
      }

      setStatus("success");
      setShowSuccessOverlay(true);
      setHasSubmitted(true);
      resetTurnstile();
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Submission failed. Please try again.");
      resetTurnstile();
    }
  };

  const isFormLocked = hasSubmitted || status === "submitting";

  return (
    <div className="contact-card relative overflow-hidden">
      {turnstileSiteKey && (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="afterInteractive"
        />
      )}

      {showSuccessOverlay && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/80 px-6 py-8 text-center backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-3xl border border-green-100 bg-white px-6 py-6 shadow-2xl">
            <SuccessView label="Message sent" size="small" />
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <p>Thanks for reaching out to Nutrition Kingdom.</p>
              <p>We&apos;ll get back to you as soon as possible.</p>
            </div>
          </div>
        </div>
      )}

      <div className={showSuccessOverlay ? "pointer-events-none blur-[1.5px]" : ""}>
        <div className="mb-6 text-center">
          <h3 className="font-lemon gradient-brand text-2xl font-bold">Contact Form</h3>
          <p className="mt-2 text-gray-600">
            Send us a note and we&apos;ll follow up with you soon.
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700" htmlFor="first_name">
                First Name
              </label>
              <input
                id="first_name"
                name="first_name"
                type="text"
                autoComplete="given-name"
                placeholder="First name"
                required
                disabled={isFormLocked}
                className="w-full rounded-xl border-2 border-green-200 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100 disabled:cursor-not-allowed disabled:opacity-70"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700" htmlFor="last_name">
                Last Name
              </label>
              <input
                id="last_name"
                name="last_name"
                type="text"
                autoComplete="family-name"
                placeholder="Last name"
                required
                disabled={isFormLocked}
                className="w-full rounded-xl border-2 border-green-200 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100 disabled:cursor-not-allowed disabled:opacity-70"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
                disabled={isFormLocked}
                spellCheck={false}
                className="w-full rounded-xl border-2 border-green-200 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100 disabled:cursor-not-allowed disabled:opacity-70"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700" htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                placeholder="(303) 555-1234"
                required
                disabled={isFormLocked}
                className="w-full rounded-xl border-2 border-green-200 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100 disabled:cursor-not-allowed disabled:opacity-70"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              autoComplete="off"
              placeholder="Tell us how we can help."
              required
              disabled={isFormLocked}
              className="min-h-[160px] w-full rounded-xl border-2 border-green-200 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100 disabled:cursor-not-allowed disabled:opacity-70"
            />
          </div>

          {turnstileSiteKey && (
            <div
              className="cf-turnstile"
              data-sitekey={turnstileSiteKey}
              data-appearance="interaction-only"
            />
          )}

          <button
            type="submit"
            disabled={isFormLocked}
            className="w-full rounded-xl bg-gradient-to-r from-green-600 to-green-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:translate-y-[-1px] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
          >
            {hasSubmitted ? "Already submitted" : status === "submitting" ? "Sending..." : "Send Message"}
          </button>

          {status === "error" && errorMessage && (
            <p className="text-sm font-medium text-red-600">{errorMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
}
