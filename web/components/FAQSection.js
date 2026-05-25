'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function FAQSection({ faqs, compact = false }) {
  const [open, setOpen] = useState(0);

  return (
    <section className={compact ? 'py-16' : 'section'}>
      <div className="container-tight">
        {!compact && (
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-6">
              <ScrollReveal>
                <div className="eyebrow mb-6">Direct answers</div>
                <h2 className="font-display font-medium text-display-lg text-bone text-balance">
                  Questions worth
                  <br />
                  <span className="editorial-italic text-strike">asking out loud.</span>
                </h2>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 lg:pt-6">
              <ScrollReveal delay={150}>
                <p className="text-bone-dim text-lg leading-relaxed">
                  Optimized for both humans and answer engines. If you need a custom answer, the
                  consultation form is faster than a back-and-forth.
                </p>
              </ScrollReveal>
            </div>
          </div>
        )}

        <div className="border-t border-ink-700">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <ScrollReveal key={i} delay={i * 50}>
                <article
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                  className="border-b border-ink-700"
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full flex items-start justify-between gap-6 py-6 md:py-8 text-left group"
                    aria-expanded={isOpen}
                  >
                    <h3
                      itemProp="name"
                      className={`font-display text-xl md:text-2xl font-medium transition-colors ${
                        isOpen ? 'text-strike' : 'text-bone group-hover:text-strike'
                      }`}
                    >
                      {faq.q}
                    </h3>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full border border-ink-600 flex items-center justify-center group-hover:border-strike transition-colors">
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-strike" />
                      ) : (
                        <Plus className="w-4 h-4 text-bone-dim group-hover:text-strike transition-colors" />
                      )}
                    </div>
                  </button>
                  {isOpen && (
                    <div
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                      className="pb-6 md:pb-8 max-w-3xl animate-rise"
                    >
                      <div itemProp="text" className="text-bone-dim text-base md:text-lg leading-relaxed">
                        {faq.a}
                      </div>
                    </div>
                  )}
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
