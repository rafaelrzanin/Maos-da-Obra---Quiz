import React from 'react';
// REMOVI O IMPORT DO REACT-ROUTER-DOM PARA CORRIGIR O ERRO DE BUILD
import { 
  AlertTriangle, 
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

  // --- FUNÇÃO DE NAVEGAÇÃO CORRIGIDA ---
  const handleSelectPlan = (planType) => {
      // AJUSTE: Usar caminho relativo '/' funciona tanto no localhost quanto no Vercel
      // Isso evita que você precise ficar mudando o link manualmente
      window.location.href = `/checkout?plan=${planType}`;
  };

  return (
    <div className="flex flex-col h-full bg-[#F8FAFC] overflow-y-auto no-scrollbar scroll-smooth w-full relative">
      
      {/* ==========================================
          1. O DIAGNÓSTICO (HEADER)
      ========================================== */}
      <div className="bg-[#0F172A] text-white pt-10 pb-28 px-6 rounded-b-[2.5rem] shadow-2xl relative z-10 w-full">
        
        {/* Background Effects */}
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

        {/* CTA 1: FUGA DA DOR */}
        <InterimCTA 
            text="CHEGA DE JOGAR DINHEIRO FORA" 
            subtext="Quero proteger meu orçamento agora"
            onClick={scrollToPricing}
            color="red"
        />
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

        {/* CTA 2: DESEJO DE SOLUÇÃO */}
        <InterimCTA 
            text="QUERO MINHA OBRA PROFISSIONAL" 
            subtext="Chega de dor de cabeça e improviso"
            onClick={scrollToPricing}
            color="green"
        />
      </div>

      {/* ==========================================
          4. PROVA SOCIAL (SCROLL INFINITO)
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
                 {/* Set 1 */}
                 <TestimonialCard name="Carlos F." role="Reformou Apartamento" text="Economizei 12 mil só no piso. O app avisou que eu ia comprar a mais." />
                 <TestimonialCard name="Mariana C." role="Construção do Zero" text="Meu pedreiro tentou me enrolar nas diárias. O app me mostrou o certo." />
                 <TestimonialCard name="Roberto A." role="Pequena Reforma" text="O Zé da Obra calculou o concreto certinho. Sobrou dinheiro pro ar." />
                 <TestimonialCard name="Paulo S." role="Engenheiro Civil" text="Sou engenheiro e indico pra todos. Acaba com a dor de cabeça." />
                 
                 {/* Set 2 (DUPLICADO PARA O LOOP) */}
                 <TestimonialCard name="Carlos F." role="Reformou Apartamento" text="Economizei 12 mil só no piso. O app avisou que eu ia comprar a mais." />
                 <TestimonialCard name="Mariana C." role="Construção do Zero" text="Meu pedreiro tentou me enrolar nas diárias. O app me mostrou o certo." />
                 <TestimonialCard name="Roberto A." role="Pequena Reforma" text="O Zé da Obra calculou o concreto certinho. Sobrou dinheiro pro ar." />
                 <TestimonialCard name="Paulo S." role="Engenheiro Civil" text="Sou engenheiro e indico pra todos. Acaba com a dor de cabeça." />
             </div>
         </div>

         {/* CTA 3: PROVA SOCIAL */}
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
          5. A REVELAÇÃO (MÃOS DA OBRA)
      ========================================== */}
      <div className="bg-white py-14 px-6 relative z-20">
           <div className="flex flex-col items-center mb-8">
             <div className="w-16 h-16 bg-[#1A2A44] rounded-2xl flex items-center justify-center mb-4 shadow-xl">
                <Smartphone className="text-[#FFC107]" size={32} />
             </div>
             <h2 className="text-3xl font-black text-center mb-2 text-[#1A2A44]">MÃOS DA OBRA</h2>
             <p className="text-center text-slate-500 text-sm">O gerente de bolso da sua construção.</p>
           </div>

           <div className="grid gap-3">
              <FeatureItemLight 
                icon={<BarChart3 size={20} className="text-blue-600"/>} 
                title="Raio-X Financeiro" 
                desc="Saiba para onde vai cada centavo em tempo real." 
              />
              <FeatureItemLight 
                icon={<Construction size={20} className="text-orange-600"/>} 
                title="Gestão de Etapas" 
                desc="Cronograma automático: Saiba o que comprar e quando." 
              />
              <FeatureItemLight 
                icon={<ShieldCheck size={20} className="text-green-600"/>} 
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

         {/* Chat Interface Mockup */}
         <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden max-w-sm mx-auto mb-8">
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

         {/* CTA 4: INOVAÇÃO/FACILIDADE */}
         <InterimCTA 
            text="QUERO MEU ASSISTENTE PESSOAL" 
            subtext="Tecnologia que trabalha por você"
            onClick={scrollToPricing}
            color="blue"
        />
      </div>

      {/* ==========================================
          SEÇÃO PREMIUM "SIMPLES COMO WHATSAPP" (TECNOLOGIA)
      ========================================== */}
      <div className="bg-[#1A2A44] pt-16 pb-28 px-6 relative border-t border-white/10 h-auto">
          {/* Ambient Light Effects */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#FFC107]/10 rounded-full blur-[60px] pointer-events-none"></div>
          
          <div className="relative z-10 text-center mb-12">
              <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-bold text-white/90 mb-6 border border-white/10 uppercase tracking-widest">
                  Tecnologia Invisível
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-6 leading-tight">
                  "Eu não entendo de tecnologia..."
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed max-w-xs mx-auto font-light">
                  Fique tranquilo. O Mãos da Obra foi desenhado para ser tão simples quanto enviar um "Bom dia" no grupo da família.
              </p>
          </div>

          <div className="max-w-sm mx-auto relative z-20">
             {/* Premium Glassmorphism Card */}
             <div className="bg-[#1E293B] border border-white/10 rounded-3xl p-8 relative shadow-2xl group">
                 
                 <div className="relative z-10 flex flex-wrap items-center justify-center gap-6 mb-10">
                     {/* WhatsApp Side */}
                     <div className="flex flex-col items-center gap-3">
                        <div className="w-16 h-16 bg-[#25D366]/20 rounded-2xl flex items-center justify-center border border-[#25D366]/30 shadow-[0_0_15px_rgba(37,211,102,0.2)]">
                           <MessageCircle size={32} className="text-[#25D366]" />
                        </div>
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">WhatsApp</span>
                     </div>
                     
                     <div className="flex flex-col items-center gap-1 opacity-50">
                        <ArrowRight size={20} className="text-white" />
                     </div>

                     {/* Mãos da Obra Side - Fixed Alignment */}
                     <div className="flex flex-col items-center gap-3">
                        <div className="w-16 h-16 bg-[#FFC107]/20 rounded-2xl flex items-center justify-center border border-[#FFC107]/30 shadow-[0_0_15px_rgba(255,193,7,0.2)]">
                           <Smartphone size={32} className="text-[#FFC107]" />
                        </div>
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider text-center">Mãos da Obra</span>
                     </div>
                 </div>

                 <div className="bg-black/30 rounded-xl p-5 border border-white/5 text-center">
                    <p className="text-white font-bold text-sm mb-2 flex items-center justify-center gap-2">
                       <ThumbsUp size={16} className="text-[#FFC107]" /> Mesma Simplicidade
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                       Sem menus confusos ou configurações chatas. É clicar, falar com o Zé e resolver.
                    </p>
                 </div>
             </div>
          </div>
      </div>

      {/* ==========================================
          7. BÔNUS DE ALTO VALOR
      ========================================== */}
      <div className="py-12 px-6 bg-slate-50 text-[#1A2A44] border-t border-slate-200">
         <div className="text-center mb-10">
            <Gift size={40} className="text-[#FFC107] mx-auto mb-4" />
            <h2 className="text-2xl font-black">Bônus Exclusivos</h2>
            <p className="text-slate-500 text-sm mt-2">Disponível apenas no plano Vitalício.</p>
         </div>

         <div className="space-y-4">
            <PremiumBonusCardLight 
               icon={<Calculator size={22} />}
               title="Calculadora de Materiais"
               desc="Cálculo exato de tijolos, pisos e tintas."
               price="197,00"
            />
            <PremiumBonusCardLight 
               icon={<FileSignature size={22} />}
               title="Pack de Contratos & Recibos"
               desc="Modelos jurídicos blindados para fechar com pedreiros."
               price="297,00"
            />
            <PremiumBonusCardLight 
               icon={<ShieldCheck size={22} />}
               title="Checklist Anti-Golpe"
               desc="O passo a passo para conferir a entrega da obra."
               price="147,00"
            />
         </div>
         
         <div className="mt-8 pt-8 border-t border-slate-200 text-center">
            <p className="text-xl font-bold text-[#10B981] mt-2">TOTAL GRÁTIS HOJE</p>
            <p className="text-xs text-slate-400">Na compra do plano vitalício</p>
         </div>
      </div>

      {/* ==========================================
          8. A OFERTA IRRESISTÍVEL (PRICING)
      ========================================== */}
      <div className="py-12 px-6 bg-white pb-20" id="pricing">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-[#1A2A44] mb-2 tracking-tight">Faça sua Escolha</h2>
          <p className="text-slate-600 text-sm">Assuma o controle da sua obra hoje.</p>
        </div>

        <div className="space-y-6 max-w-sm mx-auto">
          
          {/* 1. PLANO MENSAL */}
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
            
            {/* Features List */}
            <div className="space-y-3 mb-6 border-t border-slate-200 pt-4">
               <div className="flex items-center gap-2 text-xs text-slate-600">
                  <Check size={14} className="text-slate-400" /> <span>Controle de Gastos</span>
               </div>
               <div className="flex items-center gap-2 text-xs text-slate-400">
                  <XCircle size={14} className="text-red-400" /> <span className="line-through decoration-red-400/50">Sem Bônus Exclusivos</span>
               </div>
               <div className="flex items-center gap-2 text-xs text-slate-400">
                  <XCircle size={14} className="text-red-400" /> <span className="line-through decoration-red-400/50">Sem Zé da Obra (IA)</span>
               </div>
               <div className="flex items-center gap-2 text-xs text-slate-400">
                  <XCircle size={14} className="text-red-400" /> <span className="line-through decoration-red-400/50">Sem Suporte Prioritário</span>
               </div>
            </div>

            {/* BOTÃO MENSAL (NATIVO JS) */}
            <button 
              onClick={() => handleSelectPlan('MENSAL')}
              className="w-full block text-center py-3 rounded-xl border border-slate-300 text-slate-600 font-bold hover:bg-slate-100 transition-colors text-sm"
            >
              Escolher Mensal
            </button>
          </div>

          {/* 2. PLANO SEMESTRAL */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 relative overflow-hidden hover:border-[#FFC107] transition-all duration-300 group">
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
            
            {/* Features List */}
            <div className="space-y-3 mb-6 border-t border-slate-200 pt-4">
               <div className="flex items-center gap-2 text-xs text-slate-600">
                  <Check size={14} className="text-slate-400" /> <span>Controle de Gastos</span>
               </div>
               <div className="flex items-center gap-2 text-xs text-slate-400">
                  <XCircle size={14} className="text-red-400" /> <span className="line-through decoration-red-400/50">Sem Bônus Exclusivos</span>
               </div>
               <div className="flex items-center gap-2 text-xs text-slate-400">
                  <XCircle size={14} className="text-red-400" /> <span className="line-through decoration-red-400/50">Sem Zé da Obra (IA)</span>
               </div>
               <div className="flex items-center gap-2 text-xs text-slate-400">
                  <XCircle size={14} className="text-red-400" /> <span className="line-through decoration-red-400/50">Sem Suporte Prioritário</span>
               </div>
            </div>

            {/* BOTÃO SEMESTRAL (NATIVO JS) */}
            <button 
              onClick={() => handleSelectPlan('SEMESTRAL')}
              className="w-full block text-center py-3 rounded-xl border-2 border-[#1A2A44] text-[#1A2A44] font-bold hover:bg-blue-50 transition-colors text-sm"
            >
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

                    {/* BOTÃO VITALÍCIO (NATIVO JS) */}
                    <button 
                      onClick={() => handleSelectPlan('VITALICIO')}
                      className="w-full block text-center py-4 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white font-black text-lg shadow-[0_4px_14px_0_rgba(16,185,129,0.39)] transform transition-transform active:scale-[0.98] flex items-center justify-center gap-2 group relative z-30"
                    >
                        QUERO O VITALÍCIO
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
          </div>

        </div>

        {/* SATISFACTION GUARANTEE - 3D BADGE STYLE (FIXED) */}
        <div className="mt-20 max-w-sm mx-auto relative group px-2">
            
            {/* Main Badge Container */}
            <div className="flex flex-col items-center relative">
                
               {/* 3D Gold Shield Icon - Floating Above */}
               <div className="w-24 h-24 bg-gradient-to-br from-[#FFC107] via-[#F59E0B] to-[#B45309] rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(245,158,11,0.4)] border-4 border-white relative z-20 mb-[-40px]">
                  <ShieldCheck size={44} className="text-white drop-shadow-md" strokeWidth={2.5} />
               </div>
               
               {/* Content Box */}
               <div className="bg-white w-full rounded-3xl pt-14 pb-8 px-6 shadow-2xl border border-slate-100 relative z-10">
                   <h3 className="text-center font-black text-2xl text-[#1A2A44] uppercase tracking-tighter mb-3">
                     Garantia Total
                   </h3>
                   <div className="flex justify-center items-center gap-3 mb-5">
                      <div className="h-px w-8 bg-slate-200"></div>
                      <span className="text-[10px] font-bold text-[#F59E0B] uppercase tracking-widest bg-[#FFFBEB] px-2 py-1 rounded">30 Dias • Risco Zero</span>
                      <div className="h-px w-8 bg-slate-200"></div>
                   </div>
                   
                   <p className="text-center text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                      Você tem 30 dias para testar. Se não economizar na obra ou não gostar do Zé, nós devolvemos <span className="font-bold text-[#1A2A44] border-b-2 border-[#FFC107]">100% do seu dinheiro</span>.
                   </p>

                   <div className="flex justify-center">
                      <div className="inline-flex items-center gap-2 bg-[#F0FDF4] text-green-700 px-4 py-2.5 rounded-xl font-bold text-xs border border-green-200 shadow-sm">
                         <Check size={16} strokeWidth={3} className="text-green-600" /> Reembolso Automático
                      </div>
                   </div>
               </div>
            </div>
        </div>

        {/* Payment Methods - TRANSPARENT/LIGHT STYLE */}
        <div className="mt-16 flex flex-col items-center gap-4 relative z-40">
            <div className="flex gap-3 items-center opacity-90">
                {/* PIX */}
                <div className="flex flex-col items-center justify-center bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 h-12 shadow-sm">
                    <QrCode size={20} className="text-[#10B981] mb-0.5" />
                    <span className="text-[9px] font-bold text-[#10B981] leading-none">PIX</span>
                </div>
                {/* Cards */}
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

            <div className="flex items-center gap-2 text-slate-400">
                <Lock size={12} />
                <span className="text-[10px] uppercase font-bold tracking-widest">Ambiente 100% Criptografado</span>
            </div>
        </div>

      </div>

      {/* FOOTER */}
      <footer className="py-10 text-center relative z-10 bg-[#F8FAFC] pb-40 border-t border-slate-200">
          <p className="text-[#1A2A44] font-bold text-xs mb-2">© 2025 Mãos da Obra</p>
          <p className="text-slate-400 text-[10px]">Todos os direitos reservados.</p>
          <div className="flex justify-center gap-4 mt-4 text-[10px] text-slate-500 font-medium">
              <span className="cursor-pointer hover:text-[#1A2A44]">Termos de Uso</span>
              <span className="cursor-pointer hover:text-[#1A2A44]">Política de Privacidade</span>
          </div>
      </footer>

      {/* STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-lg border-t border-slate-200 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-50">
         <div className="max-w-md mx-auto">
            <button 
                onClick={scrollToPricing}
                className="w-full bg-[#10B981] hover:bg-[#059669] text-white text-lg font-black py-4 rounded-xl shadow-lg shadow-green-500/30 transform transition-all active:scale-[0.98] flex items-center justify-center gap-2 animate-pulse-slow"
            >
               ECONOMIZAR AGORA
               <ArrowRight size={22} className="text-white" />
            </button>
         </div>
      </div>

    </div>
  );
};

// --- HELPER COMPONENTS ---

const PainCard = ({ icon, title, text }) => (
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

const ComparisonRow = ({ bad, good }) => (
    <div className="grid grid-cols-2 text-xs">
        <div className="py-4 px-2 text-center text-slate-500 border-r border-slate-100 flex items-center justify-center gap-1">
            <XCircle size={14} className="text-red-400" /> {bad}
        </div>
        <div className="py-4 px-2 text-center font-bold text-[#1A2A44] bg-green-50/50 flex items-center justify-center gap-1">
            <CheckCircle2 size={14} className="text-green-500" /> {good}
        </div>
    </div>
);

const InterimCTA = ({ text, subtext, onClick, color = "green" }) => {
    const bgColors = {
        red: "bg-red-600 hover:bg-red-700 shadow-red-500/30",
        green: "bg-[#10B981] hover:bg-[#059669] shadow-green-500/30",
        blue: "bg-blue-600 hover:bg-blue-700 shadow-blue-500/30",
    };

    return (
        <button 
            onClick={onClick}
            className={`w-full ${bgColors[color]} text-white py-4 rounded-xl shadow-lg transform transition-all active:scale-[0.98] group mt-6 relative overflow-hidden`}
        >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex flex-col items-center justify-center relative z-10">
                <span className="text-lg font-black flex items-center gap-2 uppercase tracking-tight">
                   {text} <ArrowRight size={20} />
                </span>
                <span className="text-xs font-medium text-white/90 opacity-90">
                    {subtext}
                </span>
            </div>
        </button>
    )
}

const FeatureItemLight = ({ icon, title, desc }) => (
    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-[#FFC107] transition-colors">
        <div className="shrink-0 mt-1">
            {icon}
        </div>
        <div>
            <h4 className="font-bold text-[#1A2A44] text-sm mb-1">{title}</h4>
            <p className="text-xs text-slate-600 leading-relaxed">{desc}</p>
        </div>
    </div>
);

const PremiumBonusCardLight = ({ icon, title, desc, price }) => (
  <div className="flex gap-4 bg-white p-4 rounded-xl border border-slate-200 items-center relative overflow-hidden group shadow-sm">
     <div className="bg-[#1A2A44] p-3 rounded-lg border border-slate-100 text-[#FFC107] shadow-md shrink-0 z-10">
        {icon}
     </div>
     <div className="z-10 flex-1">
        <h3 className="font-bold text-[#1A2A44] text-sm mb-1">{title}</h3>
        <p className="text-[11px] text-slate-500 leading-tight mb-2">{desc}</p>
        <div className="flex items-center gap-2">
            <span className="text-[10px] bg-red-100 text-red-500 px-2 py-0.5 rounded line-through">R$ {price}</span>
            <span className="text-[10px] text-[#10B981] font-bold">GRÁTIS HOJE</span>
        </div>
     </div>
  </div>
);

const TestimonialCard = ({ name, role, text }) => (
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
