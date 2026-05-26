'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/lib/site';

export default function Nav() {
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] py-5 px-10 max-sm:px-[22px] flex items-center justify-between border-b border-line"
      style={{
        backdropFilter: 'blur(20px) saturate(1.4)',
        WebkitBackdropFilter: 'blur(20px) saturate(1.4)',
        background: 'rgba(10, 10, 10, 0.78)'
      }}
    >
      <Link href="/" className="flex items-center gap-3.5 text-white group">
        <div className="relative w-9 h-9 flex items-center justify-center rounded-full border border-titanium/50 overflow-hidden bg-obsidian-800 transition-colors duration-300 group-hover:border-gold">
          <Image
            src="/icon.png"
            alt="BORN GOAT Logo"
            fill
            sizes="36px"
            className="object-contain p-0.5"
            priority
          />
        </div>
        <span className="font-display text-[22px] tracking-[0.06em] uppercase">
          BORN <span className="text-gold">G</span>OAT
        </span>
      </Link>

      <div className="flex gap-9 items-center">
        {NAV_ITEMS.map(item => (
          <Link
            key={item.key}
            href={item.href}
            className={`max-lg:hidden font-mono text-xs font-medium tracking-wide-cap uppercase transition-colors relative ${
              isActive(item.href) ? 'text-gold' : 'text-titanium hover:text-white'
            }`}
            style={{ letterSpacing: '0.18em' }}
          >
            {item.label}
            <span
              className={`absolute left-0 -bottom-1.5 h-px bg-gold transition-[right] duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
                isActive(item.href) ? 'right-0' : 'right-full'
              }`}
            />
          </Link>
        ))}
        <Link
          href="/contact"
          className="bg-grad-gold text-obsidian px-[26px] py-[13px] font-mono text-[11px] font-bold uppercase tracking-extra-wide border border-gold transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:shadow-gold-glow hover:-translate-y-px relative overflow-hidden"
        >
          Book Call →
        </Link>
      </div>
    </nav>
  );
}
