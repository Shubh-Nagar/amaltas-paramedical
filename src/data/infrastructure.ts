/**
 * Infrastructure, Library, Pre-Clinical and Clinical departments —
 * verbatim from infrastructure.asp, library.asp, preclinical.asp, clinical.asp.
 * Lines containing " : " are rendered as label/value pairs; text is unchanged.
 */
import { range } from '@/lib/asset';

export const infrastructureIntro =
  'Infrastructure and facilities, of high quality, are maintained to ensure the good atmosphere is provided to student for academic and extra-curricular activities.';

export const infrastructureLinks = [
  { key: 'clinical', title: 'Clinical Departments', to: '/infrastructure/clinical' },
  { key: 'library', title: 'Library', to: '/infrastructure/library' },
  { key: 'preclinical', title: 'Pre-Clinical Departments', to: '/infrastructure/pre-clinical' },
];

/** clinical.asp lists 26 photos (8 appears before 7, 26 before 25 in the original order). */
export const clinicalImages: string[] = (() => {
  const all = range('images/clinical', 26, 'jpg');
  const order = [1, 2, 3, 4, 5, 6, 8, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26, 25];
  return order.map((n) => all[n - 1]);
})();

// ---------------------------------------------------------------- Library
export const library = {
  central: {
    heading: 'CENTRAL LIBRARY:',
    text: 'The library of is situated on ground floor having a total area of 26200 sq. ft. It has different sections with adequate capacity for each.',
  },
  specsHeading: 'Specifications:',
  specColumns: ['SECTION', 'MEASUREMENT OF AREA (IN SQ. FEET)', 'SEATING CAPACITY'],
  specs: [
    ['Outer Reading Hall', '150', '250'],
    ['Inner Reading Hall', '150', '250'],
    ['Faculty/Staff Room', '1,220', '50'],
    ['Resident/PG Room', '1,000', '50'],
    ['E-Library cum Computer Lab', '2,000', '50'],
    ['Journal Section', '1,658', '30'],
    ['Audio -Visual Room', '365', '30'],
    ['Reception/Photocopy Section', '380', 'NA'],
    ['Chief Librarian Room', '305', 'NA'],
    ['Deputy Library Room', '275', 'NA'],
    ['Daftary Room', '185', 'NA'],
    ['Cataloguer Room', '185', 'NA'],
    ['Book Binding Room', '175', 'NA'],
  ],
  timings: [
    { label: 'Stack Area', value: '09am – 04pm' },
    { label: 'Reading Area', value: '09am – 04pm' },
  ],
  facilities: {
    heading: 'Facilities:',
    items: [
      'Experienced and adequate staff',
      'E-Library cum computer lab',
      'Internet facility',
      'Updated journal section',
      'Stack Area',
      'Audio visual section',
      'Lockers for students',
      'Photocopy and printing facility',
    ],
  },
  journalSection: { heading: 'Journal Section:', items: ['Indian journals', 'Foreign journals', 'Internet nodes'] },
  eLibrary: { heading: 'E-Library:', items: ['Fully air conditioned', '10 browsing centres', 'Internet facility'] },
  centralData: {
    heading: 'CENTRAL LIBRARY DATA:',
    rows: [
      ['Total No. of Books', '11,795'],
      ['Total No. of Journals', '106'],
      ['Indian journals', '76'],
      ['Foreign journals', '30'],
      ['Internet nodes', '40'],
    ],
  },
  collegeData: {
    heading: 'COLLEGE LIBRARY DATA:',
    rows: [
      ['Total No. of Books', '622'],
      ['Total No. of Journals', '11'],
      ['Indian journals', '05'],
      ['Foreign journals', '06'],
    ],
  },
  photography: {
    heading: 'Central Photography Section:',
    text: 'A well equipped, updated & modern central photography section is established on ground floor. The section has all related modern technology and well experienced staff.',
  },
  college: {
    heading: 'College Library:',
    text: 'The library of is situated in college campus (Fifth Floor Hospital Building) having a total area of 1500 sq. ft. It has different sections with adequate capacity for each.',
  },
};

// ---------------------------------------------------------------- Pre-Clinical
export type InfoSection = { heading: string; lines: string[] };
export type Department = { id: string; title: string; sections: InfoSection[] };

export const preClinicalHeading = 'PRE-CLINICAL DEPARTMENTAL INFORMATION:';

export const lectureTheatres: InfoSection[] = [
  {
    heading: 'LECTURE THEATRES:',
    lines: ['Two air conditioned lecture theatres one in besment and other ground floor (area- 495 sqmtr. Each) are available'],
  },
  {
    heading: 'Facilities:',
    lines: ['Gallery type', 'Seating capacity – 180 students each', 'Audiovisual aids – LCD Projector, speakers, green board.'],
  },
];

export const preClinicalDepartments: Department[] = [
  {
    id: 'anatomy',
    title: 'DEPARTMENT OF ANATOMY:',
    sections: [
      {
        heading: 'Demonstration Room',
        lines: [
          'Number : 02',
          'Accommodation (of each demonstration room)',
          'Size : 64.4 sq. meter',
          'Capacity : 75 Students Each',
          'Audio-visual equipments available.',
          'Overhead Projector,',
          'Flip chairs - 75',
          'Green board - 1',
          'View box – 1',
          'OHP – 1',
          'Gross Anatomy Posters – 10',
        ],
      },
      {
        heading: 'Dissection Hall :',
        lines: [
          'Size : 4900 sqft.',
          'Capacity : 150 Students',
          'Number and arrangement of tables',
          'Big : 20',
          'Small : 05',
          'Hygiene and Drainage facilities for Disposal of Discarded parts and a burial ground is available.',
        ],
      },
      {
        heading: 'FACILITIES AVAILABLE:',
        lines: [
          'Washing arrangement - No. of wash basins provided 21 No.',
          'No. of lockers provided for students : 150',
          'Light and exhaust arrangements : Adequate.',
          'Special instruments other than routine Dissection sets, such as Electric saw, band Saw.',
          'Extra Learning Aids-',
          '(Skeleton, charts, black Board etc.)',
          'View Box, LCD Projector, Display, Board for Teaching Material, Charts, Green board, Loose Bone Sets.',
        ],
      },
      {
        heading: 'Cadaver Preservation Facilities :',
        lines: [
          'Embalming room : Available',
          'Size : 71.61sq. mts',
          'Location : Attached to the Dissection hall',
          'Storage Tanks',
          'Number : 3 (three)',
          'Total Size : 18.63 sq.mts',
          'Cold room/cooling cabinets : Available',
          'Size : 27.95 sq.m.',
          'Capacity : 8 bodies',
          'No. of cadaver available : 8 bodies',
          'No. of students allotted per cadaver : 15 students per cadaver/as per',
        ],
      },
      {
        heading: 'Histology Laboratory',
        lines: [
          'Size : 3358 sq.ft.',
          'Capacity : 90 Students',
          'Working Arrangement',
          'Seats available : for 90 Students',
          'Cupboard for storage of microscope slides etc : 6 cabinet for Slides (1000 slides per cabinet)',
          'Number of microscope with 1/3, 1/6& 1/12 objectives - 90',
          'Binocular microscope - 02',
          'Projection Microscope - 01',
          'Demonstration Microscope - 05',
          'Number of students to each microscope - 1 : 1',
          'Preparation room Size : 19.15sq.m.',
          'Other teaching aids:',
          'Histology transparencies',
          'Charts : 27',
          'Photoframes’s with diagram of microscopic slides.',
          'LCD projector : 01',
          'Display Board : 01',
        ],
      },
      {
        heading: 'Museum',
        lines: [
          'Size : 3172 sq.ft.',
          'Specimens arranged are region wise',
          'Give number of each : 117(WET SPECIMEN)',
          'Limbs : 28',
          'Thorax : 16',
          'Abdomen & Pelvis : 42',
          'Head, Neck : 04',
          'Brain : 17',
          'Embryology : 10',
          'Coverage of various fields in Anatomy by Specimens Gross anatomy, Embryology, Osteology, Radiological anatomy, Foetal anatomy',
          'No. of catalogues of the specimen available to the students.',
          '06 catalogues',
          'Number of microscope & X-ray views Boxes available to students in the museum.',
          'Hexagonal View Box - 01',
          'Rectangular - 01',
          'Separate Radiology section in Museum',
          'List of exhibits other than the specimens -',
          'Articulated Skeleton - 07',
          'Poster - 21 Radiology',
          '- 26 Embryology',
          '- 76 Embryology photo Frames.',
          'Models - 34',
          'Loose bone sets - 35',
          'Radiological & specialized imaging exhibits',
          'Number : 103',
          'Type : Plain X-rays, CT scans, MRI scans.',
          'Seating arrangement for 35 students',
          'Preparation and storage rooms : Available',
        ],
      },
      { heading: 'Research Lab', lines: ['Well equipped research lab', 'Area : 620 sq.ft.'] },
      { heading: 'Departmental library cum seminar room', lines: ['Area : 31.30 sq.meter', 'Seating capacity : 12', 'Books : 92'] },
    ],
  },
  {
    id: 'physiology',
    title: 'DEPARTMENT OF PHYSIOLOGY',
    sections: [
      {
        heading: 'Demonstration Room',
        lines: [
          'Number : 02(Two)',
          'Accommodation (of each demonstration room)',
          'Size : 625 sq. feet',
          'Capacity : 85 Students Each',
          'Audio-visual equipments available.',
          'Overhead Projector,',
          'Flip chairs - 85',
          'Green board - 1',
          'OHP – 1',
          'Gross Anatomy Posters – 36',
        ],
      },
      {
        heading: 'Clinical lab. :',
        lines: [
          'Size : 1900 sqft.',
          'Capacity : 90 Students',
          'Preparation room : Available',
          'Size : 150 sq.ft.',
          'Location : attached to the clinical lab',
          'Number and arrangement of tables',
          'Examination tables : 10',
          'Small : 05',
          'Clinical Equipments : Available',
          'Other Arrangements:-',
          'Washing arrangement - Available',
          'No. of wash basins provided : 03',
          'Light and exhaust arrangements : Adequate, Available',
          'Extra learning Aids : Available',
          'Clinical Posters : 31',
          'Green Board : 01',
        ],
      },
      {
        heading: 'Haematology Laboratory',
        lines: [
          'Size : 3935 sq.ft.',
          'Capacity : 90 Students',
          'Preparation room : 02',
          'Size : 149 sq.ft. each',
          'Location : Attached to Haematologylab',
          'Working Arrangement',
          'Seats available : for 90 Students',
          'Number of microscope - 90',
          'Binocular microscope - 02',
          'Number of students to each microscope - 1 : 1',
          'Washing Arrangement - Available',
          'No. of wash basins provided - 29',
          'Any other teaching aids:',
          'Haematology slides : yes, available',
          'Charts : 26',
          'Green Board : 01',
        ],
      },
      {
        heading: 'Amphibian Laboratory',
        lines: [
          'Size : 2600 sq.ft.',
          'Capacity : 90 Students',
          'Preparation room : Available',
          'Size : 146 sq.ft.',
          'Location : attached to the Amphibian lab.',
          'Preparation room store : Available',
          'Size : 142 sq.ft.',
          'Location : attached to the Amphibian lab.',
          'Number and arrangement of tables',
          'Total tables : 10 ( each table contains kymograph and dale’s organ bath with electric supply)',
          'Teaching Aids - Available',
          'Instruments / Equipments : Available (necessary for Amphibian Lab)',
          'Amphibian graph : 20',
          'Amphibian Posters : 02',
          'Green Board : 01',
        ],
      },
      {
        heading: 'Mammalian Lab.',
        lines: [
          'Size : 1300 sq.ft.',
          'Capacity : 90 Students',
          'Preparation room',
          'Size : 150 sq.ft.',
          'Location : attached to mammalian lab.',
          'No. of basins provided : 03',
          'Extra learning aids : Available',
          'Posters : 07',
          'Graphs : 11',
          'Green Board : 01',
        ],
      },
    ],
  },
  {
    id: 'biochemistry',
    title: 'Department of Biochemistry',
    sections: [
      {
        heading: 'Demonstration Room',
        lines: [
          'Number : 02(Two)',
          'Accommodation (of each demonstration room)',
          'Size : 65.0 sq. meter (demo room 1)',
          'Size : 60.859 meter (demo room 2)',
          'Capacity : 85 Students Each',
          'Audio-visual equipments - Available.',
          'Overhead Projector,',
          'OHP',
          'Teaching accessories - Charts',
          'Flip chairs - 85',
          'Green board – 01',
        ],
      },
      {
        heading: 'Undergraduate Practical Laboratory',
        lines: [
          'Size : 311.9 sq. m.',
          'Capacity : 100',
          'Number & arrangement table & racks',
          'Regent racks - 27 Nos. (each accommodate 4 students)',
          'Stools - 100 Nos.',
          'Small table - 04',
          'Washing arrangement 26 wash basins',
          'Light and exhaust - adequate',
          'Instruments / equipments - adequate',
          'Gas burners - 54 nos.',
          'Teaching accessories - charts',
          'Glass wares - available, adequate',
        ],
      },
      {
        heading: 'Research Laboratory',
        lines: [
          'Size : 59.9 sq.m',
          'Washing facility : Available',
          'Light and exhaust : Available, Adequate',
          'Special Instruments : Electrophoresis chamber, chromatography chamber, fume hood, PH meter, spectrophotometer, flame photo meter, UV lamp etc.',
          'Refrigerator : Available',
          'Glass ware : Available, Adequate',
        ],
      },
      { heading: 'Museum', lines: ['Size : 32.9 sq. m.', 'Models and charts available related to biochemistry and molecular biology'] },
      { heading: 'Departmental Library Cum Seminar Room', lines: ['Size : 27.5 sq. meter', 'Accommodate : 20 Nos.', 'No. of Books : 9'] },
    ],
  },
];
