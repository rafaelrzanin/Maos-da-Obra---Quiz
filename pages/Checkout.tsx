import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { 
  CreditCard, QrCode, ShieldCheck, Loader2, CheckCircle, 
  Copy, HardHat, ChevronDown, UserCheck, AlertTriangle
} from 'lucide-react'; 

// --- TIPAGEM ---
interface PlanDetails {
  id: string;
  name: string;
  price: number;
  type: string;
  period: string;
}

interface CardData {
  number: string;
  name: string;
  expiry: string;
  cvv: string;
  installments: number;
}
// --- FIM TIPAGEM ---

export default function Checkout() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Estados
  const [user, setUser] = useState<any>(null);
  const [planDetails, setPlanDetails] = useState<PlanDetails | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix'); 
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  
  // Pix & Cartão
  const [pixCode, setPixCode] = useState<string | null>(null);
  const [pixCopied, setPixCopied] = useState(false);
  const [cardData, setCardData] = useState<CardData>({
    number: '', name: '', expiry: '', cvv: '', installments: 1
  });

  const definePlan = (planId: string | null) => {
    const normalizedPlan = planId?.toLowerCase() || 'mensal';
    if (normalizedPlan === 'semestral') {
        setPlanDetails({ id: 'semestral', name: 'Plano Semestral', price: 97.00, type: 'semestral', period: '6 meses' });
    } else if (normalizedPlan === 'vitalicio') {
        setPlanDetails({ id: 'vitalicio', name: 'Acesso Vitalício', price: 247.00, type: 'vitalicio', period: 'Acesso Único' });
    } else {
        setPlanDetails({ id: 'mensal', name: 'Plano Mensal', price: 29.90, type: 'mensal', period: 'Mensal' });
    }
  };

  // --- FUNÇÃO DE REDIRECIONAMENTO FINAL (ÚNICA DECLARAÇÃO) ---
  const redirectToDashboard = () => {
    localStorage.removeItem('tempUser'); 
    window.location.href = "https://www.maosdaobra.online/dashboard"; 
  }
  // --- FIM FUNÇÃO CORRIGIDA ---

  useEffect(() => {
    const loadData = async () => {
      // 1. Recuperar Usuário do Passo Anterior (Register)
      const savedUser = localStorage.getItem('tempUser');
      
      if (!savedUser) {
          const currentPlan = searchParams.get('plan') || 'mensal';
          navigate(`/register?plan=${currentPlan}`);
          return;
      }
      setUser(JSON.parse(savedUser));

      // 2. Definir Plano
      let planId = searchParams.get('plan');
      if (!planId && typeof window !== 'undefined') {
          const urlParams = new URLSearchParams(window.location.search);
          planId = urlParams.get('plan');
      }
      definePlan(planId);
      setLoading(false);
    };

    loadData();
  }, [searchParams, navigate]);

  const handlePlanSwitch = (newPlan: string) => {
      setSearchParams({ plan: newPlan });
      definePlan(newPlan);
  };

  // --- LÓGICA REAL DE GERAÇÃO DE PIX ---
  const handlePixGenerate = async () => {
      setProcessing(true);
      setErrorMsg('');
      try {
          if (!user || !planDetails) throw new Error("Dados do usuário ou plano ausentes.");

          const clientPayload = {
              name: user.name,
              email: user.email,
              phone: user.phone.replace(/\D/g, ''),
              document: user.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
          };

          const payload = {
              identifier: `MDO-${Date.now()}`,
              amount: planDetails.price, 
              client: clientPayload,
              dueDate: new Date(Date.now() + (86400000 * 2)).toISOString().split('T')[0],
              metadata: {
                  plan_id: planDetails.id,
                  type: 'Subscription_Acquisition'
              }
          };

          const response = await fetch('/api/create-pix', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(payload)
          });
          
          const data = await response.json();

          if (!response.ok) {
              const errorDetails = data.details ? JSON.stringify(data.details) : data.message;
              console.error("Neon Pay Error:", errorDetails);
              throw new Error(data.message || 'Erro ao gerar PIX. Tente novamente.');
          }
          
          if (data.pix && data.pix.code) {
             setPixCode(data.pix.code);
          } else {
             throw new Error("Neon Pay não retornou o código PIX. Verifique o Backend.");
          }

      } catch (err: any) { 
          setErrorMsg(err.message || "Erro ao gerar PIX."); 
      } finally { 
          setProcessing(false); 
      }
  };

  // --- LÓGICA DE PAGAMENTO REAL DO CARTÃO ---
  const handleCreditCardSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!planDetails) return;
    setErrorMsg('');
    setProcessing(true);
    try {
        const cleanNumber = cardData.number.replace(/\s/g, '');
        if (cleanNumber.length < 16) throw new Error("Número do cartão inválido");
        if (cardData.cvv.length < 3) throw new Error("CVV inválido");

        const response = await fetch('/api/create-card', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                amount: planDetails.price,
                installments: cardData.installments,
                planType: planDetails.type,
                card: { ...cardData, number: cleanNumber },
                client: user
            })
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.message || "Transação recusada.");

        // SUCESSO REAL (Cartão): Redireciona para o App
        redirectToDashboard(); 

    } catch (err: any) {
        setErrorMsg(err.message || "Erro ao processar cartão.");
    } finally { setProcessing(false); }
  };


  const handleCopyPix = () => {
    if (pixCode) { navigator.clipboard.writeText(pixCode); setPixCopied(true); setTimeout(() => setPixCopied(false), 3000); }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    let v = value;
    if (name === 'number') v = v.replace(/\D/g, '').replace(/(\d{4})/g, '$1 ').trim().substring(0, 19);
    if (name === 'expiry') v = v.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2').substring(0, 5);
    if (name === 'cvv') v = v.replace(/\D/g, '').substring(0, 4);
    setCardData(prev => ({ ...prev, [name]: v }));
  };


  if (loading) return <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#172134]"><Loader2 className="h-10 w-10 animate-spin text-[#bc5a08]" /></div>;
  
  if (!user) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#172134] font-sans selection:bg-[#bc5a08] selection:text-white">
      
      {/* Background Decorativo */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px]"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-[#bc5a08]/10 blur-[100px]"></div>
      </div>

      <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 relative z-10">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-5 gap-8">
            
            {/* ESQUERDA: INFO DO PEDIDO */}
            <div className="lg:col-span-2 flex flex-col justify-center space-y-8 lg:pr-8">
                {/* LOGO */}
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transform rotate-6" style={{ backgroundColor: '#bc5a08', boxShadow: '0 10px 25px -5px rgba(188, 90, 8, 0.4)' }}>
                        <HardHat className="text-white w-8 h-8 transform -rotate-6" strokeWidth={2.5} />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-white tracking-tight leading-none">Mãos da Obra</h1>
                        <span className="text-xs uppercase tracking-widest text-gray-400 font-medium">Checkout Seguro</span>
                    </div>
                </div>

                {/* USER CARD */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#bc5a08]/20 rounded-full flex items-center justify-center text-[#bc5a08]">
                        <UserCheck size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-xs text-gray-400 uppercase font-bold">Conta Criada</p>
                        <p className="text-white font-medium truncate">{user.name}</p>
                    </div>
                    <button onClick={() => navigate('/register')} className="text-xs text-[#bc5a08] hover:text-white underline">Alterar</button>
                </div>

                <div className="space-y-4">
                    <h2 className="text-gray-400 text-sm font-medium uppercase tracking-wider">Plano Selecionado:</h2>
                    <div className="flex flex-wrap gap-2 mb-4">
                        <button onClick={() => handlePlanSwitch('mensal')} className={`px-4 py-2 text-xs font-medium rounded-lg border transition-all ${planDetails?.id === 'mensal' ? 'bg-[#bc5a08] border-[#bc5a08] text-white' : 'border-gray-700 text-gray-400 hover:border-gray-500 bg-white/5'}`}>Mensal</button>
                        <button onClick={() => handlePlanSwitch('semestral')} className={`px-4 py-2 text-xs font-medium rounded-lg border transition-all ${planDetails?.id === 'semestral' ? 'bg-[#bc5a08] border-[#bc5a08] text-white' : 'border-gray-700 text-gray-400 hover:border-gray-500 bg-white/5'}`}>Semestral</button>
                        <button onClick={() => handlePlanSwitch('vitalicio')} className={`px-4 py-2 text-xs font-medium rounded-lg border transition-all ${planDetails?.id === 'vitalicio' ? 'bg-[#bc5a08] border-[#bc5a08] text-white' : 'border-gray-700 text-gray-400 hover:border-gray-500 bg-white/5'}`}>Vitalício</button>
                    </div>
                    <div className="text-4xl font-bold text-white tracking-tight">{planDetails?.name}</div>
                    <div className="text-3xl font-bold flex items-baseline gap-1" style={{ color: '#bc5a08' }}>
                        R$ {planDetails?.price.toFixed(2)}
                        <span className="text-sm font-normal text-gray-400">/{planDetails?.period}</span>
                    </div>
                </div>
            </div>

            {/* DIREITA: FORMULÁRIO */}
            <div className="lg:col-span-3">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl">
