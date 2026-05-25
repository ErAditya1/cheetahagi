import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import CTASection from '@/components/CTASection';
import { apiGet } from '@/lib/api';
import { buildMetadata } from '@/lib/seo';
import { serviceSchema, breadcrumbSchema, JsonLd } from '@/lib/schema';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  let service;
  try {
    service = await apiGet(`/public/services/${slug}`);
  } catch {
    return {};
  }
  return buildMetadata({
    title: service.name,
    description: service.tagline,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  let service;
  try {
    service = await apiGet(`/public/services/${slug}`);
  } catch {
    notFound();
  }

  const services = await apiGet('/public/services');
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd
        data={breadcrumbSchema([
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.name, href: `/services/${service.slug}` },
        ])}
      />

      <section className="section pt-36 md:pt-40">
        <div className="container-tight">
          <nav className="font-mono text-xs uppercase tracking-widest text-ink-400 mb-12" aria-label="Breadcrumb">
            <Link href="/services" className="hover:text-strike">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-strike">{service.name}</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="eyebrow mb-6">Service</div>
              <h1 className="font-display font-medium text-display-2xl text-bone text-balance leading-[0.92] mb-8">
                {service.name}
              </h1>
              <p className="text-xl text-bone-dim leading-relaxed mb-12">{service.tagline}</p>
              <div className="prose-invert max-w-3xl">
                <p className="text-bone text-lg leading-relaxed">{service.longDescription}</p>
              </div>
            </div>
            <aside className="lg:col-span-4">
              <div className="surface-raised p-8 sticky top-28">
                <div className="space-y-6 mb-8">
                  <div>
                    <div className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-400 mb-1">Timeline</div>
                    <div className="font-display text-2xl text-bone">{service.timeline}</div>
                  </div>
                  <div>
                    <div className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-400 mb-1">Investment</div>
                    <div className="font-display text-2xl text-bone">{service.investment}</div>
                  </div>
                </div>
                <Link href="/consultation" className="btn-strike w-full justify-center">
                  Start engagement →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section border-t border-ink-700">
        <div className="container-tight">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <ScrollReveal>
                <div className="eyebrow mb-6">What you receive</div>
                <h2 className="font-display font-medium text-display-lg text-bone text-balance">
                  The actual <span className="editorial-italic text-strike">deliverables.</span>
                </h2>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-8">
              <ul className="space-y-px bg-ink-700 border border-ink-700 rounded-2xl overflow-hidden">
                {(service.deliverables || []).map((d, i) => (
                  <ScrollReveal key={d} delay={i * 60}>
                    <li className="bg-ink-900 p-6 md:p-8 flex items-center gap-4 hover:bg-ink-800 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-strike/10 border border-strike/30 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-strike" />
                      </div>
                      <div className="text-bone text-lg">{d}</div>
                    </li>
                  </ScrollReveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="section border-t border-ink-700">
        <div className="container-tight">
          <div className="eyebrow mb-12">Related work</div>
          <div className="grid md:grid-cols-3 gap-6">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="surface group hover:border-strike/40 p-8 block transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-strike scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                <h3 className="font-display text-2xl font-medium text-bone group-hover:text-strike transition-colors mb-3">
                  {s.name}
                </h3>
                <p className="text-bone-dim text-sm mb-6">{s.tagline}</p>
                <div className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-widest text-ink-400 group-hover:text-strike">
                  Read more <ArrowUpRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
