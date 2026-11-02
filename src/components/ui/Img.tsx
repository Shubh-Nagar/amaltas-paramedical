import { useState } from 'react';
import type { ImgHTMLAttributes } from 'react';
import { ImageOff } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { asset } from '@/lib/asset';
import { cn } from '@/lib/cn';

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  /** Path relative to the original site (e.g. "images/Chairman.jpeg") or an absolute URL. */
  src: string;
  wrapperClassName?: string;
};

/**
 * Lazy image with a soft skeleton while loading and a clearly-marked
 * placeholder if the original file cannot be reached. Each image unveils from its
 * centre the first time it scrolls into view.
 */
export default function Img({ src, alt = '', className, wrapperClassName, ...rest }: Props) {
  const [state, setState] = useState<'loading' | 'ok' | 'error'>('loading');
  const reduce = useReducedMotion();
  const reveal = reduce
    ? {}
    : {
        initial: { clipPath: 'inset(10% 10% 10% 10%)' },
        whileInView: { clipPath: 'inset(0% 0% 0% 0%)' },
        viewport: { once: true, amount: 'some' as const },
        transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] as const },
      };
  return (
    <motion.span className={cn('relative block overflow-hidden bg-brand-50', wrapperClassName)} {...reveal}>
      {state === 'loading' && <span className="absolute inset-0 animate-pulse bg-gradient-to-br from-brand-50 to-brand-100" />}
      {state === 'error' ? (
        <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center text-xs text-ink-muted">
          <ImageOff className="h-6 w-6 opacity-60" />
          <span>Image placeholder — {src}</span>
        </span>
      ) : (
        <img
          src={asset(src)}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setState('ok')}
          onError={() => setState('error')}
          className={cn('transition-opacity duration-700', state === 'ok' ? 'opacity-100' : 'opacity-0', className)}
          {...rest}
        />
      )}
    </motion.span>
  );
}
