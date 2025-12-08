import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Lock, 
  Star, 
  BarChart3, 
  Smartphone, 
  Bot, 
  Clock, 
  Ban, 
  TrendingDown,
  Gift, 
  Calculator, 
  FileSignature, 
  ShieldAlert, 
  Coins, 
  XCircle, 
  Construction, 
  CreditCard, 
  QrCode, 
  MessageCircle, 
  ThumbsUp, 
  HardHat, 
  Check 
} from 'lucide-react';

export const ResultsScreen = () => {
  
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // --- FUNÇÃO CORRIGIDA: APONTA PARA O FLUXO DE CADASTRO ---
  const handleSelectPlan = (planType: string) => {
      // Manda para o registro, iniciando a jornada premium
      window.location.href = `/register?plan=${planType.toLowerCase()}`;
  };

  return (
    <div className="flex flex-col h-full bg-[#F8FAFC] overflow-y-auto no-scrollbar scroll-smooth w-full relative">
      
      {/* ==========================================
          1. O DIAGNÓSTICO (HEADER)
      ========================================== */}
      <div className="bg-[#0F172A] text-white pt-10 pb-28 px-6 rounded-b-[2.5rem] shadow-2xl relative z-10 w-full">
        
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden rounded-b-[2.5rem] pointer-events-none">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-red-600/10 blur-[60px] translate-y-1/2 -translate-x-1/2"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center">
            
            <div className="inline-flex items-center gap-2 mb-6 bg-red-500/10 border border-red-500/40 px-4 py-2 rounded-full backdrop-blur-md animate-fade-in-up shadow-[0_0_20px_rgba(239,68,68,0.2)]">
              <ShieldAlert size={18} className="text-red-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-red-100">Alerta Financeiro Grave</span>
            </div>
            
            <h1 className="text-2xl md:text-3xl font-black leading-tight mb-8 animate-fade-in-up delay-100 tracking-tight">
              Risco de perder até <span className="text-red-500 bg-red-500/10 px-2 rounded">30% do valor</span> da obra.
            </h1>

            {/* IMPACT CARD */}
            <div className="w-full bg-[#1E293B] rounded-2xl p-6 border border-red-500/30 mb-4 animate-fade-in-up delay-300 shadow-xl relative overflow-hidden ring-1 ring-white/5">
                
                <p className="text-[10px] text-red-300 uppercase tracking-widest font-bold mb-4 border-b border-white/5 pb-2 text-left">
                  Projeção de Prejuízo Real
                </p>

                <div className="grid grid-cols-1 gap-4">
                  <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/5">
                    <div className="text-left">
                      <p className="text-xs text-slate-400">Obra de</p>
                      <p className="font-bold text-white">R$ 300 mil</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-red-400 font-bold flex items-center justify-end gap-1">
                        <TrendingDown size={12}/> Perda de
                      </p>
                      <p className="font-black text-red-500 text-lg">R$ 90.000</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 text-left">
                    <p className="text-xs text-slate-300 leading-relaxed">
                      <strong className="text-white">Atenção:</strong> Sem gestão profissional, 10% a 30% do orçamento vira entulho.
                    </p>
                </div>
            </div>
        </div>
      </div>

      {/* ==========================================
          2. A FERIDA
      ========================================== */}
      <div className="px-6 py-12 bg-white relative z-20 -mt-12 rounded-t-[2.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="text-center mb-10 mt-2">
           <h2 className="text-2xl font-black text-[#1A2A44] leading-tight">
             O Dinheiro Acaba <br/> <span className="text-red-600">Antes da Obra.</span>
           </h2>
           <p className="text-sm text-slate-500 mt-2 max-w-xs mx-auto">
             Sem controle, você entra na estatística de quem para a obra no acabamento.
           </p>
        </div>

        <div className="space-y-4 mb-8">
          <PainCard icon={<Coins size={22} className="text-red-600" />} title="Caixa Zerado no Final" text="O dinheiro acaba na fase mais cara (acabamento)." />
          <PainCard icon={<Clock size={22} className="text-orange-600" />} title="Prazo Estourado" text="Sem material na hora certa, o pedreiro fica parado ganhando diária." />
          <PainCard icon={<Ban size={22} className="text-slate-700" />} title="Desperdício Invisível" text="Sem conferência, 15% do cimento e pisos somem." />
        </div>

        <InterimCTA text="CHEGA DE JOGAR DINHEIRO FORA" subtext="Quero proteger meu orçamento agora" onClick={scrollToPricing} color="red" />
      </div>

      {/* ==========================================
          3. AMADORISMO VS PROFISSIONALISMO
      ========================================== */}
      <div className="bg-slate-50 py-12 px-6 border-t border-slate-200">
        <h2 className="text-xl font-black text-[#1A2A44] mb-8 text-center uppercase tracking-wide">
          Evite o Amadorismo
        </h2>
        
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden mb-8">
           <div className="grid grid-cols-2 text-center text-xs font-bold text-white uppercase tracking-widest">
              <div className="bg-slate-400 py-3">Jeito Atual</div>
              <div className="bg-[#10B981] py-3 flex items-center justify-center gap-1">
                 <CheckCircle2 size={12} /> Solução Ideal
              </div>
           </div>
           
           <div className="divide-y divide-slate-100">
              <ComparisonRow bad="Caderninho Sujo" good="App Automático" />
              <ComparisonRow bad="Contas de Cabeça" good="Relatórios PDF" />
              <ComparisonRow bad="Achismo" good="Zé da Obra (IA)" />
              <ComparisonRow bad="Prejuízo Certo" good="Obra Valorizada" />
           </div>
        </div>

        <InterimCTA text="QUERO MINHA OBRA PROFISSIONAL" subtext="Chega de dor de cabeça e improviso" onClick={scrollToPricing} color="green" />
      </div>

      {/* ==========================================
          4. PROVA SOCIAL 
      ========================================= */}
      <div className="pt-14 pb-32 bg-[#1A2A44] w-full border-t border-white/5 relative z-10 overflow-hidden min-h-[400px]">
         <div className="px-6 mb-8 text-center relative z-10">
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Quem usa não larga</h3>
            <div className="flex justify-center gap-1">
               {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-[#FFC107] fill-[#FFC107]" />)}
            </div>
         </div>

         <div className="scroller-container mb-12">
             <div className="scroller-inner">
                 <TestimonialCard name="Carlos F." role="Reformou Apartamento" text="Economizei 12 mil só no piso. O app avisou que eu ia comprar a mais." />
                 <TestimonialCard name="Mariana C." role="Construção do Zero" text="Meu pedreiro tentou me enrolar nas diárias. O app me mostrou o certo." />
                 <TestimonialCard name="Roberto A." role="Pequena Reforma" text="O Zé da Obra calculou o concreto certinho. Sobrou dinheiro pro ar." />
                 <TestimonialCard name="Paulo S." role="Engenheiro Civil" text="Sou engenheiro e indico pra todos. Acaba com a dor de cabeça." />
             </div>
         </div>

         <div className="px-6 relative z-20">
            <button 
                onClick={scrollToPricing}
                className="w-full bg-white text-[#1A2A44] font-black py-4 rounded-xl shadow-lg transform transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
                QUERO TER ESSES RESULTADOS
                <ArrowRight size={18} />
            </button>
         </div>
      </div>

      {/* ==========================================
          5. A OFERTA IRRESISTÍVEL (PRICING)
      ========================================== */}
      <div className="py-12 px-6 bg-white pb-40" id="pricing">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-[#1A2A44] mb-2 tracking-tight">Faça sua Escolha</h2>
          <p className="text-slate-600 text-sm">Assuma o controle da sua obra hoje.</p>
        </div>

        <div className="space-y-6 max-w-sm mx-auto">
          
          {/* MENSAL */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 hover:border-[#FFC107] transition-all duration-300 group">
            <div className="flex justify-between items-center mb-2">
               <h3 className="font-bold text-slate-600">Mensal</h3>
               <span className="text-xs bg-slate-200 px-2 py-1 rounded text-slate-500">Básico</span>
            </div>
            <div className="flex items-baseline gap-1 mb-4">
               <span className="text-sm">R$</span>
               <span className="text-3xl font-bold text-slate-700">29,90</span>
               <span className="text-sm text-slate-400">/mês</span>
            </div>
            <button onClick={() => handleSelectPlan('mensal')} className="w-full block text-center py-3 rounded-xl border border-slate-300 text-slate-600 font-bold hover:bg-slate-100 transition-colors text-sm">
              Escolher Mensal
            </button>
          </div>

          {/* SEMESTRAL */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 relative overflow-hidden hover:border-[#FFC107] transition-all duration-300 group">
            <div className="absolute top-0 right-0 bg-blue-100 text-blue-800 text-[10px] font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
            <div className="flex justify-between items-center mb-2">
               <h3 className="font-bold text-[#1A2A44]">Semestral</h3>
            </div>
            <div className="flex items-baseline gap-1 mb-1">
               <span className="text-sm">R$</span>
               <span className="text-3xl font-bold text-[#1A2A44]">97,00</span>
               <span className="text-sm text-slate-400">/6 meses</span>
            </div>
            <p className="text-xs text-green-600 mb-4 font-bold">Equivale a R$ 16,16/mês</p>
            <button onClick={() => handleSelectPlan('semestral')} className="w-full block text-center py-3 rounded-xl border-2 border-[#1A2A44] text-[#1A2A44] font-bold hover:bg-blue-50 transition-colors text-sm">
              Escolher Semestral
            </button>
          </div>

          {/* VITALÍCIO */}
          <div className="relative transform scale-105 z-20 mt-6">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FFC107] to-orange-500 rounded-2xl blur opacity-75 animate-pulse pointer-events-none"></div>
            <div className="bg-[#1A2A44] rounded-xl p-1 relative shadow-2xl">
                <div className="bg-[#0F172A] rounded-lg p-6 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-[#FFC107] text-[#1A2A44] text-[10px] font-black px-3 py-1 rounded-bl-lg uppercase tracking-wider">MELHOR CUSTO-BENEFÍCIO</div>
                    <h3 className="font-bold text-xl text-[#FFC107] mb-1 flex items-center gap-2"><Lock size={18} /> Acesso Vitalício</h3>
                    <p className="text-[11px] text-slate-400 mb-6">Pagamento Único • Nunca mais pague nada</p>
                    <div className="flex items-baseline gap-2 mb-6">
                        <span className="text-sm text-slate-500 line-through">R$ 997</span>
                        <div className="flex items-baseline">
                            <span className="text-lg font-bold text-[#FFC107]">R$</span>
                            <span className="text-5xl font-black text-white tracking-tighter">247</span>
                        </div>
                    </div>
                    <button onClick={() => handleSelectPlan('vitalicio')} className="w-full block text-center py-4 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white font-black text-lg shadow-[0_4px_14px_0_rgba(16,185,129,0.39)] transform transition-transform active:scale-[0.98] flex items-center justify-center gap-2 group relative z-30">
                        QUERO O VITALÍCIO <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
          </div>

        </div>
      </div>

      {/* STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-lg border-t border-slate-200 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-50">
         <div className="max-w-md mx-auto">
            <button onClick={scrollToPricing} className="w-full bg-[#10B981] hover:bg-[#059669] text-white text-lg font-black py-4 rounded-xl shadow-lg shadow-green-500/30 transform transition-all active:scale-[0.98] flex items-center justify-center gap-2 animate-pulse-slow">
               ECONOMIZAR AGORA <ArrowRight size={22} className="text-white" />
            </button>
         </div>
      </div>

    </div>
  );
};

// Componentes Auxiliares (Definidos no final para evitar conflitos)
const PainCard = ({ icon, title, text }: any) => (
  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
    <div className="bg-white p-3 rounded-xl shadow-sm shrink-0">{icon}</div>
    <div><h3 className="font-bold text-[#1A2A44] leading-tight mb-1 text-sm uppercase tracking-wide">{title}</h3><p className="text-xs text-slate-600 leading-relaxed font-medium">{text}</p></div>
  </div>
);

const ComparisonRow = ({ bad, good }: any) => (
    <div className="grid grid-cols-2 text-xs">
        <div className="py-4 px-2 text-center text-slate-500 border-r border-slate-100 flex items-center justify-center gap-1">
            <XCircle size={14} className="text-red-400" /> {bad}
        </div>
        <div className="py-4 px-2 text-center font-bold text-[#1A2A44] bg-green-50/50 flex items-center justify-center gap-1">
            <CheckCircle2 size={14} className="text-green-500" /> {good}
        </div>
    </div>
);

const InterimCTA = ({ text, subtext, onClick, color = "green" }: any) => {
    const bgColors: any = { red: "bg-red-600 hover:bg-red-700 shadow-red-500/30", green: "bg-[#10B981] hover:bg-[#059669] shadow-green-500/30", blue: "bg-blue-600 hover:bg-blue-700 shadow-blue-500/30" };
    return (
        <button onClick={onClick} className={`w-full ${bgColors[color]} text-white py-4 rounded-xl shadow-lg transform transition-all active:scale-[0.98] group mt-6 relative overflow-hidden`}>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex flex-col items-center justify-center relative z-10">
                <span className="text-lg font-black flex items-center gap-2 uppercase tracking-tight">{text} <ArrowRight size={20} /></span>
                <span className="text-xs font-medium text-white/90 opacity-90">{subtext}</span>
            </div>
        </button>
    )
}

const TestimonialCard = ({ name, role, text }: any) => (
   <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/10 min-w-[280px] w-[280px] flex-shrink-0">
      <div className="flex gap-1 mb-3">{[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-[#FFC107] fill-[#FFC107]" />)}</div>
      <p className="text-xs text-slate-200 italic mb-4 leading-relaxed line-clamp-3">"{text}"</p>
      <div className="border-t border-white/10 pt-3"><p className="text-[11px] font-bold text-white uppercase">{name}</p><p className="text-[10px] text-slate-400">{role}</p></div>
   </div>
);
