import Link from 'next/link';
import { ArrowUpRight, Clock } from 'lucide-react';

export default function BlogCard({ post, featured = false }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group block surface hover:border-strike/40 transition-all relative overflow-hidden ${
        featured ? 'lg:col-span-2 p-10 lg:p-14' : 'p-8'
      }`}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-strike scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

      <div className="flex items-center gap-4 mb-6 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-ink-400">
        <span className="text-strike">{post.category}</span>
        <span>·</span>
        <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
        <span>·</span>
        <span className="flex items-center gap-1.5">
          <Clock className="w-3 h-3" />
          {post.readTime}
        </span>
      </div>

      <h3 className={`font-display font-medium text-bone group-hover:text-strike transition-colors mb-4 leading-tight text-balance ${
        featured ? 'text-4xl lg:text-5xl' : 'text-2xl'
      }`}>
        {post.title}
      </h3>

      <p className={`text-bone-dim leading-relaxed mb-6 ${featured ? 'text-lg max-w-2xl' : 'text-sm'}`}>
        {post.excerpt}
      </p>

      <div className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-ink-400 group-hover:text-strike transition-colors">
        Read essay <ArrowUpRight className="w-3 h-3" />
      </div>
    </Link>
  );
}
