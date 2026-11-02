import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { homeGallery } from '@/data/home';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Img from '@/components/ui/Img';
import Lightbox from '@/components/ui/Lightbox';
import { cn } from '@/lib/cn';

const spans = ['md:col-span-2 md:row-span-2', '', '', '', '', 'md:col-span-2', '', ''];

/** Bento-style mosaic of the gallery photos featured on the original home page. */
export default function GalleryPreview() {
  const [index, setIndex] = useState<number | null>(null);
  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Gallery" title="Photo Gallery" />
          <Button to="/gallery" variant="outline" className="shrink-0">Open gallery <ArrowRight className="h-4 w-4" /></Button>
        </div>
        <div className="mt-12 grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:gap-4 md:grid-cols-4">
          {homeGallery.map((src, i) => (
            <motion.button
              key={src}
              onClick={() => setIndex(i)}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 'some' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={cn('group relative overflow-hidden rounded-2xl', spans[i])}
              aria-label={`Open gallery photo ${i + 1}`}
            >
              <Img src={src} alt={`Gallery photo ${i + 1}`} wrapperClassName="h-full w-full" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <span className="absolute inset-0 bg-brand-900/0 transition-colors duration-500 group-hover:bg-brand-900/25" />
            </motion.button>
          ))}
        </div>
      </div>
      <Lightbox images={homeGallery} index={index} onClose={() => setIndex(null)} onIndex={setIndex} caption="Photo Gallery" />
    </section>
  );
}
