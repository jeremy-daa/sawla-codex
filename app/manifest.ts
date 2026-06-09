import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sawla Tours — Bespoke Ethiopia Tours',
    short_name: 'Sawla Tours',
    description: 'Premium private Ethiopia tours designed by Addis Ababa specialists.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f8f6f1',
    theme_color: '#2a2724',
    icons: [
      {
        src: '/images/brand/sawla-tours-logo-white.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
