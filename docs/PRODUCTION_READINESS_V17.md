# Sawla Tours V17 — Priority 0 Production Readiness

## Release objective

Turn the strong V16 editorial and application foundation into a technically coherent pre-production release without undertaking the separate photography implementation phase.

## Fourteen completed remediation items

### 1. Destination integration restored

The project again uses one 18-record destination registry. Public counts, route generation, journey relationships and sitemap entries derive from that registry. Arba Minch/Nech Sar, Konso, Awash–Alledeghi, Chebera Churchura, Gambella and Kafta Sheraro are restored rather than rewritten.

### 2. Duplicate titles corrected

The root title template no longer appends a second brand suffix to titles that already contain Sawla Tours.

### 3. Canonical inheritance corrected

The root layout no longer defines a homepage canonical. Every indexable template owns or generates its appropriate canonical.

### 4. Homepage schema isolated

Homepage WebSite, TravelAgency and visible homepage FAQ markup is emitted on `/` only, not on every route.

### 5. Sitemap completed

The sitemap now contains all destination, Travel Guide, species, journey-category, product, editorial-story and required static URLs.

### 6. Wildlife canonical corrected

`/ethiopia-wildlife/endemic-species` now self-canonicalizes.

### 7. Traveler-facing terminology corrected

Internal portfolio language is retained only in data/code where technically useful. Public interfaces use “signature journeys,” “journey ideas” or “selected journey.”

### 8. Navigation accessibility rebuilt

Desktop dropdowns and the mobile navigation support keyboard opening, `aria-expanded`, menu focus movement, Escape, focus trap, body scroll lock, inert background, route-change closure and focus restoration.

### 9. Newsletter risk removed

The Sawla Moments newsletter was removed because no real consent, provider, endpoint, success or failure workflow existed. It can be reintroduced only as a complete consent-led system.

### 10. High-risk claims controlled

Static promises about safety, immigration, flights, markets, escorts, vehicles, health, wildlife numbers, sightings and volcanic access were removed or made explicitly date/route dependent. Official-source and qualified-professional direction is used where appropriate.

### 11. Enquiry delivery hardened

Production enquiry processing now requires:

- provider acceptance of the team email;
- distributed request limiting;
- encrypted recovery storage before delivery;
- bounded retention;
- provider and storage failure reporting;
- no false success when configuration is absent.

### 12. Canonical internal links

Known internal links that relied on migration redirects now point directly to the destination canonical URLs. Legacy external visits still receive permanent redirects.

### 13. Freshness labels updated

Date-sensitive Travel Guide, destination and species content now displays an exact review date of 14 June 2026 where implemented. The date signals review—not guaranteed future accuracy.

### 14. CSP and modern security headers

The project now enforces a Content Security Policy and removes the obsolete X-XSS header. Cross-origin, framing, referrer, permissions, MIME and transport headers are set centrally.

## Photography boundary

No final photography was installed, changed or approved in this release. Placeholder/image-slot behavior remains a known visual launch dependency.
