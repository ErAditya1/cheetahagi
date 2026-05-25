import { apiGet } from '@/lib/api';
import { buildMetadata } from '@/lib/seo';
import { faqSchema, JsonLd } from '@/lib/schema';
import ScrollReveal from '@/components/ScrollReveal';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';

export const dynamic = 'force-dynamic';

export const metadata = buildMetadata({
  title: 'FAQ — what working with us is actually like | Cheetah AGI',
  description:
    'Real answers to the questions founders ask before hiring us. Engagement size, pricing, timelines, GEO/AEO, vendor choice, post-engagement ownership.',
  path: '/faq',
});

export default async function FAQPage() {
  const faqs = await apiGet('/public/faqs');

  return (
    <>
      <JsonLd data={faqSchema(faqs)} />

      <section className="section pt-32">
        <div className="container-tight max-w-4xl">
          <ScrollReveal>
            <span className="eyebrow">Frequently Asked</span>
            <h1 className="font-display text-display-xl mt-3">
              Questions we actually get <span className="font-serif italic text-strike">asked</span>.
            </h1>
            <p className="mt-6 text-lg text-bone/70 max-w-2xl">
              Not the marketing-page kind. The 11pm-on-Friday-before-signing kind.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-tight max-w-4xl">
          <FAQSection faqs={faqs} />
        </div>
      </section>

      <CTASection
        eyebrow="Didn't find your question?"
        title={
          <>
            Just <span className="font-serif italic text-strike">ask us</span>.
          </>
        }
        body="The fastest path to an answer is the consultation form. 25 minutes, no slides, no sales pressure."
        primaryHref="/consultation"
        primaryLabel="Book a call"
        secondaryHref="/contact"
        secondaryLabel="Or email us"
      />
    </>
  );
}
