import Reveal from '@/components/ui/Reveal';

export default function Testimonial() {
  return (
    <section className="py-40 max-md:py-20 bg-slate-950 border-t border-line relative">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-1/2 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(236,72,153,0.4), transparent 70%)',
          opacity: 0.2,
          filter: 'blur(80px)'
        }}
      />
      <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px] relative">
        <Reveal>
          <div className="corner-frame max-w-[1100px] mx-auto p-20 max-sm:px-7 max-sm:py-12 bg-slate-900 border border-line relative">
            <div
              className="font-display text-[160px] leading-[0.7] text-sports-cyan absolute top-5 left-10 opacity-40 select-none"
              aria-hidden="true"
            >
              &ldquo;
            </div>
            <blockquote className="font-display text-[clamp(28px,3.6vw,52px)] leading-[1.1] tracking-cinematic uppercase text-white mb-12 max-w-[900px] relative z-[1]">
              They did not just host standard feeds. They integrated live
              predictive models that kept fans glued to our broadcast, even
              during weather delays.
            </blockquote>
            <div className="flex items-center gap-6">
              <span className="w-[60px] h-px bg-sports-pink" />
              <div>
                <div className="font-mono text-[11px] tracking-extra-wide uppercase text-sports-pink mb-1.5">
                  TOURNAMENT DIRECTOR
                </div>
                <div className="font-display text-xl text-slate-200 tracking-[0.02em] uppercase">
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
