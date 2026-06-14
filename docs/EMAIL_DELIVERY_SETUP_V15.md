# Production Email Delivery Setup — V15

## Delivery provider

The route sends email through the Resend HTTPS API without adding another runtime package. Production requires a Resend account, API key and verified sending domain.

## Required environment variables

Copy `.env.example` into the hosting environment and set real values:

```env
RESEND_API_KEY=re_xxxxxxxxx
ENQUIRY_FROM_EMAIL="Sawla Tours <enquiries@sawlatours.com>"
ENQUIRY_TO_EMAIL=explore@sawlatours.com
ENQUIRY_DELIVERY_MODE=email
```

`ENQUIRY_TO_EMAIL` may contain comma-separated internal recipients.

## Optional workflow delivery

```env
ENQUIRY_WEBHOOK_URL=https://your-secure-workflow-endpoint.example/enquiries
ENQUIRY_WEBHOOK_SECRET=replace-with-a-long-secret
```

The webhook receives:

```json
{
  "event": "sawla_tours.enquiry.created",
  "enquiry": { "...validated fields...": "..." }
}
```

The webhook is supplemental. A webhook failure is logged but does not tell the traveller that the already delivered team email failed.

## Domain setup

1. Add and verify the Sawla Tours sending domain in Resend.
2. Publish the DNS records provided by the delivery service.
3. Use a sender address on the verified domain.
4. Keep the team inbox able to receive direct replies.
5. Test Gmail, Outlook and at least one non-Google mailbox.
6. Review SPF, DKIM and DMARC alignment before launch.

## Local and staging mode

Use:

```env
ENQUIRY_DELIVERY_MODE=log
```

Log mode validates the complete request and returns a real-looking reference but does not send email. It should not be used for the production public form.

## Failure behaviour

Production defaults to email mode. If the API key or verified sender configuration is absent, the endpoint returns HTTP 503 with direct email and WhatsApp alternatives. This prevents silent lead loss.

## Idempotency

The team and acknowledgement messages use separate idempotency keys based on the same enquiry reference:

```text
sawla-enquiry/<reference>/team
sawla-enquiry/<reference>/guest
```

This prevents duplicate sends during safe retries within the provider’s idempotency window.

## Inbox operations

Before launch, define:

- the primary person responsible for the inbox;
- a backup recipient;
- how references are recorded;
- acknowledgement and proposal targets;
- spam-folder review responsibility;
- the escalation path for urgent, high-value or date-sensitive enquiries;
- the retention and deletion process described by the privacy policy.

## CRM or workflow mapping

Recommended fields:

- reference → external lead ID;
- name and email → contact;
- phone and preferred contact method;
- journey slug and journey title;
- travel dates and flexibility;
- adult and child counts;
- duration, interests, style, pace and budget;
- message and considerations;
- source, landing page, referrer and UTMs;
- submitted timestamp;
- status: new / acknowledged / qualifying / proposal / won / lost.
