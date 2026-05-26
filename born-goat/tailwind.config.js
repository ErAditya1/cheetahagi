/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Titanium Dynasty — Obsidian canvas
        obsidian: {
          DEFAULT: '#0A0A0A',
          900: '#0A0A0A',
          800: '#111111',
          700: '#171717',
          600: '#1D1D1D',
          500: '#252525'
        },
        carbon: '#0d0d0d',
        // Titanium silver family
        titanium: {
          DEFAULT: '#C7CCD4',
          bright: '#E5E8EC',
          DEFAULT_bg: '#C7CCD4',
          dim: '#8A8F97',
          deep: '#5A5E64',
          steel: '#3A3D42'
        },
        // Championship gold (used sparingly)
        gold: {
          DEFAULT: '#D4A84F',
          bright: '#F5D27A',
          deep: '#9D7B35'
        },
        // Electric velocity (motion accent)
        electric: {
          DEFAULT: '#3B82F6',
          bright: '#60A5FA'
        },
        // Hyper crimson (urgency only)
        crimson: {
          DEFAULT: '#FF3B30',
          deep: '#C8261D'
        },
        line: '#222428',
        'line-bright': '#2E3138'
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        headline: ['var(--font-anton)', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace']
      },
      backgroundImage: {
        'grad-gold': 'linear-gradient(135deg, #D4A84F 0%, #F5D27A 100%)',
        'grad-gold-deep': 'linear-gradient(135deg, #9D7B35 0%, #D4A84F 60%, #F5D27A 100%)',
        'grad-titanium': 'linear-gradient(135deg, #C7CCD4 0%, #E5E8EC 50%, #8A8F97 100%)',
        'grad-electric': 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
        'carbon-fiber': "repeating-linear-gradient(45deg, rgba(255,255,255,0.005) 0px, rgba(255,255,255,0.005) 1px, transparent 1px, transparent 2px), repeating-linear-gradient(-45deg, rgba(255,255,255,0.005) 0px, rgba(255,255,255,0.005) 1px, transparent 1px, transparent 2px)"
      },
      boxShadow: {
        'gold-glow': '0 0 30px rgba(212, 168, 79, 0.4)',
        'gold-glow-lg': '0 0 50px rgba(212, 168, 79, 0.5)',
        'electric-glow': '0 0 20px rgba(59, 130, 246, 0.4)',
        'card-luxe': '0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(212, 168, 79, 0.3)'
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'slow-rotate': 'slowRotate 180s linear infinite',
        'rise': 'rise 1.2s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) both',
        'streak-slide': 'streakSlide 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite'
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 18px rgba(212, 168, 79, 0.4)', opacity: 1 },
          '50%': { boxShadow: '0 0 30px rgba(212, 168, 79, 0.5)', opacity: 0.85 }
        },
        slowRotate: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' }
        },
        rise: {
          from: { transform: 'translateY(105%)', opacity: 0 },
          to: { transform: 'translateY(0)', opacity: 1 }
        },
        fadeIn: {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to: { opacity: 1, transform: 'translateY(0)' }
        },
        streakSlide: {
          '0%, 100%': { opacity: 0.4, transform: 'translateX(0)' },
          '50%': { opacity: 0.9, transform: 'translateX(20px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' }
        }
      },
      letterSpacing: {
        'cinematic': '0.005em',
        'wide-cap': '0.18em',
        'extra-wide': '0.25em'
      }
    }
  },
  plugins: []
};
