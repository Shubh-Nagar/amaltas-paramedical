import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { institute } from '@/data/site';
import { asset } from '@/lib/asset';
import Button from '@/components/ui/Button';
import { useLockBody } from '@/hooks/useLockBody';

const KEY = 'amaltas-pm-popup-seen';

/** Admission poster (images/popup2.jpeg) shown once per browser session, like the original #openModal. */
export default function AdmissionPopup() {
  const [open, setOpen] = useState(false);
  useLockBody(open);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(KEY) === '1';
    } catch {
      /* storage unavailable — just show once per page load */
    }
    if (seen) return;
    const t = window.setTimeout(() => setOpen(true), 1200);
    return () => window.clearTimeout(t);
  }, []);

  const close = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(KEY, '1');
    } catch {
      /* ignore */
    }
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[90] flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="dialog" aria-modal="true" aria-label="Admission Open">
          <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" onClick={close} />
          <motion.div
            className="relative flex max-h-[92vh] w-full max-w-md flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
            initial={{ y: 30, scale: 0.96 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 20, scale: 0.97 }}
            transition={{ type: 'spring', damping: 26, stiffness: 260 }}
          >
            <button onClick={close} aria-label="Close" className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 shadow hover:bg-white">
              <X className="h-5 w-5" />
            </button>
            <div className="min-h-0 flex-1 overflow-y-auto bg-brand-50">
              <img src={asset(institute.admissionPopup)} alt="Admission Open" className="w-full" />
            </div>
            <div className="flex gap-3 border-t border-ink/5 p-4">
              <Button to="/enquiry" variant="green" className="flex-1">Enquiry</Button>
              <Button to={institute.brochure} file variant="outline" className="flex-1">Brochure</Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
