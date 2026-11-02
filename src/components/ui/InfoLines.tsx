import { cn } from '@/lib/cn';

/**
 * Renders lines of facility data. A line of the form "Label : Value" becomes a
 * label/value row; anything else is shown as-is. Text is never altered.
 */
export default function InfoLines({ lines, className }: { lines: string[]; className?: string }) {
  return (
    <dl className={cn('divide-y divide-ink/5 text-sm', className)}>
      {lines.map((line, i) => {
        const idx = line.indexOf(' : ');
        if (idx > 0 && !/^Number of students to each microscope - 1 : 1$/.test(line)) {
          return (
            <div key={i} className="flex items-baseline justify-between gap-4 py-2.5">
              <dt className="text-ink-muted">{line.slice(0, idx)}</dt>
              <dd className="text-right font-semibold text-ink">{line.slice(idx + 3)}</dd>
            </div>
          );
        }
        return (
          <div key={i} className="py-2.5 text-ink-soft">
            {line}
          </div>
        );
      })}
    </dl>
  );
}
