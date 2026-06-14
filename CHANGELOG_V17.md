# Changelog V17 — Priority 0 Production Readiness

**Release:** 1.7.0
**Reviewed:** 14 June 2026
**Baseline:** V16 Traveller Stories

## Added

- Six restored destination records, bringing the active total to 18.
- Distributed Upstash-compatible enquiry rate limiter.
- Encrypted, time-limited enquiry recovery store.
- Production enquiry environment verifier.
- End-to-end production-mode enquiry smoke test with mocked Redis and email provider.
- Production-readiness validator.
- Content Security Policy and modern cross-origin/security headers.
- Current-source callouts for entry, safety and travel-health guidance.
- Exact last-reviewed labels on date-sensitive content.

## Changed

- Root metadata no longer appends a duplicate Sawla Tours suffix.
- Root layout no longer assigns the homepage canonical to child pages.
- Homepage WebSite/TravelAgency/FAQ schema is now emitted only on the homepage.
- Sitemap includes all 18 destinations, 15 Travel Guide articles, 7 species pages, 25 products and 6 case studies.
- Desktop and mobile navigation now support keyboard operation, focus trapping, Escape, focus restoration and route-change closure.
- Public “canonical journey” terminology changed to “signature journey” or “selected journey.”
- Date-sensitive travel, visa, health, wildlife, vehicle, access, market and flight statements use conditional or official-source language.
- Internal destination references use current canonical URLs.
- Enquiry delivery now fails closed if durable storage, distributed limiting or the email provider is unavailable in production.
- Privacy copy reflects encrypted recovery, retention and current analytics behavior.

## Removed

- Non-functional Sawla Moments newsletter form.
- Globally injected homepage schema.
- Root canonical inheritance.
- Obsolete `X-XSS-Protection` header.
- Duplicate redirect definitions.
- Unsupported safety, visa, wildlife and operational guarantees identified by the audit.

## Preserved

- 25 signature journey products.
- 9 journey categories.
- 256 itinerary days.
- 18 destination editorial records.
- Travel Guide and species content.
- Brand separation safeguards.
- Evidence-led testimonial policy.
- Existing visual system, image slots and photography placeholders.
