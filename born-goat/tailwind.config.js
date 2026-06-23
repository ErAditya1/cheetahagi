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
        void: 'var(--bg-void)',
        dark: 'var(--bg-dark)',
        surface: 'var(--bg-surface)',
        card: 'var(--bg-card)',
        'card-hover': 'var(--bg-card-hover)',
        
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        muted: 'var(--text-muted)',
        ghost: 'var(--text-ghost)',

        gold: {
          primary: 'var(--gold-primary)',
          bright: 'var(--gold-bright)',
          deep: 'var(--gold-deep)',
          subtle: 'var(--gold-subtle)'
        },
        silver: {
          DEFAULT: 'var(--silver)',
          muted: 'var(--silver-muted)'
        },
        blue: {
          electric: 'var(--blue-electric)',
          deep: 'var(--blue-deep)'
        },

        /* Backward Compatibility Mappings */
        obsidian: {
          DEFAULT: 'var(--bg-void)',
          900: 'var(--bg-void)',
          800: 'var(--bg-dark)',
          700: 'var(--bg-surface)',
          600: 'var(--bg-card)'
        },
        carbon: 'var(--bg-void)',
        titanium: {
          DEFAULT: 'var(--silver)',
          bright: 'var(--text-primary)',
          DEFAULT_bg: 'var(--bg-surface)',
          dim: 'var(--silver-muted)',
          deep: 'var(--text-muted)'
        },
        line: 'var(--border-subtle)',
        'line-bright': 'var(--border-default)',
        
        'sports-blue': {
          DEFAULT: 'var(--silver)',
          bright: 'var(--text-primary)'
        },
        'sports-pink': {
          DEFAULT: 'var(--gold-primary)',
          bright: 'var(--gold-bright)'
        },
        'sports-cyan': {
          DEFAULT: 'var(--gold-primary)',
          bright: 'var(--gold-bright)'
        }
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        data: ['var(--font-data)', 'monospace'],
        mono: ['var(--font-data)', 'monospace']
      },
      backgroundImage: {
        'grad-gold': 'linear-gradient(135deg, var(--gold-primary) 0%, var(--gold-bright) 50%, var(--gold-primary) 100%)',
        'grad-gold-deep': 'linear-gradient(135deg, var(--gold-deep) 0%, var(--gold-primary) 50%, var(--gold-deep) 100%)',
        'grad-titanium': 'linear-gradient(135deg, var(--bg-surface) 0%, var(--bg-void) 100%)'
      },
      boxShadow: {
        'gold-glow': '0 0 30px var(--gold-glow)',
        'gold-glow-lg': '0 0 50px var(--gold-glow)',
        'card-luxe': '0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px var(--border-gold)'
      },
      animation: {
        'marquee-scroll': 'marquee-scroll 30s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'slow-rotate': 'slowRotate 180s linear infinite',
        'rise': 'rise 1.2s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) both'
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 18px var(--gold-glow)', opacity: 1 },
          '50%': { boxShadow: '0 0 30px var(--gold-glow)', opacity: 0.85 }
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
        }
      },
      letterSpacing: {
        'cinematic': '0.05em',
        'wide-cap': '0.08em',
        'extra-wide': '0.2em'
      }
    }
  },
  plugins: []
};
