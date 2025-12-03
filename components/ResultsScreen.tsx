import React from 'react';
import { AlertTriangle, CheckCircle2, XCircle, ArrowRight, Lock, Clock, TrendingUp, ThumbsUp } from 'lucide-react';

export const ResultsScreen: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-slate-50 overflow-y-auto no-scrollbar">
      
      {/* HERO SECTION - DIAGNOSIS */}
      <div className="bg-[#1A2A44] text-white pt-8 pb-10 px-6 rounded-b-[2.5rem] shadow-2xl relative z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#FFC107] blur-[80px] opacity-20 pointer-events-none"></div>
        
        <div className="flex items-center justify-center gap-2 mb-6 bg-red-500/20 border border-red-500/50 w-fit mx-auto px-4 py-1.5 rounded-full backdrop-blur-md">
          <AlertTriangle size={16} className="text-red-400" />
          <span className="text-xs font-bold uppercase tracking-widest text-red-100">Risco Crítico</span>
        </div>
        
        <h1 className="text-3xl font-extrabold text-center leading-tight mb-2">
          Você está perdendo <span className="text-[#FFC107] underline decoration-red-500 decoration-2 underline-offset-4">Dinheiro</span>
        </h1>
        <p className="text-center text-slate-300 text-sm mb-8 max-w-xs mx-auto">
          Sua gestão atual tem falhas que custam caro no final da obra.
        </p>

        {/* VISUAL LOSS GRAPH */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 mb-2">
           <h3 className="text-center text-xs font-bold uppercase tracking-widest text-slate-300 mb-6">Comparativo Financeiro</h3>
           <div className="flex items-end justify-center gap-8 h-32 pb-2">
              {/* Bar 1 - Bad */}
              <div className="w-20 flex flex-col items-center gap-2 group">
                 <div className="text-red-400 font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity -mt-6 absolute">Prejuízo</div>
                 <div className="w-full bg-red-500/80 h-24 rounded-t-lg relative animate-pulse-slow">
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-white text-red-600 font-black text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap">
                       - R$ 32.000
                    </div>
                 </div>
                 <span className="text-xs font-medium text-slate-300">Sem Controle</span>
              </div>
              
              {/* Bar 2 - Good */}
              <div className="w-20 flex flex-col items-center gap-2">
                 <div className="w-full bg-[#10B981] h-32 rounded-t-lg relative shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-white text-[#10B981] font-black text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap">
                       ZERO PERDA
                    </div>
                 </div>
                 <span className="text-xs font-bold text-[#FFC107]">Com App</span>
              </div>
           </div>
        </div>
        <p className="text-center text-[10px] text-slate-400 opacity-60">*Estimativa baseada em obras similares ao seu perfil.</p>
      </div>

      {/* PROBLEMS SECTION */}
      <div className="px-6 py-8 space-y-6">
        <h2 className="text-[#1A2A44] font-bold text-lg mb-4 flex items-center gap-2">
          <XCircle className="text-red-500" size={20} />
          Por que você está perdendo:
        </h2>

        <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-red-500 flex gap-4 items-start">
           <div className="bg-red-50 p-2 rounded-lg shrink-0">
             <Clock size={20} className="text-red-500" />
           </div>
           <div>
              <h3 className="font-bold text-slate-800 text-sm">Compras Descontroladas</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">Você não registra 100% dos materiais. Pequenas compras viram um rombo gigante.</p>
           </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-red-500 flex gap-4 items-start">
           <div className="bg-red-50 p-2 rounded-lg shrink-0">
             <TrendingUp size={20} className="text-red-500" />
           </div>
           <div>
              <h3 className="font-bold text-slate-800 text-sm">Orçamento Cego</h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">Sem saber o custo por metro quadrado real, você gasta mais do que pode.</p>
           </div>
        </div>
      </div>

      {/* SOLUTION PITCH */}
      <div className="bg-[#F8FAFC] px-6 pb-32 pt-4">
        <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-100 text-center relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
           
           <h2 className="text-2xl font-black text-[#1A2A44] mb-2">Pare de perder dinheiro <span className="text-blue-600">HOJE</span>.</h2>
           <p className="text-sm text-slate-600 mb-6">O App Mãos da Obra é o seu "Engenheiro de Bolso".</p>

           <div className="text-left space-y-3 mb-8">
              <div className="flex items-center gap-3">
                 <CheckCircle2 className="text-green-500 shrink-0" size={18} />
                 <span className="text-sm font-semibold text-slate-700">Controle 100% dos gastos</span>
              </div>
              <div className="flex items-center gap-3">
                 <CheckCircle2 className="text-green-500 shrink-0" size={18} />
                 <span className="text-sm font-semibold text-slate-700">Evite roubos e desvios</span>
              </div>
              <div className="flex items-center gap-3">
                 <CheckCircle2 className="text-green-500 shrink-0" size={18} />
                 <span className="text-sm font-semibold text-slate-700">Relatórios em PDF num clique</span>
              </div>
           </div>

           {/* Testimonial */}
           <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-left mb-4">
              <div className="flex gap-1 mb-2">
                 {[1,2,3,4,5].map(i => <ThumbsUp key={i} size={12} className="text-[#FFC107] fill-[#FFC107]" />)}
              </div>
              <p className="text-xs italic text-slate-600 mb-2">"Eu ia estourar meu orçamento em 20k. O app me mostrou onde cortar antes que fosse tarde."</p>
              <p className="text-xs font-bold text-[#1A2A44]">- Ricardo M., Reformou Apê</p>
           </div>
        </div>
      </div>

      {/* STICKY CTA FOOTER */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-100 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] z-50">
         <div className="max-w-md mx-auto">
            <button className="w-full bg-[#10B981] hover:bg-[#059669] text-white text-lg font-black py-4 rounded-xl shadow-lg shadow-green-500/30 transform transition-all active:scale-[0.98] flex items-center justify-center gap-2 mb-3 animate-pulse-slow">
               TESTAR APP GRÁTIS
               <ArrowRight size={22} className="text-white" />
            </button>
            <div className="flex justify-center items-center gap-2 text-[10px] text-slate-400 uppercase tracking-widest font-bold">
               <Lock size={10} /> Compra Segura • Cancelamento Fácil
            </div>
         </div>
      </div>

    </div>
  );
};