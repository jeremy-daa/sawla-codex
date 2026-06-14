# Live Contact & Enquiry Audit — V15

## Public route duplication

The live website exposes both:

- `/enquire`
- `/contact-us`

They target overlapping contact intent with different copy and form depth. V15 consolidates this into one canonical planning route and permanently redirects the old contact URL.

## Live enquiry-page weaknesses addressed

- broad “book your trip” language before qualification;
- old tour-category labels that no longer match the nine-category canonical architecture;
- film-related options that conflict with the V14.1 brand-separation decision;
- a large form without a clear delivery and confirmation contract;
- an absolute 24-hour response statement rather than a realistic business-day target;
- an unsupported return/referral percentage used as conversion proof;
- no visible enquiry reference or dedicated conversion confirmation route;
- duplicate enquiry and contact SEO intent.

## Supplied Codex implementation defect addressed

The pre-V15 React form used standard browser form submission while the API route parsed JSON only. The API then logged a payload and returned success without a configured email provider. This could create silent lead loss.

V15 aligns the browser and API contract, provides production email delivery, and returns success only after the team-facing email is accepted by the provider.

## Content strategy

The new page is intentionally planning-led rather than sales-led. It:

- reassures visitors they do not need a finished itinerary;
- keeps required fields limited;
- qualifies dates, group size and route priorities;
- explains what happens next;
- gives direct email and WhatsApp fallbacks;
- avoids unsupported numerical proof;
- avoids collecting sensitive documents;
- uses the 25 canonical journey dataset for product context.
