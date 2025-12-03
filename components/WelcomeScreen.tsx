import React from 'react';
import { HardHat, TrendingDown, ArrowRight, ShieldCheck, Users } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col h-full bg-[#1A2A44] relative overflow-hidden text-white">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80")',
          filter: 'brightness(0.4)'
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-6 pb-8 pt-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#FFC107] text-[#1A2A44] px-3 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider w-fit mb-6 shadow-lg">
          <ShieldCheck size={14} />
          <span>Diagnóstico Gratuito</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-white drop-shadow-lg">
          Você está <span className="text-[#FFC107]">jogando dinheiro fora</span> na sua obra?
        </h1>

        <p className="text-lg text-slate-200 mb-8 font-medium leading-relaxed drop-shadow-md">
          78% das obras estouram o orçamento por erros simples de gestão. Descubra se você está em risco em 45 segundos.
        </p>

        {/* Social Proof */}
        <div className="flex items-center gap-4 mb-8 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
          <div className="flex -space-x-3">
             <img className="w-8 h-8 rounded-full border-2 border-[#1A2A44]" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=60" alt="User" />
             <img className="w-8 h-8 rounded-full border-2 border-[#1A2A44]" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&q=60" alt="User" />
             <img className="w-8 h-8 rounded-full border-2 border-[#1A2A44]" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=100&q=60" alt="User" />
          </div>
          <div className="text-xs text-slate-200">
            <span className="font-bold text-white block text-sm">+12.400 obras</span>
            já foram analisadas
          </div>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-[#FFC107] hover:bg-[#ffcf33] text-[#1A2A44] text-xl font-black py-5 rounded-2xl shadow-[0_0_20px_rgba(255,193,7,0.4)] transform transition-all active:scale-[0.98] flex items-center justify-center gap-3 animate-pulse-slow"
        >
          FAZER ANÁLISE AGORA <ArrowRight strokeWidth={3} />
        </button>
        
        <p className="text-center text-xs text-slate-400 mt-4 font-medium uppercase tracking-widest">
          Não requer cadastro inicial
        </p>
      </div>
    </div>
  );
};