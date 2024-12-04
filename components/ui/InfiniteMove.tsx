"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {
  items: { id: string; svg: string; name: string }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  rotate?: "rotate-0" | "rotate-2" | "rotate-3" | "-rotate-2" | "-rotate-3";
};
const InfiniteMove = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  rotate = "rotate-0",
}: //   className,
Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  const [start, setStart] = useState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps 
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap ",
        rotate
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap bg-foreground border-y-4 items-center justify-center border-background",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li key={item.id} className="relative group">
            <Image
              src={item.svg}
              alt={item.name}
              width={45}
              height={45}
              className="hover:opacity-80 transition-opacity duration-300"
            />
            <span className="absolute left-1/2  -translate-x-1/2  -bottom-8 bg-background text-foreground text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default InfiniteMove;
