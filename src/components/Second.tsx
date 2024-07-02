import React from 'react';
import { motion, useTransform } from 'framer-motion';

interface SecondProps {
  scrollYProgress: any;
}

export default function Second({ scrollYProgress }: SecondProps) {
  // Adjust these values to control the scroll speed of the red section
  const x = useTransform(scrollYProgress, [0.5, 1], [window.innerWidth, 0]);
  const y = useTransform(scrollYProgress, [0.5, 1], [window.innerHeight, 0]);

  return (
    <motion.section
      className="bg-red-500 z-20 sticky top-0 right-0 h-screen w-screen"
      style={{ x, y }}
    >
      <h1 className="text-white text-5xl">Red Section</h1>
    </motion.section>
  );
}
