# Handoff to the next run

Check first that the 2026-10-17 repository changes have reached production: fetched HTML should
contain one `LocalBusiness` JSON-LD block without address or opening-hours fields, and the menu
and contact titles should be 56 and 54 characters. Retry the GSC pull after its HTTP 403 and
confirm whether PostHog export has been configured. Compare rankings against the 2026-10-17
baseline, especially the homepage's position for `smoothies lakewood co`. Confirm the store
address and hours with Isaac before adding either to structured data.
