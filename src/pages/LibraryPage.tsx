import { motion } from 'framer-motion';
import { BookOpen, Camera, Check, Clock, Library as LibraryIcon } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import Reveal from '@/components/ui/Reveal';
import { library as L } from '@/data/infrastructure';

function List({ heading, items }: { heading: string; items: string[] }) {
  return (
    <Reveal className="rounded-3xl bg-white p-7 shadow-card ring-1 ring-ink/5">
      <h3 className="font-display text-xl font-semibold text-ink">{heading}</h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((i) => (
          <li key={i} className="flex gap-3 text-ink-soft"><Check className="mt-1 h-4 w-4 shrink-0 text-brand-600" />{i}</li>
        ))}
      </ul>
    </Reveal>
  );
}

function DataCard({ heading, rows, dark }: { heading: string; rows: string[][]; dark?: boolean }) {
  return (
    <Reveal className={dark ? 'rounded-3xl bg-brand-600 p-8 text-white shadow-lift' : 'rounded-3xl bg-gold-50 p-8 ring-1 ring-gold-200'}>
      <h3 className={`text-xs font-extrabold uppercase tracking-[0.18em] ${dark ? 'text-gold-300' : 'text-brand-600'}`}>{heading}</h3>
      <dl className="mt-6 grid grid-cols-2 gap-6">
        {rows.map(([k, v], i) => (
          <motion.div key={k} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
            <dd className={`font-display text-4xl font-semibold ${dark ? 'text-white' : 'text-brand-600'}`}>{v}</dd>
            <dt className={`mt-1 text-sm ${dark ? 'text-white/85' : 'text-ink-muted'}`}>{k}</dt>
          </motion.div>
        ))}
      </dl>
    </Reveal>
  );
}

/** Library (library.asp). */
export default function LibraryPage() {
  return (
    <>
      <PageHeader title="Library" crumbs={[{ label: 'Infrastructure', to: '/infrastructure' }]} />
      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal className="rounded-3xl bg-white p-8 shadow-card ring-1 ring-ink/5">
              <LibraryIcon className="h-9 w-9 text-brand-600" strokeWidth={1.5} />
              <h2 className="mt-5 font-display text-2xl font-semibold text-ink">{L.central.heading}</h2>
              <p className="mt-3 leading-relaxed text-ink-soft">{L.central.text}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {L.timings.map((t) => (
                  <span key={t.label} className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-600">
                    <Clock className="h-4 w-4" /> {t.label} : {t.value}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.08} className="rounded-3xl bg-white p-8 shadow-card ring-1 ring-ink/5">
              <BookOpen className="h-9 w-9 text-brand-600" strokeWidth={1.5} />
              <h2 className="mt-5 font-display text-2xl font-semibold text-ink">{L.college.heading}</h2>
              <p className="mt-3 leading-relaxed text-ink-soft">{L.college.text}</p>
            </Reveal>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <DataCard heading={L.centralData.heading} rows={L.centralData.rows} dark />
            <DataCard heading={L.collegeData.heading} rows={L.collegeData.rows} />
          </div>

          <Reveal className="mt-16">
            <h2 className="font-display text-3xl font-semibold text-ink">{L.specsHeading}</h2>
            <div className="mt-6 overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-ink/5">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[520px] text-left text-sm">
                  <thead className="bg-brand-50/70 text-[11px] uppercase tracking-[0.14em] text-ink-muted">
                    <tr>{L.specColumns.map((c) => <th key={c} className="px-6 py-4 font-bold">{c}</th>)}</tr>
                  </thead>
                  <tbody className="divide-y divide-ink/5">
                    {L.specs.map(([s, a, c]) => (
                      <tr key={s} className="hover:bg-gold-50/60">
                        <td className="px-6 py-3.5 font-semibold text-ink">{s}</td>
                        <td className="px-6 py-3.5 tabular-nums text-ink-soft">{a}</td>
                        <td className="px-6 py-3.5 tabular-nums text-ink-soft">{c}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <List heading={L.facilities.heading} items={L.facilities.items} />
            <List heading={L.journalSection.heading} items={L.journalSection.items} />
            <List heading={L.eLibrary.heading} items={L.eLibrary.items} />
          </div>

          <Reveal className="mt-6 flex gap-5 rounded-3xl bg-brand-50 p-8">
            <Camera className="h-8 w-8 shrink-0 text-brand-600" strokeWidth={1.5} />
            <div>
              <h3 className="font-display text-xl font-semibold text-ink">{L.photography.heading}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{L.photography.text}</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
