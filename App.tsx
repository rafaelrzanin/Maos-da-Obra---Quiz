import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importe suas telas
import { WelcomeScreen } from './components/WelcomeScreen';
import { QuizScreen } from './components/QuizScreen';
import { ProcessingScreen } from './components/ProcessingScreen';
import { ResultsScreen } from './components/ResultsScreen';
import Checkout from './pages/Checkout'; // Certifique-se que o Checkout.tsx está nesta pasta

import { QuizStep, QuizState } from './types';
import { QUESTIONS } from './constants';

// 1. Isolamos a lógica do Quiz num componente separado
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

// 2. O App agora gerencia as Rotas (Isso resolve o erro 404)
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Se o link for a raiz, mostra o Quiz */}
        <Route path="/" element={<QuizFlow />} />
        
        {/* Se o link for /checkout, mostra o Checkout */}
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
