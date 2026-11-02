import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';
import { totalProgrammes, totalSeats } from '@/data/courses';

/** Count-up figure. */
function Counter({ value, format = (n: number) => String(n) }: { value: number; format?: (n: number) => string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, value, { duration: 1.6, ease: 'easeOut', onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, value]);
  return <span ref={ref}>{format(n)}</span>;
}

/**
 * Key figures. All values are taken (or summed) from the site's own content:
 * programmes & seats from courses.asp, books from library.asp.
 */
export default function StatsStrip() {
  const stats = [
    { value: totalProgrammes, label: 'Programmes', sub: 'Degree · Diploma · Certificate' },
    { value: totalSeats, label: 'Seats', sub: 'Across all courses' },
    { value: 11795, label: 'Books', sub: 'Central Library', format: (n: number) => n.toLocaleString('en-IN') },
    { value: 106, label: 'Journals', sub: 'Indian & Foreign · Central Library' },
  ];
  return (
    <section className="relative z-10 -mt-16 px-4 sm:px-6">
      <div className="container grid grid-cols-2 overflow-hidden rounded-3xl bg-white shadow-lift ring-1 ring-ink/5 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.label} className={`p-6 sm:p-8 ${i % 2 === 1 ? 'border-l' : ''} ${i >= 2 ? 'border-t lg:border-t-0' : ''} ${i === 2 ? 'lg:border-l' : ''} border-ink/5`}>
            <p className="font-display text-4xl font-semibold tracking-tight text-brand-600 sm:text-5xl">
              <Counter value={s.value} format={s.format} />
            </p>
            <p className="mt-2 text-sm font-bold text-ink">{s.label}</p>
            <p className="text-xs text-ink-muted">{s.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
