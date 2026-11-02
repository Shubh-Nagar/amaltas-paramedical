import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Presentation } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import Reveal from '@/components/ui/Reveal';
import InfoLines from '@/components/ui/InfoLines';
import { lectureTheatres, preClinicalDepartments, preClinicalHeading } from '@/data/infrastructure';
import { cn } from '@/lib/cn';

/** Pre-Clinical Departments (preclinical.asp) — tabbed by department. */
export default function PreClinical() {
  const [tab, setTab] = useState(preClinicalDepartments[0].id);
  const dept = preClinicalDepartments.find((d) => d.id === tab)!;

  return (
    <>
      <PageHeader title="Pre-Clinical Departments" crumbs={[{ label: 'Infrastructure', to: '/infrastructure' }]}>
        {preClinicalHeading}
      </PageHeader>
      <section className="py-16 sm:py-24">
        <div className="container">
          <Reveal className="grid gap-6 rounded-3xl bg-brand-600 p-8 text-white shadow-lift md:grid-cols-[auto_1fr_1fr] md:items-start sm:p-10">
            <Presentation className="h-10 w-10 text-gold-300" strokeWidth={1.5} />
            {lectureTheatres.map((s) => (
              <div key={s.heading}>
                <h2 className="font-display text-xl font-semibold text-gold-300">{s.heading}</h2>
                <ul className="mt-3 space-y-2 text-white/85">
                  {s.lines.map((l) => <li key={l}>{l}</li>)}
                </ul>
              </div>
            ))}
          </Reveal>

          <div className="sticky top-[72px] z-20 -mx-4 mt-14 bg-cream/90 px-4 py-3 backdrop-blur lg:top-20">
            <div role="tablist" aria-label="Departments" className="flex gap-2 overflow-x-auto">
              {preClinicalDepartments.map((d) => (
                <button
                  key={d.id}
                  role="tab"
                  aria-selected={d.id === tab}
                  onClick={() => setTab(d.id)}
                  className={cn('relative shrink-0 rounded-full px-5 py-2.5 text-sm font-bold transition', d.id === tab ? 'text-white' : 'bg-white text-ink-soft ring-1 ring-ink/10 hover:ring-brand-300')}
                >
                  {d.id === tab && <motion.span layoutId="dept-pill" className="absolute inset-0 rounded-full bg-brand-600" />}
                  <span className="relative">{d.title.replace(/:$/, '')}</span>
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={dept.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <h2 className="mt-8 font-display text-3xl font-semibold text-ink">{dept.title}</h2>
              <div className="mt-8 columns-1 gap-6 md:columns-2 xl:columns-3">
                {dept.sections.map((s) => (
                  <div key={s.heading} className="mb-6 break-inside-avoid rounded-3xl bg-white p-6 shadow-card ring-1 ring-ink/5">
                    <h3 className="border-b border-gold-300 pb-3 font-display text-lg font-semibold text-brand-600">{s.heading}</h3>
                    <InfoLines lines={s.lines} className="mt-2" />
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
