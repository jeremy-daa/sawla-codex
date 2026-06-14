# Sawla Tours Traveller Reviews & Journey Case Studies — V16 Deployment Guide

## Publishing principle

No review may appear publicly unless one of these conditions is met:

1. **Verified external review** — a stable public source URL, reviewer display name, review date and verification date are stored.
2. **Verified direct feedback with consent** — the original email/message or signed feedback record is stored, and written permission defines how the name, country, image and quote may be used.

Anything else remains `pending-evidence` or `draft-only` and must not be imported by public pages.

## Public routes

- `/testimonials` — verified review and case-study hub
- `/testimonials/[slug]` — individual verified traveller story or journey-design study

## Content distinction

### Verified traveller story

A real client experience supported by an external review or documented direct feedback. The page must identify its source status and must not expand the client’s claims beyond the evidence.

### Journey-design study

An editorial explanation of planning decisions. It may use the canonical journey architecture and Sawla operating standards, but it must state that it is **not** a client testimonial or proof of a completed departure.

## Structured data

- Hub: `CollectionPage`, `ItemList`, `BreadcrumbList`
- Detail: `Article`, `BreadcrumbList`
- Do not add `Review` or `AggregateRating` to Sawla-owned pages for reviews of Sawla Tours.

## Review intake checklist

Before changing a record to `verified-direct-consent`, store:

- Original source file or message
- Client identity match
- Journey and travel date
- Final approved quote
- Permission for name format
- Permission for country
- Permission for photograph, if any
- Date permission was received
- Staff member who verified it
- Withdrawal/contact process

## Deployment commands

```bash
npm ci
npm run validate:stories
npm run validate
npm run build
```

## Do not do

- Do not publish placeholder reviews as real.
- Do not add five-star icons to an unrated direct quote.
- Do not create an aggregate rating from internal records.
- Do not paraphrase a client into stronger praise.
- Do not mix editorial case studies into review counts.
