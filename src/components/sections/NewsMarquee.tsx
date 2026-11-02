import { Link } from 'react-router-dom';
import { ArrowRight, Newspaper } from 'lucide-react';
import { newsClippings } from '@/data/media';
import Img from '@/components/ui/Img';

/** Auto-scrolling strip of press clippings ("News Release"); pauses on hover. */
export default function NewsMarquee() {
  const loop = [...newsClippings, ...newsClippings];
  return (
    <section className="overflow-hidden bg-white py-20 sm:py-24">
      <div className="container mb-10 flex items-end justify-between gap-6">
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-300 text-ink"><Newspaper className="h-6 w-6" /></span>
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">News Release</h2>
        </div>
        <Link to="/news" className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-900">
          View all <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="group relative [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
        <div data-no-reveal className="flex w-max animate-marquee gap-5 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {loop.map((src, i) => (
            <Link key={src + i} to="/news" className="block w-56 shrink-0 overflow-hidden rounded-xl bg-cream p-2 shadow-card ring-1 ring-ink/5 transition hover:-translate-y-1 sm:w-64" aria-label="Open News Release">
              <Img src={src} alt={`News clipping ${(i % newsClippings.length) + 1}`} wrapperClassName="aspect-[3/4] rounded-lg" className="h-full w-full object-cover object-top" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
