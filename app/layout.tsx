import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HoursBadge from "@/components/HoursBadge";

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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://nutritionkingdom.sitepilotpreflight.com"),
  applicationName: "Nutrition Kingdom",
  title: {
    default: "Nutrition Kingdom | Protein Shakes & Energy Teas Lakewood CO",
    template: "%s | Nutrition Kingdom",
  },
  description:
    "Visit Nutrition Kingdom in Lakewood, CO for protein shakes, energy teas, waffles, and açaí bowls. Fresh, healthy, and made to fuel your day.",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://nutritionkingdom.sitepilotpreflight.com",
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
    title: "Nutrition Kingdom | Protein Shakes & Energy Teas Lakewood CO",
    description:
      "Visit Nutrition Kingdom in Lakewood, CO for protein shakes, energy teas, waffles, and açaí bowls. Fresh, healthy, and made to fuel your day.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://nutritionkingdom.club",
    siteName: "Nutrition Kingdom",
    images: [
      {
        url: "/images/social-share-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nutrition Kingdom - Protein Shakes & Mega Teas",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nutrition Kingdom | Protein Shakes & Energy Teas Lakewood CO",
    description:
      "Visit Nutrition Kingdom in Lakewood, CO for protein shakes, energy teas, waffles, and açaí bowls. Fresh, healthy, and made to fuel your day.",
    images: ["/images/social-share-image.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover", // Important for iOS Safari
  themeColor: "#16a34a",
  // Additional Safari iOS fixes
  shrinkToFit: "no",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nutrition Kingdom",
  telephone: "+1-303-862-9470",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://nutritionkingdom.sitepilotpreflight.com",
  image: `${process.env.NEXT_PUBLIC_SITE_URL || "https://nutritionkingdom.sitepilotpreflight.com"}/images/social-share-image.jpg`,
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
        <Script id="ld-json" type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </Script>
        {/* Safari iOS viewport fix */}
        <Script
          id="safari-ios-fix"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Detect Safari iOS
                var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && /iPad|iPhone|iPod/.test(navigator.userAgent);
                if (!isSafari) return;

                // Prevent Safari from adjusting viewport on scroll
                var viewport = document.querySelector('meta[name="viewport"]');
                if (viewport) {
                  viewport.setAttribute('content', viewport.getAttribute('content') + ', shrink-to-fit=no');
                }

                // Force header stability on Safari iOS
                var fixHeader = function() {
                  var header = document.querySelector('header');
                  if (header) {
                    header.style.transform = 'translateZ(0)';
                    header.style.webkitTransform = 'translateZ(0)';
                  }
                };

                // Listen for Safari's visual viewport changes
                if (window.visualViewport) {
                  window.visualViewport.addEventListener('resize', fixHeader);
                  window.visualViewport.addEventListener('scroll', fixHeader);
                }

                // Fix on orientation change
                window.addEventListener('orientationchange', function() {
                  setTimeout(fixHeader, 100);
                });
              })();
            `,
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Header />
        {children}
        <Footer />
        <HoursBadge />
        <Analytics />
      </body>
    </html>
  );
}
