export type ReviewVerificationStatus =
  | 'verified-external'
  | 'verified-direct-consent'
  | 'pending-evidence'
  | 'draft-only'

export interface PublicReview {
  id: string
  reviewerName: string
  sourceLabel: string
  sourceUrl: string
  rating?: number
  ratingScale?: number
  reviewDate: string
  experienceDate?: string
  excerpt: string
  summary: string
  tripType: string
  verificationStatus: Extract<ReviewVerificationStatus, 'verified-external' | 'verified-direct-consent'>
  verifiedOn: string
  relatedJourneySlugs: string[]
  relatedDestinationSlugs: string[]
}

export type CaseStudyType = 'verified-client-story' | 'journey-design-study'

export interface JourneyCaseStudy {
  slug: string
  type: CaseStudyType
  title: string
  eyebrow: string
  dek: string
  summary: string
  heroImage: string
  heroAlt: string
  planningQuestion: string
  designChoices: string[]
  routeShape: string[]
  travelerFit: string[]
  safeguards: string[]
  outcomeTitle: string
  outcome: string
  transparencyNote: string
  relatedJourneySlugs: string[]
  relatedDestinationSlugs: string[]
  publishedOn: string
  reviewedOn: string
  seo: {
    title: string
    description: string
    primaryKeyword: string
    canonical: string
  }
}

export const PUBLIC_REVIEWS: PublicReview[] = [
  {
    id: 'anita-f-tripadvisor-2026',
    reviewerName: 'Anita F.',
    sourceLabel: 'Tripadvisor',
    sourceUrl: 'https://www.tripadvisor.com/ShowUserReviews-g293791-d34057277-r1052942880-Sawla_Tours-Addis_Ababa.html',
    rating: 5,
    ratingScale: 5,
    reviewDate: '2026-03-14',
    experienceDate: '2026-02',
    excerpt: '“Patient, helpful, and accommodating.”',
    summary:
      'After a larger southern Ethiopia plan had to be cancelled, the reviewer described Sawla Tours as understanding and gracious, then praised a carefully planned Addis Ababa day tour that still revealed new perspectives to a group familiar with the city.',
    tripType: 'Tailor-made planning and Addis Ababa day tour',
    verificationStatus: 'verified-external',
    verifiedOn: '2026-06-13',
    relatedJourneySlugs: ['addis-ababa-masterclass'],
    relatedDestinationSlugs: ['addis-ababa-city-tour'],
  },
]

export const JOURNEY_CASE_STUDIES: JourneyCaseStudy[] = [
  {
    slug: 'addis-day-tour-after-plans-changed',
    type: 'verified-client-story',
    title: 'When a Larger Journey Changed, the Addis Day Still Mattered',
    eyebrow: 'Verified traveller story',
    dek: 'A cancelled multi-day plan became a carefully shaped Addis Ababa day tour—without treating the shorter experience as an afterthought.',
    summary:
      'The original request involved southern Ethiopia and the Bale Mountains. Personal circumstances forced the wider journey to be cancelled, but a one-day Addis program remained possible. The planning challenge was to create a day that felt worthwhile for three travelers, including one person already familiar with the capital.',
    heroImage: 'story-addis-day-tour-after-plans-changed.jpg',
    heroAlt: 'Addis Ababa city view and cultural landmarks during a private day tour',
    planningQuestion: 'How do you make a single day in Addis meaningful for both first-time and returning visitors?',
    designChoices: [
      'Start with the group’s existing familiarity rather than repeat a standard city checklist.',
      'Balance history, contemporary life and context so the day feels connected rather than fragmented.',
      'Keep enough flexibility to respond to traffic, opening hours and the group’s energy.',
      'Treat cancellation communication with the same care as trip delivery.',
    ],
    routeShape: [
      'Private hotel or airport pickup',
      'A tailored sequence of city viewpoints, heritage, food or cultural stops',
      'Time for questions and interpretation rather than rushed photo stops',
      'Return timed around the group’s onward plans',
    ],
    travelerFit: [
      'Travelers with a long layover or one free day',
      'Repeat visitors who want a deeper city perspective',
      'Small private groups with mixed familiarity with Addis Ababa',
    ],
    safeguards: [
      'The exact program follows flight timing, traffic, museum opening and current city conditions.',
      'No attraction is promised before same-day feasibility is checked.',
      'The wider cancelled itinerary is not presented as a completed trip.',
    ],
    outcomeTitle: 'What the public review confirms',
    outcome:
      'The independent review specifically praised the planning process, the respectful handling of cancellation and the Addis day tour’s ability to reveal something new even to a traveler with substantial prior time in the city.',
    transparencyNote:
      'This case study is based on a publicly verifiable Tripadvisor review dated 14 March 2026. Only a short excerpt is reproduced; the full review remains on the source platform.',
    relatedJourneySlugs: ['addis-ababa-masterclass'],
    relatedDestinationSlugs: ['addis-ababa-city-tour'],
    publishedOn: '2026-06-13',
    reviewedOn: '2026-06-13',
    seo: {
      title: 'Addis Ababa Private Day Tour Case Study | Sawla Tours',
      description: 'How Sawla Tours reshaped a cancelled Ethiopia plan into a thoughtful private Addis Ababa day tour for first-time and returning visitors.',
      primaryKeyword: 'Addis Ababa private day tour case study',
      canonical: 'https://www.sawlatours.com/testimonials/addis-day-tour-after-plans-changed',
    },
  },
  {
    slug: 'historic-north-designed-for-depth-not-speed',
    type: 'journey-design-study',
    title: 'Historic North, Designed for Depth Rather Than Speed',
    eyebrow: 'Journey design study',
    dek: 'How to connect Lalibela, Gondar, Lake Tana and the highlands without turning living heritage into a rapid checklist.',
    summary:
      'A strong northern itinerary is not simply a list of famous monuments. It must account for flight patterns, altitude, worship schedules, road time, museum and church access, the traveler’s pace and the difference between seeing a site and understanding it.',
    heroImage: 'story-historic-north-depth.jpg',
    heroAlt: 'Lalibela rock-hewn church and northern Ethiopia highland landscape',
    planningQuestion: 'How can a classic historic route feel coherent, personal and unhurried?',
    designChoices: [
      'Use two-night stays where a single night would turn interpretation into transit.',
      'Plan church visits around worship and access rather than only daylight hours.',
      'Mix major heritage with markets, landscapes and ordinary local life.',
      'Explain when flying saves time and when an overland section adds real value.',
    ],
    routeShape: [
      'Addis Ababa orientation',
      'Lake Tana and Bahir Dar',
      'Gondar and nearby highlands',
      'Lalibela with time for both church clusters and a wider excursion',
    ],
    travelerFit: [
      'First-time visitors interested in history and faith',
      'Travelers who prefer interpretation over speed',
      'Private groups seeking flexible daily pacing',
    ],
    safeguards: [
      'Religious access and ceremony timing are confirmed for the actual dates.',
      'Regional operations and domestic flights are reconfirmed before sale.',
      'The route can be shortened without pretending every stop is essential.',
    ],
    outcomeTitle: 'The design outcome',
    outcome:
      'The route becomes a connected story of faith, state, landscape and daily life rather than a sequence of disconnected UNESCO stops.',
    transparencyNote:
      'This is an editorial journey-design study based on Sawla Tours’ published canonical itinerary system. It is not presented as a client testimonial or a completed departure.',
    relatedJourneySlugs: ['classic-northern-ethiopia-circuit', 'grand-historic-north-slow-journey', 'gondar-simien-lalibela-express'],
    relatedDestinationSlugs: ['lalibela', 'gondar', 'bahir-dar', 'axum'],
    publishedOn: '2026-06-13',
    reviewedOn: '2026-06-13',
    seo: {
      title: 'Historic North Ethiopia Tour Design Case Study | Sawla Tours',
      description: 'See how a private northern Ethiopia route can connect Lalibela, Gondar and Lake Tana with realistic pacing and deeper interpretation.',
      primaryKeyword: 'historic north Ethiopia tour planning',
      canonical: 'https://www.sawlatours.com/testimonials/historic-north-designed-for-depth-not-speed',
    },
  },
  {
    slug: 'omo-photography-built-around-consent',
    type: 'journey-design-study',
    title: 'Omo Photography Built Around Consent, Time and Context',
    eyebrow: 'Journey design study',
    dek: 'A photography route should never reduce communities to scheduled portraits. The operating design must protect dignity before it protects the shot list.',
    summary:
      'The strongest Omo photography programs leave room for introductions, local explanation and consent. Market days, ceremonies and community access are variable; the itinerary must remain useful even when the hoped-for event does not happen.',
    heroImage: 'story-omo-consent-photography.jpg',
    heroAlt: 'Respectful cultural photography planning in Ethiopia Omo Valley',
    planningQuestion: 'How can photographers work slowly and respectfully while still creating a visually strong journey?',
    designChoices: [
      'Build fewer community visits with more time rather than a rapid village count.',
      'Use a guide or liaison who can explain purpose, permission and local expectations.',
      'Plan light and travel time without promising ceremonies or staged access.',
      'Discuss image use, gifts, payment expectations and boundaries before arrival.',
    ],
    routeShape: [
      'Jinka or another practical regional entry point',
      'Market and community days selected around current calendars',
      'Longer field sessions with fewer daily transfers',
      'Contingency subjects such as landscape, craft, cattle culture and everyday life',
    ],
    travelerFit: [
      'Documentary and cultural photographers',
      'Small groups willing to follow consent protocols',
      'Travelers comfortable with uncertainty and flexible schedules',
    ],
    safeguards: [
      'No ceremony, portrait or community access is guaranteed.',
      'Photography stops when consent is withheld or conditions become inappropriate.',
      'Sensitive images and children require additional care and context.',
    ],
    outcomeTitle: 'The design outcome',
    outcome:
      'The itinerary remains photographically productive while avoiding the pressure to manufacture encounters. The traveler returns with fewer but more meaningful images and clearer context.',
    transparencyNote:
      'This is an editorial journey-design study, not a client testimonial. It describes the operating standards Sawla aims to apply to Omo and Suri photography requests.',
    relatedJourneySlugs: ['essential-lower-omo-valley-journey', 'omo-valley-suri-cultural-expedition', 'suri-southwest-ethiopia-photography-expedition'],
    relatedDestinationSlugs: ['omo-valley-tribes'],
    publishedOn: '2026-06-13',
    reviewedOn: '2026-06-13',
    seo: {
      title: 'Ethical Omo Valley Photography Tour Design | Sawla Tours',
      description: 'How Sawla Tours designs Omo Valley photography journeys around consent, local context, flexible timing and realistic access.',
      primaryKeyword: 'ethical Omo Valley photography tour',
      canonical: 'https://www.sawlatours.com/testimonials/omo-photography-built-around-consent',
    },
  },
  {
    slug: 'gelada-photography-in-three-days',
    type: 'journey-design-study',
    title: 'A Three-Day Gelada Photography Journey That Protects Field Time',
    eyebrow: 'Journey design study',
    dek: 'A short Simien program succeeds only when transfers, acclimatization, light and the return flight are designed as one system.',
    summary:
      'Three days can work for focused gelada photography, but only with disciplined logistics. The route must protect the main field day, allow for altitude and avoid an unrealistic promise of seeing every endemic species.',
    heroImage: 'story-gelada-photography-three-days.jpg',
    heroAlt: 'Gelada monkey photography in Simien Mountains Ethiopia',
    planningQuestion: 'How do you create meaningful wildlife photography time inside a very short itinerary?',
    designChoices: [
      'Choose the earliest practical arrival and a reliable transfer to the park area.',
      'Use the first afternoon for acclimatization, scouting and a short session rather than a long checklist.',
      'Protect one complete morning-to-afternoon field day for gelada behavior and changing light.',
      'Plan the final transfer around the actual domestic flight rather than an optimistic road estimate.',
    ],
    routeShape: [
      'Addis Ababa to Gondar connection',
      'Private transfer toward Debark or the park',
      'One full field day with an experienced local guide',
      'Return to Gondar with a flight-aware buffer',
    ],
    travelerFit: [
      'Wildlife photographers with a single priority species',
      'Travelers comfortable with altitude and early starts',
      'Small private parties carrying manageable camera equipment',
    ],
    safeguards: [
      'Geladas are wild animals; proximity and behavior cannot be guaranteed.',
      'Park access, road time and accommodation are reconfirmed for the dates.',
      'The itinerary does not promise Walia ibex or Ethiopian wolf sightings in a three-day window.',
    ],
    outcomeTitle: 'The design outcome',
    outcome:
      'The short trip is judged by usable field time and responsible behavior around the troop, not by the number of locations squeezed into three days.',
    transparencyNote:
      'This is an editorial design study informed by Sawla’s gelada photography planning framework. It is not a published client review.',
    relatedJourneySlugs: ['ethiopian-highland-wildlife-photography-safari', 'simien-northern-endemics-wildlife-safari', 'simien-mountains-historic-north-trek'],
    relatedDestinationSlugs: ['simien-mountain-national-park'],
    publishedOn: '2026-06-13',
    reviewedOn: '2026-06-13',
    seo: {
      title: 'Three-Day Gelada Photography Tour Design | Sawla Tours',
      description: 'How to structure a short private Simien Mountains gelada photography journey around field time, altitude and realistic transfers.',
      primaryKeyword: 'gelada photography tour Ethiopia',
      canonical: 'https://www.sawlatours.com/testimonials/gelada-photography-in-three-days',
    },
  },
  {
    slug: 'bale-and-simien-endemics-without-rushing',
    type: 'journey-design-study',
    title: 'Bale and Simien Endemics Without Turning Wildlife Into a Race',
    eyebrow: 'Journey design study',
    dek: 'Combining Ethiopia’s two best-known highland ecosystems requires realistic flights, altitude pacing and clear expectations about wild sightings.',
    summary:
      'A combined Bale and Simien wildlife journey can be exceptional, but it is geographically demanding. The design must decide whether the traveler values species breadth, photography time, trekking or comfort—and then protect that priority.',
    heroImage: 'story-bale-simien-endemics.jpg',
    heroAlt: 'Ethiopian wolf and Simien Mountains endemic wildlife journey planning',
    planningQuestion: 'How do you connect two distant mountain systems without losing the wildlife experience to transfers?',
    designChoices: [
      'Use domestic flights where they meaningfully protect field time.',
      'Give Bale enough nights for Sanetti Plateau, forest and weather variability.',
      'Set separate goals for geladas, Walia ibex, Ethiopian wolf and birding rather than implying one game drive covers all.',
      'Build rest and altitude awareness into the first highland days.',
    ],
    routeShape: [
      'Addis Ababa and Bale Mountains sector',
      'Sanetti Plateau and Harenna or Dinsho habitats',
      'Domestic connection to Gondar',
      'Simien escarpment and endemic-mammal field time',
    ],
    travelerFit: [
      'Endemic-mammal and birding specialists',
      'Wildlife photographers who accept variable sightings',
      'Travelers able to manage altitude and several travel days',
    ],
    safeguards: [
      'Wildlife sightings are never guaranteed.',
      'Weather can affect access, visibility and domestic flights.',
      'The final sequence is adjusted to the traveler’s fitness and photographic priorities.',
    ],
    outcomeTitle: 'The design outcome',
    outcome:
      'The journey becomes a habitat-led wildlife program rather than an Ethiopia version of a Big Five safari, with time to understand why the species occur where they do.',
    transparencyNote:
      'This is an editorial journey-design study based on Sawla’s canonical wildlife portfolio. It is not a client testimonial.',
    relatedJourneySlugs: ['simien-northern-endemics-wildlife-safari', 'chebera-maze-bale-wildlife-expedition', 'ethiopian-highland-wildlife-photography-safari'],
    relatedDestinationSlugs: ['bale-mountains-national-park', 'simien-mountain-national-park'],
    publishedOn: '2026-06-13',
    reviewedOn: '2026-06-13',
    seo: {
      title: 'Bale and Simien Wildlife Tour Design Case Study | Sawla Tours',
      description: 'How a private Ethiopia wildlife route can connect Bale and Simien while protecting field time, altitude pacing and realistic sightings.',
      primaryKeyword: 'Bale and Simien wildlife tour',
      canonical: 'https://www.sawlatours.com/testimonials/bale-and-simien-endemics-without-rushing',
    },
  },
  {
    slug: 'festival-journey-designed-around-uncertainty',
    type: 'journey-design-study',
    title: 'A Festival Journey Designed Around Dates, Access and Uncertainty',
    eyebrow: 'Journey design study',
    dek: 'Timket, Meskel, Genna and pilgrimage journeys need a fixed spiritual center—but flexible logistics around it.',
    summary:
      'Festival travel depends on calendars, local observance, crowd movement, road access, accommodation pressure and respectful positioning. The itinerary should protect the main observance without implying that every procession or ceremony follows a permanent timetable.',
    heroImage: 'story-festival-flexible-design.jpg',
    heroAlt: 'Ethiopian Orthodox festival procession and respectful visitor planning',
    planningQuestion: 'How do you build a dependable trip around an event whose exact field conditions may still change?',
    designChoices: [
      'Anchor the route around the main observance and build buffer nights before it.',
      'Keep hotel location, walking access and crowd movement central to the design.',
      'Use a guide who can explain religious meaning and visitor etiquette.',
      'Offer strong heritage and landscape alternatives if a secondary event changes.',
    ],
    routeShape: [
      'Arrival and cultural briefing before the festival peak',
      'A base close enough to reduce risky or exhausting transfers',
      'Main observance day with conservative timing',
      'Post-festival heritage or landscape extension',
    ],
    travelerFit: [
      'Travelers interested in living faith and public ritual',
      'Photographers willing to follow crowd and worship protocols',
      'Visitors comfortable with early starts and changing schedules',
    ],
    safeguards: [
      'Festival dates and local programs are reconfirmed for the exact year.',
      'Access to sacred spaces and photography is never assumed.',
      'The route includes alternatives if the local sequence changes.',
    ],
    outcomeTitle: 'The design outcome',
    outcome:
      'The traveler can experience the spiritual center of the journey without the entire program collapsing when a secondary procession, road or access arrangement changes.',
    transparencyNote:
      'This is an editorial journey-design study. It is not a client testimonial and does not guarantee a specific ceremony or photographic position.',
    relatedJourneySlugs: ['timket-festival-gondar-journey', 'meskel-festival-historic-north', 'genna-christmas-lalibela-pilgrimage', 'hidar-tsion-aksum-pilgrimage'],
    relatedDestinationSlugs: ['gondar', 'lalibela', 'axum'],
    publishedOn: '2026-06-13',
    reviewedOn: '2026-06-13',
    seo: {
      title: 'Ethiopia Festival Tour Planning Case Study | Sawla Tours',
      description: 'How Sawla Tours designs Timket, Meskel, Genna and pilgrimage journeys around fixed observances, flexible access and respectful participation.',
      primaryKeyword: 'Ethiopia festival tour planning',
      canonical: 'https://www.sawlatours.com/testimonials/festival-journey-designed-around-uncertainty',
    },
  },
]

export const VERIFIED_PUBLIC_REVIEWS = PUBLIC_REVIEWS.filter(
  (review) => review.verificationStatus === 'verified-external' || review.verificationStatus === 'verified-direct-consent',
)

export function getCaseStudy(slug: string) {
  return JOURNEY_CASE_STUDIES.find((study) => study.slug === slug)
}

export function getCaseStudiesByJourney(journeySlug: string, limit = 2) {
  return JOURNEY_CASE_STUDIES.filter((study) => study.relatedJourneySlugs.includes(journeySlug)).slice(0, limit)
}

export function getCaseStudiesByDestination(destinationSlug: string, limit = 1) {
  return JOURNEY_CASE_STUDIES.filter((study) => study.relatedDestinationSlugs.includes(destinationSlug)).slice(0, limit)
}
