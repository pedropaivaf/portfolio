import nfse01 from '../assets/projects/api-nfse/01-licenca.png';
import nfse02 from '../assets/projects/api-nfse/02-buscar-nota.png';
import nfse03 from '../assets/projects/api-nfse/03-iniciar-extracao.png';
import nfse04 from '../assets/projects/api-nfse/04-extraindo.png';
import nfse05 from '../assets/projects/api-nfse/05-resultado-busca.png';
import nfse06 from '../assets/projects/api-nfse/06-notas-fiscais.png';
import nfse07 from '../assets/projects/api-nfse/07-por-competencia.png';
import nfse08 from '../assets/projects/api-nfse/08-empresas.png';
import nfse09 from '../assets/projects/api-nfse/09-nova-empresa.png';
import nfse10 from '../assets/projects/api-nfse/10-licencas.png';
import nfse11 from '../assets/projects/api-nfse/11-configuracoes.png';
import smartParkImg from '../assets/projects/smartparkjf.png';
import reservaQuadraImg from '../assets/projects/reservaquadra.png';
import mbChatImg from '../assets/projects/mbchat.png';
import fitai01 from '../assets/projects/fitai/01-home.png';
import fitai02 from '../assets/projects/fitai/02-fichas.png';
import fitai03 from '../assets/projects/fitai/03-fichas-adicionar.png';
import fitai04 from '../assets/projects/fitai/04-progresso.png';
import fitai05 from '../assets/projects/fitai/05-perfil.png';
import fitai06 from '../assets/projects/fitai/06-config.png';

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  live?: string;
  repo?: string;
  image: ImageMetadata;
  gallery?: ImageMetadata[];
  imageFit?: 'cover' | 'contain';
  status: 'live' | 'archived';
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: 'api-nfse',
    name: 'API NFSe',
    tagline: 'Baixador automático de Notas Fiscais de Serviço',
    description:
      'Aplicação desktop que autentica via Certificado Digital A1 (mTLS) ou usuário/senha no Portal Nacional Gov.br e baixa XMLs de NFS-e em lote usando web scraping dos portais municipais. Gerencia múltiplas empresas, sincronizando automaticamente via expressão cron configurável e exibe histórico completo categorizando por competência. Utilizado por escritórios de contabilidade.',
    stack: ['Electron 28', 'React 19', 'Express 5', 'Supabase', 'Web Scraping', 'mTLS / Certificado A1'],
    image: nfse01,
    gallery: [nfse01, nfse02, nfse03, nfse04, nfse05, nfse06, nfse07, nfse08, nfse09, nfse10, nfse11],
    status: 'live',
    featured: true,
  },
  {
    slug: 'smartparkjf',
    name: 'SmartParkJF',
    tagline: 'Estacionamento inteligente em operação real',
    description:
      'SaaS de gestão para estacionamentos, o sistema está operando atualmente em Juiz de Fora. Monorepo contendo app desktop (Electron), site comercial, painel web de gestão e portal de download. Funcionalidades: Controle de entrada e saída de veículos, fechamento de caixa (financeiro) em tempo real, multi-empresa. Build e releases automatizados via GitHub Actions.',
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
      'Plataforma de agendamento de quadras com arquitetura multi-centro. Fluxo completo de reserva, pagamento integrado via Webhook do Mercado Pago (PIX), comunidade, campeonatos e gestão para proprietários.',
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
    image: fitai01,
    gallery: [fitai01, fitai02, fitai03, fitai04, fitai05, fitai06],
    imageFit: 'contain',
    status: 'live',
    featured: true,
  },
  {
    slug: 'mbchat',
    name: 'MBChat',
    tagline: 'Chat Interno para Redes Locais',
    description:
      'Aplicação de mensagens instantâneas em Python para redes LAN com transferência de arquivos, notificações e histórico persistente. Deploy público via GitHub Pages.',
    stack: ['Python', 'SQLite', 'UDP/TCP'],
    live: 'https://pedropaivaf.github.io/MBchat',
    image: mbChatImg,
    status: 'live',
    featured: true,
  },
];
