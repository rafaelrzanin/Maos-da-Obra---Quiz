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
  QrCode,
  Sparkles,
  Bot,
  Fingerprint,
  HardHat
} from 'lucide-react';

export const ResultsScreen: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-[#F8FAFC] overflow-y-auto no-scrollbar scroll-smooth pb-32 w-full relative">
      
      {/* ==========================================
          1. O DIAGNÓSTICO (HEADER)
      ========================================== */}
      {/* REMOVIDO overflow-hidden DO CONTAINER PRINCIPAL PARA NÃO CORTAR O CONTEÚDO */}
      <div className="bg-[#0F172A] text-white pt-10 pb-32 px-6 rounded-b-[2.5rem] shadow-2xl relative z-10 w-full">
        
        {/* Background Effects (Contained to avoid page overflow) */}
        <div className="absolute inset-0 overflow-hidden rounded-b-[2.5rem] pointer-events-none">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-red-600/10 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center">
            
            <div className="inline-flex items-center gap-2 mb-6 bg-red-500/10 border border-red-500/40 px-4 py-2 rounded-full backdrop-blur-md animate-fade-in-up shadow-[0_0_20px_rgba(239,68,68,0.2)]">
              <ShieldAlert size={18} className="text-red-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-red-100">Alerta Financeiro Grave</span>
            </div>
            
            <h1 className="text-2xl md:text-3xl font-black leading-tight mb-8 animate-fade-in-up delay-100 tracking-tight">
              Risco de perder até <span className="text-red-500 bg-red-500/10 px-2 rounded">30% do valor</span> da obra.
            </h1>

            {/* IMPACT CARD - FIXED VISIBILITY */}
            <div className="w-full bg-[#1E293B] rounded-2xl p-6 border border-red-500/30 mb-4 animate-fade-in-up delay-300 shadow-xl relative overflow-hidden ring-1 ring-white/5">
                
                <p className="text-[10px] text-red-300 uppercase tracking-widest font-bold mb-4 border-b border-white/5 pb-2 text-left">
                  Projeção de Prejuízo Real
                </p>

                <div className="grid grid-cols-1 gap-4">
                  {/* Case 1 */}
                  <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/5">
                    <div className="text-left">
                      <p className="text-xs text-slate-400">Obra de</p>
                      <p className="font-bold text-white">R$ 300 mil</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-red-400 font-bold flex items-center justify-end gap-1">
                        <TrendingDown size={12}/> Perda de
                      </p>
                      <p className="font-black text-red-500 text-lg">R$ 30.000 a 90k</p>
                    </div>
                  </div>

                  {/* Case 2 */}
                  <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/5">
                    <div className="text-left">
                      <p className="text-xs text-slate-400">Obra de</p>
                      <p className="font-bold text-white">R$ 3 Milhões</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-red-400 font-bold flex items-center justify-end gap-1">
                        <TrendingDown size={12}/> Perda de
                      </p>
                      <p className="font-black text-red-500 text-lg">R$ 300.000+</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 text-left">
                   <p className="text-xs text-slate-300 leading-relaxed">
                     <strong className="text-white">Atenção:</strong> Sem gestão profissional, 10% a 30% do orçamento vira entulho, desperdício e retrabalho.
                   </p>
                </div>
            </div>
            
        </div>
      </div>

      {/* ==========================================
          2. A FERIDA (O QUE VAI ACONTECER)
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

        <div className="space-y-4">
          <PainCard 
             icon={<Coins size={22} className="text-red-600" />}
             title="Caixa Zerado no Final"
             text="O dinheiro acaba na fase mais cara (acabamento). A obra para por meses."
          />
          <PainCard 
             icon={<Clock size={22} className="text-orange-600" />}
             title="Prazo Estourado"
             text="Sem material na hora certa, o pedreiro fica parado ganhando diária."
          />
          <PainCard 
             icon={<Ban size={22} className="text-slate-700" />}
             title="Desperdício Invisível"
             text="Sem conferência, 15% do cimento e pisos somem ou estragam."
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
        
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
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
      </div>

      {/* ==========================================
          4. PROVA SOCIAL (ROBUST SCROLLER)
      ========================================== */}
      <div className="py-14 bg-[#1A2A44] w-full overflow-hidden">
         <div className="px-6 mb-8 text-center">
            <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2">Quem usa não larga</h3>
            <div className="flex justify-center gap-1">
               {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-[#FFC107] fill-[#FFC107]" />)}
            </div>
         </div>

         <div className="scroller-container">
             <div className="scroller-inner gap-4 px-4">
                 {/* Set 1 */}
                 <TestimonialCard name="Carlos F." role="Reformou Apartamento" text="Economizei 12 mil só no piso. O app avisou que eu ia comprar a mais." />
                 <TestimonialCard name="Mariana C." role="Construção do Zero" text="Meu pedreiro tentou me enrolar nas diárias. O app me mostrou o certo." />
                 <TestimonialCard name="Roberto A." role="Pequena Reforma" text="O Zé da Obra calculou o concreto certinho. Sobrou dinheiro pro ar." />
                 <TestimonialCard name="Paulo S." role="Engenheiro Civil" text="Sou engenheiro e indico pra todos. Acaba com a dor de cabeça." />
                 <TestimonialCard name="Fernanda L." role="Casa Geminada" text="Achava que planilha resolvia. O Mãos da Obra é outro nível." />
                 
                 {/* Set 2 (Duplicate for Loop) */}
                 <TestimonialCard name="Carlos F." role="Reformou Apartamento" text="Economizei 12 mil só no piso. O app avisou que eu ia comprar a mais." />
                 <TestimonialCard name="Mariana C." role="Construção do Zero" text="Meu pedreiro tentou me enrolar nas diárias. O app me mostrou o certo." />
                 <TestimonialCard name="Roberto A." role="Pequena Reforma" text="O Zé da Obra calculou o concreto certinho. Sobrou dinheiro pro ar." />
                 <TestimonialCard name="Paulo S." role="Engenheiro Civil" text="Sou engenheiro e indico pra todos. Acaba com a dor de cabeça." />
                 <TestimonialCard name="Fernanda L." role="Casa Geminada" text="Achava que planilha resolvia. O Mãos da Obra é outro nível." />
             </div>
         </div>
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
             <p className="text-center text-slate-500 text-sm">O gerente de bolso da sua construção.</p>
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
          6. "ZÉ DA OBRA" (IA)
      ========================================== */}
      <div className="py-12 px-6 bg-slate-50 border-t border-slate-200">
         <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-[#10B981]/10 text-[#10B981] px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest mb-4 border border-[#10B981]/20">
               <Bot size={16} /> Inteligência Artificial Exclusiva
            </div>
            <h2 className="text-3xl font-black text-[#1A2A44]">Conheça o "Zé da Obra"</h2>
            <p className="text-sm text-slate-600 mt-3 max-w-xs mx-auto leading-relaxed">
               Seu novo assistente pessoal. Ele pensa, calcula e organiza tudo para você não ter trabalho.
            </p>
         </div>

         {/* AI Features Cards */}
         <div className="grid gap-3 mb-8">
             <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4 hover:border-blue-400 transition-colors">
                <div className="bg-blue-100 p-2.5 rounded-lg text-blue-700 shrink-0">
                    <Construction size={22}/>
                </div>
                <div className="text-left">
                    <h4 className="font-bold text-[#1A2A44] text-sm">Cronogramas Mágicos</h4>
                    <p className="text-xs text-slate-500 mt-0.5">O "Zé" cria todas as etapas da sua obra em segundos.</p>
                </div>
             </div>
             <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4 hover:border-orange-400 transition-colors">
                <div className="bg-orange-100 p-2.5 rounded-lg text-orange-700 shrink-0">
                    <FileSignature size={22}/>
                </div>
                <div className="text-left">
                    <h4 className="font-bold text-[#1A2A44] text-sm">Listas de Compras</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Ele diz exatamente o material e a quantidade certa.</p>
                </div>
             </div>
         </div>

         {/* Chat Interface Mockup */}
         <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden max-w-sm mx-auto">
            <div className="bg-[#1A2A44] p-3 flex items-center gap-3 border-b border-slate-700">
               <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white border-2 border-white/20 shadow-md overflow-hidden relative">
                   <HardHat size={20} className="text-[#FFC107] relative z-10" />
               </div>
               <div>
                  <p className="text-xs font-bold text-white">Zé da Obra</p>
                  <p className="text-[10px] text-green-400 flex items-center gap-1">Online • Respondendo</p>
               </div>
            </div>
            
            <div className="p-4 bg-slate-50 space-y-4">
               <div className="flex justify-end">
                  <div className="bg-slate-200 text-slate-700 text-xs p-3 rounded-l-xl rounded-tr-xl max-w-[85%] shadow-sm">
                     "Zé", vou rebocar uma parede de 20m². O que eu compro?
                  </div>
               </div>
               
               <div className="flex justify-start">
                  <div className="bg-white border border-slate-200 text-slate-700 text-xs p-3 rounded-r-xl rounded-tl-xl max-w-[95%] shadow-sm">
                     <p className="font-bold mb-2 text-[#1A2A44]">Deixa comigo! Para 20m² de reboco (2cm):</p>
                     <ul className="list-disc pl-4 space-y-1.5 text-slate-600 mb-2">
                        <li>3,5 sacos de cimento (50kg)</li>
                        <li>0,4 m³ de areia média</li>
                        <li>1,5 sacos de cal hidratada</li>
                     </ul>
                     <p className="text-[#10B981] font-bold text-[10px] uppercase border-t border-slate-100 pt-2 mt-2">
                        ✅ Já salvei na sua lista de materiais!
                     </p>
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
            <p className="text-slate-400 text-sm mt-2">Disponível apenas no plano Vitalício.</p>
         </div>

         <div className="space-y-4">
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
      <div className="py-12 px-6 bg-white pb-40" id="pricing">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-[#1A2A44] mb-2 tracking-tight">Faça sua Escolha</h2>
          <p className="text-slate-600 text-sm">Assuma o controle da sua obra hoje.</p>
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
          <div className="relative transform scale-105 z-20 mt-6">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FFC107] to-orange-500 rounded-2xl blur opacity-75 animate-pulse pointer-events-none"></div>
            
            <div className="bg-[#1A2A44] rounded-xl p-1 relative shadow-2xl">
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
                            <Bot size={16} className="text-[#FFC107]"/> <span className="text-[#FFC107] font-bold">Zé da Obra (IA) Incluso</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm font-medium">
                            <Gift size={16} className="text-[#FFC107]"/> <span>Todos os Bônus (R$ 900+)</span>
                        </div>
                    </div>

                    <button className="w-full py-4 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white font-black text-lg shadow-[0_4px_14px_0_rgba(16,185,129,0.39)] transform transition-transform active:scale-[0.98] flex items-center justify-center gap-2 group relative z-30">
                        QUERO O VITALÍCIO
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                </div>
            </div>
          </div>

          {/* Payment Methods - MOVED DOWN FOR SPACING */}
          <div className="flex flex-col items-center gap-4 mt-12 relative z-10">
             
             {/* Card Badges Row */}
             <div className="flex gap-3 items-center opacity-90">
                {/* Pix Badge */}
                <div className="flex flex-col items-center justify-center bg-white border border-slate-200 rounded-lg px-4 py-2 h-12 shadow-sm">
                   <QrCode size={20} className="text-[#10B981] mb-0.5" />
                   <span className="text-[9px] font-bold text-[#10B981] leading-none">PIX</span>
                </div>
                
                {/* Credit Cards Visual Badges */}
                <div className="flex items-center bg-slate-50 rounded-lg px-4 h-12 gap-3 border border-slate-200 shadow-sm">
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex -space-x-1.5">
                            <div className="w-4 h-4 rounded-full bg-red-500"></div>
                            <div className="w-4 h-4 rounded-full bg-yellow-500/90"></div>
                        </div>
                        <span className="text-[8px] font-bold text-slate-500 mt-1">Master</span>
                    </div>
                    <div className="w-[1px] h-6 bg-slate-300"></div>
                    <div className="flex flex-col items-center justify-center">
                         <span className="text-[12px] font-black text-blue-800 leading-none italic font-serif">Visa</span>
                         <span className="text-[8px] font-bold text-slate-500 mt-0.5">Visa</span>
                    </div>
                    <div className="w-[1px] h-6 bg-slate-300"></div>
                    <div className="flex flex-col items-center justify-center">
                        <CreditCard size={18} className="text-slate-600"/>
                        <span className="text-[8px] font-bold text-slate-500 mt-1">Outros</span>
                    </div>
                </div>
             </div>

             <div className="flex items-center gap-2 text-[#1A2A44] bg-white px-5 py-2 rounded-full border border-slate-200 shadow-sm mt-2">
                 <Lock size={14} strokeWidth={2.5} className="text-green-600" />
                 <span className="text-[10px] font-bold uppercase tracking-wide">Ambiente 100% Criptografado</span>
             </div>
          </div>

        </div>

        {/* SATISFACTION GUARANTEE - REDESIGNED */}
        <div className="mt-20 max-w-sm mx-auto relative group">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden relative">
                {/* Header Banner */}
                <div className="bg-[#1A2A44] p-4 text-center">
                   <div className="w-12 h-12 bg-[#FFC107] rounded-full flex items-center justify-center mx-auto -mb-8 border-4 border-white shadow-md relative z-10">
                      <ShieldCheck size={24} className="text-[#1A2A44]" />
                   </div>
                </div>
                
                <div className="pt-10 pb-6 px-6 text-center">
                   <h3 className="font-black text-[#1A2A44] text-lg uppercase tracking-wide mb-1">Garantia Risco Zero</h3>
                   <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-4">Teste por 30 Dias</p>
                   
                   <p className="text-sm text-slate-600 leading-relaxed font-medium">
                      "Se você não conseguir organizar sua obra, controlar os gastos ou não ficar satisfeito com o <span className="font-bold text-[#1A2A44]">Zé da Obra</span> em até 30 dias, nós devolvemos 100% do seu dinheiro."
                   </p>
                   
                   <div className="mt-4 pt-4 border-t border-slate-100">
                      <p className="text-[10px] text-green-600 font-bold uppercase flex items-center justify-center gap-1">
                         <CheckCircle2 size={12} /> Satisfação Garantida
                      </p>
                   </div>
                </div>
            </div>
        </div>

      </div>

      {/* STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-lg border-t border-slate-200 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-50">
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
  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
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

const TestimonialCard = ({ name, role, text }: { name: string, role: string, text: string }) => (
   <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/10 min-w-[280px] w-[280px] flex-shrink-0">
      <div className="flex gap-1 mb-3">
         {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-[#FFC107] fill-[#FFC107]" />)}
      </div>
      <p className="text-xs text-slate-200 italic mb-4 leading-relaxed line-clamp-3">"{text}"</p>
      <div className="border-t border-white/10 pt-3">
          <p className="text-[11px] font-bold text-white uppercase">{name}</p>
          <p className="text-[10px] text-slate-400">{role}</p>
      </div>
   </div>
);