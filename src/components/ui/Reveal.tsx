import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeUp } from '@/lib/motion';

type Props = { children: ReactNode; className?: string; delay?: number; as?: 'div' | 'section' | 'li' | 'article' };

/** Fades + lifts content into view once, when it scrolls into the viewport. */
export default function Reveal({ children, className, delay = 0, as = 'div' }: Props) {
  const reduce = useReducedMotion();
  const Comp = motion[as];
  if (reduce) return <Comp className={className}>{children}</Comp>;
  return (
    <Comp
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 'some' }}
      transition={{ delay }}
    >
      {children}
    </Comp>
  );
}
