import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import EnquiryForm from '@/components/EnquiryForm';
import Reveal from '@/components/ui/Reveal';
import { contact, socials } from '@/data/site';
import { FacebookIcon, InstagramIcon } from '@/components/ui/BrandIcons';

/** Contact — address, phone, e-mail and map from the original footer, plus the enquiry form. */
export default function Contact() {
  const cards = [
    { icon: MapPin, label: 'Get In Touch', body: contact.addressLines.join(' '), href: contact.mapUrl },
    { icon: Phone, label: 'Call Us', body: contact.phones.join(', '), href: `tel:+91${contact.phones[0]}` },
    { icon: Mail, label: 'Email Us', body: contact.email, href: `mailto:${contact.email}` },
  ];
  return (
    <>
      <PageHeader title="Contact" />
      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-3">
            {cards.map(({ icon: Icon, label, body, href }, i) => (
              <Reveal key={label} delay={i * 0.08}>
                <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="group flex h-full flex-col rounded-3xl bg-white p-7 shadow-card ring-1 ring-ink/5 transition hover:-translate-y-1 hover:shadow-lift">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-white transition group-hover:bg-gold-300 group-hover:text-ink"><Icon className="h-5 w-5" /></span>
                  <span className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-ink-muted">{label}</span>
                  <span className="mt-2 break-words font-semibold leading-relaxed text-ink">{body}</span>
                </a>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <Reveal className="overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-ink/5">
              <iframe title="Map — Amaltas Institute of Medical Sciences, Dewas" src={contact.mapEmbed} className="h-[420px] w-full lg:h-full lg:min-h-[520px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </Reveal>
            <Reveal delay={0.1} className="rounded-[2rem] bg-white p-6 shadow-card ring-1 ring-ink/5 sm:p-10">
              <h2 className="font-display text-3xl font-semibold text-ink">Enquiry</h2>
              <div className="mt-8"><EnquiryForm compact /></div>
              <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-ink/5 pt-6">
                <a href={socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-600 hover:bg-brand-600 hover:text-white"><FacebookIcon className="h-4 w-4" /></a>
                <a href={socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 text-brand-600 hover:bg-brand-600 hover:text-white"><InstagramIcon className="h-4 w-4" /></a>
                <a href={contact.externalContactUrl} target="_blank" rel="noopener noreferrer" className="ml-auto inline-flex items-center gap-1 text-sm font-bold text-brand-600 hover:underline">
                  amaltasmedicalcollege.in/contact <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
