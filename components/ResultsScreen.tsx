import React, { useState, useEffect, useRef } from 'react';

export function ResultsScreen() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Olá! 👷‍♂️ Sou o Zé. Posso analisar seu orçamento agora?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const ZE_IMAGE_SRC = "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Construction%20Worker.png";

  // Carrega apenas os ícones, o CSS agora é nativo
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
    <div className="antialiased font-sans w-full h-screen overflow-y-auto bg-[#020617] text-[#F8FAFC]">
      
      {/* Estilos manuais apenas para animações e scrollbar */}
      <style>{`
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #020617; }
        ::-webkit-scrollbar-thumb { background: #334155; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #d97706; }
        .glass-panel { background: rgba(15, 23, 42, 0.6); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.08); }
        .text-glow { text-shadow: 0 0 40px rgba(217, 119, 6, 0.5); }
        .logo-tilt { transform: rotate(6deg); }
        
        /* Animações simples */
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        .animate-float { animation: float 6s ease-in-out infinite; }
        
        @keyframes pulse-slow { 0%, 100% { opacity: 1; } 50% { opacity: 0.6; } }
        .animate-pulse-slow { animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
      `}</style>

      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 transition-all duration-300 glass-panel border-b border-white/5 bg-[#020617]/90 shadow-xl">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => scrollToSection('topo')}>
            <div className="w-12 h-12 bg-[#d97706] rounded-2xl logo-tilt flex items-center justify-center shadow-lg shadow-[#d97706]/20 transition-transform group-hover:scale-110">
              <i data-lucide="hard-hat" className="text-white w-7 h-7"></i>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-none tracking-tight text-white">MÃOS DA<br />OBRA</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#funciona" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">Como funciona</a>
            <a href="#depoimentos" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">Resultados</a>
            <button onClick={() => scrollToSection('precos')} className="bg-gradient-to-r from-[#d97706] to-[#f59e0b] text-white font-bold px-6 py-2.5 rounded-full text-sm uppercase tracking-wide hover:-translate-y-0.5 transition-transform shadow-lg shadow-[#d97706]/30">
              Começar Agora
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="topo" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Gradients (Hardcoded Colors) */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(217, 119, 6, 0.15) 0%, rgba(2,6,23,0) 70%)' }}></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-fade-in-up">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Mais de 15.000 Obras Gerenciadas</span>
          </div>

          <h1 className="font-bold text-4xl md:text-7xl lg:text-8xl leading-tight mb-8 tracking-tight animate-fade-in-up">
            Pare de Jogar<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#d97706] text-glow">Dinheiro no Lixo.</span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 font-light leading-relaxed animate-fade-in-up">
            A primeira Inteligência Artificial que gerencia sua obra 24h por dia. 
            Economize até <span className="text-white font-bold border-b border-[#d97706]">30% do orçamento</span> sem precisar entender de construção.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up">
            <button onClick={() => scrollToSection('precos')} className="w-full md:w-auto bg-gradient-to-r from-[#d97706] to-[#f59e0b] text-white px-8 py-4 rounded-xl text-lg font-bold shadow-2xl flex items-center justify-center gap-3 hover:-translate-y-1 transition-transform">
              QUERO ECONOMIZAR AGORA
              <i data-lucide="arrow-right" className="w-5 h-5"></i>
            </button>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <i data-lucide="shield-check" className="w-4 h-4 text-[#d97706]"></i>
              Garantia Blindada de 30 Dias
            </div>
          </div>

          {/* MOCKUP VISUAL */}
          <div className="relative max-w-5xl mx-auto mt-12 animate-fade-in-up">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#d97706] to-purple-600 rounded-2xl blur opacity-20"></div>
            <div className="relative bg-[#0F172A] border border-white/10 rounded-2xl shadow-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9] flex items-center justify-center">
              
              {/* Alert Floating */}
              <div className="absolute left-10 top-10 md:block hidden animate-float">
                <div className="bg-gray-800/80 backdrop-blur border border-white/10 p-4 rounded-xl flex items-center gap-4 shadow-xl">
                  <div className="bg-red-500/20 p-2 rounded-lg"><i data-lucide="alert-triangle" className="text-red-500 w-6 h-6"></i></div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold">Alerta de Preço</p>
                    <p className="text-white text-sm">Cimento 20% acima da tabela!</p>
                  </div>
                </div>
              </div>

              {/* Success Floating */}
              <div className="absolute right-10 bottom-10 md:block hidden animate-float" style={{ animationDelay: '2s' }}>
                <div className="bg-gray-800/80 backdrop-blur border border-white/10 p-4 rounded-xl flex items-center gap-4 shadow-xl">
                  <div className="bg-green-500/20 p-2 rounded-lg"><i data-lucide="check-circle-2" className="text-green-500 w-6 h-6"></i></div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold">Economia Gerada</p>
                    <p className="text-white text-sm font-bold">R$ 3.450,00 hoje</p>
                  </div>
                </div>
              </div>

              {/* Phone Mockup */}
              <div className="w-[280px] h-[550px] bg-black border-[8px] border-gray-800 rounded-[40px] shadow-2xl relative overflow-hidden transform md:scale-110">
                <div className="absolute top-0 w-full h-full bg-gray-50 flex flex-col">
                  <div className="bg-[#020617] p-6 pt-10 text-white pb-8 rounded-b-3xl">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-[#d97706] rounded-lg logo-tilt flex items-center justify-center">
                          <i data-lucide="hard-hat" className="w-4 h-4 text-white"></i>
                        </div>
                        <span className="font-bold">Mãos da Obra</span>
                      </div>
                      <i data-lucide="bell" className="w-5 h-5 text-[#d97706]"></i>
                    </div>
                    <p className="text-gray-400 text-xs">Saldo Disponível</p>
                    <p className="text-2xl font-bold">R$ 45.200,00</p>
                  </div>
                  
                  <div className="flex-1 p-4 space-y-4 bg-gray-100 overflow-hidden relative">
                    <div className="flex gap-2 justify-end">
                      <div className="bg-[#d97706] text-white p-3 rounded-2xl rounded-tr-none shadow-sm text-xs max-w-[80%]">
                        Zé, o pedreiro pediu 50 sacos de cimento pra laje. Tá certo isso?
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <img src={ZE_IMAGE_SRC} className="w-8 h-8 rounded-full bg-gray-200 border border-gray-300 p-0.5 object-cover" alt="Zé" />
                      <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-xs text-gray-700 max-w-[80%]">
                        Pela metragem que cadastramos, 42 sacos são suficientes.
                        <br /><br /><strong>Economia estimada: R$ 280,00.</strong>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#020617] px-6 py-3 rounded-full text-white text-xs font-bold shadow-lg flex items-center gap-2">
                    <i data-lucide="mic" className="w-4 h-4 text-[#d97706]"></i> Falar com Zé
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="py-24 bg-[#0F172A] relative border-y border-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Construir sem gestão é pedir para <span className="text-[#EF4444]">ser enganado.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <div className="bg-white/5 border border-white/5 p-8 rounded-3xl hover:bg-white/10 transition-colors group">
              <div className="w-14 h-14 bg-[#EF4444]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i data-lucide="trending-up" className="w-8 h-8 text-[#EF4444]"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Estouro de Orçamento</h3>
              <p className="text-gray-400">Pequenos desperdícios diários somam milhares de reais no final.</p>
            </div>
            
            <div className="bg-white/5 border border-white/5 p-8 rounded-3xl hover:bg-white/10 transition-colors group">
              <div className="w-14 h-14 bg-[#EF4444]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i data-lucide="calendar-off" className="w-8 h-8 text-[#EF4444]"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Obras Eternas</h3>
              <p className="text-gray-400">Cronogramas que nunca são cumpridos e a mudança que sempre atrasa.</p>
            </div>

            <div className="bg-white/5 border border-white/5 p-8 rounded-3xl hover:bg-white/10 transition-colors group">
              <div className="w-14 h-14 bg-[#EF4444]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i data-lucide="ghost" className="w-8 h-8 text-[#EF4444]"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Desvios e Roubos</h3>
              <p className="text-gray-400">Sem controle de estoque, materiais somem e você continua comprando.</p>
            </div>
          </div>
          
          <div className="text-center">
            <button onClick={() => scrollToSection('precos')} className="bg-gradient-to-r from-[#d97706] to-[#f59e0b] text-white px-8 py-4 rounded-xl text-lg font-bold shadow-2xl hover:scale-105 transition-transform inline-flex items-center gap-2">
              QUERO ACABAR COM O PREJUÍZO HOJE
              <i data-lucide="arrow-down" className="w-5 h-5"></i>
            </button>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-24 bg-[#020617] relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Assuma o Controle Total.<br />
              <span className="text-[#d97706]">Sem dor de cabeça. Sem papelada.</span>
            </h2>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="glass-panel p-6 rounded-2xl border-[#d97706]/10 hover:border-[#d97706]/50 transition-colors">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <i data-lucide="calendar-clock" className="w-6 h-6 text-blue-400"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Sem Atrasos</h3>
              <p className="text-sm text-gray-400">Sua obra em dia. Saiba se o serviço está andando.</p>
            </div>
            
            <div className="glass-panel p-6 rounded-2xl border-[#d97706]/10 hover:border-[#d97706]/50 transition-colors">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <i data-lucide="shopping-cart" className="w-6 h-6 text-green-400"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Lista de Compras</h3>
              <p className="text-sm text-gray-400">O app monta a lista. Você só encaminha para o depósito.</p>
            </div>
  
            <div className="glass-panel p-6 rounded-2xl border-[#d97706]/10 hover:border-[#d97706]/50 transition-colors">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <i data-lucide="pie-chart" className="w-6 h-6 text-purple-400"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Controle Financeiro</h3>
              <p className="text-sm text-gray-400">Saiba exatamente para onde seu dinheiro foi. Centavo por centavo.</p>
            </div>
  
            <div className="glass-panel p-6 rounded-2xl border-[#d97706]/10 hover:border-[#d97706]/50 transition-colors">
              <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-4">
                <i data-lucide="folder-heart" className="w-6 h-6 text-pink-400"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Adeus Papelada</h3>
              <p className="text-sm text-gray-400">Projetos, recibos e contratos guardados no seu bolso.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ZÉ DA OBRA FEATURE */}
      <section id="funciona" className="py-24 relative bg-[#0F172A]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">
            <div className="flex-1">
              <div className="inline-block px-4 py-1 rounded-full bg-[#d97706]/10 border border-[#d97706]/20 text-[#d97706] font-bold text-xs uppercase tracking-widest mb-6">
                Diferencial Exclusivo
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Conheça o Zé da Obra <br /><span className="text-[#d97706]">Sua IA 24 horas.</span></h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Além de todas as ferramentas de gestão, você tem um <strong>Engenheiro Digital</strong> no bolso. O Zé analisa seus orçamentos e impede que você seja enganado.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#10B981]/20 flex items-center justify-center"><i data-lucide="shield-check" className="w-5 h-5 text-[#10B981]"></i></div>
                  <span className="text-white font-medium">Validação de Orçamentos</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#10B981]/20 flex items-center justify-center"><i data-lucide="calculator" className="w-5 h-5 text-[#10B981]"></i></div>
                  <span className="text-white font-medium">Cálculo de Materiais em Segundos</span>
                </li>
              </ul>

              <button onClick={() => scrollToSection('precos')} className="bg-gradient-to-r from-[#d97706] to-[#f59e0b] text-white px-6 py-3 rounded-lg text-sm font-bold shadow-lg flex items-center gap-2">
                VER PLANOS DISPONÍVEIS <i data-lucide="arrow-right" className="w-4 h-4"></i>
              </button>
            </div>

            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-[#d97706] blur-[100px] opacity-20"></div>
              <div className="glass-panel p-8 rounded-3xl relative border-[#d97706]/20 border z-10 pt-16">
                <div className="absolute -top-6 right-0 bg-[#d97706] text-white text-xs p-3 rounded-lg rounded-br-none shadow-lg transform rotate-2 max-w-[220px] z-20 font-bold">
                  "Zé, esse orçamento do eletricista tá justo?"
                </div>
                <div className="flex items-start gap-6">
                  <img src={ZE_IMAGE_SRC} className="w-20 h-20 rounded-full border-2 border-[#d97706] bg-[#020617]/50 p-1 object-contain" alt="Zé" />
                  <div className="flex-1">
                    <div className="bg-white/5 p-4 rounded-xl rounded-tl-none border border-white/10 mb-4">
                      <p className="text-sm text-gray-300 italic">"Analisei aqui. Ele cobrou R$ 45,00 no metro do fio que achei por R$ 12,00 na loja. Se você comprar, economiza R$ 890,00."</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BONUS SECTION */}
      <section className="py-20 bg-[#020617] relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#d97706] font-bold tracking-widest uppercase text-sm">Presente Especial</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              Leve <span className="text-red-500 line-through decoration-white/30 text-2xl md:text-3xl mx-2">R$ 897</span> <span className="text-white">em Bônus</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/5 p-6 rounded-2xl border border-[#d97706]/20 hover:border-[#d97706] transition-colors">
              <div className="w-10 h-10 bg-[#d97706]/20 rounded-lg flex items-center justify-center mb-4">
                <i data-lucide="calculator" className="w-5 h-5 text-[#d97706]"></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Calculadora Automática</h3>
              <p className="text-sm text-gray-400">Saiba a quantidade exata de materiais em segundos.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-[#d97706]/20 hover:border-[#d97706] transition-colors">
              <div className="w-10 h-10 bg-[#d97706]/20 rounded-lg flex items-center justify-center mb-4">
                <i data-lucide="file-text" className="w-5 h-5 text-[#d97706]"></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Pacote de Contratos</h3>
              <p className="text-sm text-gray-400">Modelos jurídicos prontos para fechar com segurança.</p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-[#d97706]/20 hover:border-[#d97706] transition-colors">
              <div className="w-10 h-10 bg-[#d97706]/20 rounded-lg flex items-center justify-center mb-4">
                <i data-lucide="clipboard-check" className="w-5 h-5 text-[#d97706]"></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Checklist de Entrega</h3>
              <p className="text-sm text-gray-400">+60 itens para conferir na entrega da obra.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF - FIX FOR MOBILE LAYOUT */}
      <section id="depoimentos" className="py-24 bg-black relative border-y border-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-white">
            Eles confiaram e <span className="text-[#d97706]">Zeraram a Obra.</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0F172A] p-8 rounded-3xl border border-white/10 relative">
              <div className="flex gap-1 text-[#d97706] mb-4">
                {[...Array(5)].map((_, i) => (<i key={i} data-lucide="star" className="w-4 h-4 fill-current"></i>))}
              </div>
              <p className="text-gray-300 mb-6 italic">"Eu não entendo nada de obra. O app me disse exatamente quanto piso comprar. Confiei no app e sobrou dinheiro!"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center font-bold text-white border border-white/20">RM</div>
                <div><p className="text-white font-bold">Ricardo M.</p><p className="text-xs text-gray-500">Reforma de AP</p></div>
              </div>
            </div>
  
             <div className="bg-[#0F172A] p-8 rounded-3xl border border-[#d97706]/30 relative shadow-[0_0_30px_rgba(217,119,6,0.1)] transform md:-translate-y-4">
              <div className="absolute -top-4 right-8 bg-green-500 text-[#020617] text-xs font-bold px-3 py-1 rounded-full shadow-lg">Economizou R$ 12.000</div>
              <div className="flex gap-1 text-[#d97706] mb-4">
                {[...Array(5)].map((_, i) => (<i key={i} data-lucide="star" className="w-4 h-4 fill-current"></i>))}
              </div>
              <p className="text-gray-300 mb-6 italic">"O Zé da Obra é surreal. Mandei a foto do orçamento da loja e ele achou preços 30% menores. Pagou a assinatura vitalícia no primeiro dia."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center font-bold text-white border border-white/20">AL</div>
                <div><p className="text-white font-bold">Ana Luiza</p><p className="text-xs text-gray-500">Casa Térrea</p></div>
              </div>
            </div>
  
             <div className="bg-[#0F172A] p-8 rounded-3xl border border-white/10 relative">
              <div className="flex gap-1 text-[#d97706] mb-4">
                {[...Array(5)].map((_, i) => (<i key={i} data-lucide="star" className="w-4 h-4 fill-current"></i>))}
              </div>
              <p className="text-gray-300 mb-6 italic">"A melhor parte é centralizar tudo. Antes eu perdia notas fiscais. Agora tenho controle total financeiro."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center font-bold text-white border border-white/20">CJ</div>
                <div><p className="text-white font-bold">Carlos Jr.</p><p className="text-xs text-gray-500">Construtor</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="precos" className="py-24 bg-[#020617] relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Quanto vale a sua <br /><span className="text-[#d97706]">Paz de Espírito?</span></h2>
            <p className="text-gray-400 text-lg">Um erro na obra custa R$ 2.000. O app custa uma fração disso.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-center">
            
            {/* Mensal */}
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
              <h3 className="text-lg font-medium text-gray-300">Mensal</h3>
              <div className="my-4">
                <span className="text-3xl font-bold text-white">R$ 29,90</span><span className="text-gray-500">/mês</span>
              </div>
              <a href="https://maos-da-obra-2-0.vercel.app/login?plan=mensal" className="block w-full text-center py-3 rounded-xl border border-white/20 text-white hover:bg-white/5 transition-colors font-semibold">Escolher Mensal</a>
              <div className="mt-6 space-y-3">
                <p className="text-sm text-gray-400 flex gap-2"><i data-lucide="check" className="w-4 h-4 text-gray-500"></i> Gestão Básica</p>
                <p className="text-sm text-gray-400 flex gap-2"><i data-lucide="x" className="w-4 h-4 text-red-500"></i> Sem IA Zé da Obra</p>
              </div>
            </div>

            {/* Semestral */}
            <div className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
              <h3 className="text-lg font-medium text-gray-300">Semestral</h3>
              <div className="my-4">
                <span className="text-3xl font-bold text-white">R$ 97,00</span><span className="text-gray-500">/total</span>
              </div>
              <a href="https://maos-da-obra-2-0.vercel.app/login?plan=semestral" className="block w-full text-center py-3 rounded-xl border border-white/20 text-white hover:bg-white/5 transition-colors font-semibold">Escolher Semestral</a>
              <div className="mt-6 space-y-3">
                <p className="text-sm text-gray-400 flex gap-2"><i data-lucide="check" className="w-4 h-4 text-gray-500"></i> Gestão Completa</p>
                <p className="text-sm text-gray-400 flex gap-2"><i data-lucide="x" className="w-4 h-4 text-red-500"></i> Sem IA Zé da Obra</p>
              </div>
            </div>

            {/* Vitalício */}
            <div className="bg-gradient-to-b from-gray-900 to-black rounded-[2rem] p-8 border-2 border-[#d97706] shadow-[0_0_50px_rgba(217,119,6,0.3)] relative transform md:scale-110 z-20">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#d97706] text-[#020617] px-6 py-2 rounded-full font-bold text-sm shadow-lg tracking-wider uppercase flex items-center gap-2 whitespace-nowrap">
                <i data-lucide="crown" className="w-4 h-4 fill-[#020617]"></i> Oferta Limitada
              </div>

              <h3 className="text-xl font-bold text-[#d97706] text-center">ACESSO VITALÍCIO</h3>
              <div className="my-6 text-center">
                <span className="text-gray-500 line-through text-lg">R$ 997,00</span>
                <div className="text-6xl font-bold text-white tracking-tighter">R$ 247</div>
                <span className="text-green-500 font-bold text-sm bg-green-500/10 px-2 py-1 rounded mt-2 inline-block">Pagamento Único</span>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="bg-[#d97706]/20 p-1.5 rounded-full"><i data-lucide="check" className="w-4 h-4 text-[#d97706]"></i></div>
                  <span className="text-gray-200 font-medium">Acesso para SEMPRE</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#d97706]/20 p-1.5 rounded-full"><i data-lucide="check" className="w-4 h-4 text-[#d97706]"></i></div>
                  <span className="text-gray-200 font-medium"><strong>IA Zé da Obra ILIMITADA</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#d97706]/20 p-1.5 rounded-full"><i data-lucide="gift" className="w-4 h-4 text-[#d97706]"></i></div>
                  <span className="text-gray-200 font-bold text-[#d97706]">+ R$ 897 em Bônus (GRÁTIS)</span>
                </div>
              </div>

              <a href="https://maos-da-obra-2-0.vercel.app/login?plan=vitalicio" className="bg-gradient-to-r from-[#d97706] to-[#f59e0b] text-white w-full py-5 rounded-xl text-lg shadow-xl mb-4 flex items-center justify-center gap-2 animate-pulse-slow font-bold">
                GARANTIR OFERTA AGORA
                <i data-lucide="lock" className="w-5 h-5"></i>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-12 border-t border-white/10 text-sm">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} Mãos da Obra Tecnologia.</p>
        </div>
      </footer>

      {/* MOBILE STICKY CTA */}
      <div className="md:hidden fixed bottom-0 w-full bg-[#0F172A] border-t border-white/10 p-4 z-50 flex items-center justify-between shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <div>
          <p className="text-white font-bold text-lg">A partir de <span className="text-[#d97706]">R$ 29,90</span></p>
        </div>
        <button onClick={() => scrollToSection('precos')} className="bg-[#d97706] text-white px-6 py-3 rounded-lg text-sm shadow-lg font-bold">
          Garantir Agora
        </button>
      </div>

      {/* CHAT WIDGET */}
      {!isChatOpen ? (
        <button 
          onClick={() => setIsChatOpen(true)} 
          className="fixed bottom-24 md:bottom-8 right-4 z-40 bg-[#d97706] hover:bg-[#b45309] text-white p-4 rounded-full shadow-[0_0_20px_rgba(217,119,6,0.5)] transition-all hover:scale-110 active:scale-95 group border-4 border-white/10"
        >
          <span className="absolute top-0 right-0 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <i data-lucide="message-square" className="w-7 h-7 fill-current"></i>
        </button>
      ) : (
        <div className="fixed bottom-24 md:bottom-24 right-4 w-[90vw] md:w-[360px] bg-[#0F172A] rounded-3xl shadow-2xl border border-white/10 z-50 overflow-hidden flex flex-col h-[500px]">
          <div className="bg-gradient-to-r from-[#d97706] to-[#b45309] p-4 flex justify-between items-center shadow-md z-10">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img src={ZE_IMAGE_SRC} className="w-10 h-10 rounded-full border-2 border-white bg-[#020617]/50 p-1 object-cover" alt="Zé" />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#d97706] rounded-full"></div>
              </div>
              <div><h4 className="font-bold text-white text-sm">Zé da Obra</h4><p className="text-[10px] text-white/80 font-medium">Online agora</p></div>
            </div>
            <button onClick={() => setIsChatOpen(false)} className="text-white/80 hover:text-white"><i data-lucide="x" className="w-5 h-5"></i></button>
          </div>
          
          <div className="flex-1 bg-[#020617] p-5 space-y-4 overflow-y-auto">
            {messages.map((msg, idx) => (
               msg.sender === 'user' ? (
                <div key={idx} className="flex justify-end">
                  <div className="bg-[#d97706] text-white rounded-2xl rounded-tr-sm p-3 max-w-[85%] text-sm shadow-sm">
                    <p>{msg.text}</p>
                  </div>
                </div>
               ) : (
                <div key={idx} className="flex justify-start">
                  <div className="flex items-end gap-2 max-w-[90%]">
                    <img src={ZE_IMAGE_SRC} className="w-8 h-8 rounded-full border border-gray-600 mb-1 bg-[#020617]/50 p-0.5 object-cover" alt="Zé" />
                    <div className="bg-gray-800 text-gray-200 rounded-2xl rounded-tl-sm p-3 text-sm shadow-md border border-white/10">
                      <p className="font-bold text-[#d97706] mb-1 text-xs uppercase tracking-wide">Zé da Obra:</p>
                      <p>{msg.text}</p>
                    </div>
                  </div>
                </div>
               )
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 bg-[#0F172A] border-t border-white/10 flex gap-2">
            <input 
              type="text" 
              placeholder="Digite aqui..." 
              className="flex-1 bg-[#020617] rounded-full h-10 px-4 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#d97706] border border-white/10"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => { if(e.key === 'Enter') handleSendMessage() }}
            />
            <button onClick={handleSendMessage} className="w-10 h-10 bg-[#d97706] hover:bg-[#b45309] rounded-full flex items-center justify-center text-white transition-colors">
              <i data-lucide="send" className="w-4 h-4 ml-0.5"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
