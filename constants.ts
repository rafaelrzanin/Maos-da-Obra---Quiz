import { Question } from './types';

export const THEME_COLORS = {
  primary: '#1A2A44', // Dark Engineering Blue
  accent: '#FFC107', // Construction Yellow
  success: '#10B981',
  danger: '#EF4444',
  text: '#1e293b',
};

export interface QuestionWithImage extends Question {
  image: string;
}

export const QUESTIONS: QuestionWithImage[] = [
  {
    id: 1,
    question: "Como você controla os gastos da obra hoje?",
    context: "📝 Confiar na memória é o erro nº 1. Pequenos gastos não anotados (como parafusos e lanches) somam milhares de reais no fim.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    options: [
      { label: "Na cabeça (perigoso)", value: "mental" },
      { label: "Papel e caneta", value: "paper" },
      { label: "Planilha / Excel", value: "excel" },
      { label: "Não controlo nada", value: "none" },
    ]
  },
  {
    id: 2,
    question: "Você sabe exatamente quanto dinheiro já saiu do seu bolso?",
    context: "💸 Se você não tem o número exato na ponta da língua agora, provavelmente já gastou 20% a mais do que planejou sem perceber.",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80",
    options: [
      { label: "Sim, cada centavo", value: "exact" },
      { label: "Tenho uma estimativa", value: "vague" },
      { label: "Sinceramente? Não", value: "no_idea" },
      { label: "Tenho medo de somar", value: "scared" },
    ]
  },
  {
    id: 3,
    question: "Quando você compra material, onde fica o registro?",
    context: "🧾 Notas fiscais apagam com o tempo e conversas de WhatsApp se perdem. Sem um sistema centralizado, você perde a garantia e o controle.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    options: [
      { label: "Guardo a nota fiscal", value: "invoice" },
      { label: "Mando foto no WhatsApp", value: "whatsapp" },
      { label: "Não registro", value: "never" },
      { label: "Perco a maioria", value: "lost" },
    ]
  },
  {
    id: 4,
    question: "Quem faz as compras da sua obra?",
    context: "👷‍♂️ Quando muitas pessoas compram sem aprovação centralizada, o risco de duplicidade de material e 'desvios' triplica.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    options: [
      { label: "Eu mesmo(a)", value: "self" },
      { label: "O pedreiro/mestre", value: "worker" },
      { label: "Minha esposa/marido", value: "spouse" },
      { label: "Várias pessoas", value: "chaos" },
    ]
  },
  {
    id: 5,
    question: "Como é calculado o material a ser comprado (cimento, piso, tijolo)?",
    context: "📐 O 'olhômetro' do pedreiro geralmente pede 30% a mais 'pra garantir'. Isso vira entulho no seu quintal e dinheiro no lixo.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
    options: [
      { label: "Cálculo exato de engenharia", value: "engineer" },
      { label: "O pedreiro pede, eu compro", value: "worker_ask" },
      { label: "Compro aos poucos", value: "little_by_little" },
      { label: "Chutamos uma quantidade", value: "guess" },
    ]
  },
  {
    id: 6,
    question: "Com que frequência você corre na loja para comprar algo que faltou?",
    context: "🏃‍♂️ A 'compra de emergência' é a mais cara que existe. Você não cota preço, paga frete extra e para a mão de obra enquanto espera.",
    image: "https://images.unsplash.com/photo-1595514020146-2713d48f95c0?auto=format&fit=crop&w=800&q=80",
    options: [
      { label: "Quase todo dia", value: "daily" },
      { label: "Toda semana", value: "weekly" },
      { label: "Raramente", value: "rarely" },
      { label: "Nunca, tudo planejado", value: "never" },
    ]
  },
  {
    id: 7,
    question: "Você já teve a sensação de que o dinheiro 'sumiu' na obra?",
    context: "🕳️ Esse é o sintoma clássico da 'Obra Ralo': o dinheiro entra e escoa por falhas de gestão invisíveis e desperdício de material.",
    image: "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?auto=format&fit=crop&w=800&q=80",
    options: [
      { label: "Sim, frequentemente", value: "yes_often" },
      { label: "Sim, algumas vezes", value: "yes_sometimes" },
      { label: "Não, nunca", value: "no" },
    ]
  },
  {
    id: 8,
    question: "A sua obra tem data exata (e realista) para acabar?",
    context: "📅 'Quando der, termina' é a receita da falência. Sem cronograma travado, a mão de obra estica o serviço para ganhar mais semanas.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80",
    options: [
      { label: "Sim, cronograma rígido", value: "strict" },
      { label: "Temos uma ideia vaga", value: "vague" },
      { label: "Já estourou o prazo", value: "delayed" },
      { label: "Não tem data", value: "no_date" },
    ]
  },
  {
    id: 9,
    question: "Qual é o seu maior medo atual?",
    context: "🛑 O medo é apenas falta de dados. Transformar essa incerteza em números organizados é a única forma de voltar a dormir tranquilo.",
    image: "https://images.unsplash.com/photo-1590059535071-863704dc1414?auto=format&fit=crop&w=800&q=80",
    options: [
      { label: "Obra parar por falta de $", value: "stop" },
      { label: "Ser roubado/enganado", value: "scam" },
      { label: "Estourar muito o orçamento", value: "budget" },
      { label: "A obra nunca acabar", value: "forever" },
    ]
  },
  {
    id: 10,
    question: "Qual o status atual da construção?",
    context: "🏗️ O melhor momento para organizar foi no início. O segundo melhor momento é agora. Estancar a sangria financeira salva o acabamento.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
    options: [
      { label: "Só planejando", value: "planning" },
      { label: "Começando agora", value: "starting" },
      { label: "No meio do caos", value: "middle" },
      { label: "Reta final (acabamentos)", value: "finishing" },
    ]
  }
];

export const PROCESSING_MESSAGES = [
  "🔍 Analisando seus padrões de gastos...",
  "📐 Verificando desperdício de materiais...",
  "💸 Calculando custos invisíveis...",
  "📊 Comparando com obras eficientes...",
  "⚠️ Detectando gargalos de cronograma...",
  "🔒 Gerando seu plano de resgate..."
];