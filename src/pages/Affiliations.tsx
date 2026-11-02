import { BadgeCheck } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import Reveal from '@/components/ui/Reveal';
import Img from '@/components/ui/Img';
import { affiliation } from '@/data/academics';

/** Affiliation & Permission + Examination (supporting_aff_lic.asp). */
export default function Affiliations() {
  return (
    <>
      <PageHeader title={affiliation.title} docTitle="Affiliations & Permission" />
      <section className="py-16 sm:py-24">
        <div className="container grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-3xl bg-brand-600 p-8 text-white shadow-lift sm:p-10">
            <BadgeCheck className="h-10 w-10 text-gold-300" strokeWidth={1.5} />
            <h2 className="mt-6 font-display text-3xl font-semibold">Affiliations &amp; Permission</h2>
            <p className="mt-4 text-lg leading-relaxed text-white/85">{affiliation.statement}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {['M.P. Paramedical Council, Bhopal', 'MPMSU University, Jabalpur'].map((b) => (
                <div key={b} className="rounded-2xl bg-white/[0.07] p-4 font-semibold ring-1 ring-white/10">{b}</div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="rounded-3xl bg-white p-8 shadow-card ring-1 ring-ink/5 sm:p-10">
            <div className="flex items-center gap-4">
              <Img src={affiliation.examination.icon} alt="" wrapperClassName="h-14 w-14 rounded-xl !bg-gold-50" className="h-full w-full object-contain p-2" />
              <h2 className="font-display text-3xl font-semibold text-ink">{affiliation.examination.title}</h2>
            </div>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">{affiliation.examination.text}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
