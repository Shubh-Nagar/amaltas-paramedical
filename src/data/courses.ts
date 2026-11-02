/**
 * Courses + fees — verbatim from courses.asp and fees.asp.
 * `code` is the abbreviation used on the original site's enquiry form.
 */

export type Course = {
  name: string;
  code: string;
  duration: string;
  seats: string;
  fee: string;
};

export type CourseLevel = {
  key: 'degree' | 'diploma' | 'certificate';
  title: string;
  image: string;
  courses: Course[];
};

export const courseLevels: CourseLevel[] = [
  {
    key: 'degree',
    title: 'Degree Courses',
    image: 'images/degree.jpg',
    courses: [
      { name: 'Bachelor of Physiotherapy', code: 'B.P.T.', duration: 'IV Years', seats: '50 Seats', fee: 'Rs. 75000 / year' },
      { name: 'Medical Lab. Technician', code: 'B.M.L.T.', duration: 'III Years', seats: '100 Seats', fee: 'Rs. 75000 / year' },
      { name: 'X-Ray (Radiographer) Technician', code: 'B.X.R.T.', duration: 'III Years', seats: '50 Seats', fee: 'Rs. 55000 / year' },
    ],
  },
  {
    key: 'diploma',
    title: 'Diploma',
    image: 'images/diploma.jpg',
    courses: [
      { name: 'Medical Lab. Technician', code: 'D.M.L.T.', duration: 'II Years', seats: '100 Seats', fee: 'Rs. 40000 / year' },
      { name: 'Dialysis Technician', code: 'Diploma in Dialysis', duration: 'II Years', seats: '50 Seats', fee: 'Rs. 30000 / year' },
      { name: 'Cath Lab. Technician', code: 'Diploma in Cath Lab', duration: 'II Years', seats: '50 Seats', fee: 'Rs. 30000 / year' },
    ],
  },
  {
    key: 'certificate',
    title: 'Certificate Courses',
    image: 'images/certificate.jpg',
    courses: [
      { name: 'X-Ray (Radiographer) Technician', code: 'X- Ray Technician', duration: 'I year', seats: '50 Seats', fee: 'Rs. 30000 / year' },
      { name: 'O.T. Technician', code: 'O. T. Technician', duration: 'I Year', seats: '50 Seats', fee: 'Rs. 20000 / year' },
      { name: 'Ultra Sound Technician', code: 'U.S. G.', duration: 'I Year', seats: '50 Seats', fee: 'Rs. 20000 / year' },
    ],
  },
];

/** Department options exactly as listed on the original enquiry form. */
export const enquiryDepartments = [
  'B.P.T.',
  'B.M.L.T.',
  'B.X.R.T.',
  'D.M.L.T.',
  'Diploma in Cath Lab',
  'Diploma in Dialysis',
  'O. T. Technician',
  'X- Ray Technician',
  'U.S. G.',
];

/** Derived figures (computed from the data above, not invented). */
export const totalProgrammes = courseLevels.reduce((n, l) => n + l.courses.length, 0);
export const totalSeats = courseLevels.reduce(
  (n, l) => n + l.courses.reduce((s, c) => s + parseInt(c.seats, 10), 0),
  0,
);
