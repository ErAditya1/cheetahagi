import Link from 'next/link';
import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import { blogPosts } from '@/lib/content';

export default function JournalPreview() {
  const top3 = blogPosts.slice(0, 3);
  return (
    <section className="py-[140px] max-md:py-20 bg-slate-900 border-t border-line">
      <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
        <Reveal className="mb-20 max-w-[920px]">
          <Eyebrow className="mb-7">LATEST INSIGHTS · VI</Eyebrow>
          <h2 className="font-display text-[clamp(48px,8vw,120px)] leading-[0.92] tracking-cinematic uppercase mt-7">
            THE TECHNOLOGY,
            <br />
            <span className="text-sports-cyan">DOCUMENTED.</span>
          </h2>
          <p className="text-slate-300 text-[17px] leading-[1.7] max-w-[620px] mt-7">
            Long-form articles on sports statistics, AI Win-prediction systems, API telemetry, database caching, and scaling. Written by our SRE and analyst teams.
          </p>
        </Reveal>

        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-8 max-md:gap-6">
          {top3.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <Link
                href={`/blog/${p.slug}`}
                className="block p-10 max-sm:p-7 border border-line bg-slate-950 cursor-pointer transition-all duration-[400ms] hover:border-sports-cyan hover:-translate-y-1 hover:shadow-cyan-glow flex flex-col relative h-full group"
              >
                <div className="mb-6">
                  <span className="font-mono text-[10px] text-sports-pink tracking-extra-wide uppercase">
                    {p.featured ? 'FEATURED · ' : ''}
                    {p.category.toUpperCase()} · {p.readTime}
                  </span>
                </div>
                <h3
                  className="font-display text-[22px] leading-[1.05] tracking-cinematic uppercase mb-[18px] text-white"
                  dangerouslySetInnerHTML={{
                    __html: p.title.toUpperCase()
                  }}
                />
                <p className="text-sm text-slate-400 leading-[1.65] mb-6 flex-grow">
                  {p.excerpt}
                </p>
                <span className="self-start font-mono text-[10px] tracking-extra-wide uppercase text-sports-pink py-1.5 px-3.5 border border-sports-pink/30">
                  {p.category.toUpperCase()}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 flex justify-center">
          <Button href="/blog" variant="ghost">
            Read the Journal <span>→</span>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
