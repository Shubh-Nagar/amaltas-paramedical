import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { contact, footerColumns, footerNote, institute, socials } from '@/data/site';
import { FacebookIcon, InstagramIcon } from '@/components/ui/BrandIcons';
import PulseLine from '@/components/ui/PulseLine';
import NavItemLink from './NavItemLink';
import { asset } from '@/lib/asset';

/** Footer — same link groups and contact block as the original site. */
export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-600 bg-grain pb-14 pt-40 text-white/85 md:pb-0">
      <PulseLine className="absolute inset-x-0 top-28 h-16 w-full text-brand-400/60" />
      <div className="container relative grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.4fr]">
        <div>
          <Link to="/" className="inline-block rounded-2xl bg-white px-4 py-3" aria-label="Home">
            <img src={asset(institute.logo)} alt={institute.name} className="h-10 w-auto" />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            Amaltas Institute of Medical Sciences (Paramedical Science) was established in the year 2016.
          </p>
          <a href={institute.universityUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block rounded-xl bg-white p-2" aria-label="Amaltas University">
            <img src={asset(institute.universityLogo)} alt="Amaltas University" className="h-9 w-auto" />
          </a>
        </div>
        {footerColumns.map((col) => (
          <div key={col.title}>
            <h3 className="mb-5 text-[12px] font-extrabold uppercase tracking-[0.2em] text-gold-300">{col.title}</h3>
            <ul className="space-y-2.5 text-sm">
              {col.links.map((l) => (
                <li key={l.label}>
                  <NavItemLink item={l} className="transition-colors hover:text-white" />
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h3 className="mb-5 text-[12px] font-extrabold uppercase tracking-[0.2em] text-gold-300">Get In Touch</h3>
          <a href={contact.mapUrl} target="_blank" rel="noopener noreferrer" className="flex gap-3 text-sm leading-relaxed hover:text-white">
            <MapPin className="mt-1 h-4 w-4 shrink-0 text-gold-300" />
            <span>
              {contact.addressLines.map((l) => (
                <span key={l} className="block">{l}</span>
              ))}
            </span>
          </a>
          <p className="mt-4 flex gap-3 text-sm">
            <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
            <span>
              {contact.phones.map((p, i) => (
                <span key={p}>
                  <a href={`tel:+91${p}`} className="hover:text-white">{p}</a>
                  {i < contact.phones.length - 1 && ', '}
                </span>
              ))}
            </span>
          </p>
          <a href={`mailto:${contact.email}`} className="mt-3 flex gap-3 break-all text-sm hover:text-white">
            <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" /> {contact.email}
          </a>
          <div className="mt-6 flex gap-2">
            <a href={socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-gold-300 hover:bg-gold-300 hover:text-ink">
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a href={socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-gold-300 hover:bg-gold-300 hover:text-ink">
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-2 py-6 text-xs text-white/80 sm:flex-row sm:items-center sm:justify-between">
          <p>{footerNote.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
