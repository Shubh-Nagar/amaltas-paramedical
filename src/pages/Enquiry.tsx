import { Download, Mail, Phone } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import EnquiryForm from '@/components/EnquiryForm';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import { courseLevels } from '@/data/courses';
import { contact, institute } from '@/data/site';

/** Enquiry (enquiry.asp). */
export default function Enquiry() {
  return (
    <>
      <PageHeader title="Enquiry" />
      <section className="py-16 sm:py-24">
        <div className="container grid gap-10 lg:grid-cols-[1.25fr_1fr]">
          <Reveal className="rounded-[2rem] bg-white p-6 shadow-lift ring-1 ring-ink/5 sm:p-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-600">Admission Open</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink">Enquiry</h2>
            <div className="mt-8"><EnquiryForm /></div>
          </Reveal>
          <Reveal delay={0.1} className="space-y-6">
            <div className="rounded-3xl bg-brand-600 p-8 text-white">
              <h3 className="font-display text-xl font-semibold">Courses Offered</h3>
              <div className="mt-5 space-y-5">
                {courseLevels.map((l) => (
                  <div key={l.key}>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-300">{l.title}</p>
                    <p className="mt-1.5 text-sm text-white/80">{l.courses.map((c) => c.name).join(' · ')}</p>
                  </div>
                ))}
              </div>
              <Button to={institute.brochure} file variant="gold" className="mt-7"><Download className="h-4 w-4" /> Brochure</Button>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-card ring-1 ring-ink/5">
              <a href={`tel:+91${contact.phones[0]}`} className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-300"><Phone className="h-5 w-5" /></span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-wider text-ink-muted">Call Us</span>
                  <span className="font-semibold text-ink">{contact.phones.join(', ')}</span>
                </span>
              </a>
              <a href={`mailto:${contact.email}`} className="mt-5 flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand-600"><Mail className="h-5 w-5" /></span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-wider text-ink-muted">Email Us</span>
                  <span className="break-all font-semibold text-ink">{contact.email}</span>
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
