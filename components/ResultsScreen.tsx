import React from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Lock, 
  Star, 
  BarChart3, 
  Smartphone, 
  BrainCircuit, 
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
  QrCode
} from 'lucide-react';

export const ResultsScreen: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-[#F8FAFC] overflow-y-auto no-scrollbar scroll-smooth pb-32">
      
      {/* ==========================================
          1. O DIAGNÓSTICO (PREMIUM & IMPACTFUL)
      ========================================== */}
      <div className="bg-[#0F172A] text-white pt-10 pb-16 px-6 rounded-b-[3rem] shadow-2xl relative z-10 overflow-hidden">
        {/* Abstract Premium Background */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-red-600/10 rounded-full blur-[80px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center">
            
            <div className="inline-flex items-center gap-2 mb-6 bg-red-500/10 border border-red-500/40 px-5 py-2 rounded-full backdrop-blur-md animate-fade-in-up shadow-[0_0_20px_rgba(239,68,68,0.3)]">
              <ShieldAlert size={18} className="text-red-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-red-100">Alerta Financeiro Grave</span>
            </div>
            
            <h1 className="text-2xl md:text-3xl font-black leading-tight mb-4 animate-fade-in-up delay-100 tracking-tight">
              Risco de perder até <span className="text-red-500">30% do valor</span> da obra.
            </h1>

            {/* IMPACT GRAPH - VISCERAL & MONETARY */}
            <div className="w-full bg-gradient-to-b from-[#1E293B] to-[#0F172A] rounded-2xl p-6 border border-red-500/30 mt-2 mb-6 animate-fade-in-up delay-300 shadow-[0_0_30px_rgba(239,68,68,0.15)] relative overflow-hidden group">
                <div className="absolute inset-0 bg-red-500/5 group-hover:bg-red-500/10 transition-colors"></div>
                
                <div className="flex flex-col items-center mb-6 relative z-10">
                   <p className="text-[10px] text-red-300 uppercase tracking-widest font-bold mb-1">Prejuízo Real Estimado</p>
                   <div className="text-3xl font-black text-white flex flex-col items-center leading-none gap-1">
                      <span className="text-red-500 text-4xl drop-shadow-md">R$ 30.000</span>
                      <span className="text-sm text-slate-400 font-medium">até</span>
                      <span className="text-red-500 text-4xl drop-shadow-md">R$ 300.000+</span>
                   </div>
                </div>

                <div className="text-xs text-slate-300 text-center leading-relaxed border-t border-white/10 pt-4">
                  <p>
                    Em uma obra de <strong>R$ 300 mil</strong>, 10% de erro custa <strong>R$ 30 mil</strong>.
                    <br/>
                    Em uma obra de <strong>R$ 3 milhões</strong>, o prejuízo passa de <strong>R$ 300 mil</strong>.
                  </p>
                  <p className="mt-3 text-red-400 font-bold flex items-center justify-center gap-1">
                     <AlertTriangle size={12} />
                     Você está caminhando para essa estatística.
                  </p>
                </div>
            </div>

            <p className="text-slate-300 font-medium text-xs animate-fade-in-up delay-300 uppercase tracking-widest opacity-80">
              Seu patrimônio está em jogo
            </p>
        </div>
      </div>

      {/* ==========================================
          2. A FERIDA (O QUE VAI ACONTECER)
      ========================================== */}
      <div className="px-6 py-12 bg-white relative z-20 -mt-8 rounded-t-[2.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <div className="text-center mb-10">
           <h2 className="text-2xl font-black text-[#1A2A44] leading-tight">
             O Dinheiro Acaba <br/> <span className="text-red-600">Antes da Obra.</span>
           </h2>
           <p className="text-sm text-slate-500 mt-2">
             Sem controle profissional, este é o seu futuro próximo:
           </p>
        </div>

        <div className="space-y-6">
          <PainCard 
             icon={<Coins size={24} className="text-red-600" />}
             title="Falta de Verba"
             text="Você chega no acabamento (a parte mais cara) e o caixa está zerado. A obra para por meses."
          />
          <PainCard 
             icon={<Clock size={24} className="text-orange-600" />}
             title="Atraso Indefinido"
             text="Sem material na hora certa, o pedreiro fica parado. Você paga diária para ele 'olhar para o teto'."
          />
          <PainCard 
             icon={<Ban size={24} className="text-slate-700" />}
             title="Materiais 'Sumindo'"
             text="Sem conferência de estoque, 15% do cimento e pisos desaparecem ou são desperdiçados."
          />
        </div>
      </div>

      {/* ==========================================
          3. AMADORISMO VS PROFISSIONALISMO
      ========================================== */}
      <div className="bg-slate-50 py-12 px-6 border-t border-slate-200">
        <h2 className="text-xl font-black text-[#1A2A44] mb-8 text-center uppercase tracking-wide">
          Evite o Amadorismo
        </h2>
        
        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
           <div className="grid grid-cols-2 text-center text-xs font-bold text-white uppercase tracking-widest">
              <div className="bg-slate-400 py-3">Jeito Atual</div>
              <div className="bg-[#10B981] py-3 flex items-center justify-center gap-1">
                 <CheckCircle2 size={12} /> O Solução Ideal
              </div>
           </div>
           
           <div className="divide-y divide-slate-100">
              <ComparisonRow bad="Caderninho Sujo" good="App Automático" />
              <ComparisonRow bad="Contas de Cabeça" good="Relatórios em PDF" />
              <ComparisonRow bad="Achismo" good="Engenheiro IA 24h" />
              <ComparisonRow bad="Prejuízo Certo" good="Lucro e Valorização" />
           </div>
        </div>

        <p className="text-sm text-slate-600 mt-8 text-center max-w-xs mx-auto">
          Dê adeus às planilhas chatas e à bagunça. Nós temos a tecnologia que grandes construtoras usam, simplificada para você.
        </p>
      </div>

      {/* ==========================================
          4. PROVA SOCIAL (CARROSSEL AUTOMÁTICO)
      ========================================== */}
      <div className="py-10 bg-[#1A2A44] overflow-hidden relative">
         <div className="text-center mb-8 px-6">
            <h3 className="text-white font-bold uppercase tracking-widest text-sm">Quem usa não larga</h3>
            <div className="flex justify-center gap-1 mt-2">
               {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-[#FFC107] fill-[#FFC107]" />)}
            </div>
         </div>

         {/* Infinite Marquee Container */}
         <div className="relative w-full">
            <div className="flex gap-4 animate-scroll w-[200%] pl-6">
               {/* Set 1 */}
               <TestimonialCard name="Carlos F." text="Economizei 12 mil só no piso. O app avisou que eu ia comprar a mais." />
               <TestimonialCard name="Mariana C." text="Meu pedreiro tentou me enrolar nas diárias. O app me salvou." />
               <TestimonialCard name="Roberto A." text="A IA calculou o concreto certinho. Sobrou pro ar condicionado." />
               <TestimonialCard name="Paulo S." text="Sou engenheiro e indico pra todos. Acaba com a dor de cabeça." />
               <TestimonialCard name="Fernanda L." text="Achava que planilha resolvia. O app é outro nível." />
               
               {/* Set 2 (Duplicate for infinite loop) */}
               <TestimonialCard name="Carlos F." text="Economizei 12 mil só no piso. O app avisou que eu ia comprar a mais." />
               <TestimonialCard name="Mariana C." text="Meu pedreiro tentou me enrolar nas diárias. O app me salvou." />
               <TestimonialCard name="Roberto A." text="A IA calculou o concreto certinho. Sobrou pro ar condicionado." />
               <TestimonialCard name="Paulo S." text="Sou engenheiro e indico pra todos. Acaba com a dor de cabeça." />
               <TestimonialCard name="Fernanda L." text="Achava que planilha resolvia. O app é outro nível." />
            </div>
         </div>
         
         <style>{`
            @keyframes scroll {
               0% { transform: translateX(0); }
               100% { transform: translateX(-50%); }
            }
            .animate-scroll {
               animation: scroll 25s linear infinite;
            }
         `}</style>
      </div>

      {/* ==========================================
          5. A REVELAÇÃO (MÃOS DA OBRA PRO)
      ========================================== */}
      <div className="bg-white py-14 px-6 relative">
           <div className="flex flex-col items-center mb-8">
             <div className="w-16 h-16 bg-[#1A2A44] rounded-2xl flex items-center justify-center mb-4 shadow-xl">
                <Smartphone className="text-[#FFC107]" size={32} />
             </div>
             <h2 className="text-3xl font-black text-center mb-2 text-[#1A2A44]">MÃOS DA OBRA <span className="text-[#10B981]">PRO</span></h2>
             <p className="text-center text-slate-500 text-sm">O sistema operacional da sua construção.</p>
           </div>

           <div className="grid gap-3">
              <FeatureItemLight 
                icon={<BarChart3 className="text-blue-600"/>} 
                title="Raio-X Financeiro" 
                desc="Saiba para onde vai cada centavo em tempo real." 
              />
              <FeatureItemLight 
                icon={<Construction className="text-orange-600"/>} 
                title="Gestão de Etapas" 
                desc="Cronograma automático: Saiba o que comprar e quando." 
              />
              <FeatureItemLight 
                icon={<ShieldCheck className="text-green-600"/>} 
                title="Blindagem de Caixa" 
                desc="Alertas de estouro de orçamento antes que aconteça." 
              />
           </div>
      </div>

      {/* ==========================================
          6. A IA (ENGENHEIRO DE BOLSO)
      ========================================== */}
      <div className="py-12 px-6 bg-gradient-to-b from-slate-50 to-white border-t border-slate-100">
         <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-3">
               <BrainCircuit size={14} /> Tecnologia Exclusiva
            </div>
            <h2 className="text-2xl font-black text-[#1A2A44]">Seu Engenheiro 24h</h2>
            <p className="text-sm text-slate-600 mt-2">Tire dúvidas técnicas a qualquer momento com nossa IA.</p>
         </div>

         {/* Chat Interface Mockup */}
         <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden max-w-sm mx-auto">
            <div className="bg-slate-100 p-3 flex items-center gap-3 border-b border-slate-200">
               <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  <BrainCircuit size={16} />
               </div>
               <div>
                  <p className="text-xs font-bold text-[#1A2A44]">Assistente IA</p>
                  <p className="text-[10px] text-green-600 flex items-center gap-1">Online</p>
               </div>
            </div>
            
            <div className="p-4 bg-[url('https://www.transparenttextures.com/patterns/subtle-dots.png')] space-y-4">
               <div className="flex justify-end">
                  <div className="bg-blue-600 text-white text-xs p-3 rounded-l-xl rounded-tr-xl max-w-[85%] shadow-sm">
                     Quantos sacos de cimento para um contrapiso de 30m²?
                  </div>
               </div>
               
               <div className="flex justify-start">
                  <div className="bg-white border border-slate-200 text-slate-700 text-xs p-3 rounded-r-xl rounded-tl-xl max-w-[90%] shadow-sm">
                     <p className="font-bold mb-1 text-[#1A2A44]">Resposta:</p>
                     Para 30m² com 5cm de espessura, você precisará de aprox. <strong className="text-blue-600">9 sacos de 50kg</strong>.
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* ==========================================
          7. BÔNUS DE ALTO VALOR
      ========================================== */}
      <div className="py-12 px-6 bg-[#1A2A44] text-white">
         <div className="text-center mb-10">
            <Gift size={40} className="text-[#FFC107] mx-auto mb-4 animate-bounce" />
            <h2 className="text-2xl font-black">Bônus Exclusivos</h2>
            <p className="text-slate-400 text-sm mt-2">Ferramentas essenciais vendidas separadamente.</p>
         </div>

         <div className="space-y-6">
            <PremiumBonusCard 
               icon={<Calculator />}
               title="Calculadora de Materiais"
               desc="Cálculo exato de tijolos, pisos e tintas."
               price="197,00"
            />
            <PremiumBonusCard 
               icon={<FileSignature />}
               title="Pack de Contratos & Recibos"
               desc="Modelos jurídicos blindados para fechar com pedreiros."
               price="297,00"
            />
            <PremiumBonusCard 
               icon={<ShieldCheck />}
               title="Checklist Anti-Golpe"
               desc="O passo a passo para conferir a entrega da obra."
               price="147,00"
            />
         </div>
         
         <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-xl font-bold text-[#10B981] mt-2">TOTAL GRÁTIS HOJE</p>
            <p className="text-xs text-slate-400">Na compra do plano vitalício</p>
         </div>
      </div>

      {/* ==========================================
          8. A OFERTA IRRESISTÍVEL (PRICING)
      ========================================== */}
      <div className="py-12 px-6 bg-white pb-32" id="pricing">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-[#1A2A44] mb-2 tracking-tight">Faça sua Escolha</h2>
          <p className="text-slate-600 text-sm">Continuar perdendo dinheiro ou assumir o controle?</p>
        </div>

        <div className="space-y-6 max-w-sm mx-auto">
          
          {/* 1. PLANO MENSAL */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
            <div className="flex justify-between items-center mb-2">
               <h3 className="font-bold text-slate-600">Mensal</h3>
               <span className="text-xs bg-slate-200 px-2 py-1 rounded text-slate-500">Básico</span>
            </div>
            <div className="flex items-baseline gap-1 mb-4">
               <span className="text-sm">R$</span>
               <span className="text-3xl font-bold text-slate-700">29,90</span>
               <span className="text-sm text-slate-400">/mês</span>
            </div>
            <button className="w-full py-3 rounded-xl border border-slate-300 text-slate-600 font-bold hover:bg-slate-100 transition-colors text-sm">
              Escolher Mensal
            </button>
          </div>

          {/* 2. PLANO SEMESTRAL */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-100 text-blue-800 text-[10px] font-bold px-3 py-1 rounded-bl-lg">
                POPULAR
            </div>
            <div className="flex justify-between items-center mb-2">
               <h3 className="font-bold text-[#1A2A44]">Semestral</h3>
            </div>
            <div className="flex items-baseline gap-1 mb-1">
               <span className="text-sm">R$</span>
               <span className="text-3xl font-bold text-[#1A2A44]">97,00</span>
               <span className="text-sm text-slate-400">/6 meses</span>
            </div>
            <p className="text-xs text-green-600 mb-4 font-bold">Equivale a R$ 16,16/mês</p>
            <button className="w-full py-3 rounded-xl border-2 border-[#1A2A44] text-[#1A2A44] font-bold hover:bg-blue-50 transition-colors text-sm">
              Escolher Semestral
            </button>
          </div>

          {/* 3. PLANO VITALÍCIO (HERO) */}
          <div className="relative transform scale-105 z-10 mt-4">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FFC107] to-orange-500 rounded-2xl blur opacity-75 animate-pulse"></div>
            
            <div className="bg-[#1A2A44] rounded-xl p-1 relative">
                <div className="bg-[#0F172A] rounded-lg p-6 text-white relative overflow-hidden">
                    
                    <div className="absolute top-0 right-0 bg-[#FFC107] text-[#1A2A44] text-[10px] font-black px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                        MELHOR CUSTO-BENEFÍCIO
                    </div>

                    <h3 className="font-bold text-xl text-[#FFC107] mb-1 flex items-center gap-2">
                        <Lock size={18} /> Acesso Vitalício
                    </h3>
                    <p className="text-[11px] text-slate-400 mb-6">Pagamento Único • Nunca mais pague nada</p>
                    
                    <div className="flex items-baseline gap-2 mb-6">
                        <span className="text-sm text-slate-500 line-through">R$ 997</span>
                        <div className="flex items-baseline">
                            <span className="text-lg font-bold text-[#FFC107]">R$</span>
                            <span className="text-5xl font-black text-white tracking-tighter">247</span>
                        </div>
                    </div>
                    
                    <div className="space-y-3 mb-8 border-t border-white/10 pt-4">
                        <div className="flex items-center gap-3 text-sm font-medium">
                            <CheckCircle2 size={16} className="text-[#FFC107]"/> <span>Acesso Vitalício ao App</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm font-medium">
                            <BrainCircuit size={16} className="text-[#FFC107]"/> <span className="text-[#FFC107] font-bold">IA Engenheiro Inclusa</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm font-medium">
                            <Gift size={16} className="text-[#FFC107]"/> <span>Todos os Bônus (R$ 900+)</span>
                        </div>
                    </div>

                    <button className="w-full py-4 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white font-black text-lg shadow-[0_4px_14px_0_rgba(16,185,129,0.39)] transform transition-transform active:scale-[0.98] flex items-center justify-center gap-2 group">
                        QUERO O VITALÍCIO
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="flex flex-col items-center gap-3 mt-4 opacity-70 grayscale hover:grayscale-0 transition-all">
             <div className="flex gap-4 items-center">
                <div className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded border border-slate-200">
                    <QrCode size={16} className="text-slate-600"/> 
                    <span className="text-[10px] font-bold text-slate-600">PIX</span>
                </div>
                <div className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded border border-slate-200">
                    <CreditCard size={16} className="text-slate-600"/> 
                    <span className="text-[10px] font-bold text-slate-600">Cartão até 12x</span>
                </div>
             </div>
             <p className="text-[10px] text-slate-400">Ambiente 100% Seguro</p>
          </div>

        </div>

        {/* GUARANTEE */}
        <div className="mt-12 bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col items-center text-center max-w-sm mx-auto">
            <div className="bg-white p-3 rounded-full text-[#1A2A44] shadow-md mb-4">
                <ShieldCheck size={28} />
            </div>
            <h3 className="font-bold text-[#1A2A44] mb-2 uppercase tracking-wide text-sm">Garantia Blindada de 30 Dias</h3>
            <p className="text-xs text-slate-600 mb-0 leading-relaxed">
              Use o app e a IA. Se você não economizar pelo menos 10x o valor investido, nós devolvemos 100% do seu dinheiro.
            </p>
        </div>
      </div>

      {/* STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-lg border-t border-slate-200 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-50">
         <div className="max-w-md mx-auto">
            <button className="w-full bg-[#10B981] hover:bg-[#059669] text-white text-lg font-black py-4 rounded-xl shadow-lg shadow-green-500/30 transform transition-all active:scale-[0.98] flex items-center justify-center gap-2 animate-pulse-slow">
               ECONOMIZAR AGORA
               <ArrowRight size={22} className="text-white" />
            </button>
         </div>
      </div>

    </div>
  );
};

// --- HELPER COMPONENTS ---

const PainCard = ({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) => (
  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
    <div className="bg-white p-3 rounded-xl shadow-sm shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-[#1A2A44] leading-tight mb-1 text-sm uppercase tracking-wide">{title}</h3>
      <p className="text-xs text-slate-600 leading-relaxed font-medium">{text}</p>
    </div>
  </div>
);

const ComparisonRow = ({ bad, good }: { bad: string, good: string }) => (
    <div className="grid grid-cols-2 text-xs">
        <div className="py-4 px-2 text-center text-slate-500 border-r border-slate-100 flex items-center justify-center gap-1">
            <XCircle size={14} className="text-red-400" /> {bad}
        </div>
        <div className="py-4 px-2 text-center font-bold text-[#1A2A44] bg-green-50/50 flex items-center justify-center gap-1">
            <CheckCircle2 size={14} className="text-green-500" /> {good}
        </div>
    </div>
);

const FeatureItemLight = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-[#FFC107] transition-colors">
        <div className="shrink-0 mt-1">
            {React.cloneElement(icon as React.ReactElement, { size: 20 })}
        </div>
        <div>
            <h4 className="font-bold text-[#1A2A44] text-sm mb-1">{title}</h4>
            <p className="text-xs text-slate-600 leading-relaxed">{desc}</p>
        </div>
    </div>
);

const PremiumBonusCard = ({ icon, title, desc, price }: { icon: React.ReactNode, title: string, desc: string, price: string }) => (
  <div className="flex gap-4 bg-white/5 p-4 rounded-xl border border-white/10 items-center relative overflow-hidden group">
     <div className="bg-[#1A2A44] p-3 rounded-lg border border-white/20 text-[#FFC107] shadow-lg shrink-0 z-10">
        {React.cloneElement(icon as React.ReactElement, { size: 22 })}
     </div>
     <div className="z-10 flex-1">
        <h3 className="font-bold text-white text-sm mb-1">{title}</h3>
        <p className="text-[11px] text-slate-400 leading-tight mb-2">{desc}</p>
        <div className="flex items-center gap-2">
            <span className="text-[10px] bg-red-500/20 text-red-300 px-2 py-0.5 rounded line-through">R$ {price}</span>
            <span className="text-[10px] text-[#10B981] font-bold">GRÁTIS HOJE</span>
        </div>
     </div>
  </div>
);

const TestimonialCard = ({ name, text }: { name: string, text: string }) => (
   <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 min-w-[260px] max-w-[260px] text-left">
      <div className="flex gap-1 mb-2">
         {[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-[#FFC107] fill-[#FFC107]" />)}
      </div>
      <p className="text-xs text-slate-200 italic mb-2 leading-relaxed">"{text}"</p>
      <p className="text-[10px] font-bold text-white uppercase">{name}</p>
   </div>
);