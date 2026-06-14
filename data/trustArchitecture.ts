export type TrustFaq = { question: string; answer: string }

export const TRUST_NAV = [
  { label: 'About Sawla', href: '/about-us' },
  { label: 'Why Sawla', href: '/why-travel-with-sawla-tours' },
  { label: 'How We Work', href: '/how-we-work' },
  { label: 'Travel Specialists', href: '/meet-our-travel-specialists' },
  { label: 'Guides', href: '/meet-our-guides' },
  { label: 'Drivers & Vehicles', href: '/meet-our-drivers' },
  { label: 'Mobile Camps', href: '/mobile-tented-camps-ethiopia' },
  { label: 'Responsible Travel', href: '/responsible-travel' },
  { label: 'Safety & Assurance', href: '/safety-and-travel-assurance' },
] as const


export const FOUNDER_PROFILE = {
  name: 'Meti Tadele',
  role: 'Founder & Lead Journey Designer',
  summary: 'A University of Gondar Tourism Management graduate with more than a decade of experience across national guiding, tour operations and specialist photography-led travel in Ethiopia.',
  expertise: ['Private Ethiopia journey design', 'Cultural and historic interpretation', 'Photography-focused travel', 'Field operations and remote logistics'],
  education: 'BA in Tourism Management, University of Gondar',
} as const

export const COMPANY_FACTS = [
  {
    value: 'Since 2009',
    label: 'Ethiopia journey design',
    detail: 'Private travel planning shaped by field experience and current local knowledge.',
  },
  {
    value: 'Addis Ababa',
    label: 'Ethiopia-based operations',
    detail: 'Journey design and operational coordination are managed from within Ethiopia.',
  },
  {
    value: 'Private',
    label: 'Tailor-made by default',
    detail: 'Routes are adapted to dates, pace, interests, comfort and current access conditions.',
  },
  {
    value: 'One team',
    label: 'Planning through delivery',
    detail: 'Specialists, operations, guides, drivers and regional partners work from one trip brief.',
  },
] as const

export const TEAM_DEPARTMENTS = [
  {
    title: 'Journey Design & Guest Experience',
    summary: 'Turns a travel idea into a coherent Ethiopia route, balances ambition with pace, and remains the main planning contact before arrival.',
    responsibilities: ['Discovery conversations', 'Route and season matching', 'Accommodation and pacing choices', 'Proposal revisions', 'Pre-departure preparation'],
    href: '/meet-our-travel-specialists',
  },
  {
    title: 'Operations & Field Logistics',
    summary: 'Checks the moving parts behind the itinerary and coordinates the people, timing and local services required to operate it.',
    responsibilities: ['Operational feasibility checks', 'Supplier reconfirmation', 'Domestic transport coordination', 'Permit support where required', 'Field communication'],
    href: '/how-we-work',
  },
  {
    title: 'Guides & Regional Specialists',
    summary: 'Interprets Ethiopia through history, faith, ecology, language and lived local context rather than simply escorting a route.',
    responsibilities: ['National guiding', 'Regional interpretation', 'Wildlife and birding expertise', 'Photography support', 'Cultural protocol'],
    href: '/meet-our-guides',
  },
  {
    title: 'Drivers & Vehicle Operations',
    summary: 'Matches vehicle type and driver experience to road surface, luggage, group size and the operational demands of the route.',
    responsibilities: ['Route-aware driving', 'Daily vehicle checks', 'Luggage and timing coordination', 'Driver-guide teamwork', 'Contingency support'],
    href: '/meet-our-drivers',
  },
  {
    title: 'Mobile Camps & Remote Support',
    summary: 'Builds temporary field infrastructure for journeys where conventional accommodation is limited, unsuitable or strategically placed too far away.',
    responsibilities: ['Camp specification', 'Guest tents and sleeping systems', 'Field kitchen and dining', 'Water and sanitation planning', 'Power and charging support'],
    href: '/mobile-tented-camps-ethiopia',
  },
] as const

export const WHY_SAWLA_REASONS = [
  {
    title: 'Advice from inside Ethiopia',
    body: 'The planning team works from Addis Ababa and remains connected to guides, drivers and regional partners. Recommendations can therefore reflect current conditions rather than an old brochure or a route copied from another operator.',
    proof: 'Local planning, live operational checks and route-specific briefings.',
  },
  {
    title: 'Private journeys, not fixed templates',
    body: 'The signature journey ideas on this site are strong starting points. Dates, pace, hotels, transport, walking, specialist interests and extensions are adjusted after a real planning conversation.',
    proof: 'A named trip brief and revised proposal before confirmation.',
  },
  {
    title: 'Honest operating status',
    body: 'A destination being famous does not mean it is always sensible to include. Sawla distinguishes between available, conditional, highly conditional and concept-stage journeys and confirms status for the requested dates.',
    proof: 'Date-specific access assessment before a route is sold.',
  },
  {
    title: 'The right specialist for the route',
    body: 'Historic interpretation, birding, wildlife, photography, trekking and community travel require different strengths. Guide assignment is made from the itinerary rather than from a one-size-fits-all roster.',
    proof: 'Guide matching by region, subject, language and traveler needs.',
  },
  {
    title: 'Operations that continue behind the guide',
    body: 'The visible journey is supported by an office and field network reconfirming services, coordinating changes and helping the guide and driver solve issues that arise on the road.',
    proof: 'Shared trip file, operational contacts and escalation paths.',
  },
  {
    title: 'Remote logistics when the route requires them',
    body: 'For supported treks, expeditions, wildlife, photography and remote community journeys, Sawla can plan temporary camps, field kitchens, local support teams, power, water and vehicle back-up to the specification agreed for that departure.',
    proof: 'A written camp and logistics specification before payment.',
  },
  {
    title: 'Respect is part of the itinerary design',
    body: 'Community visits, worship, ceremonies, portrait photography and wildlife encounters are planned around permission, context and realistic expectations. Access is never described as ownership of another person’s time or culture.',
    proof: 'Consent guidance, regional interpreters and conditional wording.',
  },
  {
    title: 'Clear limits, not impossible promises',
    body: 'Weather, road conditions, ceremonies, wildlife, domestic flights and regional access can change. Sawla explains what is controllable, what is conditional and what would trigger a route change.',
    proof: 'Written inclusions, exclusions, assumptions and contingency notes.',
  },
] as const

export const WORKFLOW_STEPS = [
  {
    number: '01',
    title: 'Discover what matters',
    body: 'The first conversation covers dates, interests, pace, previous travel, comfort expectations, rooming, mobility, specialist goals and anything that would make the journey feel wrong.',
    output: 'A concise traveler brief shared across the planning team.',
  },
  {
    number: '02',
    title: 'Test the route against reality',
    body: 'The team checks season, domestic transport, road logic, opening arrangements, altitude, drive times and current regional conditions before treating a route as sellable.',
    output: 'A feasible route framework with conditional elements identified.',
  },
  {
    number: '03',
    title: 'Design the first proposal',
    body: 'The proposal explains the route, daily rhythm, accommodation approach, transport, principal experiences and the assumptions behind the price.',
    output: 'A transparent itinerary and quotation rather than a generic package list.',
  },
  {
    number: '04',
    title: 'Refine without losing the journey',
    body: 'Revisions can change pace, hotel level, route depth, walking, photography time or budget. The specialist also explains when a requested change would create a rushed or operationally weak itinerary.',
    output: 'A route that is personal but still coherent and realistic.',
  },
  {
    number: '05',
    title: 'Confirm services and responsibilities',
    body: 'After approval, the team reconfirms accommodation, vehicles, guides, local services and any permit or camp requirements, then issues booking terms and payment instructions.',
    output: 'A confirmed service file with inclusions, exclusions and conditions.',
  },
  {
    number: '06',
    title: 'Prepare the traveler and field team',
    body: 'Pre-departure guidance covers luggage, clothing, health preparation, cash, connectivity, altitude, heat, photography etiquette and route-specific practicalities.',
    output: 'Traveler notes and an operational briefing for guides, drivers and suppliers.',
  },
  {
    number: '07',
    title: 'Operate, communicate and adapt',
    body: 'The guide and driver deliver the journey while the operations team remains available for reconfirmations, changes and escalation. Safety and dignity take priority over preserving the original schedule at all costs.',
    output: 'A supported private journey with documented decision paths.',
  },
] as const

export const SPECIALIST_ROLES = [
  {
    title: 'Private Journey Designer',
    bestFor: 'First conversations, route architecture and proposal refinement',
    description: 'Listens for the difference between what a traveler asks for and what they are actually hoping to experience, then builds a route with enough depth and breathing room.',
  },
  {
    title: 'Operations Coordinator',
    bestFor: 'Feasibility, confirmations and on-trip support',
    description: 'Owns the operational checklist behind the proposal and keeps the guide, driver, accommodation and regional services working from the same information.',
  },
  {
    title: 'Special-Interest Planner',
    bestFor: 'Photography, birding, wildlife, trekking, festivals and research-led trips',
    description: 'Translates a specialist objective into timing, access, field support, realistic encounter expectations and the correct guide profile.',
  },
  {
    title: 'Guest Experience Contact',
    bestFor: 'Rooming, dietary, mobility and personal travel requirements',
    description: 'Makes sure practical preferences are visible in the trip file and not lost between sales, operations and the field team.',
  },
  {
    title: 'Regional Operations Partner',
    bestFor: 'Local access, language, community protocol and changing conditions',
    description: 'Adds region-specific knowledge and relationships to the national itinerary while remaining accountable to the agreed traveler brief.',
  },
  {
    title: 'Remote Journey & Camp Coordinator',
    bestFor: 'Remote camps, specialist equipment and complex field logistics',
    description: 'Coordinates the extra infrastructure, local permissions and support teams required when a traveler journey goes beyond normal hotel-based touring.',
  },
] as const

export const GUIDE_SPECIALISMS = [
  {
    title: 'National Cultural & Historic Guides',
    remit: 'Multi-region journeys, northern heritage, living faith, museums and historical context.',
    match: 'First-time visitors, classic circuits and travelers who want one lead guide across several regions.',
  },
  {
    title: 'Regional Cultural Interpreters',
    remit: 'Local language, community context, protocols, markets, worship and region-specific history.',
    match: 'Omo Valley, Harar, Tigray, Afar, coffee regions and community-based travel.',
  },
  {
    title: 'Birding Guides',
    remit: 'Endemic targets, habitat interpretation, birding pace, checklists and early-morning field strategy.',
    match: 'Dedicated birding tours and bird-rich extensions to wildlife or cultural journeys.',
  },
  {
    title: 'Wildlife & Naturalist Guides',
    remit: 'Mammal tracking, ecology, conservation context, national parks and responsible viewing distances.',
    match: 'Bale, Simien, Awash, Alledeghi, Chebera Churchura and Gambella concepts.',
  },
  {
    title: 'Photography Guides & Field Coordinators',
    remit: 'Light, access, pacing, consent, location preparation and coordination between traveler, subject and local guide.',
    match: 'Portrait, documentary, wildlife, landscape and festival photography.',
  },
  {
    title: 'Trekking & Expedition Leaders',
    remit: 'Trail pace, camp rhythm, altitude awareness, pack support and field decision-making.',
    match: 'Simien, Bale, Wello, Tigray community trekking and remote expeditions.',
  },
] as const

export const GUIDE_COMMITMENTS = [
  'Your guide is briefed on the final itinerary, traveler profile and specialist priorities before arrival.',
  'Guide selection considers region, subject knowledge, language, pace and the interpersonal style of the traveler or group.',
  'Regional specialists may join a national guide when local language, protected-area knowledge or community protocol requires it.',
  'Guides explain uncertainty honestly and do not guarantee ceremonies, rare species, private access or conditions beyond their control.',
  'Photography and community visits are handled through permission, context and locally appropriate arrangements.',
  'A guide is never expected to replace a qualified medical professional, security authority or technical expedition specialist.',
] as const

export const DRIVER_STANDARDS = [
  {
    title: 'Route-matched experience',
    body: 'Drivers are assigned with the road surface, altitude, remoteness, weather, group size and daily distance in mind. The live Sawla site describes driver experience ranging from seven to twenty years; individual assignments should still be verified for each departure.',
  },
  {
    title: 'Daily vehicle awareness',
    body: 'The driver monitors tyres, fluids, fuel, visible damage, tools and route-specific equipment. Formal maintenance remains the responsibility of the vehicle owner or fleet manager and is checked during supplier confirmation.',
  },
  {
    title: 'Guide-driver role clarity',
    body: 'On most multi-day journeys, the driver concentrates on safe vehicle operation while the guide concentrates on interpretation and guest experience. One person is not casually presented as both unless the service has been designed that way.',
  },
  {
    title: 'Realistic driving days',
    body: 'Drive times are planned with road condition, stops, daylight, weather and traveler comfort in mind. A map distance is not treated as the whole operating plan.',
  },
  {
    title: 'Luggage and cabin planning',
    body: 'The team checks passenger count, luggage, camera equipment and special items before choosing the vehicle. Roof loading is not assumed to solve every capacity problem.',
  },
  {
    title: 'Escalation and substitution',
    body: 'When a vehicle issue could affect safety or the route, the operations team is informed and replacement, repair or itinerary adjustment is considered rather than pushing ahead for appearances.',
  },
] as const

export const VEHICLE_CATEGORIES = [
  {
    title: '4×4 Land Cruiser or Equivalent',
    use: 'Remote roads, wildlife areas, highlands, Omo, Afar and routes where clearance and traction matter.',
    notes: 'Exact model, seat arrangement, air conditioning and luggage capacity are confirmed in the proposal; “4×4” does not automatically mean luxury seating.',
  },
  {
    title: 'Private Minibus',
    use: 'Small groups, paved or mixed-surface cultural routes and journeys where cabin space is more valuable than extreme off-road ability.',
    notes: 'Best fit depends on group size, luggage and road conditions. It is not substituted onto remote 4×4 routes without a route review.',
  },
  {
    title: 'City Transfer Vehicle',
    use: 'Airport transfers, Addis Ababa touring, meetings and short paved-road movements.',
    notes: 'Vehicle size is matched to passenger and luggage volume rather than described by a single permanent fleet model.',
  },
  {
    title: 'Support & Logistics Vehicle',
    use: 'Mobile camps, trekking support, specialist equipment, food, water and staff movements.',
    notes: 'Added only when the load and field plan require it. Logistics vehicles are not automatically suitable for passenger use.',
  },
] as const

export const CAMP_FORMATS = [
  {
    title: 'Supported Trekking Camp',
    purpose: 'For routes where the journey moves on foot and equipment is carried or transferred between camp locations.',
    mayInclude: ['Guest tents and sleeping systems', 'Camp furniture appropriate to the route', 'Field kitchen and cook team', 'Pack-animal or vehicle support where available', 'Basic wash and toilet arrangements'],
  },
  {
    title: 'Expedition Mobile Camp',
    purpose: 'For remote road-based journeys where a strategically placed temporary camp creates access, flexibility or a safer operating rhythm.',
    mayInclude: ['Walk-in guest tents depending on specification', 'Beds or camp cots and linen', 'Dining or mess tent', 'Field kitchen and camp staff', 'Private or shared wash arrangements', 'Generator, battery or charging support'],
  },
  {
    title: 'Specialist Field Camp',
    purpose: 'For wildlife, photography, research-led or special-interest journeys that need more time, equipment support or flexible operating hours close to a remote location.',
    mayInclude: ['Guest and specialist accommodation', 'Secure dry storage for personal equipment', 'Expanded charging and power plan', 'Meals timed around early and late field sessions', 'Water and sanitation logistics', 'Local scout or naturalist coordination where appropriate'],
  },
] as const

export const CAMP_PRINCIPLES = [
  'Every camp is specified for a particular departure; photographs from one camp are not a promise that every route uses identical equipment.',
  'The written proposal should state tent type, occupancy, beds, bathroom arrangement, meals, power, charging and staffing.',
  'Sites are selected with permission and with attention to water, waste, access, weather, safety and local impact.',
  'Remote comfort is described honestly. A mobile camp can be thoughtful and well supported without pretending to be a permanent luxury lodge.',
  'Backup plans consider vehicle access, weather, equipment failure, medical needs and the ability to move or close camp responsibly.',
  'Waste, fuel, grey water and consumables are managed according to the site and local rules; nothing is marketed as “leave no trace” without an operational plan.',
] as const

export const RESPONSIBLE_PRINCIPLES = [
  {
    title: 'Consent before access',
    body: 'Being present with a guide does not create a right to photograph, enter a home, interrupt worship or attend a private ceremony. Permission is sought in the form appropriate to the place and people involved.',
  },
  {
    title: 'Context before spectacle',
    body: 'Guides explain history, belief, livelihood and contemporary change so communities are not reduced to clothing, body adornment or a single ceremony.',
  },
  {
    title: 'Transparent local arrangements',
    body: 'Community visits and photography arrangements are explained in advance where possible, including locally expected payments, guide roles and what remains conditional.',
  },
  {
    title: 'Fewer, better encounters',
    body: 'A slower visit with appropriate interpretation is generally more valuable than racing through a checklist of communities, churches or wildlife sightings.',
  },
  {
    title: 'Wildlife without coercion',
    body: 'Guides maintain appropriate distance, follow protected-area rules and do not promise sightings or encourage behavior that disturbs animals for a photograph.',
  },
  {
    title: 'Local people in skilled roles',
    body: 'Regional guides, cooks, scouts, camp teams, interpreters and suppliers should be engaged for their knowledge and work, not presented as decorative additions to an itinerary.',
  },
  {
    title: 'Environmental limits are operational',
    body: 'Vehicle routes, water, waste, camp placement, fires and consumables are considered in the actual field plan. Broad eco-language is not treated as evidence by itself.',
  },
  {
    title: 'Honesty about impact',
    body: 'Tourism creates benefits and pressures. Sawla’s responsibility is to make better choices, explain trade-offs and improve systems rather than claim that every trip is automatically sustainable.',
  },
] as const

export const SAFETY_FRAMEWORK = [
  {
    phase: 'Before proposal',
    title: 'Date-specific route screening',
    body: 'The team reviews whether the requested regions, transport links and activities are operationally sensible for the proposed dates. A famous route is not treated as permanently available.',
  },
  {
    phase: 'Before confirmation',
    title: 'Supplier and access reconfirmation',
    body: 'Accommodation, guides, vehicles, local permissions, flights and regional services are checked before the journey is treated as confirmed.',
  },
  {
    phase: 'Traveler preparation',
    title: 'Health, altitude, heat and mobility briefing',
    body: 'Travelers receive route-specific practical guidance and remain responsible for medical advice, vaccinations, medication, insurance and declaring needs that affect the trip design.',
  },
  {
    phase: 'Field deployment',
    title: 'Named guide, driver and operations contacts',
    body: 'The working trip file identifies the people responsible for day-to-day delivery and the office contact for escalation or changes.',
  },
  {
    phase: 'Daily operation',
    title: 'Conditions checked as the journey moves',
    body: 'Road, weather, opening, flight and local information are reviewed through the guide, driver, office and regional contacts. The itinerary can change when new information makes that necessary.',
  },
  {
    phase: 'Incident response',
    title: 'Stabilize, communicate, escalate',
    body: 'The immediate priority is the traveler and field team, followed by communication with the operations contact, appropriate local services and the traveler’s insurer or assistance provider where relevant.',
  },
  {
    phase: 'Decision authority',
    title: 'Safety can override the schedule',
    body: 'Sawla, the guide, driver or relevant local authority may alter, delay or stop an activity when continuing would be unsafe, unlawful or disrespectful. No itinerary promise is more important than that judgment.',
  },
  {
    phase: 'After the journey',
    title: 'Record and improve',
    body: 'Operational issues, near misses and traveler feedback should be recorded so route notes, supplier choices and briefings improve for later departures.',
  },
] as const

export const ABOUT_FAQS: TrustFaq[] = [
  { question: 'Is Sawla Tours based in Ethiopia?', answer: 'Yes. Sawla Tours plans and coordinates private Ethiopia journeys from Addis Ababa, working with guides, drivers, regional specialists and suppliers across the country.' },
  { question: 'When was Sawla Tours established?', answer: 'Sawla Tours states that it has designed Ethiopia journeys since 2009. The public website uses “since 2009” rather than a changing “years of experience” counter.' },
  { question: 'Does Sawla Tours only sell fixed tour packages?', answer: 'No. The published journeys are canonical route ideas and planning frameworks. The final itinerary is adapted to the traveler’s dates, pace, interests, comfort, group size and the operating conditions confirmed for those dates.' },
  { question: 'Who operates a Sawla Tours journey?', answer: 'A typical journey is delivered through a coordinated team: a travel specialist, operations contact, guide, driver and regional services. Remote or specialist routes may also use local interpreters, naturalists, camp staff, cooks, scouts or technical field support.' },
  { question: 'Why are individual staff names not shown on every team card?', answer: 'Sawla publishes role-based team information until a person’s current role, biography, photograph and permission to publish have been verified. This avoids fictional or outdated profiles while still explaining who is responsible for each part of the journey.' },
  { question: 'How can a traveler verify company and booking details?', answer: 'Before payment, the proposal and booking communication should identify the contracting company, service inclusions, exclusions, payment method, cancellation terms and the contacts responsible for the trip. Regulatory or insurance documents should be supplied where relevant and available.' },
]

export const WHY_FAQS: TrustFaq[] = [
  { question: 'What makes Sawla Tours different from an overseas Ethiopia specialist?', answer: 'Sawla’s planning and operating team is based in Ethiopia, allowing the itinerary to be checked against current local conditions and delivered through direct field relationships. An overseas specialist may still add value; the important distinction is where operational decisions are made and who remains accountable on the ground.' },
  { question: 'Are Sawla Tours journeys private?', answer: 'The core offer is private and tailor-made travel. Small-group or special-departure formats can also be designed, but the proposal should state clearly whether services are private, shared or fixed-departure.' },
  { question: 'Does Sawla Tours guarantee wildlife, ceremonies or access?', answer: 'No. Wildlife sightings, ceremonies, worship, markets, road access, volcanic conditions and regional permissions can change. Sawla explains conditional experiences and confirms what can reasonably be arranged for the requested dates.' },
  { question: 'Can Sawla design a high-comfort journey?', answer: 'Yes, within the actual accommodation and transport options available on the route. The team should distinguish between genuine high-end properties, the best available local option and remote camping rather than applying the word luxury to everything.' },
  { question: 'What happens when conditions change during the trip?', answer: 'The guide, driver and operations team assess the new information, explain the practical options and adjust the sequence, service or route when necessary. Safety, legality and respectful conduct take priority over preserving every line of the original itinerary.' },
]

export const WORK_FAQS: TrustFaq[] = [
  { question: 'How far in advance should I start planning?', answer: 'Several months is helpful for complex, festival, photography, birding, trekking or remote journeys. Shorter lead times may work for simpler routes, but flights, preferred hotels, guides and permits can become limiting factors.' },
  { question: 'Will I receive a detailed proposal?', answer: 'Yes. A useful proposal should show the route, daily plan, accommodation approach, transport, inclusions, exclusions, price assumptions and the conditions that could change the service.' },
  { question: 'How many itinerary revisions are allowed?', answer: 'Sawla’s planning process is collaborative rather than based on a rigid public revision count. Revisions should remain focused on producing a coherent trip; major changes in dates, regions or trip style may require a new costing.' },
  { question: 'When is a journey actually confirmed?', answer: 'A journey is confirmed only after the traveler accepts the proposal and booking terms, the required payment is received, and the relevant services are reconfirmed. An attractive sample itinerary on the website is not itself a reservation.' },
  { question: 'Can the itinerary change after confirmation?', answer: 'Yes, when flights, roads, weather, access, safety or local arrangements change. Material changes should be communicated with the reason, practical alternatives and any cost implications where known.' },
]

export const SPECIALIST_FAQS: TrustFaq[] = [
  { question: 'Will I have one contact while planning?', answer: 'The aim is to provide a clear lead contact for the traveler, supported by operations and specialist colleagues behind the scenes. The person answering every technical detail may vary, but responsibility should remain clear.' },
  { question: 'Are the team profiles real people?', answer: 'This page describes verified operational roles rather than inventing names, biographies or portraits. Named profiles should only be published after the person’s current role, experience and permission are confirmed.' },
  { question: 'Can I speak directly with the person designing my trip?', answer: 'Yes. Planning can continue by email, WhatsApp or an arranged call, depending on the complexity of the trip and the traveler’s preference.' },
  { question: 'Who handles changes during the journey?', answer: 'The guide and driver handle day-to-day adjustments with support from the Addis Ababa operations contact. Major changes involving flights, accommodation, permits or additional cost are coordinated through the office.' },
]

export const GUIDE_FAQS: TrustFaq[] = [
  { question: 'Will the same guide travel with me throughout Ethiopia?', answer: 'It depends on the route. A national guide can lead a multi-region itinerary, while regional or specialist guides may join for birding, wildlife, community, heritage or trekking sections. The final proposal should explain the guiding structure.' },
  { question: 'What languages can guides provide?', answer: 'English-language guiding is the standard basis of most international journeys. Other languages depend on current availability and must be requested early so the correct guide can be confirmed.' },
  { question: 'Are local guides used in protected areas and communities?', answer: 'Yes, where required or where they add essential language, ecological, heritage or community knowledge. A local guide may work alongside the national guide rather than replacing the lead guide.' },
  { question: 'Can Sawla provide a photography, birding or wildlife specialist?', answer: 'Yes, subject to availability and the exact goals of the trip. The enquiry should describe target species, equipment, photographic style or desired field intensity so the correct profile can be matched.' },
  { question: 'Does a guide guarantee special access?', answer: 'No. Guides facilitate arrangements and explain local protocol, but private ceremonies, worship, contributors, wildlife and restricted locations remain subject to permission and conditions at the time.' },
]

export const DRIVER_FAQS: TrustFaq[] = [
  { question: 'What vehicle will be used?', answer: 'The proposal should identify the vehicle category and any important seating, luggage or equipment assumptions. The exact model may vary unless a specific vehicle is contractually confirmed.' },
  { question: 'Are the driver and guide the same person?', answer: 'Usually not on multi-day specialist journeys. Separating the roles allows the driver to focus on the road and the guide to focus on interpretation and guest care. Short city services may use a different arrangement if clearly stated.' },
  { question: 'Do all vehicles have air conditioning?', answer: 'Not necessarily. Air conditioning depends on vehicle type, condition, route, altitude and local availability. It should be confirmed rather than implied, especially for remote 4×4 journeys.' },
  { question: 'How is luggage capacity planned?', answer: 'Passenger count, case size, camera equipment and specialist gear are collected before the vehicle is assigned. Travelers should follow the final luggage guidance because domestic flights and remote vehicles may have tighter limits.' },
  { question: 'What happens if a vehicle develops a problem?', answer: 'The driver informs operations, assesses whether the issue can be repaired safely and coordinates replacement or route adjustment when required. Remote recovery can take time, which is why contingency planning and realistic schedules matter.' },
]

export const CAMP_FAQS: TrustFaq[] = [
  { question: 'Is every mobile camp a luxury camp?', answer: 'No. Sawla uses different camp specifications for supported trekking, expeditions and specialist traveler journeys. Comfort can be high for a temporary field camp, but the written specification—not a broad luxury label—defines what is provided.' },
  { question: 'Will tents have private bathrooms?', answer: 'Some expedition configurations can include attached or private wash arrangements; others use shared field facilities. The proposal must state the exact arrangement for the departure.' },
  { question: 'Is electricity available?', answer: 'Charging can be planned through generators, battery systems, inverters or vehicles depending on the route and load. Continuous mains-style electricity should never be assumed in a remote camp.' },
  { question: 'What food is served in camp?', answer: 'A cook or catering team can prepare Ethiopian and international-style meals within the limits of transport, refrigeration, dietary requirements and resupply. Menus and special diets should be discussed before confirmation.' },
  { question: 'How are toilets, water and waste handled?', answer: 'The system depends on the site, group size, duration and local requirements. The camp plan should cover potable water, washing, toilets, grey water, refuse, fuel and final site clearance.' },
]

export const RESPONSIBLE_FAQS: TrustFaq[] = [
  { question: 'Is visiting the Omo Valley ethical?', answer: 'It can be approached responsibly when communities retain agency, local guides explain protocol, photography is based on permission and payment arrangements are transparent. A fast checklist visit that treats people as exhibits is not the standard Sawla aims to follow.' },
  { question: 'Can I photograph people?', answer: 'Only with permission and in accordance with the local arrangement explained by the guide. Consent to enter a place or speak with someone is not automatically consent to make a portrait, publish it or use it commercially.' },
  { question: 'Does Sawla Tours claim every trip is sustainable?', answer: 'No. Travel creates emissions, waste and social pressure as well as benefits. Sawla focuses on practical decisions, transparent trade-offs and continuous improvement rather than making an absolute sustainability claim.' },
  { question: 'How does Sawla support local economies?', answer: 'Through the use of Ethiopia-based staff and suppliers, regional guides, local cooks, camp teams, community services and locally appropriate visitor arrangements. The exact benefit varies by itinerary and should not be reduced to a single unsupported percentage.' },
  { question: 'How should travelers behave at religious sites?', answer: 'Dress and photography rules vary. Travelers should follow the guide’s briefing, avoid interrupting worship, respect gender or access restrictions, ask before photographing clergy or worshippers and accept that some spaces are not open to visitors.' },
]

export const SAFETY_FAQS: TrustFaq[] = [
  { question: 'Is Ethiopia safe to visit?', answer: 'Conditions can differ significantly by region and date. Sawla assesses the requested route at the time of planning and again before operation. Travelers should also review their government’s current travel advice and the terms of their insurance.' },
  { question: 'Does Sawla Tours guarantee safety?', answer: 'No responsible operator can guarantee that travel is risk-free. Sawla’s role is to assess foreseeable risks, plan appropriate services, communicate limitations, monitor conditions and make conservative operational decisions when circumstances change.' },
  { question: 'What travel insurance is required?', answer: 'Travelers should hold comprehensive insurance appropriate to the itinerary, including medical treatment, emergency assistance, evacuation where applicable, cancellation and the planned activities. The insurer—not Sawla—decides whether a claim is covered.' },
  { question: 'What happens during a medical emergency?', answer: 'The field team prioritizes immediate assistance, contacts the operations team and appropriate local services, and works with the traveler’s insurer or emergency-assistance provider where possible. Response time and facility level vary greatly by location.' },
  { question: 'Can Sawla change or cancel a route for safety reasons?', answer: 'Yes. A route, activity or service may be changed, delayed or withdrawn when current information indicates that proceeding would be unsafe, unlawful or operationally unsound. The applicable booking terms govern resulting costs and alternatives.' },
  { question: 'How are altitude, heat and physical difficulty managed?', answer: 'The itinerary is paced with elevation, temperature, drive time and walking in mind. Travelers must disclose relevant limitations and obtain personal medical advice. Guides can monitor and respond operationally but do not diagnose medical conditions.' },
]
