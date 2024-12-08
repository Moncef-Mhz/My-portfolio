"use client";

import { Badge, Flag, User } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";

const info = [
  {
    title: "Project Done",
    num: "34",
    icon: <Flag size={28} strokeWidth={2} />,
  },
  {
    title: "Happy Client",
    num: "12",
    icon: <User size={28} strokeWidth={2} />,
  },
  {
    title: "Experience",
    num: "03",
    icon: <Badge size={28} strokeWidth={2} />,
  },
];

const Stack = [
  {
    id: 1,
    name: "React",
    logo: "/images/react.svg",
  },
  {
    id: 2,
    name: "Next.js",
    logo: "/images/nextjs.svg",
  },
  {
    id: 3,
    name: "Tailwind CSS",
    logo: "/images/tailwindcss.svg",
  },
  {
    id: 4,
    name: "Prisma",
    logo: "/images/prisma.svg",
  },
  {
    id: 5,
    name: "TypeScript",
    logo: "/images/ts1.svg",
  },
  {
    id: 6,
    name: "Node.js",
    logo: "/images/nodejs.svg",
  },
  {
    id: 7,
    name: "Figma",
    logo: "/images/figma.svg",
  },
  {
    id: 8,
    name: "Mongo db",
    logo: "/images/mongodb1.svg",
  },
];

const About = () => {
  const roundoutline = (
    <>
      <div className="w-[100px] h-[100px] absolute  rounded-full border-indigo-500/5 border " />
      <div className="w-[200px] h-[200px] absolute  rounded-full border-indigo-500/5 border " />
      <div className="w-[300px] h-[300px] absolute  rounded-full border-indigo-500/5 border " />
      <div className="w-[400px] h-[400px] absolute  rounded-full border-indigo-500/5 border " />
      <div className="w-[500px] h-[500px] absolute  rounded-full border-indigo-500/5 border " />
    </>
  );

  return (
    <div className="h-[120vh] w-full max-w-7xl mx-auto  py-20  flex items-center justify-center">
      <div className="grid md:grid-cols-3 md:grid-rows-3 grid-cols-1 gap-4 w-full h-full ">
        {info.map((item) => (
          <div
            key={item.title}
            className="bg-zinc-800 overflow-hidden group w-full h-full col-span-1 rounded-xl flex items-center justify-center relative"
          >
            <h1 className="text-8xl z-[1] group-hover:to-zinc-600 duration-150 font-bold bg-gradient-to-b from-foreground inline-block text-transparent bg-clip-text to-zinc-900 ">
              {item.num}
              <span className="text-indigo-500 font-normal">+</span>
            </h1>
            <div className="absolute z-[1] py-8 px-4 bottom-0 flex flex-col gap-2 left-0">
              <div className="text-indigo-500 fill-indigo-500 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:-translate-y-2 duration-150">
                {item.icon}
              </div>
              <h1 className="text-lg font-semibold uppercase group-hover:-translate-y-2 duration-150">
                {item.title}
              </h1>
            </div>

            {roundoutline}
          </div>
        ))}
        <div className="bg-zinc-800 w-full h-full col-span-1 group rounded-xl overflow-hidden relative flex items-center justify-center">
          <div className="w-28 h-28  rounded-full overflow-hidden">
            <Image
              src="/images/final.png"
              alt="me"
              width={500}
              height={500}
              loading="lazy"
              className="w-full h-full grayscale group-hover:scale-105 group-hover:grayscale-0 duration-150"
            />
          </div>
          {roundoutline}
        </div>
        <div className="bg-zinc-800 w-full h-full col-span-2 row-span-2 rounded-xl relative"></div>
        <div className="bg-zinc-800 w-full h-full col-span-1 group rounded-xl  overflow-hidden relative flex items-center justify-center">
          <h1 className="text-2xl font-semibold uppercase absolute top-0 py-8">
            loved Stack
          </h1>
          <div className="space-y-4">
            <ul className="flex gap-4 relative shrink-0 MyGradient">
              {Stack.slice(0, 4).map(({ id, name }) => (
                <li
                  key={id}
                  className="border w-max  rounded-md bg-zinc-900 text-white/70 border-white/70 py-2 px-4"
                >
                  {name}
                </li>
              ))}
            </ul>
            <ul className="flex gap-4 relative shrink-0 MyGradient">
              {Stack.slice(4, 8).map(({ id, name }) => (
                <li
                  key={id}
                  className="border w-max translate-x-4  rounded-md bg-zinc-900 text-white/70 border-white/70 py-2 px-4"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
          {roundoutline}
        </div>
      </div>
    </div>
  );
};
export default About;
