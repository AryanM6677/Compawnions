"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMatchStore } from "../store/useMatchStore";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { ShieldCheck, Clock, BookOpen, BarChart3 } from "lucide-react";
import clsx from "clsx";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function MatchResults() {
  const { answers, isComplete, matchResults } = useMatchStore();
  const [viewMode, setViewMode] = useState<"analytical" | "storybook">("analytical");

  if (!isComplete || !matchResults || matchResults.length === 0) return null;

  const topMatch = matchResults[0];

  // Dynamic Environmental Framing
  let heroImage = topMatch.image_url;
  // If specific conditions exist, we can overlay them, but let's default to the DB image
  if (answers.spatialBoundary === 'apartment' && answers.floorSubstrate === 'hardwood' && topMatch.breed_name == "Greyhound") {
    heroImage = "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1000&auto=format&fit=crop"; 
  } else if (answers.spatialBoundary === 'house' && topMatch.breed_name == "English Springer Spaniel") {
    heroImage = "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1000&auto=format&fit=crop"; 
  }

  const data = {
    labels: ['Energy', 'Grooming', 'Friendliness', 'Trainability', 'Noise'],
    datasets: [
      {
        label: 'Breed Profile',
        data: [4, 2, 5, 4, 1],
        backgroundColor: 'rgba(224, 106, 78, 0.2)',
        borderColor: 'rgba(224, 106, 78, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(224, 106, 78, 1)',
      },
    ],
  };

  const options = {
    scales: {
      r: {
        min: 0,
        max: 5,
        ticks: { display: false },
        pointLabels: {
          font: { family: 'Inter', size: 12, weight: 600 },
          color: '#0C1A30'
        }
      }
    },
    plugins: { legend: { display: false } }
  };

  return (
    <section id="matches" className="min-h-screen py-32 px-6 bg-alabaster">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full mb-8 shadow-sm border border-navy/5">
            <span className="w-3 h-3 bg-terracotta rounded-full animate-pulse" />
            <span className="font-bold tracking-widest uppercase text-sm">{topMatch.match_percentage}% Match Manifested</span>
          </div>
          <h2 className="text-5xl font-black text-navy tracking-tight mb-8">Meet the {topMatch.breed_name}.</h2>
          
          {/* View Toggle */}
          <div className="inline-flex bg-white p-2 rounded-2xl shadow-sm border border-navy/5">
            <button 
              onClick={() => setViewMode("analytical")}
              className={clsx(
                "flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all",
                viewMode === "analytical" ? "bg-navy text-white shadow-md" : "text-navy/60 hover:text-navy"
              )}
            >
              <BarChart3 size={20} /> Analytical View
            </button>
            <button 
              onClick={() => setViewMode("storybook")}
              className={clsx(
                "flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all",
                viewMode === "storybook" ? "bg-terracotta text-white shadow-md" : "text-navy/60 hover:text-navy"
              )}
            >
              <BookOpen size={20} /> Storybook View
            </button>
          </div>
        </motion.div>

        {/* Dynamic Environmental Framing */}
        <motion.div 
          key={heroImage}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-[500px] rounded-[3rem] overflow-hidden shadow-2xl shadow-navy/10 relative mb-16"
        >
          <img 
            src={heroImage} 
            alt="Dynamic Context" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
          <div className="absolute bottom-10 left-10 text-white">
            <p className="font-semibold tracking-widest uppercase mb-2 opacity-80">Biological Alignment</p>
            <h3 className="text-4xl font-black">{topMatch.breed_name}</h3>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {viewMode === "analytical" ? (
            <motion.div 
              key="analytical"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-navy/5">
                <h3 className="text-2xl font-bold text-navy mb-6">Biological Alignment</h3>
                <div className="h-[300px] flex justify-center">
                  <Radar data={data} options={options as any} />
                </div>
              </div>

              <div className="bg-navy p-8 rounded-[2.5rem] shadow-xl text-white flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Monthly Financial Forecast</h3>
                  <p className="text-white/60 mb-6">Estimated budget required for care.</p>
                  <div className="text-5xl font-black text-terracotta mb-8">${topMatch.monthly_cost}<span className="text-lg text-white/50">/mo</span></div>
                </div>
                
                <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-md">
                  <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck className="text-terracotta" />
                    <span className="font-bold">Protect Your Companion</span>
                  </div>
                  <p className="text-sm text-white/70 mb-6">
                    Unexpected vet bills average $1,200. Get comprehensive medical coverage today.
                  </p>
                  <button className="w-full bg-terracotta text-white py-4 rounded-2xl font-bold hover:bg-white hover:text-terracotta transition-colors">
                    Fetch Live Insurance Quotes
                  </button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="storybook"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-sage p-12 rounded-[3rem] shadow-xl shadow-navy/5"
            >
              <h3 className="text-3xl font-black text-navy mb-8 text-center">A Day in the Life</h3>
              <div className="max-w-2xl mx-auto space-y-12 relative before:absolute before:inset-0 before:ml-[1.1rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-terracotta/30 before:to-transparent">
                
                {/* Timeline Item 1 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-terracotta text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <Clock size={16} />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-md">
                    <div className="text-terracotta font-bold mb-1">8:00 AM</div>
                    <div className="text-navy font-bold text-lg mb-2">Morning Exertion</div>
                    <div className="text-navy/70 text-sm">Because your budget allows {answers.exertionBudget === 'high' ? '2+ hours' : 'low impact'} activity, you start the day with a perfect stroll to burn off overnight energy.</div>
                  </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-terracotta text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <Clock size={16} />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-md">
                    <div className="text-terracotta font-bold mb-1">1:00 PM</div>
                    <div className="text-navy font-bold text-lg mb-2">Midday Routine</div>
                    <div className="text-navy/70 text-sm">{answers.diurnalAbsence === '9to5' ? 'They are resting peacefully while you are at the office, perfectly suited for separation.' : 'They are lounging happily by your desk while you work from home.'}</div>
                  </div>
                </div>

                {/* Timeline Item 3 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-terracotta text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <Clock size={16} />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-md">
                    <div className="text-terracotta font-bold mb-1">6:00 PM</div>
                    <div className="text-navy font-bold text-lg mb-2">Evening Return</div>
                    <div className="text-navy/70 text-sm">A joyful greeting at the door, followed by an evening routine perfectly suited to your {answers.spatialBoundary === 'apartment' ? 'cozy apartment' : 'spacious home'}.</div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
