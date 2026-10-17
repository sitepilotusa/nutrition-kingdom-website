# Change log

| Date | File | Change (before → after) | Why | Metric to watch | Judge on | Result |
|---|---|---|---|---|---|---|
| 2026-10-17 | `app/layout.tsx` | JSON-LD absent from fetched HTML and local schema included unverified address/hours → server-rendered `LocalBusiness` JSON-LD limited to verified facts and existing page links | Live HTML exposed no JSON-LD, while `site-facts.md` prohibits publishing unverified address/hours in structured data | Valid `LocalBusiness` JSON-LD present in fetched HTML on all sitemap pages | 2026-11-14 | Pending |
| 2026-10-17 | `app/menu/layout.tsx` | `Menu - Smoothies & Protein Shakes Lakewood \| Nutrition Kingdom` (62 characters) → `Menu: Smoothies & Shakes in Lakewood \| Nutrition Kingdom` (56 characters) | Keep the title within the 60-character limit without changing the page topic | `/menu` search impressions, clicks, CTR, and average position | 2026-11-14 | Pending |
| 2026-10-17 | `app/contact/layout.tsx` | `Contact - Nutrition Kingdom Lakewood Smoothies \| Nutrition Kingdom` (66 characters) → `Contact Our Lakewood Smoothie Shop \| Nutrition Kingdom` (54 characters) | Keep the title within the 60-character limit and remove duplicated branding | `/contact` search impressions, clicks, CTR, and average position | 2026-11-14 | Pending |
