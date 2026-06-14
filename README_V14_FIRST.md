# Sawla Tours Codex V14 — Trust Architecture

V14 upgrades the About, team, guides, drivers, vehicles, mobile camps, responsible travel, safety and Why Sawla system on top of the completed V13 canonical-journey project.

## Use this release when

- replacing the V13 reference project; or
- reviewing the complete V14 integration before applying the focused merge patch to a newer Codex repository.

## Do not overwrite newer work blindly

The focused V14 merge patch is preferred when the production repository contains newer destination, Travel Guide, photography, analytics, enquiry or deployment work. Read `docs/MERGE_GUIDE_V14.md` first.

## What V14 deliberately does not rebuild

- destination hub or destination detail copy;
- Tours by Experience hub/category content;
- the 25 canonical journey products;
- Ethiopia Travel Guide content;
- testimonials/case studies;
- Sawla Films content, except cross-links;
- enquiry-system logic.

## Validation

- TypeScript: passed
- ESLint: passed with no warnings/errors
- Canonical journey validation: passed
- Next.js production build: passed
- Static pages generated: 105/105
- New/updated trust routes tested: 9/9 HTTP 200
- Representative legacy About redirects: 6/6 HTTP 308
