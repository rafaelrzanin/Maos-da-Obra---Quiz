import React from 'react';
import { QUESTIONS } from '../constants';
import { ChevronLeft } from 'lucide-react';

interface QuizScreenProps {
  currentQuestionIndex: number;
  onAnswer: (answer: string) => void;
  onBack: () => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({ currentQuestionIndex, onAnswer, onBack }) => {
  const question = QUESTIONS[currentQuestionIndex];
  // Calculate progress for the bar
  const progress = ((currentQuestionIndex + 1) / QUESTIONS.length) * 100;

  return (
    <div className="flex flex-col h-full bg-slate-50 relative">
      
      {/* Top Image Section */}
      <div className="relative h-1/3 w-full bg-[#1A2A44]">
         <div 
           className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out"
           style={{ backgroundImage: `url(${question.image})` }}
         >
           <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-slate-50"></div>
         </div>
         
         {/* Progress Bar & Header */}
         <div className="absolute top-0 left-0 right-0 p-6 z-20">
           <div className="flex items-center justify-between mb-6">
             {currentQuestionIndex > 0 ? (
               <button onClick={onBack} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                 <ChevronLeft size={24} />
               </button>
             ) : (
               <div className="w-10"></div>
             )}
             <span className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white tracking-widest border border-white/10">
               {currentQuestionIndex + 1} / {QUESTIONS.length}
             </span>
             <div className="w-10"></div>
           </div>

           {/* Progress Bar */}
           <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
             <div 
               className="h-full bg-[#FFC107] shadow-[0_0_10px_#FFC107] transition-all duration-500 ease-out rounded-full"
               style={{ width: `${progress}%` }}
             ></div>
           </div>
         </div>
      </div>

      {/* Bottom Content Section */}
      <div className="flex-1 -mt-6 rounded-t-[2rem] bg-slate-50 relative z-10 flex flex-col px-6 pt-8 pb-6 overflow-y-auto no-scrollbar shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        
        <h2 className="text-2xl font-bold text-[#1A2A44] mb-8 leading-tight">
          {question.question}
        </h2>

        <div className="flex flex-col gap-3">
          {question.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => onAnswer(option.value)}
              className="w-full p-4 text-left bg-white border-2 border-slate-100 rounded-xl shadow-sm hover:border-[#FFC107] hover:shadow-md transition-all duration-200 active:scale-[0.98] flex items-center group"
            >
              <div className="w-6 h-6 rounded-full border-2 border-slate-300 group-hover:border-[#FFC107] mr-4 flex items-center justify-center transition-colors">
                 <div className="w-3 h-3 rounded-full bg-[#FFC107] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <span className="text-lg font-medium text-slate-700 group-hover:text-[#1A2A44]">{option.label}</span>
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};