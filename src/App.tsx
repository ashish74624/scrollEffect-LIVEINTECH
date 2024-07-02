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
        <section className="bg-amber-300 flex flex-col relative h-screen w-screen ">
            <p className='text-white text-7xl mt-8 mx-5'>HERE</p>
            <div className='h-[80vh] w-[90vw] self-end  flex bottom-0 absolute bg-red-500 '>
                <p className='text-white text-7xl mt-8 mx-5'>IS THE</p>
                <div className='h-[70vh] w-[70vw] right-0  bottom-0 absolute bg-blue-500 '>
                    <p className='text-white text-7xl mt-8 mx-5'>EFFECT</p>
                </div>
            </div>
        </section>
      </motion.div>
    </div>
  );
};

export default App;
