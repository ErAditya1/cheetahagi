import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/content';
import { buildMetadata } from '@/lib/seo';
import ScrollReveal from '@/components/ScrollReveal';
import BlogCard from '@/components/BlogCard';

export const metadata = buildMetadata({
  title: 'Field Notes — AI, GEO/AEO, automation | Cheetah AGI',
  description:
    'What we\'re learning about AI agents, generative search, automation, and the post-attention economy. Long-form essays, no listicles.',
  path: '/blog',
});

const CATEGORIES = ['All', 'GEO / AEO', 'AI Agents', 'Strategy', 'Content'];

export default function BlogPage() {
  const featured = BLOG_POSTS.find((p) => p.featured);
  const rest = BLOG_POSTS.filter((p) => !p.featured);

  return (
    <>
      <section className="section pt-32">
        <div className="container-tight">
          <ScrollReveal>
            <span className="eyebrow">Field Notes</span>
            <h1 className="font-display text-display-xl mt-3 max-w-4xl">
              Things we figured out the <span className="font-serif italic text-strike">hard way</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-bone/70">
              Long-form essays from the build. AI deployments, generative search, voice agents in
              India, and the shift to outcome pricing. No SEO sludge.
            </p>
          </ScrollReveal>

          <div className="mt-10 flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className="px-3 py-1.5 text-xs font-mono uppercase tracking-wider rounded border border-ink-700 text-bone/60 hover:border-strike/40 hover:text-strike transition-colors"
                aria-label={`Filter by ${cat}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {featured && (
        <section className="section pt-0">
          <div className="container-tight">
            <ScrollReveal>
              <BlogCard post={featured} featured />
            </ScrollReveal>
          </div>
        </section>
      )}

      <section className="section pt-0">
        <div className="container-tight">
          <span className="eyebrow">All essays</span>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 50}>
                <BlogCard post={post} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-tight">
          <div className="surface-raised p-10 md:p-12 text-center">
            <span className="eyebrow">Subscribe</span>
            <h2 className="font-display text-2xl md:text-3xl mt-3 max-w-2xl mx-auto">
              One essay, every other Tuesday. No <span className="font-serif italic text-strike">noise</span>.
            </h2>
            <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="flex-1 px-4 py-3 bg-ink-900 border border-ink-700 rounded text-sm text-bone placeholder:text-bone/40 focus:border-strike focus:outline-none"
                aria-label="Email"
              />
              <button type="submit" className="btn-strike whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
