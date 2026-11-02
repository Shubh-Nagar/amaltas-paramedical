/**
 * Leadership messages — verbatim from chairman.asp, director.asp, dean.asp and
 * principal.asp. `excerpt` is the exact teaser text used on the original home page.
 */

export type MessageBlock =
  | { type: 'p'; text: string }
  | { type: 'labelled'; label: string; text: string }
  | { type: 'quote'; text: string };

export type LeaderMessage = {
  slug: 'chairman' | 'director' | 'dean' | 'principal';
  pageTitle: string;
  name: string;
  role: string;
  photo: string;
  excerpt: string;
  greeting?: string;
  blocks: MessageBlock[];
  signature: string[];
};

export const messages: LeaderMessage[] = [
  {
    slug: 'chairman',
    pageTitle: "Chairman's Message",
    name: 'Mayank Raj Singh Bhadoria',
    role: 'Chairman',
    photo: 'images/Chairman.jpeg',
    excerpt: 'A Patient is the most important person in our Hospital. He/she is not an outsider but a part of our Hospital.',
    blocks: [
      { type: 'labelled', label: 'Our Motto:', text: 'A Patient is the most important person in our Hospital. He/she is not an outsider but a part of our Hospital.' },
      { type: 'labelled', label: 'Our Mission:', text: 'Amaltas Hospital aims at serving the society by providing the best possible medical treatment delivered most efficiently in the shortest possible time.' },
      {
        type: 'labelled',
        label: 'Our Vision:',
        text: 'To render the same level of Health care services to the rural and underprivileged population as the health care facilities received by the urban population and financially sound sectors of society. To provide health care services at par with metropolitan hospitals and to establish dedicated work forces of health care professionals through a high quality medical education system.',
      },
    ],
    signature: ['Mayank Raj Singh Bhadoria', 'Chairman'],
  },
  {
    slug: 'director',
    pageTitle: "Director's Message",
    name: 'Dr. Sneha Sahay Youtham',
    role: 'Director',
    photo: 'images/Director.jpeg',
    excerpt: 'It is with great pride and dedication that I extend a warm welcome to all current and prospective students, faculty, and partners.',
    greeting: 'Welcome to our Amaltas Institute of Medical Sciences {Paramedical}',
    blocks: [
      { type: 'p', text: 'It is with great pride and dedication that I extend a warm welcome to all current and prospective students, faculty, and partners. At our institution, we are committed to shaping competent, compassionate, and skilled paramedical professionals who play a vital role in today’s healthcare system.' },
      { type: 'p', text: 'The field of paramedical sciences is dynamic, challenging, and deeply rewarding. Whether it is in diagnostics, emergency care, rehabilitation, or therapy, paramedical staff form the backbone of modern medical services. Our goal is to provide quality education, hands-on training, and ethical grounding to empower students to make a real difference in the lives of others.' },
      { type: 'p', text: 'Through a blend of academic rigor, clinical exposure, and continuous mentoring, we strive to create an environment that fosters learning, innovation, and personal growth. We work closely with hospitals, healthcare institutions, and industry leaders to ensure that our programs remain relevant and aligned with evolving global standards.' },
      { type: 'p', text: 'To all aspiring healthcare professionals – your journey starts here, and we are honored to be part of it.' },
      { type: 'p', text: 'Wishing you success and fulfillment in your academic and professional pursuits.' },
    ],
    signature: ['Dr. Sneha Sahay Youtham', 'Director', 'Amaltas Institute of Medical Sciences', '{Paramedical Sciences }'],
  },
  {
    slug: 'dean',
    pageTitle: "Dean's Message",
    name: 'Dr. AK Pithawa',
    role: 'Dean',
    photo: 'images/dean-sir.jpg',
    excerpt: 'Paramedical professionals are an essential part of the healthcare system, contributing significantly to patient care, diagnosis, treatment & rehabilitation.',
    greeting: 'Dear Students,',
    blocks: [
      { type: 'p', text: 'Paramedical professionals are an essential part of the healthcare system, contributing significantly to patient care, diagnosis, treatment, and rehabilitation.' },
      { type: 'p', text: 'Our institute is committed to providing quality education, practical training, and ethical values to prepare competent healthcare professionals for the future. I encourage you to pursue excellence, maintain professionalism, and serve society with compassion and dedication.' },
      { type: 'p', text: 'I wish you success in your academic and professional journey.' },
      { type: 'quote', text: '"Service to Humanity is the Highest Service."' },
    ],
    signature: ['Dr. AK Pithawa,', 'Dean', 'Amaltas Institute of Medical Sciences'],
  },
  {
    slug: 'principal',
    pageTitle: "Principal's Message",
    name: 'Dr. Jagat Bahadur Rawat',
    role: 'Principal',
    photo: 'images/Principal.jpeg',
    excerpt: 'Welcome to Amaltas Institute of Medical Sciences {Paramedical}, where we are committed to excellence in paramedical education and training.',
    blocks: [
      { type: 'p', text: 'Welcome to Amaltas Institute of Medical Sciences {Paramedical}, where we are committed to excellence in paramedical education and training. Our goal is to equip students with the knowledge, skills, and values needed to serve with competence and compassion in the healthcare sector. We take pride in our dedicated faculty, modern facilities, and a curriculum designed to meet the evolving needs of the medical field.' },
      { type: 'p', text: 'We invite you to join us in shaping a healthier tomorrow.' },
      { type: 'p', text: 'I welcome you all to be part of this journey and contribute towards building a healthier society.' },
      { type: 'p', text: 'With best wishes for your future.' },
    ],
    signature: ['Dr. Jagat Bahadur Rawat', 'Principal', 'Amaltas Institute of Medical Sciences', '{Paramedical}'],
  },
];

export const getMessage = (slug: string) => messages.find((m) => m.slug === slug);
