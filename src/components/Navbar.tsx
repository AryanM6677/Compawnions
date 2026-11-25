'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [toastMessage, setToastMessage] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showComingSoon = () => {
    setToastMessage('Coming Soon! We will add this feature once prototyping is complete.');
    setTimeout(() => setToastMessage(''), 3000);
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500 ${scrolled ? 'pt-4' : 'pt-8'}`}
      >
        <div className={`w-full max-w-6xl flex items-center justify-between px-6 py-4 rounded-full transition-all duration-500 ${
          scrolled 
            ? 'bg-black/40 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]' 
            : 'bg-transparent'
        }`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-white text-black w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
              🐾
            </div>
            <span className={`text-xl font-extrabold tracking-tight transition-colors duration-300 ${scrolled ? 'text-white' : 'text-white drop-shadow-md'}`}>
              ComPAWnions
            </span>
          </Link>

          {/* Center Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/quiz" className="text-white/80 hover:text-white font-semibold transition-colors text-xs uppercase tracking-[0.15em]">
              Matchmaker
            </Link>
            <Link href="/wiki" className="text-white/80 hover:text-white font-semibold transition-colors text-xs uppercase tracking-[0.15em]">
              Encyclopedia
            </Link>
            <a href="https://www.petfinder.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white font-semibold transition-colors text-xs uppercase tracking-[0.15em]">
              Shelters
            </a>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-4">
            <button 
              onClick={showComingSoon}
              className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-md"
              aria-label="Saved Matches"
            >
              <span aria-hidden="true" className="text-sm">❤️</span>
            </button>
            <button 
              onClick={showComingSoon}
              className="bg-white hover:bg-gray-200 text-black px-6 py-2.5 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-lg"
            >
              Sign In
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Global Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            className="fixed top-32 left-1/2 -translate-x-1/2 z-[100] bg-black/80 backdrop-blur-xl text-white px-6 py-3 rounded-full shadow-2xl border border-white/20 flex items-center gap-3"
          >
            <span>🚧</span>
            <span className="font-semibold text-sm tracking-wide">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
