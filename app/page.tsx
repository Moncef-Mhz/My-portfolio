"use client";
import Hero from "@/components/global/Hero";
import Parallax from "@/components/global/Parallax";
// import Projects from "@/components/global/Projects";
// import { VelocityText } from "@/components/global/VelocityText";
import Works from "@/components/global/Works";
import InfiniteMove from "@/components/ui/InfiniteMove";
import { Skills } from "@/constant";
import useLenis from "@/hook/useLenis";

const HomePage = () => {
  useLenis();
  return (
    <main className="h-full w-full">
      <Hero />
      <Parallax />
      {/* <VelocityText /> */}
      <div className="antialiased rounded-md h-[300px] flex items-center justify-center relative overflow-hidden">
        {/* InfiniteMove #1 (Top Row) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <InfiniteMove
            direction="right"
            speed="normal"
            items={Skills}
            rotate="rotate-3"
            className="absolute top-1/3"
          />
        </div>

        {/* InfiniteMove #2 (Bottom Row) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <InfiniteMove
            direction="left"
            speed="normal"
            items={Skills}
            rotate="-rotate-3"
            className="absolute top-2/3"
          />
        </div>
      </div>

      {/* <Projects /> */}
      <Works />
    </main>
  );
};
export default HomePage;
