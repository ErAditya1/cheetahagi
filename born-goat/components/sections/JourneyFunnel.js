import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';

const stages = [
  { num: '01', title: 'THE ASSET', body: 'Raw talent. No audience yet. We identify the trajectory and architect the on-camera person.' },
  { num: '02', title: 'RECOGNITION', body: 'The engineered moment. The first wave. The internet learns the name.' },
  { num: '03', title: 'FOLLOWING', body: 'Audience becomes community. Community becomes tribe. Tribe becomes commercial weight.' },
  { num: '04', title: 'CAPITAL', body: 'Sponsorship stack assembled with care — deals that compound rather than cannibalise.' },
  { num: '05', title: 'LEGACY', body: 'Not an athlete anymore. A brand. An IP. A permanent fixture in cultural memory.' }
];

export default function JourneyFunnel() {
  return (
    <section className="py-[140px] max-md:py-20 bg-obsidian-800 border-t border-line relative overflow-hidden">
      <div
        className="electric-streak"
        style={{ top: '50%', left: 0, right: 0, width: '100%', opacity: 0.4 }}
      />
      <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px] relative">
        <Reveal className="mb-20 max-w-[920px]">
          <Eyebrow className="mb-7">THE ARC · III</Eyebrow>
          <h2 className="font-display text-[clamp(48px,8vw,120px)] leading-[0.92] tracking-cinematic uppercase mt-7">
            FROM UNKNOWN
            <br />
            TO <span className="text-gold">IMMORTAL.</span>
          </h2>
          <p className="text-titanium text-[17px] leading-[1.7] max-w-[620px] mt-7">
            Every legend the modern era has produced moved through these five
            gates. Our work is to compress the timeline without losing the
            gravitas.
          </p>
        </Reveal>

        <div className="relative">
          <div
            className="absolute top-9 left-0 right-0 h-px z-[1] max-md:hidden"
            style={{
              background:
                'linear-gradient(90deg, transparent, #D4A84F 15%, #D4A84F 85%, transparent)',
              opacity: 0.5
            }}
          />
          <div className="grid grid-cols-5 max-md:grid-cols-1 gap-8 max-md:gap-6 relative z-[2]">
            {stages.map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="text-left group">
                  <div
                    className="font-display text-[56px] leading-none mb-8 tracking-cinematic bg-obsidian-800 inline-block pr-4 transition-colors duration-[400ms]"
                    style={{
                      color: 'transparent',
                      WebkitTextStroke: '1.5px #D4A84F'
                    }}
                  >
                    {s.num}
                  </div>
                  <h4 className="font-display text-[22px] tracking-[0.02em] uppercase mb-3 text-white">
                    {s.title}
                  </h4>
                  <p className="text-sm text-titanium leading-[1.65]">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
