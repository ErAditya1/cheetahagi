import Link from 'next/link';
import Image from 'next/image';
import { SITE, FOOTER_LINKS } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="bg-obsidian-800 border-t border-line pt-[90px] pb-8 relative">
      <span
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, #D4A84F 30%, #D4A84F 70%, transparent 100%)',
          opacity: 0.6
        }}
      />
      <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
        <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr] max-md:grid-cols-2 max-sm:grid-cols-1 gap-[60px] mb-20 pb-[60px] border-b border-line">
          <div>
            <div className="flex items-center gap-3.5 mb-4">
              <div className="relative w-10 h-10 flex items-center justify-center rounded-full border border-titanium/30 overflow-hidden bg-obsidian-900">
                <Image
                  src="/icon.png"
                  alt="BORN GOAT Logo"
                  fill
                  sizes="40px"
                  className="object-contain p-0.5"
                />
              </div>
              <h3 className="font-display text-[42px] leading-[0.95] tracking-[0.02em] uppercase">
                BORN <span className="text-gold">G</span>OAT.
              </h3>
            </div>
            <p className="text-titanium-dim text-sm max-w-[340px] mt-6 leading-relaxed">
              An elite sports marketing house for athletes, leagues and brands
              engineered for legacy. Operated by Feeding Trends Media.
            </p>
            <div className="font-mono text-[11px] text-titanium-deep tracking-wide-cap uppercase mt-6">
              {SITE.cities.join(' · ').toUpperCase()}
            </div>
          </div>

          <div>
            <h5 className="font-mono text-[11px] tracking-extra-wide uppercase text-gold mb-6">
              Practice
            </h5>
            <ul className="list-none flex flex-col gap-3.5">
              {FOOTER_LINKS.practice.map((l, i) => (
                <li key={i}>
                  <Link
                    href={l.href}
                    className="text-titanium text-sm hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-mono text-[11px] tracking-extra-wide uppercase text-gold mb-6">
              House
            </h5>
            <ul className="list-none flex flex-col gap-3.5">
              {FOOTER_LINKS.house.map((l, i) => (
                <li key={i}>
                  <Link
                    href={l.href}
                    className="text-titanium text-sm hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-mono text-[11px] tracking-extra-wide uppercase text-gold mb-6">
              Connect
            </h5>
            <ul className="list-none flex flex-col gap-3.5">
              {FOOTER_LINKS.connect.map((l, i) => (
                <li key={i}>
                  <a
                    href={l.href}
                    className="text-titanium text-sm hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center font-mono text-[10px] text-titanium-deep tracking-extra-wide uppercase flex-wrap gap-4">
          <span>
            © {SITE.founded} BORN GOAT &nbsp;<span className="text-gold">◆</span>
            &nbsp; ALL RIGHTS RESERVED
          </span>
          <span>
            PRIVACY <span className="text-gold">·</span> TERMS{' '}
            <span className="text-gold">·</span> CRAFTED IN LUCKNOW
          </span>
        </div>
      </div>
    </footer>
  );
}
