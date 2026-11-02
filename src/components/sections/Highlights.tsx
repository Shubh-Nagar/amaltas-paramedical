import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Landmark, ShieldCheck, Microscope } from 'lucide-react';
import { homeHighlights } from '@/data/home';
import SectionHeading from '@/components/ui/SectionHeading';

const icons = [Landmark, ShieldCheck, Microscope];

/** "Departments" block from the original home page: Affiliations, Anti-Ragging, Infrastructure. */
export default function Highlights() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <SectionHeading eyebrow="Departments" title={<>Affiliations, <span className="whitespace-nowrap">Anti-Ragging</span> &amp; Infrastructure</>} align="center" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {homeHighlights.map((h, i) => {
            const Icon = icons[i];
            const dark = i === 1;
            return (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 'some' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link
                  to={h.to}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 ${dark ? 'bg-brand-600 text-white shadow-lift' : 'bg-white text-ink shadow-card ring-1 ring-ink/5 hover:shadow-lift'}`}
                >
                  <span className={`absolute -right-10 -top-10 h-40 w-40 rounded-full transition-transform duration-700 group-hover:scale-125 ${dark ? 'bg-gold-300/15' : 'bg-brand-50'}`} />
                  <Icon className={`relative h-10 w-10 ${dark ? 'text-gold-300' : 'text-brand-600'}`} strokeWidth={1.5} />
                  <h3 className="relative mt-8 font-display text-2xl font-semibold">{h.title}</h3>
                  <p className={`relative mt-3 flex-1 leading-relaxed ${dark ? 'text-white/80' : 'text-ink-muted'}`}>{h.body}</p>
                  <span className={`relative mt-8 inline-flex items-center gap-2 text-sm font-bold ${dark ? 'text-gold-300' : 'text-brand-600'}`}>
                    Read More <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
