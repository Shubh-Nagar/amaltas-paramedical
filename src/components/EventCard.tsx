import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarDays, Images } from 'lucide-react';
import type { EventItem } from '@/data/events';
import { isHindi } from '@/data/events';
import Img from '@/components/ui/Img';
import { cn } from '@/lib/cn';

/** Event cover card linking to its photo album. */
export default function EventCard({ e, index = 0, featured = false }: { e: EventItem; index?: number; featured?: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.55, delay: (index % 6) * 0.06 }}
      className="group h-full"
    >
      <Link to={`/events/${e.slug}`} className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-ink/5 transition-shadow hover:shadow-lift">
        <div className={cn('relative overflow-hidden', featured ? 'aspect-[16/10] lg:aspect-auto lg:min-h-[320px] lg:flex-1' : 'aspect-[4/3]')}>
          <Img src={e.cover} alt={e.title} wrapperClassName="h-full w-full" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-ink/70 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur">
            <Images className="h-3.5 w-3.5" /> {e.photos.length}
          </span>
        </div>
        <div className={cn('flex flex-col p-5', !featured && 'flex-1')}>
          {e.date && (
            <p className="mb-2 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-600">
              <CalendarDays className="h-3.5 w-3.5" /> {e.date}
            </p>
          )}
          <h3 className={cn('font-semibold leading-snug text-ink transition-colors group-hover:text-brand-600', isHindi(e.title) ? 'font-deva text-[17px]' : 'font-display text-lg', featured && 'sm:text-xl')}>
            {e.title}
          </h3>
        </div>
      </Link>
    </motion.article>
  );
}
