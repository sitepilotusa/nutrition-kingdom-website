import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nutritionkingdom.club";

export const metadata: Metadata = {
  title: "Contact Nutrition Kingdom in Lakewood, Colorado",
  description:
    "Reach Nutrition Kingdom in Lakewood, CO for questions about protein shakes, teas, waffles, and açaí bowls. Call, visit, or send us a message.",
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact Nutrition Kingdom | Lakewood Protein Shake Bar",
    description:
      "Get in touch with Nutrition Kingdom in Lakewood, Colorado for healthy shakes, teas, and more.",
    url: `${siteUrl}/contact`,
    type: "website",
  },
  twitter: {
    title: "Contact Nutrition Kingdom | Lakewood Protein Shake Bar",
    description:
      "Contact Nutrition Kingdom in Lakewood, CO for protein shakes, mega teas, waffles, and açaí bowls.",
    card: "summary_large_image",
  },
};

export default metadata;
