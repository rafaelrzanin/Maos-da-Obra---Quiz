import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// IMPORTAÇÃO DAS TELAS
import { WelcomeScreen } from './components/WelcomeScreen';
import { QuizScreen } from './components/QuizScreen';
import { ProcessingScreen } from './components/ProcessingScreen';
import { ResultsScreen } from './components/ResultsScreen';

// IMPORTAÇÃO DAS NOVAS PÁGINAS (Verifique se as pastas estão certas)
import Register from './pages/Register';
import Checkout from './pages/Checkout';

import { QuizStep, QuizState } from './types';
import { QUESTIONS } from './constants';

// --- COMPONENTE QUE CONTÉM A LÓGICA DO QUIZ ---
const QuizFlow: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<QuizStep>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizState['answers']>({});

  const startQuiz = () => {
    setCurrentStep('quiz');
  };

  const handleAnswer = (answer: string) => {
    setAnswers((prev) => ({ ...prev, [QUESTIONS[currentQuestionIndex].id]: answer }));

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex((prev) => prev + 1);
      }, 250); 
    } else {
      setCurrentStep('processing');
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    } else {
      setCurrentStep('welcome');
    }
  };

  const handleProcessingComplete = () => {
    setCurrentStep('results');
  };

  return (
    <div className="w-full min-h-screen bg-slate-100 flex items-center justify-center font-sans text-slate-900">
      <div className="w-full max-w-md h-[100dvh] bg-white shadow-2xl md:rounded-[2rem] overflow-hidden relative">
        {currentStep === 'welcome' && (
          <WelcomeScreen onStart={startQuiz} />
        )}

        {currentStep === 'quiz' && (
          <QuizScreen 
            currentQuestionIndex={currentQuestionIndex}
            onAnswer={handleAnswer}
            onBack={handleBack}
          />
        )}

        {currentStep === 'processing' && (
          <ProcessingScreen onComplete={handleProcessingComplete} />
        )}

        {currentStep === 'results' && (
          <ResultsScreen />
        )}
      </div>
    </div>
  );
};

// --- APP PRINCIPAL COM AS ROTAS ---
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* ROTA RAIZ (O QUIZ EM SI) */}
        <Route path="/" element={<QuizFlow />} />
        
        {/* ROTA DE REGISTRO (CRIAR CONTA) */}
        <Route path="/register" element={<Register />} />
        
        {/* ROTA DE PAGAMENTO */}
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
