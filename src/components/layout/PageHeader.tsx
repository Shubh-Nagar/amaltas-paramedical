import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import type { ReactNode } from 'react';
import PulseLine from '@/components/ui/PulseLine';
import AmaltasBloom from '@/components/ui/AmaltasBloom';
import { ease } from '@/lib/motion';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

type Crumb = { label: string; to?: string };

/** Inner-page banner: breadcrumb, serif title, optional intro. Also sets <title>. */
export default function PageHeader({ title, crumbs = [], children, docTitle }: { title: string; crumbs?: Crumb[]; children?: ReactNode; docTitle?: string }) {
  useDocumentTitle(docTitle ?? title);
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const glowY = useTransform(p, [0, 1], [0, reduce ? 0 : 120]);
  const bloomY = useTransform(p, [0, 1], [0, reduce ? 0 : 60]);
  const textY = useTransform(p, [0, 1], [0, reduce ? 0 : -40]);
  const words = title.split(' ');
  return (
    <section ref={ref} data-no-reveal className="relative overflow-hidden bg-brand-600 bg-grain text-white">
      <motion.div style={{ y: glowY }} className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-400/40 blur-3xl" />
      <motion.div
        aria-hidden
        className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-gold-300/10 blur-3xl"
        animate={reduce ? undefined : { x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div style={{ y: bloomY }} className="absolute inset-0">
        <AmaltasBloom className="absolute right-[8%] top-0 hidden h-56 text-gold-300 md:block" length={7} />
        <AmaltasBloom className="absolute right-[14%] top-0 hidden h-36 text-gold-200/70 md:block" length={4} delay={1.5} />
      </motion.div>
      <PulseLine className="absolute inset-x-0 bottom-4 h-14 w-full text-gold-300/25" />
      <motion.div style={{ y: textY }} className="container relative py-14 sm:py-20">
        <motion.nav
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease }} aria-label="Breadcrumb"
          className="mb-5 flex flex-wrap items-center gap-1.5 text-xs font-semibold text-white/80">
          <Link to="/" className="hover:text-gold-300">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label} className="inline-flex items-center gap-1.5">
              <ChevronRight className="h-3 w-3" />
              {c.to ? <Link to={c.to} className="hover:text-gold-300">{c.label}</Link> : <span>{c.label}</span>}
            </span>
          ))}
          <ChevronRight className="h-3 w-3" />
          <span className="text-gold-300">{title}</span>
        </motion.nav>
        <h1 className="max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          <span className="sr-only">{title}</span>
          <span aria-hidden>
            {words.map((w, i) => (
              <span key={i}>
                <span className="inline-block overflow-hidden pb-[0.1em] align-bottom">
                  <motion.span
                    className="inline-block"
                    initial={reduce ? false : { y: '110%' }}
                    animate={{ y: '0%' }}
                    transition={{ duration: 0.8, delay: 0.15 + i * 0.06, ease }}
                  >
                    {w}
                  </motion.span>
                </span>
                {i < words.length - 1 && ' '}
              </span>
            ))}
          </span>
        </h1>
        {children && (
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 + words.length * 0.06, ease }} className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
            {children}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
