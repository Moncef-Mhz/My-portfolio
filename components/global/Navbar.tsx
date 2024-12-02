"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Reaveal from "../ui/Reaveal";
import Burger from "../ui/Burger";

const Header = () => {
  const [isSticky, setIsSticky] = useState(true);

  // Function to handle the scroll event
  const handleScroll = () => {
    if (window.scrollY >= 0) {
      setIsSticky(true); // Change the state when user scrolls down 50px
    } else {
      setIsSticky(false); // Reset the state when scrolling back up
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Add scroll event listener

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
    };
  }, []);

  return (
    <motion.div
      className="relative md:h-[100px] h-[80px] bg-background flex items-center justify-between px-4 md:px-[72px] transition-all duration-300"
      initial={{ y: -120 }}
      animate={{
        y: isSticky ? 0 : -120, // Move the header up when sticky
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      style={{
        position: isSticky ? "fixed" : "absolute", // Fix the position when sticky
        top: isSticky ? 0 : "unset",
        left: 0,
        right: 0,
        zIndex: 10,
      }}
    >
      <Reaveal>
        <h1 className="text-2xl md:text-3xl font-black uppercase text-transparent text-stroke">
          Moncef Meharzi.
        </h1>
      </Reaveal>
      <Burger />
    </motion.div>
  );
};

export default Header;
