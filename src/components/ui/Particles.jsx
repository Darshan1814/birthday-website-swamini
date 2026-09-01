import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Star } from 'lucide-react';

const icons = [Heart, Sparkles, Star];
const colors = ['text-rose-gold', 'text-white', 'text-rose-300'];

/**
 * Randomised values are generated once in a lazy state initialiser instead of
 * during render, so a re-render never reshuffles particles mid-flight.
 */
const buildParticles = (count) =>
  Array.from({ length: count }).map(() => ({
    iconIndex: Math.floor(Math.random() * icons.length),
    color: colors[Math.floor(Math.random() * colors.length)],
    size: Math.random() * 16 + 8,
    startX: Math.random() * 100,
    startY: Math.random() * 100,
    driftA: Math.random() * 50 - 25,
    driftB: Math.random() * 50 - 25,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

const Particles = ({ count = 20 }) => {
  const [particles] = useState(() => buildParticles(count));

  return (
    <>
      {particles.map((particle, i) => {
        const Icon = icons[particle.iconIndex];

        return (
          <motion.div
            key={i}
            className={`absolute ${particle.color} opacity-40`}
            style={{
              left: `${particle.startX}vw`,
              top: `${particle.startY}vh`,
            }}
            initial={{ y: 0, x: 0, opacity: 0, rotate: 0 }}
            animate={{
              y: [0, -100, -200, -300],
              x: [0, particle.driftA, particle.driftB],
              opacity: [0, 0.6, 0.6, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: 'linear',
              delay: particle.delay,
            }}
          >
            <Icon size={particle.size} fill={Icon === Heart ? 'currentColor' : 'none'} />
          </motion.div>
        );
      })}
    </>
  );
};

export default Particles;
