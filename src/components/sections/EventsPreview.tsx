import { ArrowRight } from 'lucide-react';
import { events } from '@/data/events';
import SectionHeading from '@/components/ui/SectionHeading';
import EventCard from '@/components/EventCard';
import Button from '@/components/ui/Button';

/** Latest six events from events.asp. */
export default function EventsPreview() {
  const [first, ...rest] = events.slice(0, 5);
  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Event / Activities" title="Life on campus" />
          <Button to="/events" variant="outline" className="shrink-0">All events <ArrowRight className="h-4 w-4" /></Button>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <EventCard e={first} featured />
          <div className="grid gap-6 sm:grid-cols-2">
            {rest.map((e, i) => (
              <EventCard key={e.slug} e={e} index={i + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
