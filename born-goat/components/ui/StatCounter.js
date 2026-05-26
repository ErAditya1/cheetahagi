'use client';

import { useEffect, useRef, useState } from 'react';

export default function StatCounter({ value, suffix = '', className = '' }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState('0' + suffix);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const numeric = parseInt(String(value).replace(/[^0-9]/g, ''), 10);
    if (isNaN(numeric)) {
      setDisplay(value + suffix);
      return;
    }
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            let current = 0;
            const step = Math.max(1, numeric / 40);
            const tick = () => {
              current += step;
              if (current >= numeric) {
                setDisplay(value + suffix);
              } else {
                setDisplay(Math.floor(current) + suffix);
                requestAnimationFrame(tick);
              }
            };
            tick();
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, suffix]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
