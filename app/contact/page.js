import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import QuickCaptureForm from '@/components/QuickCaptureForm';
import ScrollReveal from '@/components/ScrollReveal';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Contact',
  description:
    'Get in touch with Cheetah AGI. Strategy calls, custom engagements, or quick questions — pick the channel that fits.',
  path: '/contact',
});

const CHANNELS = [
  {
    icon: MessageSquare,
    title: 'Strategy call',
    desc: '30 minutes. We diagnose where AI fits in your business — and where it doesn\'t.',
    cta: 'Book the call',
    href: '/consultation',
    badge: 'Most popular',
  },
  {
    icon: Mail,
    title: 'Email',
    desc: 'For RFPs, partnerships, press, and general questions.',
    cta: 'hello@cheetahagi.com',
    href: 'mailto:hello@cheetahagi.com',
  },
  {
    icon: Phone,
    title: 'Direct',
    desc: 'For existing clients and time-sensitive matters only.',
    cta: '+91 99999 99999',
    href: 'tel:+919999999999',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="section pt-36 md:pt-40 pb-12">
        <div className="container-tight">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="eyebrow mb-6">Contact</div>
              <h1 className="font-display font-medium text-display-2xl text-bone text-balance leading-[0.92] mb-8">
                Pick the <span className="editorial-italic text-strike">right door.</span>
              </h1>
              <p className="text-xl text-bone-dim leading-relaxed max-w-2xl">
                We respond to every legitimate inbound within four working hours. The fastest path is
                always the strategy call — book it directly below.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className="section pt-12">
        <div className="container-tight">
          <div className="grid md:grid-cols-3 gap-6">
            {CHANNELS.map((c, i) => {
              const Icon = c.icon;
              return (
                <ScrollReveal key={c.title} delay={i * 100}>
                  <Link
                    href={c.href}
                    className="surface group hover:border-strike/40 p-8 block h-full transition-all relative overflow-hidden"
                  >
                    {c.badge && (
                      <div className="absolute top-4 right-4 font-mono text-[0.55rem] uppercase tracking-widest text-strike border border-strike/40 rounded-full px-2 py-0.5">
                        {c.badge}
                      </div>
                    )}
                    <div className="absolute top-0 left-0 right-0 h-px bg-strike scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                    <div className="w-12 h-12 rounded-xl bg-ink-800 group-hover:bg-strike/10 border border-ink-700 group-hover:border-strike/30 flex items-center justify-center mb-6 transition-all">
                      <Icon className="w-5 h-5 text-bone-dim group-hover:text-strike transition-colors" />
                    </div>
                    <h2 className="font-display text-2xl font-medium text-bone mb-3 group-hover:text-strike transition-colors">
                      {c.title}
                    </h2>
                    <p className="text-bone-dim text-sm leading-relaxed mb-6">{c.desc}</p>
                    <div className="font-mono text-xs uppercase tracking-widest text-strike">
                      {c.cta} →
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="section border-t border-ink-700">
        <div className="container-tight">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <div className="eyebrow mb-6">Or — send a brief</div>
                <h2 className="font-display font-medium text-display-lg text-bone text-balance leading-[0.95] mb-6">
                  Got 60 seconds?
                </h2>
                <p className="text-bone-dim text-lg leading-relaxed mb-10 max-w-xl">
                  Drop the basics. We'll reply with either a calendar link or a written first take —
                  whichever moves you forward faster.
                </p>
                <QuickCaptureForm source="contact-page" cta="Send brief" />
              </ScrollReveal>
            </div>

            <aside className="lg:col-span-4 lg:col-start-9">
              <div className="surface-raised p-8 space-y-8 sticky top-28">
                <div>
                  <div className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-400 mb-3 flex items-center gap-2">
                    <MapPin className="w-3 h-3 text-strike" /> Headquarters
                  </div>
                  <div className="text-bone leading-relaxed">
                    Lucknow<br />
                    Uttar Pradesh, India
                  </div>
                </div>

                <div>
                  <div className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-400 mb-3 flex items-center gap-2">
                    <Clock className="w-3 h-3 text-strike" /> Hours
                  </div>
                  <div className="text-bone leading-relaxed text-sm">
                    Mon — Fri · 10:00 to 19:00 IST<br />
                    <span className="text-bone-dim">Async response globally</span>
                  </div>
                </div>

                <div>
                  <div className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-400 mb-3">Social</div>
                  <div className="space-y-2 text-sm">
                    <a href="https://www.linkedin.com/company/cheetah-agi" className="text-bone hover:text-strike block">
                      LinkedIn →
                    </a>
                    <a href="https://twitter.com/cheetahagi" className="text-bone hover:text-strike block">
                      Twitter / X →
                    </a>
                    <a href="https://www.instagram.com/yashsrivastava_" className="text-bone hover:text-strike block">
                      Instagram →
                    </a>
                  </div>
                </div>

                <div className="pt-6 border-t border-ink-700">
                  <div className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-400 mb-3">Operating entity</div>
                  <div className="text-bone-dim text-xs leading-relaxed">
                    Cheetah AGI is a venture of Feeding Trends Media Pvt. Ltd.
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
