import Hero from '@/components/sections/Hero';
import StatsStrip from '@/components/sections/StatsStrip';
import AboutIntro from '@/components/sections/AboutIntro';
import Programmes from '@/components/sections/Programmes';
import Highlights from '@/components/sections/Highlights';
import Leadership from '@/components/sections/Leadership';
import EventsPreview from '@/components/sections/EventsPreview';
import NewsMarquee from '@/components/sections/NewsMarquee';
import GalleryPreview from '@/components/sections/GalleryPreview';
import AdmissionPopup from '@/components/layout/AdmissionPopup';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export default function Home() {
  useDocumentTitle();
  return (
    <>
      <Hero />
      <StatsStrip />
      <AboutIntro />
      <Programmes />
      <Highlights />
      <Leadership />
      <EventsPreview />
      <NewsMarquee />
      <GalleryPreview />
      <AdmissionPopup />
    </>
  );
}
