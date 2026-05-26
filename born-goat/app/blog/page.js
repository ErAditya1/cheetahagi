import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import ContactCTA from '@/components/sections/ContactCTA';
import Reveal from '@/components/ui/Reveal';
import Eyebrow from '@/components/ui/Eyebrow';
import { blogPosts } from '@/lib/content';

export const metadata = {
  title: 'The Journal',
  description:
    'Long-form essays on sports business, athlete careers, and the architecture of cultural authority. Written by the team, never ghost-written.',
  alternates: { canonical: '/blog' }
};

export default function BlogIndexPage() {
  const featured = blogPosts.find(p => p.featured) || blogPosts[0];
  const rest = blogPosts.filter(p => p.slug !== featured.slug);
  const categories = [...new Set(blogPosts.map(p => p.category))];

  return (
    <>
      <PageHero
        crumbs={[
          { label: 'BORN GOAT', href: '/' },
          { label: 'The Journal' }
        ]}
        eyebrow="THE JOURNAL"
        title="LONG-FORM, ON RECORD."
        italicWord="ON RECORD"
        lede="Essays on sports business, athlete brand, sponsorship economics, and crisis work — written by the team, never ghost-written, kept here as a permanent record of how we think."
      />

      {/* FEATURED */}
      <section className="py-[80px] max-md:py-12 bg-obsidian">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          <Reveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="block bg-obsidian-800 border border-line hover:border-gold transition-all duration-[400ms] hover:shadow-card-luxe relative overflow-hidden group"
            >
              <span className="absolute top-0 left-0 right-0 h-0.5 bg-grad-gold scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
              <div className="p-14 max-sm:p-7">
                <div className="flex gap-4 mb-8 flex-wrap items-center">
                  <span className="font-mono text-[11px] tracking-extra-wide uppercase text-gold border border-gold px-3 py-1">
                    FEATURED
                  </span>
                  <span className="font-mono text-[11px] tracking-extra-wide uppercase text-titanium-dim">
                    {featured.category} · {featured.date} · {featured.readTime} READ
                  </span>
                </div>
                <h2 className="font-display text-[clamp(36px,5.5vw,76px)] leading-[0.95] tracking-cinematic uppercase mb-7 text-white max-w-[1100px]">
                  {featured.title}
                </h2>
                <p className="text-[18px] text-titanium leading-[1.7] max-w-[820px] mb-9 italic">
                  {featured.lead}
                </p>
                <span className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-extra-wide uppercase text-gold">
                  READ THE ESSAY
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                    →
                  </span>
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="pt-12 max-md:pt-6 pb-6 bg-obsidian">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          <Reveal>
            <div className="flex items-center gap-3 flex-wrap pb-6 border-b border-line">
              <Eyebrow>BY CATEGORY</Eyebrow>
              <div className="flex gap-2 flex-wrap ml-6 max-sm:ml-0">
                {categories.map(c => (
                  <span
                    key={c}
                    className="font-mono text-[10px] tracking-wide-cap uppercase text-titanium border border-line px-3 py-1.5 hover:text-gold hover:border-gold transition-colors cursor-default"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GRID */}
      <section className="py-[80px] max-md:py-12 bg-obsidian">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 60}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="block p-10 max-sm:p-7 border border-line bg-obsidian-800 hover:border-gold transition-all duration-[400ms] hover:-translate-y-1 hover:shadow-electric-glow h-full flex flex-col group"
                >
                  <div className="mb-6">
                    <span className="font-mono text-[10px] tracking-extra-wide uppercase text-gold">
                      {p.category} · {p.date} · {p.readTime}
                    </span>
                  </div>
                  <h3 className="font-display text-[28px] leading-[1] tracking-cinematic uppercase mb-5 text-white">
                    {p.title}
                  </h3>
                  <p className="text-[15px] text-titanium leading-[1.7] mb-7 flex-grow">
                    {p.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-extra-wide uppercase text-gold self-start">
                    READ
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        eyebrow="JOIN THE DISPATCH"
        heading="MONTHLY NOTES,"
        goldHeading="NOTHING TO BUY."
        sub="The Dispatch is our monthly note on sports business, brand work, and what we have been reading. Sent once. No tracking."
        primaryLabel="Subscribe"
        secondaryLabel="Read the FAQ"
      />
    </>
  );
}
