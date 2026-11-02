/** Admission criteria (academic.asp) and Academic Calendar (academic_calendar.asp) — verbatim. */

export const admissionCriteria = {
  title: 'ADMISSION CRITERIA',
  subtitle: '(As Per Madhya Pradesh Paramedical Council Norms)',
  intro:
    'All admissions in Amaltas Institute of Medical Sciences (Paramedical) shall be conducted strictly according to the rules, regulations, and guidelines issued by the Madhya Pradesh Paramedical Council and the concerned affiliating authority.',
  eligibilityHeading: 'Eligibility Criteria for Admission',
  qualification: {
    heading: 'Educational Qualification',
    text: 'Candidate must have passed 10+2 (Higher Secondary Examination) from a recognized Board.',
    subjectsLead: 'For Courses the candidate must have studied:',
    subjects: ['Physics', 'Chemistry', 'Biology', 'English'],
  },
  marks: {
    heading: 'Minimum Qualifying Marks',
    rows: [
      { label: 'General Category', value: 'Minimum 40% marks in qualifying examination.' },
      { label: 'SC/ST/OBC Category', value: 'Minimum 33% marks or as per Government norms.' },
    ],
  },
  age: {
    heading: 'Age Criteria',
    text: 'Candidate must have completed 17 years of age at the time of admission not more than 45 years.',
  },
  procedure: {
    heading: 'Admission Procedure',
    points: [
      'Admission shall be granted on the basis of merit in qualifying examination and fulfillment of eligibility criteria prescribed by MP Paramedical Council.',
      'Admission shall remain provisional until verification and approval by the concerned regulatory authorities.',
    ],
  },
  documents: {
    heading: 'Mandatory Documents',
    lead: 'Candidates must submit the following documents at the time of admission:',
    items: [
      '10th Marksheet',
      '12th Marksheet',
      'Transfer Certificate (TC)',
      'Migration Certificate (if applicable)',
      'Aadhaar Card',
      'Passport Size Photographs',
      'Caste Certificate (if applicable)',
      'Income Certificate',
      'Domicile Certificate (if applicable)',
    ],
  },
  rules: {
    heading: 'Council & University Rules',
    points: [
      'Students must comply with all rules and regulations of the Madhya Pradesh Paramedical Council and Amaltas University.',
      'Admission in unrecognized courses or without proper eligibility shall be treated as invalid.',
    ],
  },
  note: {
    heading: 'Important Note',
    points: [
      'The institute reserves the right to cancel admission if any document/information provided by the student is found incorrect or if the student fails to fulfill MP Paramedical Council norms.',
      'Admission shall be subject to approval/recognition by the competent authority and MP Paramedical Council.',
    ],
  },
  signature: ['Dr. Sneha Sahay Youtham', 'DIRECTOR', 'Amaltas Institute of Medical Sciences (Paramedical)', 'Vill. Bangar, Dewas (M.P.)'],
};

export const calendar = {
  title: 'Academic Calendar (January 2026 – December 2026)',
  session: 'Academic Session: 2025–2026',
  months: [
    {
      month: 'January 2026',
      academic: ['Regular theory and practical classes; Clinical postings', 'Student mentoring sessions'],
      health: ['12 January: National Youth Day', '30 January: Anti-Leprosy Day', 'Health Awareness Lecture'],
    },
    {
      month: 'February 2026',
      academic: ['Regular classes', 'Clinical training', 'Skill laboratory sessions'],
      health: ['4 February: World Cancer Day', "13 February: National Women's Day (India)", 'Community Health Awareness Programme'],
    },
    {
      month: 'March 2026',
      academic: ['Completion of syllabus (Phase-I)', 'Practical demonstrations', 'Revision classes'],
      health: ["8 March: International Women's Day", '24 March: World Tuberculosis Day', 'Free TB Awareness Camp'],
    },
    {
      month: 'April 2026',
      academic: ['Internal Assessment Examination (Theory & Practical)', 'Practical Record Submission', 'Viva-Voce', 'Pre-University Examination Preparation'],
      health: ['7 April: World Health Day (Health Exhibition & Seminar)', '17 April: World Hemophilia Day'],
    },
    {
      month: 'May 2026',
      academic: ['1st Week: Council Admission Process for New Session; Summer Vacation (2nd–4th Week)', 'Faculty Development Programme', 'Planning for National conference'],
      health: ['8 May: World Red Cross Day', '12 May: International Nurses Day 17 May: World Hypertension Day', '31 May: World No Tobacco Day Campaign'],
    },
    {
      month: 'June 2026',
      academic: ['Council Registration Process', 'University Final Practical & Theory Examinations (as per University Schedule)', 'Interdisciplinary teaching programme'],
      health: ['14 June: World Blood Donor Day (Blood Donation Camp)', '21 June: International Yoga Day', '26 June: International Day Against Drug Abuse'],
    },
    {
      month: 'July 2026',
      academic: ['Continuation/Completion of University Final Examinations (if scheduled)', 'University Enrollment Process', 'Result Preparation; Orientation for New Students'],
      health: ["1–7 July: Doctors' Appreciation Week", '28 July:World Hepatitis Day (Hepatitis Screening & Awareness Programme)'],
    },
    {
      month: 'August 2026',
      academic: ['Commencement of New Academic Activities (if applicable)', 'Bridge Classes; Clinical Orientation'],
      health: ['1–7 August: World Breastfeeding Week', '15 August: Independence Day', 'Organ Donation Awareness Programme'],
    },
    {
      month: 'September 2026',
      academic: ['First Internal Assessment Examination (New Batch)', 'Academic Review', 'Parent–Teacher Meeting'],
      health: ['17 September: World Patient Safety Day', "21 September: World Alzheimer's Day", '29 September: World Heart Day (Cardiac Health Camp)', '13 September: World Physiotherapy Day Celebration'],
    },
    {
      month: 'October 2026',
      academic: ['Regular classes', 'Clinical postings', 'Community postings', 'Seminar Presentations'],
      health: ['1 October: International Day of Older Persons', '10 October: World Mental Health Day', '15 October: Global Handwashing Day', '16 October: World Anaesthesia Day'],
    },
    {
      month: 'November 2026',
      academic: ['Mid-semester academic review', 'Clinical skill evaluation'],
      health: ['14 November: World Diabetes Day (Diabetes Screening Camp)', '17 November: World Prematurity Day', '19 November: World COPD Day', 'Antimicrobial Awareness Week'],
    },
    {
      month: 'December 2026',
      academic: ['Completion of semester syllabus', 'Pre-final revision', 'Practical demonstrations', 'Winter Break (if applicable)', 'Annual Academic Review'],
      health: ['1 December: World AIDS Day (Awareness Rally)', '3 December: International Day of Persons with Disabilities', '10 December: Human Rights Day'],
    },
  ],
  majorEventsTitle: 'Major Academic Events (Session 2025–2026)',
  majorEvents: [
    { activity: 'Regular Academic Teaching', schedule: 'January–April 2026' },
    { activity: 'Internal Assessment (Current Batch)', schedule: 'April 2026' },
    { activity: 'Council Admission Process (New Session)', schedule: '1st Week of May 2026' },
    { activity: 'Summer Vacation', schedule: 'May 2026' },
    { activity: 'Council Registration', schedule: 'June 2026' },
    { activity: 'University Final Examinations', schedule: 'June–July 2026' },
    { activity: 'University Enrollment', schedule: 'July 2026' },
    { activity: 'Orientation Programme', schedule: 'July/August 2026' },
    { activity: 'First Internal Assessment (New Batch)', schedule: 'September 2026' },
  ],
  healthActivitiesTitle: 'Institutional Health Awareness Activities',
  healthActivities: [
    'World Cancer Day', 'World Tuberculosis Day', 'World Health Day', 'International Nurses Day', 'World Hypertension Day',
    'World No Tobacco Day', 'World Blood Donor Day – Blood Donation Camp', 'International Yoga Day', 'International Day Against Drug Abuse',
    'World Hepatitis Day', 'World Breastfeeding Week', 'World Physiotherapy Day', 'World Patient Safety Day', 'World Heart Day',
    'World Mental Health Day', 'Global Handwashing Day', 'World Anaesthesia Day', 'World Diabetes Day', 'World Prematurity Day',
    'World COPD Day', 'World AIDS Day', 'International Day of Persons with Disabilities',
  ],
};

/** Affiliation, examination and placement (supporting_aff_lic.asp, placement.asp). */
export const affiliation = {
  title: 'Affiliation & Permission',
  statement:
    'Amaltas Institute of Medical Sciences (Paramedical Science) is affiliated from M.P. Paramedical Council, Bhopal and MPMSU University, Jabalpur.',
  examination: {
    title: 'Examination',
    icon: 'images/Examination.png',
    text: 'Publication of examination as per MPMSU University Jabalpur and Amaltas University MP paramedical council Bhopal',
  },
};

export const placement = {
  title: 'Placement',
  icon: 'images/Placement.png',
  text:
    'At our institute we provide each student the opportunity by inviting various institutions and organisations for campus selection, in a systematic way, at successful completion of course.',
};
