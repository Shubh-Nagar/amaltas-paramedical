import { Mail, Phone } from 'lucide-react';
import type { Committee } from '@/data/committees';
import Reveal from './Reveal';

/**
 * Committee roster: a proper table on desktop, stacked cards on mobile.
 * Phone numbers and e-mails are tappable.
 */
export default function CommitteeTable({ committee }: { committee: Committee }) {
  const [sno, nameCol, roleCol, phoneCol, mailCol] = committee.columns;
  return (
    <Reveal className="overflow-hidden rounded-2xl border border-ink/5 bg-white shadow-card">
      <div className="flex items-center justify-between border-b border-ink/5 bg-brand-50/60 px-5 py-4 sm:px-6">
        <h3 className="font-display text-xl font-semibold text-ink">{committee.title}</h3>
        <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-brand-600">{committee.members.length} members</span>
      </div>

      {/* Desktop table */}
      <div className="hidden md:block">
        <table className="w-full text-left text-sm">
          <thead className="text-[11px] uppercase tracking-[0.14em] text-ink-muted">
            <tr>
              {[sno, nameCol, roleCol, phoneCol, mailCol].map((c) => (
                <th key={c} className="px-6 py-3 font-bold">{c}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-ink/5">
            {committee.members.map((m, i) => (
              <tr key={m.name + i} className="transition-colors hover:bg-gold-50/60">
                <td className="px-6 py-4 font-semibold tabular-nums text-ink-muted">{String(i + 1).padStart(2, '0')}</td>
                <td className="px-6 py-4 font-semibold text-ink">{m.name}</td>
                <td className="px-6 py-4">
                  <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-bold text-brand-600">{m.designation}</span>
                </td>
                <td className="px-6 py-4"><a className="tabular-nums hover:text-brand-600" href={`tel:${m.phone}`}>{m.phone}</a></td>
                <td className="px-6 py-4"><a className="break-all hover:text-brand-600" href={`mailto:${m.email}`}>{m.email}</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <ul className="divide-y divide-ink/5 md:hidden">
        {committee.members.map((m, i) => (
          <li key={m.name + i} className="px-5 py-4">
            <div className="flex items-start justify-between gap-3">
              <p className="font-semibold text-ink">
                <span className="mr-2 text-ink-muted tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                {m.name}
              </p>
              <span className="shrink-0 rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-bold text-brand-600">{m.designation}</span>
            </div>
            <div className="mt-2 flex flex-col gap-1 text-sm text-ink-soft">
              <a href={`tel:${m.phone}`} className="inline-flex items-center gap-2"><Phone className="h-3.5 w-3.5" />{m.phone}</a>
              <a href={`mailto:${m.email}`} className="inline-flex items-center gap-2 break-all"><Mail className="h-3.5 w-3.5" />{m.email}</a>
            </div>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
