import { motion } from "motion/react";

type Props = {
  children: string;
};
const Button = ({ children }: Props) => {
  return (
    <motion.button
      className="px-6 py-2 rounded-md relative radial-gradient"
      initial={{ "--x": "100%", scale: 1 }}
      animate={{ "--x": "-100%" }}
      whileTap={{ scale: 0.95 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
    >
      <span className="text-neutral-300 text-lg rounded-md tracking-wide font-light w-full h-full block relative  linear-mask">
        {children}
      </span>
      <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
    </motion.button>
  );
};
export default Button;