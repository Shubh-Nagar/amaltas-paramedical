import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import EventCard from '@/components/EventCard';
import { events } from '@/data/events';
import { cn } from '@/lib/cn';

const yearOf = (d?: string) => d?.match(/(20\d{2})/)?.[1];

/** Events / Activities (events.asp) with year filter and search. */
export default function Events() {
  const years = useMemo(() => [...new Set(events.map((e) => yearOf(e.date)).filter(Boolean))] as string[], []);
  const [year, setYear] = useState<string>('All');
  const [q, setQ] = useState('');

  const list = events.filter((e) => (year === 'All' || yearOf(e.date) === year) && e.title.toLowerCase().includes(q.trim().toLowerCase()));

  return (
    <>
      <PageHeader title="Events/Activities" docTitle="Event / Activities" />
      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by year">
              {['All', ...years].map((y) => (
                <button key={y} onClick={() => setYear(y)} aria-pressed={year === y} className={cn('rounded-full px-5 py-2 text-sm font-bold transition', year === y ? 'bg-brand-600 text-white' : 'bg-white text-ink-soft ring-1 ring-ink/10 hover:ring-brand-300')}>
                  {y}
                </button>
              ))}
            </div>
            <label className="relative block md:w-80">
              <span className="sr-only">Search events</span>
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search events" className="w-full rounded-full border border-ink/10 bg-white py-2.5 pl-11 pr-4 text-sm outline-none transition focus:border-brand-600 focus:ring-4 focus:ring-brand-100" />
            </label>
          </div>
          <p className="mt-6 text-sm text-ink-muted">{list.length} of {events.length}</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((e, i) => <EventCard key={e.slug} e={e} index={i} />)}
          </div>
          {list.length === 0 && <p className="py-20 text-center text-ink-muted">No matching events.</p>}
        </div>
      </section>
    </>
  );
}
