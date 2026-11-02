import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { asset } from '@/lib/asset';

type Variant = 'gold' | 'green' | 'outline' | 'ghost-light' | 'link';

const styles: Record<Variant, string> = {
  gold: 'btn-shine bg-gold-300 text-ink hover:bg-gold-400 shadow-[0_8px_24px_-10px_rgba(221,184,11,.8)]',
  green: 'btn-shine bg-brand-600 text-white hover:bg-brand-700 shadow-[0_8px_24px_-10px_rgba(16,128,60,.8)]',
  outline: 'border border-ink/15 text-ink hover:border-brand-600 hover:text-brand-600 bg-white',
  'ghost-light': 'btn-shine border border-white/25 text-white hover:bg-white/10',
  link: 'text-brand-600 hover:text-brand-900 px-0 py-0 underline-offset-4 hover:underline',
};

type Props = {
  to: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  /** Opens an original-site file (PDF etc.) in a new tab. */
  file?: boolean;
  external?: boolean;
};

/**
 * Link styled as a button. Internal routes use React Router; `file` paths are
 * resolved against the original website; `external` opens in a new tab.
 */
export default function Button({ to, children, variant = 'gold', className, file, external }: Props) {
  const cls = cn(
    'group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400 active:scale-[.98]',
    styles[variant],
    className,
  );
  if (file || external || /^(https?:|mailto:|tel:)/.test(to)) {
    const href = file ? asset(to) : to;
    const newTab = file || external || /^https?:/.test(to);
    return (
      <a href={href} className={cls} {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={cls}>
      {children}
    </Link>
  );
}
