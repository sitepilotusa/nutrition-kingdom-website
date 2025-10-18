import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nutritionkingdom.club";

export const metadata: Metadata = {
  title: "Menu of Protein Shakes, Energy Teas & Healthy Treats in Lakewood",
  description:
    "Browse Nutrition Kingdom’s menu of protein shakes, mega teas, waffles, and açaí bowls made fresh in Lakewood, Colorado.",
  alternates: {
    canonical: `${siteUrl}/menu`,
  },
  openGraph: {
    title: "Nutrition Kingdom Menu | Protein Shakes & Energy Teas in Lakewood",
    description:
      "See the latest prices for protein shakes, mega teas, waffles, and açaí bowls at Nutrition Kingdom in Lakewood, CO.",
    url: `${siteUrl}/menu`,
    type: "website",
  },
  twitter: {
    title: "Nutrition Kingdom Menu | Protein Shakes & Energy Teas in Lakewood",
    description:
      "Explore Nutrition Kingdom’s protein shakes, mega teas, açaí bowls, and waffles made to fuel your day.",
    card: "summary_large_image",
  },
};

export default metadata;
