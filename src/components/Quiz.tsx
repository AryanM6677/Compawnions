'use client';

import { useQuizStore } from '@/store/quizStore';
import { QUIZ_STEPS } from '@/lib/data';
import { useRouter } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import { useQueryState, parseAsInteger } from 'nuqs';
import { motion, AnimatePresence } from 'framer-motion';

function QuizContent() {
  const [currentStep, setCurrentStep] = useQueryState('step', parseAsInteger.withDefault(0));
  const { answers, setAnswer, setIsComplete } = useQuizStore();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCapturingEmail, setIsCapturingEmail] = useState(false);
  const [email, setEmail] = useState('');

  const step = QUIZ_STEPS[currentStep] || QUIZ_STEPS[0];
  const currentAnswer = answers[step.id];

  const handleOptionSelect = (optionId: string) => {
    if (step.type === 'single') {
      setAnswer(step.id, optionId);
    } else if (step.type === 'multi') {
      const currentSelection = (currentAnswer as string[]) || [];
      if (currentSelection.includes(optionId)) {
        setAnswer(step.id, currentSelection.filter(id => id !== optionId));
      } else {
        setAnswer(step.id, [...currentSelection, optionId]);
      }
    }
  };

  const isNextDisabled = () => {
    if (step.type === 'single') return !currentAnswer;
    if (step.type === 'multi') return !currentAnswer || currentAnswer.length === 0;
    if (step.type === 'slider') return currentAnswer === undefined;
    return false;
  };

  const nextStep = () => {
    if (currentStep >= QUIZ_STEPS.length - 1) {
      setIsCapturingEmail(true);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const submitEmailAndFinish = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsProcessing(true);
    setIsComplete(true);
    // Vercel guidelines: 150-300ms minimum loading duration for apparent processing
    setTimeout(() => {
      router.push('/results');
    }, 400);
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isFinalStep = currentStep === QUIZ_STEPS.length - 1;

  if (isCapturingEmail) {
    return (
      <div className="max-w-2xl mx-auto bg-[#0a0a0a] rounded-3xl shadow-2xl p-8 lg:p-12 border border-white/10 overflow-hidden text-center relative">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-terracotta/5 blur-[100px] pointer-events-none rounded-full" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-terracotta to-orange-500 rounded-full mx-auto flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(255,111,97,0.3)]">
            <span className="text-4xl text-white">✨</span>
          </div>
          
          <h2 className="text-4xl font-extrabold text-white mb-4 leading-tight">Your Perfect Match is Ready!</h2>
          <p className="text-white/70 text-lg mb-8 max-w-md mx-auto">
            We've crunched the data. Enter your email to see your results and get a <strong className="text-white">free personalized care guide</strong> for your top breeds.
          </p>

          <form onSubmit={submitEmailAndFinish} className="flex flex-col gap-4 max-w-sm mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="bg-white/5 border border-white/10 text-white rounded-xl px-6 py-4 text-lg focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta transition-all placeholder:text-white/30"
            />
            <button
              type="submit"
              disabled={isProcessing}
              className="bg-terracotta hover:bg-[#d94a2b] text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(255,111,97,0.2)] hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
            >
              {isProcessing ? 'Unlocking Results...' : 'See My Matches'}
            </button>
            <button
              type="button"
              onClick={() => submitEmailAndFinish()}
              disabled={isProcessing}
              className="text-white/40 hover:text-white/70 text-sm mt-2 transition-colors underline underline-offset-4"
            >
              Skip and see results
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-[#0a0a0a] rounded-3xl shadow-2xl p-8 lg:p-12 border border-white/10 overflow-hidden">
      <div className="mb-8">
        <p className="text-terracotta font-bold text-sm tracking-wider uppercase mb-2">
          Step {currentStep + 1} of {QUIZ_STEPS.length}
        </p>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-3">{step.question}</h2>
        <p className="text-white/70 text-lg">{step.subtitle}</p>
      </div>

      <div className="mb-12 min-h-[300px] relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {step.type === 'single' || step.type === 'multi' ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {step.options?.map((opt) => {
                  const isSelected = step.type === 'single' 
                    ? currentAnswer === opt.id 
                    : ((currentAnswer as string[]) || []).includes(opt.id);

                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleOptionSelect(opt.id)}
                      aria-label={`${opt.label}: ${opt.desc}`}
                      aria-pressed={isSelected}
                      className={`flex flex-col text-left p-6 rounded-2xl border-2 transition-all outline-none focus-visible:ring-4 focus-visible:ring-terracotta/50 ${
                        isSelected 
                          ? 'border-terracotta bg-terracotta/10 shadow-[0_0_20px_rgba(255,111,97,0.15)]' 
                          : 'border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 hover:-translate-y-1'
                      }`}
                    >
                      <span className="text-3xl mb-3" aria-hidden="true">{opt.emoji}</span>
                      <span className="font-bold text-white text-lg">{opt.label}</span>
                      <span className="text-white/60 text-sm mt-1">{opt.desc}</span>
                    </button>
                  );
                })}
              </div>
            ) : step.type === 'slider' ? (
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                <input
                  type="range"
                  min={step.min}
                  max={step.max}
                  step={step.step || 1}
                  value={currentAnswer || step.min}
                  onChange={(e) => setAnswer(step.id, Number(e.target.value))}
                  className="w-full accent-terracotta h-3 bg-white/20 rounded-lg appearance-none cursor-pointer outline-none focus-visible:ring-4 focus-visible:ring-terracotta/50"
                  aria-label={step.question}
                />
                <div className="flex justify-between mt-6 text-white/70 font-medium font-variant-numeric tabular-nums">
                  <span>{step.prefix || ''}{step.min}</span>
                  <span className="text-xl font-bold text-terracotta">
                    {step.prefix || ''}{currentAnswer || step.min}
                  </span>
                  <span>{step.prefix || ''}{step.max}{step.id === 'budget' ? '+' : ''}</span>
                </div>
                {step.labels && (
                  <div className="text-center mt-6 text-lg font-bold text-white">
                    {step.labels[Math.min(
                      Math.floor(((currentAnswer || step.min) - (step.min || 1)) / (step.step || 1)),
                      step.labels.length - 1
                    )] || ''}
                  </div>
                )}
              </div>
            ) : null}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-between items-center pt-8 border-t border-white/10">
        <button
          onClick={prevStep}
          disabled={currentStep === 0 || isProcessing}
          className={`font-bold text-lg px-6 py-3 rounded-xl transition-colors outline-none focus-visible:ring-4 focus-visible:ring-white/30 ${
            currentStep === 0 ? 'text-white/30 cursor-not-allowed opacity-0 pointer-events-none' : 'text-white/70 hover:text-white hover:bg-white/10'
          }`}
        >
          Go Back
        </button>
        <button
          onClick={() => {
            if (step.type === 'slider' && currentAnswer === undefined) {
               setAnswer(step.id, step.min);
            }
            nextStep();
          }}
          disabled={isNextDisabled() || isProcessing}
          aria-busy={isProcessing}
          className={`font-bold text-lg px-8 py-3 rounded-xl transition-all outline-none focus-visible:ring-4 focus-visible:ring-terracotta/50 flex items-center justify-center gap-2 ${
            isNextDisabled() || isProcessing
              ? 'bg-sage text-navy/30 cursor-not-allowed' 
              : 'bg-terracotta text-white shadow-lg shadow-terracotta/30 hover:scale-105 active:scale-95'
          }`}
        >
          {isFinalStep ? 'Calculate Matches' : 'Next Question'}
        </button>
      </div>
    </div>
  );
}

export function Quiz() {
  return (
    <Suspense fallback={<div className="h-96 flex items-center justify-center"><div className="animate-spin text-4xl">⏳</div></div>}>
      <QuizContent />
    </Suspense>
  );
}
