import { useCallback, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { asset } from '@/lib/asset';
import { useLockBody } from '@/hooks/useLockBody';

type Props = {
  images: string[];
  index: number | null;
  onClose: () => void;
  onIndex: (i: number) => void;
  caption?: string;
};

/** Full-screen image viewer with keyboard (←/→/Esc) and swipe navigation. */
export default function Lightbox({ images, index, onClose, onIndex, caption }: Props) {
  const open = index !== null;
  useLockBody(open);

  const go = useCallback(
    (dir: 1 | -1) => {
      if (index === null) return;
      onIndex((index + dir + images.length) % images.length);
    },
    [index, images.length, onIndex],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, go, onClose]);

  return (
    <AnimatePresence>
      {open && index !== null && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-[80] flex flex-col bg-[#03140b]/95 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="flex items-center justify-between px-4 py-3 text-sm text-white/70 sm:px-6">
            <span className="font-semibold tabular-nums">
              {index + 1} / {images.length}
            </span>
            {caption && <span className="mx-4 hidden truncate md:block">{caption}</span>}
            <button aria-label="Close" onClick={onClose} className="rounded-full p-2 text-white hover:bg-white/10">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="relative flex flex-1 items-center justify-center px-2 pb-6 sm:px-16" onClick={(e) => e.stopPropagation()}>
            <AnimatePresence mode="wait">
              <motion.img
                key={images[index]}
                src={asset(images[index])}
                alt={caption ? `${caption} — photo ${index + 1}` : `Photo ${index + 1}`}
                className="max-h-[82vh] max-w-full rounded-lg object-contain shadow-2xl"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -80) go(1);
                  if (info.offset.x > 80) go(-1);
                }}
              />
            </AnimatePresence>
            {images.length > 1 && (
              <>
                <button aria-label="Previous image" onClick={() => go(-1)} className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur hover:bg-white/20 sm:left-4">
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button aria-label="Next image" onClick={() => go(1)} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur hover:bg-white/20 sm:right-4">
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
