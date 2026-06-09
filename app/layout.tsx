import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import SchemaScript from '@/components/ui/SchemaScript'
import { buildMetadata } from '@/lib/seo'
import { graphSchema, organizationSchema, websiteSchema } from '@/lib/schema'

export const metadata: Metadata = buildMetadata({
  title: 'Bespoke Ethiopia Tours',
  description: 'Private Ethiopia tours to Lalibela, Omo Valley, Danakil, Simien and Bale, designed by Addis Ababa specialists with field-tested routes.',
  path: '/',
  keywords: ['Ethiopia tours', 'bespoke Ethiopia tours', 'private Ethiopia tours', 'Lalibela tours', 'Omo Valley tours', 'Danakil tours', 'Simien Mountains tours', 'Sawla Tours'],
})

const rootGraph = graphSchema([organizationSchema, websiteSchema])

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <SchemaScript data={rootGraph} />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
