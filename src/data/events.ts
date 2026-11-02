/**
 * Events / Activities — titles, dates, cover images and full photo albums
 * exactly as published on events.asp and its album pages (newest first).
 */
import { range } from '@/lib/asset';

export type EventItem = {
  slug: string;
  title: string;
  date?: string;
  cover: string;
  photos: string[];
};

const A = 'activities';

export const events: EventItem[] = [
  { slug: 'garba-celebration-2026', title: 'A Glimpse of Garba Celebration at Amaltas Institute of Medical Sciences (Paramedical Sciences)', date: '16th October, 2026', cover: `${A}/garba/1.jpeg`, photos: range(`${A}/garba`, 6, 'jpeg') },
  { slug: 'clinical-teaching-session-sep-2026', title: 'Clinical Teaching Session Conducted', date: '22nd September, 2026', cover: `${A}/clinical26/1.jpeg`, photos: range(`${A}/clinical26`, 4, 'jpeg') },
  { slug: 'world-heart-day-2026', title: 'Celebrating World Heart Day!', date: '29th September, 2026', cover: `${A}/heart/1.jpeg`, photos: range(`${A}/heart`, 12, 'jpeg') },
  { slug: 'world-suicide-prevention-day-2026', title: 'World Suicide Prevention Day', date: '14th September, 2026', cover: `${A}/suicide/1.jpeg`, photos: range(`${A}/suicide`, 9, 'jpeg') },
  { slug: 'khelo-india-samvad-2026', title: 'अमलतास विश्वविद्यालय में हुआ ‘खेलो इंडिया संवाद’ - प्रधानमंत्री श्री नरेंद्र मोदी ने देशभर के युवाओं से किया संवाद', date: '27th August, 2026', cover: `${A}/khelo/7.jpeg`, photos: range(`${A}/khelo`, 12, 'jpeg') },
  { slug: 'independence-day-2026', title: 'Independence Day Celebration 2026 | Amaltas University', date: '15th August, 2026', cover: `${A}/independence26/4.jpeg`, photos: range(`${A}/independence26`, 16, 'jpeg') },
  { slug: 'clinical-teaching-session-aug-2026', title: 'Clinical Teaching Session Conducted', date: '13th August, 2026', cover: `${A}/clinical/1.jpeg`, photos: range(`${A}/clinical`, 5, 'jpeg') },
  { slug: 'kadam-barao-ragging-hatao', title: 'Kadam barao Ragging hatao', date: '12th August, 2026', cover: `${A}/kadam/1.jpeg`, photos: range(`${A}/kadam`, 3, 'jpeg') },
  { slug: 'breastfeeding-week-2026', title: 'Breastfeeding Week', date: '03rd August, 2026', cover: `${A}/breast/1.jpeg`, photos: range(`${A}/breast`, 6, 'jpeg') },
  { slug: 'world-brain-day-2026', title: 'World Brain Day', date: '22nd July, 2026', cover: `${A}/brain_day/1.jpeg`, photos: range(`${A}/brain_day`, 4, 'jpeg') },
  { slug: 'student-visit-anatomy-lab', title: 'Student Visit to Anatomy Lab', date: '20th July, 2026', cover: `${A}/anatomy_lab/1.jpeg`, photos: range(`${A}/anatomy_lab`, 6, 'jpeg') },
  { slug: 'international-yoga-day-2026', title: 'अंतरराष्ट्रीय योग दिवस', date: '21st June, 2026', cover: `${A}/yoga2026/1.jpg`, photos: range(`${A}/yoga2026`, 9, 'jpg') },
  { slug: 'graduation-ceremony-2026', title: 'Graduation Ceremony', date: '03rd April, 2026', cover: `${A}/ceremony/12.jpeg`, photos: range(`${A}/ceremony`, 55, 'jpeg') },
  { slug: 'national-conference-ai-health-care', title: 'National Conference on "Emerging Trends in Artificial Intelligence for Advanced Health Care Delivery"', date: '18th March, 2026', cover: `${A}/conf/1.jpeg`, photos: range(`${A}/conf`, 60, 'jpeg') },
  { slug: 'womens-day-2026', title: "Women's Day Celebration 2k26", date: '09th March, 2026', cover: `${A}/womensday/1.jpeg`, photos: range(`${A}/womensday`, 42, 'jpeg') },
  { slug: 'republic-day-2026', title: 'गणतंत्र दिवस के पावन अवसर पर अमलतास विश्वविद्यालय में भव्य आयोजन', date: '26th January, 2026', cover: `${A}/republic26/1.jpeg`, photos: range(`${A}/republic26`, 6, 'jpeg') },
  { slug: 'ncmsap-2025', title: 'अमलतास यूनिवर्सिटी, देवास में आयोजित दो दिवसीय NCMSAP 2025', date: '12 & 13th December, 2025', cover: `${A}/ncmsap/15.jpeg`, photos: range(`${A}/ncmsap`, 55, 'jpeg') },
  { slug: 'vande-mataram-150-years', title: '“वंदे मातरम्” के 150 वर्ष पूर्ण होने के अवसर पर अमलतास विश्वविद्यालय, देवास में सभी छात्रों द्वारा वंदे मातरम् का सामूहिक गायन', date: '2025', cover: `${A}/vande/1a.jpg`, photos: range(`${A}/vande`, 4, 'jpeg') },
  { slug: 'cpr-awareness-week-aims', title: 'CPR जागरूकता सप्ताह में अमलतास इंस्टिट्यूट ऑफ मेडिकल साइंसेज़ में कार्यक्रम का सफल आयोजन', date: '2025', cover: `${A}/cprweek/1a.jpg`, photos: range(`${A}/cprweek`, 5, 'jpeg') },
  { slug: 'cpr-awareness-highlights', title: 'CPR Awareness Highlights', date: '2025', cover: `${A}/cprhigh/1a.jpg`, photos: range(`${A}/cprhigh`, 4, 'jpg') },
  { slug: 'poster-making-rangoli-competition', title: 'Poster making & Rangoli competition in Paramedical College', cover: `${A}/rangoli/3a.jpg`, photos: range(`${A}/rangoli`, 5, 'jpeg') },
  { slug: 'diwali-2025', title: 'The Paramedical College of Amaltas celebrated Diwali with joy, lights, and laughter!', date: '15th October, 2025', cover: `${A}/diwali/4a.jpg`, photos: range(`${A}/diwali`, 7, 'jpeg') },
  { slug: 'cpr-awareness-week-2025', title: 'CPR Awareness Week', date: '15th October, 2025', cover: `${A}/cpr/2.jpeg`, photos: range(`${A}/cpr`, 8, 'jpeg') },
  { slug: 'cpr-demonstration-paramedical-students', title: 'CPR demonstration by Paramedical Students', date: '14th October, 2025', cover: `${A}/learning/1a.jpg`, photos: range(`${A}/learning`, 2, 'jpeg') },
  { slug: 'air-pollution-and-health', title: 'Training and Awareness Session on “Air Pollution and Health”', date: '13th October, 2025', cover: `${A}/pollution/3a.jpg`, photos: range(`${A}/Pollution`, 10, 'jpeg') },
  { slug: 'captains-of-industry-2025', title: 'Amaltas Group Founder Chairman Mr. Suresh Bhadoria Honored with ‘Captains of Industry 2025’ Award by Chief Minister Dr. Mohan Yadav', date: '06th October, 2025', cover: `${A}/award/2a.jpg`, photos: range(`${A}/award`, 6, 'jpeg') },
  { slug: 'ganpati-chaturthi', title: 'Ganpati Chaturthi Celebration', cover: `${A}/ganesh/1a.jpg`, photos: range(`${A}/ganesh`, 4, 'jpg') },
  { slug: 'welcome-party-2024-25', title: 'Paramedical Welcome Party 2024-25', cover: `${A}/party/1a.jpg`, photos: range(`${A}/party`, 12, 'jpg') },
  { slug: 'sports-day-2025', title: 'Sports day 2025', cover: `${A}/sports/1a.jpg`, photos: range(`${A}/sports`, 1, 'jpg') },
  { slug: 'free-library-art-competition', title: 'Free Library Art Competition', cover: `${A}/arts/1a.jpg`, photos: ['1', '2', '3', '6', '7', '8', '4', '5'].map((n) => `${A}/arts/${n}.jpg`) },
  { slug: 'diwali-celebration', title: 'Diwali Celebration', cover: `${A}/diwali/1a.jpg`, photos: range(`${A}/diwali`, 2, 'jpg') },
  { slug: 'teachers-day-2025', title: 'Teachers day 2025', cover: `${A}/teachersday2025/1a.jpg`, photos: range(`${A}/teachersday2025`, 2, 'jpg') },
  { slug: 'freshers-party', title: 'Freshers Party', cover: `${A}/freshers/1a.jpg`, photos: range(`${A}/freshers`, 9, 'jpg') },
  { slug: 'anandam-wellness-club', title: 'Grand Inauguration Ceremony of “Anandam Wellness Club”', date: '06th August, 2025', cover: `${A}/anandam/8a.jpg`, photos: range(`${A}/anandam`, 10, 'jpeg') },
  { slug: 'day-of-honor-and-patriotism', title: 'A Day of Honor and Patriotism at Amaltas University!', date: '05th August, 2025', cover: `${A}/patriotism/6.jpeg`, photos: range(`${A}/patriotism`, 11, 'jpeg') },
  { slug: 'digital-safety-security-workshop', title: 'Digital Safety & Security Workshop', date: '18th July, 2025', cover: `${A}/digital/9.jpg`, photos: range(`${A}/digital`, 9, 'jpg') },
  { slug: 'international-yoga-day-2025', title: 'International Yoga Day', date: '21st June, 2025', cover: `${A}/yoga2025/7.jpg`, photos: range(`${A}/yoga2025`, 7, 'jpg') },
  { slug: 'world-environment-day-2025', title: 'World Environment Day at Amaltas University', date: '05th June, 2025', cover: `${A}/environment/3.jpg`, photos: range(`${A}/environment`, 8, 'jpg') },
  { slug: 'dr-randeep-guleria-address', title: 'Padma Shri Dr. Randeep Guleria, Former AIIMS Director, Addresses Students at Amaltas University', date: '19th May, 2025', cover: `${A}/randeep/8a.jpg`, photos: range(`${A}/randeep`, 11, 'jpg') },
  { slug: 'grand-convocation-2025', title: 'Grand Convocation Ceremony Held at Amaltas University', date: '04th April, 2025', cover: `${A}/convocation/2.jpg`, photos: range(`${A}/convocation`, 7, 'jpg') },
  { slug: 'be-a-karmyogi', title: 'Be a Karmyogi', date: '13th March, 2025', cover: `${A}/karmyogi/13.jpg`, photos: range(`${A}/karmyogi`, 13, 'jpg') },
  { slug: 'international-womens-day-2025', title: 'International Women’s Day', date: '08th March, 2025', cover: `${A}/womenday/4.jpg`, photos: range(`${A}/womenday`, 11, 'jpg') },
  { slug: 'anti-ragging-awareness-program', title: 'Anti-Ragging Awareness Program', date: '20th February, 2025', cover: `${A}/antiragging/3.jpg`, photos: range(`${A}/antiragging`, 11, 'jpg') },
  { slug: 'vasant-festival', title: 'Vasant Festival with Great Enthusias', date: '03rd February, 2025', cover: `${A}/vasant/8a.jpg`, photos: range(`${A}/vasant`, 8, 'jpeg') },
  { slug: 'republic-day-2025', title: '76th Republic Day with Patriotic Fervor and Enthusiasm', date: '26th January, 2025', cover: `${A}/republic/8.jpg`, photos: range(`${A}/republic`, 10, 'jpg') },
  { slug: 'world-meditation-day', title: 'Happy World Meditation Day', date: '21st December, 2024', cover: `${A}/meditation/6.jpg`, photos: range(`${A}/meditation`, 6, 'jpg') },
  { slug: 'thalassemia-free-indore-world-record', title: 'Malwanchal and Amaltas University Students Create World Record for Thalassemia-Free Indore', date: '28th November, 2024', cover: `${A}/thalassemia/2.jpg`, photos: range(`${A}/thalassemia`, 8, 'jpg', { 8: 'jpeg' }) },
  { slug: 'national-sports-day-2024', title: 'Amaltas University Celebrates National Sports Day with Enthusiasm', date: '02nd September, 2024', cover: `${A}/sportsday/7.jpg`, photos: range(`${A}/sportsday`, 10, 'jpg') },
  { slug: 'independence-day-2024', title: 'Amaltas University and Hospital Celebrate 78th Independence Day', date: '15th August, 2024', cover: `${A}/independence/3a.jpg`, photos: range(`${A}/independence`, 13, 'jpg', { 1: 'jpeg', 2: 'jpeg', 3: 'jpeg' }) },
  { slug: 'world-aids-day-2023', title: 'World AIDS Day', date: '01st December, 2023', cover: `${A}/aidsday/11.jpg`, photos: range(`${A}/aidsday`, 12, 'jpg') },
];

export const getEvent = (slug: string) => events.find((e) => e.slug === slug);

/** True if the title is written in Devanagari (used to pick a suitable font). */
export const isHindi = (s: string) => /[ऀ-ॿ]/.test(s);
