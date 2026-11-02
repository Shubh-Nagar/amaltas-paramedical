import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, ClipboardList, GraduationCap } from 'lucide-react';
import { homeIntro, homeTiles } from '@/data/home';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';

const icons = { admissions: GraduationCap, examination: ClipboardList, placement: Briefcase } as const;

/** Institute introduction + Admissions/Examination/Placement tiles from the original home page. */
export default function AboutIntro() {
  const tiles = homeTiles.filter((t) => t.key !== 'courses');
  return (
    <section className="py-20 sm:py-28">
      <div className="container grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <div>
          <SectionHeading eyebrow="Courses Offered" title={homeIntro.title} />
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:font-semibold first-letter:leading-[0.85] first-letter:text-brand-600">
              {homeIntro.body}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/courses" variant="green">Courses Offered <ArrowRight className="h-4 w-4" /></Button>
              <Button to="/about" variant="outline">About the Department</Button>
            </div>
          </Reveal>
        </div>
        <div className="grid gap-4">
          {tiles.map((t, i) => {
            const Icon = icons[t.key as keyof typeof icons];
            return (
              <motion.div
                key={t.key}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 'some' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link to={t.to} className="group flex gap-5 rounded-2xl border border-ink/5 bg-white p-6 shadow-card transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lift">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="flex-1">
                    <span className="flex items-center justify-between gap-3">
                      <span className="font-display text-xl font-semibold text-ink">{t.title}</span>
                      <ArrowRight className="h-4 w-4 -translate-x-1 text-brand-600 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                    </span>
                    <span className="mt-2 block text-[15px] leading-relaxed text-ink-muted">{t.body}</span>
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
