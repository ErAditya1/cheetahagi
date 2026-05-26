import Link from 'next/link';

export default function PageHero({ crumbs = [], eyebrow, title, italicWord, lede }) {
  return (
    <header className="pt-[200px] pb-[100px] max-md:pt-32 max-md:pb-16 relative overflow-hidden border-b border-line">
      <div
        className="absolute -top-[20%] -right-[15%] w-[70vw] h-[70vw] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(212,168,79,0.4) 0%, transparent 55%)',
          opacity: 0.5,
          filter: 'blur(80px)'
        }}
      />
      <div
        className="absolute -bottom-[30%] -left-[15%] w-[60vw] h-[60vw] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(59,130,246,0.35) 0%, transparent 60%)',
          opacity: 0.3,
          filter: 'blur(100px)'
        }}
      />
      <div className="max-w-[1400px] mx-auto px-10 max-sm:px-[22px] relative z-[5]">
        {crumbs.length > 0 && (
          <div className="font-mono text-[11px] tracking-extra-wide uppercase text-titanium-deep mb-8">
            {crumbs.map((c, i) => (
              <span key={i}>
                {c.href ? (
                  <Link href={c.href} className="hover:text-gold transition-colors">
                    {c.label}
                  </Link>
                ) : (
                  <span>{c.label}</span>
                )}
                {i < crumbs.length - 1 && <span className="text-gold mx-3">/</span>}
              </span>
            ))}
          </div>
        )}
        {eyebrow && (
          <span className="eyebrow mb-8 inline-flex">{eyebrow}</span>
        )}
        <h1
          className="font-display text-[clamp(64px,11vw,180px)] leading-[0.9] tracking-cinematic uppercase max-w-[1200px]"
          dangerouslySetInnerHTML={{
            __html: italicWord
              ? title.replace(italicWord, `<span class="text-gold">${italicWord}</span>`)
              : title
          }}
        />
        {lede && (
          <p className="mt-9 text-[18px] text-titanium max-w-[680px] leading-[1.65]">
            {lede}
          </p>
        )}
      </div>
    </header>
  );
}
