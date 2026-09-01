import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const reasonsList = [
  'Your heart is genuinely pure',
  'You are kind without needing a reason',
  'You make people feel comfortable being themselves',
  'You made my life feel alive again',
  'You deserve everything, and then some more',
];

const Reasons = () => {
  return (
    <section className="py-20 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-5xl font-bold text-gray-800 mb-4"
        >
          Why You Are Special 🌸
        </motion.h2>
        <div className="h-1 w-24 bg-purple-300 mx-auto rounded-full"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="glass-card p-3 rounded-3xl w-full md:w-[42%] shrink-0 md:sticky md:top-10"
        >
          <img
            src="/images/swamini-park.jpeg"
            alt="Swamini"
            loading="lazy"
            className="w-full h-80 md:h-[26rem] object-cover object-top rounded-2xl shadow-sm"
          />
        </motion.div>

        {/* Reasons */}
        <div className="flex flex-col gap-5 flex-1 w-full">
          {reasonsList.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.02,
                y: -5,
                boxShadow: '0 10px 30px rgba(195, 177, 225, 0.4)',
              }}
              className="glass-card p-5 rounded-2xl flex items-center gap-4 cursor-default relative overflow-hidden group"
            >
              <div className="bg-white/50 p-3 rounded-full group-hover:rotate-12 transition-transform duration-300 shrink-0">
                <Sparkles className="text-rose-gold" size={22} />
              </div>
              <p className="font-sans text-lg md:text-xl text-gray-700 font-medium">
                {reason}
              </p>
              <div className="absolute right-0 top-0 w-32 h-32 bg-white opacity-0 group-hover:opacity-20 blur-2xl rounded-full transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reasons;
