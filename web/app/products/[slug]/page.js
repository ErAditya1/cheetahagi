import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Check, ArrowRight, ArrowUpRight } from 'lucide-react';
import { apiGet } from '@/lib/api';
import { buildMetadata } from '@/lib/seo';
import { productSchema, breadcrumbSchema, JsonLd } from '@/lib/schema';
import ScrollReveal from '@/components/ScrollReveal';
import CTASection from '@/components/CTASection';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  let product;
  try {
    product = await apiGet(`/public/products/${slug}`);
  } catch {
    return {};
  }
  return buildMetadata({
    title: `${product.name} — ${product.tagline} | Cheetah AGI`,
    description: product.description,
    path: `/products/${product.slug}`,
  });
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  let product;
  try {
    product = await apiGet(`/public/products/${slug}`);
  } catch {
    notFound();
  }

  const products = await apiGet('/public/products');
  const others = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={productSchema(product)} />
      <JsonLd
        data={breadcrumbSchema([
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: product.name, href: `/products/${product.slug}` },
        ])}
      />

      <section className="section pt-32">
        <div className="container-tight">
          <ScrollReveal>
            <nav aria-label="Breadcrumb" className="text-xs font-mono uppercase tracking-wider text-bone/50">
              <Link href="/products" className="hover:text-strike">Products</Link>
              <span className="mx-2">/</span>
              <span className="text-bone/80">{product.name}</span>
            </nav>

            <div className="mt-6 flex items-center gap-3">
              <span className="px-2.5 py-1 text-xs font-mono uppercase tracking-wider rounded bg-strike/10 text-strike border border-strike/30">
                {product.status}
              </span>
              {(product.tags || []).map((t) => (
                <span key={t} className="text-xs font-mono uppercase tracking-wider text-bone/50">
                  {t}
                </span>
              ))}
            </div>

            <h1 className="font-display text-display-2xl mt-4 max-w-4xl">{product.name}</h1>
            <p className="mt-6 max-w-3xl text-xl text-bone/75 leading-relaxed font-serif italic">
              {product.tagline}
            </p>
            <p className="mt-6 max-w-3xl text-base text-bone/70 leading-relaxed">
              {product.description}
            </p>
            {product.href && (product.href.startsWith('http://') || product.href.startsWith('https://')) && (
              <div className="mt-8">
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-strike inline-flex items-center gap-2"
                >
                  Visit Product
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            )}
          </ScrollReveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-tight">
          <ScrollReveal>
            <span className="eyebrow">What's inside</span>
            <h2 className="font-display text-display-lg mt-3 max-w-3xl">
              The features that <span className="font-serif italic text-strike">earn the price</span>.
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {(product.features || []).map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 50}>
                <div className="surface p-6 h-full">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-strike shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-display text-lg">{f.title}</h3>
                      <p className="mt-2 text-sm text-bone/70 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-tight">
          <div className="surface-raised p-10 md:p-14 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <div>
              <span className="eyebrow text-bone/50">Pricing</span>
              <p className="font-display text-3xl mt-3">{product.pricing}</p>
              <p className="text-sm text-bone/60 mt-2">
                Transparent. No surprise enterprise tax. Talk to us before you commit.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              {product.href && (product.href.startsWith('http://') || product.href.startsWith('https://')) && (
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost inline-flex items-center gap-2"
                >
                  Visit Product
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
              <Link href="/consultation" className="btn-strike">
                Get a demo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {others.length > 0 && (
        <section className="section pt-0">
          <div className="container-tight">
            <span className="eyebrow">More from Cheetah AGI</span>
            <h2 className="font-display text-2xl mt-3">Other products</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={o.href || `/products/${o.slug}`}
                  className="group block surface p-6 hover:border-strike/40 transition-all"
                >
                  <span className="eyebrow text-bone/50">{o.status}</span>
                  <h3 className="font-display text-xl mt-2">{o.name}</h3>
                  <p className="mt-3 text-sm text-bone/70">{o.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        eyebrow="Talk to a human"
        title={
          <>
            Want to see <span className="font-serif italic text-strike">{product.name}</span> in your stack?
          </>
        }
        body="A 25-minute call. We'll show you the product running on a workspace that looks like yours, and tell you honestly whether it fits."
        primaryHref="/consultation"
        primaryLabel="Book a demo"
      />
    </>
  );
}
