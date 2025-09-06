import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description: "Protein shakes, mega teas, açaí bowls, waffles, and healthy treats.",
  alternates: { canonical: "/menu" },
  openGraph: {
    title: "Menu | Nutrition Kingdom",
    description: "Protein shakes, mega teas, açaí bowls, waffles, and healthy treats.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://nutritionkingdom.sitepilotpreflight.com"}/menu`,
  },
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return children;
}




