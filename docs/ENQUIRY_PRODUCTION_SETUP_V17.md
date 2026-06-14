# Sawla Tours V17 — Production Enquiry Setup

## Required variables

```env
RESEND_API_KEY=
ENQUIRY_FROM_EMAIL=
ENQUIRY_TO_EMAIL=
ENQUIRY_DELIVERY_MODE=email
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
ENQUIRY_STORAGE_KEY=
ENQUIRY_RETENTION_DAYS=30
```

`ENQUIRY_STORAGE_KEY` must be a 64-character hexadecimal value representing 32 random bytes.

Generate one locally:

```bash
openssl rand -hex 32
```

## Pre-deployment checks

```bash
npm run verify:enquiry-env
npm run validate
npm run build
```

## What production mode requires

- A verified Sawla Tours sending domain.
- SPF, DKIM and DMARC configured for the sending domain.
- A team-owned destination inbox.
- A tested Reply-To path to the traveler’s address.
- An Upstash-compatible Redis REST database.
- Encrypted recovery retention agreed internally.
- An owner for delivery failures and provider alerts.

## Staging acceptance test

Submit at least three real enquiries:

1. General journey enquiry.
2. Journey-prefilled enquiry.
3. Trip Finder handoff.

For each, confirm:

- the team email arrives;
- Reply-To is correct;
- the traveler acknowledgement arrives;
- the reference matches the confirmation page;
- no personal data appears in analytics;
- a failed provider request returns an error rather than success;
- the encrypted recovery record exists and expires as configured.

## Automated local production-path test

```bash
npm run test:enquiry-production
```

This test uses local mock Redis and email endpoints. It verifies distributed limiting, encrypted pending/delivered records, provider calls and HTTP 429 behavior. It does not replace staging delivery to real inboxes.
