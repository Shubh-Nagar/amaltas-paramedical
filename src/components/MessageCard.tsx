import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Quote } from 'lucide-react';
import type { LeaderMessage } from '@/data/messages';
import Img from '@/components/ui/Img';

/** Leader portrait + the exact home-page excerpt, linking to the full message. */
export default function MessageCard({ m, index }: { m: LeaderMessage; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-ink/5 transition duration-300 hover:-translate-y-1 hover:shadow-lift"
    >
      <Link to={`/messages/${m.slug}`} className="relative block aspect-[4/3] overflow-hidden sm:aspect-[4/4.2]">
        <Img src={m.photo} alt={`${m.name}, ${m.role}`} wrapperClassName="h-full w-full !bg-brand-50" className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
        <span className="absolute inset-0 bg-gradient-to-t from-brand-900/70 via-brand-900/0 to-transparent" />
        <span className="absolute bottom-4 left-4 rounded-full bg-gold-300 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-ink">{m.role}</span>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <Quote className="h-6 w-6 text-gold-500" />
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">{m.excerpt}</p>
        <p className="mt-5 font-display text-lg font-semibold text-ink">{m.name}</p>
        <Link to={`/messages/${m.slug}`} className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-brand-600 hover:text-brand-900">
          Read message <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
}
