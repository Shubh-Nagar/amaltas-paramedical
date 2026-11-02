import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, FlaskConical, Library, Stethoscope } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import Img from '@/components/ui/Img';
import { clinicalImages, infrastructureIntro, infrastructureLinks } from '@/data/infrastructure';

const icons = { clinical: Stethoscope, library: Library, preclinical: FlaskConical } as const;

/** Infrastructure overview (infrastructure.asp) linking to its three sub-pages. */
export default function Infrastructure() {
  return (
    <>
      <PageHeader title="Infrastructure">{infrastructureIntro}</PageHeader>
      <section className="py-16 sm:py-24">
        <div className="container grid gap-6 md:grid-cols-3">
          {infrastructureLinks.map((l, i) => {
            const Icon = icons[l.key as keyof typeof icons];
            return (
              <motion.div key={l.to} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}>
                <Link to={l.to} className="group relative flex h-full min-h-[300px] flex-col justify-end overflow-hidden rounded-3xl bg-brand-600 p-8 text-white shadow-lift">
                  {l.key === 'clinical' && (
                    <>
                      <Img src={clinicalImages[0]} alt="" wrapperClassName="absolute inset-0 !bg-brand-600" className="h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" />
                      <span className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/40 to-transparent" />
                    </>
                  )}
                  {l.key !== 'clinical' && <span className="absolute -right-12 -top-12 h-52 w-52 rounded-full bg-gold-300/10 transition-transform duration-700 group-hover:scale-125" />}
                  <Icon className="relative h-10 w-10 text-gold-300" strokeWidth={1.5} />
                  <h2 className="relative mt-6 font-display text-3xl font-semibold">{l.title}</h2>
                  <span className="relative mt-4 inline-flex items-center gap-2 text-sm font-bold text-gold-300">
                    Explore <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}
