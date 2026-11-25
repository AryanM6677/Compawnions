import { create } from 'zustand';

interface QuizState {
  answers: Record<string, any>;
  setAnswer: (stepId: string, answer: any) => void;
  resetQuiz: () => void;
  isComplete: boolean;
  setIsComplete: (complete: boolean) => void;
}

export const useQuizStore = create<QuizState>((set) => ({
  answers: {},
  isComplete: false,
  setAnswer: (stepId, answer) =>
    set((state) => ({
      answers: { ...state.answers, [stepId]: answer },
    })),
  setIsComplete: (complete) =>
    set(() => ({
      isComplete: complete,
    })),
  resetQuiz: () =>
    set(() => ({
      answers: {},
      isComplete: false,
    })),
}));
