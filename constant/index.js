import { Dribbble, Instagram, Linkedin } from "lucide-react";

export const navlinks = [
  {
    name: "Home",
    href: "#hero",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export const socialLinks = [
  {
    name: "dribbble",
    href: "https://dribbble.com/DesignByMoncef",
    icon: <Dribbble strokeWidth={1} />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/designbymoncef",
    icon: <Instagram strokeWidth={1} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/moncef-meharzi-1aba92211/",
    icon: <Linkedin strokeWidth={1} />,
  },
];

export const Works = [
  {
    id: "1",
    slug: "ecommerce-app",
    title: "Ecommerce App",
    tools: ["UI/UX design"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/images/1/2.png",
  },
  {
    id: "2",
    slug: "task-management-app",
    title: "Task Management App",
    tools: ["UI/UX design"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/images/2/1.png",
  },
  {
    id: "3",
    slug: "lumevo",
    title: "Lumevo",
    tools: ["UI/UX design", "-", "Web Development"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/images/3/1.png",
  },
  {
    id: "4",
    slug: "portfolio",
    title: "Portfolio",
    tools: ["Web Development"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/images/4/2.png",
  },
  {
    id: "5",
    slug: "vsltranslator",
    title: "VslTranslator",
    tools: ["UI/UX design", "-", "Web Development"],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/images/6/1.png",
  },
];
