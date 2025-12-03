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
    question: "Você já teve a sensação de que o dinheiro 'sumiu' na obra?",
    image: "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?auto=format&fit=crop&w=800&q=80",
    options: [
      { label: "Sim, frequentemente", value: "yes_often" },
      { label: "Sim, algumas vezes", value: "yes_sometimes" },
      { label: "Não, nunca", value: "no" },
    ]
  },
  {
    id: 6,
    question: "Qual é o seu maior medo atual?",
    image: "https://images.unsplash.com/photo-1590059535071-863704dc1414?auto=format&fit=crop&w=800&q=80",
    options: [
      { label: "Obra parar por falta de $", value: "stop" },
      { label: "Ser roubado/enganado", value: "scam" },
      { label: "Estourar muito o orçamento", value: "budget" },
      { label: "A obra nunca acabar", value: "forever" },
    ]
  },
  {
    id: 7,
    question: "Qual o status atual da construção?",
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
  "💸 Calculando desperdício oculto...",
  "📊 Comparando com obras eficientes...",
  "⚠️ Detectando vazamentos de orçamento...",
  "🔒 Gerando seu plano de resgate..."
];