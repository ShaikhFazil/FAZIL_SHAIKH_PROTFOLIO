import { Github, Linkedin, Youtube } from 'lucide-react';

import cw from '@/public/projects-imgs/cw.webp';
import retrocech from '@/public/projects-imgs/retrocech.webp';
import ecommerce from '@/public/projects-imgs/e-commerce.webp';
import lukaskadela from '@/public/projects-imgs/lukaskadela.webp';

const data = {
  home: {
    name: 'Fazil Shaikh',
    description:
      'I Fix, Optimize & Build #Next_js & #React Website', // # -> for css style, _ -> create space, __ -> creates dash
    cvLink: '#contact',
  },
  sidebar: {
    links: [
      {
        name: 'github',
        link: 'https://github.com/ShaikhFazil',
        icon: Github,
      },
      {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/fazil-shaikh-69a501217/',
        icon: Linkedin,
      },
    ],
  },

  projects: {
    projects: [
      {
        id: 1,
        title: "The Hosteller Website & CMS",
        description:
          "Implemented a robust UI & CMS to manage SEO data, blogs, hostels, and influencer collaborations seamlessly, empowering the marketing team with full control over dynamic content.\n\nTechnologies Used: React.js, Node.js, GraphQL, MongoDB, Tailwind CSS.",
      },      
      {
        id: 1,
        title: "Shriram Finance Website",
        description:
          "Implemented interactive and user-friendly bank statement forms, enhancing data input and validation for users. This improved the overall usability and efficiency of the website in line with financial compliance needs.\n\nTechnologies Used: React.js, JavaScript, Form Validation, CSS.",
      },
      {
        id: 2,
        title: "API Monitoring and Management Portal",
        description:
          "Developed and integrated features to allow real-time API monitoring. Built a custom verification button to check API statuses, enabling prompt issue detection and resolution.\n\nTechnologies Used: React.js, Node.js, REST APIs.",
      },
      {
        id: 3,
        title: "AWS Cost Management Module",
        description:
          "Contributed to a comprehensive cost analysis tool inspired by AWS cost reporting. Enabled filtering and viewing of cost data by month and date to provide clear insights.\n\nTechnologies Used: React.js, Chart.js, Node.js, MongoDB.",
      },
      {
        id: 4,
        title: "Sahayata24x7 – E-commerce Health Platform",
        description:
          "Built core features for a health-based e-commerce platform allowing users to select chemists, order medicines, and book doctor appointments seamlessly.\n\nTechnologies Used: React.js, Node.js, MongoDB, Express, Tailwind CSS.",
      },
    ],
  },
  technologies: {
    skills: [
      {
        id: 1,
        name: 'html',
        src: '/skills/html.svg',
        link: 'https://en.wikipedia.org/wiki/HTML',
      },
      {
        id: 2,
        name: 'css',
        src: '/skills/css.svg',
        link: 'https://en.wikipedia.org/wiki/CSS',
      },
      {
        id: 3,
        name: 'javascript',
        src: '/skills/javascript.svg',
        link: 'https://en.wikipedia.org/wiki/JavaScript',
      },
      {
        id: 4,
        name: 'typescript',
        src: '/skills/typescript.svg',
        link: 'https://en.wikipedia.org/wiki/TypeScript',
      },
      {
        id: 5,
        name: 'react',
        src: '/skills/react.svg',
        link: 'https://en.wikipedia.org/wiki/React_(JavaScript_library)',
      },
      {
        id: 6,
        name: 'tailwind',
        src: '/skills/tailwind.svg',
        link: 'https://en.wikipedia.org/wiki/Tailwind_CSS',
      },
      {
        id: 7,
        name: 'nextJS',
        src: '/skills/nextJS.svg',
        link: 'https://en.wikipedia.org/wiki/Next.js',
      },
      {
        id: 8,
        name: 'postgresql',
        src: '/skills/postgresql.svg',
        link: 'https://en.wikipedia.org/wiki/PostgreSQL',
      },
      {
        id: 9,
        name: 'vitejs',
        src: '/skills/vitejs.svg',
        link: 'https://en.wikipedia.org/wiki/Vite_(software)',
      },
      {
        id: 10,
        name: 'git',
        src: '/skills/git.svg',
        link: 'https://en.wikipedia.org/wiki/Git',
      },
      {
        id: 12,
        name: 'figma',
        src: '/skills/figma.svg',
        link: 'https://en.wikipedia.org/wiki/Figma',
      },
      {
        id: 15,
        name: 'mongoDB',
        src: '/skills/mongoDB.svg',
        link: 'https://en.wikipedia.org/wiki/MongoDB',
      },
    ],
  },
  contact: {
    email: 'shaikhfazil180@gmail.com',
    name: 'Fazil Shaikh',
  },
};

export default data;
