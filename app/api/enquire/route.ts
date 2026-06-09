// app/api/enquire/route.ts
// Enquiry form handler — using Resend (recommended)
// Install: npm install resend
// Set env var: RESEND_API_KEY=re_xxxxx

import { NextResponse } from 'next/server'

interface EnquiryData {
  firstName: string
  lastName?: string
  email: string
  country: string
  style?: string
  duration?: string
  partySize?: string
  budget?: string
  travelDates?: string
  message: string
  honeypot?: string
}

export async function POST(req: Request) {
  try {
    const data: EnquiryData = await req.json()

    // Spam trap
    if (data.honeypot) {
      return NextResponse.json({ success: true }) // silent ignore
    }

    // Validate required fields
    if (!data.firstName || !data.email || !data.message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // ── OPTION A: Resend (recommended) ────────────────────────────────────
    // Uncomment and install resend: npm install resend
    /*
    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Notification to Sawla Tours team
    await resend.emails.send({
      from: 'enquiries@sawlatours.com',
      to: 'explore@sawlatours.com',
      subject: `New enquiry from ${data.firstName} ${data.lastName || ''} — ${data.country}`,
      html: `
        <h2>New Sawla Tours Enquiry</h2>
        <table>
          <tr><td><strong>Name:</strong></td><td>${data.firstName} ${data.lastName || ''}</td></tr>
          <tr><td><strong>Email:</strong></td><td>${data.email}</td></tr>
          <tr><td><strong>Country:</strong></td><td>${data.country}</td></tr>
          <tr><td><strong>Travel style:</strong></td><td>${data.style || 'Not specified'}</td></tr>
          <tr><td><strong>Duration:</strong></td><td>${data.duration || 'Not specified'}</td></tr>
          <tr><td><strong>Party size:</strong></td><td>${data.partySize || 'Not specified'}</td></tr>
          <tr><td><strong>Travel dates:</strong></td><td>${data.travelDates || 'Not specified'}</td></tr>
        </table>
        <h3>Message:</h3>
        <p>${data.message}</p>
      `,
    })

    // Auto-reply to traveller
    await resend.emails.send({
      from: 'explore@sawlatours.com',
      to: data.email,
      subject: 'We received your enquiry — Sawla Tours Ethiopia',
      html: `
        <p>Dear ${data.firstName},</p>
        <p>Thank you for reaching out to Sawla Tours. We've received your enquiry and one of our specialists will come back to you within 24 hours.</p>
        <p>In the meantime, you're welcome to explore our destinations at sawlatours.com/ethiopias-popular-destinations.</p>
        <p>If you have an urgent question, WhatsApp us at +251 970 578 306.</p>
        <br>
        <p>Warm regards,<br>The Sawla Tours team<br>explore@sawlatours.com</p>
      `,
    })
    */

    // ── OPTION B: Formspree (zero-code alternative) ────────────────────────
    // Set FORMSPREE_ENDPOINT env var to your form endpoint
    // const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT
    // if (formspreeEndpoint) {
    //   await fetch(formspreeEndpoint, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    //     body: JSON.stringify(data),
    //   })
    // }

    // ── OPTION C: Log only (for testing) ──────────────────────────────────
    console.log('Enquiry received:', {
      name: `${data.firstName} ${data.lastName || ''}`,
      email: data.email,
      country: data.country,
      style: data.style,
      message: data.message.substring(0, 100),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Enquiry API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
