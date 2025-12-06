<!DOCTYPE html>
<html lang="pt-BR" class="scroll-smooth">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>MÃOS DA OBRA - A Revolução na Sua Construção</title>
    <meta name="description" content="Controle sua obra pelo celular. A primeira IA que economiza seu dinheiro e evita dores de cabeça. Tão simples quanto o WhatsApp.">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    
    <!-- Tailwind Configuration -->
    <script>
      tailwind.config = {
        darkMode: 'class',
        theme: {
          extend: {
            fontFamily: {
              sans: ['Inter', 'sans-serif'],
              display: ['Space Grotesk', 'sans-serif'],
            },
            colors: {
              brand: {
                gold: '#d97706',       // Laranja Oficial (Basketball Orange)
                goldDark: '#b45309',   // Tom mais escuro para profundidade
                goldLight: '#f59e0b',  // Tom mais claro para iluminação
                dark: '#020617',       // Slate 950 (Fundo Principal)
                darkCard: '#0F172A',   // Slate 900 (Cards)
                accent: '#10B981',     // Verde Sucesso
                error: '#EF4444',      // Vermelho Erro
              }
            },
            animation: {
              'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
              'float': 'float 6s ease-in-out infinite',
              'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              'shine': 'shine 2s linear infinite',
            },
            keyframes: {
              fadeInUp: {
                '0%': { opacity: '0', transform: 'translateY(30px)' },
                '100%': { opacity: '1', transform: 'translateY(0)' },
              },
              float: {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-20px)' },
              },
              shine: {
                '0%': { backgroundPosition: '200% center' },
                '100%': { backgroundPosition: '-200% center' },
              }
            },
            backgroundImage: {
              'hero-glow': 'radial-gradient(circle at 50% 0%, rgba(217, 119, 6, 0.15) 0%, rgba(2,6,23,0) 70%)',
              'gold-gradient': 'linear-gradient(135deg, #d97706 0%, #b45309 100%)',
              'glass': 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
            }
          }
        }
      }
    </script>
    
    <style>
      body {
        font-family: 'Inter', sans-serif;
        background-color: #020617;
        color: #F8FAFC;
        overflow-x: hidden;
      }

      /* Scrollbar */
      ::-webkit-scrollbar { width: 8px; }
      ::-webkit-scrollbar-track { background: #020617; }
      ::-webkit-scrollbar-thumb { background: #334155; border-radius: 4px; }
      ::-webkit-scrollbar-thumb:hover { background: #d97706; }

      /* Utilities */
      .glass-panel {
        background: rgba(15, 23, 42, 0.6);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.08);
      }
      
      .text-glow {
        text-shadow: 0 0 40px rgba(217, 119, 6, 0.5);
      }

      .btn-primary {
        background: linear-gradient(90deg, #d97706 0%, #f59e0b 100%);
        color: white;
        font-weight: 700;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(217, 119, 6, 0.3);
        position: relative;
        overflow: hidden;
      }
      
      .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(217, 119, 6, 0.5);
      }

      .btn-primary::after {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
        transition: 0.5s;
      }
      
      .btn-secondary {
        background: transparent;
        border: 2px solid #d97706;
        color: #d97706;
        font-weight: 700;
        transition: all 0.3s ease;
      }
      
      .btn-secondary:hover {
        background: #d97706;
        color: white;
        box-shadow: 0 0 20px rgba(217, 119, 6, 0.4);
      }
      
      /* Logo Rotation Fix */
      .logo-tilt {
        transform: rotate(6deg);
      }
    </style>
</head>
<body class="antialiased selection:bg-brand-gold selection:text-white">

    <!-- HEADER / NAVBAR -->
    <header class="fixed top-0 w-full z-50 transition-all duration-300 glass-panel border-b-0">
        <div class="container mx-auto px-4 h-20 flex items-center justify-between">
            <!-- LOGO OFICIAL -->
            <div class="flex items-center gap-3 group cursor-pointer" onclick="window.scrollTo({ top: 0, behavior: 'smooth' })">
                <div class="w-12 h-12 bg-brand-gold rounded-2xl logo-tilt flex items-center justify-center shadow-lg shadow-brand-gold/20 transition-transform group-hover:scale-110">
                    <i data-lucide="hard-hat" class="text-white w-7 h-7 fill-white/20"></i>
                </div>
                <div class="flex flex-col">
                    <span class="font-display font-bold text-xl leading-none tracking-tight text-white">MÃOS DA<br>OBRA</span>
                </div>
            </div>

            <!-- CTA Desktop -->
            <div class="hidden md:flex items-center gap-6">
                <a href="#funciona" class="text-gray-400 hover:text-white text-sm font-medium transition-colors">Como funciona</a>
                <a href="#depoimentos" class="text-gray-400 hover:text-white text-sm font-medium transition-colors">Resultados</a>
                <button onclick="scrollToSection('precos')" class="btn-primary px-6 py-2.5 rounded-full text-sm uppercase tracking-wide">
                    Começar Agora
                </button>
            </div>
        </div>
    </header>

    <!-- HERO SECTION -->
    <section class="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <!-- Background Elements -->
        <div class="absolute inset-0 bg-hero-glow pointer-events-none"></div>
        <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)] pointer-events-none"></div>

        <div class="container mx-auto px-4 relative z-10 text-center">
            
            <!-- Aviso de Escassez/Prova -->
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-fade-in-up">
                <span class="flex h-2 w-2 relative">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span class="text-xs font-semibold text-gray-300 uppercase tracking-wider">Mais de 15.000 Obras Gerenciadas</span>
            </div>

            <!-- Headline Principal -->
            <h1 class="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.1] md:leading-[1] mb-8 tracking-tight animate-fade-in-up" style="animation-delay: 0.1s">
                Pare de Jogar<br>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-brand-goldLight to-brand-gold text-glow">Dinheiro no Lixo.</span>
            </h1>

            <!-- Subheadline -->
            <p class="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 font-light leading-relaxed animate-fade-in-up" style="animation-delay: 0.2s">
                A primeira Inteligência Artificial que gerencia sua obra 24h por dia. 
                Economize até <span class="text-white font-bold border-b border-brand-gold">30% do orçamento</span> sem precisar entender de construção.
            </p>

            <!-- CTA Area -->
            <div class="flex flex-col md:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style="animation-delay: 0.3s">
                <button onclick="scrollToSection('precos')" class="btn-primary w-full md:w-auto px-8 py-4 rounded-xl text-lg md:text-xl shadow-2xl flex items-center justify-center gap-3 group">
                    QUERO ECONOMIZAR AGORA
                    <i data-lucide="arrow-right" class="w-5 h-5 group-hover:translate-x-1 transition-transform"></i>
                </button>
                <div class="flex items-center gap-2 text-sm text-gray-400">
                    <i data-lucide="shield-check" class="w-4 h-4 text-brand-gold"></i>
                    Garantia Blindada de 30 Dias
                </div>
            </div>

            <!-- Mockup/Visual -->
            <div class="relative max-w-5xl mx-auto mt-12 animate-fade-in-up" style="animation-delay: 0.5s">
                <div class="absolute -inset-1 bg-gradient-to-r from-brand-gold to-purple-600 rounded-2xl blur opacity-20"></div>
                
                <!-- Interface Simulation -->
                <div class="relative bg-brand-darkCard border border-white/10 rounded-2xl shadow-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9] flex items-center justify-center group">
                    
                    <!-- Floating Elements Simulation -->
                    <div class="absolute left-10 top-10 md:block hidden animate-float">
                        <div class="bg-gray-800/80 backdrop-blur border border-white/10 p-4 rounded-xl flex items-center gap-4 shadow-xl">
                            <div class="bg-red-500/20 p-2 rounded-lg"><i data-lucide="alert-triangle" class="text-red-500 w-6 h-6"></i></div>
                            <div>
                                <p class="text-xs text-gray-400 uppercase font-bold">Alerta de Preço</p>
                                <p class="text-white text-sm">Cimento 20% acima da tabela!</p>
                            </div>
                        </div>
                    </div>

                    <div class="absolute right-10 bottom-10 md:block hidden animate-float" style="animation-delay: 2s">
                        <div class="bg-gray-800/80 backdrop-blur border border-white/10 p-4 rounded-xl flex items-center gap-4 shadow-xl">
                            <div class="bg-green-500/20 p-2 rounded-lg"><i data-lucide="check-circle-2" class="text-green-500 w-6 h-6"></i></div>
                            <div>
                                <p class="text-xs text-gray-400 uppercase font-bold">Economia Gerada</p>
                                <p class="text-white text-sm font-bold">R$ 3.450,00 hoje</p>
                            </div>
                        </div>
                    </div>

                    <!-- Center Phone Mockup (CSS) -->
                    <div class="w-[280px] h-[550px] bg-black border-[8px] border-gray-800 rounded-[40px] shadow-2xl relative overflow-hidden transform md:scale-110">
                        <div class="absolute top-0 w-full h-full bg-gray-50 flex flex-col">
                            <!-- Header App -->
                            <div class="bg-brand-dark p-6 pt-10 text-white pb-8 rounded-b-3xl">
                                <div class="flex justify-between items-center mb-4">
                                    <div class="flex items-center gap-2">
                                        <div class="w-8 h-8 bg-brand-gold rounded-lg logo-tilt flex items-center justify-center">
                                            <i data-lucide="hard-hat" class="w-4 h-4 text-white"></i>
                                        </div>
                                        <span class="font-bold">Mãos da Obra</span>
                                    </div>
                                    <i data-lucide="bell" class="w-5 h-5 text-brand-gold"></i>
                                </div>
                                <p class="text-gray-400 text-xs">Saldo Disponível</p>
                                <p class="text-2xl font-bold">R$ 45.200,00</p>
                            </div>
                            
                            <!-- Chat Area -->
                            <div class="flex-1 p-4 space-y-4 bg-gray-100 overflow-hidden relative">
                                
                                <!-- Msg User (Iniciando) -->
                                <div class="flex gap-2 justify-end">
                                    <div class="bg-brand-gold text-white p-3 rounded-2xl rounded-tr-none shadow-sm text-xs max-w-[80%]">
                                        Zé, o pedreiro pediu 50 sacos de cimento pra laje. Tá certo isso?
                                    </div>
                                </div>

                                <!-- Msg Bot (Respondendo) -->
                                <div class="flex gap-2">
                                    <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Construction%20Worker.png" class="w-8 h-8 rounded-full bg-gray-200/80 border border-gray-300 ze-avatar p-0.5 object-cover">
                                    <div class="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-xs text-gray-700 max-w-[80%]">
                                        Pela metragem que cadastramos, 42 sacos são suficientes. Se comprar 50, vai sobrar e estragar. 
                                        <br><br>
                                        <strong>Economia estimada: R$ 280,00.</strong>
                                        <br>Quer que eu ajuste a lista de compras?
                                    </div>
                                </div>
                                
                                <!-- Msg User -->
                                <div class="flex gap-2 justify-end">
                                    <div class="bg-brand-gold text-white p-3 rounded-2xl rounded-tr-none shadow-sm text-xs max-w-[80%]">
                                        Nossa, sério? Pode ajustar sim!
                                    </div>
                                </div>

                            </div>

                            <!-- Floating Action Button -->
                            <div class="absolute bottom-6 left-1/2 -translate-x-1/2 bg-brand-dark px-6 py-3 rounded-full text-white text-xs font-bold shadow-lg flex items-center gap-2">
                                <i data-lucide="mic" class="w-4 h-4 text-brand-gold"></i> Falar com Zé
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <!-- PAIN POINTS (O INFERNO) -->
    <section class="py-24 bg-brand-darkCard relative border-y border-white/5">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-5xl font-display font-bold text-center mb-16">
                Construir sem gestão é pedir para <span class="text-brand-error">ser enganado.</span>
            </h2>

            <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
                <!-- Pain 1 -->
                <div class="bg-white/5 border border-white/5 p-8 rounded-3xl hover:bg-white/10 transition-colors group">
                    <div class="w-14 h-14 bg-brand-error/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <i data-lucide="trending-up" class="w-8 h-8 text-brand-error"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-4 text-white">Estouro de Orçamento</h3>
                    <p class="text-gray-400 leading-relaxed">Pequenos desperdícios diários somam milhares de reais no final. A "caixinha de surpresas" nunca é boa.</p>
                </div>
                
                <!-- Pain 2 -->
                <div class="bg-white/5 border border-white/5 p-8 rounded-3xl hover:bg-white/10 transition-colors group">
                    <div class="w-14 h-14 bg-brand-error/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <i data-lucide="calendar-off" class="w-8 h-8 text-brand-error"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-4 text-white">Obras Eternas</h3>
                    <p class="text-gray-400 leading-relaxed">Pedreiros que enrolam, materiais que faltam e um cronograma que nunca é cumprido. Sua mudança sempre atrasa.</p>
                </div>

                <!-- Pain 3 -->
                <div class="bg-white/5 border border-white/5 p-8 rounded-3xl hover:bg-white/10 transition-colors group">
                    <div class="w-14 h-14 bg-brand-error/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <i data-lucide="ghost" class="w-8 h-8 text-brand-error"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-4 text-white">Desvios e Roubos</h3>
                    <p class="text-gray-400 leading-relaxed">Sem controle de estoque, você vira refém. Materiais somem e você continua comprando sem saber para onde vai.</p>
                </div>
            </div>
            
            <!-- CTA INTERMEDIÁRIO 1 -->
            <div class="text-center">
                <button onclick="scrollToSection('precos')" class="btn-primary px-8 py-4 rounded-xl text-lg font-bold shadow-2xl hover:scale-105 transition-transform inline-flex items-center gap-2 group">
                    QUERO ACABAR COM O PREJUÍZO HOJE
                    <i data-lucide="arrow-down" class="w-5 h-5 group-hover:translate-y-1 transition-transform"></i>
                </button>
            </div>
        </div>
    </section>

    <!-- NEW SECTION: FULL SOLUTIONS (O CONTROLE TOTAL - SIMPLIFICADO) -->
    <section class="py-24 bg-brand-dark relative overflow-hidden">
        <!-- Background effects -->
        <div class="container mx-auto px-4 relative z-10">
            <div class="text-center max-w-4xl mx-auto mb-16">
                <h2 class="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                    Assuma o Controle Total.<br>
                    <span class="text-brand-gold">Sem dor de cabeça. Sem papelada.</span>
                </h2>
                <p class="text-gray-400 text-lg">
                    Tudo o que você precisa em <strong>um clique</strong>. Esqueça planilhas complicadas.
                </p>
            </div>
    
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <!-- Feature 1: Cronograma -->
                <div class="glass-panel p-6 rounded-2xl border-brand-gold/10 hover:border-brand-gold/50 transition-colors group">
                    <div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <i data-lucide="calendar-clock" class="w-6 h-6 text-blue-400"></i>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-2">Sem Atrasos, Sem Chatice</h3>
                    <p class="text-sm text-gray-400">Sua obra em dia, sem gráficos difíceis. Saiba exatamente se o pedreiro está enrolando ou se o serviço está andando.</p>
                </div>
                
                <!-- Feature 2: Compras/Materiais -->
                <div class="glass-panel p-6 rounded-2xl border-brand-gold/10 hover:border-brand-gold/50 transition-colors group">
                    <div class="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <i data-lucide="shopping-cart" class="w-6 h-6 text-green-400"></i>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-2">Lista de Compras Pronta</h3>
                    <p class="text-sm text-gray-400">O app monta a lista do que falta na obra. Você só encaminha no WhatsApp do depósito. Zero desperdício.</p>
                </div>
    
                <!-- Feature 3: Financeiro -->
                <div class="glass-panel p-6 rounded-2xl border-brand-gold/10 hover:border-brand-gold/50 transition-colors group">
                    <div class="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <i data-lucide="pie-chart" class="w-6 h-6 text-purple-400"></i>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-2">Controle de Cada Centavo</h3>
                    <p class="text-sm text-gray-400">Tenha o controle específico de cada gasto. Organize lançamentos por etapa da obra, material e mão de obra. Saiba exatamente para onde seu dinheiro foi.</p>
                </div>
    
                <!-- Feature 4: Documentos/Fotos -->
                <div class="glass-panel p-6 rounded-2xl border-brand-gold/10 hover:border-brand-gold/50 transition-colors group">
                    <div class="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <i data-lucide="folder-heart" class="w-6 h-6 text-pink-400"></i>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-2">Adeus Papelada</h3>
                    <p class="text-sm text-gray-400">Projetos, recibos e contratos guardados no seu bolso. Nunca mais perca aquele papel importante da obra.</p>
                </div>
            </div>

            <!-- CTA INTERMEDIÁRIO 2 -->
            <div class="text-center">
                <button onclick="scrollToSection('precos')" class="btn-secondary px-8 py-3 rounded-full font-bold uppercase tracking-wide inline-flex items-center gap-2 group">
                    QUERO TER O CONTROLE DA MINHA OBRA
                    <i data-lucide="arrow-right" class="w-5 h-5 group-hover:translate-x-1 transition-transform"></i>
                </button>
            </div>
        </div>
    </section>

    <!-- SOLUTION (A VANTAGEM INJUSTA - ZE DA OBRA) -->
    <section id="funciona" class="py-24 relative overflow-hidden bg-brand-darkCard">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">
                <!-- Text -->
                <div class="flex-1">
                    <div class="inline-block px-4 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold font-bold text-xs uppercase tracking-widest mb-6">
                        Diferencial Exclusivo
                    </div>
                    <h2 class="text-4xl md:text-5xl font-display font-bold mb-6">Conheça o Zé da Obra <br><span class="text-brand-gold">Sua IA 24 horas.</span></h2>
                    <p class="text-gray-400 text-lg mb-8 leading-relaxed">
                        Além de todas as ferramentas de gestão, você tem um <strong>Engenheiro Digital</strong> no bolso. O Zé analisa seus orçamentos, tira dúvidas técnicas na hora e impede que você seja enganado por orçamentos abusivos.
                    </p>
                    
                    <ul class="space-y-4 mb-8">
                        <li class="flex items-center gap-4">
                            <div class="w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center"><i data-lucide="shield-check" class="w-5 h-5 text-brand-accent"></i></div>
                            <span class="text-white font-medium">Validação de Orçamentos (Anti-Exploração)</span>
                        </li>
                        <li class="flex items-center gap-4">
                            <div class="w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center"><i data-lucide="calculator" class="w-5 h-5 text-brand-accent"></i></div>
                            <span class="text-white font-medium">Cálculo de Materiais em Segundos</span>
                        </li>
                        <li class="flex items-center gap-4">
                            <div class="w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center"><i data-lucide="message-square" class="w-5 h-5 text-brand-accent"></i></div>
                            <span class="text-white font-medium">Tira-dúvidas técnico (ex: traço de concreto)</span>
                        </li>
                    </ul>

                    <button onclick="scrollToSection('precos')" class="btn-primary px-6 py-3 rounded-lg text-sm font-bold shadow-lg flex items-center gap-2 group">
                        VER PLANOS DISPONÍVEIS <i data-lucide="arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
                    </button>
                </div>

                <!-- Visual Element: The Brain -->
                <div class="flex-1 relative">
                    <div class="absolute inset-0 bg-brand-gold blur-[100px] opacity-20"></div>
                    <div class="glass-panel p-8 rounded-3xl relative border-brand-gold/20 border z-10 pt-16">
                        
                        <!-- User Bubble (Pergunta) -->
                        <div class="absolute -top-6 right-0 bg-brand-gold text-white text-xs p-3 rounded-lg rounded-br-none shadow-lg transform rotate-2 max-w-[220px] z-20 font-bold">
                            "Zé, esse orçamento do eletricista tá justo?"
                        </div>

                        <div class="flex items-start gap-6">
                            <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Construction%20Worker.png" class="w-20 h-20 rounded-full border-2 border-brand-gold ze-avatar bg-brand-dark/50 p-1 object-contain">
                            <div class="flex-1">
                                <div class="bg-white/5 p-4 rounded-xl rounded-tl-none border border-white/10 mb-4">
                                    <p class="text-sm text-gray-300 italic">"Analisei aqui. Ele cobrou R$ 45,00 no metro do fio que achei por R$ 12,00 na loja da esquina. Se você comprar o material, economiza R$ 890,00."</p>
                                </div>
                                <div class="flex gap-2">
                                    <span class="px-3 py-1 rounded bg-brand-accent/20 text-brand-accent text-xs font-bold">Economia: R$ 890,00</span>
                                    <span class="px-3 py-1 rounded bg-blue-500/20 text-blue-400 text-xs font-bold">Tempo: Instantâneo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- BONUS SECTION (NEW) -->
    <section class="py-20 bg-brand-dark relative">
        <div class="container mx-auto px-4">
            <div class="text-center mb-12">
                <span class="text-brand-gold font-bold tracking-widest uppercase text-sm">Presente Especial</span>
                <h2 class="text-3xl md:text-4xl font-display font-bold text-white mt-2">
                    Leve <span class="text-red-500 line-through decoration-white/30 text-2xl md:text-3xl mx-2">R$ 897</span> <span class="text-white">em Bônus</span> <span class="text-brand-gold ml-2">DE GRAÇA</span>
                </h2>
                <p class="text-gray-400 mt-4">Disponível apenas no plano Vitalício. Ferramentas essenciais para blindar sua obra.</p>
            </div>

            <div class="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <!-- Bônus 1 -->
                <div class="bg-white/5 p-6 rounded-2xl border border-brand-gold/20 hover:border-brand-gold transition-colors">
                    <div class="w-10 h-10 bg-brand-gold/20 rounded-lg flex items-center justify-center mb-4">
                        <i data-lucide="calculator" class="w-5 h-5 text-brand-gold"></i>
                    </div>
                    <h3 class="text-lg font-bold text-white mb-2">Calculadora Automática</h3>
                    <p class="text-sm text-gray-400">Nunca mais sobe tijolo ou falta cimento. Saiba a quantidade exata de materiais em segundos.</p>
                </div>

                <!-- Bônus 2 -->
                <div class="bg-white/5 p-6 rounded-2xl border border-brand-gold/20 hover:border-brand-gold transition-colors">
                    <div class="w-10 h-10 bg-brand-gold/20 rounded-lg flex items-center justify-center mb-4">
                        <i data-lucide="file-text" class="w-5 h-5 text-brand-gold"></i>
                    </div>
                    <h3 class="text-lg font-bold text-white mb-2">Pacote de Contratos</h3>
                    <p class="text-sm text-gray-400">Modelos jurídicos prontos para fechar com pedreiros, eletricistas e pintores com segurança.</p>
                </div>

                <!-- Bônus 3 -->
                <div class="bg-white/5 p-6 rounded-2xl border border-brand-gold/20 hover:border-brand-gold transition-colors">
                    <div class="w-10 h-10 bg-brand-gold/20 rounded-lg flex items-center justify-center mb-4">
                        <i data-lucide="clipboard-check" class="w-5 h-5 text-brand-gold"></i>
                    </div>
                    <h3 class="text-lg font-bold text-white mb-2">Checklist Anti-Dor-de-Cabeça</h3>
                    <p class="text-sm text-gray-400">+60 itens para conferir na entrega da obra. Caimento de água, tomadas, infiltrações e mais.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- NEW SECTION: SOCIAL PROOF (DEPOIMENTOS) -->
    <section id="depoimentos" class="py-24 bg-black relative border-y border-white/5">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-5xl font-display font-bold text-center mb-16 text-white">
                Eles confiaram e <span class="text-brand-gold">Zeraram a Obra.</span>
            </h2>
            
            <div class="grid md:grid-cols-3 gap-8">
                <!-- Testimonial 1 -->
                <div class="bg-brand-darkCard p-8 rounded-3xl border border-white/10 relative hover:border-brand-gold/30 transition-colors">
                    <div class="flex gap-1 text-brand-gold mb-4">
                        <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                        <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                        <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                        <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                        <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                    </div>
                    <p class="text-gray-300 mb-6 italic leading-relaxed">"Eu não entendo nada de obra. O app me disse exatamente quanto piso comprar. O pedreiro pediu 10 caixas a mais, o app disse que não precisava. Confiei no app e sobrou dinheiro!"</p>
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center font-bold text-white border border-white/20">RM</div>
                        <div>
                            <p class="text-white font-bold">Ricardo M.</p>
                            <p class="text-xs text-gray-500">Reforma de Apartamento</p>
                        </div>
                    </div>
                </div>
    
                 <!-- Testimonial 2 (Featured) -->
                 <div class="bg-brand-darkCard p-8 rounded-3xl border border-brand-gold/30 relative shadow-[0_0_30px_rgba(217,119,6,0.1)] transform md:-translate-y-4">
                    <div class="absolute -top-4 right-8 bg-green-500 text-brand-dark text-xs font-bold px-3 py-1 rounded-full shadow-lg">Economizou R$ 12.000</div>
                    <div class="flex gap-1 text-brand-gold mb-4">
                        <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                        <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                        <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                        <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                        <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                    </div>
                    <p class="text-gray-300 mb-6 italic leading-relaxed">"O Zé da Obra é surreal. Mandei a foto do orçamento da loja e ele achou preços 30% menores na minha região em segundos. Pagou a assinatura vitalícia no primeiro dia."</p>
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center font-bold text-white border border-white/20">AL</div>
                        <div>
                            <p class="text-white font-bold">Ana Luiza</p>
                            <p class="text-xs text-gray-500">Construção Casa Térrea</p>
                        </div>
                    </div>
                </div>
    
                 <!-- Testimonial 3 -->
                 <div class="bg-brand-darkCard p-8 rounded-3xl border border-white/10 relative hover:border-brand-gold/30 transition-colors">
                    <div class="flex gap-1 text-brand-gold mb-4">
                        <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                        <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                        <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                        <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                        <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                    </div>
                    <p class="text-gray-300 mb-6 italic leading-relaxed">"A melhor parte é centralizar tudo. Antes eu perdia notas fiscais, não sabia quem tinha pago. Agora tenho controle total financeiro e de cronograma. Obra sem atraso existe!"</p>
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center font-bold text-white border border-white/20">CJ</div>
                        <div>
                            <p class="text-white font-bold">Carlos Jr.</p>
                            <p class="text-xs text-gray-500">Pequeno Construtor</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="mt-12 text-center">
                 <button onclick="scrollToSection('precos')" class="btn-primary px-8 py-4 rounded-xl text-lg font-bold shadow-2xl hover:scale-105 transition-transform inline-flex items-center gap-2 group mb-4">
                    QUERO TER ESSES RESULTADOS
                    <i data-lucide="arrow-down" class="w-5 h-5 group-hover:translate-y-1 transition-transform"></i>
                </button>
                <p class="text-gray-500 text-sm">Mais de 15.000 clientes satisfeitos em todo o Brasil.</p>
            </div>
        </div>
    </section>

    <!-- SIMPLICITY (ZERO CURVA DE APRENDIZADO) -->
    <section class="py-24 bg-white text-brand-dark">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-3xl md:text-5xl font-display font-bold mb-6">Zero Curva de Aprendizado.</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
                Não sabe mexer em planilhas? Odeia sistemas complicados? Não tem problema.
            </p>

            <div class="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                <!-- Esquerda: WhatsApp -->
                <div class="flex flex-col items-center p-8 bg-gray-50 rounded-3xl border border-gray-200">
                    <div class="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center mb-6 text-white shadow-lg">
                        <i data-lucide="message-circle" class="w-8 h-8"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2">Você sabe usar o WhatsApp?</h3>
                    <p class="text-gray-500">Enviar mensagens, áudios e fotos.</p>
                </div>

                <!-- Meio: Icone de Igual -->
                <div class="hidden md:flex justify-center absolute left-1/2 -translate-x-1/2">
                    <div class="w-12 h-12 bg-brand-dark text-white rounded-full flex items-center justify-center font-bold text-xl shadow-xl">=</div>
                </div>

                <!-- Direita: App -->
                <div class="flex flex-col items-center p-8 bg-brand-gold/10 rounded-3xl border border-brand-gold/30 relative overflow-hidden">
                    <div class="absolute inset-0 bg-brand-gold/5 pointer-events-none animate-pulse-slow"></div>
                    <div class="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center mb-6 text-white shadow-lg z-10">
                        <i data-lucide="check" class="w-8 h-8"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2 z-10 text-brand-dark">Você sabe usar o Mãos da Obra</h3>
                    <p class="text-gray-600 z-10">Converse com o app como se fosse um amigo.</p>
                </div>
            </div>
            
            <p class="mt-12 text-gray-500 font-medium">Basta abrir o app e falar: "Zé, quanto cimento preciso pra 30 metros de piso?"</p>
        </div>
    </section>

    <!-- PRICING (OFERTA AGRESSIVA) -->
    <section id="precos" class="py-24 bg-brand-dark relative">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.15),transparent_70%)]"></div>
        
        <div class="container mx-auto px-4 relative z-10">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <h2 class="text-4xl md:text-6xl font-display font-bold text-white mb-6">Quanto vale a sua <br><span class="text-brand-gold">Paz de Espírito?</span></h2>
                <p class="text-gray-400 text-lg">Um erro na obra custa R$ 2.000. O app custa uma fração disso. A conta fecha.</p>
            </div>

            <!-- Pricing Grid (Sequência: Mensal -> Semestral -> Vitalício Destacado) -->
            <div class="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-center">
                
                <!-- PLANO MENSAL (Order 1) -->
                <div class="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm opacity-80 hover:opacity-100 transition-opacity">
                    <h3 class="text-lg font-medium text-gray-300">Mensal</h3>
                    <div class="my-4">
                        <span class="text-3xl font-bold text-white">R$ 29,90</span><span class="text-gray-500">/mês</span>
                    </div>
                    <p class="text-sm text-gray-500 mb-8">Para pequenas reformas rápidas.</p>
                    <a href="https://maos-da-obra-2-0.vercel.app/login?plan=mensal" class="block w-full text-center py-3 rounded-xl border border-white/20 text-white hover:bg-white/5 transition-colors font-semibold">Escolher Mensal</a>
                    <div class="mt-6 space-y-3">
                        <p class="text-sm text-gray-400 flex gap-2"><i data-lucide="check" class="w-4 h-4 text-gray-500"></i> Gestão Básica</p>
                        <p class="text-sm text-gray-400 flex gap-2"><i data-lucide="x" class="w-4 h-4 text-red-500"></i> Sem IA Zé da Obra</p>
                    </div>
                </div>

                <!-- PLANO SEMESTRAL (Order 2) -->
                <div class="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-sm opacity-80 hover:opacity-100 transition-opacity">
                    <h3 class="text-lg font-medium text-gray-300">Semestral</h3>
                    <div class="my-4">
                        <span class="text-3xl font-bold text-white">R$ 97,00</span><span class="text-gray-500">/total</span>
                    </div>
                    <p class="text-sm text-gray-500 mb-8">Para obras de médio porte.</p>
                    <a href="https://maos-da-obra-2-0.vercel.app/login?plan=semestral" class="block w-full text-center py-3 rounded-xl border border-white/20 text-white hover:bg-white/5 transition-colors font-semibold">Escolher Semestral</a>
                    <div class="mt-6 space-y-3">
                        <p class="text-sm text-gray-400 flex gap-2"><i data-lucide="check" class="w-4 h-4 text-gray-500"></i> Gestão Completa</p>
                        <p class="text-sm text-gray-400 flex gap-2"><i data-lucide="x" class="w-4 h-4 text-red-500"></i> Sem IA Zé da Obra</p>
                    </div>
                </div>

                <!-- PLANO VITALÍCIO (Hero - Order 3) -->
                <div class="bg-gradient-to-b from-gray-900 to-black rounded-[2rem] p-8 border-2 border-brand-gold shadow-[0_0_50px_rgba(217,119,6,0.3)] relative transform md:scale-110 z-20">
                    <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-gold text-brand-dark px-6 py-2 rounded-full font-bold text-sm shadow-lg tracking-wider uppercase flex items-center gap-2 whitespace-nowrap">
                        <i data-lucide="crown" class="w-4 h-4 fill-brand-dark"></i> Oferta Limitada
                    </div>

                    <h3 class="text-xl font-bold text-brand-gold text-center">ACESSO VITALÍCIO</h3>
                    <div class="my-6 text-center">
                        <span class="text-gray-500 line-through text-lg">R$ 997,00</span>
                        <div class="text-6xl font-display font-bold text-white tracking-tighter">R$ 247</div>
                        <span class="text-green-500 font-bold text-sm bg-green-500/10 px-2 py-1 rounded mt-2 inline-block">Pagamento Único (Sem mensalidade)</span>
                        <p class="text-sm text-brand-gold font-bold mt-2 opacity-90">ou em até 12x no cartão</p>
                    </div>

                    <div class="space-y-4 mb-8">
                        <div class="flex items-center gap-3">
                            <div class="bg-brand-gold/20 p-1.5 rounded-full"><i data-lucide="check" class="w-4 h-4 text-brand-gold"></i></div>
                            <span class="text-gray-200 font-medium">Acesso para SEMPRE</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="bg-brand-gold/20 p-1.5 rounded-full"><i data-lucide="check" class="w-4 h-4 text-brand-gold"></i></div>
                            <span class="text-gray-200 font-medium"><strong>IA Zé da Obra ILIMITADA</strong></span>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="bg-brand-gold/20 p-1.5 rounded-full"><i data-lucide="check" class="w-4 h-4 text-brand-gold"></i></div>
                            <span class="text-gray-200 font-medium">Gestão Financeira Completa</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="bg-brand-gold/20 p-1.5 rounded-full"><i data-lucide="gift" class="w-4 h-4 text-brand-gold"></i></div>
                            <span class="text-gray-200 font-bold text-brand-gold">+ R$ 897 em Bônus (GRÁTIS)</span>
                        </div>
                    </div>

                    <a href="https://maos-da-obra-2-0.vercel.app/login?plan=vitalicio" class="btn-primary w-full py-5 rounded-xl text-lg shadow-xl mb-4 flex items-center justify-center gap-2 animate-pulse-slow">
                        GARANTIR OFERTA AGORA
                        <i data-lucide="lock" class="w-5 h-5"></i>
                    </a>
                    
                    <p class="text-center text-xs text-gray-500">Acesso imediato enviado por e-mail.</p>
                </div>

            </div>
            
            <!-- GARANTIA -->
            <div class="max-w-2xl mx-auto mt-20 bg-white/5 rounded-2xl p-6 border border-white/10 flex items-center gap-6">
                <div class="w-20 h-20 bg-brand-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i data-lucide="shield-check" class="w-10 h-10 text-brand-gold"></i>
                </div>
                <div>
                    <h4 class="text-white font-bold text-lg mb-1">Risco Zero: Garantia de 30 Dias</h4>
                    <p class="text-gray-400 text-sm leading-relaxed">Se você não economizar pelo menos o valor que pagou no app no primeiro mês, nós devolvemos 100% do seu dinheiro. Sem perguntas.</p>
                </div>
            </div>

            <!-- PAYMENT BADGES -->
            <div class="max-w-4xl mx-auto mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-8 opacity-70">
                <div class="flex flex-col items-center md:items-start gap-2">
                    <span class="text-xs text-gray-400 uppercase tracking-widest font-bold">Formas de Pagamento</span>
                    <div class="flex items-center gap-3">
                        <div class="bg-white/10 px-3 py-1.5 rounded flex items-center gap-2"><i data-lucide="credit-card" class="w-4 h-4 text-white"></i> <span class="text-xs text-white font-bold">Até 12x</span></div>
                        <div class="bg-white/10 px-3 py-1.5 rounded flex items-center gap-2"><i data-lucide="qr-code" class="w-4 h-4 text-white"></i> <span class="text-xs text-white font-bold">Pix</span></div>
                    </div>
                    <div class="flex gap-2 mt-2">
                         <div class="w-8 h-5 bg-white rounded flex items-center justify-center"><span class="text-[6px] font-bold text-blue-900">VISA</span></div>
                         <div class="w-8 h-5 bg-white rounded flex items-center justify-center"><span class="text-[6px] font-bold text-red-600">Master</span></div>
                         <div class="w-8 h-5 bg-white rounded flex items-center justify-center"><span class="text-[6px] font-bold text-blue-500">Elo</span></div>
                         <div class="w-8 h-5 bg-white rounded flex items-center justify-center"><span class="text-[6px] font-bold text-red-500">Hiper</span></div>
                    </div>
                </div>
                
                <div class="flex flex-col items-center md:items-end gap-2">
                    <span class="text-xs text-gray-400 uppercase tracking-widest font-bold">Compra Blindada</span>
                    <div class="flex items-center gap-4">
                         <div class="flex items-center gap-2 text-green-500 bg-green-500/10 px-3 py-1.5 rounded-full border border-green-500/20">
                             <i data-lucide="lock" class="w-3 h-3"></i>
                             <span class="text-[10px] font-bold uppercase">Dados Criptografados</span>
                         </div>
                         <div class="flex items-center gap-2 text-green-500 bg-green-500/10 px-3 py-1.5 rounded-full border border-green-500/20">
                             <i data-lucide="shield-check" class="w-3 h-3"></i>
                             <span class="text-[10px] font-bold uppercase">Site Seguro</span>
                         </div>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-black py-12 border-t border-white/10 text-sm">
        <div class="container mx-auto px-4 text-center">
            <div class="flex items-center justify-center gap-3 mb-8 opacity-70">
                <div class="w-8 h-8 bg-brand-gold rounded-lg logo-tilt flex items-center justify-center">
                    <i data-lucide="hard-hat" class="w-4 h-4 text-white"></i>
                </div>
                <span class="font-bold text-white tracking-widest">MÃOS DA OBRA</span>
            </div>
            
            <div class="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto text-gray-500 mb-12 text-left md:text-center">
                <a href="#" class="hover:text-brand-gold transition-colors">Termos de Uso</a>
                <a href="#" class="hover:text-brand-gold transition-colors">Política de Privacidade</a>
                <a href="#" class="hover:text-brand-gold transition-colors">Central de Ajuda</a>
                <a href="#" class="hover:text-brand-gold transition-colors">Contato</a>
            </div>

            <p class="text-gray-600">&copy; <span id="year"></span> Mãos da Obra Tecnologia. Todos os direitos reservados.</p>
            <p class="text-gray-700 text-xs mt-2">CNPJ: 00.000.000/0001-00 - São Paulo, SP</p>
        </div>
    </footer>

    <!-- MOBILE STICKY CTA -->
    <div class="md:hidden fixed bottom-0 w-full bg-brand-darkCard border-t border-white/10 p-4 z-50 flex items-center justify-between shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <div>
            <p class="text-white font-bold text-lg">A partir de <span class="text-brand-gold">R$ 29,90</span></p>
        </div>
        <button onclick="scrollToSection('precos')" class="btn-primary px-6 py-3 rounded-lg text-sm shadow-lg font-bold">
            Garantir Agora
        </button>
    </div>

    <!-- CHAT WIDGET -->
    <div id="chat-widget-container"></div>

    <!-- SCRIPTS -->
    <script>
        const ZE_IMAGE_SRC = "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Construction%20Worker.png";
        const ZE_FALLBACK_URL = "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Construction%20Worker.png";

        function getZeImage() { return ZE_IMAGE_SRC; }

        document.addEventListener('DOMContentLoaded', () => {
             document.getElementById('year').textContent = new Date().getFullYear();
             lucide.createIcons();
             
             document.querySelectorAll('.ze-avatar').forEach(img => {
                 img.onerror = function() { this.src = ZE_FALLBACK_URL; };
             });

             // Header Glass Effect on Scroll
             window.addEventListener('scroll', () => {
                 const header = document.querySelector('header');
                 if (window.scrollY > 50) {
                     header.classList.add('bg-brand-dark/90', 'shadow-2xl');
                     header.classList.remove('border-b-0');
                     header.classList.add('border-b', 'border-white/5');
                 } else {
                     header.classList.remove('bg-brand-dark/90', 'shadow-2xl', 'border-b', 'border-white/5');
                     header.classList.add('border-b-0');
                 }
             });
        });

        function scrollToSection(id) {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }

        // Chat Widget Logic
        const chatContainer = document.getElementById('chat-widget-container');
        let isChatOpen = false;
        let messages = [
             { text: "Olá! 👷‍♂️ Sou o Zé. Posso analisar seu orçamento agora?", sender: 'bot' }
        ];

        function renderChat() {
            const zeImage = getZeImage();
            
            if (!isChatOpen) {
                chatContainer.innerHTML = `
                    <button onclick="toggleChat()" class="fixed bottom-24 md:bottom-8 right-4 z-40 bg-brand-gold hover:bg-brand-goldDark text-white p-4 rounded-full shadow-[0_0_20px_rgba(217,119,6,0.5)] transition-all hover:scale-110 active:scale-95 group animate-fade-in-up border-4 border-white/10">
                        <span class="absolute top-0 right-0 flex h-3 w-3">
                          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <i data-lucide="message-square" class="w-7 h-7 fill-current"></i>
                    </button>
                `;
            } else {
                let msgsHtml = messages.map(msg => {
                    if(msg.sender === 'user') {
                        return `<div class="flex justify-end animate-fade-in-up"><div class="bg-brand-gold text-white rounded-2xl rounded-tr-sm p-3 max-w-[85%] text-sm shadow-sm"><p>${msg.text}</p></div></div>`;
                    } else {
                        return `<div class="flex justify-start animate-fade-in-up"><div class="flex items-end gap-2 max-w-[90%]"><img src="${zeImage}" onerror="this.src='${ZE_FALLBACK_URL}'" class="w-8 h-8 rounded-full border border-gray-600 mb-1 ze-avatar bg-brand-dark/50 p-0.5 object-cover"><div class="bg-gray-800 text-gray-200 rounded-2xl rounded-tl-sm p-3 text-sm shadow-md border border-white/10"><p class="font-bold text-brand-gold mb-1 text-xs uppercase tracking-wide">Zé da Obra:</p><p>${msg.text}</p></div></div></div>`;
                    }
                }).join('');

                chatContainer.innerHTML = `
                <div class="fixed bottom-24 md:bottom-24 right-4 w-[90vw] md:w-[360px] bg-brand-darkCard rounded-3xl shadow-2xl border border-white/10 z-50 overflow-hidden flex flex-col h-[500px] animate-fade-in-up">
                    <div class="bg-gradient-to-r from-brand-gold to-brand-goldDark p-4 flex justify-between items-center shadow-md z-10">
                        <div class="flex items-center gap-3">
                            <div class="relative">
                                <img src="${zeImage}" onerror="this.src='${ZE_FALLBACK_URL}'" class="w-10 h-10 rounded-full border-2 border-white ze-avatar bg-brand-dark/50 p-1 object-cover">
                                <div class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-brand-gold rounded-full"></div>
                            </div>
                            <div><h4 class="font-bold text-white text-sm">Zé da Obra</h4><p class="text-[10px] text-white/80 font-medium">Online agora</p></div>
                        </div>
                        <button onclick="toggleChat()" class="text-white/80 hover:text-white"><i data-lucide="x" class="w-5 h-5"></i></button>
                    </div>
                    <div id="chat-msgs" class="flex-1 bg-brand-dark p-5 space-y-4 overflow-y-auto">${msgsHtml}</div>
                    <div class="p-3 bg-brand-darkCard border-t border-white/10 flex gap-2">
                        <input type="text" id="chat-input" placeholder="Digite aqui..." class="flex-1 bg-brand-dark rounded-full h-10 px-4 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-gold border border-white/10" onkeypress="if(event.key === 'Enter') sendUserMessage(this.value)" />
                        <button onclick="sendUserMessage(document.getElementById('chat-input').value)" class="w-10 h-10 bg-brand-gold hover:bg-brand-goldDark rounded-full flex items-center justify-center text-white transition-colors"><i data-lucide="send" class="w-4 h-4 ml-0.5"></i></button>
                    </div>
                </div>`;
                
                const msgsDiv = document.getElementById('chat-msgs');
                if(msgsDiv) msgsDiv.scrollTop = msgsDiv.scrollHeight;
                
                document.querySelectorAll('.ze-avatar').forEach(img => { img.onerror = function() { this.src = ZE_FALLBACK_URL; }; });
            }
            lucide.createIcons();
        }

        function toggleChat() {
            isChatOpen = !isChatOpen;
            renderChat();
        }

        function sendUserMessage(text) {
            if(!text.trim()) return;
            messages.push({ text: text, sender: 'user' });
            renderChat();
            setTimeout(() => {
                const response = "Para te dar essa resposta com precisão técnica e economizar seu dinheiro, eu preciso que você ative o plano Vitalício. Está com um preço incrível hoje!";
                messages.push({ text: response, sender: 'bot' });
                renderChat();
            }, 1000);
        }
        
        renderChat();
    </script>
</body>
</html>
