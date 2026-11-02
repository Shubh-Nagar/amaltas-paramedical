import { useState } from 'react';
import { motion } from 'framer-motion';
import { ZoomIn } from 'lucide-react';
import Img from './Img';
import Lightbox from './Lightbox';
import { cn } from '@/lib/cn';

type Props = { images: string[]; caption?: string; variant?: 'masonry' | 'grid'; altPrefix?: string; /** Override column classes (masonry). */ columnsClass?: string };

/** Responsive photo grid; clicking a photo opens the lightbox. */
export default function PhotoGrid({ images, caption, variant = 'masonry', altPrefix = 'Photo', columnsClass }: Props) {
  const [index, setIndex] = useState<number | null>(null);
  return (
    <>
      <div className={cn(variant === 'masonry' ? cn('gap-3 sm:gap-4', columnsClass ?? 'columns-2 md:columns-3 lg:columns-4') : 'grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4')}>
        {images.map((src, i) => (
          <motion.button
            key={src + i}
            type="button"
            onClick={() => setIndex(i)}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.5, delay: (i % 8) * 0.04 }}
            className={cn(
              'group relative block w-full overflow-hidden rounded-xl bg-brand-50 text-left shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-400',
              variant === 'masonry' ? 'mb-3 break-inside-avoid sm:mb-4' : 'aspect-[4/3]',
            )}
            aria-label={`Open ${altPrefix.toLowerCase()} ${i + 1}`}
          >
            <Img
              src={src}
              alt={`${altPrefix} ${i + 1}`}
              wrapperClassName={variant === 'grid' ? 'h-full w-full' : 'min-h-[120px]'}
              className={cn('w-full transition-transform duration-700 group-hover:scale-[1.04]', variant === 'grid' && 'h-full object-cover')}
            />
            <span className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-300 group-hover:bg-ink/35 group-hover:opacity-100">
              <ZoomIn className="h-7 w-7 text-white" />
            </span>
          </motion.button>
        ))}
      </div>
      <Lightbox images={images} index={index} onClose={() => setIndex(null)} onIndex={setIndex} caption={caption} />
    </>
  );
}
