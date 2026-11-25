"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMatchStore } from "../store/useMatchStore";
import { 
  Building2, Home, Wind, Map, 
  Clock, Activity, Volume2, Users, Leaf,
  ChevronDown, ChevronUp, CheckCircle2
} from "lucide-react";
import clsx from "clsx";

const categories = [
  {
    id: "environment",
    title: "1. Environmental Architecture",
    description: "Spatial boundaries and substrates.",
    questions: [
      {
        id: "floorSubstrate",
        title: "Primary Floor Substrate",
        options: [
          { value: "hardwood", label: "Hardwood/Tile", icon: Building2 },
          { value: "carpet", label: "Mostly Carpet", icon: Home },
        ]
      },
      {
        id: "spatialBoundary",
        title: "Spatial Boundaries",
        options: [
          { value: "apartment", label: "Apartment / Condo", icon: Building2 },
          { value: "house", label: "House with Yard", icon: Home },
        ]
      },
      {
        id: "microClimate",
        title: "Micro-Climate Control",
        options: [
          { value: "ac", label: "Climate Controlled", icon: Wind },
          { value: "natural", label: "Natural Ventilation", icon: Map },
        ]
      }
    ]
  },
  {
    id: "lifestyle",
    title: "2. Temporal & Lifestyle Rhythms",
    description: "Time and energy budgets.",
    questions: [
      {
        id: "diurnalAbsence",
        title: "Diurnal Absence",
        options: [
          { value: "9to5", label: "Empty 9 to 5", icon: Clock },
          { value: "wfh", label: "Work From Home", icon: Home },
        ]
      },
      {
        id: "exertionBudget",
        title: "Daily Exertion Budget",
        options: [
          { value: "low", label: "< 30 mins", icon: Activity },
          { value: "high", label: "2+ Hours", icon: Activity },
        ]
      },
      {
        id: "acousticThreshold",
        title: "Acoustic Threshold",
        options: [
          { value: "quiet", label: "Strictly Quiet", icon: Volume2 },
          { value: "vocal", label: "Vocal OK", icon: Volume2 },
        ]
      }
    ]
  },
  {
    id: "dynamics",
    title: "3. Domestic Dynamics & Ethics",
    description: "Household makeup and moral frameworks.",
    questions: [
      {
        id: "generationalVariance",
        title: "Generational Variance",
        options: [
          { value: "adults", label: "Adults Only", icon: Users },
          { value: "children", label: "Young Children", icon: Users },
        ]
      },
      {
        id: "dietaryEthics",
        title: "Dietary Framework",
        options: [
          { value: "omnivore", label: "Standard Omnivore", icon: Leaf },
          { value: "vegan", label: "Vegetarian / Vegan", icon: Leaf },
        ]
      }
    ]
  }
];

export default function Configurator() {
  const { answers, setAnswer, availableMatches, isComplete, fetchMatchResults, isFetching } = useMatchStore();
  const [activeCategory, setActiveCategory] = useState<string>("environment");

  return (
    <section id="assessment" className="relative min-h-screen py-32 px-6 bg-white rounded-t-[4rem] overflow-hidden">
      <div className="max-w-4xl mx-auto pb-40">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-navy tracking-tight mb-4">
            Micro-Detail Configuration
          </h2>
          <p className="text-lg text-navy/60">
            Expand the pillars below to calibrate your deep biological alignment.
          </p>
        </div>

        <div className="space-y-6">
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            // Check if all questions in this category are answered
            const categoryAnswered = category.questions.every(q => answers[q.id as keyof typeof answers]);

            return (
              <motion.div 
                layout
                key={category.id} 
                className={clsx(
                  "border-2 rounded-[2rem] overflow-hidden transition-colors duration-500",
                  isActive ? "border-terracotta bg-alabaster/50" : "border-navy/10 bg-white hover:border-navy/20 cursor-pointer"
                )}
              >
                {/* Accordion Header */}
                <div 
                  onClick={() => !isActive && setActiveCategory(category.id)}
                  className="p-8 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    {categoryAnswered ? (
                      <CheckCircle2 className="text-terracotta" size={32} />
                    ) : (
                      <div className="w-8 h-8 rounded-full border-2 border-navy/20" />
                    )}
                    <div>
                      <h3 className="text-2xl font-bold text-navy">{category.title}</h3>
                      <p className="text-navy/60 font-medium mt-1">{category.description}</p>
                    </div>
                  </div>
                  <div className="text-navy/40">
                    {isActive ? <ChevronUp size={32} /> : <ChevronDown size={32} />}
                  </div>
                </div>

                {/* Inline Expansion Content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                      className="px-8 pb-8 space-y-12"
                    >
                      <div className="w-full h-px bg-navy/5 mb-8" />
                      
                      {category.questions.map((q) => (
                        <div key={q.id} className="space-y-4">
                          <h4 className="text-xl font-bold text-navy">{q.title}</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {q.options.map((opt) => {
                              const isSelected = answers[q.id as keyof typeof answers] === opt.value;
                              const Icon = opt.icon;
                              return (
                                <button
                                  key={opt.value}
                                  onClick={() => setAnswer(q.id as any, opt.value)}
                                  className={clsx(
                                    "flex items-center gap-4 p-6 rounded-[1.5rem] transition-all duration-300 text-left",
                                    isSelected 
                                      ? "bg-navy text-white shadow-xl shadow-navy/20 scale-[1.02]" 
                                      : "bg-sage text-navy hover:bg-sage/80"
                                  )}
                                >
                                  <div className={clsx(
                                    "p-3 rounded-xl",
                                    isSelected ? "bg-white/10" : "bg-white text-terracotta"
                                  )}>
                                    <Icon size={24} strokeWidth={2.5} />
                                  </div>
                                  <span className="font-bold text-lg">{opt.label}</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                      
                      {/* Next Category Button */}
                      {categoryAnswered && category.id !== "dynamics" && (
                        <motion.div 
                          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                          className="pt-6 flex justify-end"
                        >
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              const nextId = category.id === "environment" ? "lifestyle" : "dynamics";
                              setActiveCategory(nextId);
                            }}
                            className="bg-terracotta text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
                          >
                            Continue
                          </button>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Floating Match Counter Widget */}
      <motion.div 
        layout
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40"
      >
        <div className="bg-navy/90 backdrop-blur-xl px-10 py-5 rounded-[2rem] shadow-2xl shadow-navy/20 flex items-center gap-6 border border-white/10">
          <div className="flex flex-col">
            <span className="text-white/60 text-sm font-semibold uppercase tracking-widest">Alignment Pool</span>
            <div className="text-white font-black text-3xl tabular-nums">
              {availableMatches.toLocaleString()} <span className="text-xl font-medium text-white/80">Matches</span>
            </div>
          </div>
          {isComplete && (
            <button 
              onClick={async () => {
                await fetchMatchResults();
                window.location.href = "#matches";
              }}
              className="bg-terracotta text-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-terracotta transition-colors ml-4 animate-wag-bounce"
            >
              {isFetching ? "Sniffing out matches..." : "Fetch My Companions"}
            </button>
          )}
        </div>
      </motion.div>
    </section>
  );
}
