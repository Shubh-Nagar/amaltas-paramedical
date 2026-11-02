import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/cn';

/**
 * Hanging raceme of the Amaltas (golden shower) tree — the institute's
 * namesake — drawn as a gently swaying decorative element.
 */
export default function AmaltasBloom({ className, length = 9, delay = 0 }: { className?: string; length?: number; delay?: number }) {
  const reduce = useReducedMotion();
  const blossoms = Array.from({ length }, (_, i) => i);
  return (
    <motion.svg
      aria-hidden
      viewBox={`0 0 60 ${40 + length * 26}`}
      className={cn('pointer-events-none origin-top', className)}
      animate={reduce ? undefined : { rotate: [-2.5, 2.5, -2.5] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      <path d={`M30 0 C 31 ${length * 9}, 29 ${length * 18}, 30 ${30 + length * 26}`} stroke="currentColor" strokeOpacity=".35" strokeWidth="1.2" fill="none" />
      {blossoms.map((i) => {
        const y = 22 + i * 26;
        const r = 7 + Math.sin((i / length) * Math.PI) * 4;
        const side = i % 2 === 0 ? -1 : 1;
        return (
          <g key={i} transform={`translate(${30 + side * (3 + (i % 3))} ${y})`}>
            {[0, 72, 144, 216, 288].map((a) => (
              <ellipse key={a} cx="0" cy={-r * 0.55} rx={r * 0.42} ry={r * 0.62} fill="currentColor" opacity={0.55 + (i % 3) * 0.15} transform={`rotate(${a})`} />
            ))}
            <circle r={r * 0.22} fill="#B38C07" />
          </g>
        );
      })}
    </motion.svg>
  );
}
