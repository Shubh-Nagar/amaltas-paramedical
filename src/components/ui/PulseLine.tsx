import { cn } from '@/lib/cn';

/** Animated ECG trace — the visual signature for a paramedical institute. */
export default function PulseLine({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden className={cn('pointer-events-none', className)}>
      <path
        d="M0 70 H360 l18 -22 14 22 H470 l14 -58 18 106 16 -70 12 22 H760 l14 -14 12 14 H1200"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="1200"
        className="animate-pulseLine motion-reduce:animate-none"
      />
    </svg>
  );
}
