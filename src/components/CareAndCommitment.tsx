import { TIME_COMMITMENTS, COST_DATA, DIETARY_CONTENT } from '@/lib/data';
import { HeartPulse, Clock, Wallet, CheckCircle, XCircle } from 'lucide-react';

export function CareAndCommitment({ breed, hideDiet = false }: { breed: any, hideDiet?: boolean }) {
  const isDog = breed.type === 'dog';
  const timeCommitments = TIME_COMMITMENTS[isDog ? 'dog' : 'cat'];
  const costData = COST_DATA[isDog ? 'dog' : 'cat'];
  const dietData = DIETARY_CONTENT[breed.type as 'dog' | 'cat'];

  return (
    <div className="grid md:grid-cols-2 gap-10">
      {/* Daily Routine */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-white/10 border border-white/20 text-white rounded-xl flex items-center justify-center shadow-inner">
            <Clock size={20} />
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">Time Commitment</h3>
        </div>
        
        <div className="grid gap-3">
          {timeCommitments.filter((t: any) => t.daily).map((t: any, i: number) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4 hover:bg-white/10 transition-colors">
              <span className="text-2xl">{t.icon}</span>
              <div>
                <div className="font-bold text-white text-sm">{t.activity}</div>
                <div className="text-white/50 font-medium text-xs tracking-wider uppercase mt-1">{t.duration}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Financial Breakdown */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-green-500/20 border border-green-500/30 text-green-400 rounded-xl flex items-center justify-center shadow-inner">
            <Wallet size={20} />
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">Cost Breakdown</h3>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
            <h4 className="font-bold text-white/50 uppercase tracking-[0.2em] text-xs mb-4 pb-2 border-b border-white/10">Upfront Costs</h4>
            <div className="space-y-3">
              {Object.entries(costData.upfront).map(([key, val]: [string, any]) => (
                <div key={key} className="flex justify-between items-center text-sm">
                  <span className="text-white/70">{key}</span>
                  <span className="font-bold text-white font-variant-numeric tabular-nums">${val.min} - ${val.max}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
            <h4 className="font-bold text-white/50 uppercase tracking-[0.2em] text-xs mb-4 pb-2 border-b border-white/10">Monthly Estimates</h4>
            <div className="space-y-3">
              {Object.entries(costData.monthly).map(([key, val]: [string, any]) => (
                <div key={key} className="flex justify-between items-center text-sm">
                  <span className="text-white/70">{key}</span>
                  <span className="font-bold text-white font-variant-numeric tabular-nums">${val.min} - ${val.max}</span>
                </div>
              ))}
              <div className="pt-4 mt-2 border-t border-white/10 flex justify-between items-center">
                <span className="font-bold text-white/80 uppercase tracking-widest text-xs">Total Est.</span>
                <span className="font-black text-green-400 text-xl font-variant-numeric tabular-nums">${breed.monthlyCost}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Diet & Nutrition */}
      {!hideDiet && (
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-terracotta/20 border border-terracotta/30 text-terracotta rounded-xl flex items-center justify-center shadow-inner text-xl">
              🦴
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">Diet & Nutrition</h3>
          </div>

        <div className="space-y-6">
          <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
            <p className="text-white/80 text-sm leading-relaxed mb-4">{breed.dietaryNotes}</p>
            {breed.vegetarianDietPossible && (
              <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide border border-green-500/20">
                <span>🌱</span> Approved for Plant-Based
              </div>
            )}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-green-500/5 p-4 rounded-xl border border-green-500/10">
              <h4 className="text-green-400 text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                <span>✅</span> Safe Treats
              </h4>
              <ul className="space-y-2">
                {dietData.safeTreats.map((treat: string, i: number) => (
                  <li key={i} className="text-white/70 text-sm flex gap-2"><span className="text-green-500/50">•</span> {treat}</li>
                ))}
              </ul>
            </div>
            <div className="bg-red-500/5 p-4 rounded-xl border border-red-500/10">
              <h4 className="text-red-400 text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                <span>❌</span> Toxic Foods
              </h4>
              <ul className="space-y-2">
                {dietData.toxicFoods.map((toxic: string, i: number) => (
                  <li key={i} className="text-white/70 text-sm flex gap-2"><span className="text-red-500/50">•</span> {toxic}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}
