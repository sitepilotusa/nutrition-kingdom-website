# Verify the published store address and hours

Ask Isaac to confirm the exact address and current opening hours. The homepage and contact page
publish `1535 S Kipling Pkwy Unit G, Lakewood, CO 80232`; the contact page also publishes weekday
and weekend hours. `agent/memory/site-facts.md` marks the address and hours as unverified, so the
agent cannot change those page details or add them to structured data without confirmation.

After confirmation, update `agent/memory/site-facts.md` first, then reconcile the visible pages,
map links, hours components, and `LocalBusiness` JSON-LD.
