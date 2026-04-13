import apiNfseImg from '../assets/projects/api-nfse.png';
import smartParkImg from '../assets/projects/smartparkjf.png';
import reservaQuadraImg from '../assets/projects/reservaquadra.png';
import fitAiImg from '../assets/projects/fitai.png';
import mbChatImg from '../assets/projects/mbchat.png';

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  live?: string;
  repo?: string;
  image: ImageMetadata;
  status: 'live' | 'archived';
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: 'api-nfse',
    name: 'API NFSe',
    tagline: 'Baixador automático de Notas Fiscais de Serviço',
    description:
      'Aplicação desktop que autentica via Certificado Digital A1 (mTLS) ou usuário/senha no Portal Nacional Gov.br e baixa XMLs de NFS-e em lote usando web scraping dos portais municipais. Gerencia múltiplas empresas, sincronização automática por cron e histórico completo. Em uso por escritório de contabilidade.',
    stack: ['Electron 28', 'React 19', 'Express 5', 'Supabase', 'Web Scraping', 'mTLS / Certificado A1'],
    image: apiNfseImg,
    status: 'live',
    featured: true,
  },
  {
    slug: 'smartparkjf',
    name: 'SmartParkJF',
    tagline: 'Estacionamento inteligente em operação real',
    description:
      'Plataforma SaaS de gestão de estacionamento em operação em Juiz de Fora. Monorepo com app desktop (Electron), site comercial e portal de download. Controla entrada, saída, fechamento e financeiro em tempo real, multi-empresa. Build e releases automatizados via GitHub Actions.',
    stack: ['Electron', 'React', 'Node.js', 'Supabase', 'Vite', 'GitHub Actions'],
    live: 'https://smartparkjfsistema.com.br',
    image: smartParkImg,
    status: 'live',
    featured: true,
  },
  {
    slug: 'reservaquadra',
    name: 'ReservaQuadra',
    tagline: 'Reserva de quadras esportivas multi-centro',
    description:
      'Plataforma de agendamento de quadras com arquitetura multi-centro. Fluxo completo de reserva, pagamento integrado via Webhook do Mercado Pago (PIX), comunidade, campeonatos e gestão para proprietários. Roda em clubes reais como AABB Juiz de Fora e PQ Tennis Club.',
    stack: ['React', 'Node.js', 'Supabase', 'PostgreSQL', 'Webhook Mercado Pago (PIX)'],
    live: 'https://reservaquadra.app',
    image: reservaQuadraImg,
    status: 'live',
    featured: true,
  },
  {
    slug: 'fitai',
    name: 'FitAI',
    tagline: 'Treinos personalizados gerados por IA',
    description:
      'App mobile que gera fichas de treino personalizadas com IA. Interface nativa Flutter, geração contextual via modelo de linguagem e sincronização de histórico. PWA disponível na web.',
    stack: ['Flutter', 'Dart', 'Gemini API', 'Supabase'],
    live: 'https://fitaitreino.netlify.app',
    image: fitAiImg,
    status: 'live',
    featured: true,
  },
  {
    slug: 'mbchat',
    name: 'MBChat',
    tagline: 'Mensageiro para redes locais',
    description:
      'Aplicação de mensagens instantâneas em Python para redes LAN com transferência de arquivos, notificações e histórico persistente. Deploy público via GitHub Pages.',
    stack: ['Python', 'SQLite', 'UDP/TCP'],
    live: 'https://pedropaivaf.github.io/MBchat',
    image: mbChatImg,
    status: 'live',
    featured: true,
  },
];
