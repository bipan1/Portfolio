import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  fusemachines,
  keiv,
  infodevelopers,
  finance,
  ecommerce,
  dotnet,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "AWS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "dotnet",
    icon: dotnet,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Fuse Machines",
    icon: fusemachines,
    iconBg: "#383E56",
    date: "Oct 2020 - May 2022",
    points: [
      "Utilized React.js, Node.js, AWS services and ASP.NET Core to develop web applications with WCAG (Web Content Accessibility Guidelines)",
      "Collaborated with cross-functional teams to gather business requirements and implement complex business logic",
      "Actively participated in Agile methodologies (Scrum), including sprint planning, daily stand-up meetings, and user story refinement.",
      "Automated unit and integration tests using Jest and React Testing Library to ensure code reliability and maintainability.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Info Developers",
    icon: infodevelopers,
    iconBg: "#E6DEDD",
    date: "Dec 2019 - Nov 2020",
    points: [
      "Enhanced application functionality by developing and maintaining reusable React frontend components.",
      "Developed a comprehensive boilerplate for React applications, incorporating various technologies and libraries to streamline project setup.",
      "Collaborated closely with backend engineers to design and implement RESTful APIs, fostering seamless communication between frontend and backend services.",
      "Gained experience with C# and ASP.NET Core in backend development for Finance applications, contributing to full-stack development projects.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "KEIV Technologies",
    icon: keiv,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Solidified web development and JavaScript foundation through hands-on experience with React, Redux, and Node.js projects, gaining valuable knowledge applicable to different domains.",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "Grocery store",
    description:
      " Grocery Store E-Commerce Application! This project is a full-stack e-commerce platform built with Next.js for both the frontend and backend, utilizing AWS RDS for data storage, AWS S3 for image storage, and Redux for state management.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/bipan1/eCommerce",
  },
  {
    name: "Finance Manager",
    description:
      "A React.js and TypeScript-based web application that utilizes the FMP API to provide users with comprehensive financial data on various stocks. It allows users to view detailed financial data, manage their accounts, and create personal stock portfolios.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "dotnet",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: finance,
    source_code_link: "https://github.com/bipan1/Finance-Project",
  },
];

export { services, technologies, experiences, testimonials, projects };
