import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu - Smoothies & Protein Shakes Lakewood",
  description: "Browse smoothies, protein shakes, and mega teas in Lakewood, CO at Nutrition Kingdom.",
  alternates: { canonical: "/menu" },
  openGraph: {
    title: "Menu - Smoothies & Protein Shakes Lakewood | Nutrition Kingdom",
    description: "Browse smoothies, protein shakes, and mega teas in Lakewood, CO at Nutrition Kingdom.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://nutritionkingdom.club"}/menu`,
  },
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return children;
}



