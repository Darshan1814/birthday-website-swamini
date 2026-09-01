import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const IntroAnimation = ({ onComplete }) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-rose-100 p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="glass-card p-6 rounded-3xl max-w-sm w-full text-center shadow-2xl relative"
      >
        <Sparkles className="absolute -top-4 -right-4 text-rose-400 animate-pulse" size={40} />
        <Sparkles className="absolute -bottom-4 -left-4 text-purple-400 animate-bounce" size={32} />

        <div className="rounded-2xl overflow-hidden mb-6 border-4 border-white shadow-inner">
          <img
            src="/images/swamini-main.jpeg"
            alt="Swamini"
            className="w-full h-64 object-cover object-top"
          />
        </div>

        <h2 className="font-serif text-2xl font-bold text-gray-800 mb-2">
          Hey Swamini 🌸
        </h2>
        <p className="font-sans text-base text-gray-600 mb-6 leading-relaxed">
          Today is your day. I made something small, just for you.
        </p>

        <motion.button
          onClick={onComplete}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-4 rounded-full bg-rose-400 text-white font-bold text-lg shadow-lg hover:bg-rose-500 transition-colors"
        >
          Open it 💝
        </motion.button>
      </motion.div>
    </div>
  );
};

export default IntroAnimation;
