import { BREEDS, DIETARY_CONTENT } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CareAndCommitment } from '@/components/CareAndCommitment';

export function generateStaticParams() {
  return BREEDS.map((breed) => ({
    id: breed.id,
  }));
}

export default async function BreedWiki({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const breed = BREEDS.find(b => b.id === resolvedParams.id);
  
  if (!breed) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <h1 className="text-3xl font-black tracking-tighter text-white">Breed not found in database.</h1>
      </div>
    );
  }

  const dietData = DIETARY_CONTENT[breed.type as 'dog' | 'cat'];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-terracotta selection:text-white">
      {/* Immersive Cinematic Header */}
      <div className="relative h-[50vh] lg:h-[70vh] w-full bg-black">
        <img 
          src={breed.imageUrl} 
          alt={breed.name}
          className="w-full h-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 z-10" />
        
        <div className="absolute bottom-0 left-0 w-full p-8 lg:p-16 max-w-5xl mx-auto z-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em]">
              {breed.type}
            </span>
            {breed.hybrid && (
              <span className="bg-terracotta/20 border border-terracotta/50 text-terracotta px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em]">
                Hybrid
              </span>
            )}
          </div>
          <h1 className="text-6xl lg:text-8xl font-black text-white tracking-tighter mb-6 drop-shadow-2xl">
            {breed.name}
          </h1>
          <p className="text-xl lg:text-3xl text-white/80 max-w-3xl font-light tracking-wide leading-relaxed">
            {breed.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-8 lg:p-16">
        {/* Core Stats Bento Box */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-[#0a0a0a] border border-white/10 p-6 rounded-3xl flex flex-col justify-center">
            <div className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] mb-2">Origin</div>
            <div className="text-xl font-bold tracking-tight">{breed.origin}</div>
          </div>
          <div className="bg-[#0a0a0a] border border-white/10 p-6 rounded-3xl flex flex-col justify-center">
            <div className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] mb-2">Size</div>
            <div className="text-xl font-bold tracking-tight">{breed.size} <span className="text-white/40 text-sm ml-1 font-light">({breed.weight})</span></div>
          </div>
          <div className="bg-[#0a0a0a] border border-white/10 p-6 rounded-3xl flex flex-col justify-center">
            <div className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] mb-2">Lifespan</div>
            <div className="text-xl font-bold tracking-tight">{breed.lifespan}</div>
          </div>
          <div className="bg-[#0a0a0a] border border-white/10 p-6 rounded-3xl flex flex-col justify-center">
            <div className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] mb-2">Cost</div>
            <div className="text-xl font-bold tracking-tight">${breed.monthlyCost}<span className="text-white/40 text-sm ml-1 font-light">/mo</span></div>
          </div>
        </div>

        {/* Quick Facts Grid (Horizontal) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-[#0a0a0a] border border-white/10 px-6 py-4 rounded-3xl flex justify-between items-center">
            <span className="text-white/40 text-xs font-bold uppercase tracking-wider">Energy</span>
            <span className="font-bold text-sm tracking-widest text-terracotta">{'⚡'.repeat(breed.energy)}</span>
          </div>
          <div className="bg-[#0a0a0a] border border-white/10 px-6 py-4 rounded-3xl flex justify-between items-center">
            <span className="text-white/40 text-xs font-bold uppercase tracking-wider">Grooming</span>
            <span className="font-bold text-sm tracking-widest text-blue-400">{'🪮'.repeat(breed.grooming)}</span>
          </div>
          <div className="bg-[#0a0a0a] border border-white/10 px-6 py-4 rounded-3xl flex justify-between items-center">
            <span className="text-white/40 text-xs font-bold uppercase tracking-wider">Noise</span>
            <span className="font-bold text-sm tracking-widest text-green-400">{'🔊'.repeat(breed.noise)}</span>
          </div>
          <div className="bg-[#0a0a0a] border border-white/10 px-6 py-4 rounded-3xl flex justify-center items-center">
            <a
              href={`https://www.petfinder.com/search/${breed.type}s-for-adoption/?breed=${encodeURIComponent(breed.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-terracotta font-bold text-xs uppercase tracking-widest transition-colors flex items-center gap-2"
            >
              Adopt a {breed.name} <span className="text-lg">→</span>
            </a>
          </div>
        </div>

        {/* Deep Dive Section - Two Columns */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Left Column: Behavioral */}
          <div className="space-y-12">
            <section className="bg-[#0a0a0a] border border-white/10 p-10 rounded-3xl relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 w-64 h-64 bg-terracotta/10 blur-3xl rounded-full" />
              <h2 className="text-3xl font-black tracking-tight mb-6 relative z-10">Behavioral Architecture</h2>
              <p className="text-white/70 text-lg leading-relaxed font-light relative z-10">
                {breed.personality}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8 mt-10 relative z-10">
                <div>
                  <h3 className="font-bold text-white/50 uppercase tracking-[0.2em] text-xs mb-4">The Pros</h3>
                  <ul className="space-y-3">
                    {breed.pros.map((pro, i) => (
                      <li key={i} className="flex gap-3 text-white/80 font-light">
                        <span className="text-green-400">✓</span> {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-white/50 uppercase tracking-[0.2em] text-xs mb-4">The Cons</h3>
                  <ul className="space-y-3">
                    {breed.cons.map((con, i) => (
                      <li key={i} className="flex gap-3 text-white/80 font-light">
                        <span className="text-red-400">✕</span> {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Diet */}
          <div className="space-y-12">
            <section className="bg-[#0a0a0a] border border-white/10 p-10 rounded-3xl h-full">
              <h2 className="text-3xl font-black tracking-tight mb-8">Diet & Nutrition</h2>
              
              <div className="flex flex-col xl:flex-row gap-6 mb-8">
                <div className="text-4xl bg-white/5 p-5 rounded-3xl border border-white/10 flex items-center justify-center shrink-0">
                  🦴
                </div>
                <div className="flex-1">
                  <h4 className="text-white/40 uppercase tracking-widest text-xs font-bold mb-2">Breed Specific Note</h4>
                  <p className="text-lg text-white/90 leading-relaxed font-light mb-4">
                    {breed.dietaryNotes}
                  </p>
                  {breed.vegetarianDietPossible && (
                    <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 text-green-400 font-bold px-4 py-2 rounded-full text-xs uppercase tracking-wider">
                      <span>🌱</span> Approved for Plant-Based Diet
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-white/40 uppercase tracking-widest text-xs font-bold mb-4">General Base Diet</h4>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                    <p className="text-white/80">{dietData.baseDiet}</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-green-400 uppercase tracking-widest text-xs font-bold mb-4 flex items-center gap-2">
                      <span>✅</span> Safe Treats
                    </h4>
                    <ul className="space-y-2">
                      {dietData.safeTreats.map((treat: string, i: number) => (
                        <li key={i} className="flex gap-3 text-white/80 text-sm">
                          <span className="text-green-500/50">•</span> {treat}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-red-400 uppercase tracking-widest text-xs font-bold mb-4 flex items-center gap-2">
                      <span>❌</span> Toxic Foods
                    </h4>
                    <ul className="space-y-2">
                      {dietData.toxicFoods.map((toxic: string, i: number) => (
                        <li key={i} className="flex gap-3 text-white/80 text-sm">
                          <span className="text-red-500/50">•</span> {toxic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-white/40 uppercase tracking-widest text-xs font-bold mb-4 mt-6">Recommended Foods</h4>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {dietData.recommendedFoods.map((food: string, i: number) => (
                      <li key={i} className="bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white/70">
                        {food}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Full Width Financial Reality */}
        <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden p-10 lg:p-14">
          <h2 className="text-3xl font-black tracking-tight mb-10">Financial & Time Reality</h2>
          <CareAndCommitment breed={breed} hideDiet={true} />
        </div>
      </div>
    </div>
  );
}
