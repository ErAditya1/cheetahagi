import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';

export default function ContactCTA({
  eyebrow = 'GET ACCESS OR INTEGRATE',
  heading,
  goldHeading,
  sub = 'Access our live statistics API, white-labeled widgets, or custom dashboards. We review sandbox requests and support tickets daily.',
  primaryLabel = 'Get API Key',
  secondaryLabel = 'Read the FAQ',
  secondaryHref = '/faq'
}) {
  return (
    <section className="py-[180px] max-md:py-24 bg-slate-950 border-t border-line relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(6,182,212,0.4), transparent 70%)',
          filter: 'blur(60px)',
          opacity: 0.4
        }}
      />
      <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px] relative z-[5]">
        <Reveal>
          <div className="text-center max-w-[1100px] mx-auto">
            <span className="inline-flex eyebrow mb-8">{eyebrow}</span>
            <h2 className="font-display text-[clamp(44px,7.5vw,112px)] leading-[0.95] tracking-cinematic uppercase mb-9">
              {heading}
              {goldHeading && (
                <>
                  {' '}
                  <span className="text-sports-pink">{goldHeading}</span>
                </>
              )}
            </h2>
            <p className="max-w-[620px] mx-auto mb-12 text-slate-400 text-[17px] leading-[1.7]">
              {sub}
            </p>
            <div className="flex gap-3.5 justify-center flex-wrap">
              <Button href="/contact" variant="primary">
                {primaryLabel} <span>→</span>
              </Button>
              <Button href={secondaryHref} variant="ghost">
                {secondaryLabel}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
