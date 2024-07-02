// src/App.tsx
import React, { useRef } from 'react';
import Section from './components/Section';
import { motion, useScroll, useTransform } from 'framer-motion';
import 'tailwindcss/tailwind.css';

const App: React.FC = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({ container: containerRef });
  const x = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <div ref={containerRef} className="App h-screen overflow-scroll">
      <Section color="bg-blue-500">
        <h1 className="text-white text-5xl">Blue Section</h1>
      </Section>
      <motion.div style={{ x, y }}>
        <Section color="bg-green-500">
          <h1 className="text-white text-5xl">Green Section</h1>
        </Section>
      </motion.div>
    </div>
  );
};

export default App;
