export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/251970578306?text=Hello%20Sawla%20Tours%2C%20I%20would%20like%20to%20start%20planning%20a%20private%20Ethiopia%20journey."
      className="fixed bottom-5 right-5 z-[180] hidden items-center gap-3 rounded-full border border-gold/50 bg-volcanic/90 px-5 py-3 font-body text-[0.68rem] uppercase tracking-[0.14em] text-ivory shadow-[0_18px_60px_rgba(0,0,0,.28)] backdrop-blur-md transition-all duration-350 hover:-translate-y-1 hover:bg-gold hover:text-volcanic md:flex"
      aria-label="Plan your Ethiopia journey on WhatsApp"
    >
      <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
      WhatsApp
    </a>
  )
}
