import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Download, Menu, Phone, X } from 'lucide-react';
import { contact, institute, nav, type NavEntry, type NavItem } from '@/data/site';
import { asset } from '@/lib/asset';
import { cn } from '@/lib/cn';
import { useLockBody } from '@/hooks/useLockBody';
import NavItemLink from './NavItemLink';
import Button from '@/components/ui/Button';

const matches = (pathname: string, to?: string) =>
  !!to && to.startsWith('/') && (to === '/' ? pathname === '/' : pathname === to || pathname.startsWith(`${to}/`));

const itemActive = (pathname: string, item: NavItem) =>
  matches(pathname, item.to) || !!item.groups?.some((g) => g.links.some((l) => matches(pathname, l.to)));

/** Sticky main navigation with grouped dropdown panels (desktop) and a slide-in drawer (mobile). */
export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const closeTimer = useRef<number>();
  useLockBody(drawer);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setDrawer(false);
    setMenu(null);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenu(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const openMenu = (label: string) => {
    window.clearTimeout(closeTimer.current);
    setMenu(label);
  };
  const scheduleClose = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setMenu(null), 140);
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-[background-color,box-shadow,border-color] duration-300',
        scrolled
          ? 'border-transparent bg-white/85 shadow-[0_10px_40px_-18px_rgba(10,42,26,.35)] backdrop-blur-xl'
          : 'border-ink/[.06] bg-white',
      )}
    >
      <div className={cn('container flex items-center justify-between gap-6 transition-[height] duration-300', scrolled ? 'h-[68px]' : 'h-[72px] lg:h-[84px]')}>
        {/* Brand */}
        <div className="flex shrink-0 items-center gap-4">
          <Link to="/" className="flex items-center" aria-label={`${institute.name} — Home`}>
            <img src={asset(institute.logo)} alt={institute.name} className="h-10 w-auto sm:h-11 lg:h-12" />
          </Link>
          <span className="hidden h-9 w-px bg-ink/10 xl:block" aria-hidden />
          <a href={institute.universityUrl} target="_blank" rel="noopener noreferrer" className="hidden opacity-90 transition-opacity hover:opacity-100 xl:block" aria-label="Amaltas University">
            <img src={asset(institute.universityLogo)} alt="Amaltas University" className="h-10 w-auto" />
          </a>
        </div>

        {/* Desktop menu */}
        <nav aria-label="Main" className="hidden h-full lg:block">
          <ul className="flex h-full items-center">
            {nav.map((item, idx) => {
              const active = itemActive(pathname, item);
              const isOpen = menu === item.label;
              const wide = (item.groups?.length ?? 0) > 1;
              return (
                <li
                  key={item.label}
                  className="relative flex h-full items-center"
                  onMouseEnter={item.groups ? () => openMenu(item.label) : undefined}
                  onMouseLeave={item.groups ? scheduleClose : undefined}
                >
                  {item.groups ? (
                    <button
                      type="button"
                      onClick={() => setMenu(isOpen ? null : item.label)}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      className={cn(
                        'inline-flex items-center gap-1.5 px-3.5 py-2 text-[14px] font-semibold tracking-[-0.01em] transition-colors xl:px-4',
                        active || isOpen ? 'text-brand-600' : 'text-ink-soft hover:text-brand-600',
                      )}
                    >
                      {item.label}
                      <ChevronDown className={cn('h-3.5 w-3.5 opacity-70 transition-transform duration-300', isOpen && 'rotate-180')} />
                    </button>
                  ) : (
                    <Link
                      to={item.to!}
                      className={cn(
                        'px-3.5 py-2 text-[14px] font-semibold tracking-[-0.01em] transition-colors xl:px-4',
                        active ? 'text-brand-600' : 'text-ink-soft hover:text-brand-600',
                      )}
                    >
                      {item.label}
                    </Link>
                  )}

                  {active && (
                    <motion.span layoutId="nav-underline" className="absolute inset-x-3.5 bottom-0 h-[3px] rounded-t-full bg-gold-400 xl:inset-x-4" />
                  )}

                  <AnimatePresence>
                    {item.groups && isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        className={cn('absolute top-full z-10 pt-2', idx < nav.length / 2 ? '-left-2' : '-right-2')}
                      >
                        <div className={cn('overflow-hidden rounded-2xl border border-ink/[.07] bg-white shadow-lift', wide ? 'w-[600px]' : 'w-[360px]')}>
                          <div className={cn('grid gap-6 p-5', wide && 'grid-cols-[1.15fr_1fr]')}>
                            {item.groups.map((g) => (
                              <div key={g.title}>
                                <p className="mb-2 px-3 text-[11px] font-bold uppercase tracking-[.16em] text-ink-muted">{g.title}</p>
                                <ul className="space-y-0.5">
                                  {g.links.map((l) => (
                                    <li key={l.label}>
                                      <PanelLink link={l} active={matches(pathname, l.to)} />
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                          <div className="flex items-center justify-between gap-4 border-t border-ink/[.06] bg-cream px-6 py-3.5 text-[13px] font-semibold">
                            <a href={asset(institute.brochure)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-ink-soft hover:text-brand-600">
                              <Download className="h-4 w-4 text-brand-600" /> Download Brochure
                            </a>
                            <Link to="/enquiry" className="group/cta inline-flex items-center gap-1.5 text-brand-600 hover:text-brand-900">
                              Admission Enquiry
                              <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-0.5" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button to="/enquiry" variant="green" className="hidden !px-5 !py-2.5 sm:inline-flex">
            Apply Now
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
          <button
            type="button"
            onClick={() => setDrawer(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 text-ink transition-colors hover:border-brand-600 hover:text-brand-600 lg:hidden"
            aria-label="Open menu"
            aria-expanded={drawer}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {drawer && (
          <motion.div className="fixed inset-0 z-[60] lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 bg-ink/50 backdrop-blur-sm" onClick={() => setDrawer(false)} />
            <motion.aside
              className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-white"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              aria-label="Mobile menu"
            >
              <div className="flex items-center justify-between border-b border-ink/5 px-5 py-4">
                <img src={asset(institute.logo)} alt={institute.name} className="h-9 w-auto" />
                <button onClick={() => setDrawer(false)} aria-label="Close menu" className="rounded-full p-2 hover:bg-brand-50">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Mobile">
                <ul className="space-y-1">
                  {nav.map((item) => {
                    const active = itemActive(pathname, item);
                    return (
                      <li key={item.label}>
                        {item.groups ? (
                          <>
                            <button
                              onClick={() => setOpenGroup(openGroup === item.label ? null : item.label)}
                              className={cn(
                                'flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-semibold hover:bg-brand-50',
                                active ? 'text-brand-600' : 'text-ink',
                              )}
                              aria-expanded={openGroup === item.label}
                            >
                              {item.label}
                              <ChevronDown className={cn('h-4 w-4 transition-transform', openGroup === item.label && 'rotate-180')} />
                            </button>
                            <AnimatePresence initial={false}>
                              {openGroup === item.label && (
                                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                                  {item.groups.map((g) => (
                                    <div key={g.title} className="pb-2 pl-4">
                                      {item.groups!.length > 1 && (
                                        <p className="px-4 pb-1 pt-2 text-[11px] font-bold uppercase tracking-[.16em] text-ink-muted">{g.title}</p>
                                      )}
                                      <ul>
                                        {g.links.map((l) => (
                                          <li key={l.label}>
                                            <NavItemLink
                                              item={l}
                                              onClick={() => setDrawer(false)}
                                              className={cn(
                                                'block border-l-2 px-4 py-2.5 text-[15px]',
                                                matches(pathname, l.to) ? 'border-brand-600 font-semibold text-brand-600' : 'border-brand-100 text-ink-soft hover:border-brand-600 hover:text-brand-600',
                                              )}
                                            />
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <Link
                            to={item.to!}
                            onClick={() => setDrawer(false)}
                            className={cn('block rounded-xl px-4 py-3 text-base font-semibold hover:bg-brand-50', active ? 'text-brand-600' : 'text-ink')}
                          >
                            {item.label}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <div className="space-y-3 border-t border-ink/5 p-5">
                <Button to="/enquiry" variant="green" className="w-full">Apply Now</Button>
                <Button to={institute.brochure} file variant="outline" className="w-full">
                  <Download className="h-4 w-4" /> Download Brochure
                </Button>
                <a href={`tel:+91${contact.phones[0]}`} className="flex items-center justify-center gap-2 pt-1 text-sm font-semibold text-ink-soft">
                  <Phone className="h-4 w-4 text-brand-600" /> {contact.phones.join(', ')}
                </a>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/** A dropdown row: icon tile, label and optional one-line description. */
function PanelLink({ link, active }: { link: NavEntry; active: boolean }) {
  const Icon = link.icon;
  return (
    <NavItemLink
      item={link}
      className={cn('group/link flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors', active ? 'bg-brand-50' : 'hover:bg-brand-50/70')}
    >
      {Icon && (
        <span
          className={cn(
            'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors',
            active ? 'bg-brand-600 text-white' : 'bg-brand-50 text-brand-600 group-hover/link:bg-brand-600 group-hover/link:text-white',
          )}
        >
          <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
        </span>
      )}
      <span className="min-w-0">
        <span className={cn('block text-[14px] font-semibold leading-snug', active ? 'text-brand-600' : 'text-ink group-hover/link:text-brand-600')}>{link.label}</span>
        {link.desc && <span className="mt-0.5 block text-[12.5px] leading-snug text-ink-muted">{link.desc}</span>}
      </span>
    </NavItemLink>
  );
}
