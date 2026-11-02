import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BookOpen, HeartPulse } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import Reveal from '@/components/ui/Reveal';
import { calendar } from '@/data/academics';
import { cn } from '@/lib/cn';

/** Academic Calendar (academic_calendar.asp) with a month picker. */
export default function AcademicCalendar() {
  const [active, setActive] = useState(0);
  const month = calendar.months[active];

  return (
    <>
      <PageHeader title="Academic Calendar" crumbs={[{ label: 'Academic' }]}>
        <p>{calendar.title}</p>
        <p className="mt-1 font-bold text-gold-300">{calendar.session}</p>
      </PageHeader>

      <section className="py-16 sm:py-24">
        <div className="container">
          {/* Month selector */}
          <div className="-mx-4 overflow-x-auto px-4 pb-2" role="tablist" aria-label="Months">
            <div className="flex w-max gap-2">
              {calendar.months.map((m, i) => (
                <button
                  key={m.month}
                  role="tab"
                  aria-selected={i === active}
                  onClick={() => setActive(i)}
                  className={cn('relative rounded-full px-5 py-2.5 text-sm font-bold transition', i === active ? 'text-ink' : 'bg-white text-ink-soft ring-1 ring-ink/10 hover:ring-brand-300')}
                >
                  {i === active && <motion.span layoutId="month-pill" className="absolute inset-0 rounded-full bg-gold-300" />}
                  <span className="relative">{m.month.replace(' 2026', '')}</span>
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={month.month} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }} className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl bg-white p-8 shadow-card ring-1 ring-ink/5">
                <p className="font-display text-3xl font-semibold text-ink">{month.month}</p>
                <h3 className="mt-6 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-600"><BookOpen className="h-4 w-4" /> Academic Activities</h3>
                <ul className="mt-4 space-y-3">
                  {month.academic.map((a) => (
                    <li key={a} className="flex gap-3 text-ink-soft"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />{a}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl bg-brand-600 p-8 text-white shadow-lift">
                <h3 className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-gold-300"><HeartPulse className="h-4 w-4" /> Health Days / Co-curricular Activities</h3>
                <ul className="mt-6 space-y-3">
                  {month.health.map((h) => (
                    <li key={h} className="flex gap-3 text-white/85"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-300" />{h}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Full-year table for quick scanning / printing */}
          <Reveal className="mt-16 overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-ink/5">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead className="bg-brand-50/70 text-[11px] uppercase tracking-[0.14em] text-ink-muted">
                  <tr>
                    <th className="px-6 py-4 font-bold">Month</th>
                    <th className="px-6 py-4 font-bold">Academic Activities</th>
                    <th className="px-6 py-4 font-bold">Health Days / Co-curricular Activities</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink/5 align-top">
                  {calendar.months.map((m) => (
                    <tr key={m.month}>
                      <td className="whitespace-nowrap px-6 py-4 font-semibold text-ink">{m.month}</td>
                      <td className="px-6 py-4 text-ink-soft">{m.academic.map((a) => <p key={a}>• {a}</p>)}</td>
                      <td className="px-6 py-4 text-ink-soft">{m.health.map((h) => <p key={h}>• {h}</p>)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">{calendar.majorEventsTitle}</h2>
              <ol className="relative mt-8 space-y-5 border-l-2 border-brand-100 pl-6">
                {calendar.majorEvents.map((e) => (
                  <li key={e.activity} className="relative">
                    <span className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-brand-600 ring-2 ring-brand-100" />
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-600">{e.schedule}</p>
                    <p className="mt-0.5 font-semibold text-ink">{e.activity}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">{calendar.healthActivitiesTitle}</h2>
              <div className="mt-8 flex flex-wrap gap-2">
                {calendar.healthActivities.map((h) => (
                  <span key={h} className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-soft ring-1 ring-ink/10">{h}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
