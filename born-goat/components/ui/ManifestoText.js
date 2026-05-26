'use client';

import { useEffect, useRef } from 'react';

export default function ManifestoText() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const spans = el.querySelectorAll('span');
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            spans.forEach((s, i) =>
              setTimeout(() => s.classList.add('lit'), i * 280)
            );
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <p
      ref={ref}
      className="font-display text-[clamp(34px,5.5vw,84px)] leading-[1.1] tracking-cinematic uppercase max-w-[1300px] relative z-[5]"
    >
      <style jsx>{`
        span {
          color: #5a5e64;
          transition: color 0.7s ease, text-shadow 0.7s ease;
        }
        :global(.lit) {
          color: #ffffff !important;
        }
        .gold-emph {
          color: #9d7b35;
          font-style: italic;
        }
        :global(.gold-emph.lit) {
          color: #d4a84f !important;
          text-shadow: 0 0 50px rgba(212, 168, 79, 0.4);
        }
      `}</style>
      <span>GREATNESS IS NOT AN ACCIDENT.</span>{' '}
      <span className="gold-emph">IT IS A SYSTEM —</span>{' '}
      <span>BUILT WITH THE DISCIPLINE OF AN ATHLETE,</span>{' '}
      <span className="gold-emph">THE PATIENCE OF A CRAFTSMAN,</span>{' '}
      <span>
        AND THE TIMING OF A STRATEGIST WHO KNOWS WHEN CULTURE TURNS ITS HEAD.
      </span>
    </p>
  );
}
