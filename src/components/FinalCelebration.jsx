import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Particles from './ui/Particles';

const FinalCelebration = () => {
  const [celebrating, setCelebrating] = useState(false);

  return (
    <section className="relative py-32 px-4 flex flex-col items-center justify-center text-center overflow-hidden min-h-[80vh]">
      {celebrating && (
        <div className="absolute inset-0 pointer-events-none z-0">
          <Particles count={50} />
          <div className="absolute inset-0 animate-pulse bg-pink-200/20 mix-blend-overlay"></div>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-2xl mx-auto"
      >
        <div className="relative mb-12 flex justify-center">
          <div className="absolute inset-0 bg-white opacity-40 blur-2xl rounded-full scale-150 animate-pulse"></div>
          <img
            src="/images/memory-4.jpeg"
            alt="Swamini"
            loading="lazy"
            className="rounded-2xl shadow-2xl border-4 border-white relative z-10 w-full max-w-lg object-cover"
          />
        </div>

        <motion.h1
          className="font-serif text-4xl md:text-6xl font-bold text-gray-800 mb-6 drop-shadow-sm"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Happy Birthday, Swamini 🎂
        </motion.h1>

        <motion.p
          className="font-sans text-xl md:text-2xl text-gray-700 mb-12 font-medium leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Keep smiling. The world is a little kinder because you are in it.
        </motion.p>

        <motion.button
          onClick={() => setCelebrating(true)}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-rose-400 text-white px-10 py-4 rounded-full font-medium text-xl shadow-lg hover:bg-rose-500 hover:shadow-xl transition-all duration-300 mx-auto"
        >
          {celebrating ? 'Happy Birthday 🎈' : 'Celebrate 🎉'}
        </motion.button>
      </motion.div>
    </section>
  );
};

export default FinalCelebration;
