import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ordning FTW', // e.g: 'Name | Developer'
  lang: 'sv', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Välkommen till',
  name: 'Ordning FTW',
  subtitle: 'Ett litet företag för ordning och reda',
  cta: 'Om mig',
};

// ABOUT DATA
export const aboutData = {
  img: 'profil.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'header.jpg',
    title: 'Städning',
    info: 'Vi hjälper dig... ....',
    info2: 'Och ...',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'header.jpg',
    title: 'Organisera',
    info: 'Behöver du hjälpa att få lite ordning...',
    info2: 'Ditt garage eller ...',
    url: '',
    repo: '', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Maila',
  email: 'alexander.strand93@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.instagram.com/ordningftw/',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/ordningftw/',
    }
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
