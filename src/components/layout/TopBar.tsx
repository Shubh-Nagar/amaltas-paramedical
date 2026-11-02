import { Mail, Phone } from 'lucide-react';
import { contact, socials } from '@/data/site';
import { FacebookIcon, InstagramIcon } from '@/components/ui/BrandIcons';

/** Slim utility bar: e-mail, phones and social links (from the original header). */
export default function TopBar() {
  return (
    <div className="hidden bg-brand-600 text-[13px] text-white/80 md:block">
      <div className="container flex h-10 items-center justify-between">
        <div className="flex items-center gap-6">
          <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 hover:text-gold-300">
            <Mail className="h-3.5 w-3.5 text-gold-300" />
            <span className="sr-only">Email us:</span>
            {contact.email}
          </a>
          <span className="inline-flex items-center gap-2">
            <Phone className="h-3.5 w-3.5 text-gold-300" />
            <span className="sr-only">Call us:</span>
            {contact.phones.map((p, i) => (
              <span key={p}>
                <a href={`tel:+91${p}`} className="hover:text-gold-300">{p}</a>
                {i < contact.phones.length - 1 && ', '}
              </span>
            ))}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <a href={socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-full p-1.5 hover:bg-white/10 hover:text-gold-300">
            <FacebookIcon className="h-4 w-4" />
          </a>
          <a href={socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full p-1.5 hover:bg-white/10 hover:text-gold-300">
            <InstagramIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
