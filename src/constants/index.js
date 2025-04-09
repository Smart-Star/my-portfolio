import { DiBootstrap, DiCss3, DiGithubBadge, DiHtml5, DiReact } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';
import { BiLogoTypescript } from 'react-icons/bi';
import { RiJavascriptFill, RiNextjsFill } from 'react-icons/ri';
import {
  bank,
  coffee,
  disney,
  foodie,
  gericht,
  gpt,
  headphone,
  hulu,
  manage,
  nike,
} from '../assets';

export const navLinks = [
  { id: 1, href: 'skills', label: 'About' },
  { id: 2, href: 'portfolio', label: 'Portfolio' },
  { id: 3, href: 'contact', label: 'Contact' },
];

export const techStack = [
  {
    name: 'HTML',
    Icon: DiHtml5,
    className: 'text-orange-600',
  },

  {
    name: 'CSS',
    Icon: DiCss3,
    className: 'text-purple-600',
  },

  {
    name: 'JavaScript',
    Icon: RiJavascriptFill,
    className: 'text-yellow-400',
  },

  {
    name: 'TypeScript',
    Icon: BiLogoTypescript,
    className: 'text-blue-500',
  },

  {
    name: 'React Js',
    Icon: DiReact,
    className: 'text-blue-500',
  },

  {
    name: 'Next Js',
    Icon: RiNextjsFill,
    className: 'text-neutral-300/80',
  },

  {
    name: 'Bootstrap',
    Icon: DiBootstrap,
    className: 'text-indigo-500',
  },

  {
    name: 'TailwindCss',
    Icon: SiTailwindcss,
    className: 'text-blue-400',
  },
];

export const skills = [
  {
    category: 'Frontend',
    technologies: [
      {
        name: 'HTML',
        Icon: DiHtml5,
        className: 'text-orange-600',
      },

      {
        name: 'CSS',
        Icon: DiCss3,
        className: 'text-purple-600',
      },

      {
        name: 'JavaScript',
        Icon: RiJavascriptFill,
        className: 'text-yellow-500',
      },

      {
        name: 'TypeScript',
        Icon: BiLogoTypescript,
        className: 'text-blue-500',
      },

      {
        name: 'React Js',
        Icon: DiReact,
        className: 'text-blue-500',
      },

      {
        name: 'Next Js',
        Icon: RiNextjsFill,
        className: 'text-neutral-300/80',
      },

      {
        name: 'GitHub',
        Icon: DiGithubBadge,
        className: 'text-gray-400',
      },

      {
        name: 'Bootstrap',
        Icon: DiBootstrap,
        className: 'text-indigo-500',
      },

      {
        name: 'TailwindCss',
        Icon: SiTailwindcss,
        className: 'text-blue-400',
      },
    ],
  },

  {
    category: 'Fullstack',
    technologies: [
      {
        name: 'React Js',
        Icon: DiReact,
        className: 'text-blue-500',
      },

      {
        name: 'Next Js',
        Icon: RiNextjsFill,
        className: 'text-neutral-300/80',
      },

      {
        name: 'GitHub',
        Icon: DiGithubBadge,
        className: 'text-gray-400',
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    img: bank,
    title: 'Project #1',
    description: 'Fully Responsive Modern UI/UX Banking website using React Js and TailwindCSS',
    links: {
      site: 'https://ho-banking.netlify.app/',
      github: 'https://github.com/Smart-Star/hoobank',
    },
  },

  {
    id: 2,
    img: nike,
    title: 'Project #2',
    description: 'Fully Responsive Nike website clone using React Js and TailwindCSS',
    links: {
      site: 'https://web-nikeclone.netlify.app/',
      github: 'https://github.com/Smart-Star/nike-website-clone',
    },
  },

  {
    id: 3,
    img: gpt,
    title: 'Project #3',
    description: 'Fully Responsive Modern UI/UX website using React Js',
    links: {
      site: 'https://open-gpt3.netlify.app/',
      github: 'https://github.com/Smart-Star/gpt3-openai',
    },
  },

  {
    id: 4,
    img: coffee,
    title: 'Project #4',
    description: 'Fully Responsive UI/UX website using HTML, CSS, JavaScript and Bootstrap',
    links: {
      site: 'https://shop-coffee-website.netlify.app',
      github: '#',
    },
  },

  {
    id: 5,
    img: foodie,
    title: 'Project #5',
    description: 'Fully Responsive UI/UX website HTML, CSS, JavaScript and Bootstrap',
    links: {
      site: 'https://foodie-xpress.netlify.app',
      github: '#',
    },
  },

  {
    id: 6,
    img: manage,
    title: 'Project #6',
    description: 'Fully Responsive UI/UX website using HTML and TailwindCSS',
    links: {
      site: 'https://landing-page-mange.netlify.app/',
      github: '#',
    },
  },

  {
    id: 7,
    img: gericht,
    title: 'Project #7',
    description: 'Fully Responsive Modern UI/UX website using React Js',
    links: {
      site: 'https://ge-restaurant.netlify.app/',
      github: 'https://github.com/Smart-Star/gericht-restaurant',
    },
  },

  {
    id: 8,
    img: headphone,
    title: 'Project #8',
    description: 'Fully Responsive Modern eCommerce website using React Js and TailwindCSS',
    links: {
      site: 'https://store-headphone.netlify.app',
      github: 'https://github.com/Smart-Star/headphone-ecommerce',
    },
  },

  {
    id: 9,
    img: hulu,
    title: 'Project #9',
    description: 'Fully Responsive Hulu website clone using React Js, TypeScript and TailwindCSS',
    links: {
      site: 'https://hu-movie.netlify.app',
      github: 'https://github.com/Smart-Star/hulu-clone',
    },
  },

  {
    id: 10,
    img: disney,
    title: 'Project #10',
    description: 'Fully Responsive Disney website clone using React Js, TypeScript and TailwindCSS',
    links: {
      site: 'https://dis-movie.netlify.app',
      github: 'https://github.com/Smart-Star/disney-clone',
    },
  },
];

export const experiences = [
  {
    id: 1,
    company: 'First Company',
    period: '2020',
    description: 'Worked as a freelance graphics designer',
  },

  {
    id: 2,
    company: 'Second Company',
    period: '2022',
    description: 'Got into the world of UI/UX design',
  },

  {
    id: 3,
    company: 'Third Company',
    period: '2024',
    description: 'Started my journey as a Front-end Developer',
  },

  {
    id: 4,
    company: 'Fourth Company',
    period: '2024 - Present',
    description: 'Shared my projects with the world',
  },
];

export const acomplishments = [
  { id: 1, number: '7+', text: 'open source projects' },
  { id: 2, number: '40+', text: 'Graphics and Branding projects' },
  { id: 3, number: '1+', text: 'Years of Experience' },
];
