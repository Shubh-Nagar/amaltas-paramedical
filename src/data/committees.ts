/**
 * Anti-ragging measures (antiragging.asp) and Student Grievance Committee
 * (student_grievance_committee.asp) — names, numbers and e-mails verbatim.
 */

export type Member = { name: string; designation: string; phone: string; email: string };
export type Committee = { title: string; columns: [string, string, string, string, string]; members: Member[] };

export const antiRaggingHelpline = {
  tollFreeLabel: 'Toll Free Number to Report Ragging',
  tollFree: '1800-180-5522',
  emailLabel: 'E-mail',
  email: 'helpline@antiragging.in',
  posters: ['images/antiragging1.jpeg', 'images/antiragging2.jpeg'],
  tagline: 'Ragging in any form is punishable. Join hands to make your campus ragging free.',
};

const cols: Committee['columns'] = ['S.No.', 'Name', 'Designation', 'Contact No.', 'E-mail Id'];

export const antiRaggingCommittees: Committee[] = [
  {
    title: 'Anti Ragging Squad:',
    columns: cols,
    members: [
      { name: 'Dr. Jagat Rawat', designation: 'President', phone: '9755505006', email: 'Jbr.19indore@gmail.com' },
      { name: 'Dr. Neha Gour', designation: 'Member', phone: '9179541247', email: 'Gaurneha1986@gmail.com' },
      { name: 'Dr. Vidhi Tiwari', designation: 'Member', phone: '9407132324', email: 'Vidhitiwari61@gmail.com' },
      { name: 'Ms. Shakuntal Mandloi', designation: 'Member', phone: '8909512829', email: 'Shakuntalmandloi876@gmail.com' },
      { name: 'Mr. Ashwin Tanwar', designation: 'Director Marketing', phone: '9754829547', email: 'Dkt.mark@amaltasuniversity.in' },
    ],
  },
  {
    title: 'Anti Ragging Committee',
    columns: ['S.No.', 'Name of Committee Member', 'Designation', 'Contact No.', 'E-mail Id'],
    members: [
      { name: 'Dr. Jagat Rawat', designation: 'President', phone: '9755505006', email: 'Jbr.19indore@gmail.com' },
      { name: 'Dr. Sneha Sahay Youtham', designation: 'Member', phone: '8085525506', email: 'anney_sha13@yahoo.com' },
      { name: 'Dr. Manish Sharma', designation: 'Member', phone: '7024107445', email: 'generalmanager@amaltasgroup.co.in' },
      { name: 'Dr. Anjali Mehta', designation: 'Member', phone: '9407132324', email: 'dranjalimehta5@gmail.com' },
      { name: 'Dr. Pooja Verma', designation: 'Member', phone: '6264182588', email: 'verma.pooja7274@gmail.com' },
      { name: 'Mrs. Vaishali Paithankar', designation: 'Parent', phone: '9926810753', email: 'vaishalipaithankar13@gmail.com' },
      { name: 'Mr. Chintaman Patel', designation: 'Security', phone: '7479003072', email: 'chintamanbilwlly2984@gmail.com' },
      { name: 'Mr. Sheob Mansori', designation: 'Senior Sec.', phone: '7610120251', email: 'shoedshoeb211@gmail.com' },
      { name: 'Ms. Chanchal Sharma', designation: 'Fresher St.', phone: '9303743661', email: 'chsharma3661@gmail.com' },
    ],
  },
  {
    title: 'Gender Harassment Committee:',
    columns: cols,
    members: [
      { name: 'Dr. Jagat Rawat', designation: 'President', phone: '9755505006', email: 'jbr.195indore@gmail.com' },
      { name: 'Dr. Sneha Sahay Youtham', designation: 'Member', phone: '8085525506', email: 'anney_sha13@yahoo.com' },
      { name: 'Dr. Anjali Mehta', designation: 'Member', phone: '7879378428', email: 'dranjalimehta5@gmail.com' },
      { name: 'Ms. Pooja Verma', designation: 'Member', phone: '6264182588', email: 'verma.pooja7274@gmail.com' },
      { name: 'Ms. Shakuntal Mandloi', designation: 'Member', phone: '8909512829', email: 'shakuntalmandloi876@gmail.com' },
    ],
  },
];

export const grievanceCommittee: Committee = {
  title: 'Student Grievance Committee:',
  columns: ['S.No.', 'Name', 'Position', 'Contact No.', 'E-mail'],
  members: [
    { name: 'Dr. Jagat Bahadur Rawat', designation: 'Chairperson', phone: '9755505006', email: 'Jbr.19indore@gmail.com' },
    { name: 'Dr. Anjali Mehta', designation: 'Member', phone: '7879378428', email: 'dranjalimehta5@gmail.com' },
    { name: 'Dr. Vani Dharya', designation: 'Member', phone: '8532996362', email: 'vanidharya506@gmail.com' },
    { name: 'Dr. Bharti Lahoriya', designation: 'Member', phone: '9685774637', email: 'lahoria.bharti@gmail.com' },
    { name: 'Dr. Pooja Verma', designation: 'Member', phone: '6264182588', email: 'verma.pooja7274@gmail.com' },
    { name: 'Ms. Shakuntla Mandloi', designation: 'Member', phone: '8109512829', email: 'shakuntlamandloi876@gmail.com' },
    { name: 'Mr. Shikhaj Rathore', designation: 'Member', phone: '8871252568', email: 'rathoreshikhaj@gmail.com' },
  ],
};
