import { useState, useEffect } from 'react';
import { CareAndCommitment } from './CareAndCommitment';
import { motion, AnimatePresence } from 'framer-motion';

function PartnerEcosystem({ breed }: { breed: any }) {
  return (
    <div className="mt-10 pt-8 border-t border-white/10">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <span>🤝</span> Partner Ecosystem
        </h3>
        <span className="text-xs font-semibold px-2 py-1 bg-white/10 text-white/50 rounded uppercase tracking-wider">Sponsored</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Affiliate 1 */}
        <a href="#" className="bg-white/5 border border-white/10 hover:border-[#1c4bdf]/50 hover:bg-[#1c4bdf]/5 rounded-xl p-5 flex flex-col items-center text-center transition-all hover:-translate-y-1 group">
          <div className="w-12 h-12 bg-[#1c4bdf] rounded-full flex items-center justify-center mb-3 text-white text-xl shadow-lg">📦</div>
          <h4 className="font-bold text-white mb-1">Chewy.com</h4>
          <p className="text-sm text-white/60 mb-3">Get 20% off your first order of {breed.name} specific nutrition.</p>
          <span className="text-[#4b7bff] group-hover:text-white text-sm font-semibold mt-auto transition-colors">Claim Offer →</span>
        </a>
        {/* Affiliate 2 */}
        <a href="#" className="bg-white/5 border border-white/10 hover:border-[#ff0083]/50 hover:bg-[#ff0083]/5 rounded-xl p-5 flex flex-col items-center text-center transition-all hover:-translate-y-1 group">
          <div className="w-12 h-12 bg-[#ff0083] rounded-full flex items-center justify-center mb-3 text-white text-xl shadow-lg">🛡️</div>
          <h4 className="font-bold text-white mb-1">Lemonade Pet</h4>
          <p className="text-sm text-white/60 mb-3">Get a custom health insurance quote for your {breed.name}.</p>
          <span className="text-[#ff4da6] group-hover:text-white text-sm font-semibold mt-auto transition-colors">Get Quote →</span>
        </a>
        {/* Affiliate 3 */}
        <a href="#" className="bg-white/5 border border-white/10 hover:border-[#f59e0b]/50 hover:bg-[#f59e0b]/5 rounded-xl p-5 flex flex-col items-center text-center transition-all hover:-translate-y-1 group">
          <div className="w-12 h-12 bg-[#f59e0b] rounded-full flex items-center justify-center mb-3 text-white text-xl shadow-lg">🏆</div>
          <h4 className="font-bold text-white mb-1">{breed.type === 'dog' ? 'AKC Marketplace' : 'CFA Verified'}</h4>
          <p className="text-sm text-white/60 mb-3">Connect with certified, ethical {breed.name} breeders.</p>
          <span className="text-[#fcd34d] group-hover:text-white text-sm font-semibold mt-auto transition-colors">Find Breeders →</span>
        </a>
      </div>
    </div>
  );
}

export function BreedCard({ breed }: { breed: any }) {
  const [isOpen, setIsOpen] = useState(false);

  // Vercel guidelines: Focus management and Esc key handling for modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const petfinderUrl = `https://www.petfinder.com/search/${breed.type}s-for-adoption/?breed=${encodeURIComponent(breed.name)}`;

  return (
    <>
      <div className="flex flex-col bg-[#0a0a0a] rounded-xl overflow-hidden shadow-2xl border border-white/10 hover:border-white/20 transition-all group">
        {/* Photo Area */}
        <button 
          onClick={() => setIsOpen(true)}
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          aria-label={`View breed details for ${breed.name}`}
          className="relative h-72 w-full overflow-hidden outline-none focus-visible:ring-4 focus-visible:ring-terracotta/50"
        >
          <img 
            src={breed.imageUrl.startsWith('http') ? breed.imageUrl : (breed.imageUrl.startsWith('/') ? breed.imageUrl : `/${breed.imageUrl}`)}
            alt={`Adoptable ${breed.name}`}
            className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&q=80';
            }}
          />
          <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-md font-bold text-white text-sm shadow-sm border border-white/10">
            {breed.matchScore}% Lifestyle Match
          </div>
          {/* Gradient overlay for text legibility if we wanted text over image, but we are doing clean Petfinder style */}
        </button>
        
        {/* Content Area */}
        <div className="p-5 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-terracotta font-bold uppercase tracking-wide text-xs">
              {breed.type === 'dog' ? 'Dog' : 'Cat'} • {breed.size}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{breed.name}</h3>
          
          <div className="text-white/60 text-sm mb-5 flex-1">
            <span className="block mb-1"><strong className="text-white/90">Lifespan:</strong> {breed.lifespan}</span>
            <span className="block"><strong className="text-white/90">Origin:</strong> {breed.origin}</span>
          </div>

          <div className="flex flex-col gap-3 mt-auto">
            <button
              onClick={() => setIsOpen(true)}
              className="w-full bg-white/5 hover:bg-white/10 text-white font-semibold py-3 rounded-lg border border-white/10 transition-colors outline-none focus-visible:ring-4 focus-visible:ring-white/30"
            >
              Breed Details & Care Reality
            </button>
            <a
              href={petfinderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-terracotta hover:bg-[#d94a2b] text-white font-semibold py-3 rounded-lg transition-colors text-center outline-none focus-visible:ring-4 focus-visible:ring-terracotta/50"
            >
              Find Adoptable {breed.name}s
            </a>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="bg-[#0a0a0a] border border-white/10 relative w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] z-10"
            >
              <div className="flex justify-between items-center p-6 border-b border-white/10 bg-white/5 shrink-0">
                <div>
                  <h2 id="modal-title" className="text-2xl font-bold text-white">{breed.name}</h2>
                  <p className="text-white/50 text-sm mt-1">Realistic Care & Commitment Profile</p>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  aria-label="Close modal"
                  className="w-10 h-10 hover:bg-white/10 rounded-full flex items-center justify-center text-xl transition-colors text-white/50 hover:text-white outline-none focus-visible:ring-4 focus-visible:ring-white/30"
                >
                  <span aria-hidden="true">✕</span>
                </button>
              </div>
              
              <div className="overflow-y-auto p-6 lg:p-8 flex-1 overscroll-contain">
                <CareAndCommitment breed={breed} />
                <PartnerEcosystem breed={breed} />
                
                <div className="mt-10 pt-6 border-t border-white/10 text-center">
                  <a
                    href={petfinderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-terracotta hover:bg-[#d94a2b] text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-[0_0_20px_rgba(255,111,97,0.2)] hover:shadow-[0_0_30px_rgba(255,111,97,0.4)] hover:-translate-y-1 outline-none focus-visible:ring-4 focus-visible:ring-terracotta/50"
                  >
                    Search Petfinder for {breed.name}s Near You
                  </a>
                  <p className="text-sm text-white/40 mt-4 max-w-lg mx-auto">
                    Note: This is a breed recommendation engine. The photos shown are stock photography representing the breed, not actual adoptable animals. Click above to view real adoptable pets on Petfinder.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
