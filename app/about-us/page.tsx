import type { Metadata } from 'next'
import Link from 'next/link'
import HubHero from '@/components/hubs/HubHero'
import HubAnchorNav from '@/components/hubs/HubAnchorNav'
import HubEvidenceBar from '@/components/hubs/HubEvidenceBar'
import HubSectionHeader from '@/components/hubs/HubSectionHeader'
import HubCTA from '@/components/hubs/HubCTA'
import HubFaq from '@/components/hubs/HubFaq'
import SchemaScript from '@/components/ui/SchemaScript'
import { ABOUT_FAQS, COMPANY_FACTS, FOUNDER_PROFILE, TEAM_DEPARTMENTS, WHY_SAWLA_REASONS } from '@/data/trustArchitecture'
import { SITE } from '@/data/siteData'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'About Sawla Tours | Ethiopia-Based Private Travel Specialists',
  description: 'Meet the operating structure behind Sawla Tours: Ethiopia-based journey design, guides, drivers, field logistics, responsible travel and date-specific route assessment.',
  alternates: { canonical: 'https://www.sawlatours.com/about-us' },
  openGraph: {
    title: 'About Sawla Tours | Ethiopia-Based Private Travel Specialists',
    description: 'How Sawla Tours plans and operates private Ethiopia journeys from Addis Ababa.',
    url: 'https://www.sawlatours.com/about-us',
    type: 'website',
    images: [{ url: '/images/og-home.jpg', width: 1200, height: 630, alt: 'Sawla Tours Ethiopia-based team' }],
  },
}

const schema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://www.sawlatours.com/about-us/#founder',
    name: FOUNDER_PROFILE.name,
    jobTitle: FOUNDER_PROFILE.role,
    description: FOUNDER_PROFILE.summary,
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of Gondar' },
    worksFor: { '@id': 'https://www.sawlatours.com/#travelagency' },
    knowsAbout: FOUNDER_PROFILE.expertise,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': 'https://www.sawlatours.com/about-us/#page',
    url: 'https://www.sawlatours.com/about-us',
    name: 'About Sawla Tours',
    description: 'Ethiopia-based private journey design and operations.',
    mainEntity: { '@id': 'https://www.sawlatours.com/#travelagency' },
  },
  breadcrumbSchema([
    { name: 'Home', url: 'https://www.sawlatours.com' },
    { name: 'About Sawla Tours', url: 'https://www.sawlatours.com/about-us' },
  ]),
  faqSchema(ABOUT_FAQS.map((item) => ({ q: item.question, a: item.answer }))),
]

export default function AboutPage() {
  return (
    <>
      {schema.map((item, index) => <SchemaScript key={index} schema={item} />)}
      <HubHero
        eyebrow="About Sawla Tours"
        title="Ethiopia-based planning, carried through to the field"
        intro="Sawla Tours designs private journeys from Addis Ababa and coordinates the specialists, guides, drivers and regional partners needed to operate each route responsibly."
        breadcrumb="About Sawla Tours"
        image="about-sawla-hub-hero.jpg"
        imageAlt="Sawla Tours journey planning and Ethiopia field operations"
        category="about"
        primary={{ href: '#how-we-operate', label: 'How the team works' }}
        secondary={{ href: '/why-travel-with-sawla-tours', label: 'Why travel with Sawla' }}
        facts={COMPANY_FACTS.map((fact) => ({ value: fact.value, label: fact.label }))}
      />
      <HubEvidenceBar items={[
        { title: 'Inside Ethiopia', body: 'Journey design and operations coordinated from Addis Ababa' },
        { title: 'One trip brief', body: 'Planning, guides, drivers and suppliers use shared information' },
        { title: 'Route-specific teams', body: 'Expertise is matched to region and subject' },
        { title: 'Evidence-controlled', body: 'Unsupported claims are withheld from publication' },
      ]} />
      <HubAnchorNav items={[
        { href: '#founder', label: 'Founder' },
        { href: '#how-we-operate', label: 'How we operate' },
        { href: '#why-sawla', label: 'What makes the difference' },
        { href: '#proof', label: 'Trust and proof' },
        { href: '#questions', label: 'Questions' },
      ]} />

      <section id="identity" className="section-padding scroll-mt-32 bg-ivory" aria-labelledby="identity-heading">
        <div className="container-max grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
          <div>
            <span className="label-eyebrow">Founder-led, team-delivered</span>
            <h2 id="identity-heading" className="heading-display text-display-lg text-charcoal">A travel company should be accountable for the route it recommends</h2>
            <div className="mt-7 space-y-5 text-[1.05rem] leading-8 text-warmgrey">
              <p>Sawla Tours was established in 2009 to design Ethiopia journeys with local context, realistic pacing and direct operational responsibility. The public itineraries are not a catalogue of promises; they are carefully structured starting points.</p>
              <p>The company remains deliberately Ethiopia-focused. That means advice can go deeper into regional differences, specialist guiding, cultural protocol, remote logistics and the trade-offs between time, comfort and access.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3"><Link href="/how-we-work" className="btn-primary">See the planning process</Link><Link href="/safety-and-travel-assurance" className="btn-ghost">Safety and assurance</Link></div>
          </div>
          <aside id="founder" className="scroll-mt-32 rounded-card border border-sand bg-white p-7 md:p-9">
            <span className="hub-kicker">Founder & lead journey designer</span>
            <h3 className="mt-4 font-display text-4xl font-light text-charcoal">{FOUNDER_PROFILE.name}</h3>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[.12em] text-gold">{FOUNDER_PROFILE.role}</p>
            <p className="mt-5 text-sm leading-7 text-warmgrey">{FOUNDER_PROFILE.summary}</p>
            <p className="mt-4 text-sm leading-7 text-warmgrey">Meti’s role connects the first route conversation with the field realities of guiding, vehicle logistics, regional interpretation and photography-led travel.</p>
            <dl className="mt-6 space-y-4 border-t border-sand pt-5 text-sm">
              <div><dt className="font-semibold text-charcoal">Education</dt><dd className="mt-1 text-warmgrey">{FOUNDER_PROFILE.education}</dd></div>
              <div><dt className="font-semibold text-charcoal">Core expertise</dt><dd className="mt-1 text-warmgrey">{FOUNDER_PROFILE.expertise.join(' · ')}</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <section id="how-we-operate" className="section-padding scroll-mt-32 bg-white" aria-labelledby="team-heading">
        <div className="container-max">
          <HubSectionHeader eyebrow="Operating structure" title="The people behind a Sawla journey" intro="The public architecture describes real responsibilities without inventing biographies, qualifications or staff records that have not been verified for publication." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {TEAM_DEPARTMENTS.map((department) => (
              <article key={department.title} className="card-luxury flex h-full flex-col p-7">
                <h3 className="font-display text-3xl text-charcoal">{department.title}</h3>
                <p className="mt-4 text-sm leading-7 text-warmgrey">{department.summary}</p>
                <ul className="mt-5 flex-1 space-y-2 border-t border-sand pt-5 text-sm text-warmgrey">
                  {department.responsibilities.slice(0, 4).map((item) => <li key={item} className="flex gap-3"><span className="text-gold" aria-hidden="true">—</span><span>{item}</span></li>)}
                </ul>
                <Link href={department.href} className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-gold hover:text-charcoal">Understand this role <span className="ml-2" aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why-sawla" className="section-padding scroll-mt-32 bg-charcoal text-ivory" aria-labelledby="difference-heading">
        <div className="container-max">
          <HubSectionHeader eyebrow="The practical difference" title="Trust is built through decisions, not adjectives" intro="These are the operating principles that can be shown in a proposal, briefing or trip file." theme="dark" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {WHY_SAWLA_REASONS.slice(0, 8).map((reason) => (
              <article key={reason.title} className="rounded-card border border-white/12 bg-white/[.045] p-6">
                <h3 className="font-display text-2xl text-gold">{reason.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ivory/65">{reason.body}</p>
                <p className="mt-5 border-t border-white/10 pt-4 text-xs font-medium leading-5 text-ivory/50">Evidence: {reason.proof}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="proof" className="section-padding-sm scroll-mt-32 border-y border-sand bg-gold-faint/45" aria-labelledby="proof-heading">
        <div className="container-max grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div><span className="label-eyebrow">Evidence policy</span><h2 id="proof-heading" className="heading-display text-display-md text-charcoal">What the website publishes—and what it withholds</h2></div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ['Published', 'Company location, operating model, route process, public review sources and responsibilities supported by the current project records.'],
              ['Withheld until verified', 'Licence numbers, insurance details, named staff credentials, memberships, awards and performance statistics.'],
              ['Updated by date', 'Safety, access, transport, permits, festivals and other information that can change.'],
              ['Focused clearly', 'The public website stays centred on private Ethiopia travel, route design and guest operations.'],
            ].map(([title, body]) => <article key={title} className="rounded-card border border-sand bg-white p-6"><h3 className="font-display text-2xl text-charcoal">{title}</h3><p className="mt-3 text-sm leading-6 text-warmgrey">{body}</p></article>)}
          </div>
        </div>
      </section>

      <div id="questions" className="scroll-mt-32"><HubFaq items={ABOUT_FAQS} title="Questions About Sawla Tours" /></div>
      <HubCTA title="Speak with the team that will plan the route" body={`Contact Sawla Tours in ${SITE.address}. Your first response should clarify what is realistic, what needs more information and the best next planning step.`} secondary={{ href: '/meet-our-guides', label: 'Guide specialisms' }} />
    </>
  )
}
