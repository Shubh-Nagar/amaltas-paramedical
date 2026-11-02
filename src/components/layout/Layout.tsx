import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import TopBar from './TopBar';
import Navbar from './Navbar';
import Footer from './Footer';
import AdmissionBand from './AdmissionBand';
import FloatingActions from './FloatingActions';
import { ease } from '@/lib/motion';
import { useAutoReveal } from '@/hooks/useAutoReveal';

/** Thin gold bar at the very top showing how far down the page the reader is. */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  return <motion.div aria-hidden style={{ scaleX }} className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-gold-300 via-gold-400 to-brand-400" />;
}

/** Green wipe that covers the screen and lifts away on every page change (not on first load). */
let firstPaint = true;
function PageCurtain() {
  const skip = useRef(firstPaint);
  firstPaint = false;
  if (skip.current) return null;
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[65] bg-brand-600"
      initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
      animate={{ clipPath: ['inset(100% 0% 0% 0%)', 'inset(0% 0% 0% 0%)', 'inset(0% 0% 0% 0%)', 'inset(0% 0% 100% 0%)'] }}
      transition={{ duration: 0.95, times: [0, 0.35, 0.5, 1], ease: 'easeInOut' }}
    />
  );
}

/** App shell: header, animated page outlet, admission band, footer. */
export default function Layout() {
  const { pathname } = useLocation();
  const reduce = useReducedMotion();
  const shellRef = useRef<HTMLDivElement>(null);
  useAutoReveal(shellRef);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return (
    <div ref={shellRef} className="flex min-h-screen flex-col">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold-300 focus:px-4 focus:py-2 focus:font-bold">
        Skip to content
      </a>
      <ScrollProgress />
      <TopBar />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          id="main"
          key={pathname}
          className="relative flex-1"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease } }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12, transition: { duration: 0.25, ease } }}
        >
          <Outlet />
          <div className="h-24 sm:h-32" />
        </motion.main>
      </AnimatePresence>
      {!reduce && <PageCurtain key={pathname} />}
      <AdmissionBand />
      <Footer />
      <FloatingActions />
    </div>
  );
}
