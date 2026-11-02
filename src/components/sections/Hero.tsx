import { useRef, useState, type ReactNode } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { ArrowUpRight, BadgeCheck, ChevronDown, Download, Pause, Play } from 'lucide-react';
import { institute } from '@/data/site';
import { asset } from '@/lib/asset';
import Button from '@/components/ui/Button';

/** Sticky navbar height once the page is scrolled (see Navbar). The pinned video sits right below it. */
const NAV_H = 68;

/**
 * Home hero, scroll-driven:
 * 1. The intro video fills the screen on its own.
 * 2. As the user scrolls, the video stays pinned and the content fades in over it, step by step.
 * 3. Once everything is shown (plus a short hold), the pin releases and the page moves on.
 * With reduced motion, the content is shown immediately on a normal-height hero.
 */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const reduce = !!useReducedMotion();
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  const shade = useTransform(p, [0.04, 0.3], [0.15, 0.7]);
  const hint = useTransform(p, [0, 0.08], [1, 0]);
  const videoScale = useTransform(p, [0, 1], [1, 1.08]);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      void v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section ref={ref} data-no-reveal className="relative bg-brand-950" style={{ height: reduce ? undefined : '340vh' }}>
      <div
        className="sticky overflow-hidden text-white"
        style={{ top: NAV_H, height: `calc(100svh - ${NAV_H}px)` }}
      >
        <motion.video
          ref={videoRef}
          style={{ scale: reduce ? 1 : videoScale }}
          className="absolute inset-0 h-full w-full object-cover"
          src={asset(institute.introVideo)}
          autoPlay={!reduce}
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Introduction video of Amaltas Institute of Paramedical Sciences"
        />
        {/* Darkens as the text arrives so it stays readable over any frame of the video. */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/80 to-brand-950/30"
          style={{ opacity: reduce ? 0.75 : shade }}
        />

        <div className="container relative flex h-full flex-col justify-center pb-16">
          <div className="max-w-3xl">
            <Step p={p} at={0.1} reduce={reduce}>
              <p className="inline-flex items-center gap-2 rounded-full border border-gold-300/40 bg-gold-300/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-gold-300 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-300 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-300" />
                </span>
                Admission Open
              </p>
            </Step>
            <h1 className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.02] tracking-tight sm:text-6xl xl:text-[4.6rem]">
              <Step p={p} at={0.18} reduce={reduce} as="span" className="block">
                Amaltas Institute of Medical Sciences
              </Step>
              <Step p={p} at={0.28} reduce={reduce} as="span" className="mt-2 block font-normal italic text-gold-300">
                (Paramedical Science)
              </Step>
            </h1>
            <Step p={p} at={0.38} reduce={reduce}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
                The fundamental idea behind is to develop and mould the students as successful individuals to get a job not only in India but also abroad.
              </p>
            </Step>
            <Step p={p} at={0.48} reduce={reduce}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button to="/enquiry" variant="gold">
                  Apply Now <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Button>
                <Button to={institute.brochure} file variant="ghost-light">
                  <Download className="h-4 w-4" /> Download Brochure
                </Button>
              </div>
            </Step>
            <Step p={p} at={0.58} reduce={reduce}>
              <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/15 pt-6 text-sm text-white/90">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/80">Affiliated from</span>
                <span className="inline-flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-gold-300" /> M.P. Paramedical Council, Bhopal</span>
                <span className="inline-flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-gold-300" /> MPMSU University, Jabalpur</span>
                <span className="inline-flex items-center gap-2 text-white/80">Est. <strong className="font-display text-lg text-gold-300">{institute.established}</strong></span>
              </div>
            </Step>
          </div>
        </div>

        {!reduce && (
          <motion.div style={{ opacity: hint }} className="pointer-events-none absolute inset-x-0 bottom-24 flex flex-col items-center gap-1 text-xs font-bold uppercase tracking-[0.25em] text-white/90">
            Scroll
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </motion.div>
        )}

        <button onClick={toggle} className="absolute bottom-24 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition hover:bg-white/25 sm:right-8" aria-label={playing ? 'Pause video' : 'Play video'}>
          {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </button>
      </div>
    </section>
  );
}

/** One piece of hero content that fades/slides in once scroll progress passes `at`. */
function Step({ p, at, reduce, as = 'div', className, children }: {
  p: MotionValue<number>;
  at: number;
  reduce: boolean;
  as?: 'div' | 'span';
  className?: string;
  children: ReactNode;
}) {
  const span = 0.1;
  const opacity = useTransform(p, [at, at + span], [0, 1]);
  const y = useTransform(p, [at, at + span], [40, 0]);
  // Hidden content must not be clickable/focusable.
  const visibility = useTransform(p, (v) => (v > at ? 'visible' : 'hidden'));
  const Tag = as === 'span' ? motion.span : motion.div;
  return (
    <Tag className={className} style={reduce ? undefined : { opacity, y, visibility }}>
      {children}
    </Tag>
  );
}
