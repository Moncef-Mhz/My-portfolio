import { Dribbble, Instagram, Linkedin } from "lucide-react";

export const navlinks = [
  {
    name: "Home",
    href: "#hero",
  },
  {
    name: "Work",
    href: "#services",
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

export const work = [
  {
    id: "1",
    title: "Project Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://example.com/image1.jpg",
  },
];
