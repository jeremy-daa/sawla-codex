import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory:       '#F8F6F1',
        volcanic:    '#2A2724',
        gold:        '#C9941A',
        'gold-light':'#E8A82A',
        'gold-pale': '#FAEEDA',
        'gold-faint':'#F7F0E3',
        sand:        '#E8DDC7',
        warmgrey:    '#5C5A54',
        coffee:      '#6B4A2F',
        charcoal:    '#1C1C1A',
        'teff-gold': '#C9941A',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body:    ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-2xl': ['clamp(3.5rem,8vw,7rem)',     { lineHeight:'1.0',  letterSpacing:'-0.03em',  fontWeight:'300' }],
        'display-xl':  ['clamp(3rem,6vw,5.5rem)',     { lineHeight:'1.04', letterSpacing:'-0.022em', fontWeight:'300' }],
        'display-lg':  ['clamp(2.25rem,4vw,3.75rem)', { lineHeight:'1.08', letterSpacing:'-0.016em', fontWeight:'300' }],
        'display-md':  ['clamp(1.75rem,3vw,2.75rem)', { lineHeight:'1.12', letterSpacing:'-0.012em' }],
        'display-sm':  ['clamp(1.375rem,2vw,1.875rem)',{ lineHeight:'1.2' }],
        'body-lg':     ['1.125rem', { lineHeight:'1.8' }],
        'body-md':     ['1rem',     { lineHeight:'1.78' }],
        'body-sm':     ['0.875rem', { lineHeight:'1.65' }],
        'label':       ['0.6875rem',{ lineHeight:'1', letterSpacing:'0.14em', fontWeight:'500' }],
      },
      spacing: {
        section:      '8rem',
        'section-sm': '5rem',
        'section-xs': '3.5rem',
        container:    '1320px',
        18:           '4.5rem',
      },
      maxWidth: { container: '1320px', prose: '68ch', wide: '1440px' },
      borderRadius: { card: '16px', pill: '100px', xs: '4px' },
      transitionTimingFunction: {
        sawla:  'cubic-bezier(0.25,0.46,0.45,0.94)',
        luxury: 'cubic-bezier(0.16,1,0.3,1)',
        out:    'cubic-bezier(0.0,0.0,0.2,1)',
      },
      transitionDuration: { '350':'350ms','400':'400ms','500':'500ms','600':'600ms','700':'700ms','800':'800ms' },
      keyframes: {
        fadeUp:    { from:{ opacity:'0', transform:'translateY(28px)' }, to:{ opacity:'1', transform:'translateY(0)' } },
        fadeIn:    { from:{ opacity:'0' }, to:{ opacity:'1' } },
        lineUp:    { from:{ opacity:'0', transform:'translateY(105%)' }, to:{ opacity:'1', transform:'translateY(0)' } },
        scrollDrop:{ '0%':{ top:'-100%' }, '60%,100%':{ top:'110%' } },
        shimmer:   { '0%':{ backgroundPosition:'200% center' }, '100%':{ backgroundPosition:'-200% center' } },
      },
      animation: {
        'fade-up':    'fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in':    'fadeIn 1s cubic-bezier(0.16,1,0.3,1) forwards',
        'line-up':    'lineUp 1.1s cubic-bezier(0.16,1,0.3,1) forwards',
        'scroll-drop':'scrollDrop 2.2s cubic-bezier(0.16,1,0.3,1) infinite',
        'shimmer':    'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config
