import { useEffect, type RefObject } from 'react';

/**
 * Site-wide scroll reveal. Every content block inside `root` (each block in a section's
 * container, plus each item of a grid/list) fades, lifts and un-blurs as it scrolls into view.
 * Grid/list items are staggered. Works on every page without per-page markup.
 *
 * Opt out on an element (and its subtree) with `data-no-reveal`.
 *
 * Safety rules, so content can never get stuck hidden:
 * - one long-lived observer for the whole app (route changes don't drop pending elements);
 * - anything whose top is inside the window is revealed, even if an overflow parent clips it
 *   or it sits at the very bottom of the page;
 * - anything already scrolled past (above the window) is revealed too;
 * - a slow background sweep catches layout shifts that happen without scrolling.
 */
const SELECTOR = [
  'section > .container > *',
  'section > div > .container > *',
  '.grid > *',
  'ul > li',
  'ol > li',
  'table tbody > tr',
].join(',');

const SKIP = '[data-no-reveal], header, [role="dialog"], .fixed';

export function useAutoReveal(root: RefObject<HTMLElement>) {
  useEffect(() => {
    const el = root.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;

    const pending = new Set<HTMLElement>();
    const timers: number[] = [];

    const show = (t: HTMLElement) => {
      if (!pending.delete(t)) return;
      io.unobserve(t);
      t.classList.add('ar-in');
      // Drop the classes once finished so they never affect hover transforms or stacking later.
      timers.push(window.setTimeout(() => t.classList.remove('ar', 'ar-in'), 1600));
    };

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && show(e.target as HTMLElement)),
      { threshold: 0 },
    );

    const inWindow = (t: HTMLElement) => {
      const r = t.getBoundingClientRect();
      if (r.width === 0 && r.height === 0) return false; // display:none — IO will catch it when shown
      return r.top < window.innerHeight;
    };

    let raf = 0;
    const sweep = () => {
      raf = 0;
      pending.forEach((t) => {
        if (!t.isConnected) pending.delete(t);
        else if (inWindow(t)) show(t);
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(sweep);
    };

    const scan = () => {
      const fresh: HTMLElement[] = [];
      el.querySelectorAll<HTMLElement>(SELECTOR).forEach((node) => {
        if (node.dataset.ar || node.closest(SKIP)) return;
        node.dataset.ar = '1';
        const parent = node.parentElement!;
        const staggered = parent.classList.contains('grid') || /^(UL|OL|TBODY)$/.test(parent.tagName);
        const i = staggered ? Array.prototype.indexOf.call(parent.children, node) : 0;
        node.style.setProperty('--ar-d', `${Math.min(i, 8) * 70}ms`);
        node.classList.add('ar');
        pending.add(node);
        io.observe(node);
        fresh.push(node);
      });
      if (fresh.length) onScroll();
    };

    scan();
    const mo = new MutationObserver(scan);
    mo.observe(el, { childList: true, subtree: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    window.addEventListener('load', onScroll);
    const interval = window.setInterval(() => pending.size && sweep(), 1000);

    return () => {
      mo.disconnect();
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.removeEventListener('load', onScroll);
      clearInterval(interval);
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
      // Never leave anything hidden if the hook is torn down (e.g. hot reload).
      pending.forEach((t) => t.classList.remove('ar', 'ar-in'));
    };
  }, [root]);
}
