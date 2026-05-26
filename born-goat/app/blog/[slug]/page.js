import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/sections/PageHero';
import ContactCTA from '@/components/sections/ContactCTA';
import Reveal from '@/components/ui/Reveal';
import Eyebrow from '@/components/ui/Eyebrow';
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
      <header className="pt-[200px] pb-[80px] max-md:pt-32 max-md:pb-12 relative overflow-hidden border-b border-line">
        <div
          className="absolute -top-[20%] -right-[15%] w-[70vw] h-[70vw] pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(212,168,79,0.4) 0%, transparent 55%)',
            opacity: 0.4,
            filter: 'blur(80px)'
          }}
        />
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px] relative z-[5]">
          <div className="font-mono text-[11px] tracking-extra-wide uppercase text-titanium-deep mb-8">
            <Link href="/" className="hover:text-gold transition-colors">
              BORN GOAT
            </Link>
            <span className="text-gold mx-3">/</span>
            <Link href="/blog" className="hover:text-gold transition-colors">
              JOURNAL
            </Link>
            <span className="text-gold mx-3">/</span>
            <span>{post.category.toUpperCase()}</span>
          </div>

          <div className="max-w-[1000px]">
            <div className="flex gap-4 mb-7 flex-wrap items-center">
              <span className="font-mono text-[11px] tracking-extra-wide uppercase text-gold border border-gold px-3 py-1">
                {post.category}
              </span>
              <span className="font-mono text-[11px] tracking-extra-wide uppercase text-titanium-dim">
                {post.date} · {post.readTime} READ
              </span>
            </div>

            <h1 className="font-display text-[clamp(40px,7vw,100px)] leading-[0.92] tracking-cinematic uppercase">
              {post.title}
            </h1>

            <p className="mt-10 text-[20px] text-gold italic leading-[1.55] max-w-[820px] font-medium">
              {post.lead}
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
              { name: 'Journal', path: '/blog' },
              { name: post.title.slice(0, 50), path: `/blog/${post.slug}` }
            ])
          )
        }}
      />

      {/* BODY */}
      <article className="py-[80px] max-md:py-12 bg-obsidian">
        <div className="max-w-[800px] mx-auto px-10 max-sm:px-[22px]">
          <div
            className="prose-luxe"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />

          <div className="divider-ornament mt-20">
            <span className="diamond" />
          </div>

          <div className="text-center font-mono text-[10px] tracking-extra-wide uppercase text-titanium-deep">
            FILED UNDER {post.category.toUpperCase()} ·{' '}
            <Link href="/blog" className="text-gold hover:text-gold-bright">
              RETURN TO JOURNAL
            </Link>
          </div>
        </div>
      </article>

      {/* RELATED */}
      <section className="py-[80px] max-md:py-12 bg-obsidian-800 border-t border-line">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          <Reveal className="mb-12">
            <Eyebrow className="mb-7">CONTINUE READING</Eyebrow>
            <h3 className="font-display text-[clamp(32px,4vw,52px)] leading-[0.95] tracking-cinematic uppercase mt-7">
              MORE FROM THE <span className="text-gold">JOURNAL</span>
            </h3>
          </Reveal>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 80}>
                <Link
                  href={`/blog/${r.slug}`}
                  className="block p-10 max-sm:p-7 border border-line bg-obsidian hover:border-gold transition-all duration-[400ms] hover:-translate-y-1 group"
                >
                  <div className="mb-5">
                    <span className="font-mono text-[10px] tracking-extra-wide uppercase text-gold">
                      {r.category} · {r.readTime}
                    </span>
                  </div>
                  <h4 className="font-display text-[24px] leading-[1.05] tracking-cinematic uppercase mb-4 text-white">
                    {r.title}
                  </h4>
                  <p className="text-[14px] text-titanium leading-[1.65] mb-6">
                    {r.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-extra-wide uppercase text-gold">
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
        eyebrow="WORK WITH THE HOUSE"
        heading="IF THIS RESONATES,"
        goldHeading="LET'S TALK."
        sub="Most of our long-term clients first read us in the Journal. The first conversation is free, unhurried, and structured to be useful."
      />
    </>
  );
}
