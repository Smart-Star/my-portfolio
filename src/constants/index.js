import { DiCss3, DiGithubBadge, DiHtml5, DiReact } from 'react-icons/di';
import { BiLogoNodejs, BiLogoPostgresql, BiLogoTypescript } from 'react-icons/bi';
import { RiJavascriptFill, RiNextjsFill } from 'react-icons/ri';
import { SiExpress, SiMongodb, SiPostman, SiTailwindcss } from 'react-icons/si';
import {
  bank,
  blogApp,
  carepulse,
  coffee,
  cvOracle,
  dentwise,
  disney,
  foodie,
  gericht,
  gpt,
  headphone,
  hulu,
  manage,
  maternalCare,
  nike,
} from '../assets';

export const socialLinks = {
  github: 'https://github.com/Smart-Star',
  behance: 'https://behance.net/folusoojutalayo',
  linkedin: 'https://linkedin.com/in/foluso-ojutalayo',
};

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
    className: 'text-blue-500',
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
    name: 'React',
    Icon: DiReact,
    className: 'text-cyan-400',
  },
  {
    name: 'Next.js',
    Icon: RiNextjsFill,
    className: 'text-neutral-300',
  },
  {
    name: 'Tailwind CSS',
    Icon: SiTailwindcss,
    className: 'text-sky-400',
  },
  {
    name: 'Node.js',
    Icon: BiLogoNodejs,
    className: 'text-green-500',
  },
  {
    name: 'PostgreSQL',
    Icon: BiLogoPostgresql,
    className: 'text-blue-500',
  },
  {
    name: 'Express.js',
    Icon: SiExpress,
    className: 'text-neutral-300',
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
        className: 'text-blue-500',
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
        name: 'React',
        Icon: DiReact,
        className: 'text-cyan-400',
      },
      {
        name: 'Next.js',
        Icon: RiNextjsFill,
        className: 'text-neutral-300',
      },
      {
        name: 'Tailwind CSS',
        Icon: SiTailwindcss,
        className: 'text-sky-400',
      },
    ],
  },

  {
    category: 'Backend',
    technologies: [
      {
        name: 'Node.js',
        Icon: BiLogoNodejs,
        className: 'text-green-500',
      },
      {
        name: 'Express.js',
        Icon: SiExpress,
        className: 'text-neutral-300',
      },
      {
        name: 'PostgreSQL',
        Icon: BiLogoPostgresql,
        className: 'text-blue-500',
      },
      {
        name: 'GitHub',
        Icon: DiGithubBadge,
        className: 'text-gray-400',
      },
      {
        name: 'MongoDB',
        Icon: SiMongodb,
        className: 'text-green-600',
      },
      {
        name: 'Postman',
        Icon: SiPostman,
        className: 'text-orange-500',
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

  {
    id: 11,
    img: blogApp,
    title: 'Project #11',
    description:
      'Full-stack reactive blogging platform using Next.js, Convex real-time database, TypeScript, and TailwindCSS',
    links: {
      site: 'https://nextjs-16-blog-app-bice.vercel.app',
      github: 'https://github.com/Smart-Star/my-blog-app',
    },
  },

  {
    id: 12,
    img: carepulse,
    title: 'Project #12',
    description:
      'Full-stack healthcare management platform for patient registration, appointment scheduling, and SMS notifications using Next.js, Appwrite, Twilio, and TailwindCSS',
    links: {
      site: 'https://carepulse-zeta-navy.vercel.app/',
      github: 'https://github.com/Smart-Star/carepulse',
    },
  },

  {
    id: 13,
    img: dentwise,
    title: 'Project #13',
    description:
      'AI-powered dental platform featuring Vapi voice AI assistant, Clerk authentication, Resend email notifications, Next.js, TypeScript, and TailwindCSS',
    links: {
      site: 'https://dentwise-taupe.vercel.app/',
      github: 'https://github.com/Smart-Star/dentwise',
    },
  },

  {
    id: 14,
    img: cvOracle,
    title: 'Project #14',
    description:
      'AI-driven CV optimization and career services platform built with Next.js, Cursor, and Claude Code',
    links: {
      site: 'https://cv-oracle-website.vercel.app/',
      github: '', // Left blank as it's a private company repository
    },
  },

  {
    id: 15,
    img: maternalCare,
    title: 'Project #15',
    description:
      'Maternal healthcare web application providing essential support, health tracking, and resources for mothers, built with Next.js, TypeScript, and TailwindCSS, cursor, and Claude Code',
    links: {
      site: 'https://maternal-healthcare-sooty.vercel.app',
      github: '', // Left blank as it's a private company repository
    },
  },
];

export const experiences = [
  {
    id: 1,
    title: 'Graphic Design',
    period: '2019 - 2022',
    description:
      'Began my career as a freelance graphic designer, creating branding materials, marketing assets, and visual designs for clients while developing a strong foundation in design principles and creativity.',
  },

  {
    id: 2,
    title: 'UI/UX Design',
    period: '2022',
    description:
      'Expanded into UI/UX design, creating user-centered interfaces, wireframes, and interactive prototypes while transforming design concepts into intuitive digital experiences.',
  },

  {
    id: 3,
    title: 'Frontend Engineering',
    period: '2023',
    description:
      'Transitioned into frontend development, building responsive and interactive web applications with React, Next.js, TypeScript, and Tailwind CSS while strengthening my JavaScript skills.',
  },

  {
    id: 4,
    title: 'Backend Engineering',
    period: '2026 - Present',
    description:
      'Expanded into backend development, building RESTful APIs and scalable web applications with Node.js, Express.js, PostgreSQL, and MongoDB.',
  },
];

export const acomplishments = [
  { id: 1, number: '10+', text: 'open source projects' },
  { id: 2, number: '40+', text: 'Graphics and Branding projects' },
  { id: 3, number: '2+', text: 'Years of Experience' },
];
