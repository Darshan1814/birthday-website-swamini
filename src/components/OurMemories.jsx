import { motion } from 'framer-motion';

const memories = [
  {
    image: '/images/memory-1.jpeg',
    title: 'That afternoon on the grass 🌿',
    note: 'Nowhere to be, nothing to do, and it still felt like the best day.',
  },
  {
    image: '/images/memory-2.jpeg',
    title: 'Laughing at absolutely nothing 😊',
    note: 'You laugh with your whole face. I hope you never lose that.',
  },
  {
    image: '/images/memory-3.jpeg',
    title: 'One of my favourite days ✨',
    note: 'Just talking, for hours. Simple, and somehow unforgettable.',
  },
];

const OurMemories = () => {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-5xl font-bold text-gray-800 mb-4"
        >
          Our Memories 🌿
        </motion.h2>
        <div className="h-1 w-32 bg-purple-300 mx-auto rounded-full"></div>
      </div>

      <div className="relative">
        {/* Animated vertical line (desktop only) */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 bg-white/60 rounded-full"
        ></motion.div>

        <div className="space-y-12 md:space-y-16">
          {memories.map((memory, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex w-full justify-center ${
                  isLeft ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: 0, y: 40 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.03 }}
                  className="glass-card p-3 rounded-2xl w-full max-w-sm md:w-[46%] md:max-w-none"
                >
                  <img
                    src={memory.image}
                    alt={memory.title}
                    loading="lazy"
                    className="w-full h-72 rounded-xl object-cover object-center shadow-sm mb-4"
                  />
                  <h3 className="font-sans text-lg font-bold text-gray-800 px-2">
                    {memory.title}
                  </h3>
                  <p className="font-sans text-sm text-gray-600 px-2 pt-1 pb-2 leading-relaxed">
                    {memory.note}
                  </p>
                </motion.div>

                {/* Center node (desktop only) */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-purple-400 rounded-full border-4 border-white shadow-md z-10"
                ></motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurMemories;
