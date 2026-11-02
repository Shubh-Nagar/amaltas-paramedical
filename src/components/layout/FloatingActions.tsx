import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { ArrowUp, Phone, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contact } from '@/data/site';

/** Mobile sticky action bar (Call / Enquiry) + back-to-top on desktop. */
export default function FloatingActions() {
  const [show, setShow] = useState(false);
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t border-ink/10 bg-ink/10 pb-[env(safe-area-inset-bottom)] md:hidden">
        <a href={`tel:+91${contact.phones[0]}`} className="flex items-center justify-center gap-2 bg-white py-3.5 text-sm font-bold text-ink">
          <Phone className="h-4 w-4 text-brand-600" /> Call Now
        </a>
        <Link to="/enquiry" className="flex items-center justify-center gap-2 bg-brand-600 py-3.5 text-sm font-bold text-white">
          <Send className="h-4 w-4" /> Enquiry
        </Link>
      </div>
      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, y: 12, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.8 }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-40 hidden h-12 w-12 items-center justify-center rounded-full bg-gold-300 text-ink shadow-lift transition hover:bg-gold-400 md:flex"
            aria-label="Back to top"
          >
            {/* Ring fills as the page is read */}
            <svg viewBox="0 0 48 48" className="absolute inset-0 h-full w-full -rotate-90" aria-hidden>
              <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeOpacity=".15" strokeWidth="3" />
              <motion.circle cx="24" cy="24" r="22" fill="none" stroke="#10803C" strokeWidth="3" strokeLinecap="round" style={{ pathLength: scrollYProgress }} />
            </svg>
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
