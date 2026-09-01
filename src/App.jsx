import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import HerHeart from './components/HerHeart';
import MemoryGallery from './components/MemoryGallery';
import MessageSection from './components/MessageSection';
import OurMemories from './components/OurMemories';
import Reasons from './components/Reasons';
import LittleMoments from './components/LittleMoments';
import SurpriseLetter from './components/SurpriseLetter';
import FinalCelebration from './components/FinalCelebration';
import MusicPlayer from './components/MusicPlayer';
import LoadingScreen from './components/ui/LoadingScreen';
import Particles from './components/ui/Particles';
import IntroAnimation from './components/IntroAnimation';

function App() {
  const [loading, setLoading] = useState(true);
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleIntroComplete = () => {
    setIntroDone(true);

    // Browsers only allow audio to start from a user gesture, so kick it off here.
    const audio = document.getElementById('bg-music');
    if (audio) {
      audio.play().catch(() => {
        /* Autoplay blocked; the floating music button lets her start it manually. */
      });
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Global background particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Particles count={30} />
      </div>

      <audio id="bg-music" src="/song.mp3" loop />

      {!introDone ? (
        <IntroAnimation onComplete={handleIntroComplete} />
      ) : (
        <>
          <main className="relative z-10">
            <Hero />
            <HerHeart />
            <MemoryGallery />
            <MessageSection />
            <OurMemories />
            <Reasons />
            <LittleMoments />
            <SurpriseLetter />
            <FinalCelebration />
          </main>
          <MusicPlayer />
        </>
      )}
    </div>
  );
}

export default App;
