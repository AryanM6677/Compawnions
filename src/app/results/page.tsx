'use client';

import { useEffect, useState } from 'react';
import { useQuizStore } from '@/store/quizStore';
import { calculateMatches } from '@/lib/matchLogic';
import { BreedCard } from '@/components/BreedCard';
import { ALTERNATIVE_PETS } from '@/lib/data';
import Link from 'next/link';

export default function ResultsPage() {
  const { answers, isComplete } = useQuizStore();
  const [results, setResults] = useState<{ matches: any[], userPref: any } | null>(null);

  useEffect(() => {
    if (isComplete && Object.keys(answers).length > 0) {
      setResults(calculateMatches(answers));
    }
  }, [answers, isComplete]);

  if (!isComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">You haven't completed the quiz yet!</h2>
          <Link href="/quiz" className="button bg-terracotta text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform inline-block">
            Take the Quiz
          </Link>
        </div>
      </div>
    );
  }

  if (!results) return null;

  return (
    <main className="min-h-screen bg-black pt-32 pb-24 px-6">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-terracotta font-bold text-sm tracking-wider uppercase mb-4">
            Analysis Complete
          </p>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Your most compatible companions.
          </h1>
          <p className="text-lg text-white/70 leading-relaxed">
            Based on your lifestyle, budget, and commitments, we've filtered out the noise. 
            Here are the animals that will thrive with you (and vice versa). Click on any card for the reality check.
          </p>
        </div>

        {results.userPref.diet === 'veg' && (
          <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 p-8 rounded-3xl mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">🥬 Vegetarian Household Notice</h2>
            <p className="text-white/80 mb-6">
              You indicated a vegetarian household. Obligate carnivores (like cats) have been deprioritized or penalized in your matches, as plant-based diets can be fatal to them. If you are open to alternative pets, consider these:
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {ALTERNATIVE_PETS.map(pet => (
                <div key={pet.name} className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <div className="text-4xl mb-2">{pet.emoji}</div>
                  <h4 className="font-bold text-white mb-1">{pet.name}</h4>
                  <p className="text-sm text-white/70">{pet.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {results.matches.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {results.matches.map((match: any) => (
              <BreedCard key={match.id} breed={match} />
            ))}
          </div>
        ) : (
          <div className="text-center max-w-2xl mx-auto bg-white/5 p-12 rounded-3xl border border-white/10">
            <div className="text-6xl mb-6">🫥</div>
            <h2 className="text-2xl font-bold text-white mb-4">No Perfect Matches Found</h2>
            <p className="text-white/70 mb-8">
              Your current lifestyle constraints (time, budget, housing) make it difficult to ethically recommend a pet right now. That's a responsible realization to have!
            </p>
            <Link href="/quiz" className="bg-white/10 text-white border border-white/20 px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform inline-block">
              Adjust Parameters
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
