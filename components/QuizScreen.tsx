import React from 'react';
import { QUESTIONS } from '../constants';
import { ChevronLeft, Info } from 'lucide-react';

interface QuizScreenProps {
  currentQuestionIndex: number;
  onAnswer: (answer: string) => void;
  onBack: () => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({ currentQuestionIndex, onAnswer, onBack }) => {
  const question = QUESTIONS[currentQuestionIndex];
  
  // Safety guard to prevent white screen if index is out of bounds
  if (!question) {
      return (
        <div className="flex items-center justify-center h-full bg-slate-50 text-slate-500">
          Carregando pergunta...
        </div>
      );
  }

  return (
    <div className="flex flex-col h-full bg-slate-50 relative">
      
      {/* Top Image Section with Gradient Overlay */}
      <div className="relative h-[30%] min-h-[220px] w-full bg-[#1A2A44] transition-all duration-500">
         <div 
           key={question.id} // Forces re-render for fade effect
           className="absolute inset-0 bg-cover bg-center animate-fade-in-up opacity-0"
           style={{ 
             backgroundImage: `url(${question.image})`,
             animationFillMode: 'forwards',
             animationDuration: '0.7s'
           }}
         >
           {/* Heavy gradient for text readability and premium feel */}
           <div className="absolute inset-0 bg-gradient-to-b from-[#1A2A44]/80 via-[#1A2A44]/50 to-slate-50"></div>
         </div>
         
         {/* Navigation & Progress */}
         <div className="absolute top-0 left-0 right-0 p-6 z-20">
           <div className="flex items-center justify-between mb-8">
             {currentQuestionIndex > 0 ? (
               <button 
                 onClick={onBack} 
                 className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all active:scale-95 border border-white/10"
               >
                 <ChevronLeft size={24} />
               </button>
             ) : (
               <div className="w-10"></div>
             )}
             
             <div className="flex flex-col items-center">
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-1">
                    Análise em andamento
                </span>
                <div className="flex gap-1">
                    {QUESTIONS.map((_, idx) => (
                        <div 
                            key={idx}
                            className={`h-1.5 rounded-full transition-all duration-300 ${idx <= currentQuestionIndex ? 'w-4 bg-[#FFC107]' : 'w-2 bg-white/20'}`}
                        ></div>
                    ))}
                </div>
             </div>

             <div className="w-10"></div>
           </div>
         </div>
      </div>

      {/* Bottom Content Card */}
      <div className="flex-1 -mt-12 rounded-t-[2.5rem] bg-slate-50 relative z-10 flex flex-col px-6 pt-10 pb-6 overflow-y-auto no-scrollbar shadow-[0_-10px_40px_rgba(0,0,0,0.15)]">
        
        <div key={`text-${question.id}`} className="animate-fade-in-up">
            <h2 className="text-2xl font-extrabold text-[#1A2A44] mb-4 leading-snug tracking-tight">
                {question.question}
            </h2>

            {/* Context/Insight Block */}
            {question.context && (
                <div className="bg-white border-l-4 border-[#FFC107] p-4 rounded-r-xl shadow-sm mb-6 flex gap-3">
                   <div className="shrink-0 mt-0.5">
                      <Info size={16} className="text-[#FFC107] fill-[#FFC107]/20" />
                   </div>
                   <p className="text-sm text-slate-600 font-medium leading-relaxed">
                      {question.context}
                   </p>
                </div>
            )}

            <div className="flex flex-col gap-3 pb-8">
                {question.options.map((option, idx) => (
                    <button
                    key={idx}
                    onClick={() => onAnswer(option.value)}
                    className="group relative w-full p-4 text-left bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-[#FFC107] hover:shadow-[0_8px_30px_rgba(255,193,7,0.15)] transition-all duration-200 active:scale-[0.98] flex items-center justify-between"
                    style={{ animationDelay: `${idx * 100}ms` }}
                    >
                    <span className="text-base font-semibold text-slate-700 group-hover:text-[#1A2A44] transition-colors pr-2">
                        {option.label}
                    </span>
                    
                    {/* Custom Radio Button UI */}
                    <div className="w-5 h-5 shrink-0 rounded-full border-2 border-slate-200 group-hover:border-[#FFC107] flex items-center justify-center transition-colors bg-slate-50 group-hover:bg-white">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FFC107] transform scale-0 group-hover:scale-100 transition-transform duration-200"></div>
                    </div>
                    </button>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};