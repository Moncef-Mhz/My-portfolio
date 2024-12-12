"use client";
import About from "@/components/global/About";
import Hero from "@/components/global/Hero";
import Parallax from "@/components/global/Parallax";
import Works from "@/components/global/Works";
import InfiniteSkills from "@/components/ui/InfiniteSkills";
import { Skills } from "@/constant";
import useLenis from "@/hook/useLenis";

const HomePage = () => {
  useLenis();
  return (
    <main className="h-full w-full">
      <Hero />
      <Parallax />
      <InfiniteSkills items={Skills} className="" />
      <Works />
      <About />
      <h1>dsa</h1>
      <h1>dsa</h1>
      <h1>dsa</h1>
      <h1>dsa</h1>
      <h1>dsa</h1>
      <h1>dsa</h1>
      <h1>dsa</h1>
      <h1>dsa</h1>
      <h1>dsa</h1>
      <h1>dsa</h1>
      <h1>dsa</h1>
      <h1>dsa</h1>
      <h1>dsa</h1>
    </main>
  );
};
export default HomePage;
