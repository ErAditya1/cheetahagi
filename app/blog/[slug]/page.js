import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/content';
import { buildMetadata } from '@/lib/seo';
import { articleSchema, breadcrumbSchema, JsonLd } from '@/lib/schema';
import ScrollReveal from '@/components/ScrollReveal';
import BlogCard from '@/components/BlogCard';
import CTASection from '@/components/CTASection';

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};
  return buildMetadata({
    title: `${post.title} | Cheetah AGI`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: 'article',
  });
}

// In production this body comes from the CMS / MDX. Inline placeholder body for prototype.
function PostBody({ post }) {
  return (
    <div className="prose-custom">
      <p className="text-xl text-bone/80 leading-relaxed font-serif italic">
        {post.excerpt}
      </p>

      <h2>Why this matters now</h2>
      <p>
        The shift in how people find information is no longer hypothetical. AI Overviews,
        ChatGPT, Perplexity, and Gemini are routing a growing share of intent away from the
        ten blue links — and the optimization disciplines that worked for a decade are
        partially obsolete.
      </p>

      <h2>The mechanics</h2>
      <p>
        Generative engines assemble answers. They don't rank pages — they synthesize them.
        Which means the unit of optimization is no longer "the page that ranks #1" — it's
        "the passage that gets cited."
      </p>
      <p>
        Three structural shifts follow from that, and we'll work through each.
      </p>

      <h3>1. Schema becomes load-bearing</h3>
      <p>
        Structured data was always nice-to-have for SEO. For AEO it's table stakes — the
        engines parse schema first, prose second.
      </p>

      <h3>2. Authorship signals matter again</h3>
      <p>
        AI engines are calibrated against EEAT-style trust gradients. A human author with a
        verifiable history weighs more than an SEO content farm. This is the opening for
        operators with real domain experience.
      </p>

      <h3>3. Brevity wins citations</h3>
      <p>
        A clean 40-word answer to a precise question gets quoted. A 2,000-word essay does
        not. Build for the snippet first, then expand.
      </p>

      <h2>What we recommend</h2>
      <p>
        Audit your top 50 commercial-intent pages against three structures: schema coverage,
        author transparency, and quotable passage density. Most B2B sites score under 30%.
        That's the gap.
      </p>

      <p className="text-bone/60 italic">
        — Written by the Cheetah AGI team. If this resonated, the consultation page is
        below.
      </p>
    </div>
  );
}

export default function BlogPostPage({ params }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);
  const fallback = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  const recommendations = related.length > 0 ? related : fallback;

  return (
    <>
      <JsonLd data={articleSchema(post)} />
      <JsonLd
        data={breadcrumbSchema([
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: post.title, href: `/blog/${post.slug}` },
        ])}
      />

      <article className="section pt-32">
        <div className="container-tight max-w-3xl">
          <ScrollReveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-bone/50 hover:text-strike"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Field Notes
            </Link>

            <div className="mt-6 flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-bone/50">
              <span className="text-strike">{post.category}</span>
              <span aria-hidden>·</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span aria-hidden>·</span>
              <span>{post.readTime}</span>
            </div>

            <h1 className="font-display text-display-lg md:text-display-xl mt-4">{post.title}</h1>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-12">
              <PostBody post={post} />
            </div>
          </ScrollReveal>
        </div>
      </article>

      {recommendations.length > 0 && (
        <section className="section pt-0">
          <div className="container-tight">
            <span className="eyebrow">Keep reading</span>
            <h2 className="font-display text-2xl mt-3">More from Field Notes</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {recommendations.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        eyebrow="If this resonated"
        title={
          <>
            Want this kind of thinking <span className="font-serif italic text-strike">applied to your business</span>?
          </>
        }
        body="A 25-minute consultation. We'll tell you which of these shifts is most urgent for your specific stack — and what we'd do first."
        primaryHref="/consultation"
        primaryLabel="Book a call"
      />
    </>
  );
}
