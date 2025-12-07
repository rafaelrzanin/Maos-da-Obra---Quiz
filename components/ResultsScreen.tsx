import React, { useState, useEffect, useRef } from 'react';

export function ResultsScreen() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Olá! 👷‍♂️ Sou o Zé. Posso analisar seu orçamento agora?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const ZE_IMAGE_SRC = "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Construction%20Worker.png";

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://unpkg.com/lucide@latest";
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      if (window.lucide) window.lucide.createIcons();
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // @ts-ignore
    if (window.lucide) window.lucide.createIcons();
    scrollToBottom();
  }, [isChatOpen, messages]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    const newMsgs = [...messages, { text: inputValue, sender: 'user' }];
    setMessages(newMsgs);
    setInputValue("");
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "Para te dar essa resposta com precisão técnica e economizar seu dinheiro, eu preciso que você ative o plano Vitalício. Está com um preço incrível hoje!",
        sender: 'bot'
      }]);
    }, 1000);
  };

  return (
    // WRAPPER PRINCIPAL: Força a largura máxima ser 100% do pai e controla o scroll
    <div className="antialiased font-sans w-full h-screen overflow-y-auto overflow-x-hidden bg-[#020617] text-[#F8FAFC] relative">
      
      <style>{`
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #020617; }
        ::-webkit-scrollbar-thumb { background: #334155; border-radius: 4px; }
        .glass-panel { background: rgba(15, 23, 42, 0.85); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border-bottom: 1px solid rgba(255, 255, 255, 0.08); }
        .text-glow { text-shadow: 0 0 30px rgba(217, 119, 6, 0.6); }
        .logo-tilt { transform: rotate(6deg); }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        @keyframes pulse-slow { 0%, 100% { opacity: 1; } 50% { opacity: 0.6; } }
        .animate-pulse-slow { animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
      `}</style>

      {/* HEADER: Agora é STICKY para ficar dentro da largura do app */}
      <header className="sticky top-0 z-50 w-full glass-panel shadow-lg">
        <div className="w-full px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('topo')}>
            <div className="w-10 h-10 bg-[#d97706] rounded-xl logo-tilt flex items-center justify-center shadow-lg">
              <i data-lucide="hard-hat" className="text-white w-6 h-6"></i>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none tracking-tight text-white">MÃOS DA<br />OBRA</span>
            </div>
          </div>
          
          {/* Botão Mobile Simplificado */}
          <button onClick={() => scrollToSection('precos')} className="bg-[#d97706] text-white font-bold px-4 py-2 rounded-full text-xs uppercase tracking-wide shadow-md">
            Começar
          </button>
        </div>
      </header>

      {/* CONTEÚDO: Tudo usa w-full e px-4 para não estourar lateralmente */}
      
      {/* HERO */}
      <section id="topo" className="relative pt-12 pb-16 overflow-hidden w-full px-4">
        {/* Background seguro */}
        <div className="absolute inset-0 pointer-events-none opacity-40" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(217, 119, 6, 0.2) 0%, rgba(2,6,23,0) 80%)' }}></div>
        
        <div className="relative z-10 flex flex-col items-center text-center w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 animate-fade-in-up">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-semibold text-gray-300 uppercase tracking-wider">Mais de 15.000 Obras</span>
          </div>

          <h1 className="font-bold text-4xl leading-tight mb-6 animate-fade-in-up w-full break-words">
            Pare de Jogar<br />
            <span className="text-[#d97706] text-glow">Dinheiro Fora.</span>
          </h1>

          <p className="text-base text-gray-400 max-w-sm mx-auto mb-8 font-light leading-relaxed animate-fade-in-up">
            A primeira IA que gerencia sua obra. 
            Economize até <span className="text-white font-bold border-b border-[#d97706]">30% do orçamento</span>.
          </p>

          <button onClick={() => scrollToSection('precos')} className="w-full max-w-xs bg-gradient-to-r from-[#d97706] to-[#f59e0b] text-white px-6 py-4 rounded-xl text-lg font-bold shadow-xl flex items-center justify-center gap-2 mb-4 animate-fade-in-up">
            QUERO ECONOMIZAR
            <i data-lucide="arrow-right" className="w-5 h-5"></i>
          </button>

          {/* MOCKUP (Ajustado para caber na tela) */}
          <div className="relative w-full max-w-sm mt-8 animate-fade-in-up">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#d97706] to-purple-600 rounded-2xl blur opacity-20"></div>
            <div className="relative bg-[#0F172A] border border-white/10 rounded-2xl shadow-2xl p-2">
              {/* Celular */}
              <div className="bg-black border-[4px] border-gray-800 rounded-[24px] shadow-lg overflow-hidden relative aspect-[9/18] w-full">
                 <div className="absolute top-0 w-full h-full bg-gray-50 flex flex-col">
                    <div className="bg-[#020617] p-4 pt-8 text-white pb-6 rounded-b-2xl">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-sm">Mãos da Obra</span>
                        <i data-lucide="bell" className="w-4 h-4 text-[#d97706]"></i>
                      </div>
                      <p className="text-gray-400 text-[10px]">Saldo Disponível</p>
                      <p className="text-xl font-bold">R$ 45.200</p>
                    </div>
                    
                    <div className="flex-1 p-3 space-y-3 bg-gray-100 overflow-hidden relative">
                       <div className="flex gap-2 justify-end">
                          <div className="bg-[#d97706] text-white p-2 rounded-xl rounded-tr-none shadow-sm text-[10px] max-w-[85%]">
                            Zé, 50 sacos de cimento tá certo?
                          </div>
                       </div>
                       <div className="flex gap-2">
                          <img src={ZE_IMAGE_SRC} className="w-6 h-6 rounded-full bg-gray-200 border border-gray-300 p-0.5" alt="Zé" />
                          <div className="bg-white p-2 rounded-xl rounded-tl-none shadow-sm text-[10px] text-gray-700 max-w-[85%]">
                             42 sacos são suficientes. Economia: R$ 280,00.
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN POINTS (Grid 1 coluna forçado) */}
      <section className="py-16 bg-[#0F172A] w-full px-4 border-y border-white/5">
        <h2 className="text-2xl font-bold text-center mb-10 w-full">
          Sem gestão você é <span className="text-[#EF4444]">enganado.</span>
        </h2>

        <div className="flex flex-col gap-6 w-full">
          <div className="bg-white/5 border border-white/5 p-6 rounded-2xl">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 bg-[#EF4444]/20 rounded-lg flex items-center justify-center">
                <i data-lucide="trending-up" className="w-5 h-5 text-[#EF4444]"></i>
              </div>
              <h3 className="text-lg font-bold text-white">Prejuízo</h3>
            </div>
            <p className="text-sm text-gray-400">Pequenos desperdícios somam milhares de reais no final.</p>
          </div>
          
          <div className="bg-white/5 border border-white/5 p-6 rounded-2xl">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 bg-[#EF4444]/20 rounded-lg flex items-center justify-center">
                <i data-lucide="calendar-off" className="w-5 h-5 text-[#EF4444]"></i>
              </div>
              <h3 className="text-lg font-bold text-white">Atrasos</h3>
            </div>
            <p className="text-sm text-gray-400">Cronogramas que nunca são cumpridos.</p>
          </div>
        </div>
      </section>

      {/* SOLUTIONS (Grid 1 coluna) */}
      <section className="py-16 bg-[#020617] w-full px-4">
        <h2 className="text-2xl font-bold text-center mb-10 text-white w-full">
          Controle Total.<br /><span className="text-[#d97706]">Sem dor de cabeça.</span>
        </h2>

        <div className="flex flex-col gap-4 w-full">
          <div className="bg-[#0F172A]/60 p-5 rounded-xl border border-white/5 flex items-center gap-4">
             <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <i data-lucide="calendar-clock" className="w-5 h-5 text-blue-400"></i>
             </div>
             <div>
               <h3 className="font-bold text-white">Sem Atrasos</h3>
               <p className="text-xs text-gray-400">Saiba se o serviço está andando.</p>
             </div>
          </div>
          
          <div className="bg-[#0F172A]/60 p-5 rounded-xl border border-white/5 flex items-center gap-4">
             <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <i data-lucide="shopping-cart" className="w-5 h-5 text-green-400"></i>
             </div>
             <div>
               <h3 className="font-bold text-white">Lista de Compras</h3>
               <p className="text-xs text-gray-400">O app monta a lista automaticamente.</p>
             </div>
          </div>

           <div className="bg-[#0F172A]/60 p-5 rounded-xl border border-white/5 flex items-center gap-4">
             <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <i data-lucide="pie-chart" className="w-5 h-5 text-purple-400"></i>
             </div>
             <div>
               <h3 className="font-bold text-white">Financeiro</h3>
               <p className="text-xs text-gray-400">Controle centavo por centavo.</p>
             </div>
          </div>
        </div>
      </section>

      {/* ZE DA OBRA (Adaptado Mobile) */}
      <section id="funciona" className="py-16 bg-[#0F172A] w-full px-4">
          <div className="inline-block px-3 py-1 rounded-full bg-[#d97706]/10 border border-[#d97706]/20 text-[#d97706] font-bold text-[10px] uppercase tracking-widest mb-4">
            Diferencial Exclusivo
          </div>
          <h2 className="text-3xl font-bold mb-4">O Zé da Obra <br /><span className="text-[#d97706]">Sua IA 24 horas.</span></h2>
          <p className="text-gray-400 text-sm mb-8">
            Um <strong>Engenheiro Digital</strong> no bolso. O Zé analisa orçamentos e impede que você seja enganado.
          </p>
          
          <div className="bg-[#020617] border border-[#d97706]/30 p-6 rounded-2xl relative mb-8">
             <div className="absolute -top-3 -right-2 bg-[#d97706] text-white text-[10px] px-2 py-1 rounded shadow transform rotate-3 font-bold">
                  "Zé, tá caro?"
             </div>
             <div className="flex gap-4">
                <img src={ZE_IMAGE_SRC} className="w-12 h-12 rounded-full border-2 border-[#d97706] bg-[#020617] p-1 object-cover" alt="Zé" />
                <div className="bg-white/10 p-3 rounded-xl rounded-tl-none text-xs text-gray-300">
                   "O eletricista cobrou R$ 45 no fio. Na loja da esquina tá R$ 12. <strong>Você economiza R$ 890 comprando direto.</strong>"
                </div>
             </div>
          </div>
      </section>

      {/* BONUS */}
      <section className="py-16 bg-[#020617] w-full px-4">
        <div className="text-center mb-10">
          <span className="text-[#d97706] font-bold tracking-widest uppercase text-xs">Presente</span>
          <h2 className="text-2xl font-bold text-white mt-1">
            Leve R$ 897 em Bônus
          </h2>
        </div>

        <div className="flex flex-col gap-4">
           <div className="bg-white/5 p-4 rounded-xl border border-[#d97706]/20 flex items-center gap-3">
              <i data-lucide="calculator" className="text-[#d97706] w-5 h-5"></i>
              <div>
                <h3 className="font-bold text-white text-sm">Calculadora Automática</h3>
                <p className="text-xs text-gray-400">Quantidade exata de materiais.</p>
              </div>
           </div>
           <div className="bg-white/5 p-4 rounded-xl border border-[#d97706]/20 flex items-center gap-3">
              <i data-lucide="file-text" className="text-[#d97706] w-5 h-5"></i>
              <div>
                <h3 className="font-bold text-white text-sm">Pacote de Contratos</h3>
                <p className="text-xs text-gray-400">Segurança jurídica pronta.</p>
              </div>
           </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="py-16 bg-black w-full px-4 border-t border-white/5">
        <h2 className="text-2xl font-bold text-center mb-10 text-white">
          Quem usou, <span className="text-[#d97706]">Aprovou.</span>
        </h2>
        
        <div className="flex flex-col gap-6">
           <div className="bg-[#0F172A] p-6 rounded-2xl border border-white/10">
            <div className="flex gap-1 text-[#d97706] mb-2">
              {[...Array(5)].map((_, i) => (<i key={i} data-lucide="star" className="w-3 h-3 fill-current"></i>))}
            </div>
            <p className="text-gray-300 text-sm mb-4 italic">"Eu não entendo nada de obra. O app me disse exatamente quanto piso comprar. Sobrou dinheiro!"</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center font-bold text-white text-xs">RM</div>
              <div><p className="text-white font-bold text-sm">Ricardo M.</p></div>
            </div>
          </div>

           <div className="bg-[#0F172A] p-6 rounded-2xl border border-[#d97706]/30 relative shadow-[0_0_15px_rgba(217,119,6,0.1)]">
            <div className="absolute -top-3 right-4 bg-green-500 text-[#020617] text-[10px] font-bold px-2 py-0.5 rounded-full">Economizou R$ 12k</div>
            <div className="flex gap-1 text-[#d97706] mb-2">
              {[...Array(5)].map((_, i) => (<i key={i} data-lucide="star" className="w-3 h-3 fill-current"></i>))}
            </div>
            <p className="text-gray-300 text-sm mb-4 italic">"O Zé da Obra é surreal. Achou preços 30% menores na minha região em segundos."</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center font-bold text-white text-xs">AL</div>
              <div><p className="text-white font-bold text-sm">Ana Luiza</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="precos" className="py-16 bg-[#020617] w-full px-4 pb-32">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-2">Sua Paz de Espírito</h2>
          <p className="text-gray-400 text-sm">Um erro custa R$ 2.000. O app custa uma fração.</p>
        </div>

        <div className="flex flex-col gap-6 max-w-sm mx-auto">
          
          {/* Mensal */}
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-base font-medium text-gray-300">Mensal</h3>
            <div className="my-2">
              <span className="text-2xl font-bold text-white">R$ 29,90</span><span className="text-gray-500 text-xs">/mês</span>
            </div>
            <a href="https://maos-da-obra-2-0.vercel.app/login?plan=mensal" className="block w-full text-center py-3 rounded-lg border border-white/20 text-white hover:bg-white/5 font-semibold text-sm">Escolher Mensal</a>
            <div className="mt-4 space-y-2">
              <p className="text-xs text-gray-400 flex gap-2"><i data-lucide="check" className="w-3 h-3 text-gray-500"></i> Gestão Básica</p>
              <p className="text-xs text-gray-400 flex gap-2"><i data-lucide="x" className="w-3 h-3 text-red-500"></i> Sem IA Zé da Obra</p>
            </div>
          </div>

          {/* Vitalício */}
          <div className="bg-gradient-to-b from-gray-900 to-black rounded-2xl p-6 border-2 border-[#d97706] shadow-xl relative mt-2">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#d97706] text-[#020617] px-4 py-1 rounded-full font-bold text-[10px] uppercase tracking-wider whitespace-nowrap">
               Oferta Limitada
            </div>

            <h3 className="text-lg font-bold text-[#d97706] text-center mt-2">VITALÍCIO</h3>
            <div className="my-4 text-center">
              <span className="text-gray-500 line-through text-sm">R$ 997,00</span>
              <div className="text-5xl font-bold text-white tracking-tighter">R$ 247</div>
              <span className="text-green-500 font-bold text-[10px] bg-green-500/10 px-2 py-0.5 rounded mt-1 inline-block">Pagamento Único</span>
            </div>

            <div className="space-y-3 mb-6 border-t border-white/10 pt-4">
              <div className="flex items-center gap-2">
                <i data-lucide="check" className="w-4 h-4 text-[#d97706]"></i>
                <span className="text-gray-200 text-sm font-medium">Acesso para SEMPRE</span>
              </div>
              <div className="flex items-center gap-2">
                <i data-lucide="check" className="w-4 h-4 text-[#d97706]"></i>
                <span className="text-gray-200 text-sm font-medium"><strong>IA Zé da Obra ILIMITADA</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <i data-lucide="gift" className="w-4 h-4 text-[#d97706]"></i>
                <span className="text-gray-200 text-sm font-bold text-[#d97706]">+ R$ 897 em Bônus</span>
              </div>
            </div>

            <a href="https://maos-da-obra-2-0.vercel.app/login?plan=vitalicio" className="bg-gradient-to-r from-[#d97706] to-[#f59e0b] text-white w-full py-4 rounded-xl text-lg shadow-lg flex items-center justify-center gap-2 font-bold animate-pulse-slow">
              QUERO VITALÍCIO
              <i data-lucide="lock" className="w-4 h-4"></i>
            </a>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-8 border-t border-white/10 text-xs w-full px-4 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Mãos da Obra Tecnologia.</p>
      </footer>

      {/* MOBILE STICKY CTA */}
      <div className="fixed bottom-0 w-full bg-[#0F172A] border-t border-white/10 p-4 z-40 flex items-center justify-between shadow-2xl safe-area-pb">
        <div>
          <p className="text-white font-bold text-base">A partir de <span className="text-[#d97706]">R$ 29,90</span></p>
        </div>
        <button onClick={() => scrollToSection('precos')} className="bg-[#d97706] text-white px-5 py-2.5 rounded-lg text-sm shadow-lg font-bold">
          Garantir
        </button>
      </div>

      {/* CHAT WIDGET */}
      {!isChatOpen ? (
        <button 
          onClick={() => setIsChatOpen(true)} 
          className="fixed bottom-20 right-4 z-50 bg-[#d97706] text-white p-3 rounded-full shadow-lg border-2 border-white/10"
        >
          <span className="absolute top-0 right-0 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <i data-lucide="message-square" className="w-6 h-6 fill-current"></i>
        </button>
      ) : (
        <div className="fixed bottom-20 right-4 w-[85vw] max-w-[320px] bg-[#0F172A] rounded-2xl shadow-2xl border border-white/10 z-50 overflow-hidden flex flex-col h-[400px]">
          <div className="bg-[#d97706] p-3 flex justify-between items-center shadow-md z-10">
            <div className="flex items-center gap-2">
              <img src={ZE_IMAGE_SRC} className="w-8 h-8 rounded-full border border-white bg-[#020617] p-0.5 object-cover" alt="Zé" />
              <div><h4 className="font-bold text-white text-xs">Zé da Obra</h4><p className="text-[9px] text-white/90">Online</p></div>
            </div>
            <button onClick={() => setIsChatOpen(false)} className="text-white"><i data-lucide="x" className="w-4 h-4"></i></button>
          </div>
          
          <div className="flex-1 bg-[#020617] p-4 space-y-3 overflow-y-auto">
            {messages.map((msg, idx) => (
               msg.sender === 'user' ? (
                <div key={idx} className="flex justify-end">
                  <div className="bg-[#d97706] text-white rounded-xl rounded-tr-none p-2 max-w-[90%] text-xs shadow-sm">
                    <p>{msg.text}</p>
                  </div>
                </div>
               ) : (
                <div key={idx} className="flex justify-start">
                  <div className="flex items-end gap-2 max-w-[90%]">
                    <div className="bg-gray-800 text-gray-200 rounded-xl rounded-tl-none p-2 text-xs shadow-md border border-white/10">
                      <p>{msg.text}</p>
                    </div>
                  </div>
                </div>
               )
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-2 bg-[#0F172A] border-t border-white/10 flex gap-2">
            <input 
              type="text" 
              placeholder="Digite..." 
              className="flex-1 bg-[#020617] rounded-full h-8 px-3 text-xs text-white focus:outline-none border border-white/10"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => { if(e.key === 'Enter') handleSendMessage() }}
            />
            <button onClick={handleSendMessage} className="w-8 h-8 bg-[#d97706] rounded-full flex items-center justify-center text-white">
              <i data-lucide="send" className="w-3 h-3 ml-0.5"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
