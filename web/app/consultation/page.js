import LeadForm from '@/components/LeadForm';
import { CheckCircle2 } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Book a Strategy Call',
  description:
    'Free 30-minute strategy call. We diagnose where AI fits in your business — and where it doesn\'t. No deck, no pitch, no cost.',
  path: '/consultation',
});

const ASSURANCES = [
  'No deck. No pitch. No follow-up nag.',
  '4-hour response window on every brief.',
  'Senior consultant on the call — not a BDR.',
  'Walk-away guarantee: if AI isn\'t the answer, we\'ll tell you.',
];

export default function ConsultationPage() {
  return (
    <>
      {/* Header */}
      <section className="section pt-36 md:pt-40 pb-16 grain relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(197,255,61,0.08),transparent_60%)]" />
        <div className="absolute inset-0 -z-10 bg-grid-faint bg-[size:64px_64px] opacity-30" />

        <div className="container-tight">
          <div className="text-center max-w-3xl mx-auto">
            <div className="eyebrow justify-center mb-6">Free · 30 minutes</div>
            <h1 className="font-display font-medium text-display-2xl text-bone text-balance leading-[0.92] mb-8">
              Tell us where it <span className="editorial-italic text-strike">hurts.</span>
            </h1>
            <p className="text-xl text-bone-dim leading-relaxed">
              Four short steps. We'll review your brief, send back a written first take within four
              hours, and book the call only if there's a real fit.
            </p>
          </div>
        </div>
      </section>

      {/* The form */}
      <section className="section pt-0">
        <div className="container-tight">
          <LeadForm />
        </div>
      </section>

      {/* Assurances */}
      <section className="section border-t border-ink-700">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ASSURANCES.map((a) => (
              <div key={a} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-strike flex-shrink-0 mt-0.5" />
                <p className="text-bone-dim text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
