export default function Arrow({ className = '' }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className={className}>
      <path d="M3.75 9h10.5M10.25 5l4 4-4 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
