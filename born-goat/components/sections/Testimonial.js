import Reveal from '@/components/ui/Reveal';

export default function Testimonial() {
  return (
    <section className="py-40 max-md:py-20 bg-obsidian border-t border-line relative">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-1/2 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(212,168,79,0.4), transparent 70%)',
          opacity: 0.2,
          filter: 'blur(80px)'
        }}
      />
      <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px] relative">
        <Reveal>
          <div className="corner-frame max-w-[1100px] mx-auto p-20 max-sm:px-7 max-sm:py-12 bg-obsidian-800 border border-line relative">
            <div
              className="font-display text-[160px] leading-[0.7] text-gold absolute top-5 left-10 opacity-40 select-none"
              aria-hidden="true"
            >
              &ldquo;
            </div>
            <blockquote className="font-display text-[clamp(28px,3.6vw,52px)] leading-[1.1] tracking-cinematic uppercase text-white mb-12 max-w-[900px] relative z-[1]">
              They did not market my brand. They built the version of me the
              world had been waiting to see — and made the world look up at
              exactly the right moment.
            </blockquote>
            <div className="flex items-center gap-6">
              <span className="w-[60px] h-px bg-gold" />
              <div>
                <div className="font-mono text-[11px] tracking-extra-wide uppercase text-gold mb-1.5">
                  FOUNDER
                </div>
                <div className="font-display text-xl text-titanium-bright tracking-[0.02em] uppercase">
                  Indian Golf Premier League
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
