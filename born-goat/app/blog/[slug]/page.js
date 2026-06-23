import Link from 'next/link';
import { notFound } from 'next/navigation';
import ContactCTA from '@/components/sections/ContactCTA';
import Reveal from '@/components/ui/Reveal';
import { blogPosts, getPost, getRelatedPosts } from '@/lib/content';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';

export function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const p = getPost(params.slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.excerpt,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: {
      title: p.title,
      description: p.excerpt,
      type: 'article',
      publishedTime: p.date
    }
  };
}

export default function BlogPostPage({ params }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, 2);

  return (
    <>
      <header className="pt-[200px] pb-[80px] max-md:pt-32 max-md:pb-12 relative overflow-hidden border-b border-[var(--border-subtle)]">
        <div
          className="absolute -top-[20%] -right-[15%] w-[70vw] h-[70vw] pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 55%)',
            opacity: 0.4,
            filter: 'blur(80px)'
          }}
        />
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px] relative z-[5]">
          <div className="font-mono text-[11px] tracking-extra-wide uppercase text-muted mb-8">
            <Link href="/" className="hover:text-[var(--gold-primary)] transition-colors text-decoration-none">
              BORN GOAT
            </Link>
            <span className="text-[var(--gold-primary)] mx-3">/</span>
            <Link href="/blog" className="hover:text-[var(--gold-primary)] transition-colors text-decoration-none">
              MEDIA & INSIGHTS
            </Link>
            <span className="text-[var(--gold-primary)] mx-3">/</span>
            <span>{post.category.toUpperCase()}</span>
          </div>

          <div className="max-w-[1000px]">
            <div className="flex gap-4 mb-7 flex-wrap items-center">
              <span className="font-mono text-[11px] tracking-extra-wide uppercase text-[var(--gold-primary)] border border-[var(--border-gold)] px-3 py-1 font-bold">
                {post.category}
              </span>
              <span className="font-mono text-[11px] tracking-extra-wide uppercase text-muted">
                {post.date} · {post.readTime} READ
              </span>
            </div>

            <h1 className="font-heading text-[clamp(40px,7vw,85px)] leading-[0.92] tracking-cinematic uppercase text-primary">
              {post.title}
            </h1>

            <p className="mt-10 text-[20px] text-[var(--gold-primary)] italic leading-[1.55] max-w-[820px] font-medium">
              {post.excerpt}
            </p>
          </div>
        </div>
      </header>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(post)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', path: '/' },
              { name: 'Media & Insights', path: '/blog' },
              { name: post.title.slice(0, 50), path: `/blog/${post.slug}` }
            ])
          )
        }}
      />

      {/* BODY */}
      <article className="py-[80px] max-md:py-12 bg-void">
        <div className="max-w-[800px] mx-auto px-10 max-sm:px-[22px]">
          <div
            className="prose-luxe"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="gradient-divider mt-20" />

          <div className="text-center font-mono text-[10px] tracking-extra-wide uppercase text-muted mt-8">
            FILED UNDER {post.category.toUpperCase()} ·{' '}
            <Link href="/blog" className="text-[var(--gold-primary)] hover:text-[var(--gold-bright)] text-decoration-none font-bold">
              RETURN TO MEDIA & INSIGHTS
            </Link>
          </div>
        </div>
      </article>

      {/* RELATED */}
      <section className="py-[80px] max-md:py-12 bg-dark border-t border-[var(--border-subtle)]">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          <Reveal className="mb-12">
            <span className="text-label block mb-4">CONTINUE READING</span>
            <h3 className="font-display text-[clamp(32px,4vw,52px)] leading-[0.95] tracking-cinematic uppercase mt-7">
              MORE FROM THE <span className="text-gold-gradient">JOURNAL</span>
            </h3>
          </Reveal>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 80}>
                <Link
                  href={`/blog/${r.slug}`}
                  className="block p-10 max-sm:p-7 border border-[var(--border-subtle)] bg-void hover:border-[var(--border-gold)] transition-all duration-[400ms] hover:-translate-y-1 group text-decoration-none"
                >
                  <div className="mb-5">
                    <span className="font-mono text-[10px] tracking-extra-wide uppercase text-[var(--gold-primary)] font-bold">
                      {r.category} · {r.readTime}
                    </span>
                  </div>
                  <h4 className="font-heading text-[24px] leading-[1.05] tracking-cinematic uppercase mb-4 text-primary">
                    {r.title}
                  </h4>
                  <p className="text-[14px] text-secondary leading-[1.65] mb-6">
                    {r.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-extra-wide uppercase text-[var(--gold-primary)] font-bold">
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
        eyebrow="WORK WITH THE HOUSE"
        heading="IF THIS RESONATES,"
        goldHeading="LET'S TALK."
        sub="Connect with our managers today. The first conversation is free, private, and structured to build your long-term career."
      />
    </>
  );
}
