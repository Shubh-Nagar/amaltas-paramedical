import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { courseLevels } from '@/data/courses';
import SectionHeading from '@/components/ui/SectionHeading';
import Img from '@/components/ui/Img';
import Button from '@/components/ui/Button';

/** Degree / Diploma / Certificate overview with each programme's duration. */
export default function Programmes() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />
      <div className="container">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Admissions & Fees" title={<>Degree, Diploma <span className="italic text-brand-600">&amp;</span> Certificate Courses</>} />
          <Button to="/fees" variant="outline" className="shrink-0">View fees &amp; seats <ArrowRight className="h-4 w-4" /></Button>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {courseLevels.map((level, i) => (
            <motion.article
              key={level.key}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 'some' }}
              transition={{ duration: 0.65, delay: i * 0.12 }}
              className="group flex flex-col overflow-hidden rounded-3xl bg-cream ring-1 ring-ink/5"
            >
              <div className="relative h-44 overflow-hidden">
                <Img src={level.image} alt={level.title} wrapperClassName="h-full w-full" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute inset-0 bg-gradient-to-t from-brand-900/85 to-brand-900/10" />
                <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between text-white">
                  <h3 className="font-display text-2xl font-semibold">{level.title}</h3>
                  <span className="font-display text-5xl font-semibold leading-none text-gold-300/90">0{i + 1}</span>
                </div>
              </div>
              <ul className="flex-1 divide-y divide-ink/5 px-5 py-2">
                {level.courses.map((c) => (
                  <li key={c.name + c.code} className="flex items-center justify-between gap-4 py-4">
                    <div>
                      <p className="font-semibold text-ink">{c.name}</p>
                      <p className="mt-0.5 text-xs font-bold uppercase tracking-wider text-brand-600">{c.code}</p>
                    </div>
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-bold text-ink-soft ring-1 ring-ink/5">
                      <CalendarDays className="h-3.5 w-3.5 text-brand-600" /> {c.duration}
                    </span>
                  </li>
                ))}
              </ul>
              <Link to="/courses" className="flex items-center justify-between border-t border-ink/5 px-5 py-4 text-sm font-bold text-brand-600 transition-colors hover:bg-brand-50">
                Course details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
