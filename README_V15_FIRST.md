# Sawla Tours V15 — Contact & Enquiry Conversion System

V15 upgrades the traveller enquiry path on top of the completed V14.1 brand-separated, V14 trust-architecture and V13 canonical-journey releases.

## Start here

1. Read `docs/CONTACT_ENQUIRY_ARCHITECTURE_V15.md`.
2. Configure production delivery using `docs/EMAIL_DELIVERY_SETUP_V15.md` and `.env.example`.
3. Run `npm ci && npm run validate && npm run build`.
4. Complete the staged submission tests in `docs/CONVERSION_QA_V15.md`.
5. Use `docs/MERGE_GUIDE_V15.md` when applying the focused patch to a newer repository.

## Important launch rule

A successful browser response means the team-facing email was accepted by the configured delivery provider. In production, missing delivery credentials return an explicit error; the form does not pretend an enquiry was sent.

## What V15 deliberately does not rebuild

- destination hub or destination detail content;
- Tours by Experience or the 25 canonical products;
- trust/about architecture;
- Ethiopia Travel Guide;
- testimonials or case studies beyond enquiry-response wording consistency;
- photography or the final sitewide CRO/technical QA phase.
