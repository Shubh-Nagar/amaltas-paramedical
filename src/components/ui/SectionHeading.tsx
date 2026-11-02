import type { ReactNode } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { cn } from '@/lib/cn';
import { ease } from '@/lib/motion';

type Props = {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  className?: string;
};

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } };
const word: Variants = {
  hidden: { y: '110%', opacity: 0 },
  show: { y: '0%', opacity: 1, transition: { duration: 0.7, ease } },
};
const line: Variants = { hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.8, ease } } };
const fade: Variants = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } };

/** Consistent section header: eyebrow with a drawn line, serif title revealed word by word, optional lead. */
export default function SectionHeading({ eyebrow, title, lead, align = 'left', tone = 'light', className }: Props) {
  const dark = tone === 'dark';
  const reduce = useReducedMotion();
  const anim = reduce ? {} : { variants: container, initial: 'hidden', whileInView: 'show', viewport: { once: true, amount: 'some' as const } };

  return (
    <motion.div data-no-reveal className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)} {...anim}>
      {eyebrow && (
        <motion.p
          variants={fade}
          className={cn(
            'mb-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em]',
            dark ? 'text-gold-300' : 'text-brand-600',
          )}
        >
          <motion.span variants={line} className={cn('h-px w-8 origin-left', dark ? 'bg-gold-300' : 'bg-brand-600')} />
          {eyebrow}
        </motion.p>
      )}
      <h2
        className={cn(
          'font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]',
          dark ? 'text-white' : 'text-ink',
        )}
      >
        {typeof title === 'string' && !reduce ? (
          <span className="sr-only">{title}</span>
        ) : null}
        {typeof title === 'string' && !reduce ? (
          <span aria-hidden>
            {title.split(' ').map((w, i, all) => (
              <span key={i}>
                <span className="inline-block overflow-hidden pb-[0.12em] align-bottom">
                  <motion.span variants={word} className="inline-block">{w}</motion.span>
                </span>
                {i < all.length - 1 && ' '}
              </span>
            ))}
          </span>
        ) : (
          <motion.span variants={fade} className="block">{title}</motion.span>
        )}
      </h2>
      {lead && (
        <motion.div variants={fade} className={cn('mt-5 text-base leading-relaxed sm:text-lg', dark ? 'text-white/75' : 'text-ink-muted')}>
          {lead}
        </motion.div>
      )}
    </motion.div>
  );
}
