import Link from 'next/link';
import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import { services } from '@/lib/content';

export default function PracticeGrid() {
  return (
    <section
      id="services"
      className="py-[140px] max-md:py-20 bg-obsidian border-t border-line relative overflow-hidden"
    >
      <div
        className="absolute top-[10%] -right-[10%] w-1/2 h-3/5 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(212,168,79,0.4), transparent 70%)',
          opacity: 0.15
        }}
      />
      <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px] relative">
        <Reveal className="mb-20 max-w-[920px]">
          <Eyebrow className="mb-7">THE PRACTICE · II</Eyebrow>
          <h2 className="font-display text-[clamp(48px,8vw,120px)] leading-[0.92] tracking-cinematic uppercase mt-7">
            SIX DISCIPLINES.
            <br />
            <span className="text-gold">ONE HOUSE.</span>
          </h2>
          <p className="text-titanium text-[17px] leading-[1.7] max-w-[620px] mt-7">
            A coordinated operation where narrative, press, brand, sponsorship,
            crisis, and amplification answer to a single strategy. Not a vendor
            list — a single signature.
          </p>
        </Reveal>

        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-px bg-line border border-line relative z-[5]">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <Link
                href={`/services/${s.slug}`}
                className="bg-obsidian-800 hover:bg-obsidian-700 p-12 max-sm:p-9 min-h-[340px] flex flex-col transition-colors duration-[400ms] cursor-pointer relative overflow-hidden group block"
              >
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-grad-gold transition-[width] duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:w-full" />
                <div className="font-display text-5xl text-titanium-deep tracking-cinematic mb-[60px] leading-none transition-colors duration-[400ms] group-hover:text-gold">
                  {s.number}
                </div>
                <h3 className="font-display text-[34px] leading-[0.95] tracking-cinematic uppercase mb-[18px] text-titanium-bright transition-colors duration-[400ms] group-hover:text-white">
                  {s.title}
                </h3>
                <p className="text-sm text-titanium leading-[1.65] flex-grow">
                  {s.tagline}
                </p>
                <span className="absolute top-12 right-9 text-gold text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 flex justify-center">
          <Button href="/services" variant="ghost">
            View Full Practice <span>→</span>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
