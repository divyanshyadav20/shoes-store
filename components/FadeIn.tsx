"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  initial?: { opacity?: number; scale?: number };
  animate?: { opacity?: number; scale?: number };
  transition?: { delay?: number; duration?: number };
};

function FadeIn({ children, initial, animate, transition }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, ...initial }}
      animate={{ opacity: 1, scale: 1, ...animate }}
      transition={{ delay: 0.1, duration: 1, ...transition }}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;
