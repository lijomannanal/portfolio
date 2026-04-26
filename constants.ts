import { Github, Linkedin } from "lucide-react";
import { FaGithub, FaLinkedin, FaXing } from "react-icons/fa";

export const NAV_LINKS = [
  { name: "About", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export const PROJECTS = [
  {
    image: "/QuickNote.png",
    title: "QuickNote",
    description:
      "A simple note-taking app to organize and manage notes by category.",
    url: "https://lijomannanal.github.io/quick-note",
    githubLink: "https://github.com/lijomannanal/quick-note",
    tags: ["React 18", "TypeScript", "Material UI", "Vite"],
  },
  {
    image: "/Bookxopedia.png",
    title: "Bookxopedia",
    description: "A simple books listing app powered by Google Books API.",
    url: "https://bookxopedia.vercel.app/",
    githubLink: "https://github.com/lijomannanal/bookxopedia",
    tags: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Prisma",
      "SQLite",
    ],
  },
  {
    image: "/portfolio.png",
    title: "Portfolio",
    description: "A personal portfolio website showcasing projects and skills.",
    url: "https://lijothomas.com",
    githubLink: "https://github.com/lijomannanal/portfolio",
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "Shadcn UI"],
  },
];

export const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/lijo-thomas-thekkel",
    icon: FaLinkedin,
  },
  {
    name: "Xing",
    url: "https://www.xing.com/profile/Lijo_Thomas3",
    icon: FaXing,
  },
  {
    name: "GitHub",
    url: "https://github.com/lijomannanal",
    icon: FaGithub,
  },
];
