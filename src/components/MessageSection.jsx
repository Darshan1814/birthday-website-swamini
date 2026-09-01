import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const fullText = `Happy Birthday, Swamini 🎂

You are one of the kindest people I have ever known. Not the loud kind of kind — the quiet kind. The kind that shows up in small things and makes people feel safe.

Since you came into my life, everything has felt a little more alive. Ordinary days have more colour in them, and even simple conversations became something I look forward to.

You matter so much. To me, and to everyone lucky enough to have you. I hope this year is gentle with you and gives back all the love you keep quietly giving to others.

You deserve everything, Swamini. Every good thing. 🌸`;

const MessageSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    // Index-based so the effect is safe to re-run (StrictMode) without duplicating text.
    let i = 0;
    const timer = setInterval(() => {
      i += 1;
      setCharCount(i);
      if (i >= fullText.length) clearInterval(timer);
    }, 30);

    return () => clearInterval(timer);
  }, [isInView]);

  const isDone = charCount >= fullText.length;

  return (
    <section className="relative py-24 px-4 overflow-hidden flex items-center justify-center">
      {/* Background sparkle field */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] opacity-30 animate-[spin_60s_linear_infinite]"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 2px, transparent 2px)',
            backgroundSize: '100px 100px',
            backgroundPosition: '0 0, 50px 50px',
          }}
        ></div>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-card max-w-3xl w-full p-8 md:p-12 rounded-3xl relative z-10 text-center shadow-2xl"
      >
        <div className="flex justify-center mb-6">
          <img
            src="/images/swamini-cute.jpeg"
            alt="Swamini"
            className="h-24 w-24 rounded-full object-cover object-top border-4 border-white shadow-lg"
          />
        </div>

        <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          A Little Message For You ❤️
        </h2>

        <div className="min-h-[320px] md:min-h-[280px]">
          <p className="font-sans text-lg md:text-xl text-gray-700 leading-relaxed font-light whitespace-pre-wrap text-left">
            {fullText.slice(0, charCount)}
            {!isDone && <span className="animate-pulse">|</span>}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default MessageSection;
