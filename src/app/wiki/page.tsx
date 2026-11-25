import { BREEDS } from '@/lib/data';
import Link from 'next/link';

export default function WikiDirectory() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-24 px-8 lg:px-12 selection:bg-terracotta selection:text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center flex flex-col items-center">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full mb-6 inline-flex">
            <span className="text-white/80 text-xs font-bold tracking-[0.2em] uppercase">
              The Knowledge Base
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tighter mb-6">
            ComPAWnions <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">Encyclopedia</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl font-light tracking-wide leading-relaxed">
            The definitive, unvarnished truth about every breed. We map their behavioral architecture, biological realities, and exact lifestyle requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {BREEDS.map((breed) => (
            <Link 
              key={breed.id} 
              href={`/wiki/${breed.id}`}
              className="group relative bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,255,255,0.05)] flex flex-col"
            >
              {/* Premium Gradient Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
              
              <div className="h-56 overflow-hidden relative z-10">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
                <img 
                  src={breed.imageUrl} 
                  alt={breed.name}
                  className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[10px] font-bold text-white uppercase tracking-[0.2em] z-20">
                  {breed.type}
                </div>
              </div>
              
              <div className="p-8 pt-2 flex-1 flex flex-col relative z-10">
                <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">{breed.name}</h2>
                <p className="text-white/50 text-sm leading-relaxed line-clamp-2 mb-6 flex-1 font-light">
                  {breed.description}
                </p>
                <div className="text-white/80 font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2 group-hover:text-white transition-colors">
                  View Dossier <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
