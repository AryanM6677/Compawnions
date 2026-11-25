import Link from 'next/link';
import { HeroSlideshow } from './HeroSlideshow';
import { BREEDS } from '@/lib/data';

export function Hero() {
  const showcaseImages = [
    'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=2560&q=80', // Golden Retriever
    'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=2560&q=80', // Cat
    'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=2560&q=80', // Dogs running
    'https://images.unsplash.com/photo-1605568427561-40dd2afbd26c?auto=format&fit=crop&w=2560&q=80', // Husky
    'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=2560&q=80', // French Bulldog
    'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=2560&q=80', // Black Cat
    'https://images.unsplash.com/photo-1537151608805-ea9dcb22d15b?auto=format&fit=crop&w=2560&q=80', // Puppy
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-20 pt-20">
      {/* Background Slideshow */}
      <HeroSlideshow images={showcaseImages} />
      
      {/* Foreground Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-start text-left pt-32 sm:pt-24 w-full">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-1.5 rounded-full mb-8 shadow-2xl flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-terracotta animate-pulse"></div>
          <span className="text-white/90 text-xs font-bold tracking-[0.2em] uppercase">
            Proprietary Matchmaking Algorithm
          </span>
        </div>
        
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tighter mb-8 drop-shadow-2xl">
          Meet your <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-terracotta via-white to-terracotta animate-gradient-x">
            perfect match.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/80 max-w-2xl font-light tracking-wide leading-relaxed mb-10 drop-shadow-md">
          Powered by our proprietary 50-point data algorithm. We analyze biological compatibility, spatial constraints, and lifestyle metrics to connect you with your perfect lifelong companion.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto justify-start">
          <Link 
            href="/quiz"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/30 rounded-full hover:bg-white hover:text-navy hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start the Matchmaker <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </span>
          </Link>
          <Link 
            href="/wiki"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-transparent border-2 border-white/20 rounded-full hover:border-white hover:bg-white/10 hover:scale-105"
          >
            Explore Breed Data
          </Link>
        </div>
      </div>
    </section>
  );
}
