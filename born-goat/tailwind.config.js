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
        // Titanium Dynasty — Obsidian canvas (retained for backward compatibility, mapped to deep slate)
        obsidian: {
          DEFAULT: '#020617',
          900: '#020617',
          800: '#0F172A',
          700: '#1E293B',
          600: '#334155',
          500: '#475569'
        },
        carbon: '#020617',
        // Titanium silver family (updated to slate/titanium mix)
        titanium: {
          DEFAULT: '#94A3B8',
          bright: '#F1F5F9',
          DEFAULT_bg: '#1E293B',
          dim: '#64748B',
          deep: '#475569',
          steel: '#334155'
        },
        // Championship gold (mapped to sports-pink / cyan for compatibility transition)
        gold: {
          DEFAULT: '#06B6D4',
          bright: '#22D3EE',
          deep: '#0891B2'
        },
        // Electric velocity (motion accent)
        electric: {
          DEFAULT: '#3B82F6',
          bright: '#60A5FA'
        },
        // Hyper crimson (urgency only)
        crimson: {
          DEFAULT: '#EC4899',
          deep: '#DB2777'
        },
        line: '#1E293B',
        'line-bright': '#334155',
        // Live Sports Hub theme colors
        'sports-blue': {
          DEFAULT: '#3B82F6',
          bright: '#60A5FA'
        },
        'sports-pink': {
          DEFAULT: '#EC4899',
          bright: '#F472B6'
        },
        'sports-cyan': {
          DEFAULT: '#06B6D4',
          bright: '#22D3EE'
        }
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        headline: ['var(--font-anton)', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace']
      },
      backgroundImage: {
        'grad-gold': 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)', // mapped to blue-cyan for quick compatibility
        'grad-gold-deep': 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 50%, #EC4899 100%)', // mapped to blue-cyan-pink
        'grad-titanium': 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
        'grad-electric': 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)',
        'grad-sports-primary': 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)',
        'grad-sports-secondary': 'linear-gradient(135deg, #EC4899 0%, #F472B6 100%)',
        'grad-blue-pink': 'linear-gradient(135deg, #3B82F6 0%, #EC4899 100%)',
        'carbon-fiber': "repeating-linear-gradient(45deg, rgba(255,255,255,0.005) 0px, rgba(255,255,255,0.005) 1px, transparent 1px, transparent 2px)"
      },
      boxShadow: {
        'gold-glow': '0 0 30px rgba(6, 182, 212, 0.4)',
        'gold-glow-lg': '0 0 50px rgba(6, 182, 212, 0.5)',
        'electric-glow': '0 0 20px rgba(59, 130, 246, 0.4)',
        'blue-glow': '0 0 30px rgba(59, 130, 246, 0.4)',
        'pink-glow': '0 0 30px rgba(236, 72, 153, 0.4)',
        'cyan-glow': '0 0 30px rgba(6, 182, 212, 0.4)',
        'cyan-glow-lg': '0 0 50px rgba(6, 182, 212, 0.6)',
        'card-luxe': '0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(6, 182, 212, 0.25)',
        'card-sports': '0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(6, 182, 212, 0.25)'
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
          '0%, 100%': { boxShadow: '0 0 18px rgba(6, 182, 212, 0.4)', opacity: 1 },
          '50%': { boxShadow: '0 0 30px rgba(6, 182, 212, 0.5)', opacity: 0.85 }
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
