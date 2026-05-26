import Link from 'next/link';
import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import { caseStudies } from '@/lib/content';

export default function FeaturedWork() {
  return (
    <section className="py-[140px] max-md:py-20 bg-slate-950 border-t border-line">
      <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
        <Reveal className="mb-20 max-w-[920px]">
          <Eyebrow className="mb-7">FEATURED LEAGUES · V</Eyebrow>
          <h2 className="font-display text-[clamp(48px,8vw,120px)] leading-[0.92] tracking-cinematic uppercase mt-7">
            COVERAGE & <span className="text-sports-cyan">DASHBOARDS</span>
            <br />
            OF ELITE LEAGUES.
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 100}>
              <Link
                href={`/case-studies/${cs.slug}`}
                className="block bg-slate-900 border border-line transition-all duration-[400ms] relative overflow-hidden hover:border-sports-cyan hover:-translate-y-1.5 hover:shadow-cyan-glow group"
              >
                <span className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sports-blue to-sports-cyan scale-x-0 origin-left transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-x-100" />
                <div className="p-12 max-sm:p-7">
                  <div className="mb-8">
                    <span className="font-mono text-[10px] text-sports-pink tracking-extra-wide">
                      CASE {cs.number} · {cs.domain.toUpperCase()} · {cs.year}
                    </span>
                  </div>
                  <h3 className="font-display text-[52px] max-sm:text-4xl leading-[0.95] tracking-cinematic uppercase mb-5 text-white">
                    {cs.client.split(' ').slice(0, 2).join(' ')}
                    <br />
                    {cs.client.split(' ').slice(2).join(' ')}
                  </h3>
                  <p className="text-[15px] text-slate-400 leading-[1.65] mb-9 max-w-[480px]">
                    {cs.summary}
                  </p>
                  <div className="grid grid-cols-3 gap-6 py-6 border-y border-line mb-8">
                    {cs.metrics.slice(0, 3).map((m, mi) => (
                      <div key={mi} className="flex flex-col gap-1">
                        <span className="font-display text-3xl text-sports-cyan leading-none tracking-cinematic">
                          {m.value}
                        </span>
                        <span className="font-mono text-[10px] tracking-extra-wide uppercase text-slate-500">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-extra-wide uppercase text-sports-pink">
                    VIEW LIVE STATS{' '}
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 flex justify-center">
          <Button href="/case-studies" variant="ghost">
            All Case Studies <span>→</span>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
