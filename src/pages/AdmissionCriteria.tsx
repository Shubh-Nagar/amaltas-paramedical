import { motion } from 'framer-motion';
import { AlertCircle, BookOpen, Check, FileText, Gavel, ListChecks, Percent, UserRound } from 'lucide-react';
import type { ReactNode } from 'react';
import PageHeader from '@/components/layout/PageHeader';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import { admissionCriteria as ac } from '@/data/academics';

function Block({ icon, title, children, delay = 0 }: { icon: ReactNode; title: string; children: ReactNode; delay?: number }) {
  return (
    <Reveal delay={delay} className="rounded-3xl bg-white p-7 shadow-card ring-1 ring-ink/5">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">{icon}</span>
        <h3 className="font-display text-xl font-semibold text-ink">{title}</h3>
      </div>
      <div className="mt-5 leading-relaxed text-ink-soft">{children}</div>
    </Reveal>
  );
}

/** Admission Criteria (academic.asp). */
export default function AdmissionCriteria() {
  return (
    <>
      <PageHeader title="Admission Criteria" crumbs={[{ label: 'Academic' }]}>
        <p className="font-bold uppercase tracking-wider text-gold-300">{ac.title}</p>
        <p className="mt-1">{ac.subtitle}</p>
      </PageHeader>

      <section className="py-16 sm:py-24">
        <div className="container">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="font-display text-xl leading-relaxed text-ink sm:text-2xl">{ac.intro}</p>
          </Reveal>

          <h2 className="mt-16 font-display text-3xl font-semibold text-ink">{ac.eligibilityHeading}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Block icon={<BookOpen className="h-5 w-5" />} title={ac.qualification.heading}>
              <p>{ac.qualification.text}</p>
              <p className="mt-4 text-sm font-semibold text-ink">{ac.qualification.subjectsLead}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {ac.qualification.subjects.map((s) => (
                  <span key={s} className="rounded-full bg-gold-100 px-3 py-1 text-sm font-bold text-ink">{s}</span>
                ))}
              </div>
            </Block>
            <Block icon={<Percent className="h-5 w-5" />} title={ac.marks.heading} delay={0.08}>
              <ul className="space-y-4">
                {ac.marks.rows.map((r) => (
                  <li key={r.label} className="rounded-2xl bg-cream p-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-600">{r.label}</p>
                    <p className="mt-1 font-semibold text-ink">{r.value}</p>
                  </li>
                ))}
              </ul>
            </Block>
            <Block icon={<UserRound className="h-5 w-5" />} title={ac.age.heading} delay={0.16}>
              <p>{ac.age.text}</p>
            </Block>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <Block icon={<ListChecks className="h-5 w-5" />} title={ac.procedure.heading}>
              <ul className="space-y-3">
                {ac.procedure.points.map((p) => (
                  <li key={p} className="flex gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-brand-600" />{p}</li>
                ))}
              </ul>
            </Block>
            <Block icon={<Gavel className="h-5 w-5" />} title={ac.rules.heading} delay={0.08}>
              <ul className="space-y-3">
                {ac.rules.points.map((p) => (
                  <li key={p} className="flex gap-3"><Check className="mt-1 h-4 w-4 shrink-0 text-brand-600" />{p}</li>
                ))}
              </ul>
            </Block>
          </div>

          <Reveal className="mt-6 overflow-hidden rounded-3xl bg-brand-600 p-8 text-white sm:p-10">
            <div className="flex items-center gap-3">
              <FileText className="h-7 w-7 text-gold-300" />
              <h3 className="font-display text-2xl font-semibold">{ac.documents.heading}</h3>
            </div>
            <p className="mt-3 text-white/85">{ac.documents.lead}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {ac.documents.items.map((d, i) => (
                <motion.li
                  key={d}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="flex items-center gap-3 rounded-xl bg-white/[0.06] px-4 py-3 ring-1 ring-white/10"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-300 text-ink"><Check className="h-3.5 w-3.5" /></span>
                  {d}
                </motion.li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mt-6 rounded-3xl border-2 border-dashed border-gold-400 bg-gold-50 p-8">
            <div className="flex items-center gap-3">
              <AlertCircle className="h-6 w-6 text-gold-600" />
              <h3 className="font-display text-xl font-semibold text-ink">{ac.note.heading}</h3>
            </div>
            <ul className="mt-4 space-y-3 text-ink-soft">
              {ac.note.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </Reveal>

          <div className="mt-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              {ac.signature.map((s, i) => (
                <p key={i} className={i === 0 ? 'font-display text-xl font-semibold text-ink' : 'text-sm text-ink-muted'}>{s}</p>
              ))}
            </div>
            <Button to="/enquiry" variant="green">Enquiry</Button>
          </div>
        </div>
      </section>
    </>
  );
}
