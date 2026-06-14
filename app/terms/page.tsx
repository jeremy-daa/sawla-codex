import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms & Conditions | Sawla Tours",
  description: "Sawla Tours booking terms and conditions — deposits, cancellations, travel insurance, itinerary changes, liability, and client responsibilities.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.sawlatours.com/terms" },
}

const LAST_UPDATED = "June 2026"
const CONTACT_EMAIL = "explore@sawlatours.com"

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20 bg-ivory">
      <div className="container-max max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-12 pb-8 border-b border-sand">
          <Link href="/" className="text-gold hover:underline font-body text-sm mb-6 inline-block">← Back to home</Link>
          <span className="label-eyebrow block">Legal</span>
          <h1 className="heading-display text-volcanic mt-2" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
            Terms &amp; Conditions
          </h1>
          <p className="text-warmgrey font-body mt-4" style={{ fontSize: "14px" }}>
            Last updated: {LAST_UPDATED}. These terms apply to all journeys booked through Sawla Tours. Please read them carefully before confirming a booking.
          </p>
        </div>

        <div className="space-y-0">

          <section className="mb-10">
            <h2 className="font-display text-volcanic font-normal mb-4" style={{ fontSize: "clamp(1.25rem,2vw,1.5rem)" }}>
              1. The Parties
            </h2>
            <p className="text-warmgrey font-body leading-relaxed" style={{ fontSize: "0.9375rem" }}>
              These Terms &amp; Conditions govern the relationship between Sawla Tours (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;the company&rdquo;) — a private tour operator based in Addis Ababa, Ethiopia — and the person or persons making a booking (&ldquo;you&rdquo;, &ldquo;the client&rdquo;). Submitting an enquiry does not constitute a booking. A booking is only confirmed as set out in Section 2 below.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-volcanic font-normal mb-4" style={{ fontSize: "clamp(1.25rem,2vw,1.5rem)" }}>
              2. Booking and Confirmation
            </h2>
            <p className="text-warmgrey font-body leading-relaxed mb-4" style={{ fontSize: "0.9375rem" }}>
              A booking becomes confirmed when:
            </p>
            <ul className="space-y-2 text-warmgrey font-body mb-4" style={{ fontSize: "0.9375rem" }}>
              {[
                "You have received and reviewed a written itinerary and quotation from Sawla Tours",
                "You have indicated written acceptance of the itinerary and these Terms",
                "Sawla Tours has received the required deposit payment",
              ].map(item => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="text-gold mt-1.5 flex-shrink-0">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-warmgrey font-body leading-relaxed" style={{ fontSize: "0.9375rem" }}>
              The deposit amount will be specified in your quotation. The balance is typically due no later than 60 days before the journey departure date, unless otherwise agreed in writing. For bookings made within 60 days of departure, full payment may be required at confirmation.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-volcanic font-normal mb-4" style={{ fontSize: "clamp(1.25rem,2vw,1.5rem)" }}>
              3. Pricing
            </h2>
            <p className="text-warmgrey font-body leading-relaxed mb-4" style={{ fontSize: "0.9375rem" }}>
              All prices are quoted in US Dollars (USD) unless otherwise stated. Prices are based on the cost of services at the time of quotation. Once a deposit is received and a booking is confirmed, the price is fixed for the confirmed itinerary.
            </p>
            <p className="text-warmgrey font-body leading-relaxed" style={{ fontSize: "0.9375rem" }}>
              Price increases may apply if you request changes to the itinerary after confirmation. Sawla Tours will provide a revised quotation for any significant changes before implementing them.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-volcanic font-normal mb-4" style={{ fontSize: "clamp(1.25rem,2vw,1.5rem)" }}>
              4. Cancellations by You
            </h2>
            <p className="text-warmgrey font-body leading-relaxed mb-4" style={{ fontSize: "0.9375rem" }}>
              Cancellations must be received in writing (email to {CONTACT_EMAIL}) and will take effect from the date we receive written notification. Cancellation charges are calculated from the date written notification is received:
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse text-sm font-body">
                <thead>
                  <tr className="bg-sand/50">
                    <th className="text-left p-3 border border-sand text-volcanic font-semibold">Notice period before departure</th>
                    <th className="text-left p-3 border border-sand text-volcanic font-semibold">Cancellation charge</th>
                  </tr>
                </thead>
                <tbody className="text-warmgrey">
                  {[
                    ["90 days or more", "Deposit only — remainder refunded"],
                    ["60–89 days", "50% of total journey cost"],
                    ["30–59 days", "75% of total journey cost"],
                    ["Less than 30 days", "100% of total journey cost (no refund)"],
                    ["No-show / departure without notice", "100% of total journey cost"],
                  ].map(([period, charge]) => (
                    <tr key={period} className="border-b border-sand">
                      <td className="p-3 border border-sand">{period}</td>
                      <td className="p-3 border border-sand">{charge}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-warmgrey font-body leading-relaxed" style={{ fontSize: "0.9375rem" }}>
              These charges reflect costs already committed on your behalf (accommodation deposits, internal flight tickets, guide fees, permits). We recommend comprehensive travel insurance that includes cancellation cover.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-volcanic font-normal mb-4" style={{ fontSize: "clamp(1.25rem,2vw,1.5rem)" }}>
              5. Cancellations or Changes by Sawla Tours
            </h2>
            <p className="text-warmgrey font-body leading-relaxed mb-4" style={{ fontSize: "0.9375rem" }}>
              We reserve the right to make minor modifications to confirmed itineraries where operational conditions require it (accommodation substitutions of equivalent standard, routing adjustments, timing changes). We will notify you of any material changes as soon as practicable.
            </p>
            <p className="text-warmgrey font-body leading-relaxed mb-4" style={{ fontSize: "0.9375rem" }}>
              In the event we must cancel a confirmed journey due to circumstances beyond our control — including civil unrest, natural disasters, government travel advisories, epidemic declarations, or Force Majeure events — we will offer:
            </p>
            <ul className="space-y-2 text-warmgrey font-body" style={{ fontSize: "0.9375rem" }}>
              {[
                "An alternative travel date of equivalent value, or",
                "A credit note valid for 24 months, or",
                "A refund of payments received, less non-recoverable third-party costs already incurred",
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
              6. Travel Insurance — Required
            </h2>
            <p className="text-warmgrey font-body leading-relaxed mb-4" style={{ fontSize: "0.9375rem" }}>
              <strong className="text-volcanic font-semibold">Travel insurance is mandatory for all Sawla Tours journeys.</strong> Your policy must include, at minimum:
            </p>
            <ul className="space-y-2 text-warmgrey font-body mb-4" style={{ fontSize: "0.9375rem" }}>
              {[
                "Medical expenses coverage (we recommend a minimum of USD 100,000)",
                "Emergency medical evacuation (critical for remote areas including Danakil, Simien, and Bale)",
                "Trip cancellation and curtailment",
                "Personal liability",
              ].map(item => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="text-gold mt-1.5 flex-shrink-0">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-warmgrey font-body leading-relaxed" style={{ fontSize: "0.9375rem" }}>
              Sawla Tours reserves the right to request evidence of insurance cover before or during a journey. Travelers who cannot provide evidence of appropriate insurance may be refused participation in certain activities or regions at our discretion. We are not responsible for losses arising from failure to hold adequate insurance.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-volcanic font-normal mb-4" style={{ fontSize: "clamp(1.25rem,2vw,1.5rem)" }}>
              7. Client Responsibilities
            </h2>
            <p className="text-warmgrey font-body leading-relaxed mb-4" style={{ fontSize: "0.9375rem" }}>
              By confirming a booking, you confirm that:
            </p>
            <ul className="space-y-2 text-warmgrey font-body" style={{ fontSize: "0.9375rem" }}>
              {[
                "You hold a valid passport with at least 6 months validity beyond your travel dates",
                "You have or will obtain any required Ethiopian visa or entry documentation",
                "You have disclosed any medical conditions, mobility limitations, dietary requirements, or other personal circumstances that may affect your participation in the itinerary",
                "All members of your group are fit to participate in the activities included in your itinerary",
                "You will follow the guidance of your Sawla Tours guide and driver on safety and cultural protocol matters",
                "You will behave with respect toward local communities, religious sites, and wildlife",
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
              8. Itinerary Changes During Travel
            </h2>
            <p className="text-warmgrey font-body leading-relaxed mb-4" style={{ fontSize: "0.9375rem" }}>
              Ethiopia is a complex travel destination. Road conditions, weather, political developments, wildlife access, and community dynamics can require adjustments to confirmed itineraries during travel. Sawla Tours reserves the right to modify routes, accommodation, or activities where safety, access, or quality requires it.
            </p>
            <p className="text-warmgrey font-body leading-relaxed" style={{ fontSize: "0.9375rem" }}>
              Where changes are forced by circumstances beyond our control, we will make every effort to provide an equivalent alternative. Where the alternative is of lower value, we will provide a proportionate refund of the cost difference. We are not liable for losses resulting from Force Majeure events (see Section 10).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-volcanic font-normal mb-4" style={{ fontSize: "clamp(1.25rem,2vw,1.5rem)" }}>
              9. Health and Medical
            </h2>
            <p className="text-warmgrey font-body leading-relaxed mb-4" style={{ fontSize: "0.9375rem" }}>
              It is your responsibility to ensure you are physically and medically fit to undertake the journey you have booked. We recommend consulting a travel health specialist or your GP at least 6-8 weeks before travel to Ethiopia, particularly for:
            </p>
            <ul className="space-y-2 text-warmgrey font-body mb-4" style={{ fontSize: "0.9375rem" }}>
              {[
                "Recommended vaccinations (hepatitis A, typhoid, and others as advised)",
                "Antimalarial medication for lower-altitude regions",
                "Altitude precautions for the Simien Mountains, Bale, and Sanetti Plateau",
                "Yellow fever vaccination certificate (required if arriving from certain countries)",
              ].map(item => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="text-gold mt-1.5 flex-shrink-0">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-warmgrey font-body leading-relaxed" style={{ fontSize: "0.9375rem" }}>
              Sawla Tours provides general pre-trip health information but does not provide medical advice. All health decisions are the client&apos;s responsibility.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-volcanic font-normal mb-4" style={{ fontSize: "clamp(1.25rem,2vw,1.5rem)" }}>
              10. Liability and Force Majeure
            </h2>
            <p className="text-warmgrey font-body leading-relaxed mb-4" style={{ fontSize: "0.9375rem" }}>
              Sawla Tours acts as a principal in arranging your journey and accepts responsibility for the quality and delivery of the services we provide directly. Our liability is limited to the total cost of the journey paid.
            </p>
            <p className="text-warmgrey font-body leading-relaxed mb-4" style={{ fontSize: "0.9375rem" }}>
              We are not liable for events beyond our reasonable control, including: acts of God, natural disasters, civil unrest, government actions, pandemics, strikes, failure of third-party services (airlines, accommodation), or any other Force Majeure event.
            </p>
            <p className="text-warmgrey font-body leading-relaxed" style={{ fontSize: "0.9375rem" }}>
              We are not liable for personal injury, death, or property loss except where directly caused by our gross negligence. International travel to Ethiopia carries inherent risks; by booking you accept that you have been informed of these and are traveling with appropriate insurance.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-volcanic font-normal mb-4" style={{ fontSize: "clamp(1.25rem,2vw,1.5rem)" }}>
              11. Photography and Filming
            </h2>
            <p className="text-warmgrey font-body leading-relaxed" style={{ fontSize: "0.9375rem" }}>
              Photography of local communities, religious ceremonies, and cultural events must be conducted with the consent of the people being photographed. Your guide will advise on appropriate protocols in each context. Commercial filming or commissioned photography may require a separate production process, government permissions, contributor releases and equipment approvals. These services are outside a standard Sawla Tours leisure booking and must be arranged independently before travel.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-volcanic font-normal mb-4" style={{ fontSize: "clamp(1.25rem,2vw,1.5rem)" }}>
              12. Complaints
            </h2>
            <p className="text-warmgrey font-body leading-relaxed" style={{ fontSize: "0.9375rem" }}>
              If you have a complaint during your journey, please raise it with your guide or driver first so we have the opportunity to resolve it immediately. If the issue is not resolved, contact our Addis Ababa office directly during your trip. Complaints not raised during the journey are difficult to investigate. Written complaints should be submitted within 30 days of returning home, to{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold hover:underline">{CONTACT_EMAIL}</a>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-volcanic font-normal mb-4" style={{ fontSize: "clamp(1.25rem,2vw,1.5rem)" }}>
              13. Governing Law
            </h2>
            <p className="text-warmgrey font-body leading-relaxed" style={{ fontSize: "0.9375rem" }}>
              These Terms are governed by the laws of the Federal Democratic Republic of Ethiopia. Any disputes arising from a booking shall first be addressed through direct negotiation. Where this fails, disputes shall be referred to the competent courts of Addis Ababa, Ethiopia.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="font-display text-volcanic font-normal mb-4" style={{ fontSize: "clamp(1.25rem,2vw,1.5rem)" }}>
              14. Contact
            </h2>
            <p className="text-warmgrey font-body leading-relaxed mb-4" style={{ fontSize: "0.9375rem" }}>
              For any questions about these Terms &amp; Conditions, contact us:
            </p>
            <div className="p-5 bg-gold-faint rounded-card border border-gold/20">
              <div className="font-body font-semibold text-volcanic mb-1">Sawla Tours</div>
              <div className="text-warmgrey font-body text-sm">Addis Ababa, Ethiopia</div>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold hover:underline font-body text-sm mt-1 block">{CONTACT_EMAIL}</a>
            </div>
          </section>

          <div className="pt-6 border-t border-sand">
            <p className="text-warmgrey/60 font-body text-sm">
              Last updated: {LAST_UPDATED}. These terms supersede all previous versions. By confirming a booking, you accept these Terms in full.
            </p>
            <div className="flex gap-4 mt-3">
              <Link href="/privacy-policy" className="text-gold hover:underline font-body text-sm">Privacy Policy</Link>
              <Link href="/enquire" className="text-gold hover:underline font-body text-sm">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
