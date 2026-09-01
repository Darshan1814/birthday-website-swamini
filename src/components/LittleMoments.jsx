import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

const moments = [
  { src: '/images/swamini-mirror.jpeg', caption: 'Saved this one 🌸' },
  { src: '/images/swamini-cute.jpeg', caption: 'This smile, always ❤️' },
  { src: '/images/memory-4.jpeg', caption: 'A day I will not forget ✨' },
];

const LittleMoments = () => {
  const [revealed, setRevealed] = useState(() => moments.map(() => false));

  const reveal = (index) => {
    setRevealed((prev) => prev.map((value, i) => (i === index ? true : value)));
  };

  return (
    <section className="py-24 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Little Moments 💫
        </h2>
        <div className="h-1 w-24 bg-rose-300 mx-auto rounded-full mb-4"></div>
        <p className="text-gray-600 font-sans text-lg">Tap each one to open it</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {moments.map((moment, index) => (
          <div
            key={index}
            className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden glass shadow-lg"
          >
            <img
              src={moment.src}
              alt={revealed[index] ? moment.caption : 'A hidden moment'}
              loading="lazy"
              className={`w-full h-full object-cover object-top transition-all duration-1000 ease-out ${
                revealed[index] ? 'blur-0 scale-100' : 'blur-xl scale-110'
              }`}
            />

            <AnimatePresence>
              {!revealed[index] && (
                <motion.button
                  type="button"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 1.5 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => reveal(index)}
                  aria-label={`Reveal moment ${index + 1}`}
                  className="absolute inset-0 w-full bg-white/20 flex flex-col items-center justify-center cursor-pointer hover:bg-white/30 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-rose-300"
                >
                  <Sparkles size={60} className="text-white drop-shadow-lg mb-2 animate-bounce" />
                  <p className="text-white font-bold text-xl drop-shadow-md">Tap to open</p>
                </motion.button>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {revealed[index] && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md p-3 rounded-xl shadow-lg flex items-center justify-center gap-2"
                >
                  <Heart className="text-rose-400 shrink-0" size={20} fill="#fb7185" />
                  <p className="font-sans font-bold text-gray-800 text-sm text-center">
                    {moment.caption}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LittleMoments;
