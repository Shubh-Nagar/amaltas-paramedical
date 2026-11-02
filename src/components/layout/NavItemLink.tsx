import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import type { NavLink } from '@/data/site';
import { asset } from '@/lib/asset';

/** Renders a nav entry as a router link, or as a new-tab link for files/externals. */
export default function NavItemLink({ item, className, children, onClick }: { item: NavLink; className?: string; children?: ReactNode; onClick?: () => void }) {
  if (item.external) {
    const href = /^https?:/.test(item.to) ? item.to : asset(item.to);
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>
        {children ?? item.label}
      </a>
    );
  }
  return (
    <Link to={item.to} className={className} onClick={onClick}>
      {children ?? item.label}
    </Link>
  );
}
