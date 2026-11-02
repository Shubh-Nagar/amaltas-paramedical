import { ArrowUpRight, Download, Phone } from 'lucide-react';
import { contact, institute } from '@/data/site';
import Button from '@/components/ui/Button';
import AmaltasBloom from '@/components/ui/AmaltasBloom';
import Reveal from '@/components/ui/Reveal';

/** Site-wide conversion band shown above the footer on every page. */
export default function AdmissionBand() {
  return (
    <section className="relative z-10 -mb-24 px-4 sm:px-6">
      <Reveal className="container relative overflow-hidden rounded-[2rem] bg-gold-300 px-6 py-10 shadow-lift sm:px-12 sm:py-12">
        <AmaltasBloom className="absolute -top-2 right-10 hidden h-64 text-gold-50 sm:block" length={7} />
        <AmaltasBloom className="absolute -top-2 right-28 hidden h-44 text-white/70 md:block" length={5} delay={1.2} />
        <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-brand-800">Admission Open</p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Degree, Diploma &amp; Certificate Courses
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end lg:pr-36">
            <Button to="/enquiry" variant="green">
              Enquiry <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Button>
            <Button to={institute.brochure} file variant="outline" className="!border-ink/20 !bg-white/60">
              <Download className="h-4 w-4" /> Brochure
            </Button>
            <a href={`tel:+91${contact.phones[0]}`} className="inline-flex items-center gap-2 px-2 py-3 text-sm font-bold text-ink">
              <Phone className="h-4 w-4" /> {contact.phones[0]}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
