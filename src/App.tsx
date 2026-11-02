import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';

// Route-level code splitting: the home page loads instantly, the rest on demand.
const About = lazy(() => import('@/pages/About'));
const VisionMission = lazy(() => import('@/pages/VisionMission'));
const Message = lazy(() => import('@/pages/Message'));
const Courses = lazy(() => import('@/pages/Courses'));
const AdmissionCriteria = lazy(() => import('@/pages/AdmissionCriteria'));
const AcademicCalendar = lazy(() => import('@/pages/AcademicCalendar'));
const Infrastructure = lazy(() => import('@/pages/Infrastructure'));
const Clinical = lazy(() => import('@/pages/Clinical'));
const LibraryPage = lazy(() => import('@/pages/LibraryPage'));
const PreClinical = lazy(() => import('@/pages/PreClinical'));
const Events = lazy(() => import('@/pages/Events'));
const EventDetail = lazy(() => import('@/pages/EventDetail'));
const Gallery = lazy(() => import('@/pages/Gallery'));
const News = lazy(() => import('@/pages/News'));
const Affiliations = lazy(() => import('@/pages/Affiliations'));
const Placement = lazy(() => import('@/pages/Placement'));
const AntiRagging = lazy(() => import('@/pages/AntiRagging'));
const StudentGrievance = lazy(() => import('@/pages/StudentGrievance'));
const Enquiry = lazy(() => import('@/pages/Enquiry'));
const Contact = lazy(() => import('@/pages/Contact'));
const NotFound = lazy(() => import('@/pages/NotFound'));

function PageFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <span className="h-10 w-10 animate-spin rounded-full border-4 border-brand-100 border-t-brand-600" aria-label="Loading" />
    </div>
  );
}

/** Old .asp URLs → new routes, so existing links and bookmarks keep working. */
const legacy: Record<string, string> = {
  'default.asp': '/',
  'aboutus.asp': '/about',
  'vision.asp': '/vision-mission',
  'chairman.asp': '/messages/chairman',
  'dean.asp': '/messages/dean',
  'director.asp': '/messages/director',
  'principal.asp': '/messages/principal',
  'courses.asp': '/courses',
  'academic.asp': '/admission-criteria',
  'academic_calendar.asp': '/academic-calendar',
  'fees.asp': '/fees',
  'infrastructure.asp': '/infrastructure',
  'clinical.asp': '/infrastructure/clinical',
  'library.asp': '/infrastructure/library',
  'preclinical.asp': '/infrastructure/pre-clinical',
  'events.asp': '/events',
  'photogallery.asp': '/gallery',
  'news.asp': '/news',
  'supporting_aff_lic.asp': '/affiliations',
  'placement.asp': '/placement',
  'antiragging.asp': '/anti-ragging',
  'student_grievance_committee.asp': '/student-grievance-committee',
  'enquiry.asp': '/enquiry',
};

export default function App() {
  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vision-mission" element={<VisionMission />} />
          <Route path="messages/:slug" element={<Message />} />
          <Route path="courses" element={<Courses />} />
          <Route path="fees" element={<Courses showFees />} />
          <Route path="admission-criteria" element={<AdmissionCriteria />} />
          <Route path="academic-calendar" element={<AcademicCalendar />} />
          <Route path="infrastructure" element={<Infrastructure />} />
          <Route path="infrastructure/clinical" element={<Clinical />} />
          <Route path="infrastructure/library" element={<LibraryPage />} />
          <Route path="infrastructure/pre-clinical" element={<PreClinical />} />
          <Route path="events" element={<Events />} />
          <Route path="events/:slug" element={<EventDetail />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="news" element={<News />} />
          <Route path="affiliations" element={<Affiliations />} />
          <Route path="placement" element={<Placement />} />
          <Route path="anti-ragging" element={<AntiRagging />} />
          <Route path="student-grievance-committee" element={<StudentGrievance />} />
          <Route path="enquiry" element={<Enquiry />} />
          <Route path="contact" element={<Contact />} />
          {Object.entries(legacy).map(([from, to]) => (
            <Route key={from} path={from} element={<Navigate to={to} replace />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
