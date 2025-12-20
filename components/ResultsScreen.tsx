import React from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Lock, 
  Smartphone, 
  Bot, 
  Ban, 
  Gift,
  XCircle,
  CreditCard,
  HardHat,
  Check,
  AlertOctagon,
  SearchX,
  TrendingDown,
  BarChart3,
  Clock
} from 'lucide-react';

export const ResultsScreen: React.FC = () => {

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#F8FAFC] overflow-y-auto no-scrollbar scroll-smooth w-full relative">
      
      {/* ==========================================
          1. HERO — O DIAGNÓSTICO (RISCO FINANCEIRO)
      ========================================== */}
      <div className="bg-[#DC2626] text-white pt-10 pb-28 px-6 rounded-b-[2.5rem] shadow-2xl relative z-10 w-full overflow-hidden shrink-0">
        {/* Ambient Effects */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-black/20 rounded-full blur-[60px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-[40px] pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center max-w-md mx-auto">
            
            <div className="inline-flex items-center gap-2 bg-black/30 border border-white/20 px-4 py-1.5 rounded-full backdrop-blur-md mb-6 animate-pulse-slow shadow-lg">
              <AlertOctagon size={18} className="text-white" />
              <span className="text-xs font-black uppercase tracking-widest text-white">Risco Crítico Detectado</span>
            </div>

            <h1 className="text-3xl font-black leading-tight mb-4 tracking-tight text-white drop-shadow-md">
              Você está correndo risco de perder <span className="bg-white text-[#DC2626] px-2 whitespace-nowrap">30% do valor</span> da sua obra.
            </h1>

            <p className="text-red-100 text-sm leading-relaxed font-medium mb-2 drop-shadow-sm max-w-xs mx-auto">
              O diagnóstico apontou falhas graves de gestão que levam ao desperdício invisível.
            </p>
        </div>
      </div>

      {/* ==========================================
          2. O GRÁFICO DO PREJUÍZO (A REALIDADE)
      ========================================== */}
      <div className="px-6 relative z-20 -mt-20 max-w-md mx-auto w-full shrink-0">
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="bg-[#1E293B] p-4 border-b border-slate-700 flex justify-between items-center">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Simulação Real</span>
                <BarChart3 size={16} className="text-red-500" />
            </div>
            
            <div className="p-6">
                <div className="flex justify-between items-end mb-2">
                    <p className="text-xs text-slate-500 font-bold uppercase">Orçamento da Obra</p>
                    <p className="text-lg font-black text-[#1E293B]">R$ 300.000</p>
                </div>
                
                {/* Visual Graph Bar */}
                <div className="w-full h-8 bg-slate-100 rounded-full overflow-hidden flex mb-6 relative border border-slate-200">
                    <div className="h-full bg-slate-300 w-[70%] border-r border-white"></div>
                    <div className="h-full bg-[#DC2626] w-[30%] relative pattern-diagonal-lines">
                         <div className="absolute inset-0 flex items-center justify-center">
                             <span className="text-[10px] font-black text-white drop-shadow-md tracking-tighter">-30%</span>
                         </div>
                    </div>
                </div>

                <div className="bg-red-50 border border-red-100 rounded-xl p-4 flex items-center justify-between">
                    <div>
                        <p className="text-xs text-red-600 font-bold uppercase mb-1 flex items-center gap-1">
                           <TrendingDown size={14} /> Dinheiro no Lixo
                        </p>
                        <p className="text-[10px] text-red-400">Material estragado, roubo, retrabalho</p>
                    </div>
                    <div className="text-right">
                        <p className="text-2xl font-black text-[#DC2626]">-90k</p>
                    </div>
                </div>

                <p className="text-[10px] text-slate-400 text-center mt-4 italic">
                    *Média de perda em obras sem gestão profissional (Sebrae/CAU).
                </p>
            </div>
        </div>
      </div>

      {/* ==========================================
          3. O QUE DEU ERRADO (DIAGNÓSTICO)
      ========================================== */}
      <div className="pt-12 pb-8 px-6 max-w-md mx-auto w-full shrink-0">
         <div className="bg-white rounded-2xl shadow-sm border-l-4 border-red-500 p-6">
            <h3 className="font-bold text-[#1A2A44] mb-4 text-sm uppercase tracking-wide flex items-center gap-2 border-b border-slate-100 pb-3">
                <SearchX size={20} className="text-red-500" />
                Pontos de Falha Identificados:
            </h3>

            <div className="space-y-4">
                <DiagnosisItem text="Falta de registro de pequenos gastos" />
                <DiagnosisItem text="Compras feitas sem cálculo exato" />
                <DiagnosisItem text="Cronograma frouxo (data indefinida)" />
                <DiagnosisItem text="Descontrole de estoque na obra" />
            </div>
        </div>
      </div>

      {/* ==========================================
          4. PRESSÃO (CUSTA CARO)
      ========================================== */}
      <div className="py-8 px-6 max-w-md mx-auto w-full shrink-0 text-center">
         <h2 className="text-2xl font-black text-[#1A2A44] leading-tight mb-4">
             O dinheiro acaba <br/> <span className="bg-red-100 text-[#DC2626] px-1 rounded">antes da obra</span>.
         </h2>
         
         <p className="text-slate-600 text-sm leading-relaxed mb-8">
             É matemático. Se você perde 30% do orçamento no caminho, a casa fica sem piso, sem pintura ou você entra em dívida no final.
         </p>

         <div className="grid gap-3 text-left">
             <PressureCard icon={<Ban size={20} className="text-slate-500"/>} text="O pedreiro para e vai embora." />
             <PressureCard icon={<AlertTriangle size={20} className="text-orange-500"/>} text="Você compra material 2x (desperdício)." />
             <PressureCard icon={<CreditCard size={20} className="text-[#DC2626]"/>} text="O sonho vira um pesadelo financeiro." />
         </div>
      </div>

      {/* ==========================================
          5. QUEBRA DE OBJEÇÃO DE TIMING
      ========================================== */}
      <div className="bg-[#1A2A44] py-14 px-6 text-white relative overflow-hidden shrink-0 mt-8">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-[40px] pointer-events-none"></div>

          <div className="relative z-10 max-w-md mx-auto text-center">
              <h2 className="text-2xl font-black mb-4 leading-tight">
                  Não importa em que fase sua obra está.
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                  Mesmo que já esteja no meio do caos ou no acabamento, <strong>estancar a sangria agora</strong> é a única forma de sobrar dinheiro.
              </p>
              
              <div className="bg-[#FFC107] text-[#1A2A44] p-4 rounded-xl font-bold text-sm shadow-[0_10px_30px_rgba(255,193,7,0.3)] transform rotate-1 border border-yellow-400">
                  "Organizar agora custa 10x menos do que remediar depois."
              </div>
          </div>
      </div>

      {/* ==========================================
          6. A SOLUÇÃO AUTOMÁTICA (CARROSSEL)
      ========================================== */}
      <div className="py-16 bg-slate-50 overflow-hidden shrink-0 relative border-t border-slate-200">
          
          <div className="max-w-md mx-auto text-center mb-10 px-6">
              <div className="w-16 h-16 bg-[#1A2A44] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl text-[#FFC107]">
                  <Smartphone size={32} strokeWidth={2.5} />
              </div>
              <h2 className="text-2xl font-black text-[#1A2A44] leading-none mb-2">
                  Mãos da Obra
              </h2>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                  O Gerente de Bolso Automático
              </p>
          </div>

          {/* INFINITE SCROLL CAROUSEL */}
          <div className="scroller-container relative w-full">
             <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
             <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>
             
             <div className="scroller-inner flex gap-6 py-4">
                 {/* Set 1 */}
                 <MockupCard title="Cronograma" color="green" />
                 <MockupCard title="Financeiro" color="red" />
                 <MockupCard title="Lista de Compras" color="blue" />
                 <MockupCard title="Zé da Obra (IA)" color="yellow" />
                 {/* Set 2 (Duplicate for loop) */}
                 <MockupCard title="Cronograma" color="green" />
                 <MockupCard title="Financeiro" color="red" />
                 <MockupCard title="Lista de Compras" color="blue" />
                 <MockupCard title="Zé da Obra (IA)" color="yellow" />
             </div>
          </div>
          
          <div className="px-6 max-w-md mx-auto mt-8">
               <div className="flex flex-col gap-3">
                  <SolutionCheck text="Você sabe o que comprar e quando" />
                  <SolutionCheck text="O Zé (IA) calcula quantidades pra você" />
                  <SolutionCheck text="Você vê o dinheiro antes dele sumir" />
               </div>
          </div>
      </div>

      {/* ==========================================
          7. ZÉ DA OBRA (A SEGURANÇA)
      ========================================== */}
      <div className="bg-white py-14 px-6 border-t border-slate-200 shrink-0">
          <div className="max-w-md mx-auto">
              <h2 className="text-2xl font-black text-[#1A2A44] mb-4 text-center">
                  Dúvida na hora de comprar?
              </h2>
              <p className="text-sm text-slate-600 text-center mb-8 leading-relaxed max-w-xs mx-auto">
                  O <strong>Zé da Obra</strong> responde na hora. Ele calcula tijolo, cimento e piso para você não ser enganado por vendedor ou pedreiro.
              </p>

              {/* Chat Mockup */}
              <div className="bg-slate-50 rounded-2xl shadow-inner border border-slate-200 p-5 mb-6 relative overflow-hidden">
                  <div className="flex items-start gap-3 mb-5">
                      <div className="w-8 h-8 rounded-full bg-[#1A2A44] flex items-center justify-center shrink-0 border border-slate-200 shadow-sm">
                          <Bot size={16} className="text-[#FFC107]" />
                      </div>
                      <div className="bg-white p-3 rounded-r-xl rounded-bl-xl text-xs text-slate-700 shadow-sm border border-slate-100">
                          <p>Zé, vou pintar um quarto de 4x4m. Quanta tinta eu compro?</p>
                      </div>
                  </div>
                  <div className="flex items-start gap-3 flex-row-reverse">
                      <div className="w-8 h-8 rounded-full bg-[#FFC107] flex items-center justify-center shrink-0 border border-orange-300 shadow-sm">
                          <HardHat size={16} className="text-[#1A2A44]" />
                      </div>
                      <div className="bg-[#1A2A44] text-white p-3 rounded-l-xl rounded-br-xl text-xs shadow-md">
                          <p>Para um quarto 4x4m (pé direito 2.8m), descontando porta/janela, você tem ~40m². Compre 1 galão de 3.6L. Rende bem! 🎨</p>
                      </div>
                  </div>
              </div>

              <div className="text-center">
                  <p className="text-xs font-bold text-[#10B981] bg-[#10B981]/10 py-2 px-4 rounded-full inline-block">
                     Economia média de R$ 2.000 só evitando sobras.
                  </p>
              </div>
          </div>
      </div>

      {/* ==========================================
          8. PREÇO COMO ALÍVIO (MATEMÁTICA)
      ========================================== */}
      <div className="py-16 px-6 bg-slate-50 pb-32 shrink-0 z-10 relative border-t border-slate-200" id="pricing">
        <div className="text-center mb-10 max-w-md mx-auto">
          <h2 className="text-2xl font-black text-[#1A2A44] mb-3 leading-tight">
             Resolver isso custa menos do que um <span className="text-[#F59E0B] bg-[#FFFBEB] px-1 rounded border border-[#F59E0B]/20">saco de cimento</span>.
          </h2>
          <p className="text-slate-500 text-sm max-w-xs mx-auto">
             Um único erro na obra custa 10x mais do que o acesso vitalício ao app.
          </p>
        </div>

        <div className="space-y-6 max-w-sm mx-auto">
          
          {/* 1. PLANO MENSAL (7 DIAS GRATIS) */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#FFC107] transition-all duration-300 group shadow-sm">
            <div className="flex justify-between items-center mb-4">
               <h3 className="font-bold text-slate-700 text-lg">Mensal</h3>
               <span className="text-[10px] font-bold bg-[#10B981] text-white px-3 py-1.5 rounded-full uppercase tracking-wide flex items-center gap-1">
                  <Clock size={12} /> 7 Dias Grátis
               </span>
            </div>
            <div className="mb-6">
               <p className="text-xs text-slate-400 font-bold uppercase mb-1">Hoje você paga:</p>
               <div className="flex items-baseline gap-1">
                 <span className="text-sm font-medium text-slate-400">R$</span>
                 <span className="text-4xl font-black text-[#10B981]">0,00</span>
               </div>
               <p className="text-xs text-slate-500 mt-2 font-medium">Após 7 dias: R$ 29,90/mês</p>
            </div>
            
            {/* Trial Logic Warning */}
            <div className="bg-blue-50 border border-blue-100 p-3 rounded-lg mb-4 text-left">
                <p className="text-[11px] text-blue-800 leading-tight">
                    <strong>Como funciona:</strong> Use o app completo e o Zé da Obra (IA) por 7 dias. Se não cancelar, a assinatura mensal inicia automaticamente.
                </p>
            </div>

            <a 
              href="https://www.maosdaobra.online/register?plan=MENSAL"
              className="w-full block text-center py-3.5 rounded-xl border border-slate-300 text-slate-600 font-bold hover:bg-slate-50 transition-colors text-sm mb-4"
            >
              Começar Teste Grátis
            </a>

             {/* Features List */}
             <div className="space-y-3 border-t border-slate-100 pt-4">
               <div className="flex items-center gap-3 text-sm text-slate-600">
                  <Check size={16} className="text-slate-400" /> <span>Controle de Gastos</span>
               </div>
               <div className="flex items-center gap-3 text-sm font-bold text-slate-600">
                  <Bot size={16} className="text-blue-500" /> <span className="text-blue-600">Zé da Obra (IA) incluso no teste</span>
               </div>
            </div>
          </div>

          {/* 2. PLANO SEMESTRAL (7 DIAS GRATIS) */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#FFC107] transition-all duration-300 group shadow-md relative overflow-hidden">
             <div className="absolute top-0 right-0 bg-blue-50 text-blue-700 text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                Popular
            </div>
            <div className="flex justify-between items-center mb-4">
               <h3 className="font-bold text-[#1A2A44] text-lg">Semestral</h3>
               <span className="text-[10px] font-bold bg-[#10B981] text-white px-3 py-1.5 rounded-full uppercase tracking-wide flex items-center gap-1">
                  <Clock size={12} /> 7 Dias Grátis
               </span>
            </div>
            <div className="mb-6">
               <p className="text-xs text-slate-400 font-bold uppercase mb-1">Hoje você paga:</p>
               <div className="flex items-baseline gap-1">
                 <span className="text-sm font-medium text-slate-400">R$</span>
                 <span className="text-4xl font-black text-[#10B981]">0,00</span>
               </div>
               <p className="text-xs text-slate-500 mt-2 font-medium">Após 7 dias: R$ 97,00/semestre</p>
            </div>
            
            {/* Trial Logic Warning */}
            <div className="bg-blue-50 border border-blue-100 p-3 rounded-lg mb-4 text-left">
                <p className="text-[11px] text-blue-800 leading-tight">
                    <strong>Como funciona:</strong> Use tudo (incluindo Zé da Obra) por 7 dias. Depois disso, o acesso bloqueia se não confirmar a assinatura.
                </p>
            </div>
            
            <a 
              href="https://maosdaobra.online/register?plan=SEMESTRAL"
              className="w-full block text-center py-3.5 rounded-xl border-2 border-[#1A2A44] text-[#1A2A44] font-bold hover:bg-blue-50 transition-colors text-sm mb-4"
            >
              Começar Teste Grátis
            </a>

             {/* Features List */}
             <div className="space-y-3 border-t border-slate-100 pt-4">
               <div className="flex items-center gap-3 text-sm text-slate-600">
                  <Check size={16} className="text-slate-400" /> <span>Controle de Gastos</span>
               </div>
               <div className="flex items-center gap-3 text-sm font-bold text-slate-600">
                  <Bot size={16} className="text-blue-500" /> <span className="text-blue-600">Zé da Obra (IA) incluso no teste</span>
               </div>
            </div>
          </div>

          {/* 3. PLANO VITALÍCIO (AGRESSIVO - ANCHOR) */}
          <div className="relative transform z-20 mt-8 scale-105">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FFC107] to-orange-500 rounded-3xl blur opacity-40 animate-pulse pointer-events-none"></div>
            
            <div className="bg-[#1A2A44] rounded-2xl p-1 relative shadow-2xl">
                <div className="bg-[#0F172A] rounded-xl p-6 text-white relative overflow-hidden">
                    
                    <div className="absolute top-0 right-0 bg-[#FFC107] text-[#1A2A44] text-[10px] font-black px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
                        OFERTA ESPECIAL
                    </div>

                    <h3 className="font-bold text-2xl text-[#FFC107] mb-2 flex items-center gap-2">
                        <Lock size={20} /> Vitalício
                    </h3>
                    <p className="text-xs text-slate-400 mb-6 font-medium">Pagamento único. Nunca expira.</p>
                    
                    <div className="flex items-baseline gap-3 mb-6">
                        <span className="text-base text-slate-500 line-through decoration-slate-500">R$ 997</span>
                        <div className="flex items-baseline">
                            <span className="text-xl font-bold text-[#FFC107] mr-1">R$</span>
                            <span className="text-5xl font-black text-white tracking-tighter">247</span>
                        </div>
                    </div>
                    
                    <div className="space-y-4 mb-8 border-t border-white/10 pt-6">
                        <div className="flex items-center gap-3 text-sm font-bold text-white">
                            <CheckCircle2 size={18} className="text-[#FFC107]"/> <span>App Liberado Pra Sempre</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm font-bold text-white">
                            <Bot size={18} className="text-[#FFC107]"/> <span className="text-[#FFC107]">Zé da Obra (IA) Incluso</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm font-bold text-white">
                            <Gift size={18} className="text-[#FFC107]"/> <span>Kit Contratos & Checklists</span>
                        </div>
                    </div>

                    <a 
                      href="https://maosdaobra.online/register?plan=VITALICIO"
                      className="w-full block text-center py-4 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white font-black text-lg shadow-[0_4px_14px_0_rgba(16,185,129,0.39)] transform transition-transform active:scale-[0.98] flex items-center justify-center gap-2 group relative z-30"
                    >
                        EVITAR PREJUÍZO AGORA
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
             <p className="text-center text-[11px] text-slate-500 mt-4 flex items-center justify-center gap-1.5 font-medium">
                 <ShieldCheck size={14} className="text-green-600"/> Garantia Incondicional de 30 dias
             </p>
          </div>
        </div>
      </div>

      {/* ==========================================
          10. FECHAMENTO
      ========================================== */}
      <footer className="py-12 bg-white text-center border-t border-slate-100 pb-32 shrink-0">
          <div className="max-w-xs mx-auto px-4">
             <p className="text-[#1A2A44] font-black text-xl mb-3 leading-tight">
                 O diagnóstico mostrou o problema. <br/> Agora a decisão é sua.
             </p>
             <p className="text-slate-500 text-sm font-medium">
                 Continuar no escuro e perder dinheiro... ou controlar sua obra de verdade.
             </p>
          </div>
          <div className="mt-8 opacity-50 text-[10px] text-slate-400 uppercase tracking-widest">
              © 2025 Mãos da Obra
          </div>
      </footer>

      {/* STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-slate-200 shadow-[0_-5px_20px_rgba(0,0,0,0.05)] z-50">
         <div className="max-w-md mx-auto">
            <button 
                onClick={scrollToPricing}
                className="w-full bg-[#10B981] hover:bg-[#059669] text-white text-lg font-black py-4 rounded-xl shadow-lg shadow-green-500/30 transform transition-all active:scale-[0.98] flex items-center justify-center gap-2 animate-pulse-slow"
            >
               QUERO ECONOMIZAR
               <ArrowRight size={22} className="text-white" />
            </button>
         </div>
      </div>

    </div>
  );
};

// --- HELPER COMPONENTS ---

const DiagnosisItem = ({ text }: { text: string }) => (
    <div className="flex items-start gap-3 bg-red-50 p-3.5 rounded-xl border border-red-100/80">
        <AlertTriangle size={18} className="text-[#DC2626] shrink-0 mt-0.5" />
        <span className="text-slate-800 text-sm font-bold leading-tight">{text}</span>
    </div>
);

const PressureCard = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
    <div className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
        {icon}
        <span className="font-bold text-[#1A2A44] text-sm">{text}</span>
    </div>
);

const SolutionCheck = ({ text }: { text: string }) => (
    <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-[#10B981]/10 flex items-center justify-center shrink-0">
            <Check size={14} className="text-[#10B981]" strokeWidth={3} />
        </div>
        <span className="text-slate-700 font-bold text-sm">{text}</span>
    </div>
);

// MOCKUP CARD FOR CAROUSEL
const MockupCard = ({ title, color }: { title: string, color: 'green' | 'red' | 'blue' | 'yellow' }) => {
    
    const colors = {
        green: { border: 'border-green-500', bar: 'bg-green-500', icon: '✓' },
        red: { border: 'border-red-500', bar: 'bg-red-500', icon: '!' },
        blue: { border: 'border-blue-500', bar: 'bg-blue-500', icon: '+' },
        yellow: { border: 'border-yellow-500', bar: 'bg-yellow-500', icon: '?' },
    };

    const c = colors[color];

    return (
        <div className="shrink-0 w-[200px] h-[340px] bg-white rounded-[2rem] border-8 border-slate-800 relative overflow-hidden flex flex-col shadow-xl">
            <div className="h-6 bg-slate-100 border-b border-slate-200 flex justify-center items-center"><div className="w-16 h-2 bg-slate-300 rounded-full"></div></div>
            <div className="p-3 bg-slate-50 flex-1 flex flex-col gap-2">
                <div className="h-4 w-20 bg-slate-200 rounded mb-2"></div>
                <div className={`p-2 bg-white rounded-lg border-l-4 ${c.border} shadow-sm`}>
                    <div className="h-2 w-16 bg-slate-200 rounded mb-1"></div>
                    <div className="h-2 w-8 bg-slate-100 rounded"></div>
                </div>
                <div className="p-2 bg-white rounded-lg border-l-4 border-slate-200 shadow-sm opacity-50">
                    <div className="h-2 w-12 bg-slate-200 rounded mb-1"></div>
                    <div className="h-2 w-10 bg-slate-100 rounded"></div>
                </div>
                 <div className="p-2 bg-white rounded-lg border-l-4 border-slate-200 shadow-sm opacity-30">
                    <div className="h-2 w-14 bg-slate-200 rounded mb-1"></div>
                </div>
                <div className="mt-auto h-24 bg-slate-100 rounded-t-xl border-t border-slate-200"></div>
            </div>
            <div className="absolute bottom-5 left-0 right-0 text-center">
                <span className="text-[10px] text-slate-500 font-bold bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-sm border border-slate-100 uppercase tracking-wide">
                    {title}
                </span>
            </div>
        </div>
    );
}

