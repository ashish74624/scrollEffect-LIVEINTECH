import React, { useRef } from 'react';
// import Section from './components/Section';
import { motion, useScroll, useTransform } from 'framer-motion';
import 'tailwindcss/tailwind.css';

const App: React.FC = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({ container: containerRef });

  // Adjust these values to control the scroll speed of the green section
  const x = useTransform(scrollYProgress, [0, 1], [window.innerWidth, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [window.innerHeight * 0.6, 0]); // Adjusted to scroll slower

  return (
    <div ref={containerRef} className="App h-screen relative overflow-scroll">
      <section className="bg-blue-400 fixed top-0 -z-10 h-screen w-screen flex justify-center items-center" >
        <h1 className="text-white text-5xl">Scroll down to see the effect</h1>
      </section>
      <motion.div className='z-[100] relative mt-[100vh] ' style={{ x, y }}>
        <section className="bg-green-500 flex h-screen w-screen ">
          <h1 className="text-white text-5xl">Green Section</h1>
        </section>
      </motion.div>
    </div>
  );
};

export default App;
