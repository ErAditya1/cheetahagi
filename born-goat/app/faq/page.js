'use client';

import { useState } from 'react';
import PageHero from '@/components/sections/PageHero';
import ContactCTA from '@/components/sections/ContactCTA';
import Reveal from '@/components/ui/Reveal';
import Eyebrow from '@/components/ui/Eyebrow';
import { faqs } from '@/lib/content';
import { faqPageSchema } from '@/lib/schema';

export default function FAQPage() {
  const [open, setOpen] = useState(null);

  return (
    <>
      <PageHero
        crumbs={[
          { label: 'BORN GOAT', href: '/' },
          { label: 'FAQ' }
        ]}
        eyebrow="FAQ"
        title="QUESTIONS WE ACTUALLY GET ASKED."
        italicWord="ACTUALLY GET ASKED"
        lede="The questions that come up in first conversations. The 11pm-on-Friday-before-signing kind, not the marketing-page kind. If yours is not here, write to us."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }}
      />

      <section className="py-[100px] max-md:py-16 bg-obsidian">
        <div className="max-w-[1100px] mx-auto px-10 max-sm:px-[22px]">
          {faqs.map((section, si) => (
            <div key={section.section} className="mb-20 max-md:mb-12">
              <Reveal className="mb-10">
                <Eyebrow className="mb-5">
                  SECTION {String(si + 1).padStart(2, '0')}
                </Eyebrow>
                <h2 className="font-display text-[clamp(36px,5vw,64px)] leading-[0.95] tracking-cinematic uppercase mt-5">
                  {section.sectionTitle.toUpperCase()}
                </h2>
              </Reveal>

              <div className="border-t border-line">
                {section.items.map((item, ii) => {
                  const key = `${section.section}-${ii}`;
                  const isOpen = open === key;
                  return (
                    <Reveal key={key} delay={ii * 40}>
                      <div className="border-b border-line">
                        <button
                          onClick={() => setOpen(isOpen ? null : key)}
                          className="w-full text-left py-7 flex items-start justify-between gap-6 hover:bg-obsidian-800 transition-colors px-2 -mx-2 group"
                        >
                          <span className="font-display text-[clamp(20px,2.4vw,28px)] tracking-cinematic uppercase text-white leading-[1.15] group-hover:text-gold transition-colors">
                            {item.q}
                          </span>
                          <span
                            className={`text-gold text-2xl shrink-0 transition-transform duration-300 ${
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
                          <p className="text-[16px] text-titanium leading-[1.75] max-w-[820px]">
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
