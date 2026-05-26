import { trustLogos } from '@/lib/content';

export default function TrustBar() {
  return (
    <section className="py-10 border-y border-line bg-slate-900 relative">
      <span
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, #3B82F6, #06B6D4, transparent)',
          opacity: 0.3
        }}
      />
      <span
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, #3B82F6, #06B6D4, transparent)',
          opacity: 0.3
        }}
      />
      <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
        <div className="flex items-center gap-[60px] flex-wrap justify-between">
          <span className="eyebrow">BROADCAST & DATA PARTNERS</span>
          <div className="flex gap-12 flex-wrap items-center">
            {trustLogos.map((logo, i) => (
              <span
                key={i}
                className="font-display text-[22px] text-slate-500 tracking-[0.08em] uppercase transition-colors hover:text-sports-cyan cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
