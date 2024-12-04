"use client";
import { Works as projects } from "@/constant";
import Image from "next/image";
import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef } from "react";
import Reaveal from "../ui/Reaveal";
import { CornerRightDown } from "lucide-react";
const Works = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div
      ref={ref}
      className="w-full h-full bg-background  py-20 md:px-0 px-4 max-w-7xl items-center mx-auto space-y-6"
    >
      <div className="flex items-center justify-between w-full border-b pb-4 ">
        <Reaveal>
          <h1 className="2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-black text-stroke uppercase">
            Projects
          </h1>
        </Reaveal>
        <CornerRightDown strokeWidth={1} size={40} />
      </div>
      <div className="grid  md:grid-cols-2 grid-cols-1 gap-6">
        {projects.map((project, i) => (
          <motion.div
            variants={{
              initial: { y: -25, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            initial="initial"
            animate={mainControls}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 * i }}
            key={project.id}
            className="w-full p-4 border relative cursor-pointer group duration-150 z-0 overflow-hidden border-[#333]/50 rounded-2xl"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={800}
              loading="lazy"
              className="rounded-xl md:h-[400px] lg:h-[500px] h-[300px] z-10 object-cover"
            />
            <div className="px-2 py-4 space-y-3 z-10">
              <Reaveal>
                <h3 className="md:text-2xl text-xl font-bold capitalize ">
                  {project.title}
                </h3>
              </Reaveal>
              <Reaveal>
                <p className="text-white/70 line-clamp-">
                  {project.description}
                </p>
              </Reaveal>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tools.map((item, i) => (
                  <Reaveal key={i}>
                    <p className="uppercase text-sm font-medium px-3 py-2 border-[#333] border rounded-lg">
                      {item}
                    </p>
                  </Reaveal>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 bg-neutral-900 group-hover:blur-3xl group-hover:bg-neutral-800 duration-100  -z-10 w-full h-full" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default Works;
