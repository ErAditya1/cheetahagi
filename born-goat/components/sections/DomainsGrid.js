import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';
import { sportsDomains } from '@/lib/content';

const icons = {
  Cricket: (
    <>
      <circle cx="24" cy="24" r="20" />
      <path d="M14 18 L24 14 L34 18 L34 30 L24 34 L14 30 Z" />
    </>
  ),
  Golf: (
    <>
      <path d="M24 4 L24 36 M14 36 L34 36 L34 42 L14 42 Z" />
      <circle cx="24" cy="10" r="3" />
    </>
  ),
  Football: (
    <>
      <circle cx="24" cy="24" r="20" />
      <path d="M24 4 L24 44 M4 24 L44 24 M10 10 L38 38 M10 38 L38 10" />
    </>
  ),
  MMA: (
    <>
      <path d="M8 24 L24 8 L40 24 L24 40 Z" />
      <circle cx="24" cy="24" r="6" />
    </>
  ),
  Motorsport: (
    <>
      <circle cx="14" cy="32" r="8" />
      <circle cx="34" cy="32" r="8" />
      <path d="M14 32 L22 18 L34 18 L34 32" />
    </>
  ),
  Esports: (
    <>
      <rect x="6" y="14" width="36" height="22" rx="2" />
      <circle cx="16" cy="25" r="3" />
      <circle cx="32" cy="25" r="3" />
    </>
  ),
  Fitness: (
    <>
      <rect x="4" y="20" width="6" height="8" />
      <rect x="38" y="20" width="6" height="8" />
      <rect x="10" y="22" width="28" height="4" />
      <rect x="14" y="14" width="4" height="20" />
      <rect x="30" y="14" width="4" height="20" />
    </>
  ),
  'Olympic Sports': (
    <>
      <circle cx="24" cy="24" r="20" />
      <path d="M24 4 Q14 14 4 24 M24 4 Q34 14 44 24 M4 24 Q14 34 24 44 M44 24 Q34 34 24 44" />
    </>
  )
};

export default function DomainsGrid() {
  return (
    <section className="py-[140px] max-md:py-20 bg-obsidian-800 border-t border-line">
      <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
        <Reveal className="mb-20 max-w-[920px]">
          <Eyebrow className="mb-7">DOMAINS · IV</Eyebrow>
          <h2 className="font-display text-[clamp(48px,8vw,120px)] leading-[0.92] tracking-cinematic uppercase mt-7">
            WHERE WE <span className="text-gold">PLAY.</span>
          </h2>
          <p className="text-titanium text-[17px] leading-[1.7] max-w-[620px] mt-7">
            Eight verticals, deep specialism in each. Most of our long-term work
            sits in golf, cricket, and emerging Indian leagues.
          </p>
        </Reveal>

        <div className="grid grid-cols-4 max-md:grid-cols-2 gap-px bg-line border border-line">
          {sportsDomains.map((d, i) => (
            <Reveal key={d.name} delay={i * 40}>
              <div className="bg-obsidian-800 hover:bg-obsidian-700 p-12 max-sm:px-6 text-center transition-colors duration-[400ms] cursor-default relative overflow-hidden group">
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-grad-gold transition-[width] duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:w-full" />
                <div className="w-12 h-12 mx-auto mb-5 text-titanium transition-all duration-[400ms] group-hover:text-gold group-hover:scale-110">
                  <svg
                    viewBox="0 0 48 48"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    className="w-full h-full"
                  >
                    {icons[d.name]}
                  </svg>
                </div>
                <h4 className="font-display text-[22px] tracking-[0.04em] uppercase mb-2 text-white">
                  {d.name}
                </h4>
                <p className="text-[11px] text-titanium-dim font-mono tracking-wide leading-[1.5]">
                  {d.sub}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
