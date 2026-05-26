import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <header className="min-h-screen pt-40 pb-20 relative overflow-hidden flex items-center bg-obsidian">
      {/* gold radial top glow */}
      <div
        className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[90vw] h-[60vw] max-w-[1200px] max-h-[800px] pointer-events-none z-[1]"
        style={{
          background:
            'radial-gradient(ellipse, rgba(212,168,79,0.4) 0%, transparent 60%)',
          filter: 'blur(60px)',
          opacity: 0.5,
          animation: 'glowPulse 8s ease-in-out infinite'
        }}
      />

      {/* stadium beam */}
      <div className="spotlight-beam" />

      {/* electric streaks */}
      <div
        className="electric-streak animate-streak-slide"
        style={{ top: '25%', left: '-10%', width: '40%', transform: 'rotate(8deg)' }}
      />
      <div
        className="electric-streak animate-streak-slide"
        style={{ top: '65%', right: '-10%', width: '50%', transform: 'rotate(-6deg)', animationDelay: '1s' }}
      />
      <div
        className="electric-streak animate-streak-slide"
        style={{ top: '80%', left: '30%', width: '30%', transform: 'rotate(3deg)', animationDelay: '2s' }}
      />

      {/* concentric ornament */}
      <svg
        className="absolute top-1/2 -right-1/4 -translate-y-1/2 w-[90vw] h-[90vw] max-w-[1100px] max-h-[1100px] animate-slow-rotate z-[1]"
        viewBox="0 0 800 800"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="heroGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4A84F" />
            <stop offset="100%" stopColor="#F5D27A" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#heroGoldGrad)" strokeWidth="0.4" opacity="0.25">
          <circle cx="400" cy="400" r="380" />
          <circle cx="400" cy="400" r="320" />
          <circle cx="400" cy="400" r="260" />
          <circle cx="400" cy="400" r="200" />
          <circle cx="400" cy="400" r="140" />
        </g>
        <g stroke="url(#heroGoldGrad)" strokeWidth="0.4" opacity="0.3">
          <line x1="400" y1="20" x2="400" y2="780" />
          <line x1="20" y1="400" x2="780" y2="400" />
        </g>
      </svg>

      <style>{`
        @keyframes glowPulse {
          0%, 100% { opacity: 0.5; transform: translate(-50%, 0) scale(1); }
          50% { opacity: 0.7; transform: translate(-50%, 0) scale(1.08); }
        }
      `}</style>

      <div className="relative z-[5] w-full max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
        <div className="flex gap-8 items-center flex-wrap mb-[60px]">
          <span className="eyebrow">EST. 2026 · LUCKNOW · INDIA</span>
          <span className="inline-flex items-center gap-2.5 text-[11px] text-titanium uppercase font-mono" style={{ letterSpacing: '0.18em' }}>
            <span className="w-[7px] h-[7px] bg-gold rounded-full shadow-[0_0_14px_#D4A84F] animate-pulse-glow" />
            3 CLIENTS / QUARTER · ACCEPTING
          </span>
        </div>

        <h1 className="font-display font-normal text-[clamp(64px,11vw,200px)] leading-[0.86] tracking-cinematic uppercase mb-20">
          <span className="block overflow-hidden">
            <span className="inline-block animate-rise">MARKETING FOR THE</span>
          </span>
          <span className="block overflow-hidden">
            <span
              className="inline-block animate-rise grad-gold-text"
              style={{
                animationDelay: '0.15s',
                textShadow: '0 0 60px rgba(212,168,79,0.4)'
              }}
            >
              GREATEST
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="inline-block animate-rise" style={{ animationDelay: '0.3s' }}>
              OF ALL TIME<span className="text-gold">.</span>
            </span>
          </span>
        </h1>

        <div className="grid grid-cols-[1.3fr_1fr] max-md:grid-cols-1 gap-[60px] max-md:gap-9 items-end mb-[100px] animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <p className="text-[clamp(17px,1.6vw,22px)] text-titanium max-w-[580px] leading-[1.55]">
            We don't run campaigns. <span className="text-gold font-medium">We build legends.</span> Quietly, precisely, with the patience of capital and the urgency of culture.
          </p>
          <div className="flex gap-3.5 flex-wrap justify-end max-md:justify-start">
            <Button href="/contact" variant="primary">
              Begin a Conversation <span>→</span>
            </Button>
            <Button href="/case-studies" variant="ghost">
              View Our Work
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-4 max-sm:grid-cols-2 max-sm:gap-6 border-t border-line pt-9 animate-fade-in" style={{ animationDelay: '1s' }}>
          {[
            { v: '120M+', l: 'EARNED REACH' },
            { v: '₹25Cr+', l: 'CAPITAL DEPLOYED' },
            { v: '47', l: 'BRAND PARTNERS' },
            { v: '3', l: 'CONTINENTS' }
          ].map((t, i) => (
            <div
              key={i}
              className={`px-7 max-sm:px-0 relative ${
                i === 0 ? 'pl-0 border-l-0' : 'border-l border-line max-sm:border-l-0'
              }`}
            >
              <span
                className="absolute -top-px left-0 w-6 h-px bg-gold"
                style={i === 0 ? {} : { left: '-1px' }}
              />
              <div className="font-display text-5xl leading-none tracking-cinematic">
                {t.v}
              </div>
              <div className="font-mono text-[10px] tracking-extra-wide uppercase text-titanium-dim mt-2.5">
                {t.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
