/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: { center: true, padding: { DEFAULT: '1.25rem', lg: '2rem' }, screens: { '2xl': '1280px' } },
    extend: {
      colors: {
        // Brand green — anchored on the theme colour #10803C
        brand: {
          50: '#EEF8F1', 100: '#D6EFDD', 200: '#ADDDBB', 300: '#7CC594', 400: '#45A56B',
          500: '#1F8A4C', 600: '#10803C', 700: '#0D6531', 800: '#0B4F28', 900: '#083B1F', 950: '#042412',
        },
        ink: { DEFAULT: '#0A2A1A', soft: '#2E4A3B', muted: '#5C7266' },
        // Amaltas gold — anchored on the live site's #FAEA46
        gold: { 50: '#FFFCE8', 100: '#FEF7C3', 200: '#FDF08A', 300: '#FAEA46', 400: '#F3D51A', 500: '#DDB80B', 600: '#B38C07' },
        cream: '#FBFAF4',
      },
      fontFamily: {
        display: ['"Fraunces Variable"', 'Fraunces', 'Georgia', 'serif'],
        sans: ['"Manrope Variable"', 'Manrope', 'system-ui', 'sans-serif'],
        deva: ['"Tiro Devanagari Hindi"', 'serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(10,42,26,.04), 0 8px 24px -12px rgba(10,42,26,.18)',
        lift: '0 2px 4px rgba(10,42,26,.05), 0 24px 48px -20px rgba(10,42,26,.35)',
      },
      backgroundImage: {
        grain: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.05'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        pulseLine: { from: { strokeDashoffset: '1200' }, to: { strokeDashoffset: '0' } },
      },
      animation: {
        marquee: 'marquee 60s linear infinite',
        pulseLine: 'pulseLine 3.5s ease-in-out infinite',
      },
    },
  },
  plugins: [typography],
};
