/**
 * Global site data — institute identity, contact details, social links and
 * navigation. All text is taken verbatim from http://amaltasgroup.co.in/paramedical/
 */
import {
  BadgeCheck, Briefcase, Building2, CalendarDays, ClipboardCheck, GraduationCap, Images, LayoutGrid, Library,
  Microscope, Newspaper, PartyPopper, Quote, Scale, ShieldCheck, Stethoscope, Target, Wallet,
  type LucideIcon,
} from 'lucide-react';

export const institute = {
  name: 'Amaltas Institute of Medical Sciences (Paramedical Science)',
  shortName: 'Amaltas Paramedical',
  pageTitle: 'Amaltas Institute of Paramedical Sciences, Dewas',
  established: 2016,
  logo: 'images/logo.png',
  universityLogo: 'images/AU_Logo.jpeg',
  universityUrl: 'https://amaltasuniversity.in/',
  brochure: 'pdf/brochure.pdf',
  introVideo: 'images/paramedical-intro-new2.mp4',
  admissionPopup: 'images/popup2.jpeg',
};

export const contact = {
  email: 'paramedical@amaltasgroup.co.in',
  phones: ['7881054604', '9755559915'],
  addressLines: [
    'Amaltas Institute of Medical Sciences (Paramedical Science),',
    'Village Bangar,',
    'Dewas - Ujjain Highway,',
    'District Dewas, MP-455001',
  ],
  mapUrl: 'https://maps.app.goo.gl/vNpkfjzKbj18P6Ue6',
  /** Embedded map (search query for the same address). */
  mapEmbed:
    'https://www.google.com/maps?q=Amaltas+Institute+of+Medical+Sciences,+Village+Bangar,+Dewas+Ujjain+Highway,+Dewas&output=embed',
  /** The original "Contact" menu item points to this page. */
  externalContactUrl: 'https://amaltasmedicalcollege.in/contact/',
};

export const socials = {
  facebook: 'https://www.facebook.com/amaltasinstituteofparamedicalsciences/',
  instagram: 'https://www.instagram.com/amaltasinstituteofparamedical/',
};

export const footerNote = {
  copyright: '@Copyright 2026 All rights reserved Amaltas Institute of Medical Sciences (Paramedical Science)',
};

export type NavLink = { label: string; to: string; external?: boolean; download?: boolean };
export type NavEntry = NavLink & { desc?: string; icon?: LucideIcon };
export type NavGroup = { title: string; links: NavEntry[] };
export type NavItem = { label: string; to?: string; groups?: NavGroup[] };

/** Main navigation — six top-level entries; dropdowns are grouped panels. */
export const nav: NavItem[] = [
  { label: 'Home', to: '/' },
  {
    label: 'About',
    groups: [
      {
        title: 'The Institute',
        links: [
          { label: 'About the Institute', to: '/about', desc: 'Our story and department', icon: Building2 },
          { label: 'Vision & Mission', to: '/vision-mission', desc: 'What drives us', icon: Target },
          { label: 'Affiliations & Permissions', to: '/affiliations', desc: 'Approvals and recognition', icon: BadgeCheck },
        ],
      },
      {
        title: 'Leadership',
        links: [
          { label: 'Chairman’s Message', to: '/messages/chairman', icon: Quote },
          { label: 'Dean’s Message', to: '/messages/dean', icon: Quote },
          { label: 'Director’s Message', to: '/messages/director', icon: Quote },
          { label: 'Principal’s Message', to: '/messages/principal', icon: Quote },
        ],
      },
    ],
  },
  {
    label: 'Academics',
    groups: [
      {
        title: 'Academics',
        links: [
          { label: 'Courses Offered', to: '/courses', desc: 'Paramedical programmes', icon: GraduationCap },
          { label: 'Admission Criteria', to: '/admission-criteria', desc: 'Eligibility and process', icon: ClipboardCheck },
          { label: 'Admissions & Fees', to: '/fees', desc: 'Fee structure by course', icon: Wallet },
          { label: 'Academic Calendar', to: '/academic-calendar', desc: 'Session schedule', icon: CalendarDays },
        ],
      },
    ],
  },
  {
    label: 'Campus',
    groups: [
      {
        title: 'Infrastructure',
        links: [
          { label: 'Infrastructure Overview', to: '/infrastructure', desc: 'Facilities at a glance', icon: LayoutGrid },
          { label: 'Clinical Departments', to: '/infrastructure/clinical', desc: 'Hospital-based training', icon: Stethoscope },
          { label: 'Pre-Clinical Departments', to: '/infrastructure/pre-clinical', desc: 'Labs and practicals', icon: Microscope },
          { label: 'Library', to: '/infrastructure/library', desc: 'Books and journals', icon: Library },
        ],
      },
    ],
  },
  {
    label: 'Student Life',
    groups: [
      {
        title: 'Campus Life',
        links: [
          { label: 'Events & Activities', to: '/events', desc: 'Celebrations and programmes', icon: PartyPopper },
          { label: 'Gallery', to: '/gallery', desc: 'Life on campus', icon: Images },
          { label: 'News & Updates', to: '/news', desc: 'Latest announcements', icon: Newspaper },
          { label: 'Placement', to: '/placement', desc: 'Careers after graduation', icon: Briefcase },
        ],
      },
      {
        title: 'Student Welfare',
        links: [
          { label: 'Anti-Ragging Committee', to: '/anti-ragging', icon: ShieldCheck },
          { label: 'Grievance Redressal', to: '/student-grievance-committee', icon: Scale },
        ],
      },
    ],
  },
  { label: 'Contact', to: '/contact' },
];

/** Footer link columns — same groupings as the original footer. */
export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: 'About Us',
    links: [
      { label: 'About The Department', to: '/about' },
      { label: 'Vision & Mission', to: '/vision-mission' },
      { label: 'Chairman’s Message', to: '/messages/chairman' },
      { label: 'Dean’s Message', to: '/messages/dean' },
      { label: 'Director’s Message', to: '/messages/director' },
      { label: 'Principal’s Message', to: '/messages/principal' },
      { label: 'Brochure', to: 'pdf/brochure.pdf', external: true, download: true },
    ],
  },
  {
    title: 'Anti-Ragging Measures',
    links: [
      { label: 'Anti-Ragging Committee', to: '/anti-ragging' },
      { label: 'Student Grievances Redressal Committee', to: '/student-grievance-committee' },
    ],
  },
  {
    title: 'Important Links',
    links: [
      { label: 'Affiliations And Permission', to: '/affiliations' },
      { label: 'Admissions & Fees', to: '/fees' },
      { label: 'Infrastructure', to: '/infrastructure' },
      { label: 'Placement', to: '/placement' },
    ],
  },
];
