import { motion } from 'framer-motion';
import { CalendarDays, IndianRupee, Users } from 'lucide-react';
import type { Course } from '@/data/courses';
import { cn } from '@/lib/cn';

type Props = { course: Course; index: number; showFee?: boolean; levelLabel: string };

/** A single programme: code badge, name, duration, seats and (optionally) yearly fee. */
export default function CourseCard({ course, index, showFee = false, levelLabel }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      whileHover={{ y: -4 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink/5 bg-white p-6 shadow-card transition-shadow hover:shadow-lift"
    >
      <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-600 to-gold-300 transition-transform duration-500 group-hover:scale-x-100" />
      <div className="flex items-start justify-between gap-3">
        <span className="rounded-full bg-brand-50 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-brand-600">{course.code}</span>
        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink-muted">{levelLabel}</span>
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold leading-snug text-ink">{course.name}</h3>
      <dl className={cn('mt-auto grid gap-3 pt-6 text-sm', showFee ? 'grid-cols-1' : 'grid-cols-2')}>
        <div className="flex items-center gap-2 text-ink-soft">
          <CalendarDays className="h-4 w-4 text-brand-600" />
          <dt className="sr-only">Duration</dt>
          <dd className="font-semibold">{course.duration}</dd>
        </div>
        <div className="flex items-center gap-2 text-ink-soft">
          <Users className="h-4 w-4 text-brand-600" />
          <dt className="sr-only">Seats</dt>
          <dd className="font-semibold">{course.seats}</dd>
        </div>
        {showFee && (
          <div className="mt-1 flex items-center gap-2 rounded-xl bg-gold-50 px-3 py-2.5 text-ink">
            <IndianRupee className="h-4 w-4 text-gold-600" />
            <dt className="sr-only">Fee</dt>
            <dd className="font-bold">{course.fee}</dd>
          </div>
        )}
      </dl>
    </motion.article>
  );
}
