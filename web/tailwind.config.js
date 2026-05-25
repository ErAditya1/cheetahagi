/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Predator Intelligence palette — committed, not generic
        ink: {
          950: '#08080C',  // primary canvas
          900: '#0E0E14',  // raised surface
          800: '#161620',  // card surface
          700: '#1F1F2C',  // border-strong
          600: '#2A2A38',  // border
          500: '#3F3F52',  // muted text
          400: '#6B6B82',  // subtle text
        },
        bone: {
          DEFAULT: '#F5F2EA', // primary text on dark
          dim: '#C9C5B8',
        },
        // Single dominant accent — cheetah-eye electric lime
        strike: {
          DEFAULT: '#C5FF3D',
          glow: '#D9FF7A',
          deep: '#8FCC1E',
        },
        // Cool support — used sparingly
        cyber: {
          DEFAULT: '#5B8DEF',
          deep: '#3A66C7',
        },
        // Warning / urgency
        flare: '#FF6B3D',
      },
      fontFamily: {
        display: ['var(--font-bricolage)', 'ui-sans-serif', 'system-ui'],
        sans: ['var(--font-bricolage)', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
        serif: ['var(--font-fraunces)', 'ui-serif', 'Georgia'],
      },
      fontSize: {
        // Editorial scale — generous, with optical caps
        'display-2xl': ['clamp(3.5rem, 8vw, 7rem)', { lineHeight: '0.92', letterSpacing: '-0.04em' }],
        'display-xl': ['clamp(2.75rem, 6vw, 5rem)', { lineHeight: '0.95', letterSpacing: '-0.035em' }],
        'display-lg': ['clamp(2rem, 4.5vw, 3.5rem)', { lineHeight: '1.0', letterSpacing: '-0.03em' }],
      },
      animation: {
        'shimmer': 'shimmer 2.5s linear infinite',
        'pulse-strike': 'pulseStrike 2.4s ease-in-out infinite',
        'sprint': 'sprint 1.6s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'rise': 'rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'marquee': 'marquee 40s linear infinite',
        'scan': 'scan 4s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseStrike: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        },
        sprint: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scan: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(100%)' },
        },
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.06 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        'grid-faint': 'linear-gradient(rgba(245,242,234,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(245,242,234,0.04) 1px, transparent 1px)',
      },
      boxShadow: {
        'strike': '0 0 0 1px rgba(197,255,61,0.2), 0 8px 40px -12px rgba(197,255,61,0.4)',
        'card': '0 1px 0 0 rgba(245,242,234,0.04) inset, 0 24px 48px -24px rgba(0,0,0,0.6)',
      },
    },
  },
  plugins: [],
};
