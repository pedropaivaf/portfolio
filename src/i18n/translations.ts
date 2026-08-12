// Portfolio i18n dictionary.
export type Lang = 'pt' | 'en' | 'es';

export const LANGS: { code: Lang; label: string; flag: string; full: string }[] = [
  { code: 'pt', label: 'PT', full: 'Português', flag: 'twemoji:flag-brazil' },
  { code: 'en', label: 'EN', full: 'English', flag: 'twemoji:flag-united-states' },
  { code: 'es', label: 'ES', full: 'Español', flag: 'twemoji:flag-spain' },
];

type Dict = Record<string, string>;

const pt: Dict = {
  // Document
  'doc.title': 'Pedro Paiva Ferreira — Desenvolvedor Web & Soluções Full-Stack',
  'doc.description':
    'Portfólio profissional de Pedro Paiva Ferreira — desenvolvimento de sistemas web sob medida, automações desktop, SaaS e landing pages de alta conversão.',

  // Lang switcher
  'lang.switch': 'Mudar idioma',

  // Nav
  'nav.servicos': 'Serviços',
  'nav.projetos': 'Projetos',
  'nav.processo': 'Processo',
  'nav.sobre': 'Sobre',
  'nav.contato': 'Contato',
  'nav.menu': 'Menu de Navegação',
  'nav.cta': 'Solicitar Orçamento',

  // Hero
  'hero.meta.available': '● Disponível para novos projetos',
  'hero.title': 'Desenvolvimento Web & Software <strong>sob medida</strong> para o seu negócio',
  'hero.bio':
    'Transformo ideias e processos manuais em produtos digitais de alta performance — sistemas de gestão web, aplicações desktop com Electron, SaaS e landing pages otimizadas para converter visitantes em clientes.',
  'hero.cta.whatsapp': 'Falar no WhatsApp',
  'hero.cta.projects': 'Ver projetos em produção',
  'hero.meta.prod': 'Sistemas rodando em operação real',
  'hero.meta.location': 'Juiz de Fora, MG (Atendimento Global)',
  'hero.role.desc': 'Desenvolvedor Web & Soluções Full-Stack',

  // Services
  'services.eyebrow': 'Como posso te ajudar',
  'services.title': 'Soluções de software desenvolvidas para gerar resultados',
  'services.lead':
    'Do site de apresentação ao sistema de gestão interno: projetos construídos sob medida para economizar tempo e alavancar o seu negócio.',
  'services.cta': 'Solicitar orçamento para este serviço',
  'services.web.title': 'Sistemas Web & SaaS Sob Medida',
  'services.web.desc':
    'Desenvolvimento de plataformas web completas, painéis administrativos e sistemas SaaS personalizados para a necessidade exata do seu negócio.',
  'services.desktop.title': 'Softwares Desktop & Automação',
  'services.desktop.desc':
    'Aplicações para Windows/Mac e scripts inteligentes para automatizar tarefas operacionais repetitivas, emissão de documentos e extração de dados.',
  'services.landing.title': 'Landing Pages & Sites de Alta Conversão',
  'services.landing.desc':
    'Páginas comerciais estrategicamente desenhadas para transmitir autoridade instantânea e converter visitantes em clientes pagantes.',
  'services.api.title': 'APIs & Integrações de Pagamento',
  'services.api.desc':
    'Conexão entre sistemas, emissão de notas fiscais automatizadas e integração de gateways de pagamento instantâneo via PIX.',

  // Projects
  'projects.eyebrow': 'Cases de Sucesso',
  'projects.title': 'Produtos reais em produção',
  'projects.lead':
    'Softwares desktop, SaaS e plataformas web atualmente em operação com usuários e clientes reais.',
  'project.badge.live': 'Em Produção',
  'project.cta.site': 'Ver site em produção',
  'project.cta.code': 'Código',
  'project.gallery.prev': 'Imagem anterior',
  'project.gallery.next': 'Próxima imagem',
  'project.gallery.open': 'Abrir em tela cheia',
  'project.gallery.close': 'Fechar galeria',
  'project.gallery.lightbox': 'Galeria de imagens',
  'project.api-nfse.tagline': 'Baixador automático de Notas Fiscais de Serviço',
  'project.api-nfse.description':
    'Aplicação desktop em lote para escritórios de contabilidade. Autentica via Certificado Digital A1 no Portal Nacional Gov.br e baixa XMLs de NFS-e automaticamente.',
  'project.smartparkjf.tagline': 'Estacionamento inteligente em operação real',
  'project.smartparkjf.description':
    'SaaS de gestão para estacionamentos operando em Juiz de Fora. Inclui app desktop Electron, painel web financeiro em tempo real e controle de caixa.',
  'project.reservaquadra.tagline': 'Reserva de quadras esportivas multi-centro',
  'project.reservaquadra.description':
    'Plataforma de agendamento esportivo com pagamento automático via PIX (Mercado Pago), controle de horários e gestão completa para proprietários.',
  'project.fitai.tagline': 'Treinos personalizados gerados por IA',
  'project.fitai.description':
    'App móvel e PWA que gera fichas de treino personalizadas com inteligência artificial e sincronização histórica.',
  'project.mbchat.tagline': 'Chat Interno para Redes Locais',
  'project.mbchat.description':
    'Aplicação corporativa de mensagens instantâneas e transferência de arquivos em Python para redes LAN locais.',

  // Process
  'process.eyebrow': 'Como funciona',
  'process.title': 'Um processo claro e sem surpresas do início ao fim',
  'process.lead':
    'Transparência total em cada etapa do desenvolvimento para você focar no crescimento da sua empresa.',
  'process.step1.title': 'Briefing & Alinhamento',
  'process.step1.desc':
    'Entendo o seu negócio, os objetivos da empresa e mapeio todas as funcionalidades necessárias para garantir o melhor ROI.',
  'process.step2.title': 'Arquitetura & Design',
  'process.step2.desc':
    'Definição da estrutura visual e técnica da aplicação antes de escrever o código. Zero surpresas durante o projeto.',
  'process.step3.title': 'Desenvolvimento Ágil',
  'process.step3.desc':
    'Construção com stack moderna (React, Node, Supabase, Electron), código limpo, testes contínuos e prévias para acompanhamento.',
  'process.step4.title': 'Publicação & Suporte',
  'process.step4.desc':
    'Deploy em produção (domínio, servidor, loja/download), treinamento de uso e assistência técnica contínua pós-entrega.',

  // About
  'about.eyebrow': 'Sobre Pedro Paiva',
  'about.title': 'Engenharia de Software com foco em resolver problemas reais',
  'about.lead':
    'Baseado em Juiz de Fora - MG, ajudo empresas e empreendedores a transformar necessidades de negócio em produtos digitais de alta performance.',
  'about.p1':
    'Sou movido pela criação de <strong>soluções eficientes e bem arquitetadas</strong>. Acredito que um bom software deve resolver dores reais, economizar horas de trabalho manual e proporcionar uma experiência simples para o usuário.',
  'about.p2':
    'Atualmente atuo na <strong>MB Contabilidade</strong> como Desenvolvedor de Soluções e Suporte de TI, criando ferramentas corporativas internas como MBChat e CentralMB. Em paralelo, mantenho produtos SaaS comerciais em produção.',
  'about.p3':
    'Estudo <strong>Sistemas de Informação na UniAcademia</strong> (7º período) e me formei em Web Full-Stack pela Codi Academy. Proatividade, comunicação transparente e velocidade na entrega são os pilares de cada projeto.',
  'about.h1.title': 'Produtos em Produção',
  'about.h1.text': 'SmartParkJF e ReservaQuadra rodando com usuários reais.',
  'about.h2.title': 'MB Contabilidade',
  'about.h2.text': 'Suporte de TI e Desenvolvedor de Soluções desde 2025.',
  'about.h3.title': 'Formação Acadêmica',
  'about.h3.text': 'Sistemas de Informação — UniAcademia (7º período).',
  'about.h4.title': 'Inglês B2 Técnico',
  'about.h4.text': 'Leitura fluente de documentações e comunicação assertiva.',

  // Skills
  'skills.eyebrow': 'Tecnologias & Ferramentas',
  'skills.title': 'Stack moderna para máxima performance e confiabilidade',
  'skills.lead':
    'Ferramentas consolidadas no mercado para entregar aplicações ágeis, seguras e fáceis de manter.',
  'skills.group.languages': 'Linguagens',
  'skills.group.frontend': 'Frontend & UI',
  'skills.group.backend': 'Backend & Desktop',
  'skills.group.data': 'Banco de Dados & Ferramentas',

  // Contact
  'contact.eyebrow': 'Vamos conversar?',
  'contact.title': 'Pronto para tirar o seu projeto do papel?',
  'contact.lead':
    'Seja para desenvolver um sistema novo do zero, automatizar processos na sua empresa ou criar uma landing page de alta conversão, estou pronto para te atender.',
  'contact.select.label': 'Em qual tipo de projeto você tem interesse?',
  'contact.sla': 'Garantia de atendimento e resposta em até 24 horas.',

  // Footer
  'footer.eyebrow': 'Pedro Paiva Ferreira',
  'footer.sub': 'Desenvolvedor Web & Soluções Full-Stack — Juiz de Fora, MG',
  'footer.built': 'desenvolvido com',
};

const en: Dict = {
  ...pt,
  'doc.title': 'Pedro Paiva Ferreira — Web Developer & Full-Stack Solutions',
  'doc.description':
    "Pedro Paiva Ferreira's portfolio — custom web systems, desktop automation, SaaS and high-converting landing pages.",
  'nav.servicos': 'Services',
  'nav.projetos': 'Projects',
  'nav.processo': 'Process',
  'nav.sobre': 'About',
  'nav.contato': 'Contact',
  'nav.cta': 'Get a Quote',
  'hero.title': 'Custom Web & Software Development <strong>tailored</strong> for your business',
  'hero.bio':
    'I turn ideas and manual processes into high-performance digital products — web management systems, desktop apps with Electron, SaaS, and optimized landing pages.',
  'hero.cta.whatsapp': 'Chat on WhatsApp',
  'hero.cta.projects': 'See Live Projects',
  'services.eyebrow': 'How I can help',
  'services.title': 'Software solutions designed for business growth',
  'services.cta': 'Get a quote for this service',
  'projects.eyebrow': 'Success Stories',
  'projects.title': 'Live products in production',
  'process.eyebrow': 'How it works',
  'process.title': 'A clear process from start to finish',
  'contact.eyebrow': "Let's talk?",
  'contact.title': 'Ready to bring your project to life?',
};

const es: Dict = {
  ...pt,
  'doc.title': 'Pedro Paiva Ferreira — Desarrollador Web y Soluciones Full-Stack',
  'doc.description':
    'Portafolio profesional de Pedro Paiva Ferreira — desarrollo de sistemas web a medida, automatización desktop, SaaS y landing pages.',
  'nav.servicos': 'Servicios',
  'nav.projetos': 'Proyectos',
  'nav.processo': 'Proceso',
  'nav.sobre': 'Sobre mí',
  'nav.contato': 'Contacto',
  'nav.cta': 'Solicitar Presupuesto',
  'hero.title': 'Desarrollo de Software Web <strong>a medida</strong> para tu negocio',
  'hero.bio':
    'Transformo ideas y procesos manuales en productos digitales de alto rendimiento — sistemas de gestión web, apps desktop con Electron, SaaS y landing pages.',
  'hero.cta.whatsapp': 'Hablar por WhatsApp',
  'hero.cta.projects': 'Ver proyectos en producción',
  'services.eyebrow': 'Cómo puedo ayudarte',
  'services.title': 'Soluciones de software diseñadas para generar resultados',
  'services.cta': 'Solicitar presupuesto para este servicio',
  'projects.eyebrow': 'Casos de Éxito',
  'projects.title': 'Productos reales en producción',
  'process.eyebrow': 'Cómo funciona',
  'process.title': 'Un proceso claro de principio a fin',
  'contact.eyebrow': '¿Hablamos?',
  'contact.title': '¿Listo para llevar tu proyecto al siguiente nivel?',
};

export const translations: Record<Lang, Dict> = { pt, en, es };
