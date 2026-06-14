# Trust Architecture V14

## Strategic objective

Convert trust from scattered marketing language into a connected operating system that answers five traveler questions:

1. Who is the company?
2. Who plans and delivers the journey?
3. What standards guide the work?
4. What is verified, conditional or still awaiting evidence?
5. What happens when the plan changes?

## Canonical public routes

| Function | Route |
|---|---|
| Company story and team architecture | `/about-us` |
| Reasons to choose Sawla and operator-comparison framework | `/why-travel-with-sawla-tours` |
| Seven-stage planning/operating process | `/how-we-work` |
| Role-based journey design and operations team | `/meet-our-travel-specialists` |
| Guide assignment and specialist profiles | `/meet-our-guides` |
| Driver responsibilities and vehicle categories | `/meet-our-drivers` |
| Trekking, expedition and film-crew camp formats | `/mobile-tented-camps-ethiopia` |
| Consent, community, photography and wildlife principles | `/responsible-travel` |
| Route screening, traveler preparation and incident framework | `/safety-and-travel-assurance` |

## Key architecture decisions

### Founder story remains unnamed

Prior Sawla direction preferred an About page without explicitly naming the founder. V14 preserves that decision. It publishes a verified leadership profile—formal tourism training, guiding/operations background and founder-led direction—without creating a named Person schema or a fictional public biography.

### Team information is role-based

No placeholder names, portraits or invented CVs are used. The system is ready for real profiles later, but a profile should not be published until role, biography, experience, image rights and consent are confirmed.

### Why Sawla uses evidence tests

Each reason includes a practical proof such as a trip brief, operating-status review, guiding structure, written camp specification or escalation path.

### Vehicles and camps are specifications, not promises

The website explains categories and decision inputs. Exact model, seats, air conditioning, bathroom configuration, tent type, beds, power and staff must be confirmed in the proposal.

### Safety is a decision framework

The safety page does not claim risk-free travel or provide a static national verdict. It separates route screening, service confirmation, traveler responsibilities, daily monitoring, decision authority and incident escalation.

### Canonical journey integration

All 25 product pages now contain an “Operational assurance” module linking to the standards behind the itinerary. Remote products substitute the mobile-camp standard for the general responsible-travel card where appropriate.

## Structured data

- AboutPage
- WebPage
- CollectionPage
- Service
- ItemList
- FAQPage
- BreadcrumbList
- Organization entity references to `/#travelagency`

No Person schema is generated without a verified named individual.
