import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/sections/PageHero';
import ContactCTA from '@/components/sections/ContactCTA';
import Reveal from '@/components/ui/Reveal';
import Eyebrow from '@/components/ui/Eyebrow';
import { services, getService } from '@/lib/content';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';

export function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }));
}

export function generateMetadata({ params }) {
  const s = getService(params.slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.description,
    alternates: { canonical: `/services/${s.slug}` }
  };
}

export default function ServiceDetailPage({ params }) {
  const s = getService(params.slug);
  if (!s) notFound();

  const related = services.filter(x => x.slug !== s.slug).slice(0, 3);

  return (
    <>
      <PageHero
        crumbs={[
          { label: 'BORN GOAT', href: '/' },
          { label: 'Live Center', href: '/services' },
          { label: s.title }
        ]}
        eyebrow={`MODULE · ${s.number}`}
        title={s.title.toUpperCase()}
        lede={s.tagline}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(s)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', path: '/' },
              { name: 'Live Center', path: '/services' },
              { name: s.title, path: `/services/${s.slug}` }
            ])
          )
        }}
      />

      {/* OVERVIEW */}
      <section className="py-[120px] max-md:py-20 bg-slate-950">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          <Reveal>
            <div className="grid grid-cols-[200px_1fr] max-md:grid-cols-1 gap-12 max-w-[1100px]">
              <Eyebrow>OVERVIEW</Eyebrow>
              <p className="text-[18px] text-slate-400 leading-[1.75]">
                {s.description}
              </p>
            </div>
          </Reveal>

          <div className="divider-ornament my-20">
            <span className="diamond" />
          </div>

          {/* DELIVERABLES */}
          <Reveal>
            <div className="grid grid-cols-[200px_1fr] max-md:grid-cols-1 gap-12">
              <Eyebrow>DELIVERABLES</Eyebrow>
              <ol className="list-none counter-reset space-y-6 max-w-[820px]">
                {s.deliverables.map((d, i) => (
                  <li
                    key={i}
                    className="pl-14 relative text-[17px] text-slate-400 leading-[1.7] border-b border-line pb-6 last:border-0"
                  >
                    <span className="absolute left-0 top-1 font-mono text-[12px] tracking-extra-wide text-sports-cyan">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {d}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <div className="divider-ornament my-20">
            <span className="diamond" />
          </div>

          {/* WHEN */}
          <Reveal>
            <div className="grid grid-cols-[200px_1fr] max-md:grid-cols-1 gap-12">
              <Eyebrow>INTEGRATION</Eyebrow>
              <p className="text-[17px] text-slate-400 leading-[1.75] max-w-[820px]">
                {s.process}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-[120px] max-md:py-20 bg-slate-900 border-t border-line">
        <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
          <Reveal className="mb-16">
            <Eyebrow className="mb-7">CONTINUE</Eyebrow>
            <h3 className="font-display text-[clamp(36px,5vw,60px)] leading-[0.95] tracking-cinematic uppercase mt-7">
              OTHER <span className="text-sports-cyan">MODULES</span>
            </h3>
          </Reveal>
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-px bg-line border border-line">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 60}>
                <Link
                  href={`/services/${r.slug}`}
                  className="bg-slate-900 hover:bg-slate-800 p-10 max-sm:p-7 block transition-colors duration-300 h-full group"
                >
                  <div className="font-display text-3xl text-slate-700 group-hover:text-sports-cyan transition-colors mb-5 tracking-cinematic">
                    {r.number}
                  </div>
                  <h4 className="font-display text-[24px] tracking-cinematic uppercase mb-3 text-white leading-[1]">
                    {r.title}
                  </h4>
                  <p className="text-[13px] text-slate-400 leading-[1.65]">
                    {r.tagline}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        eyebrow={`INTEGRATE THIS MODULE`}
        heading="REQUEST ACCESS FOR "
        goldHeading={s.title.toUpperCase() + '.'}
        sub="Sign up for a developer sandbox key to start querying our endpoints, or consult our integrations desk."
      />
    </>
  );
}
