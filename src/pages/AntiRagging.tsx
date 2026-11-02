import { Mail, PhoneCall, ShieldAlert } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import Reveal from '@/components/ui/Reveal';
import CommitteeTable from '@/components/ui/CommitteeTable';
import PhotoGrid from '@/components/ui/PhotoGrid';
import { antiRaggingCommittees, antiRaggingHelpline as h } from '@/data/committees';

/** Antiragging Measures (antiragging.asp). */
export default function AntiRagging() {
  return (
    <>
      <PageHeader title="Antiragging Measures" docTitle="Anti-Ragging Measures" crumbs={[{ label: 'Anti-Ragging Measures' }]}>
        {h.tagline}
      </PageHeader>
      <section className="py-16 sm:py-24">
        <div className="container">
          <Reveal className="grid overflow-hidden rounded-3xl shadow-lift md:grid-cols-[auto_1fr_1fr]">
            <div className="flex items-center justify-center bg-red-600 p-8 text-white"><ShieldAlert className="h-12 w-12" /></div>
            <a href={`tel:${h.tollFree}`} className="group flex items-center gap-4 bg-white p-8 transition hover:bg-red-50">
              <PhoneCall className="h-7 w-7 shrink-0 text-red-600" />
              <span>
                <span className="block text-xs font-bold uppercase tracking-wider text-ink-muted">{h.tollFreeLabel}</span>
                <span className="mt-1 block font-display text-3xl font-semibold text-ink">{h.tollFree}</span>
              </span>
            </a>
            <a href={`mailto:${h.email}`} className="flex items-center gap-4 border-t border-ink/5 bg-white p-8 transition hover:bg-red-50 md:border-l md:border-t-0">
              <Mail className="h-7 w-7 shrink-0 text-red-600" />
              <span>
                <span className="block text-xs font-bold uppercase tracking-wider text-ink-muted">{h.emailLabel}</span>
                <span className="mt-1 block break-all font-display text-2xl font-semibold text-ink">{h.email}</span>
              </span>
            </a>
          </Reveal>

          <div className="mt-12 space-y-8">
            {antiRaggingCommittees.map((c) => <CommitteeTable key={c.title} committee={c} />)}
          </div>

          <div className="mt-16">
            <PhotoGrid images={h.posters} caption="Anti-Ragging" altPrefix="Anti-ragging notice" columnsClass="columns-1 sm:columns-2 max-w-4xl" />
          </div>
        </div>
      </section>
    </>
  );
}
