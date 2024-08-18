"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function Reveal({
  children,
  className,
  y = 75,
  duration = 0.75,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  once?: boolean;
  y?: number;
}) {
  const container = useRef(null);
  const isInView = useInView(container, { once });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView]);

  const variants = {
    hidden: { opacity: 0, y },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={className} ref={container}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={controls}
        transition={{ duration, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Reveal;
