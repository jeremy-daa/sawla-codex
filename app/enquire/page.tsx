'use client'

import { useState } from 'react'
import Link from 'next/link'
import Arrow from '@/components/ui/Arrow'

type FormState = {
  firstName: string
  lastName: string
  email: string
  country: string
  style: string
  duration: string
  partySize: string
  budget: string
  travelDates: string
  message: string
  honeypot: string
}

const initialForm: FormState = { firstName: '', lastName: '', email: '', country: '', style: '', duration: '', partySize: '', budget: '', travelDates: '', message: '', honeypot: '' }
const styles = ['Historic & Cultural Ethiopia', 'Omo Valley Cultural Journeys', 'Danakil & Frontier Expeditions', 'Wildlife & Birding Tours', 'Festival & Faith Immersion', 'Photography & Cinematic Journeys', 'Not sure yet']
const durations = ['7–10 days', '10–14 days', '14–21 days', '21+ days', 'Flexible']
const partySizes = ['Solo', '2 people', '3–4 people', '5–8 people', 'Group 9+']
const budgets = ['USD 2,000–4,000 pp', 'USD 4,000–7,000 pp', 'USD 7,000–12,000 pp', 'USD 12,000+ pp', 'Flexible / not sure']

export default function EnquirePage() {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState<FormState>(initialForm)
  const setField = (key: keyof FormState, value: string) => setForm(prev => ({ ...prev, [key]: value }))

  async function submit() {
    if (form.honeypot) return
    setLoading(true)
    try {
      await fetch('/api/enquire', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      setSubmitted(true)
    } catch {
      window.location.href = `mailto:explore@sawlatours.com?subject=Sawla Tours enquiry&body=${encodeURIComponent(form.message)}`
    } finally { setLoading(false) }
  }

  if (submitted) return <section className="flex min-h-screen items-center bg-volcanic px-6 text-ivory"><div className="mx-auto max-w-xl text-center"><p className="label-eyebrow">Received</p><h1 className="mt-6 font-display text-display-lg font-light">Thank you, {form.firstName}.</h1><p className="mt-6 font-body text-ivory/60">We will respond within 24 hours with a thoughtful first reply, not a brochure.</p><Link href="/ethiopias-popular-destinations" className="btn-primary-ivory mt-9">Explore Destinations</Link></div></section>

  return (
    <section className="min-h-screen bg-volcanic px-6 pb-24 pt-40 text-ivory md:px-12 md:pt-48">
      <div className="mx-auto grid max-w-container gap-14 lg:grid-cols-[0.85fr_1fr] lg:items-start">
        <div>
          <p className="label-eyebrow">Private enquiry</p>
          <h1 className="mt-6 font-display text-display-lg font-light leading-tight">Every journey begins with <em className="italic text-ivory/50">one serious conversation.</em></h1>
          <p className="mt-7 max-w-xl font-body text-body-md text-ivory/60">Tell us what matters: season, pace, people, photography, culture, wildlife, comfort and the feeling you want the journey to leave behind.</p>
          <div className="mt-10 grid gap-4">
            {['Reply within 24 hours', 'No booking fee or pressure', 'WhatsApp +251 970 578 306', 'Designed by Ethiopia-based specialists'].map(item => <div key={item} className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-gold"/><span className="font-body text-sm text-ivory/50">{item}</span></div>)}
          </div>
          <blockquote className="mt-12 border-l-2 border-gold/50 pl-6"><p className="font-display text-2xl italic leading-9 text-ivory/70">“Sawla spent time understanding us before selling anything. That changed the whole trip.”</p><footer className="mt-4 font-body text-xs uppercase tracking-[0.16em] text-ivory/40">Private traveller · 2025</footer></blockquote>
        </div>
        <div className="border border-ivory/10 bg-ivory/[0.04] p-6 backdrop-blur md:p-10">
          <div className="mb-8 flex items-center gap-3"><button onClick={()=>setStep(1)} className={`h-9 w-9 rounded-full border text-sm ${step===1?'border-gold bg-gold text-volcanic':'border-ivory/20 text-ivory/50'}`}>1</button><button onClick={()=>form.firstName&&form.email&&form.country&&setStep(2)} className={`h-9 w-9 rounded-full border text-sm ${step===2?'border-gold bg-gold text-volcanic':'border-ivory/20 text-ivory/50'}`}>2</button><span className="font-body text-xs uppercase tracking-[0.16em] text-ivory/36">{step===1?'About you':'About the journey'}</span></div>
          {step === 1 ? (
            <div className="space-y-5">
              <div className="grid gap-4 md:grid-cols-2"><Field label="First name *" value={form.firstName} onChange={v=>setField('firstName',v)} /><Field label="Last name" value={form.lastName} onChange={v=>setField('lastName',v)} /></div>
              <Field label="Email *" type="email" value={form.email} onChange={v=>setField('email',v)} />
              <Field label="Country *" value={form.country} onChange={v=>setField('country',v)} />
              <input className="hidden" tabIndex={-1} autoComplete="off" value={form.honeypot} onChange={e=>setField('honeypot',e.target.value)} />
              <button onClick={()=>form.firstName && form.email && form.country && setStep(2)} className="btn-primary-ivory w-full">Continue</button>
            </div>
          ) : (
            <div className="space-y-5">
              <Select label="Travel style" value={form.style} onChange={v=>setField('style',v)} options={styles} />
              <div className="grid gap-4 md:grid-cols-2"><Select label="Duration" value={form.duration} onChange={v=>setField('duration',v)} options={durations} /><Select label="Party size" value={form.partySize} onChange={v=>setField('partySize',v)} options={partySizes} /></div>
              <Select label="Budget guide" value={form.budget} onChange={v=>setField('budget',v)} options={budgets} />
              <Field label="Travel dates" value={form.travelDates} onChange={v=>setField('travelDates',v)} placeholder="e.g. January 2027, flexible" />
              <label className="block"><span className="mb-2 block font-body text-[0.62rem] uppercase tracking-[0.16em] text-ivory/40">Tell us what matters *</span><textarea rows={5} className="field-input resize-none" value={form.message} onChange={e=>setField('message',e.target.value)} placeholder="What do you want to feel? What is non-negotiable?" /></label>
              <div className="flex gap-3"><button onClick={()=>setStep(1)} className="btn-ghost-light border border-ivory/10 px-5">Back</button><button disabled={loading || !form.message} onClick={submit} className="btn-primary-ivory flex-1 disabled:cursor-not-allowed disabled:opacity-45">{loading ? 'Sending…' : <>Send Enquiry <Arrow /></>}</button></div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({ label, value, onChange, type = 'text', placeholder = '' }: { label: string; value: string; onChange: (value: string) => void; type?: string; placeholder?: string }) { return <label className="block"><span className="mb-2 block font-body text-[0.62rem] uppercase tracking-[0.16em] text-ivory/40">{label}</span><input className="field-input" type={type} value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder} /></label> }
function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (value: string) => void; options: string[] }) { return <label className="block"><span className="mb-2 block font-body text-[0.62rem] uppercase tracking-[0.16em] text-ivory/40">{label}</span><select className="field-input text-ivory/70" value={value} onChange={e=>onChange(e.target.value)}><option value="">Select or leave flexible</option>{options.map(option=><option key={option} value={option}>{option}</option>)}</select></label> }
