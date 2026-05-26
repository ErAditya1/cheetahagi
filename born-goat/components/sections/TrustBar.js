import { trustLogos } from '@/lib/content';

export default function TrustBar() {
  return (
    <section className="py-10 border-y border-line bg-obsidian-800 relative">
      <span
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, #D4A84F, transparent)',
          opacity: 0.3
        }}
      />
      <span
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, #D4A84F, transparent)',
          opacity: 0.3
        }}
      />
      <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
        <div className="flex items-center gap-[60px] flex-wrap justify-between">
          <span className="eyebrow">IN TRUST WITH</span>
          <div className="flex gap-12 flex-wrap items-center">
            {trustLogos.map((logo, i) => (
              <span
                key={i}
                className="font-display text-[22px] text-titanium-dim tracking-[0.08em] uppercase transition-colors hover:text-gold cursor-default"
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
