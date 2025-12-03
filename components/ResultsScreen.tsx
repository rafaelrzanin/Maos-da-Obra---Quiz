import React from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Lock, 
  Star, 
  Zap, 
  BarChart3, 
  FileText, 
  Smartphone, 
  BrainCircuit, 
  Clock, 
  Ban, 
  TrendingDown,
  Gift
} from 'lucide-react';

export const ResultsScreen: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-slate-50 overflow-y-auto no-scrollbar scroll-smooth pb-24">
      
      {/* ==========================================
          SECTION 1: O CHOQUE (DIAGNÓSTICO)
      ========================================== */}
      <div className="bg-[#1A2A44] text-white pt-8 pb-16 px-6 rounded-b-[2.5rem] shadow-2xl relative z-10 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 rounded-full blur-[100px] opacity-20 pointer-events-none -translate-y-1/2 translate-x-1/2 animate-pulse-slow"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 mb-6 bg-red-500/20 border border-red-500/50 px-4 py-1.5 rounded-full backdrop-blur-md animate-fade-in-up">
              <AlertTriangle size={16} className="text-red-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-red-100">Diagnóstico Crítico</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-black leading-tight mb-4 animate-fade-in-up delay-100">
              Sua obra está <span className="text-red-500 underline decoration-white decoration-1 underline-offset-4">sangrando dinheiro</span>.
            </h1>
            
            <p className="text-slate-300 text-sm mb-8 max-w-xs mx-auto animate-fade-in-up delay-200 leading-relaxed">
              Nosso algoritmo detectou padrões que indicam um risco iminente de colapso financeiro na sua construção.
            </p>

            {/* IMPACT GRAPH - AGGRESSIVE */}
            <div className="w-full bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 mb-2 animate-fade-in-up delay-300 shadow-[0_0_40px_rgba(220,38,38,0.2)]">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Projeção de Prejuízo Real</h3>
                <div className="flex justify-center items-end h-40 gap-6">
                    {/* The Problem */}
                    <div className="flex flex-col items-center w-1/2 group">
                        <div className="mb-2 bg-red-600 text-white text-[11px] font-bold px-3 py-1 rounded shadow-lg animate-bounce">- R$ 45.000</div>
                        <div className="w-16 h-full bg-gradient-to-t from-red-900 via-red-600 to-red-500 rounded-t-lg relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-30"></div>
                        </div>
                        <p className="mt-3 text-[10px] font-bold text-red-400 uppercase tracking-wider">Seu Cenário Atual</p>
                    </div>
                    {/* The Solution */}
                    <div className="flex flex-col items-center w-1/2 opacity-50 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
                        <div className="mb-2 bg-[#10B981] text-[#1A2A44] text-[10px] font-bold px-2 py-1 rounded shadow-lg">Zero Perda</div>
                        <div className="w-16 h-[10%] bg-gradient-to-t from-green-900 to-[#10B981] rounded-t-lg relative"></div>
                        <p className="mt-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Com Gestão</p>
                    </div>
                </div>
                <p className="text-[10px] text-center text-red-300 mt-4 italic">
                  *Baseado em 38% de desperdício médio detectado no seu perfil.
                </p>
            </div>
        </div>
      </div>

      {/* ==========================================
          SECTION 2: A FERIDA (AGITAÇÃO DA DOR)
      ========================================== */}
      <div className="px-6 py-12 bg-white relative z-20 -mt-6 rounded-t-[2rem]">
        <h2 className="text-xl font-black text-[#1A2A44] mb-8 flex items-center gap-2">
          <Ban className="text-red-600" />
          O que realmente está em jogo?
        </h2>

        <div className="space-y-6">
          <PainPoint 
            icon={<TrendingDown size={24} className="text-white" />}
            color="bg-red-500"
            title="O Dinheiro Acaba Antes da Obra"
            text="Sem controle, você vai gastar o orçamento do acabamento no reboco. Resultado: Obra parada por meses."
          />
          <PainPoint 
            icon={<Clock size={24} className="text-white" />}
            color="bg-orange-500"
            title="Atraso de 4 a 6 meses"
            text="A falta de materiais na hora certa cria um efeito dominó. Cada semana parada custa dinheiro e saúde mental."
          />
          <PainPoint 
            icon={<ShieldCheck size={24} className="text-white" />}
            color="bg-slate-700"
            title="O 'Roubo Invisível'"
            text="Materiais 'sobrando' que somem, preços superfaturados. Sem registrar, você está sendo roubado sem saber."
          />
        </div>
      </div>

      {/* ==========================================
          SECTION 3: A SOLUÇÃO (O APP)
      ========================================== */}
      <div className="bg-slate-100 py-12 px-6">
        <div className="text-center mb-8">
          <span className="text-blue-600 font-bold tracking-widest text-xs uppercase">Chega de amadorismo</span>
          <h2 className="text-2xl font-black text-[#1A2A44] leading-tight mt-2">
            O "Mãos da Obra" é o seu gerente financeiro pessoal.
          </h2>
        </div>

        <div className="grid gap-4">
          <BenefitCard 
            icon={<FileText className="text-blue-600" />}
            title="Adeus, Caderninho"
            desc="Registre gastos em 3 segundos pelo celular. O app organiza tudo por categoria automaticamente."
          />
          <BenefitCard 
            icon={<BarChart3 className="text-green-600" />}
            title="Raio-X Financeiro"
            desc="Gráficos que mostram exatamente onde você pode economizar. Corte gastos supérfluos na hora."
          />
          <BenefitCard 
            icon={<Smartphone className="text-purple-600" />}
            title="Controle de Estoque"
            desc="Saiba quanto cimento entrou e saiu. Acabe com o desperdício e o desvio de material."
          />
        </div>
      </div>

      {/* ==========================================
          SECTION 4: DIFERENCIAL (IA)
      ========================================== */}
      <div className="bg-[#1A2A44] text-white py-12 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-[#FFC107] p-2 rounded-lg">
              <BrainCircuit className="text-[#1A2A44]" size={24} />
            </div>
            <h3 className="font-bold text-lg text-[#FFC107]">Inteligência Artificial 2.0</h3>
          </div>
          
          <h2 className="text-2xl font-bold mb-4">Prevê o futuro da sua obra.</h2>
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            Nossa IA analisa suas compras e avisa: <span className="text-white font-bold">"Nesse ritmo, seu orçamento vai estourar em 15 dias"</span>. Corrija a rota antes de bater o carro.
          </p>
          
          <div className="bg-white/10 rounded-xl p-4 border border-white/10 flex items-center gap-4">
             <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center shrink-0 animate-pulse">
               <CheckCircle2 size={20} />
             </div>
             <div>
               <p className="font-bold text-sm">Economia média gerada:</p>
               <p className="text-xl font-black text-[#FFC107]">R$ 12.450,00</p>
             </div>
          </div>
        </div>
      </div>

      {/* ==========================================
          SECTION 5: PROVA SOCIAL
      ========================================== */}
      <div className="py-12 px-6 bg-white">
        <h3 className="text-center font-bold text-[#1A2A44] text-xl mb-8">Eles salvaram suas obras</h3>
        
        <div className="flex overflow-x-auto gap-4 pb-4 -mx-6 px-6 no-scrollbar snap-x">
           <TestimonialCard 
             name="Ricardo M." 
             location="São Paulo, SP"
             text="Eu ia estourar em 20k. O app me avisou e consegui renegociar com o pedreiro a tempo. Salvou meu casamento."
             stars={5}
           />
           <TestimonialCard 
             name="Ana Paula" 
             location="Curitiba, PR"
             text="Só a função de registrar nota fiscal tirando foto já vale o preço. Não perco mais nada."
             stars={5}
           />
           <TestimonialCard 
             name="Marcos V." 
             location="Belo Horizonte, MG"
             text="A IA previu que ia faltar cimento. Comprei antes do aumento e economizei R$ 800 numa tacada só."
             stars={5}
           />
        </div>
      </div>

      {/* ==========================================
          SECTION 6: BÔNUS
      ========================================== */}
      <div className="py-10 px-6 bg-yellow-50 border-y border-yellow-200">
         <div className="flex items-center gap-2 mb-6 justify-center">
            <Gift className="text-yellow-600" />
            <h3 className="font-black text-[#1A2A44] uppercase tracking-widest">Bônus Exclusivos</h3>
         </div>
         
         <div className="space-y-3">
            <BonusItem title="Planilha Mestra de Orçamentos" value="R$ 97,00" />
            <BonusItem title="Checklist: Como não ser enganado" value="R$ 47,00" />
            <BonusItem title="Modelo de Contrato com Pedreiro" value="R$ 127,00" />
         </div>
         
         <div className="mt-6 text-center">
            <p className="text-sm text-slate-500">Valor total dos bônus:</p>
            <p className="text-xl font-black text-red-500 line-through">R$ 271,00</p>
            <p className="font-bold text-green-600">GRÁTIS HOJE</p>
         </div>
      </div>

      {/* ==========================================
          SECTION 7: PRICING (OFERTA)
      ========================================== */}
      <div className="py-12 px-6 bg-slate-50" id="pricing">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-[#1A2A44] mb-2">Escolha seu plano</h2>
          <p className="text-slate-600 text-sm">Invista menos que um saco de cimento para salvar sua obra.</p>
        </div>

        <div className="space-y-6">
          
          {/* PLANO MENSAL (ANCORAGEM) */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 opacity-75 hover:opacity-100 transition-opacity">
            <h3 className="font-bold text-slate-500">Mensal</h3>
            <div className="flex items-baseline gap-1 my-2">
               <span className="text-sm">R$</span>
               <span className="text-3xl font-bold text-[#1A2A44]">29,90</span>
               <span className="text-sm text-slate-400">/mês</span>
            </div>
            <p className="text-xs text-slate-500 mb-4">Cobrado mensalmente no cartão.</p>
            <button className="w-full py-3 rounded-xl border-2 border-[#1A2A44] text-[#1A2A44] font-bold">Selecionar</button>
          </div>

          {/* PLANO VITALÍCIO (HERO) */}
          <div className="bg-white rounded-2xl p-6 border-2 border-[#10B981] relative shadow-2xl transform scale-105 z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#10B981] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
              Melhor Custo-Benefício
            </div>
            <h3 className="font-bold text-[#1A2A44] text-lg">Acesso Vitalício</h3>
            <p className="text-xs text-green-600 font-bold mb-2">Pagamento Único • Sem Mensalidade</p>
            
            <div className="flex items-baseline gap-1 my-2">
               <span className="text-sm text-red-400 line-through mr-2">R$ 497</span>
               <span className="text-sm">R$</span>
               <span className="text-5xl font-black text-[#1A2A44]">97</span>
            </div>
            
            <div className="space-y-2 mb-6 mt-4">
               <div className="flex gap-2 text-sm text-slate-700 font-medium">
                  <CheckCircle2 size={16} className="text-green-500" /> Acesso para sempre
               </div>
               <div className="flex gap-2 text-sm text-slate-700 font-medium">
                  <CheckCircle2 size={16} className="text-green-500" /> Todos os Bônus inclusos
               </div>
               <div className="flex gap-2 text-sm text-slate-700 font-medium">
                  <CheckCircle2 size={16} className="text-green-500" /> Atualizações futuras
               </div>
            </div>

            <button className="w-full py-4 rounded-xl bg-[#10B981] text-white font-black text-lg shadow-lg shadow-green-500/30 animate-pulse-slow">
              QUERO VITALÍCIO
            </button>
            <p className="text-center text-[10px] text-slate-400 mt-2">Menos de R$ 0,30 por dia</p>
          </div>

          {/* PLANO SEMESTRAL */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 opacity-75 hover:opacity-100 transition-opacity">
            <h3 className="font-bold text-slate-500">Semestral</h3>
            <div className="flex items-baseline gap-1 my-2">
               <span className="text-sm">R$</span>
               <span className="text-3xl font-bold text-[#1A2A44]">19,90</span>
               <span className="text-sm text-slate-400">/mês</span>
            </div>
            <p className="text-xs text-slate-500 mb-4">Cobrado a cada 6 meses (R$ 119,40).</p>
            <button className="w-full py-3 rounded-xl border-2 border-[#1A2A44] text-[#1A2A44] font-bold">Selecionar</button>
          </div>

        </div>
      </div>

      {/* ==========================================
          SECTION 8: GARANTIA & FINAL
      ========================================== */}
      <div className="px-6 py-10 mb-20">
         <div className="bg-white rounded-2xl p-6 border border-slate-200 flex flex-col items-center text-center">
            <div className="bg-[#1A2A44] p-3 rounded-full text-white mb-4">
                <Lock size={24} />
            </div>
            <h3 className="font-bold text-[#1A2A44] mb-2">Garantia Blindada de 7 Dias</h3>
            <p className="text-sm text-slate-600 mb-4">
              Use o app na sua obra. Se você não sentir que economizou pelo menos 10x o valor investido, nós devolvemos 100% do seu dinheiro. Sem perguntas.
            </p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png" className="h-6 opacity-50 grayscale" alt="Payment Methods" />
         </div>
      </div>

      {/* STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-50">
         <div className="max-w-md mx-auto flex flex-col gap-2">
            <button className="w-full bg-[#10B981] hover:bg-[#059669] text-white text-lg font-black py-4 rounded-xl shadow-lg shadow-green-500/30 transform transition-all active:scale-[0.98] flex items-center justify-center gap-2">
               SALVAR MINHA OBRA AGORA
               <ArrowRight size={22} className="text-white" />
            </button>
         </div>
      </div>

    </div>
  );
};

// --- HELPER COMPONENTS ---

const PainPoint = ({ icon, color, title, text }: { icon: React.ReactNode, color: string, title: string, text: string }) => (
  <div className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-sm">
    <div className={`${color} p-3 rounded-lg shrink-0 shadow-md`}>
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-[#1A2A44] leading-tight mb-1">{title}</h3>
      <p className="text-xs text-slate-600 leading-relaxed">{text}</p>
    </div>
  </div>
);

const BenefitCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4">
    <div className="bg-slate-50 p-2 rounded-lg shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-[#1A2A44] text-sm mb-1">{title}</h4>
      <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const TestimonialCard = ({ name, location, text, stars }: { name: string, location: string, text: string, stars: number }) => (
  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 min-w-[280px] snap-center shadow-sm">
    <div className="flex gap-1 mb-3">
        {[...Array(stars)].map((_, i) => (
            <Star key={i} size={14} className="text-[#FFC107] fill-[#FFC107]" />
        ))}
    </div>
    <p className="text-sm text-slate-700 italic mb-4 leading-relaxed">"{text}"</p>
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-xs font-bold text-slate-500">
        {name.charAt(0)}
      </div>
      <div>
        <p className="text-xs font-bold text-[#1A2A44]">{name}</p>
        <p className="text-[10px] text-slate-400">{location}</p>
      </div>
    </div>
  </div>
);

const BonusItem = ({ title, value }: { title: string, value: string }) => (
  <div className="flex justify-between items-center bg-white p-3 rounded-lg border border-yellow-100">
     <div className="flex items-center gap-2">
        <CheckCircle2 size={16} className="text-green-600" />
        <span className="text-sm font-semibold text-slate-700">{title}</span>
     </div>
     <span className="text-xs text-slate-400 line-through">{value}</span>
  </div>
);