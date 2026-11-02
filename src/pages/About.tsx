import { Building, FileBadge2 } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import Reveal from '@/components/ui/Reveal';
import { executiveCommittee, society } from '@/data/about';

/** About the Department — society details and executive committee (aboutus.asp). */
export default function About() {
  return (
    <>
      <PageHeader title="About the Department" crumbs={[{ label: 'About Us' }]} />
      <section className="py-16 sm:py-24">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-600">{society.heading}</p>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">{society.name}</h2>
            <p className="mt-5 leading-relaxed text-ink-soft">{society.description}</p>
            <dl className="mt-8 space-y-4">
              <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-card ring-1 ring-ink/5">
                <Building className="h-6 w-6 shrink-0 text-brand-600" />
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-ink-muted">Name of society</dt>
                  <dd className="mt-1 font-semibold text-ink">{society.name}</dd>
                </div>
              </div>
              <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-card ring-1 ring-ink/5">
                <FileBadge2 className="h-6 w-6 shrink-0 text-brand-600" />
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-ink-muted">Registration incorporation</dt>
                  <dd className="mt-1 font-semibold text-ink">{society.registration}</dd>
                </div>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="font-display text-2xl font-semibold text-ink">Executive Committee Members:</h3>
            <ol className="mt-6 grid gap-4 sm:grid-cols-2">
              {executiveCommittee.map((m, i) => (
                <li key={m.name} className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-card ring-1 ring-ink/5 transition hover:-translate-y-0.5 hover:shadow-lift">
                  <span className="absolute right-5 top-4 font-display text-4xl font-semibold text-brand-50 transition-colors group-hover:text-gold-200">{i + 1}</span>
                  <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-brand-600">{m.designation}</span>
                  <p className="mt-4 text-lg font-semibold text-ink">{m.name}</p>
                  <p className="mt-1 text-sm text-ink-muted">{m.address}</p>
                  {m.society && <p className="mt-3 text-xs font-semibold text-ink-soft">{m.society}</p>}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>
    </>
  );
}
