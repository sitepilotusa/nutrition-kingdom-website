import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Nutrition Kingdom Lakewood Smoothies",
  description: "Connect with Nutrition Kingdom in Lakewood, CO for smoothies and protein shakes near you.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact - Nutrition Kingdom Lakewood Smoothies | Nutrition Kingdom",
    description: "Connect with Nutrition Kingdom in Lakewood, CO for smoothies and protein shakes near you.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://nutritionkingdom.club"}/contact`,
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}



