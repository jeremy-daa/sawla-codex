// components/ui/PlaceholderImage.tsx
// Replace with next/image when real photos are ready

export type Category = 'home' | 'destination' | 'tour' | 'guide' | 'species' | 'about' | 'camp' | 'moments' | 'general'

const CAT_STYLES: Record<Category, { bg: string; border: string; text: string; label: string }> = {
  home:        { bg: '#FCEBEB', border: '#F09595', text: '#791F1F', label: 'Homepage' },
  destination: { bg: '#E6F1FB', border: '#85B7EB', text: '#0C447C', label: 'Destination' },
  tour:        { bg: '#EAF3DE', border: '#97C459', text: '#27500A', label: 'Tour' },
  guide:       { bg: '#EEEDFE', border: '#AFA9EC', text: '#3C3489', label: 'Field Guide' },
  species:     { bg: '#FAEEDA', border: '#EF9F27', text: '#633806', label: 'Species' },
  about:       { bg: '#FAECE7', border: '#F0997B', text: '#712B13', label: 'About Us' },
  camp:        { bg: '#E1F5EE', border: '#5DCAA5', text: '#085041', label: 'Camp' },
  moments:     { bg: '#FBEAF0', border: '#ED93B1', text: '#72243E', label: 'Sawla Moments' },
  general:     { bg: '#F1EFE8', border: '#B4B2A9', text: '#444441', label: 'General' },
}

interface PlaceholderImageProps {
  filename: string
  width: number
  height: number
  category: Category
  className?: string
  fill?: boolean
  label?: string
}

export default function PlaceholderImage({
  filename, width, height, category, className = '', fill = false, label,
}: PlaceholderImageProps) {
  const s = CAT_STYLES[category]
  const displayLabel = label ?? filename
  const placeUrl = `https://placehold.co/${width}x${height}/${s.bg.replace('#', '')}/${s.text.replace('#', '')}?text=${encodeURIComponent(filename)}`

  // Return placehold.co img for Next.js Image compatibility
  // During development, use placehold.co; replace src with real image path in production
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={placeUrl}
      alt={`Placeholder: ${displayLabel}`}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      className={`${fill ? 'absolute inset-0 w-full h-full object-cover' : 'w-full h-auto'} ${className}`}
      style={fill ? { position: 'absolute' } : undefined}
    />
  )
}

/*
HOW TO SWAP TO REAL IMAGE:

Before:
<PlaceholderImage filename="dest-lalibela-hero.jpg" width={1920} height={1080} category="destination" />

After:
import Image from 'next/image'
<Image
  src="/images/destinations/lalibela/dest-lalibela-hero.jpg"
  alt="Rock-hewn churches of Lalibela, Ethiopia"
  width={1920}
  height={1080}
  priority
  className="object-cover w-full h-full"
/>
*/
