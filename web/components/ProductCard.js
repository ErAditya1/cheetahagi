import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function ProductCard({ product }) {
  const isExternal = product.href && (product.href.startsWith('http://') || product.href.startsWith('https://'));
  const cardContent = (
    <>
      <div className="absolute top-0 left-0 right-0 h-px bg-strike scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

      <div className="flex items-center justify-between mb-6">
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-strike">
          {product.status}
        </span>
        <ArrowUpRight className="w-5 h-5 text-ink-400 group-hover:text-strike group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
      </div>

      <h3 className="font-display text-3xl font-medium text-bone mb-3 group-hover:text-strike transition-colors">
        {product.name}
      </h3>
      <p className="text-bone-dim leading-relaxed mb-8">{product.tagline}</p>

      <div className="flex flex-wrap gap-2">
        {product.tags.map((t) => (
          <span
            key={t}
            className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-400 px-2.5 py-1 border border-ink-700 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
    </>
  );

  if (isExternal) {
    return (
      <a
        href={product.href}
        target="_blank"
        rel="noopener noreferrer"
        className="surface group hover:border-strike/40 transition-all p-8 lg:p-10 block relative overflow-hidden"
      >
        {cardContent}
      </a>
    );
  }

  return (
    <Link
      href={product.href}
      className="surface group hover:border-strike/40 transition-all p-8 lg:p-10 block relative overflow-hidden"
    >
      {cardContent}
    </Link>
  );
}
