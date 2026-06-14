// data/destinationContent.ts
// Rich article content for the 18-destination Ethiopia collection

export interface DestinationSection {
  heading?: string
  body: string
}

export interface DestinationFAQ {
  q: string
  a: string
}

export interface DestinationContent {
  slug: string
  intro: string
  sections: DestinationSection[]
  gettingThere: string
  bestTimeDetail: string
  faqs: DestinationFAQ[]
  altitude?: string
  entryNotes?: string
}

export const DESTINATION_CONTENT: Record<string, DestinationContent> = {

  lalibela: {
    slug: "lalibela",
    altitude: "2,630 metres",
    entryNotes: "White clothing required for some church areas. Flash photography prohibited inside. Small donation appropriate.",
    intro: "Nobody tells you about the silence first. Lalibela's eleven rock-hewn churches are one of the most extraordinary architectural achievements in human history — and unlike most achievements of that magnitude, they are still in active daily use. On a Tuesday morning in January, the same churches built in the 12th century are still lit by candles, still entered through passages cut from living volcanic rock, still attended by priests who have spent their lives here.",
    sections: [
      {
        heading: "What to See",
        body: "Bete Medhane Alem is the largest rock-hewn church in the world — carved from a single monolithic block, supported by 28 internal and 36 external columns. The scale only becomes clear when you step inside. Bete Giyorgis, the most photographed church, stands alone in a sunken pit approached by a narrow trench passage; seen from above, it looks like a stamp pressed into the earth. Bete Golgotha contains what is said to be the tomb of King Lalibela himself. Asheton Maryam monastery — a 45-minute walk above the main complex — gives extraordinary views back down to the town and valley below.",
      },
      {
        heading: "The Timkat Festival",
        body: "Timkat is the Ethiopian Orthodox celebration of Epiphany and Lalibela hosts one of the most dramatic ceremonies in Ethiopia, usually on 19-20 January. The tabot (replica of the Ark of the Covenant) is carried in procession by priests in full ceremonial vestments through the night and into the following morning. If your travel dates are flexible, Timkat is worth building your trip around.",
      },
      {
        heading: "How Much Time You Need",
        body: "Two full days gives access to all three church clusters, morning liturgy, and the chance to follow a guide who understands the theological meaning behind each church. Three days — especially if one coincides with an early morning service — changes the experience entirely. We recommend arriving with no agenda for the first afternoon: walk without a guide, find your bearings, and let the place settle before the structured visits begin.",
      },
    ],
    gettingThere: "Lalibela is commonly reached by domestic flight or a longer overland route. Current operating days, baggage rules, airport transfers and road time are checked when the itinerary is designed.",
    bestTimeDetail: "October to February is the best window — dry, clear skies, and the most vibrant church activity. January hosts Timkat, which transforms the town. Avoid June to August (main rains bring heavy cloud cover, though roads remain passable).",
    faqs: [
      { q: "Can non-Orthodox Christians visit the churches of Lalibela?", a: "Yes. All major churches are open to visitors of all backgrounds. Certain inner sanctuaries have restricted access — your guide will advise. Respectful dress is required: shoulders and knees covered, shoes removed before entering."},
      { q: "Is Lalibela suitable for older travelers or those with mobility limitations?", a: "The main church complex involves uneven stone surfaces, steep steps, and low doorways. It is manageable for most people in reasonable health but challenging for those with significant mobility limitations. Asheton Maryam requires a 45-minute uphill walk or a mule ride. Sawla Tours will design the visit around your specific needs."},
      { q: "What is the best time to see morning liturgy at Lalibela?", a: "Services are held at dawn (around 6am) in most churches, most days. The most atmospheric services coincide with saints days and festivals on the Ethiopian Orthodox calendar. Your Sawla Tours guide will advise on the timing most relevant to your visit dates."},
    ],
  },

  "simien-mountain-national-park": {
    slug: "simien-mountain-national-park",
    altitude: "1,900 – 4,550 metres",
    entryNotes: "Park guiding, scout or ranger arrangements are confirmed under the rules in force for the selected route. Warm layers and realistic transfer times are specified in the final dossier.",
    intro: "Before you see the geladas, you hear them. A low rolling chorus of lip-smacks and grunts rises from the cliff edge before you reach it — the contact calls of a troop of several hundred primates working through the morning grass. Then you crest the ridge and there they are. Not three or four. Six hundred geladas spread across a hillside, feeding methodically, infants clinging to mothers. You are standing three metres from a dominant male and he is completely uninterested in you.",
    sections: [
      {
        heading: "Wildlife",
        body: "The gelada monkey is the world's only grass-grazing primate. Troops are encountered reliably around Chenek camp, where they sleep on cliff faces and climb to the plateau to feed each morning. Walia ibex — endemic wild goats — are found in the rockier northern sections, particularly around Chenek, with their population slowly recovering from near-extinction. Lammergeier vultures with wingspans over two metres ride thermals off the escarpment in the afternoons. Ethiopian wolves appear occasionally in higher sections but are more reliably seen in the Bale Mountains.",
      },
      {
        heading: "Trekking Routes",
        body: "The Sankaber to Chenek route (2-3 days, moderate) is the most popular — starting at Sankaber camp at 3,250m and reaching Chenek at 3,600m. Escarpment views improve progressively, and gelada sightings are almost guaranteed around Chenek. The extended circuit to Ras Dashen (5-7 days, challenging) includes Ethiopia's highest peak at 4,550m and requires good fitness and acclimatisation. For travelers with limited time, a day hike from Debark to Sankaber takes 3-4 hours and offers a genuine taste of the landscape.",
      },
      {
        heading: "Photography Conditions",
        body: "The light at altitude — thin air, strong sun, early morning mist — creates extraordinary photographic conditions. The gelada encounters are particularly remarkable because the animals are fully habituated and ignore human presence completely. This allows photographers to work at close range with natural behaviour. A route-matched photography guide can advise on light, seasonal conditions, ethical working distance and the locations that suit the traveler’s priorities.",
      },
    ],
    gettingThere: "Drive from Gondar to Debark (2-3 hours). The park gate is just beyond Debark. Domestic flights operate Addis Ababa to Gondar daily.",
    bestTimeDetail: "October to February is optimal — dry, clear skies, and good visibility. The geladas are present year-round but mornings are clearest in the dry season. July and August bring heavy cloud and rain, making escarpment views rare.",
    faqs: [
      { q: "Are gelada encounters guaranteed in the Simien Mountains?", a: "No wildlife encounter is guaranteed. Several Simien sectors offer good opportunities to look for geladas, and the route is adjusted using current guide and park information."},
      { q: "How fit do I need to be for Simien Mountains trekking?", a: "The main Sankaber-Chenek route involves moderate daily walking at altitude (3,000-3,600m). Good general fitness is sufficient. The full circuit to Ras Dashen requires serious trekking fitness and prior altitude experience. Sawla Tours will assess and recommend based on your fitness and goals."},
      { q: "Can the Simien Mountains be visited as a day trip from Gondar?", a: "A day visit to Sankaber is possible from Gondar (2-3 hour drive each way) and gives a genuine sense of the landscape, but gelada encounters are less reliable on day visits than on overnight stays. We recommend a minimum of one night at Chenek for wildlife."},
    ],
  },

  "danakil-depression-tour-packages": {
    slug: "danakil-depression-tour-packages",
    altitude: "116 metres below sea level to 600 metres",
    entryNotes: "Afar permissions, local support, vehicle, communications and any personnel required under current rules are confirmed for the departure. Extreme heat and remote conditions require individual health advice.",
    intro: "The Danakil Depression is an exceptionally hot, low-lying and operationally demanding landscape. Salt flats, hydrothermal formations and volcanic terrain can be included only after current access, heat, road, local-authority and field-safety checks. Erta Ale is active, but crater access and visible lava conditions change; Sawla never promises a lava lake or a fixed viewing position.",
    sections: [
      {
        heading: "Erta Ale Volcano",
        body: "Erta Ale is an active shield volcano in the Afar basin. The approach, walking time, camp location and permitted viewing area depend on the current route, volcanic conditions, gas, wind, ground stability and official guidance. Some departures may not approach the crater, and visible lava is never guaranteed.",
      },
      {
        heading: "Dallol Hydrothermal Field",
        body: "Dallol is a field of yellow, green, orange, and white sulphur formations, acid pools, and salt craters that look like a landscape from another planet. The colours result from ongoing hydrothermal activity — iron, potassium, and magnesium salts crystallising in real time. The smell of hydrogen sulphide is overwhelming on close approach. The photography is extraordinary. Dallol sits at the point where three tectonic plates are pulling apart — you are standing on the geological process that will eventually open a new ocean.",
      },
      {
        heading: "The Salt Caravans",
        body: "The salt flats between Erta Ale and Dallol are still traversed by Afar camel caravans — mining salt blocks and carrying them to markets in Mekelle on centuries-old trade routes. These are working economic caravans, not staged encounters. Crossing paths with a 200-camel caravan moving across the white salt flats at dawn is one of the most memorable images Ethiopia produces.",
      },
    ],
    gettingThere: "The responsible gateway and route depend on current civilian access, permissions and the approved operating plan. Sawla specifies vehicles, local coordination, water, communications, camp and field support for the confirmed departure.",
    bestTimeDetail: "November to March only — temperatures are extreme from April onwards and Sawla Tours does not operate Danakil expeditions in the hot season. November and December offer the most stable conditions. January coincides with Timkat if combining with the northern historic route.",
    faqs: [
      { q: "Is the Danakil Depression safe?", a: "No operator can guarantee safety. Sawla proceeds only after a date-specific review of official advice, Afar permissions, local guidance, roads, heat, volcanic conditions, vehicles, communications and alternatives; the journey may be changed or declined."},
      { q: "What is the physical difficulty of a Danakil expedition?", a: "The Erta Ale night hike (2-3 hours each way on uneven volcanic rock) is the most physically demanding element. The heat — even at night — requires good hydration and a reasonable level of fitness. The Dallol visit is accessible to most travelers with basic mobility. Sawla Tours will advise on the specific demands of each itinerary."},
      { q: "Can Danakil be combined with other Ethiopia destinations?", a: "Yes and commonly done so. The most popular combination is Danakil + Lalibela + Gondar (northern historic circuit), taking 10-14 days total. The Danakil is typically visited first (before Timkat season) or after the northern circuit."},
    ],
  },

  "omo-valley-tribes": {
    slug: "omo-valley-tribes",
    altitude: "400 – 1,200 metres",
    entryNotes: "Community visits require a local guide who has established relationships. Photography requires consent and a small payment directly to individuals. Respectful conduct is essential.",
    intro: "The Omo Valley in southern Ethiopia is one of the most ethnically diverse regions on earth — home to around 16 distinct indigenous communities, each with its own language, body ornamentation tradition, ceremonial calendar, and relationship with the land and river. The Hamar, Karo, Mursi, Daasanach, Nyangatom, and Benna, among others, have maintained cultural identities across millennia of contact and change. This is not a museum exhibit — these communities are living, adapting, and negotiating their place in a modernising world.",
    sections: [
      {
        heading: "The Communities",
        body: "The Hamar people are known for their bull-jumping ceremony — a male initiation rite in which the candidate must run across the backs of a line of cattle. The Karo are celebrated for their body painting, using clay and ochre in elaborate designs for ceremonies. The Mursi are the community most associated with the lip plate — a clay disc worn by women as a marker of beauty and social status. The Daasanach live along the Kenyan border and are primarily pastoralists. Each community rewards time and a knowledgeable guide who can explain context.",
      },
      {
        heading: "How to Visit Responsibly",
        body: "The Omo Valley has been significantly affected by tourist traffic over the past two decades, and not always positively. Sawla Tours works only with local community-appointed guides, negotiates all photography payments directly and transparently, and avoids communities that have been commercialised beyond the point of authenticity. We spend more time in fewer communities rather than running through a checklist. This approach produces more meaningful encounters and distributes tourism income more fairly.",
      },
      {
        heading: "The Landscape",
        body: "The Omo River runs south through dramatic semi-arid lowlands before entering Lake Turkana on the Kenya border. The landscape shifts dramatically with altitude — from highland coffee forests in the north to dry scrub and riverine forest at lower elevations. The bird list is extraordinary (over 800 species recorded in Ethiopia, with strong representation in the south). Most Omo Valley itineraries combine the tribal cultural visits with game drives in the Omo National Park.",
      },
    ],
    gettingThere: "Fly from Addis Ababa to Arba Minch or Jinka (40-60 minutes). Drive from Jinka into the valley (1-3 hours depending on community). All domestic flight logistics coordinated by Sawla Tours.",
    bestTimeDetail: "October to February is best — dry roads, clear weather, and active ceremonial calendar. The Hamar bull-jumping season is primarily September-October. The rains (June-August) make some roads impassable. Always check current ceremony schedules when planning, as they follow community calendars not tourist timetables.",
    faqs: [
      { q: "Is the Omo Valley visit ethical?", a: "It can be. The key factors are: working with a guide who has genuine community relationships, paying photography fees directly to individuals rather than to intermediaries, visiting communities that maintain agency over their interactions with tourists, and approaching visits with genuine curiosity rather than as spectacle. Sawla Tours has worked in the Omo Valley since 2009 and has established protocols for all of these."},
      { q: "How many days in the Omo Valley is appropriate?", a: "A minimum of 3-4 days is needed to visit multiple communities without rushing. 5-7 days allows for more relaxed encounters, better opportunities to witness ceremonies, and time in the national park. The Omo Valley rewards slowness — the depth of the experience increases significantly with each additional day."},
      { q: "Is the Omo Valley accessible by road from Addis?", a: "Yes, via a 2-3 day overland drive through the Rift Valley lakes, Arba Minch, and Konso — which is itself a culturally rich journey. Most itineraries fly one way and drive the other to maximise time."},
    ],
  },

  "bale-mountains-national-park": {
    slug: "bale-mountains-national-park",
    altitude: "1,500 – 4,377 metres",
    entryNotes: "All-terrain vehicle essential for Sanetti Plateau access. Park fees payable at gate. Guide required inside park.",
    intro: "The Bale Mountains are Ethiopia's most important wildlife destination — the largest Afroalpine habitat in Africa and the stronghold of the Ethiopian wolf, the world's rarest canid. On the Sanetti Plateau, the world's highest driveable plateau, a wolf may trot across the road twenty metres ahead of your vehicle and pay you no more attention than it pays the giant mole-rats it is hunting.",
    sections: [
      { heading: "Ethiopian Wolf", body: "The Ethiopian wolf is found in just seven mountain ranges in Ethiopia and nowhere else on earth. The Sanetti Plateau in Bale supports the largest remaining population — around 200-250 individuals. They are diurnal hunters, most active in the morning and late afternoon, hunting giant mole-rats on the open plateau. Sawla Tours plans wolf-watching sessions around the feeding periods to maximise encounter quality. Sightings on a full-day plateau visit are highly likely."},
      { heading: "Harenna Forest", body: "Below the plateau, the Harenna Forest is one of the largest moist montane forests in Ethiopia — home to lion, leopard (rarely seen), African wild dog, colobus monkey, and an outstanding bird list. The forest is distinctly different from the open plateau above: dense, humid, cathedral-like. Most Bale itineraries spend at least one day in Harenna."},
      { heading: "Sanetti Plateau", body: "The plateau sits at 3,800-4,000m and is covered in heather moorland, giant lobelia, and afroalpine grasses. The light is extraordinary at altitude. The giant mole-rat — found only in the Bale highlands — is a key prey item for the wolves and visible at close range throughout the plateau. The plateau is accessible by vehicle, making wildlife encounters possible without physical demanding treks."},
    ],
    gettingThere: "Fly from Addis Ababa to Robe (Bale Mountains gateway airport, approximately 1 hour). Drive to park headquarters at Dinsho. All logistics coordinated by Sawla Tours.",
    bestTimeDetail: "October to February is optimal for wolf watching on the Sanetti Plateau (dry, clear conditions). The rains (June-August) make the plateau extremely muddy and wolf sightings more difficult. October and November are peak months for Ethiopian wolf activity.",
    faqs: [
      { q: "How reliable are Ethiopian wolf sightings in the Bale Mountains?", a: "No sighting is guaranteed. More field time on the Sanetti Plateau and current specialist knowledge can improve the opportunity, while weather, road access, visibility and wildlife movement may still prevent an encounter."},
      { q: "Can Bale be combined with the Simien Mountains?", a: "Yes — this combination makes the definitive Ethiopian endemic wildlife circuit. The two parks are very different landscapes (afroalpine plateau vs. dramatic escarpment) and the species list is largely different. A 10-12 day circuit covering both is one of our most requested itineraries."},
    ],
  },

  "tigray-rock-hewn-churches-historical-sites": {
    slug: "tigray-rock-hewn-churches-historical-sites",
    altitude: "1,800 – 2,800 metres",
    entryNotes: "Check current access conditions before booking — Tigray requires careful planning given recent history. Sawla Tours will advise on current status.",
    intro: "Tigray's rock-hewn churches predate Lalibela by several centuries and are, for many travelers, even more extraordinary. Abuna Yemata Guh requires a short climb up a near-vertical cliff face and a walk along a ledge to reach its entrance — inside, 6th-century frescos cover every surface, in colours still bright after 1,500 years. The church is rarely visited. There are no crowds, no queues. Just the frescos, a priest, and the landscape of the Gheralta below through an opening in the rock.",
    sections: [
      { heading: "The Gheralta Churches", body: "The Gheralta region contains the highest concentration of Tigray churches — around 120 in total across the wider region. The most dramatic are built into cliff faces and accessible only by ropes, ladders, and careful climbing. Abuna Yemata Guh, Maryam Korkor, Daniel Korkor, and Petros ve Paulos are among the most visited. Each requires a different approach and rewards those willing to make the physical effort."},
      { heading: "The Ancient City of Axum", body: "Axum was the capital of the Aksumite Empire — one of the great civilisations of the ancient world, contemporary with Rome and Persia. The stelae (giant granite obelisks) mark ancient royal tombs. The Church of St Mary of Zion is said to house the original Ark of the Covenant. The ancient queens' bathhouse, underground tombs, and museum of ancient gold coins make Axum one of the richest archaeological sites in sub-Saharan Africa."},
    ],
    gettingThere: "Fly from Addis Ababa to Mekelle (Tigray capital, approximately 1.5 hours). Drive to the Gheralta region (2-3 hours from Mekelle). Axum has its own airport with direct flights from Addis and Lalibela.",
    bestTimeDetail: "October to February — dry season, clear skies, and the best conditions for cliff access. The rains make some cliff approaches hazardous.",
    faqs: [
      { q: "Is Tigray currently accessible for tourism?", a: "Tigray's accessibility has varied due to recent events. Sawla Tours monitors the situation continuously and will give you an honest, current assessment when you enquire. We will not send clients to areas where safety is in doubt."},
      { q: "Is physical fitness required to visit the Tigray churches?", a: "For the most dramatic cliff churches (Abuna Yemata Guh), a short climb on near-vertical rock using natural handholds is required — approximately 15-20 minutes. It is more about comfort with exposure than athletic fitness. Several Tigray churches are accessible without climbing. Sawla Tours will match the churches to your comfort level."},
    ],
  },

  "gondar": {
    slug: "gondar",
    altitude: "2,133 metres",
    entryNotes: "Fasil Ghebbi entry fee applies. Debre Berhan Selassie is a short drive from the Royal Enclosure.",
    intro: "Gondar was the capital of the Ethiopian Empire for two centuries, and the evidence of that era is remarkably well-preserved. The Royal Enclosure — Fasil Ghebbi — contains the intact castles of six successive emperors, each built in a distinct architectural style that blends Aksumite, Portuguese, and Arab influences. The most famous is the Castle of Fasilides, built around 1640 and still used for Timkat ceremonies each January.",
    sections: [
      { heading: "Fasil Ghebbi", body: "The Royal Enclosure is a UNESCO World Heritage Site and one of the best-preserved royal complexes in sub-Saharan Africa. Six castles, a library, a chancellery, and the Fasilides Bath — a large sunken pool that floods for Timkat — are all within walking distance of each other inside the walled compound."},
      { heading: "Debre Berhan Selassie", body: "The Church of the Trinity of the Mount of Light has the most celebrated ceiling in Ethiopian ecclesiastical art — over a hundred cherub faces covering every surface in warm ochres, reds, and blues. The wall paintings of saints and biblical scenes date from the 17th and 18th centuries and are in remarkable condition."},
    ],
    gettingThere: "Fly from Addis Ababa to Gondar (approximately 1.5 hours) on Ethiopian Airlines. Gondar airport is 15km from the city.",
    bestTimeDetail: "November to February is optimal. Timkat (January 19-20) transforms Fasilides Bath into the setting for one of Ethiopia's most spectacular ceremonies.",
    faqs: [
      { q: "How much time does Gondar require?", a: "A well-organised day can cover the main highlights — Fasil Ghebbi and Debre Berhan Selassie — but two days allows for a more relaxed pace, the outlying church of Kuskuam, and a market visit when the operating day and current arrangements align. Gondar is typically combined with Bahir Dar and Lalibela on the northern historic circuit."},
      { q: "Is Gondar suitable for a first visit to Ethiopia?", a: "Yes. Sawla Tours designs itineraries for all experience levels. Contact us to discuss the right combination of destinations for your first journey."},
    ],
  },

  "bahir-dar": {
    slug: "bahir-dar",
    altitude: "1,801 metres",
    entryNotes: "Boat hire for island monasteries arranged through Sawla Tours. Early morning or late afternoon light is best for monastery visits.",
    intro: "Bahir Dar sits on the southern shore of Lake Tana — the source of the Blue Nile and the largest lake in Ethiopia. The lake holds 37 islands, on 20 of which there are ancient monasteries, some dating from the 14th and 15th centuries. The island monastery of Ura Kidane Mihret is the most accessible and architecturally impressive, with extraordinary wall paintings covering every surface of the circular drum church.",
    sections: [
      { heading: "Island Monasteries", body: "A morning boat excursion visits 2-3 monasteries depending on time and weather. Ura Kidane Mihret is the most visited — its painted walls depict biblical scenes in vivid colours, and the inner sanctum (restricted access) contains centuries-old manuscripts and ceremonial crosses. Debre Damo, accessible by a short walk from the boat landing, is smaller but equally atmospheric."},
      { heading: "Blue Nile Falls", body: "Tis Abay (Smoke of Fire in Amharic) was once one of the most spectacular waterfalls in Africa — 45 metres of the Blue Nile dropping over a basalt ledge into a gorge. A hydroelectric diversion has reduced the flow significantly during the dry season, but during or just after the rains (August-October) the falls are genuinely impressive."},
    ],
    gettingThere: "Fly from Addis Ababa to Bahir Dar (approximately 1 hour). Bahir Dar is also connected to Gondar by road (approximately 3 hours).",
    bestTimeDetail: "October to February for clear skies and manageable crowds. August-October for the Blue Nile Falls at their most impressive.",
    faqs: [
      { q: "Are the island monasteries open to women?", a: "Some monasteries on Lake Tana restrict access for women to certain inner areas. Sawla Tours will advise specifically on which monasteries are fully accessible. The most visited — Ura Kidane Mihret — is open to all visitors."},
      { q: "Is Bahir Dar suitable for a first visit to Ethiopia?", a: "Yes. Sawla Tours designs itineraries for all experience levels. Contact us to discuss the right combination of destinations for your first journey."},
    ],
  },

  "harar": {
    slug: "harar",
    altitude: "1,885 metres",
    entryNotes: "Harar is predominantly Muslim — conservative dress appreciated. The nightly hyena feeding is conducted by specific families and should be visited with a local guide.",
    intro: "Harar Jugol is a UNESCO-listed walled city and one of Ethiopia's most important centres of Islamic history, scholarship and living urban culture. Mosques, shrines, markets and traditional Harari houses occupy a dense network of lanes. Evening hyena-feeding traditions may be observed when the activity is operating responsibly, but animal presence and access are not guaranteed.",
    sections: [
      { heading: "The Old City — Jugol", body: "Harar's old city rewards walking without agenda. The lanes are too narrow for vehicles; the architecture is a unique blend of Harari and Somali styles; the markets sell qat, spices, coffee, and woven baskets. The Harari people are the city's indigenous community and maintain cultural practices — coffee ceremonies, wedding rituals, religious festivals — largely unchanged by the surrounding regions."},
      { heading: "The Hyena Feeding", body: "The nightly hyena feeding is one of Ethiopia's most unusual wildlife encounters. A specific family has maintained this tradition for generations — the hyenas have names, personalities, and feeding hierarchies that the handler knows intimately. Visitors can feed the hyenas directly using a short stick, or watch from a safe distance. The hyenas arrive after dark and the feeding is over in 20-30 minutes."},
    ],
    gettingThere: "Fly from Addis Ababa to Dire Dawa (the nearest major airport, approximately 55 minutes), then drive to Harar (approximately 1 hour). Or fly direct to Harar airport on some services.",
    bestTimeDetail: "October to March. Harar is at a comfortable altitude and not subject to extreme seasonal variation. The Eid celebrations draw large crowds.",
    faqs: [
      { q: "How does Sawla assess travel to Harar?", a: "Access and local conditions are checked for the intended dates. A Harari guide supports orientation inside Jugol, and the final route is adjusted if transport, regional guidance or opening arrangements change."},
      { q: "Is Harar suitable for a first visit to Ethiopia?", a: "Yes. Sawla Tours designs itineraries for all experience levels. Contact us to discuss the right combination of destinations for your first journey."},
    ],
  },

  "addis-ababa-city-tour": {
    slug: "addis-ababa-city-tour",
    altitude: "2,355 metres",
    entryNotes: "Current city conditions are reviewed before touring. Use normal large-city awareness, keep valuables discreet and follow the guide’s advice in crowded markets and transport areas.",
    intro: "Addis Ababa became Ethiopia's capital in the late nineteenth century and is now a major diplomatic, cultural and commercial centre. It hosts the African Union and the United Nations Economic Commission for Africa, while its museums, markets, religious sites, galleries and coffee culture provide essential context before or after a wider journey. Travelers often treat Addis only as a gateway; a well-guided day reveals a far richer city.",
    sections: [
      { heading: "The National Museum", body: "The National Museum's most famous exhibit is Lucy — Australopithecus afarensis, discovered in the Afar Depression in 1974 and dated to 3.2 million years. The cast on display is the actual skeleton of the specimen that redefined the scientific understanding of human evolution. Alongside Lucy, the museum holds stone tools dating back 1.5 million years, ancient Ethiopian religious art, traditional jewelry, and historical artifacts. It is a small museum by international standards but one of the most significant paleontological collections in the world." },
      { heading: "The Ethnological Museum at Addis Ababa University", body: "Housed in the former palace of Emperor Haile Selassie, the Ethnological Museum is the more textured of Addis Ababa's two great museums. The ground floor contains the palace's original reception rooms and private apartments — used by the Emperor until 1974. The upper floors hold an extensive collection of Ethiopian material culture: ceremonial items, musical instruments, religious objects, textiles, weapons, and agricultural tools from across all of Ethiopia's communities. It provides the cultural context that makes the rest of an Ethiopia journey more legible." },
      { heading: "The Merkato", body: "Merkato is a vast commercial district made up of specialised trading areas, workshops, wholesalers and street-level businesses. It can be crowded and difficult to navigate, so visits are selected by current conditions and led by a guide who understands suitable routes, personal security and photography etiquette." },
      { heading: "Entoto Hill and the Forest", body: "The Entoto range rises steeply above the city to the north, reaching 3,200 metres. The forested hillside — eucalyptus and indigenous species — is where Emperor Menelik II built his first palace and the church of St. Mary, which holds one of Ethiopia's finest collections of ceremonial items. From the summit, the city spreads below and the air is cool and scented. Early morning walks on Entoto are a quiet and necessary counterpoint to the pace of central Addis. Women carrying improbable loads of eucalyptus on their backs are a constant presence on the descent." },
    ],
    gettingThere: "Addis Ababa Bole International Airport is Ethiopia's principal international gateway and the main hub for Ethiopian Airlines, with connections that change by season and timetable. Travelers should verify the operating carrier, baggage rules and connection time before ticketing.",
    bestTimeDetail: "Year-round. Addis Ababa's climate is mild at altitude — warm days, cool evenings, and rain in the long rains (June-September) and short rains (February-March). The best months are October-January and April-May.",
    faqs: [
      { q: "How much time should I spend in Addis Ababa?", a: "Two full days is the minimum to visit the National Museum, the Ethnological Museum, the Merkato, Entoto, and Holy Trinity Cathedral without rushing. A third day allows for a coffee ceremony, the Shiro Meda weavers market, and a more relaxed experience overall."},
      { q: "How does Sawla assess touring conditions in Addis Ababa?", a: "The team reviews current local conditions, traffic, opening arrangements and the planned neighborhoods before each program. Travelers receive practical guidance for crowded markets, transport areas and evening movements rather than a blanket safety promise."},
      { q: "Is Addis Ababa worth visiting in its own right or just as a gateway?", a: "Both. The National Museum and Ethnological Museum are significant by any international standard. The food — injera with tibs, wot, and misir in a traditional restaurant — is excellent. The coffee culture is extraordinary. We recommend treating Addis as a destination rather than a transit point."},
    ],
  },

  "axum": {
    slug: "axum",
    altitude: "2,131 metres",
    entryNotes: "Smart casual dress recommended for church visits. The Ark chapel at St. Mary of Zion is closed to all visitors — do not attempt entry. Archaeological sites are unfenced; use a licensed guide for full context.",
    intro: "Axum is where history stops being a subject and becomes a place. The Aksumite Empire, which flourished from roughly the 1st to the 7th centuries AD, was one of the great ancient civilisations — contemporary with Rome, controlling the trade routes between sub-Saharan Africa, Arabia, and the Mediterranean, minting its own coins, and developing the Ge'ez alphabet that survives to the present day. The physical evidence of that civilisation stands in Axum today: granite obelisks up to 33 metres tall, royal tombs, palace ruins, and — at the centre of everything — the Church of St. Mary of Zion, where the Ark of the Covenant is said to reside in a small chapel under the care of a single guardian monk.",
    sections: [
      { heading: "The Aksumite Stelae", body: "The Stelae Park holds the most dramatic physical evidence of the Aksumite Empire: monolithic granite obelisks, the largest of which was 33 metres tall before it collapsed (believed to be the tallest obelisk ever erected). Three major stelae still stand: Obelisk No. 2 — returned from Rome in 2008 after decades of controversy — stands 24 metres. The style is unique: each stelae represents a multi-storey building, with carved windows, false doors, and architectural details cut into the stone. They mark royal burial chambers below ground, several of which can be entered." },
      { heading: "St. Mary of Zion Church", body: "The original St. Mary of Zion was built in the 4th century under King Ezana, following Ethiopia's adoption of Christianity. The current church (17th century, rebuilt under Emperor Fasiladas) is one of the most important pilgrimage sites in Ethiopia. Adjacent to it stands the Chapel of the Tablet — a small building where, according to Ethiopian Orthodox tradition, the Ark of the Covenant has been held since its removal from Jerusalem. No visitor may enter the chapel. One guardian monk is appointed for life to protect the Ark. This is not theatre — the belief is absolute, and the atmosphere around the chapel reflects it." },
      { heading: "Queen of Sheba's Palace and Ezana's Park", body: "The ruins known as the Queen of Sheba's Palace are almost certainly misnamed — the building is unlikely to be hers, given the chronology — but the remains are genuinely impressive: a large stone complex with multiple rooms, walls over a metre thick, and the evidence of a civilization that built with extraordinary permanence. Ezana's Park holds the ancient inscription stones of King Ezana, documenting the Aksumite king who converted Ethiopia to Christianity in the 4th century AD in both Greek and the Ge'ez script he helped standardize." },
      { heading: "The Tombs of Kaleb and Gebre Meskel", body: "On the northern edge of the city, two sixth-century royal tombs cut into the hill are among the best-preserved Aksumite underground structures in Axum. Each consists of a main chamber with several side rooms, with the original stone lintels and carved details still intact. The scale and precision of the construction — for buildings underground, unseen, serving exclusively as burial chambers — gives a sense of what the Aksumite Empire built above ground before the centuries reduced it." },
    ],
    gettingThere: "Fly from Addis Ababa to Axum airport (approximately 1.5 hours) on Ethiopian Airlines. Direct flights also connect Axum to Lalibela, making an Axum-Lalibela-Gondar northern circuit feasible by air.",
    bestTimeDetail: "October to February. Axum is at a comfortable altitude and not subject to the extreme heat of lower areas. The Meskel festival (September) draws large crowds. The Timkat festival (January) is celebrated with particular ceremony at St. Mary of Zion.",
    faqs: [
      { q: "How long should I spend in Axum?", a: "One full day covers the Stelae Park, St. Mary of Zion, the Queen of Sheba's Palace ruins, and one or two tombs. Two days allows time for Ezana's inscription park, the Axum Archaeological Museum, a market visit, and a more unhurried experience of the spiritual atmosphere around the churches."},
      { q: "Can you visit the Ark of the Covenant?", a: "No. The chapel containing the Ark is closed to all visitors, including Ethiopian pilgrims and Orthodox clergy. The guardian monk is the only person allowed inside. This restriction is absolute and has been in place for centuries."},
      { q: "Is Axum usually combined with other northern destinations?", a: "Yes. Axum, Lalibela, Gondar, and the Tigray rock churches form the core northern historic circuit. Axum is well-connected by air to both Lalibela and Gondar. Sawla Tours can design the routing to make the most of limited time or to allow the circuit to breathe properly."},
    ],
  },

  "kafa-biosphere-coffee-forest": {
    slug: "kafa-biosphere-coffee-forest",
    altitude: "1,400 – 2,800 metres",
    entryNotes: "Forest walks require a licensed guide from the Kaffa Zone Tourism Bureau. Leech socks recommended in the wet season. The area receives significant rainfall — pack waterproofs year-round.",
    intro: "The word coffee — in English, French, Arabic, Italian, every language that uses it — traces back to Kaffa. This is the region, in the highlands of south-western Ethiopia, where Coffea arabica grows wild in the forest understorey and where the drink was first discovered and named. The Kafa Biosphere Reserve protects one of the last remaining stretches of primary Afromontane cloud forest in Africa, a UNESCO Biosphere Reserve that holds the highest concentration of wild coffee genetic diversity on earth. Walking through the Kafa forest, with coffee plants growing to three and four metres at your shoulder, flowering, fruiting, and falling untended, you are standing at the literal origin of a drink that has shaped world culture for five centuries.",
    sections: [
      { heading: "The Wild Coffee Forest", body: "Kafa's forests protect important wild and semi-wild Coffea arabica genetic diversity within a wider Afromontane ecosystem. A locally guided walk can explain the distinction between wild, semi-forest and managed coffee systems, while flowering, fruiting and harvesting depend on season and site." },
      { heading: "The Kafa Coffee Ceremony", body: "Coffee ceremonies in Kafa are more elaborate than elsewhere in Ethiopia. The green beans are roasted over coals, then hand-ground, then prepared in a clay jebena pot with incense burning throughout. The ceremony produces three rounds of coffee — abol, tona, baraka — each weaker than the last, each shared communally with sugar and sometimes butter or salt. Participating in a genuine Kafa coffee ceremony, in the region where the drink originated, is one of the quieter but more significant experiences available in Ethiopia." },
      { heading: "Bonga and the Local Market", body: "Bonga is the main town in the Kafa zone and a genuine market town rather than a tourist centre. On operating market days, traders arrive from highland and forest communities with coffee, honey, bark cloth, enset, spices, and crafts specific to the Kafa people. The Kafa people have their own traditional costumes, music, and social practices distinct from the Amhara, Oromo, and other major Ethiopian groups." },
      { heading: "Wildlife in the Kafa Forest", body: "The Kafa Biosphere supports a range of forest wildlife: Colobus monkeys are common in the canopy; leopard, bush pig, and buffalo move through the primary forest. The forest bird list includes several Ethiopian endemics and afromontane specialists. The forest itself — multi-layered, densely green, rain-misted — is among the most atmospheric forest environments in Ethiopia, and the combination of wild coffee, endemic wildlife, and intact community culture makes Kafa one of the country's most undervisited significant destinations." },
    ],
    gettingThere: "Fly from Addis Ababa to Jimma (approximately 50 minutes) then drive to Bonga (approximately 3-4 hours through highland scenery). Some travelers reach Kafa as part of a southern circuit via Arba Minch and the Omo Valley.",
    bestTimeDetail: "October to January is the best window — dry, clear, and the best forest walking conditions. The main rains (June-September) make paths difficult but turn the forest an extraordinary deep green. February to May is transitional.",
    faqs: [
      { q: "Is Kafa suitable for non-specialist travelers?", a: "Yes. You do not need to be a coffee specialist or birder to appreciate Kafa. The forest is beautiful, the coffee ceremony is moving, the community is welcoming. The main requirement is an interest in genuine cultural and natural experience rather than tourist infrastructure."},
      { q: "Can I buy wild Ethiopian coffee to take home?", a: "Yes. Several community cooperatives in the Kafa area sell single-origin coffee from the forest cooperative. Your guide will advise on the best sources. Import regulations vary by country — check before purchase."},
      { q: "Is Kafa usually combined with other destinations?", a: "Kafa is most naturally combined with Addis Ababa, the Omo Valley, and/or a Rift Valley lakes day. It is a 2-3 day addition that significantly enriches a southern Ethiopia itinerary."},
    ],
  },
  "arba-minch-nechsar": {
    slug: "arba-minch-nechsar",
    altitude: "About 1,200–1,300 metres in town; higher in the surrounding Gamo highlands",
    entryNotes: "Boat operation, wind, lake level, park roads and wildlife locations are checked before departure. Maintain distance from crocodiles and hippos and use only approved boats and guides.",
    intro: "Arba Minch—‘forty springs’—sits above Lakes Abaya and Chamo and provides a varied two- or three-night introduction to southern Ethiopia. The destination combines lake scenery, optional wildlife viewing, groundwater forest and Gamo highland context without treating the town as merely a transfer point for the Lower Omo.",
    sections: [
      { heading: "Lake Chamo", body: "A licensed boat journey may encounter Nile crocodiles, hippos, African fish eagles, pelicans and other waterbirds. The popular phrase ‘crocodile market’ describes a basking or congregation area rather than a market. Wildlife, wind and safe operating conditions determine the route and viewing distance." },
      { heading: "Nech Sar and the lakes", body: "Nech Sar contains pale grasslands, acacia, lake shore and groundwater forest between Lakes Abaya and Chamo. Zebra, gazelles and other mammals may be sought, but this is a lower-density wildlife landscape whose strength lies equally in scenery, birding and its position between highland and lowland Ethiopia." },
      { heading: "Gamo highlands", body: "Dorze and other Gamo highland areas can add weaving, enset agriculture, food traditions and broad views. Visits should be arranged through local guides and hosts, with household privacy and photography permission established before arrival." },
      { heading: "Pacing", body: "Two nights allow one lake or park activity and one highland or forest experience. Three nights provide weather flexibility and make the destination feel like a journey component rather than a rushed gateway." },
    ],
    gettingThere: "Arba Minch is reached by scheduled domestic air service when operating or by a long private road journey from Addis Ababa. It also connects naturally by road with Konso and the southern circuit. Flight schedules, road times and park access are reconfirmed for the intended dates.",
    bestTimeDetail: "October to March is often drier and easier for boating and road access. Green-season scenery can be beautiful, but rain may affect tracks, visibility and lake conditions.",
    faqs: [
      { q: "Are crocodiles and hippos guaranteed on Lake Chamo?", a: "No. They are regularly sought, but wildlife movement, lake level and safe boat operation vary. The guide and boat operator select the responsible route on the day." },
      { q: "How many nights should I spend in Arba Minch?", a: "Two nights is a useful minimum; three is stronger for Lake Chamo, Nech Sar or groundwater forest and a Gamo highland visit." },
      { q: "Is Nech Sar a conventional big-game safari?", a: "No. It is better understood as a scenic Rift Valley park with birding and possible mammals rather than a high-density East African safari." },
      { q: "Can families visit?", a: "Many families enjoy the lake and highland experiences, provided children can board the selected boat safely and follow instructions around wildlife and water." },
      { q: "Can Arba Minch be combined with Konso?", a: "Yes. It is the most natural pairing and can continue toward Jinka and the Lower Omo when roads and time allow." },
      { q: "Is a flight always available?", a: "No. Domestic schedules change. Sawla confirms the actual operating service and builds a road or timing alternative where practical." },
    ],
  },

  "konso": {
    slug: "konso",
    altitude: "Approximately 1,600–2,000 metres across the wider cultural landscape",
    entryNotes: "Traditional settlements are lived-in communities. Access, local guide arrangements, fees, household privacy and photography permission are agreed before entry.",
    intro: "Konso is a living cultural landscape of dry-stone terraces, fortified settlements and community institutions adapted over generations to a demanding environment. Its UNESCO significance lies in the relationship between agriculture, water and soil conservation, settlement design and social organization—not in one isolated village or monument.",
    sections: [
      { heading: "Terraced landscape", body: "Stone walls contour the hillsides to conserve soil and water. A guided walk explains cultivation, crop diversity, maintenance and how the landscape responds to erosion and climate rather than reducing the terraces to a viewpoint photograph." },
      { heading: "Paleta settlements", body: "Fortified settlements contain narrow paths, generation poles and communal mora spaces. Visitor routes differ by community, and a local guide establishes what may be entered or photographed because these remain homes and active communal places." },
      { heading: "Waka and heritage interpretation", body: "Carved waka memorial figures carry funerary and historical meaning and have been vulnerable to theft and illicit trade. Interpretation should take place through authorized collections, museums and community knowledge; visitors should never seek original objects for purchase." },
      { heading: "Gesergiyo and surrounding country", body: "Eroded formations near Gesergiyo and broad agricultural views add geological and landscape context. Road and trail conditions determine which sites are sensible on a given day." },
    ],
    gettingThere: "Konso is normally reached by private road transfer from Arba Minch or as part of a wider southern itinerary. Transfer times vary with traffic, road works, weather and stops; Sawla uses planning ranges rather than a fixed promise.",
    bestTimeDetail: "October to March is often drier for road travel and walking. Selected green-season visits can be rewarding, but rain may make stone paths slippery and affect southern road links.",
    faqs: [
      { q: "How long should I spend in Konso?", a: "Two nights is recommended. One night allows only a compressed introduction, while two gives time for terraces, a settlement visit and landscape context." },
      { q: "Is Konso only a stop on the way to the Omo Valley?", a: "No. It is a major cultural landscape in its own right and deserves more than a roadside pause." },
      { q: "Can I enter any traditional settlement?", a: "No. Visits depend on community permission, local arrangements and the appropriate route for that day." },
      { q: "Can I photograph people and homes?", a: "Only with individual and community permission. Your guide explains when photography is appropriate and when conversation or observation should come first." },
      { q: "Is the walking difficult?", a: "Settlement paths can be steep, narrow and uneven. The program can be shortened or adjusted, but the complete experience is not wheelchair accessible." },
      { q: "Can Konso be combined with Arba Minch?", a: "Yes. Arba Minch and Konso form a strong three- to five-night southern introduction and can continue to Jinka or Yabello." },
    ],
  },

  "chebera-churchura-national-park": {
    slug: "chebera-churchura-national-park",
    entryNotes: "Specialist operation only. Park permission, roads, ranger support, accommodation or camp specification, communications, vehicle recovery and emergency options must be confirmed before sale.",
    intro: "Chebera Churchura protects a remote southwestern mosaic of woodland, savannah, rivers, wetlands, waterfalls and caves. It is important elephant and buffalo habitat, but it is not a high-volume safari park: vegetation can be dense, wildlife dispersed and access slow. Quality depends on several field days, park intelligence and trackers rather than a guaranteed sighting list.",
    sections: [
      { heading: "Elephant landscape", body: "Elephant signs, recent ranger information, water and vegetation shape each field day. Encounters may be distant or brief, and the journey should never be marketed with a fixed population number or a sighting guarantee." },
      { heading: "Habitats and birding", body: "Riverine forest, woodland, open savannah and wet areas create substantial ecological variety. Birding and landscape observation remain rewarding even when large mammals are difficult to locate." },
      { heading: "Remote logistics", body: "The park approach can involve long rough roads and seasonal mud. Current accommodation may be limited, so an approved mobile camp, additional vehicles, water, power and recovery equipment may form part of the final specification." },
      { heading: "Conservation context", body: "Responsible travel supports legal park services and local employment while acknowledging human–elephant coexistence and surrounding land-use pressures. The website does not publish sensitive wildlife locations." },
    ],
    gettingThere: "The route is usually built through a southwestern gateway such as Jimma and then continued by private expedition vehicle. Exact approach, road time and staging nights depend on current conditions; map distance is a poor guide to actual travel time.",
    bestTimeDetail: "December to March is often the most practical period for roads and camp operation. Rain can alter access quickly, so every departure requires current park and driver information.",
    faqs: [
      { q: "Are elephants guaranteed?", a: "No. Chebera is important elephant habitat, but movement, dense vegetation and road access make sightings unpredictable." },
      { q: "How many nights are needed?", a: "At least three park nights, preferably four or five, plus transit and contingency time." },
      { q: "Is there reliable lodge accommodation?", a: "Facilities can change. Sawla confirms the operating option and may propose an approved mobile camp with a written specification." },
      { q: "How difficult is the road?", a: "It can be long, rough and seasonally muddy. Vehicle number and recovery support are determined after a current route assessment." },
      { q: "Is it suitable for a first safari?", a: "Only for travelers who value remoteness and fieldcraft more than frequent, easy sightings or luxury continuity." },
      { q: "What happens if the park is not operationally suitable?", a: "Sawla changes the route or declines operation rather than lowering the agreed safety and logistics standard." },
    ],
  },

  "gambella-national-park": {
    slug: "gambella-national-park",
    entryNotes: "Highly conditional. Sawla may decline operation. Official guidance, regional permission, park management, civilian transport, camp security, communications and evacuation feasibility must all be acceptable.",
    intro: "Gambella National Park covers vast western floodplains, wetlands, rivers, woodland and savannah within a wider transboundary ecosystem. It is associated with white-eared kob movement and exceptional remote-wildlife potential, but its scale, heat, flooding, access and security context make it an expedition for experienced travelers rather than a mainstream safari addition.",
    sections: [
      { heading: "White-eared kob ecology", body: "Herd location and density change with rainfall, water, grazing, disturbance and movement across borders. Sawla uses the best available current park information but never promises a migration spectacle on a fixed date." },
      { heading: "Floodplain systems", body: "Seasonal water determines wildlife distribution, bird concentrations, track condition and camp position. Understanding the landscape is as important as pursuing a species list." },
      { heading: "Expedition standards", body: "A viable journey may require multiple suitable vehicles, redundant water and fuel, communications, ranger support, a mobile camp and buffer days. A booked flight to Gambella does not mean the park route is open or responsible." },
      { heading: "Sensitive information", body: "Real-time camp, wildlife and security-sensitive locations are not published. Community interaction and photography require explicit local and individual permission." },
    ],
    gettingThere: "Domestic air service to Gambella may provide the gateway when operating and when the complete field route is approved. Road travel from Addis is multi-day. The onward park approach can be long and highly seasonal.",
    bestTimeDetail: "December to March may provide the most workable dry-season window, but current access and security override seasonal preference. Sawla may decide that no leisure departure is appropriate.",
    faqs: [
      { q: "Can Sawla guarantee the white-eared kob migration?", a: "No. Herd position and density vary with ecology and transboundary movement." },
      { q: "Is Gambella currently suitable for tourism?", a: "That is date-specific and may be no. The decision is based on official and field information, not evergreen website copy." },
      { q: "How many nights are needed?", a: "At least four park nights, ideally five or six, plus transit and contingency days." },
      { q: "What accommodation is used?", a: "An approved mobile camp may be required. Sanitation, power, security and communications are specified only after current feasibility is known." },
      { q: "Is it suitable for a first Ethiopia visit?", a: "Usually not. It is intended for experienced remote travelers who accept basic conditions, uncertainty and possible cancellation." },
      { q: "Can it be added quickly to a historic circuit?", a: "No. It requires separate logistics and meaningful buffers and should be treated as a principal expedition objective." },
    ],
  },

  "kafta-shiraro-national-park-safari-ethiopia": {
    slug: "kafta-shiraro-national-park-safari-ethiopia",
    entryNotes: "Highly conditional northern expedition. Civilian corridors, regional guidance, park approval, roads, ranger support, camp viability and emergency options must be reviewed before accepting travel.",
    intro: "Kafta Sheraro protects dry woodland and Tekeze River landscapes in northwestern Tigray and is associated with elephants and seasonal Demoiselle cranes. It is not a conventional northern-circuit stop. Access and visitor infrastructure can change, wildlife is never guaranteed and the route should proceed only when the full civilian and field chain is acceptable.",
    sections: [
      { heading: "Elephant habitat", body: "Published population figures can become outdated and should not be used as sales claims. Field days follow current park intelligence, and the presence of habitat does not guarantee an encounter." },
      { heading: "Seasonal cranes and birding", body: "Demoiselle cranes may use the wider landscape seasonally, but timing, location and abundance vary by year. Dry-country birding remains a specialist interest rather than a fixed checklist promise." },
      { heading: "Tekeze landscape", body: "River, woodland and broad dry-country scenery form a central part of the experience. Heat, distances and limited support infrastructure define the day-to-day rhythm." },
      { heading: "Operating discipline", body: "The expedition may require a mobile camp, multiple vehicles, communications and contingency days. Sawla accepts a no-go decision when authorities or field teams judge conditions unsuitable." },
    ],
    gettingThere: "The appropriate northern gateway and road approach depend entirely on current civilian routes and park permission. Published historic transfer times are not used as current promises.",
    bestTimeDetail: "Seasonal wildlife objectives and road practicality must be matched to current park information. There is no evergreen operating window that overrides security and access assessment.",
    faqs: [
      { q: "How many elephants are in Kafta Sheraro?", a: "Sawla does not publish a fixed figure without current authoritative field data and never guarantees a sighting." },
      { q: "Are Demoiselle cranes guaranteed?", a: "No. They are seasonal migrants whose location and abundance vary." },
      { q: "Is the park open to travelers?", a: "The answer is date-specific. Every part of the access and support chain must be confirmed." },
      { q: "How long is a meaningful visit?", a: "At least three park nights, ideally four or five, plus substantial transit and contingency time." },
      { q: "What accommodation is available?", a: "Visitor infrastructure is limited and may require an approved mobile camp. Exact standards are confirmed for the departure." },
      { q: "Is this suitable for a first visit?", a: "Generally no. It is designed for experienced remote travelers, specialist birders or conservation-focused guests who accept uncertainty." },
    ],
  },

  "awash-national-park-alledeghi-plains-safari": {
    slug: "awash-national-park-alledeghi-plains-safari",
    altitude: "Low-elevation Rift Valley and escarpment sectors",
    entryNotes: "Awash National Park and the separate Alledeghi Plains use different access arrangements. Park guides, tracks, community coordination and wildlife locations are checked for the intended dates.",
    intro: "Awash is one of Ethiopia’s most accessible dry-country wildlife and birding landscapes from Addis Ababa. River gorge, falls, acacia country and volcanic terrain create variety, while an optional, separately arranged Alledeghi extension may add localized mammals and birds. It should be sold for habitat, birding and patient observation rather than high-density predators.",
    sections: [
      { heading: "Awash River and falls", body: "River scenery, falls and gorge habitats provide a strong visual introduction, with route and viewpoint chosen according to water, road and safety conditions." },
      { heading: "Fantalle and volcanic country", body: "Volcanic features, hot-spring sectors and open drylands add geological context. Optional walks depend on heat, guide assessment and current rules." },
      { heading: "Dry-country wildlife", body: "Beisa oryx, gazelles, baboons and a wide range of birds may be sought. Lion, cheetah, Grevy’s zebra and every named species remain possibilities rather than promises." },
      { heading: "Alledeghi Plains", body: "Alledeghi is a separate pastoral and wildlife landscape with its own local coordination. Access is included only when current permission, roads and community arrangements support a responsible visit." },
    ],
    gettingThere: "Awash is primarily reached by private road transfer from Addis Ababa and can continue east toward Harar and Dire Dawa. Main-highway traffic, road works and park tracks affect travel time, so the itinerary uses a range rather than a fixed duration.",
    bestTimeDetail: "October to March is often drier, with November to February generally more comfortable. Midday heat remains significant and summer rain can alter tracks and visibility.",
    faqs: [
      { q: "Is Awash a conventional big-game safari?", a: "No. It is stronger for birding, scenery, geology and dry-country mammals than for frequent predator sightings." },
      { q: "How many nights do I need?", a: "Two nights is a useful minimum; three allows two dawn sessions and room for an additional sector or Alledeghi when available." },
      { q: "Is Alledeghi inside the national park?", a: "No. It is a separate landscape with different access and local arrangements." },
      { q: "Can I see Grevy’s zebra?", a: "They may be sought in the wider Alledeghi landscape, but movement and access vary and sightings are not guaranteed." },
      { q: "Is Awash good for birdwatching?", a: "Yes. Its dry-country habitats are particularly valuable with a specialist guide and early starts, but no total species number is promised." },
      { q: "Can Awash be visited as a day trip?", a: "A very long day may be technically possible but is poor value. At least one night, and preferably two, creates a better wildlife rhythm." },
    ],
  },
}