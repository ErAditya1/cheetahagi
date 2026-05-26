import Link from 'next/link';
import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import { blogPosts } from '@/lib/content';

export default function JournalPreview() {
  const top3 = blogPosts.slice(0, 3);
  return (
    <section className="py-[140px] max-md:py-20 bg-obsidian-800 border-t border-line">
      <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
        <Reveal className="mb-20 max-w-[920px]">
          <Eyebrow className="mb-7">FROM THE JOURNAL · VI</Eyebrow>
          <h2 className="font-display text-[clamp(48px,8vw,120px)] leading-[0.92] tracking-cinematic uppercase mt-7">
            THE THINKING,
            <br />
            <span className="text-gold">DOCUMENTED.</span>
          </h2>
          <p className="text-titanium text-[17px] leading-[1.7] max-w-[620px] mt-7">
            Long-form essays on sports business, athlete careers, and the
            architecture of cultural authority. Written by the team, never
            ghost-written.
          </p>
        </Reveal>

        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-8 max-md:gap-6">
          {top3.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <Link
                href={`/blog/${p.slug}`}
                className="block p-10 max-sm:p-7 border border-line bg-obsidian cursor-pointer transition-all duration-[400ms] hover:border-gold hover:-translate-y-1 hover:shadow-electric-glow flex flex-col relative h-full group"
              >
                <div className="mb-6">
                  <span className="font-mono text-[10px] text-gold tracking-extra-wide uppercase">
                    {p.featured ? 'FEATURED · ' : ''}
                    {p.category.toUpperCase()} · {p.readTime} READ
                  </span>
                </div>
                <h3
                  className="font-display text-[22px] leading-[1.05] tracking-cinematic uppercase mb-[18px] text-white"
                  dangerouslySetInnerHTML={{
                    __html: p.title.toUpperCase()
                  }}
                />
                <p className="text-sm text-titanium leading-[1.65] mb-6 flex-grow">
                  {p.excerpt}
                </p>
                <span className="self-start font-mono text-[10px] tracking-extra-wide uppercase text-gold py-1.5 px-3.5 border border-gold">
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
