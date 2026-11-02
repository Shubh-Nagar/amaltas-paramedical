import { Link, Navigate, useParams } from 'react-router-dom';
import { Quote } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import Reveal from '@/components/ui/Reveal';
import Img from '@/components/ui/Img';
import { getMessage, messages } from '@/data/messages';
import { cn } from '@/lib/cn';

/** Chairman / Director / Dean / Principal message page. */
export default function Message() {
  const { slug = '' } = useParams();
  const m = getMessage(slug);
  if (!m) return <Navigate to="/404" replace />;

  return (
    <>
      <PageHeader title={m.pageTitle} crumbs={[{ label: 'About Us', to: '/about' }]} />
      <section className="py-16 sm:py-24">
        <div className="container grid gap-12 lg:grid-cols-[380px_1fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative">
              <div className="absolute -inset-3 -rotate-2 rounded-[2rem] bg-gold-300" />
              <Img src={m.photo} alt={`${m.name}, ${m.role}`} wrapperClassName="relative aspect-[4/4.4] overflow-hidden rounded-[1.75rem] shadow-lift" className="h-full w-full object-cover object-top" />
            </div>
            <div className="mt-8">
              <p className="font-display text-2xl font-semibold text-ink">{m.name}</p>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-600">{m.role}</p>
            </div>
            <nav className="mt-8 flex flex-wrap gap-2" aria-label="Other messages">
              {messages.map((o) => (
                <Link
                  key={o.slug}
                  to={`/messages/${o.slug}`}
                  className={cn('rounded-full px-4 py-2 text-xs font-bold transition', o.slug === m.slug ? 'bg-brand-600 text-white' : 'bg-white text-ink-soft ring-1 ring-ink/10 hover:ring-brand-300')}
                >
                  {o.role}
                </Link>
              ))}
            </nav>
          </Reveal>

          <Reveal delay={0.1} className="relative">
            <Quote className="h-12 w-12 text-gold-300" />
            {m.greeting && <p className="mt-6 font-display text-2xl font-semibold leading-snug text-ink sm:text-3xl">{m.greeting}</p>}
            <div className="mt-6 space-y-6 text-lg leading-relaxed text-ink-soft">
              {m.blocks.map((b, i) => {
                if (b.type === 'labelled')
                  return (
                    <div key={i} className="rounded-2xl border-l-4 border-gold-300 bg-white p-6 shadow-card">
                      <p className="font-display text-xl font-semibold text-brand-600">{b.label}</p>
                      <p className="mt-2">{b.text}</p>
                    </div>
                  );
                if (b.type === 'quote')
                  return (
                    <blockquote key={i} className="font-display text-2xl italic text-brand-600">
                      {b.text}
                    </blockquote>
                  );
                return <p key={i}>{b.text}</p>;
              })}
            </div>
            <div className="mt-10 border-t border-ink/10 pt-6">
              {m.signature.map((s, i) => (
                <p key={i} className={i === 0 ? 'font-display text-xl font-semibold text-ink' : 'text-sm text-ink-muted'}>
                  {s}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
