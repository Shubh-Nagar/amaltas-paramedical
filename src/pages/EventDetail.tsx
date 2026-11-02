import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CalendarDays, Images } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import PhotoGrid from '@/components/ui/PhotoGrid';
import { events, getEvent } from '@/data/events';

/** Single event album, with previous / next navigation. */
export default function EventDetail() {
  const { slug = '' } = useParams();
  const e = getEvent(slug);
  if (!e) return <Navigate to="/404" replace />;
  const i = events.indexOf(e);
  const prev = events[i - 1];
  const next = events[i + 1];

  return (
    <>
      <PageHeader title={e.title} crumbs={[{ label: 'Event / Activities', to: '/events' }]}>
        <span className="inline-flex flex-wrap items-center gap-4 text-sm font-semibold">
          {e.date && <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4 text-gold-300" />{e.date}</span>}
          <span className="inline-flex items-center gap-2"><Images className="h-4 w-4 text-gold-300" />{e.photos.length}</span>
        </span>
      </PageHeader>
      <section className="py-16 sm:py-20">
        <div className="container">
          <PhotoGrid images={e.photos} caption={e.title} altPrefix={e.title} />
          <nav className="mt-14 grid gap-4 border-t border-ink/10 pt-8 sm:grid-cols-2" aria-label="More events">
            {prev ? (
              <Link to={`/events/${prev.slug}`} className="group rounded-2xl bg-white p-5 shadow-card ring-1 ring-ink/5 hover:ring-brand-200">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-600"><ArrowLeft className="h-4 w-4" /> Newer</span>
                <p className="mt-2 line-clamp-2 font-semibold text-ink">{prev.title}</p>
              </Link>
            ) : <span />}
            {next && (
              <Link to={`/events/${next.slug}`} className="group rounded-2xl bg-white p-5 text-right shadow-card ring-1 ring-ink/5 hover:ring-brand-200">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-600">Older <ArrowRight className="h-4 w-4" /></span>
                <p className="mt-2 line-clamp-2 font-semibold text-ink">{next.title}</p>
              </Link>
            )}
          </nav>
        </div>
      </section>
    </>
  );
}
