import React from 'react';
import { AlertTriangle, CheckCircle2, ArrowRight, ShieldCheck, Lock, Star, Zap, BarChart3, FileText, Smartphone } from 'lucide-react';

export const ResultsScreen: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-slate-50 overflow-y-auto no-scrollbar scroll-smooth">
      
      {/* 1. HERO / DIAGNOSIS (The Hook) */}
      <div className="bg-[#1A2A44] text-white pt-8 pb-12 px-6 rounded-b-[3rem] shadow-2xl relative z-10 overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20 pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#FFC107] rounded-full blur-[80px] opacity-10 pointer-events-none translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative z-10 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 mb-6 bg-red-500/20 border border-red-500/50 px-4 py-1.5 rounded-full backdrop-blur-md animate-fade-in-up">
            <AlertTriangle size={16} className="text-red-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-red-100">Resultado: Risco Crítico</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-black text-center leading-tight mb-4 animate-fade-in-up delay-100">
            Você está <span className="text-red-400">queimando dinheiro</span> na sua obra.
            </h1>
            
            <p className="text-center text-slate-300 text-sm mb-8 max-w-xs mx-auto animate-fade-in-up delay-200">
            A sua gestão atual tem "vazamentos invisíveis" que vão custar até <strong>30% a mais</strong> do que o planejado.
            </p>

            {/* IMPACT VISUALIZATION */}
            <div className="w-full max-w-sm bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 mb-2 animate-fade-in-up delay-300">
                <div className="flex justify-between items-end h-32 px-4 gap-6">
                    <div className="flex flex-col items-center w-1/2 group">
                        <div className="mb-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded opacity-100">- R$ 32.000</div>
                        <div className="w-full h-full bg-gradient-to-t from-red-900/50 to-red-500/80 rounded-t-lg relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-20"></div>
                        </div>
                        <p className="mt-2 text-xs font-medium text-red-300">Hoje</p>
                    </div>
                    <div className="flex flex-col items-center w-1/2">
                        <div className="mb-2 bg-[#10B981] text-[#1A2A44] text-[10px] font-bold px-2 py-1 rounded shadow-lg shadow-[#10B981]/50">ZERO Perda</div>
                        <div className="w-full h-[120%] bg-gradient-to-t from-green-900/50 to-[#10B981] rounded-t-lg relative overflow-hidden shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                             <div className="absolute inset-0 bg-white/20 animate-pulse-slow"></div>
                        </div>
                        <p className="mt-2 text-xs font-bold text-[#FFC107]">Com Mãos da Obra</p>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* 2. THE SOLUTION (Product Reveal) */}
      <div className="px-6 py-10 -mt-6 relative z-20">
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100">
            <h2 className="text-xl font-bold text-[#1A2A44] text-center mb-6">
                A única forma de parar o prejuízo é ter <span className="text-blue-600 underline decoration-yellow-400 decoration-4 underline-offset-2">Controle Total</span>.
            </h2>
            
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 mb-6 flex flex-col items-center">
                <div className="w-16 h-16 bg-[#1A2A44] rounded-2xl flex items-center justify-center mb-3 shadow-lg transform -rotate-3">
                    <Smartphone className="text-[#FFC107]" size={32} />
                </div>
                <h3 className="font-black text-lg text-[#1A2A44]">Mãos da Obra PRO</h3>
                <p className="text-xs text-slate-500 text-center max-w-[200px]">
                    O sistema de gestão financeira que já salvou mais de 15.000 obras no Brasil.
                </p>
            </div>

            <div className="space-y-4">
                <FeatureRow 
                    icon={<BarChart3 size={18} className="text-blue-600" />} 
                    title="Controle Financeiro Real" 
                    desc="Saiba para onde vai cada centavo. Sem planilhas chatas."
                />
                <FeatureRow 
                    icon={<FileText size={18} className="text-purple-600" />} 
                    title="Relatórios Automáticos" 
                    desc="Gere PDFs profissionais para cobrar seu pedreiro ou engenheiro."
                />
                <FeatureRow 
                    icon={<Zap size={18} className="text-yellow-600" />} 
                    title="Alertas de Estouro" 
                    desc="O app avisa antes de você gastar mais do que devia."
                />
            </div>
        </div>
      </div>

      {/* 3. SOCIAL PROOF */}
      <div className="bg-[#1A2A44] px-6 py-12 text-white">
        <h3 className="text-center font-bold text-xl mb-8">Quem usa, não fica sem</h3>
        
        <div className="space-y-4">
            <TestimonialCard 
                name="Carlos Eduardo" 
                role="Construiu casa do zero" 
                text="Eu achava que tinha controle até baixar o app. Descobri que estava pagando material que nunca chegou na obra. O app se pagou no primeiro dia."
                stars={5}
            />
            <TestimonialCard 
                name="Mariana Souza" 
                role="Reforma de Apartamento" 
                text="Simples e direto. Parei de brigar com meu marido por causa de gastos. Tudo fica registrado."
                stars={5}
            />
        </div>
        
        <div className="mt-8 flex items-center justify-center gap-2 opacity-70">
            <ShieldCheck size={16} />
            <span className="text-xs font-medium">Mais de 15.400 obras gerenciadas</span>
        </div>
      </div>

      {/* 4. OFFER & GUARANTEE */}
      <div className="px-6 py-10 pb-40">
        <div className="text-center mb-8">
            <h3 className="text-2xl font-black text-[#1A2A44] mb-2">Oferta Especial do Quiz</h3>
            <p className="text-slate-600 text-sm">Desbloqueie o acesso vitalício ao sistema de gestão.</p>
        </div>

        <div className="bg-white border-2 border-[#1A2A44] rounded-3xl p-6 relative shadow-2xl">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFC107] text-[#1A2A44] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                Melhor Escolha
            </div>
            
            <div className="flex flex-col items-center mb-6">
                <span className="text-slate-400 line-through text-sm">De R$ 297,00</span>
                <div className="flex items-baseline gap-1 text-[#1A2A44]">
                    <span className="text-xl font-bold">Por</span>
                    <span className="text-4xl font-black">R$ 97,00</span>
                </div>
                <span className="text-green-600 text-xs font-bold bg-green-100 px-2 py-1 rounded mt-2">Pagamento Único • Sem Mensalidade</span>
            </div>

            <ul className="space-y-3 mb-8">
                <li className="flex gap-2 text-sm text-slate-700">
                    <CheckCircle2 size={18} className="text-green-500 shrink-0" /> Acesso Vitalício ao App
                </li>
                <li className="flex gap-2 text-sm text-slate-700">
                    <CheckCircle2 size={18} className="text-green-500 shrink-0" /> Planilha Mestra de Controle (Bônus)
                </li>
                <li className="flex gap-2 text-sm text-slate-700">
                    <CheckCircle2 size={18} className="text-green-500 shrink-0" /> Curso Rápido "Obra Sem Roubo"
                </li>
            </ul>

            <div className="bg-slate-50 p-4 rounded-xl border border-dashed border-slate-300 flex items-center gap-3">
                <div className="bg-[#1A2A44] p-2 rounded-full text-white">
                    <Lock size={16} />
                </div>
                <div className="text-left">
                    <p className="text-xs font-bold text-[#1A2A44] uppercase">Garantia Blindada</p>
                    <p className="text-[10px] text-slate-500">7 dias para testar. Se não economizar, devolvemos seu dinheiro.</p>
                </div>
            </div>
        </div>
      </div>

      {/* 5. STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-50">
         <div className="max-w-md mx-auto flex flex-col gap-2">
            <button className="w-full bg-[#10B981] hover:bg-[#059669] text-white text-lg font-black py-4 rounded-xl shadow-lg shadow-green-500/30 transform transition-all active:scale-[0.98] flex items-center justify-center gap-2 animate-pulse-slow">
               QUERO ECONOMIZAR AGORA
               <ArrowRight size={22} className="text-white" />
            </button>
            <p className="text-[10px] text-center text-slate-400 font-medium">
               Oferta por tempo limitado. Acesso imediato.
            </p>
         </div>
      </div>

    </div>
  );
};

// Helper Components
const FeatureRow = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="flex items-start gap-4 p-3 hover:bg-slate-50 rounded-xl transition-colors">
        <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-100 shrink-0">
            {icon}
        </div>
        <div>
            <h4 className="font-bold text-[#1A2A44] text-sm">{title}</h4>
            <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
        </div>
    </div>
);

const TestimonialCard = ({ name, role, text, stars }: { name: string, role: string, text: string, stars: number }) => (
    <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-4 rounded-xl">
        <div className="flex gap-1 mb-2">
            {[...Array(stars)].map((_, i) => (
                <Star key={i} size={12} className="text-[#FFC107] fill-[#FFC107]" />
            ))}
        </div>
        <p className="text-sm italic text-slate-200 mb-3">"{text}"</p>
        <div>
            <p className="text-xs font-bold text-white">{name}</p>
            <p className="text-[10px] text-slate-400">{role}</p>
        </div>
    </div>
);