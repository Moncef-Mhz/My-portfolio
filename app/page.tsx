"use client";
import Hero from "@/components/global/Hero";
import Parallax from "@/components/global/Parallax";
import Projects from "@/components/global/Projects";
import { VelocityText } from "@/components/global/VelocityText";
import useLenis from "@/hook/useLenis";

const HomePage = () => {
  useLenis();
  return (
    <main className="h-full w-full">
      <Hero />
      <Parallax />
      <VelocityText />
      <Projects />
    </main>
  );
};
export default HomePage;
