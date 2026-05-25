import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { apiGet } from '@/lib/api';
import { buildMetadata } from '@/lib/seo';
import ScrollReveal from '@/components/ScrollReveal';
import CTASection from '@/components/CTASection';

export const dynamic = 'force-dynamic';

export const metadata = buildMetadata({
  title: 'Products — AI tools we ship | Cheetah AGI',
  description:
    'Callio, Trubetix, Strike Audit, Whatspipe — the products we build alongside our consulting work. India-first, outcome-built.',
  path: '/products',
});

export default async function ProductsPage() {
  const products = await apiGet('/public/products');

  return (
    <>
      <section className="section pt-32">
        <div className="container-tight">
          <ScrollReveal>
            <span className="eyebrow">Products</span>
            <h1 className="font-display text-display-xl mt-3 max-w-4xl">
              We don't just <span className="font-serif italic text-strike">consult</span> — we ship.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-bone/70">
              Each product was born from a client problem we couldn't solve with off-the-shelf
              tools. We built it, and the rest of the market still hasn't.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-tight">
          <div className="grid gap-6 md:grid-cols-2">
            {products.map((p, i) => {
              const isExternal = p.href && (p.href.startsWith('http://') || p.href.startsWith('https://'));
              const cardContent = (
                <>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="eyebrow text-bone/50">{p.status}</span>
                      <h2 className="font-display text-2xl mt-2">{p.name}</h2>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-bone/40 transition-all group-hover:text-strike group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                  <p className="mt-4 text-bone/70 leading-relaxed">{p.tagline}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {(p.tags || []).map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs font-mono uppercase tracking-wider rounded border border-ink-700 text-bone/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </>
              );

              return (
                <ScrollReveal key={p.slug} delay={i * 60}>
                  {isExternal ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block surface-raised p-8 transition-all hover:border-strike/40"
                    >
                      {cardContent}
                    </a>
                  ) : (
                    <Link
                      href={p.href || `/products/${p.slug}`}
                      className="group block surface-raised p-8 transition-all hover:border-strike/40"
                    >
                      {cardContent}
                    </Link>
                  )}
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Need something we haven't built yet?"
        title={
          <>
            We build for clients <span className="font-serif italic text-strike">first</span>.
          </>
        }
        body="Most of our products started as a custom build for one client. If you have a workflow no SaaS solves cleanly, that's our favorite kind of conversation."
        primaryHref="/consultation"
        primaryLabel="Brief us"
      />
    </>
  );
}
