"use client";
import Hero from "@/components/global/Hero";
import Parallax from "@/components/global/Parallax";
import { VelocityText } from "@/components/global/VelocityText";
import useLenis from "@/hook/useLenis";

const HomePage = () => {
  useLenis();
  return (
    <main className="h-full w-full">
      <Hero />
      <Parallax />
      <VelocityText />
    </main>
  );
};
export default HomePage;
