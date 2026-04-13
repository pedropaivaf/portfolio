// Portfolio i18n dictionary. Keys are referenced via data-i18n="key" in components.
// <strong>...</strong> and <em>...</em> tags are supported (safe subset, parsed client-side
// without innerHTML). Everything else is treated as plain text.

export type Lang = 'pt' | 'en' | 'es';

export const LANGS: { code: Lang; label: string; flag: string; full: string }[] = [
  { code: 'pt', label: 'PT', full: 'Português',  flag: 'twemoji:flag-brazil' },
  { code: 'en', label: 'EN', full: 'English',    flag: 'twemoji:flag-united-states' },
  { code: 'es', label: 'ES', full: 'Español',    flag: 'twemoji:flag-spain' },
];

type Dict = Record<string, string>;

const pt: Dict = {
  // Document
  'doc.title': 'Pedro Paiva Ferreira — Desenvolvedor Web Full-Stack',
  'doc.description':
    'Portfólio de Pedro Paiva Ferreira — desenvolvedor web full-stack construindo produtos reais em React, Node.js e TypeScript.',

  // Lang switcher
  'lang.switch': 'Mudar idioma',

  // Nav
  'nav.sobre': 'Sobre',
  'nav.skills': 'Skills',
  'nav.projetos': 'Projetos',
  'nav.contato': 'Contato',
  'nav.menu': '// navegação',

  // Hero
  'hero.eyebrow': '// Bem-Vindo(a) ao meu perfil.',
  'hero.role': '"Full-Stack Developer"',
  'hero.comment': '// evoluindo → Cloud · IA · Mobile',
  'hero.bio':
    'Construo produtos web <strong>reais em produção</strong> — de sistemas de gestão a plataformas de reserva. Foco em interfaces rápidas, código limpo e resultados que funcionam.',
  'hero.cta.projects': 'Ver projetos',
  'hero.cta.github': 'GitHub',
  'hero.meta.location': 'Juiz de Fora, MG',
  'hero.meta.available': 'Disponível para projetos',
  'hero.meta.edu': 'Sistemas de Informação — UniAcademia (7º período)',
  'hero.scroll': 'scroll',

  // Hero terminal
  'term.name': '"Pedro Paiva Ferreira"',
  'term.role': '"Full-Stack Developer"',
  'term.focus': '"produtos reais em produção"',
  'term.status': '● disponível para novos projetos',

  // About
  'about.eyebrow': '// 01 — sobre',
  'about.title': 'Quem é o dev por trás do terminal',
  'about.lead':
    'Moro em Juiz de Fora e transformo ideias em código que funciona. Gosto de projetos com propósito e soluções que entregam valor real para quem usa.',
  'about.p1':
    'Sou <strong>obcecado em descobrir e aprimorar</strong> minhas habilidades e forma de pensar. Acredito fielmente que se existe um bom motivo para fazer algo, existe uma solução — ou uma forma de criá-la.',
  'about.p2':
    'Hoje atuo na <strong>MB Contabilidade</strong> como Suporte de TI e Desenvolvedor de Soluções, onde criei o <strong>MBChat</strong> (chat LAN em Python) e o <strong>CentralMB</strong> (webapp React + Supabase + Electron) para uso interno do escritório. Em paralelo cuido de produtos próprios em produção como SmartParkJF, ReservaQuadra e a API NFSe.',
  'about.p3':
    'Curso <strong>Sistemas de Informação na UniAcademia</strong> (previsão 2027) e me formei em Desenvolvimento Web Full-Stack pela Codi Academy. Adaptabilidade, comunicação assertiva e proatividade em resolver problemas são o que levo pra dentro de cada projeto.',
  'about.return': '"disponível para novos desafios"',
  'about.h1.title': 'Produtos em produção',
  'about.h1.text': 'SmartParkJF e ReservaQuadra rodando com usuários reais.',
  'about.h2.title': 'MB Contabilidade',
  'about.h2.text': 'Suporte de TI e Desenvolvedor de Soluções desde 2025.',
  'about.h3.title': 'Formação',
  'about.h3.text': 'Sistemas de Informação — UniAcademia (7º período).',
  'about.h4.title': 'Inglês B2',
  'about.h4.text': 'Leitura de documentação e comunicação técnica fluentes.',

  // Skills
  'skills.eyebrow': '// 02 — skills',
  'skills.title': 'Tecnologias que uso no dia a dia',
  'skills.lead':
    'Stack full-stack moderna, com foco em produtividade e código de qualidade.',
  'skills.group.languages': 'Linguagens',
  'skills.group.frontend': 'Frontend',
  'skills.group.backend': 'Backend & Desktop',
  'skills.group.data': 'Dados & Ferramentas',

  // Projects
  'projects.eyebrow': '// 03 — projetos',
  'projects.title': 'Trabalhos selecionados',
  'projects.lead':
    'Produtos reais que construí — de sistemas em produção para negócios locais a aplicações pessoais de código aberto.',
  'project.badge.live': 'em produção',
  'project.cta.site': 'Ver site',
  'project.cta.code': 'Código',
  // Per-project
  'project.api-nfse.tagline': 'Baixador automático de Notas Fiscais de Serviço',
  'project.api-nfse.description':
    'Aplicação desktop que autentica via Certificado Digital A1 (mTLS) ou usuário/senha no Portal Nacional Gov.br e baixa XMLs de NFS-e em lote. Gerencia múltiplas empresas, sincronização automática por cron e histórico completo. Em uso por escritório de contabilidade.',
  'project.smartparkjf.tagline': 'Estacionamento inteligente em operação real',
  'project.smartparkjf.description':
    'Plataforma SaaS de gestão de estacionamento em operação em Juiz de Fora. Monorepo com app desktop (Electron), site comercial e portal de download. Controla entrada, saída, fechamento e financeiro em tempo real, multi-empresa.',
  'project.reservaquadra.tagline': 'Reserva de quadras esportivas multi-centro',
  'project.reservaquadra.description':
    'Plataforma de agendamento de quadras com arquitetura multi-centro. Fluxo completo de reserva, pagamento via PIX, comunidade, campeonatos e gestão para proprietários. Roda em clubes reais como AABB Juiz de Fora e PQ Tennis Club.',
  'project.fitai.tagline': 'Treinos personalizados gerados por IA',
  'project.fitai.description':
    'App mobile que gera fichas de treino personalizadas com IA. Interface nativa Flutter, geração contextual via modelo de linguagem e sincronização de histórico. PWA disponível na web.',
  'project.mbchat.tagline': 'Mensageiro para redes locais',
  'project.mbchat.description':
    'Aplicação de mensagens instantâneas para redes LAN com transferência de arquivos, notificações e histórico persistente. Deploy público via GitHub Pages.',

  // GitHub
  'gh.eyebrow': '// 04 — open source',
  'gh.title.pre': 'Sempre',
  'gh.title.accent': 'commitando',
  'gh.lead':
    'Desde repositórios experimentais a produtos em produção — código aberto no GitHub como prova viva do que construo.',
  'gh.stat.repos.label': 'repositórios',
  'gh.stat.prod.label': 'em produção',
  'gh.stat.clients.label': 'clientes reais',
  'gh.stat.commits.label': 'commits/mês',
  'gh.heatmap.title': 'contribuições recentes',
  'gh.heatmap.less': 'menos',
  'gh.heatmap.more': 'mais',
  'gh.active': 'ativo hoje',

  // Contact
  'contact.eyebrow': '// 05 — contato',
  'contact.title': 'Vamos construir algo juntos?',
  'contact.lead':
    'Estou disponível para novos projetos freelance e oportunidades full-stack. Me chama no canal que preferir — respondo rápido.',

  // Footer
  'footer.eyebrow': '// fim de arquivo',
  'footer.sub': 'Desenvolvedor Web Full-Stack — Juiz de Fora, MG',
  'footer.built': 'construído com',

  // A11y
  'a11y.fab': 'Acessibilidade',
};

const en: Dict = {
  'doc.title': 'Pedro Paiva Ferreira — Full-Stack Web Developer',
  'doc.description':
    "Pedro Paiva Ferreira's portfolio — full-stack web developer building real products with React, Node.js and TypeScript.",

  'lang.switch': 'Change language',

  'nav.sobre': 'About',
  'nav.skills': 'Skills',
  'nav.projetos': 'Projects',
  'nav.contato': 'Contact',
  'nav.menu': '// navigation',

  'hero.eyebrow': '// Welcome to my profile.',
  'hero.role': '"Full-Stack Developer"',
  'hero.comment': '// evolving → Cloud · AI · Mobile',
  'hero.bio':
    'I build <strong>real, production-grade</strong> web products — from management systems to booking platforms. Focused on fast UIs, clean code and results that actually work.',
  'hero.cta.projects': 'See projects',
  'hero.cta.github': 'GitHub',
  'hero.meta.location': 'Juiz de Fora, Brazil',
  'hero.meta.available': 'Available for projects',
  'hero.meta.edu': 'Information Systems — UniAcademia (7th semester)',
  'hero.scroll': 'scroll',

  'term.name': '"Pedro Paiva Ferreira"',
  'term.role': '"Full-Stack Developer"',
  'term.focus': '"real products in production"',
  'term.status': '● available for new projects',

  'about.eyebrow': '// 01 — about',
  'about.title': "Who's the dev behind the terminal",
  'about.lead':
    'I live in Juiz de Fora and turn ideas into code that works. I enjoy projects with purpose and solutions that deliver real value to whoever uses them.',
  'about.p1':
    "I'm <strong>obsessed with discovering and sharpening</strong> my skills and the way I think. I firmly believe that if there's a good reason to do something, there's a solution — or a way to create one.",
  'about.p2':
    'Today I work at <strong>MB Contabilidade</strong> as IT Support and Solutions Developer, where I built <strong>MBChat</strong> (a Python LAN chat) and <strong>CentralMB</strong> (a React + Supabase + Electron webapp) for internal use. In parallel I run my own products in production like SmartParkJF, ReservaQuadra and the NFSe API.',
  'about.p3':
    "I'm pursuing a <strong>Bachelor's in Information Systems at UniAcademia</strong> (graduating 2027) and completed a Full-Stack Web Development program at Codi Academy. Adaptability, clear communication and proactive problem-solving are what I bring to every project.",
  'about.return': '"available for new challenges"',
  'about.h1.title': 'Products in production',
  'about.h1.text': 'SmartParkJF and ReservaQuadra running with real users.',
  'about.h2.title': 'MB Contabilidade',
  'about.h2.text': 'IT Support and Solutions Developer since 2025.',
  'about.h3.title': 'Education',
  'about.h3.text': 'Information Systems — UniAcademia (7th semester).',
  'about.h4.title': 'English B2',
  'about.h4.text': 'Fluent reading of docs and technical communication.',

  'skills.eyebrow': '// 02 — skills',
  'skills.title': 'Tech I use day to day',
  'skills.lead':
    'A modern full-stack toolkit focused on productivity and code quality.',
  'skills.group.languages': 'Languages',
  'skills.group.frontend': 'Frontend',
  'skills.group.backend': 'Backend & Desktop',
  'skills.group.data': 'Data & Tools',

  'projects.eyebrow': '// 03 — projects',
  'projects.title': 'Selected work',
  'projects.lead':
    'Real products I built — from systems running live for local businesses to personal open-source apps.',
  'project.badge.live': 'in production',
  'project.cta.site': 'Visit site',
  'project.cta.code': 'Code',
  'project.api-nfse.tagline': 'Automatic Brazilian service invoice downloader',
  'project.api-nfse.description':
    "Desktop app that authenticates via A1 digital certificate (mTLS) or user/password on Brazil's Gov.br National Portal and batch-downloads NFS-e XMLs. Manages multiple companies, cron-based auto-sync and full history. In use by an accounting firm.",
  'project.smartparkjf.tagline': 'Smart parking, live in production',
  'project.smartparkjf.description':
    'SaaS parking-management platform in live operation in Juiz de Fora. Monorepo with desktop app (Electron), marketing site and download portal. Real-time entry, exit, closing and finance control, multi-tenant.',
  'project.reservaquadra.tagline': 'Multi-club sports court booking',
  'project.reservaquadra.description':
    'Court booking platform with multi-club architecture. Full booking flow, PIX payment, community, tournaments and owner management. Runs at real clubs like AABB Juiz de Fora and PQ Tennis Club.',
  'project.fitai.tagline': 'AI-generated personalized workouts',
  'project.fitai.description':
    'Mobile app that generates personalized workout plans with AI. Native Flutter UI, contextual generation via LLM and history sync. Also available as a PWA.',
  'project.mbchat.tagline': 'Messaging for local networks',
  'project.mbchat.description':
    'Instant messaging app for LAN networks with file transfer, notifications and persistent history. Public deployment via GitHub Pages.',

  'gh.eyebrow': '// 04 — open source',
  'gh.title.pre': 'Always',
  'gh.title.accent': 'shipping',
  'gh.lead':
    'From experimental repos to production products — open source on GitHub as living proof of what I build.',
  'gh.stat.repos.label': 'repositories',
  'gh.stat.prod.label': 'in production',
  'gh.stat.clients.label': 'real clients',
  'gh.stat.commits.label': 'commits/month',
  'gh.heatmap.title': 'recent contributions',
  'gh.heatmap.less': 'less',
  'gh.heatmap.more': 'more',
  'gh.active': 'active today',

  'contact.eyebrow': '// 05 — contact',
  'contact.title': "Let's build something together?",
  'contact.lead':
    'Available for new freelance projects and full-stack opportunities. Ping me on whichever channel you prefer — I reply fast.',

  'footer.eyebrow': '// end of file',
  'footer.sub': 'Full-Stack Web Developer — Juiz de Fora, Brazil',
  'footer.built': 'built with',

  'a11y.fab': 'Accessibility',
};

const es: Dict = {
  'doc.title': 'Pedro Paiva Ferreira — Desarrollador Web Full-Stack',
  'doc.description':
    'Portafolio de Pedro Paiva Ferreira — desarrollador web full-stack construyendo productos reales con React, Node.js y TypeScript.',

  'lang.switch': 'Cambiar idioma',

  'nav.sobre': 'Sobre mí',
  'nav.skills': 'Skills',
  'nav.projetos': 'Proyectos',
  'nav.contato': 'Contacto',
  'nav.menu': '// navegación',

  'hero.eyebrow': '// Bienvenido(a) a mi perfil.',
  'hero.role': '"Full-Stack Developer"',
  'hero.comment': '// evolucionando → Cloud · IA · Mobile',
  'hero.bio':
    'Construyo productos web <strong>reales en producción</strong> — desde sistemas de gestión hasta plataformas de reservas. Enfocado en interfaces rápidas, código limpio y resultados que funcionan.',
  'hero.cta.projects': 'Ver proyectos',
  'hero.cta.github': 'GitHub',
  'hero.meta.location': 'Juiz de Fora, Brasil',
  'hero.meta.available': 'Disponible para proyectos',
  'hero.meta.edu': 'Sistemas de Información — UniAcademia (7º semestre)',
  'hero.scroll': 'scroll',

  'term.name': '"Pedro Paiva Ferreira"',
  'term.role': '"Full-Stack Developer"',
  'term.focus': '"productos reales en producción"',
  'term.status': '● disponible para nuevos proyectos',

  'about.eyebrow': '// 01 — sobre mí',
  'about.title': 'Quién es el dev detrás de la terminal',
  'about.lead':
    'Vivo en Juiz de Fora y convierto ideas en código que funciona. Me gustan los proyectos con propósito y soluciones que entregan valor real a quien las usa.',
  'about.p1':
    'Soy <strong>obsesivo en descubrir y pulir</strong> mis habilidades y mi forma de pensar. Creo firmemente que si existe una buena razón para hacer algo, existe una solución — o una forma de crearla.',
  'about.p2':
    'Hoy trabajo en <strong>MB Contabilidade</strong> como Soporte TI y Desarrollador de Soluciones, donde creé <strong>MBChat</strong> (chat LAN en Python) y <strong>CentralMB</strong> (webapp React + Supabase + Electron) para uso interno. En paralelo mantengo mis propios productos en producción como SmartParkJF, ReservaQuadra y la API NFSe.',
  'about.p3':
    'Estudio <strong>Sistemas de Información en UniAcademia</strong> (previsto 2027) y me formé en Desarrollo Web Full-Stack en Codi Academy. Adaptabilidad, comunicación clara y proactividad para resolver problemas son lo que llevo a cada proyecto.',
  'about.return': '"disponible para nuevos desafíos"',
  'about.h1.title': 'Productos en producción',
  'about.h1.text': 'SmartParkJF y ReservaQuadra funcionando con usuarios reales.',
  'about.h2.title': 'MB Contabilidade',
  'about.h2.text': 'Soporte TI y Desarrollador de Soluciones desde 2025.',
  'about.h3.title': 'Formación',
  'about.h3.text': 'Sistemas de Información — UniAcademia (7º semestre).',
  'about.h4.title': 'Inglés B2',
  'about.h4.text': 'Lectura fluida de documentación y comunicación técnica.',

  'skills.eyebrow': '// 02 — skills',
  'skills.title': 'Tecnologías que uso día a día',
  'skills.lead':
    'Stack full-stack moderno, enfocado en productividad y calidad de código.',
  'skills.group.languages': 'Lenguajes',
  'skills.group.frontend': 'Frontend',
  'skills.group.backend': 'Backend & Desktop',
  'skills.group.data': 'Datos & Herramientas',

  'projects.eyebrow': '// 03 — proyectos',
  'projects.title': 'Trabajos seleccionados',
  'projects.lead':
    'Productos reales que construí — desde sistemas en producción para negocios locales hasta aplicaciones personales de código abierto.',
  'project.badge.live': 'en producción',
  'project.cta.site': 'Ver sitio',
  'project.cta.code': 'Código',
  'project.api-nfse.tagline': 'Descargador automático de facturas de servicio',
  'project.api-nfse.description':
    'App de escritorio que autentica vía Certificado Digital A1 (mTLS) o usuario/contraseña en el Portal Nacional Gov.br y descarga XMLs de NFS-e en lote. Gestiona múltiples empresas, sincronización por cron e historial completo. En uso por un despacho contable.',
  'project.smartparkjf.tagline': 'Estacionamiento inteligente en operación real',
  'project.smartparkjf.description':
    'Plataforma SaaS de gestión de estacionamientos operando en Juiz de Fora. Monorepo con app de escritorio (Electron), sitio comercial y portal de descarga. Control en tiempo real de entrada, salida, cierre y finanzas, multiempresa.',
  'project.reservaquadra.tagline': 'Reserva de canchas deportivas multi-club',
  'project.reservaquadra.description':
    'Plataforma de reservas con arquitectura multi-club. Flujo completo de reserva, pago por PIX, comunidad, torneos y gestión para propietarios. Funciona en clubes reales como AABB Juiz de Fora y PQ Tennis Club.',
  'project.fitai.tagline': 'Entrenamientos personalizados generados por IA',
  'project.fitai.description':
    'App móvil que genera planes de entrenamiento personalizados con IA. Interfaz nativa en Flutter, generación contextual vía LLM y sincronización de historial. También disponible como PWA.',
  'project.mbchat.tagline': 'Mensajería para redes locales',
  'project.mbchat.description':
    'Aplicación de mensajería instantánea para redes LAN con transferencia de archivos, notificaciones e historial persistente. Deploy público vía GitHub Pages.',

  'gh.eyebrow': '// 04 — open source',
  'gh.title.pre': 'Siempre',
  'gh.title.accent': 'commiteando',
  'gh.lead':
    'Desde repos experimentales a productos en producción — código abierto en GitHub como prueba viva de lo que construyo.',
  'gh.stat.repos.label': 'repositorios',
  'gh.stat.prod.label': 'en producción',
  'gh.stat.clients.label': 'clientes reales',
  'gh.stat.commits.label': 'commits/mes',
  'gh.heatmap.title': 'contribuciones recientes',
  'gh.heatmap.less': 'menos',
  'gh.heatmap.more': 'más',
  'gh.active': 'activo hoy',

  'contact.eyebrow': '// 05 — contacto',
  'contact.title': '¿Construimos algo juntos?',
  'contact.lead':
    'Disponible para nuevos proyectos freelance y oportunidades full-stack. Escríbeme por el canal que prefieras — respondo rápido.',

  'footer.eyebrow': '// fin de archivo',
  'footer.sub': 'Desarrollador Web Full-Stack — Juiz de Fora, Brasil',
  'footer.built': 'construido con',

  'a11y.fab': 'Accesibilidad',
};

export const translations: Record<Lang, Dict> = { pt, en, es };
