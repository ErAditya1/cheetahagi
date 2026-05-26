'use client';

import Link from 'next/link';

const baseClasses =
  'inline-flex items-center gap-3 px-8 py-[18px] font-mono text-xs font-bold uppercase tracking-extra-wide cursor-pointer transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden';

const variants = {
  primary:
    'bg-grad-gold text-obsidian border border-gold hover:shadow-gold-glow-lg hover:-translate-y-0.5',
  ghost:
    'bg-transparent text-white border border-titanium-deep hover:border-gold hover:text-gold hover:shadow-electric-glow'
};

export default function Button({
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  className = '',
  children,
  ...props
}) {
  const classes = `${baseClasses} ${variants[variant] || variants.primary} ${className}`;

  const content = (
    <>
      {variant === 'primary' && (
        <span
          className="absolute top-0 -left-full h-full w-full pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)',
            transition: 'left 0.6s ease'
          }}
          aria-hidden="true"
        />
      )}
      <span className="relative z-[1] inline-flex items-center gap-3">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        onMouseEnter={e => {
          const shimmer = e.currentTarget.querySelector('span[aria-hidden]');
          if (shimmer) shimmer.style.left = '100%';
        }}
        onMouseLeave={e => {
          const shimmer = e.currentTarget.querySelector('span[aria-hidden]');
          if (shimmer) shimmer.style.left = '-100%';
        }}
        {...props}
      >
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {content}
    </button>
  );
}
