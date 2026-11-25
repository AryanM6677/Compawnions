import { create } from 'zustand';

interface GranularAnswers {
  // Environmental
  floorSubstrate?: string;
  spatialBoundary?: string;
  microClimate?: string;
  
  // Temporal & Lifestyle
  diurnalAbsence?: string;
  exertionBudget?: string;
  acousticThreshold?: string;

  // Dynamics & Ethics
  generationalVariance?: string;
  dietaryEthics?: string;
}

interface MatchState {
  answers: GranularAnswers;
  setAnswer: (category: keyof GranularAnswers, value: string) => void;
  availableMatches: number;
  isComplete: boolean;
  matchResults: any[] | null;
  isFetching: boolean;
  fetchMatchResults: () => Promise<void>;
}

// Mock starting matches
const TOTAL_MATCHES = 1452;

export const useMatchStore = create<MatchState>((set) => ({
  answers: {},
  availableMatches: TOTAL_MATCHES,
  isComplete: false,
  
  setAnswer: (category, value) => set((state) => {
    const newAnswers = { ...state.answers, [category]: value };
    const answeredCount = Object.keys(newAnswers).length;
    
    let newMatchCount = TOTAL_MATCHES;
    if (newAnswers.floorSubstrate === 'hardwood') newMatchCount -= 200;
    if (newAnswers.spatialBoundary === 'apartment') newMatchCount -= 500;
    if (newAnswers.diurnalAbsence === '9to5') newMatchCount -= 300;
    if (newAnswers.exertionBudget === 'low') newMatchCount -= 400;
    if (newAnswers.dietaryEthics === 'vegan') newMatchCount -= 850;
    
    newMatchCount -= (answeredCount * 12);
    if (newMatchCount < 1) newMatchCount = 1;

    return { 
      answers: newAnswers, 
      availableMatches: newMatchCount,
      isComplete: answeredCount === 8
    };
  }),
  
  matchResults: null,
  isFetching: false,
  
  fetchMatchResults: async () => {
    set({ isFetching: true });
    try {
      const state = useMatchStore.getState();
      const response = await fetch("http://localhost:8000/api/match", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state.answers)
      });
      const data = await response.json();
      set({ matchResults: data.matches, isFetching: false });
    } catch (error) {
      console.error("We lost the scent...", error);
      set({ isFetching: false });
    }
  }
}));
