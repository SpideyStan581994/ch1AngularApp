import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Steven Tan',
  subtitle: 'Java Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'A person who has found his passion in programming and learning. A self proclaimed "Self taught programmer". A person with full of hope and never easily giving up. A person who loves God and his family. A Husband and a Father.',
  paragraphTwo:
    'Experienced Java Software Engineer with a demonstrated history of working in the information technology and services industry. Skilled in SQL, Spring Boot, Spring MVC, Core Java, and Java.',
  paragraphThree: 'Available in full time or part time jobs.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Sales Tracking App',
    info:
      'Sales tracking app allows you to track your sale everyday. It can generate a daily/weekly/monthly report.',
    info2: 'Simple but beautiful UI will give you a good experience with the dashboard',
    url: '',
    repo: 'https://github.com/SpideyStan581994', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Scholarship Billing Checking System',
    info:
      'Scholarship Biling Checking System will allow you to check the process of scholarship billing. It updates real time and real monitoring to check the status of the process of each bill',
    info2: '',
    url: '',
    repo: 'https://github.com/SpideyStan581994', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'stan581994@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://github.com/SpideyStan581994',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://github.com/SpideyStan581994',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/steven-tan-219212160/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/SpideyStan581994',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
