import type { Metadata } from 'next'
import Link from 'next/link'
import HubHero from '@/components/hubs/HubHero'
import HubEvidenceBar from '@/components/hubs/HubEvidenceBar'
import HubSectionHeader from '@/components/hubs/HubSectionHeader'
import HubCTA from '@/components/hubs/HubCTA'
import TripWizard from '@/components/home/TripWizard'
import SchemaScript from '@/components/ui/SchemaScript'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Ethiopia Trip Finder: Narrow Down Your Journey | Sawla Tours',
  description: 'Answer five practical questions about dates, duration, interests, group size and budget. Carry the result into a private Ethiopia journey enquiry.',
  alternates: { canonical: 'https://www.sawlatours.com/trip-finder' },
  openGraph: {
    title: 'Ethiopia Trip Finder | Sawla Tours',
    description: 'A short, practical route to a more useful Ethiopia journey enquiry.',
    url: 'https://www.sawlatours.com/trip-finder',
    type: 'website',
    images: [{ url: '/images/og-home.jpg', width: 1200, height: 630, alt: 'Sawla Tours Ethiopia Trip Finder' }],
  },
}

const schema = breadcrumbSchema([
  { name: 'Home', url: 'https://www.sawlatours.com' },
  { name: 'Trip Finder', url: 'https://www.sawlatours.com/trip-finder' },
])

export default function TripFinderPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <HubHero
        eyebrow="Five practical questions"
        title="Narrow the choices without pretending an algorithm knows your trip"
        intro="The Trip Finder carries your basic preferences into the enquiry form. A specialist still reviews the route, trade-offs and current operating context."
        breadcrumb="Trip Finder"
        image="trip-finder-hero.jpg"
        imageAlt="Private Ethiopia journey planning questions and map"
        category="general"
        primary={{ href: '#finder', label: 'Start the Trip Finder' }}
        secondary={{ href: '/enquire', label: 'Use the full enquiry form' }}
        facts={[
          { value: '5', label: 'questions' },
          { value: '2–4 min', label: 'typical time' },
          { value: 'No login', label: 'required' },
          { value: 'Human review', label: 'before advice' },
        ]}
      />
      <HubEvidenceBar items={[
        { title: 'No obligation', body: 'The result is a planning summary, not a booking' },
        { title: 'No personal details yet', body: 'Contact information is added only on the enquiry form' },
        { title: 'Preferences carried forward', body: 'Dates, duration and interests do not need retyping' },
        { title: 'Not an instant itinerary', body: 'A specialist checks feasibility before recommending a route' },
      ]} />

      <section id="finder" className="section-padding bg-gold-faint/55 scroll-mt-28" aria-labelledby="trip-finder-heading">
        <div className="container-max">
          <div className="mx-auto max-w-3xl">
            <HubSectionHeader eyebrow="Your starting point" title="Build a useful planning brief" intro="Choose the closest answer rather than trying to be precise. You can explain uncertainty and special requirements on the next step." align="center" />
            <div className="mt-10 rounded-card border border-sand bg-white p-6 shadow-sm md:p-10"><TripWizard /></div>
            <p className="mt-5 text-center text-sm text-warmgrey">Prefer to explain the trip in your own words? <Link href="/enquire" className="font-semibold text-gold hover:text-charcoal">Open the full enquiry form.</Link></p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="finder-result-heading">
        <div className="container-max">
          <HubSectionHeader eyebrow="What happens next" title="The result improves the first conversation—it does not replace it" intro="Sawla uses your answers to reduce generic back-and-forth and focus the first response on the decisions that matter." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ['01', 'Preferences are summarized', 'Your selected travel window, duration, interests, group size and budget guidance are carried into the enquiry form.'],
              ['02', 'A specialist checks reality', 'Season, geography, travel time, accommodation, access and specialist needs are reviewed before advice is sent.'],
              ['03', 'You receive a clear next step', 'The reply should identify a sensible route direction, missing information and any major trade-offs.'],
            ].map(([number, title, body]) => (
              <article key={number} className="card-luxury p-7"><span className="font-display text-4xl text-gold/45">{number}</span><h3 className="mt-5 font-display text-3xl text-charcoal">{title}</h3><p className="mt-3 text-sm leading-7 text-warmgrey">{body}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding-sm border-y border-sand bg-ivory" aria-labelledby="finder-alternative-heading">
        <div className="container-max grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div><span className="label-eyebrow">Already know your direction?</span><h2 id="finder-alternative-heading" className="heading-display text-display-md text-charcoal">Browse by travel style instead</h2><p className="mt-4 max-w-3xl leading-7 text-warmgrey">Compare nine journey styles and 25 route ideas with duration, suitability, operating status and day-by-day detail.</p></div>
          <Link href="/tours-by-experience" className="btn-ghost flex-none">Explore journey styles</Link>
        </div>
      </section>

      <HubCTA title="A useful answer begins with an honest brief" body="Use the full enquiry form when the route is complex, your dates are fixed or you need advice on comfort, photography, mobility, dietary needs or remote travel." primary={{ href: '/enquire', label: 'Continue to enquiry' }} secondary={{ href: '/how-we-work', label: 'How planning works' }} />
    </>
  )
}
