import { messages } from '@/data/messages';
import SectionHeading from '@/components/ui/SectionHeading';
import MessageCard from '@/components/MessageCard';
import PulseLine from '@/components/ui/PulseLine';

/** "Message's" section — Chairman, Director, Dean, Principal (same order as the original). */
export default function Leadership() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <PulseLine className="absolute inset-x-0 top-10 h-16 w-full text-brand-100" />
      <div className="container relative">
        <SectionHeading eyebrow="Message's" title="From our leadership" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {messages.map((m, i) => (
            <MessageCard key={m.slug} m={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
