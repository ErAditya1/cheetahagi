import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function CTASection({
  eyebrow = 'Next move',
  title = 'Stop guessing. Start shipping.',
  description = 'A 30-minute strategy call. We diagnose where AI actually fits in your business — and where it doesn\'t. No deck, no pitch, no cost.',
  primaryLabel = 'Book Strategy Call',
  primaryHref = '/consultation',
  secondaryLabel = 'See case studies',
  secondaryHref = '/case-studies',
}) {
  return (
    <section className="section relative overflow-hidden">
      <div className="container-tight">
        <ScrollReveal>
          <div className="surface-raised p-10 md:p-16 lg:p-20 relative overflow-hidden">
            {/* Background mesh */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_15%,rgba(197,255,61,0.12),transparent_50%)]" />
            <div className="absolute inset-0 -z-10 bg-grid-faint bg-[size:32px_32px] opacity-30" />

            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-8">
                <div className="eyebrow mb-6">{eyebrow}</div>
                <h2 className="font-display font-medium text-display-lg text-bone text-balance leading-[0.95] mb-6">
                  {title}
                </h2>
                <p className="text-bone-dim text-lg leading-relaxed max-w-2xl">{description}</p>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-3">
                <Link href={primaryHref} className="btn-strike justify-center">
                  {primaryLabel} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href={secondaryHref} className="btn-ghost justify-center">
                  {secondaryLabel}
                </Link>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-400 text-center mt-4">
                  Avg. response · 4 hours
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
