import Link from 'next/link';
import Image from 'next/image';
import { SITE, FOOTER_LINKS } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-line pt-[90px] pb-8 relative">
      <span
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, #3B82F6 30%, #EC4899 70%, transparent 100%)',
          opacity: 0.6
        }}
      />
      <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px]">
        <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr] max-md:grid-cols-2 max-sm:grid-cols-1 gap-[60px] mb-20 pb-[60px] border-b border-line">
          <div>
            <div className="flex items-center gap-3.5 mb-4">
              <div className="relative w-10 h-10 flex items-center justify-center rounded-full border border-titanium/30 overflow-hidden bg-slate-950">
                <Image
                  src="/icon.png"
                  alt="BORN GOAT Logo"
                  fill
                  sizes="40px"
                  className="object-contain p-0.5"
                />
              </div>
              <h3 className="font-display text-[42px] leading-[0.95] tracking-[0.02em] uppercase">
                BORN <span className="bg-gradient-to-r from-sports-blue via-sports-cyan to-sports-pink bg-clip-text text-transparent font-black">G</span>OAT.
              </h3>
            </div>
            <p className="text-slate-400 text-sm max-w-[340px] mt-6 leading-relaxed">
              Next-gen sports coverage, analytics, and live dashboards.
              Tracking the world’s elite leagues, teams, and athletes in real time.
            </p>
            <div className="font-mono text-[11px] text-slate-500 tracking-wide-cap uppercase mt-6">
              {SITE.cities.join(' · ').toUpperCase()}
            </div>
          </div>

          <div>
            <h5 className="font-mono text-[11px] tracking-extra-wide uppercase text-sports-cyan mb-6">
              Live Center
            </h5>
            <ul className="list-none flex flex-col gap-3.5">
              {FOOTER_LINKS.practice.map((l, i) => (
                <li key={i}>
                  <Link
                    href={l.href}
                    className="text-slate-300 text-sm hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-mono text-[11px] tracking-extra-wide uppercase text-sports-pink mb-6">
              Platform
            </h5>
            <ul className="list-none flex flex-col gap-3.5">
              {FOOTER_LINKS.house.map((l, i) => (
                <li key={i}>
                  <Link
                    href={l.href}
                    className="text-slate-300 text-sm hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-mono text-[11px] tracking-extra-wide uppercase text-sports-cyan mb-6">
              Connect
            </h5>
            <ul className="list-none flex flex-col gap-3.5">
              {FOOTER_LINKS.connect.map((l, i) => (
                <li key={i}>
                  <a
                    href={l.href}
                    className="text-slate-300 text-sm hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center font-mono text-[10px] text-slate-500 tracking-extra-wide uppercase flex-wrap gap-4">
          <span>
            © {SITE.founded} BORN GOAT &nbsp;<span className="text-sports-pink">◆</span>
            &nbsp; ALL RIGHTS RESERVED
          </span>
          <span>
            PRIVACY <span className="text-sports-cyan">·</span> TERMS{' '}
            <span className="text-sports-cyan">·</span> CRAFTED IN LUCKNOW
          </span>
        </div>
      </div>
    </footer>
  );
}
