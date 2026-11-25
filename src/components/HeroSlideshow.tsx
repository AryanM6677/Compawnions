'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function HeroSlideshow({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(images.length - 1);

  useEffect(() => {
    const timer = setInterval(() => {
      setPreviousIndex(currentIndex);
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000); // Slower, more cinematic
    return () => clearInterval(timer);
  }, [currentIndex, images.length]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0 bg-black">
      {/* Invisible preloader that ACTUALLY preloads (display: none disables loading in modern browsers) */}
      <div className="absolute inset-0 opacity-0 pointer-events-none -z-50">
        {images.map((src) => (
          <img key={`preload-${src}`} src={src} alt="preload" loading="eager" />
        ))}
      </div>

      {images.map((src, index) => {
        const isActive = index === currentIndex;
        const isPrev = index === previousIndex;
        
        // Active is on top. Prev is underneath. Others are hidden at the bottom.
        const zIndex = isActive ? 10 : (isPrev ? 5 : 0);
        
        // Active fades in. Prev STAYS at 1 to prevent black dip. Others drop to 0.
        const opacity = isActive ? 1 : (isPrev ? 1 : 0);
        
        // Smooth scale effect.
        const scale = isActive ? 1 : 1.05;

        return (
          <motion.img
            key={src}
            src={src}
            initial={false}
            animate={{ opacity, scale, zIndex }}
            transition={{
              opacity: { duration: 2.5, ease: "easeInOut" },
              scale: { duration: 6, ease: "easeOut" },
              zIndex: { duration: 0 } // Snap z-index instantly to ensure perfect stacking
            }}
            className="absolute inset-0 w-full h-full object-cover object-[center_30%] will-change-transform will-change-opacity"
            alt="ComPAWnions Featured Pet"
          />
        );
      })}
      
      {/* Heavy vignette / gradient overlay to make text pop */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/80 pointer-events-none z-20" />
      <div className="absolute inset-0 bg-navy/20 pointer-events-none backdrop-blur-[2px] z-20" />
    </div>
  );
}
