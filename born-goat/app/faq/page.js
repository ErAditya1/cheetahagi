'use client';

import { useState } from 'react';
import PageHero from '@/components/sections/PageHero';
import ContactCTA from '@/components/sections/ContactCTA';
import Reveal from '@/components/ui/Reveal';
import { faqs } from '@/lib/content';
import { faqPageSchema } from '@/lib/schema';

export default function FAQPage() {
  const [open, setOpen] = useState(null);

  return (
    <>
      <PageHero
        crumbs={[
          { label: 'Born Goat', href: '/' },
          { label: 'FAQ' }
        ]}
        eyebrow="FAQ"
        title="QUESTIONS WE ACTUALLY GET ASKED."
        italicWord="ACTUALLY GET ASKED"
        lede="The questions that come up in first conversations. The contract-signing and representation kind, not the generic marketing kind. If yours is not here, contact our panel."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }}
      />

      <section className="py-[100px] max-md:py-16 bg-void">
        <div className="max-w-[1100px] mx-auto px-10 max-sm:px-[22px]">
          {faqs.map((section, si) => (
            <div key={section.section} className="mb-20 max-md:mb-12">
              <Reveal className="mb-10">
                <span className="text-label text-xs block mb-4">
                  SECTION {String(si + 1).padStart(2, '0')}
                </span>
                <h2 className="font-heading text-[clamp(36px,5vw,55px)] leading-[0.95] tracking-cinematic uppercase mt-5 text-primary">
                  {section.sectionTitle.toUpperCase()}
                </h2>
              </Reveal>

              <div className="border-t border-[var(--border-subtle)]">
                {section.items.map((item, ii) => {
                  const key = `${section.section}-${ii}`;
                  const isOpen = open === key;
                  return (
                    <Reveal key={key} delay={ii * 40}>
                      <div className="border-b border-[var(--border-subtle)]">
                        <button
                          onClick={() => setOpen(isOpen ? null : key)}
                          className="w-full text-left py-7 flex items-start justify-between gap-6 hover:bg-[#111111] transition-colors px-4 -mx-4 group bg-transparent border-none cursor-pointer"
                        >
                          <span className="font-heading text-[clamp(18px,2.2vw,24px)] tracking-cinematic uppercase text-primary leading-[1.15] group-hover:text-[var(--gold-primary)] transition-colors">
                            {item.q}
                          </span>
                          <span
                            className={`text-[var(--gold-primary)] text-2xl shrink-0 transition-transform duration-300 ${
                              isOpen ? 'rotate-45' : ''
                            }`}
                          >
                            +
                          </span>
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                            isOpen ? 'max-h-[600px] pb-7' : 'max-h-0'
                          }`}
                        >
                          <p className="text-[16px] text-secondary leading-[1.75] max-w-[820px] px-4">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactCTA
        eyebrow="STILL HAVE QUESTIONS"
        heading="WRITE TO US"
        goldHeading="DIRECTLY."
        sub="If your question is not answered here, it is probably the right one to bring to a first conversation. We read every brief personally."
        secondaryLabel="Read the Journal"
        secondaryHref="/blog"
      />
    </>
  );
}
