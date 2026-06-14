# Contact & Enquiry Conversion QA — V15

## Automated release checks

```bash
npm ci
npm run validate
npm run build
```

`npm run validate` now includes:

- Sawla Tours / Sawla Films brand separation;
- 25 canonical journey integrity;
- enquiry-system file and implementation markers;
- TypeScript;
- ESLint.

## Staging functional test

Use a real staging domain and a test inbox.

### General enquiry

- Open `/enquire` directly.
- Submit the minimum required fields.
- Confirm the team email arrives.
- Confirm `Reply-To` targets the visitor email.
- Confirm the visitor acknowledgement arrives.
- Confirm the reference matches the confirmation page.

### Canonical journey enquiry

- Open a canonical journey.
- Use its enquiry CTA.
- Confirm the journey appears in the form.
- Confirm the same authoritative journey title appears in the team email.

### Trip Finder handoff

- Complete all five Trip Finder questions.
- Continue to the full form.
- Confirm dates, duration, interests, travellers, budget and source are prefilled.

### Validation

Confirm errors for:

- malformed email;
- missing travel dates;
- missing duration;
- zero adults;
- short message;
- missing privacy acknowledgement;
- WhatsApp preference without a phone number.

### Delivery failure

- Remove or invalidate the delivery API key in staging.
- Confirm the form returns a visible delivery error.
- Confirm it does not redirect to the thank-you page.
- Confirm direct email and WhatsApp alternatives remain visible.

### Spam and abuse

- Fill the hidden honeypot through a test script and confirm silent acceptance without delivery.
- Submit in under 3.5 seconds through a script and confirm no team email.
- Submit more than the rate threshold and confirm HTTP 429 and `Retry-After`.
- Confirm oversized requests receive HTTP 413.

### Redirects

- `/contact-us` → permanent redirect to `/enquire`
- `/contact` → permanent redirect to `/enquire`

### Privacy

- Confirm the form links to `/privacy-policy`.
- Confirm no sensitive documents or payment fields are present.
- Confirm no personal data appears in analytics events or confirmation URLs.

### Accessibility

- Complete the form by keyboard only.
- Confirm focus moves to the error summary after a failed submission.
- Confirm visible labels exist for every input.
- Confirm required state is understandable without colour alone.
- Confirm error text is announced by a screen reader.
- Confirm the loading state disables repeat submission.

### Mobile

Test at common widths:

- 360 px;
- 390 px;
- 768 px;
- 1024 px;
- 1440 px.

Verify the WhatsApp control does not obscure the submit button or error message.

## Analytics

On a successful test, confirm the data layer receives:

```json
{
  "event": "generate_lead",
  "enquiry_reference": "ST-YYYYMMDD-XXXXXXXX",
  "lead_type": "private_ethiopia_journey"
}
```

Do not add email, phone, name, dates or message content to analytics.

## Launch acceptance criteria

- At least three successful end-to-end submissions from different devices.
- At least one failed-delivery test.
- At least one journey-prefill test.
- At least one Trip Finder handoff test.
- Team and guest email rendering reviewed on mobile and desktop.
- Inbox ownership and response workflow documented.
- Hosting variables confirmed in the production environment.
