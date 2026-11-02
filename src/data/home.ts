/** Home page content — verbatim from the original home page. */

export const homeIntro = {
  title: 'Amaltas Institute of Medical Sciences (Paramedical Science)',
  body:
    'Amaltas Institute of Medical Sciences (Paramedical Science) was established in the year 2016. The course outline and the syllabus are designed by the Madhya Pradesh Paramedical council Bhopal, MPMSU Jabalpur The fundamental idea behind is to develop and mould the students as successful individuals to get a job not only in India but also abroad. The course provides a comprehensive idea, principle, and practices of various para medical procedures.',
};

/** The four info tiles on the original home page. */
export const homeTiles = [
  {
    key: 'courses',
    title: 'Courses Offered',
    body: homeIntro.body,
    to: '/courses',
  },
  {
    key: 'admissions',
    title: 'Admissions & Fees',
    body:
      'We offer Degree (B.P.T.,B.M.L.T.,B.X.R.T.), Diploma (D.M.L.T., Diploma in Cath Lab, Diploma in Dialysis) and Certificate Courses (O.T Technician, X- Ray Technician, U.S.G.) at Amaltas Institute of Medical Sciences (Paramedical), Dewas',
    to: '/fees',
  },
  {
    key: 'examination',
    title: 'Examination',
    body: 'Publication of examination as per MPMSU university Jabalpur and Amaltas University MP paramedical council Bhopal',
    to: '/affiliations',
  },
  {
    key: 'placement',
    title: 'Placement',
    body:
      'At our institute we provide each student the opportunity by inviting various institutions and organisations for campus selection, in a systematic way, at successful completion of course.',
    to: '/placement',
  },
] as const;

/** Course-level images shown on the original home page. */
export const programmeImages = {
  degree: 'images/degree.jpg',
  diploma: 'images/diploma.jpg',
  certificate: 'images/certificate.jpg',
};

/** "Departments" highlight cards with "Read More" on the original home page. */
export const homeHighlights = [
  {
    title: 'Affiliations & Permission',
    body:
      'Amaltas Institute of Medical Sciences (Paramedical Science) is affiliated from M.P. Paramedical Council, Bhopal and MPMSU University, Jabalpur.',
    to: '/affiliations',
  },
  {
    title: 'Anti-Ragging Measures',
    body: 'Ragging in any form is punishable. Join hands to make your campus ragging free.',
    to: '/anti-ragging',
  },
  {
    title: 'Infrastructure',
    body:
      'Infrastructure & facilities, of high quality, are main-tained to ensure the good atmosphere is provided to student for academic and extra-curricular activities.',
    to: '/infrastructure',
  },
];

/** Gallery thumbnails featured on the original home page. */
export const homeGallery = [
  'photogallery/32.jpeg',
  'photogallery/33.jpeg',
  'photogallery/34.jpeg',
  'photogallery/36.jpeg',
  'photogallery/37.jpeg',
  'photogallery/38.jpeg',
  'photogallery/39a.png',
  'photogallery/41a.png',
];
