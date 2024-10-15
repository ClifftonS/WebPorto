import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

export function Mainbg({ children }) {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
      >
        {/* With insomnia, nothing&apos;s real. Everything is far away. Everything is a <Highlight className="text-black dark:text-white">copy, of a copy, of a copy.</Highlight> */}
        {children}
      </motion.h1>
    </HeroHighlight>
  );
}
