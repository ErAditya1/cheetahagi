import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';
import ContactCTA from '@/components/sections/ContactCTA';
import Reveal from '@/components/ui/Reveal';
import { blogPosts } from '@/lib/content';

export const metadata = {
  title: 'Media & Insights',
  description:
    'Essays and articles on sports business, athlete career planning, endorsement economics, and reputation management. Written by the Born Goat team.',
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
          { label: 'Born Goat', href: '/' },
          { label: 'Media & Insights' }
        ]}
        eyebrow="MEDIA & INSIGHTS"
        title="SPORTS BUSINESS, ANALYZED."
        italicWord="SPORTS BUSINESS"
        lede="Essays and reports on image rights negotiations, sponsorship markets, career planning, and public relations—kept here as a record of our philosophy."
      />

      {/* FEATURED */}
      <section className="py-[80px] max-md:py-12 bg-void animate-fade-in">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          <Reveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="block bg-dark border border-[var(--border-subtle)] hover:border-[var(--border-gold)] transition-all duration-[400ms] hover:shadow-gold-glow relative overflow-hidden group text-decoration-none"
            >
              <span className="absolute top-0 left-0 right-0 h-0.5 bg-grad-gold scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
              <div className="p-14 max-sm:p-7">
                <div className="flex gap-4 mb-8 flex-wrap items-center">
                  <span className="font-mono text-[11px] tracking-extra-wide uppercase text-[var(--gold-primary)] border border-[var(--border-gold)] px-3 py-1 font-bold">
                    FEATURED REPORT
                  </span>
                  <span className="font-mono text-[11px] tracking-extra-wide uppercase text-muted">
                    {featured.category} · {featured.date} · {featured.readTime} READ
                  </span>
                </div>
                <h2 className="font-heading text-[clamp(36px,5.5vw,66px)] leading-[0.95] tracking-cinematic uppercase mb-7 text-primary max-w-[1100px]">
                  {featured.title}
                </h2>
                <p className="text-[18px] text-secondary leading-[1.7] max-w-[820px] mb-9 italic">
                  {featured.excerpt}
                </p>
                <span className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-extra-wide uppercase text-[var(--gold-primary)] font-bold">
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
      <section className="pt-12 max-md:pt-6 pb-6 bg-void">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          <Reveal>
            <div className="flex items-center gap-3 flex-wrap pb-6 border-b border-[var(--border-subtle)]">
              <span className="text-label text-xs">BY CATEGORY</span>
              <div className="flex gap-2 flex-wrap ml-6 max-sm:ml-0">
                {categories.map(c => (
                  <span
                    key={c}
                    className="font-mono text-[10px] tracking-wide-cap uppercase text-secondary border border-[var(--border-subtle)] px-3 py-1.5 hover:text-[var(--gold-primary)] hover:border-[var(--border-gold)] transition-colors cursor-default"
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
      <section className="py-[100px] max-md:py-16 bg-void">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 60}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="block p-10 max-sm:p-7 border border-[var(--border-subtle)] bg-dark hover:border-[var(--border-gold)] transition-all duration-[400ms] hover:-translate-y-1 hover:shadow-gold-glow h-full flex flex-col group text-decoration-none"
                >
                  <div className="mb-6">
                    <span className="font-mono text-[10px] tracking-extra-wide uppercase text-[var(--gold-primary)] font-bold">
                      {p.category} · {p.date} · {p.readTime}
                    </span>
                  </div>
                  <h3 className="font-heading text-[clamp(20px,2.4vw,28px)] tracking-cinematic uppercase text-primary leading-[1.15] mb-5">
                    {p.title}
                  </h3>
                  <p className="text-[15px] text-secondary leading-[1.7] mb-7 flex-grow">
                    {p.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-extra-wide uppercase text-[var(--gold-primary)] font-bold self-start">
                    READ REPORT
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
        eyebrow="STAY UPDATED"
        heading="THE DISPATCH NOTES,"
        goldHeading="INSIDER NEWS."
        sub="Our monthly briefing on contract updates, endorsement markets, and athlete signings."
        primaryLabel="Subscribe"
        secondaryLabel="Read FAQs"
        secondaryHref="/faq"
      />
    </>
  );
}
