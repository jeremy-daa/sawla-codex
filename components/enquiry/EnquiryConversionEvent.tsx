'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
  }
}

export default function EnquiryConversionEvent({ reference }: { reference: string }) {
  useEffect(() => {
    if (!reference || reference === 'received') return
    window.dataLayer = window.dataLayer ?? []
    window.dataLayer.push({
      event: 'generate_lead',
      enquiry_reference: reference,
      lead_type: 'private_ethiopia_journey',
    })
  }, [reference])

  return null
}
