import React, { useEffect, useState } from 'react';
import { PROCESSING_MESSAGES } from '../constants';
import { ScanSearch, CheckCircle2 } from 'lucide-react';

interface ProcessingScreenProps {
  onComplete: () => void;
}

export const ProcessingScreen: React.FC<ProcessingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const duration = 4500; 
    const intervalTime = 50;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(newProgress);

      const msgIdx = Math.min(
        Math.floor((newProgress / 100) * PROCESSING_MESSAGES.length),
        PROCESSING_MESSAGES.length - 1
      );
      setMessageIndex(msgIdx);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 600);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center justify-center h-full px-8 bg-[#1A2A44] text-white relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-5 animate-spin-slow"></div>

      <div className="relative z-10 w-full max-w-sm flex flex-col items-center">
        <div className="w-32 h-32 mb-10 relative flex items-center justify-center">
          <div className="absolute inset-0 border-4 border-slate-600 rounded-full"></div>
          <div 
              className="absolute inset-0 border-4 border-[#FFC107] rounded-full border-t-transparent animate-spin"
              style={{ animationDuration: '1s' }}
          ></div>
          <div className="absolute inset-4 bg-white/5 rounded-full backdrop-blur-sm flex items-center justify-center shadow-inner">
             <ScanSearch size={48} className="text-[#FFC107] animate-pulse" />
          </div>
        </div>

        <h2 className="text-xl font-bold text-center mb-2 min-h-[60px] transition-all duration-300 flex items-center gap-2 justify-center">
          {PROCESSING_MESSAGES[messageIndex]}
        </h2>

        {/* Technical Progress Bar */}
        <div className="w-full bg-slate-800 h-4 rounded-full mt-8 overflow-hidden border border-slate-700 relative">
          <div 
            className="h-full bg-gradient-to-r from-[#FFC107] to-[#ffdb58] transition-all duration-100 ease-linear rounded-full relative"
            style={{ width: `${progress}%` }}
          >
             <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 animate-pulse"></div>
          </div>
        </div>
        
        <div className="flex justify-between w-full mt-2 text-xs font-mono text-slate-400">
           <span>SYSTEM_CHECK: OK</span>
           <span>{Math.round(progress)}%</span>
        </div>

        {/* Check list appearing */}
        <div className="mt-12 w-full space-y-3 opacity-80">
           <div className={`flex items-center gap-3 transition-opacity duration-500 ${progress > 20 ? 'opacity-100' : 'opacity-0'}`}>
              <CheckCircle2 size={16} className="text-green-500" /> <span className="text-sm">Gastos analisados</span>
           </div>
           <div className={`flex items-center gap-3 transition-opacity duration-500 ${progress > 50 ? 'opacity-100' : 'opacity-0'}`}>
              <CheckCircle2 size={16} className="text-green-500" /> <span className="text-sm">Perfil de risco identificado</span>
           </div>
           <div className={`flex items-center gap-3 transition-opacity duration-500 ${progress > 80 ? 'opacity-100' : 'opacity-0'}`}>
              <CheckCircle2 size={16} className="text-green-500" /> <span className="text-sm">Relatório gerado</span>
           </div>
        </div>
      </div>
    </div>
  );
};