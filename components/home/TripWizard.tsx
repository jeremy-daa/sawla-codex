"use client"

import { useState } from "react"
import Link from "next/link"
import { SITE } from "@/data/siteData"
import { motion, AnimatePresence } from "framer-motion"

const steps = [
  {
    q: "When are you planning to travel?",
    hint: "Ethiopian seasons shape every journey",
    options: [
      { label: "Jan – Mar", sub: "Dry & warm" },
      { label: "Apr – Jun", sub: "Green & lush" },
      { label: "Jul – Sep", sub: "Highlands cool" },
      { label: "Oct – Dec", sub: "Peak season" },
      { label: "Flexible", sub: "We will advise" },
    ],
  },
  {
    q: "How long do you have?",
    hint: "Longer stays unlock Ethiopia’s remote wonders",
    options: [
      { label: "1–3 days", sub: "Addis or one focused stop" },
      { label: "4–7 days", sub: "One region in depth" },
      { label: "8–12 days", sub: "A strong multi-stop route" },
      { label: "13–18 days", sub: "A deeper private journey" },
      { label: "19+ days", sub: "A broad, slower itinerary" },
      { label: "Not sure yet", sub: "We will advise" },
    ],
  },
  {
    q: "What draws you to Ethiopia?",
    hint: "Select all that speak to you",
    multi: true,
    options: [
      { label: "Historic Ethiopia and living heritage", sub: "Lalibela, Gondar, Aksum" },
      { label: "Birdwatching and endemic species", sub: "Specialist birding routes" },
      { label: "Wildlife and endemic mammals", sub: "Wolf, gelada and rare habitats" },
      { label: "Omo Valley and community journeys", sub: "Respectful cultural travel" },
      { label: "Danakil and remote expeditions", sub: "Conditional frontier routes" },
      { label: "Photography expedition", sub: "Light, access and field timing" },
      { label: "Festivals, faith and pilgrimage", sub: "Timket, Meskel and sacred journeys" },
      { label: "Not sure yet — I would like advice", sub: "Start with expert guidance" },
    ],
  },
  {
    q: "How many travelers?",
    hint: "Group size shapes logistics and pricing",
    options: [
      { label: "Solo", sub: "Private guide included" },
      { label: "2 people", sub: "Couple or friends" },
      { label: "3 – 5", sub: "Small group" },
      { label: "6+", sub: "Family or group" },
    ],
  },
  {
    q: "What is your budget per person?",
    hint: "All options include private guiding and vehicle",
    options: [
      { label: "Up to USD 2,000 per person", sub: "Shorter or tightly focused routes" },
      { label: "USD 2,000–3,500 per person", sub: "Many private mid-range journeys" },
      { label: "USD 3,500–5,000 per person", sub: "Longer or specialist itineraries" },
      { label: "USD 5,000–8,000 per person", sub: "Complex or premium journeys" },
      { label: "USD 8,000+ per person", sub: "Extended and highly specialist travel" },
      { label: "Prefer to discuss", sub: "We will advise" },
    ],
  },
]

export default function TripWizard() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string[]>>({})
  const [done, setDone] = useState(false)

  const current = steps[step]

  function toggle(option: string) {
    setAnswers(prev => {
      const existing = prev[step] ?? []
      if (current.multi) {
        const next = existing.includes(option)
          ? existing.filter(x => x !== option)
          : [...existing, option]
        return { ...prev, [step]: next }
      }
      return { ...prev, [step]: [option] }
    })
    if (!current.multi) {
      setTimeout(() => {
        if (step < steps.length - 1) setStep(s => s + 1)
        else setDone(true)
      }, 280)
    }
  }

  function isSelected(option: string) {
    return (answers[step] ?? []).includes(option)
  }

  function buildWhatsAppMsg() {
    const nl = String.fromCharCode(10)
    const lines = steps.map((s, i) => s.q + ": " + (answers[i] ?? []).join(", ")).join(nl)
    return encodeURIComponent("Hi Sawla Tours," + nl + "I used the Trip Finder:" + nl + nl + lines + nl + nl + "Please help me plan a private Ethiopia journey.")
  }

  function buildEnquiryHref() {
    const params = new URLSearchParams({ source: "trip-finder" })
    if (answers[0]?.[0]) params.set("travelDates", answers[0][0])
    if (answers[1]?.[0]) params.set("duration", answers[1][0])
    if (answers[2]?.length) params.set("interests", answers[2].join("|"))
    if (answers[3]?.[0]) params.set("travelers", answers[3][0])
    if (answers[4]?.[0]) params.set("budget", answers[4][0])
    return `/enquire?${params.toString()}`
  }

  if (done) {
    return (
      <div className="text-center py-12">
        <motion.div
          initial={{ opacity:0, scale:0.95 }}
          animate={{ opacity:1, scale:1 }}
          transition={{ duration:0.5, ease:[0.16,1,0.3,1] }}
        >
          <div className="w-16 h-16 rounded-full border border-gold/40 flex items-center justify-center mx-auto mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12l5 5L19 7" stroke="#c9941a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="font-display text-volcanic mb-3" style={{fontSize:"clamp(1.5rem,3vw,2rem)"}}>
            A useful starting point is ready.
          </h3>
          <p className="text-warmgrey mb-8 max-w-md mx-auto font-body">
            Carry these preferences into the full enquiry form, or send the summary on WhatsApp for a short first conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${SITE.phoneE164.replace(/\D/g, "")}?text=${buildWhatsAppMsg()}`}
              target="_blank" rel="noopener noreferrer"
              className="btn-gold"
            >
              Send via WhatsApp
            </a>
            <Link href={buildEnquiryHref()} className="btn-ghost">
              Continue to Enquiry Form
            </Link>
          </div>
          <button
            className="mt-6 text-warmgrey text-sm font-body hover:text-gold transition-colors cursor-pointer"
            onClick={() => { setStep(0); setAnswers({}); setDone(false); }}
          >
            Start over
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div>
      {/* Progress bar */}
      <div className="flex gap-1.5 mb-10" aria-label="Step progress">
        {steps.map((_, i) => (
          <div key={i} className="h-0.5 flex-1 rounded-full overflow-hidden bg-sand">
            <motion.div
              className="h-full bg-gold rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: i < step ? "100%" : i === step ? "50%" : "0%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        ))}
      </div>

      {/* Step counter */}
      <p className="label-eyebrow mb-2">Step {step + 1} of {steps.length}</p>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3 className="font-display text-volcanic mb-2 leading-tight"
            style={{ fontSize: "clamp(1.5rem,3vw,2.25rem)", letterSpacing: "-0.015em" }}>
            {current.q}
          </h3>
          <p className="text-warmgrey font-body mb-8" style={{ fontSize: "0.9375rem" }}>
            {current.hint}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {current.options.map(opt => (
              <button
                key={opt.label}
                onClick={() => toggle(opt.label)}
                className={[
                  "text-left p-4 rounded-[12px] border transition-all duration-200 cursor-pointer",
                  isSelected(opt.label)
                    ? "border-gold bg-gold/8 text-volcanic"
                    : "border-sand bg-ivory hover:border-gold/50 text-volcanic",
                ].join(" ")}
              >
                <span className="block font-body font-medium text-[14px] leading-snug">{opt.label}</span>
                <span className="block font-body text-[12px] text-warmgrey mt-0.5 leading-snug">{opt.sub}</span>
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-8">
        <button
          onClick={() => setStep(s => Math.max(0, s - 1))}
          className={["font-body text-sm tracking-wide text-warmgrey hover:text-gold transition-colors cursor-pointer", step === 0 ? "invisible" : ""].join(" ")}
        >
          &#8592; Back
        </button>
        {current.multi && (
          <button
            onClick={() => { if (step < steps.length - 1) setStep(s => s + 1); else setDone(true); }}
            className="btn-primary text-[12px] py-3 px-6"
          >
            {step === steps.length - 1 ? "See My Journey" : "Next"}
          </button>
        )}
      </div>
    </div>
  )
}
