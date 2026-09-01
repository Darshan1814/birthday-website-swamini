import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

/**
 * Floating control for the single background <audio> element rendered in App.
 * It never creates its own audio element, so the song can't double-play.
 */
const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = document.getElementById('bg-music');
    if (!audio) return;

    const syncPlaying = () => setIsPlaying(!audio.paused);
    syncPlaying();

    audio.addEventListener('play', syncPlaying);
    audio.addEventListener('pause', syncPlaying);

    return () => {
      audio.removeEventListener('play', syncPlaying);
      audio.removeEventListener('pause', syncPlaying);
    };
  }, []);

  const toggle = () => {
    const audio = document.getElementById('bg-music');
    if (!audio) return;

    if (audio.paused) {
      audio.play().catch(() => {
        /* Browser blocked playback; the button stays in the paused state. */
      });
    } else {
      audio.pause();
    }
  };

  return (
    <motion.button
      type="button"
      onClick={toggle}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      aria-label={isPlaying ? 'Pause the music' : 'Play the music'}
      className="fixed bottom-6 right-6 z-40 glass-card h-14 w-14 rounded-full shadow-xl flex items-center justify-center text-rose-500 hover:bg-white/80 transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-rose-300"
    >
      {isPlaying ? (
        <Pause size={22} fill="currentColor" />
      ) : (
        <Play size={22} fill="currentColor" className="ml-0.5" />
      )}
      {isPlaying && (
        <span className="absolute inset-0 rounded-full border-2 border-rose-300/60 animate-ping pointer-events-none"></span>
      )}
    </motion.button>
  );
};

export default MusicPlayer;
