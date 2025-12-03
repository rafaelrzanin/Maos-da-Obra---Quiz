export type QuizStep = 'welcome' | 'quiz' | 'processing' | 'results';

export interface Option {
  label: string;
  value: string;
}

export interface Question {
  id: number;
  question: string;
  context?: string;
  options: Option[];
}

export interface QuizState {
  currentStep: QuizStep;
  answers: Record<number, string>;
}