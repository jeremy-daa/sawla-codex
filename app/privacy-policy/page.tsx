import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | Sawla Tours",
  description: "How Sawla Tours collects, uses, and protects your personal data when you use our website or enquire about Ethiopia travel.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.sawlatours.com/privacy-policy" },
}

const LAST_UPDATED = "14 June 2026"
const CONTACT_EMAIL = "explore@sawlatours.com"
const COMPANY = "Sawla Tours"
const ADDRESS = "Addis Ababa, Ethiopia"

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-20 bg-ivory">
      <div className="container-max max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-12 pb-8 border-b border-sand">
          <Link href="/" className="text-gold hover:underline font-body text-sm mb-6 inline-block">← Back to home</Link>
          <span className="label-eyebrow block">Legal</span>
          <h1 className="heading-display text-volcanic mt-2" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
            Privacy Policy
          </h1>
          <p className="text-warmgrey font-body mt-4" style={{ fontSize: "14px" }}>
            Last updated: {LAST_UPDATED}. This policy applies to the website at sawlatours.com and all related services operated by {COMPANY}.
          </p>
        </div>

        {/* Body */}
        <div className="prose-luxury space-y-0">

          <section className="mb-10">
            <h2 className="font-display text-volcanic font-normal mb-4" style={{ fontSize: "clamp(1.25rem,2vw,1.5rem)" }}>
              1. Who We Are
            </h2>
            <p className="text-warmgrey font-body leading-relaxed mb-4" style={{ fontSize: "0.9375rem" }}>
              {COMPANY} is a private tour operator based in {ADDRESS}. We design and operate private, tailor-made Ethiopia journeys for individual travelers, families, and specialist groups. References to &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo; in this policy refer to Sawla Tours.
            </p>
            <p className="text-warmgrey font-body leading-relaxed" style={{ fontSize: "0.9375rem" }}>
              We are the data controller for personal data collected through this website. Questions or requests related to this policy should be directed to:{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold hover:underline">{CONTACT_EMAIL}</a>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-volcanic font-normal mb-4" style={{ fontSize: "clamp(1.25rem,2vw,1.5rem)" }}>
              2. What Data We Collect
            </h2>
            <p className="text-warmgrey font-body leading-relaxed mb-4" style={{ fontSize: "0.9375rem" }}>
              We collect personal data only when you voluntarily provide it. The primary way we receive personal data is through our enquiry form, which may include:
            </p>
            <ul className="space-y-2 mb-4 text-warmgrey font-body" style={{ fontSize: "0.9375rem" }}>
              {[
                "Name",
                "Email address",
                "WhatsApp or phone number (if provided)",
                "Country of residence",
                "Travel dates and preferences",
                "Group size and composition",
                "Budget range (if provided)",
                "Interests and trip preferences",
                "Any other information you choose to include in your message",
                "Basic enquiry-source information, such as the page used, referrer, or campaign parameters",
                "A submission reference and technical anti-spam information",
              ].map(item => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="text-gold mt-1.5 flex-shrink-0">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-warmgrey font-body leading-relaxed" style={{ fontSize: "0.9375rem" }}>
              We do not collect payment card details through this website. If a booking proceeds to payment, payment is handled through a separate, secure process communicated directly by our team.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-volcanic font-normal mb-4" style={{ fontSize: "clamp(1.25rem,2vw,1.5rem)" }}>
              3. How We Use Your Data
            </h2>
            <p className="text-warmgrey font-body leading-relaxed mb-4" style={{ fontSize: "0.9375rem" }}>
              We use the personal data you provide solely to:
            </p>
            <ul className="space-y-2 text-warmgrey font-body" style={{ fontSize: "0.9375rem" }}>
              {[
                "Respond to your travel enquiry",
                "Design and propose a travel itinerary based on your interests and requirements",
                "Communicate with you about your planned journey",
                "Coordinate travel logistics (guides, accommodation, transport, permits) for confirmed bookings",
                "Comply with legal obligations in Ethiopia and, where applicable, international data protection law",
              ].map(item => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="text-gold mt-1.5 flex-shrink-0">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-volcanic font-normal mb-4" style={{ fontSize: "clamp(1.25rem,2vw,1.5rem)" }}>
              4. Legal Basis for Processing
            </h2>
            <p className="text-warmgrey font-body leading-relaxed mb-4" style={{ fontSize: "0.9375rem" }}>
              Where GDPR or similar data protection frameworks apply to you (for example, if you are a resident of the European Union, United Kingdom, or a country with comparable legislation), we process your personal data on the following legal bases:
            </p>
            <ul className="space-y-3 text-warmgrey font-body" style={{ fontSize: "0.9375rem" }}>
              <li className="flex items-start gap-2.5">
                <span className="text-gold mt-1.5 flex-shrink-0">–</span>
                <span><strong className="text-volcanic font-semibold">Pre-contractual and contractual necessity:</strong> When you submit an enquiry, you are asking us to provide a service. Processing your data to respond, design an itinerary, and coordinate a journey is necessary to enter into and perform a contract with you.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-gold mt-1.5 flex-shrink-0">–</span>
                <span><strong className="text-volcanic font-semibold">Legitimate interests:</strong> We have a legitimate business interest in maintaining records of correspondence and confirmed bookings for operational and legal purposes.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-gold mt-1.5 flex-shrink-0">–</span>
                <span><strong className="text-volcanic font-semibold">Legal compliance:</strong> We may process or retain data where required by Ethiopian law or other applicable legal obligations.</span>
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-volcanic font-normal mb-4" style={{ fontSize: "clamp(1.25rem,2vw,1.5rem)" }}>
              5. Data Sharing
            </h2>
            <p className="text-warmgrey font-body leading-relaxed mb-4" style={{ fontSize: "0.9375rem" }}>
              We do not sell, rent, or trade your personal data to any third party.
            </p>
            <p className="text-warmgrey font-body leading-relaxed mb-4" style={{ fontSize: "0.9375rem" }}>
              For confirmed journeys, we may share necessary data with:
            </p>
            <ul className="space-y-2 text-warmgrey font-body mb-4" style={{ fontSize: "0.9375rem" }}>
              {[
                "Licensed guides and drivers involved in your journey (names and contact details)",
                "Accommodation providers (for reservation purposes)",
                "Ethiopian Airlines and other domestic carriers (for flight bookings)",
                "Relevant government authorities in Ethiopia (for permits, where required)",
                "Our email service provider (for delivering your enquiry and acknowledgement)",
                "A customer-relationship or workflow provider, if configured for enquiry follow-up",
                "An encrypted cloud data store used for short-term delivery recovery and abuse prevention",
              ].map(item => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="text-gold mt-1.5 flex-shrink-0">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-warmgrey font-body leading-relaxed" style={{ fontSize: "0.9375rem" }}>
              We share only the minimum data necessary for operational purposes. Third parties we work with are required to handle your data appropriately.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-volcanic font-normal mb-4" style={{ fontSize: "clamp(1.25rem,2vw,1.5rem)" }}>
              6. Data Retention
            </h2>
            <p className="text-warmgrey font-body leading-relaxed mb-4" style={{ fontSize: "0.9375rem" }}>
              A newly submitted enquiry may be kept in encrypted operational recovery storage for up to 30 days so a delivery failure can be investigated without asking you to resubmit. Correspondence used for active planning may be retained for up to 24 months when an enquiry does not become a booking, unless a shorter period is required or you ask us to delete non-essential data.
            </p>
            <p className="text-warmgrey font-body leading-relaxed" style={{ fontSize: "0.9375rem" }}>
              For confirmed bookings, we retain records for a period consistent with our legal and operational obligations (generally up to 7 years for financial records). You may request earlier deletion of non-essential personal data at any time.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-volcanic font-normal mb-4" style={{ fontSize: "clamp(1.25rem,2vw,1.5rem)" }}>
              7. Cookies and Website Analytics
            </h2>
            <p className="text-warmgrey font-body leading-relaxed mb-4" style={{ fontSize: "0.9375rem" }}>
              The current website does not enable non-essential advertising or analytics cookies by default. Essential browser storage may be used only where required for security, accessibility or form operation. If non-essential analytics are introduced later, this policy and the consent controls will be updated before those tools are activated.
            </p>
            <p className="text-warmgrey font-body leading-relaxed" style={{ fontSize: "0.9375rem" }}>
              You can control browser storage through your browser settings. Blocking non-essential storage will not prevent you from reading the website or sending an enquiry.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-volcanic font-normal mb-4" style={{ fontSize: "clamp(1.25rem,2vw,1.5rem)" }}>
              8. Your Rights
            </h2>
            <p className="text-warmgrey font-body leading-relaxed mb-4" style={{ fontSize: "0.9375rem" }}>
              Where applicable data protection law gives you these rights, you may:
            </p>
            <ul className="space-y-2 text-warmgrey font-body mb-4" style={{ fontSize: "0.9375rem" }}>
              {[
                "Request access to the personal data we hold about you",
                "Request correction of inaccurate personal data",
                "Request deletion of your personal data (subject to legal retention obligations)",
                "Object to processing of your personal data",
                "Request restriction of processing in certain circumstances",
                "Request a copy of your data in a portable format",
              ].map(item => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="text-gold mt-1.5 flex-shrink-0">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-warmgrey font-body leading-relaxed" style={{ fontSize: "0.9375rem" }}>
              To exercise any of these rights, email us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold hover:underline">{CONTACT_EMAIL}</a>. We will respond within 30 days.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-volcanic font-normal mb-4" style={{ fontSize: "clamp(1.25rem,2vw,1.5rem)" }}>
              9. Security
            </h2>
            <p className="text-warmgrey font-body leading-relaxed" style={{ fontSize: "0.9375rem" }}>
              We take reasonable technical and organisational measures to protect personal data from unauthorised access, loss, or disclosure. This website is served over HTTPS with security headers including Strict Transport Security, X-Frame-Options, and Content Security Policy. No internet transmission is completely secure — if you have particular data security concerns, please contact us directly.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-volcanic font-normal mb-4" style={{ fontSize: "clamp(1.25rem,2vw,1.5rem)" }}>
              10. Children
            </h2>
            <p className="text-warmgrey font-body leading-relaxed" style={{ fontSize: "0.9375rem" }}>
              This website is not directed at children under 16. We do not knowingly collect personal data from children without parental consent. If you believe we have inadvertently collected data from a child, please contact us and we will delete it promptly.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-volcanic font-normal mb-4" style={{ fontSize: "clamp(1.25rem,2vw,1.5rem)" }}>
              11. Changes to This Policy
            </h2>
            <p className="text-warmgrey font-body leading-relaxed" style={{ fontSize: "0.9375rem" }}>
              We may update this policy from time to time. The &ldquo;Last updated&rdquo; date at the top of this page will reflect any changes. Material changes will be communicated to active clients by email.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-volcanic font-normal mb-4" style={{ fontSize: "clamp(1.25rem,2vw,1.5rem)" }}>
              12. Contact
            </h2>
            <p className="text-warmgrey font-body leading-relaxed" style={{ fontSize: "0.9375rem" }}>
              For any questions, requests, or concerns about this privacy policy or the way we handle your personal data, contact us at:
            </p>
            <div className="mt-4 p-5 bg-gold-faint rounded-card border border-gold/20">
              <div className="font-body font-semibold text-volcanic mb-1">{COMPANY}</div>
              <div className="text-warmgrey font-body text-sm">{ADDRESS}</div>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold hover:underline font-body text-sm mt-1 block">{CONTACT_EMAIL}</a>
            </div>
          </section>

          {/* Footer note */}
          <div className="pt-6 border-t border-sand">
            <p className="text-warmgrey/60 font-body text-sm">
              Last updated: {LAST_UPDATED}. This policy is governed by the laws of Ethiopia. Where international data protection frameworks apply, we endeavour to comply with their requirements.
            </p>
            <div className="flex gap-4 mt-3">
              <Link href="/terms" className="text-gold hover:underline font-body text-sm">Terms of Service</Link>
              <Link href="/enquire" className="text-gold hover:underline font-body text-sm">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
