import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Nutrition Kingdom in Lakewood, CO.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Nutrition Kingdom",
    description: "Get in touch with Nutrition Kingdom in Lakewood, CO.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://nutritionkingdom.sitepilotpreflight.com"}/contact`,
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}


