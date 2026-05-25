import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { apiGet } from '@/lib/api';
import { buildMetadata } from '@/lib/seo';
import { articleSchema, breadcrumbSchema, JsonLd } from '@/lib/schema';
import ScrollReveal from '@/components/ScrollReveal';
import BlogCard from '@/components/BlogCard';
import CTASection from '@/components/CTASection';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  let post;
  try {
    post = await apiGet(`/public/posts/${slug}`);
  } catch {
    return {};
  }
  return buildMetadata({
    title: `${post.title} | Cheetah AGI`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: 'article',
  });
}

function PostBody({ post }) {
  const body = (post.body || post.excerpt || '').split('\n').filter(Boolean);
  return (
    <div className="prose-custom">
      <p className="text-xl text-bone/80 leading-relaxed font-serif italic">
        {post.excerpt}
      </p>
      {body.map((line, i) => line.startsWith('## ') ? <h2 key={i}>{line.slice(3)}</h2> : <p key={i}>{line}</p>)}
    </div>
  );
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  let post;
  try {
    post = await apiGet(`/public/posts/${slug}`);
  } catch {
    notFound();
  }

  const posts = await apiGet('/public/posts');
  const related = posts.filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);
  const fallback = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
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
