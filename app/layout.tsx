import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HoursBadge from "@/components/HoursBadge";
import { PostHogProvider } from "@/components/PostHogProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lemonMilk = localFont({
  src: [
    { path: "../public/fonts/LEMONMILK-Light.woff2", weight: "300", style: "normal" },
    { path: "../public/fonts/LEMONMILK-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/LEMONMILK-RegularItalic.woff2", weight: "400", style: "italic" },
    { path: "../public/fonts/LEMONMILK-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/LEMONMILK-MediumItalic.woff2", weight: "500", style: "italic" },
    { path: "../public/fonts/LEMONMILK-Bold.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/LEMONMILK-BoldItalic.woff2", weight: "700", style: "italic" },
  ],
  variable: "--font-lemon-milk",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://nutritionkingdom.club"),
  applicationName: "Nutrition Kingdom",
  title: {
    default: "Nutrition Kingdom | Smoothies & Protein Shakes Lakewood CO",
    template: "%s | Nutrition Kingdom",
  },
  description:
    "Lakewood, CO smoothie bar for protein shakes near me. Nutrition Kingdom pours mega teas, waffles, and healthy bites to power your day.",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://nutritionkingdom.club",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
  openGraph: {
    title: "Nutrition Kingdom | Smoothies & Protein Shakes Lakewood CO",
    description:
      "Lakewood, CO smoothie bar for protein shakes near me. Nutrition Kingdom pours mega teas, waffles, and healthy bites to power your day.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://nutritionkingdom.club",
    siteName: "Nutrition Kingdom",
    images: [
      {
        url: "/images/social-share-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nutrition Kingdom - Smoothies & Protein Shakes in Lakewood",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nutrition Kingdom | Smoothies & Protein Shakes Lakewood CO",
    description:
      "Lakewood, CO smoothie bar for protein shakes near me. Nutrition Kingdom pours mega teas, waffles, and healthy bites to power your day.",
    images: ["/images/social-share-image.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#16a34a",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nutrition Kingdom",
  telephone: "+1-303-862-9470",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://nutritionkingdom.club",
  image: `${process.env.NEXT_PUBLIC_SITE_URL || "https://nutritionkingdom.club"}/images/social-share-image.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "1535 S Kipling Pkwy Unit G",
    addressLocality: "Lakewood",
    addressRegion: "CO",
    postalCode: "80232",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "16:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "09:00",
      closes: "14:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/nutritionkingdomlakewood/",
    "https://www.facebook.com/NutritionKingdomLakewood",
  ],
};

const SITEPILOT_POSTHOG_TOKEN = "phc_n6Lz7n84pwzx3znBRdr6WizGostEeXkmnfCykSdzLg69";
const SITEPILOT_POSTHOG_HOST = "https://us.i.posthog.com";
const SITEPILOT_ANALYTICS_METADATA = {
  sitepilot_client_id: "nutrition-kingdom",
  sitepilot_client_name: "Nutrition Kingdom",
  sitepilot_site_domain: "nutritionkingdom.club",
  sitepilot_environment: "production",
};

function buildSitePilotPageviewScript() {
  return `
    (() => {
      const token = ${JSON.stringify(SITEPILOT_POSTHOG_TOKEN)};
      const endpoint = ${JSON.stringify(SITEPILOT_POSTHOG_HOST + "/e/")};
      const siteMetadata = ${JSON.stringify(SITEPILOT_ANALYTICS_METADATA)};
      const distinctIdKey = "sitepilot_posthog_distinct_id";
      const sessionIdKey = "sitepilot_posthog_session_id";
      let lastCapturedUrl = null;

      function randomId() {
        return window.crypto && "randomUUID" in window.crypto
          ? window.crypto.randomUUID()
          : String(Date.now()) + "-" + Math.random().toString(16).slice(2);
      }

      function getStoredId(storage, key) {
        try {
          const existing = storage.getItem(key);
          if (existing) return existing;
          const next = randomId();
          storage.setItem(key, next);
          return next;
        } catch {
          return randomId();
        }
      }

      function getDeviceType() {
        const ua = navigator.userAgent || "";
        if (/ipad|tablet|playbook|silk/i.test(ua)) return "Tablet";
        if (/mobile|iphone|ipod|android.*mobile|blackberry|phone/i.test(ua)) return "Mobile";
        return "Desktop";
      }

      function getReferringDomain(referrer) {
        try {
          return referrer ? new URL(referrer).hostname : "";
        } catch {
          return "";
        }
      }

      function getBaseProperties(lib) {
        const referrer = document.referrer || "";
        return {
          token,
          $current_url: window.location.href,
          $host: window.location.hostname,
          $pathname: window.location.pathname,
          $lib: lib,
          $session_id: getStoredId(window.sessionStorage, sessionIdKey),
          $device_type: getDeviceType(),
          $raw_user_agent: navigator.userAgent,
          $browser_language: navigator.language,
          $browser_language_prefix: navigator.language ? navigator.language.split("-")[0] : "",
          $referrer: referrer,
          $referring_domain: getReferringDomain(referrer),
          $screen_height: window.screen.height,
          $screen_width: window.screen.width,
          $viewport_height: window.innerHeight,
          $viewport_width: window.innerWidth,
          title: document.title,
          ...siteMetadata,
        };
      }

      function sendEvent(eventName, properties, lib) {
        if (!eventName || typeof eventName !== "string") return;
        const payload = JSON.stringify({
          api_key: token,
          event: eventName,
          distinct_id: getStoredId(window.localStorage, distinctIdKey),
          properties: {
            ...getBaseProperties(lib),
            ...(properties && typeof properties === "object" ? properties : {}),
          },
        });

        if (navigator.sendBeacon) {
          const sent = navigator.sendBeacon(endpoint, new Blob([payload], { type: "application/json" }));
          if (sent) return;
        }

        fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: payload,
          keepalive: true,
          mode: "cors",
        }).catch(() => {});
      }

      function capturePageview() {
        const currentUrl = window.location.href;
        if (currentUrl === lastCapturedUrl) return;
        lastCapturedUrl = currentUrl;
        sendEvent("$pageview", {}, "sitepilot-direct-pageview");
      }

      function parseInlineProperties(raw) {
        if (!raw) return {};
        try {
          const parsed = JSON.parse(raw);
          return parsed && typeof parsed === "object" ? parsed : {};
        } catch {
          return {};
        }
      }

      function captureCustomEvent(eventName, properties) {
        sendEvent(eventName, properties || {}, "sitepilot-direct-custom-event");
      }

      window.sitepilotTrack = captureCustomEvent;

      document.addEventListener("click", (event) => {
        const clicked = event.target instanceof Element
          ? event.target.closest("[data-sitepilot-event]")
          : null;
        if (!clicked) return;

        const eventName = clicked.getAttribute("data-sitepilot-event");
        const href = clicked instanceof HTMLAnchorElement ? clicked.href : clicked.getAttribute("href") || "";
        const section = clicked.closest("section[id]");
        captureCustomEvent(eventName, {
          ...parseInlineProperties(clicked.getAttribute("data-sitepilot-properties")),
          cta_text: (clicked.textContent || "").trim().replace(/\s+/g, " ").slice(0, 120),
          destination_url: href,
          page_path: window.location.pathname,
          page_section: section ? section.id : "",
          element_tag: clicked.tagName.toLowerCase(),
        });
      });

      capturePageview();

      const originalPushState = history.pushState;
      const originalReplaceState = history.replaceState;
      history.pushState = function pushState() {
        const result = originalPushState.apply(this, arguments);
        setTimeout(capturePageview, 0);
        return result;
      };
      history.replaceState = function replaceState() {
        const result = originalReplaceState.apply(this, arguments);
        setTimeout(capturePageview, 0);
        return result;
      };
      window.addEventListener("popstate", () => setTimeout(capturePageview, 0));
    })();
  `;
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${lemonMilk.variable} antialiased`}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="preconnect" href="https://maps.google.com" />
        <link rel="dns-prefetch" href="https://maps.google.com" />
        <link rel="preconnect" href="https://www.cognitoforms.com" />
        <link rel="dns-prefetch" href="https://www.cognitoforms.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <Script id="ld-json" type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </Script>
      </head>
      <body>
        <Script
          id="sitepilot-posthog-pageviews"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: buildSitePilotPageviewScript() }}
        />
        <Suspense fallback={null}>
          <PostHogProvider>
            <a href="#main-content" className="skip-link">Skip to main content</a>
            <Header />
            {children}
            <Footer />
            <HoursBadge />
            <Analytics />
          </PostHogProvider>
        </Suspense>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V6S6N9ZR6R"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V6S6N9ZR6R');
          `}
        </Script>
      </body>
    </html>
  );
}
