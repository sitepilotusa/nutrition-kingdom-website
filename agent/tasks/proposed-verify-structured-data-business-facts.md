# Verify structured-data business facts

## Evidence

- On 2026-09-17, every live sitemap page exposed a `LocalBusiness` JSON-LD object containing
  a full street address and weekday/weekend opening hours.
- `agent/memory/site-facts.md` says the address is not verified for structured data and the
  hours are not verified.
- The same address and hours also appear visibly on the site, but visible page text is not a
  substitute for the required verification in `site-facts.md`.

## Proposed action

Isaac should verify the address and hours. If they are correct, update `site-facts.md` first
and then retain the matching JSON-LD. If either fact cannot be verified, approve a separate
change to remove that fact from the JSON-LD and reconcile the visible site content.

## Why this is proposed instead of changed

The site rules prohibit changing addresses or hours without confirmation. This run therefore
made no change to those protected business facts.
