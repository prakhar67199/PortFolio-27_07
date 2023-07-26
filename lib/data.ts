import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import proj1 from "@/public/project-mega.jpeg";
import proj2 from "@/public/project-3.jpeg";
import proj3 from "@/public/admin-project.jpeg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Feroze gandhi instittue of engineering and technology",
    location: "Raebareli, U.P.",
    description: "B.tech, C.S, c.g.p.a-7.81 ",
    icon: React.createElement(LuGraduationCap),
    date: "2017-2021",
  },
  {
    title: "Sanatan dharm inter college",
    location: "Hardoi, U.P.",
    description: "HSC,PCM, 83.2%",
    icon: React.createElement(LuGraduationCap),
    date: "2015-2016",
  },
  {
    title: "Saraswati Vidhya Mandir",
    location: "Hardoi, U.P.",
    description: "SSC,Gen., 86.7%",
    icon: React.createElement(LuGraduationCap),
    date: "2013-2014",
  },
] as const;

export const projectsData = [
  {
    title: "Studynotion",
    description:
      "I worked as a full-stack developer on this project where we can teach various courses to students like Udemy clone",
    tags: ["React", "Nodejs", "MongoDB", "Tailwind", "Expressjs"],
    imageUrl: proj1,
    liveLink: 'https://studynotion-frontend-jade.vercel.app/',
    gitLink:'https://github.com/prakhar67199/Edtech-Project-Mega'
  },
  {
    title: "Filmpire",
    description:
      "movie data previewer where we can see any web-series/movie rating trailer or cast/crew etc",
    tags: ["React", "SCSS", "TMDB Api", "Tailwind", "Redux", "Fully responsive"],
    imageUrl: proj2,
    liveLink: 'https://tmdb-data.vercel.app/',
    gitLink:'https://github.com/prakhar67199/TMDB__Data'
  },
  {
    title: "Admin pannel",
    description:
      "its a react app which take data and give visual analysis on the basis of expenses",
    tags: ["React", "chartjs", "javascript", "Tailwind", "Mern"],
    imageUrl: proj3,
    liveLink: 'https://admin-pannel-2kjs.vercel.app/',
    gitLink:'https://github.com/prakhar67199/admin_pannel1',
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
