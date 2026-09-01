import React from 'react';
import { motion } from 'framer-motion';

const cards = [
  {
    image: '/images/swamini-diwali.jpeg',
    caption: 'You have one of the purest hearts I know.',
  },
  {
    image: '/images/swamini-lake.jpeg',
    caption: 'Calm, kind, and impossible not to care about.',
  },
];

const HerHeart = () => {
  return (
    <section id="her-heart" className="py-20 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-5xl font-bold text-gray-800 mb-4"
        >
          The Kind Of Person You Are 🌸
        </motion.h2>
        <div className="h-1 w-24 bg-rose-300 mx-auto rounded-full"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index === 0 ? -50 : 50, rotate: index === 0 ? -5 : 5 }}
            whileInView={{ opacity: 1, x: 0, rotate: index === 0 ? -2 : 2 }}
            whileHover={{ scale: 1.05, rotate: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="glass-card p-4 rounded-2xl w-full max-w-sm shadow-xl"
          >
            <img
              src={card.image}
              alt="Swamini"
              className="w-full h-80 object-cover object-top rounded-xl mb-4"
            />
            <p className="font-sans text-lg text-center text-gray-700 font-medium">
              {card.caption}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HerHeart;
