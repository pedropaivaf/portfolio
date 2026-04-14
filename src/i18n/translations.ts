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
  'hero.comment': '// role.scope = "end-to-end"',
  'hero.bio':
    'Construo produtos web — de sistemas de gestão a plataformas de reserva. Foco em interfaces rápidas, código limpo e resultados que funcionam.',
  'hero.cta.projects': 'Ver projetos',
  'hero.cta.github': 'GitHub',
  'hero.meta.location': 'Juiz de Fora, MG',
  'hero.meta.available': 'Disponível para projetos',
  'hero.meta.edu': 'Sistemas de Informação — UniAcademia (7º período)',
  'hero.scroll': 'scroll',

  // Hero terminal
  'term.name': '"Pedro Paiva Ferreira"',
  'term.role': '"Full-Stack Developer"',
  'term.focus': '"produtos reais Em Produção"',
  'term.status': '● disponível para novos projetos',

  // About
  'about.eyebrow': '// 01 — sobre',
  'about.title': 'Quem é o dev por trás do terminal',
  'about.lead':
    'Moro em Juiz de Fora e transformo ideias em código que funciona. Gosto de projetos com propósito e soluções que entregam valor real para quem usa.',
  'about.p1':
    'Sou <strong>obcecado em descobrir e aprimorar</strong> minhas habilidades e forma de pensar. Acredito fielmente que se existe um bom motivo para fazer algo, existe uma solução — ou uma forma de criá-la.',
  'about.p2':
    'Hoje atuo na <strong>MB Contabilidade</strong> como Suporte de TI e Desenvolvedor de Soluções, onde criei o <strong>MBChat</strong> (chat LAN em Python) e o <strong>CentralMB</strong> (webapp React + Supabase + Electron) para uso interno do escritório. Em paralelo cuido de produtos próprios Em Produção como SmartParkJF, ReservaQuadra e a API NFSe.',
  'about.p3':
    'Curso <strong>Sistemas de Informação na UniAcademia</strong> (previsão de término: 2027) e me formei em Desenvolvimento Web Full-Stack pela Codi Academy. Adaptabilidade, comunicação assertiva e proatividade em resolver problemas são o que levo pra dentro de cada projeto.',
  'about.return': '"disponível para novos desafios"',
  'about.h1.title': 'Produtos Em Produção',
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
    'Produtos que construí — desde sistemas em produção para negócios locais até aplicações pessoais de código aberto.',
  'project.badge.live': 'Em Produção',
  'project.cta.site': 'Ver site',
  'project.cta.code': 'Código',
  'project.gallery.prev': 'Imagem anterior',
  'project.gallery.next': 'Próxima imagem',
  'project.gallery.open': 'Abrir em tela cheia',
  'project.gallery.close': 'Fechar galeria',
  'project.gallery.lightbox': 'Galeria de imagens',
  // Per-project
  'project.api-nfse.tagline': 'Baixador automático de Notas Fiscais de Serviço',
  'project.api-nfse.description':
    'Aplicação desktop que autentica via Certificado Digital A1 (mTLS) ou usuário/senha no Portal Nacional Gov.br e baixa XMLs de NFS-e em lote usando web scraping dos portais municipais. Gerencia múltiplas empresas, sincronizando automaticamente via expressão cron configurável e exibe histórico completo categorizando por competência. Utilizado por escritórios de contabilidade.',
  'project.smartparkjf.tagline': 'Estacionamento inteligente em operação real',
  'project.smartparkjf.description':
    'SaaS de gestão para estacionamentos, o sistema está operando atualmente em Juiz de Fora. Monorepo contendo app desktop (Electron), site comercial, painel web de gestão e portal de download. Funcionalidades: Controle de entrada e saída de veículos, fechamento de caixa (financeiro) em tempo real, multi-empresa. Build e releases automatizados via GitHub Actions.',
  'project.reservaquadra.tagline': 'Reserva de quadras esportivas multi-centro',
  'project.reservaquadra.description':
    'Plataforma de agendamento de quadras com arquitetura multi-centro. Fluxo completo de reserva, pagamento integrado via Webhook do Mercado Pago (PIX), comunidade, campeonatos e gestão para proprietários.',
  'project.fitai.tagline': 'Treinos personalizados gerados por IA',
  'project.fitai.description':
    'App mobile que gera fichas de treino personalizadas com IA. Interface nativa Flutter, geração contextual via modelo de linguagem e sincronização de histórico. PWA disponível na web.',
  'project.mbchat.tagline': 'Chat Interno para Redes Locais',
  'project.mbchat.description':
    'Aplicação de mensagens instantâneas em Python para redes LAN com transferência de arquivos, notificações e histórico persistente. Deploy público via GitHub Pages.',

  // GitHub
  'gh.eyebrow': '// 04 — open source',
  'gh.title.pre': 'Sempre',
  'gh.title.accent': 'commitando',
  'gh.lead':
    'Desde repositórios experimentais a sistemas em produção, visando sempre boas práticas e arquitetura — código aberto no GitHub como prova viva do que construo.',
  'gh.stat.repos.label': 'repositórios',
  'gh.stat.prod.label': 'Em Produção',
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
    'Estou disponível para novos projetos e oportunidades. Vamos conversar.',

  // Footer
  'footer.eyebrow': '// fim de arquivo',
  'footer.sub': 'Desenvolvedor Web Full-Stack — Juiz de Fora, MG',
  'footer.built': 'construído com',

  // A11y
  'a11y.fab': 'Acessibilidade',
  'a11y.title': 'Acessibilidade',
  'a11y.open': 'Abrir menu de acessibilidade',
  'a11y.close': 'Fechar menu',
  'a11y.fontSize': 'Tamanho do texto',
  'a11y.font.sm': 'Pequeno',
  'a11y.font.md': 'Normal',
  'a11y.font.lg': 'Grande',
  'a11y.font.xl': 'Extra grande',
  'a11y.section.visual': 'Visualização',
  'a11y.opt.dark': 'Modo escuro',
  'a11y.opt.contrast': 'Alto contraste',
  'a11y.opt.grayscale': 'Escala de cinza',
  'a11y.opt.invert': 'Inverter cores',
  'a11y.opt.saturate': 'Saturação reduzida',
  'a11y.section.reading': 'Leitura',
  'a11y.opt.dyslexia': 'Fonte para dislexia',
  'a11y.opt.spacing': 'Espaçamento ampliado',
  'a11y.opt.links': 'Sublinhar links',
  'a11y.opt.guide': 'Guia de leitura',
  'a11y.opt.hideImages': 'Ocultar imagens',
  'a11y.section.interaction': 'Interação',
  'a11y.opt.motion': 'Reduzir animações',
  'a11y.opt.cursor': 'Cursor grande',
  'a11y.opt.focus': 'Destaque no foco',
  'a11y.opt.lefty': 'Modo canhoto',
  'a11y.section.tts': 'Leitor de tela (áudio)',
  'a11y.tracks': 'Trechos',
  'a11y.tracks.aria': 'Mostrar botões de leitura em cada seção',
  'a11y.tts.play': 'Ouvir página',
  'a11y.tts.play.aria': 'Ouvir a página',
  'a11y.tts.pause': 'Pausar',
  'a11y.tts.pause.aria': 'Pausar leitura',
  'a11y.tts.resume': 'Continuar',
  'a11y.tts.resume.aria': 'Continuar leitura',
  'a11y.tts.stop': 'Parar leitura',
  'a11y.tts.speed': 'Velocidade',
  'a11y.tts.status.ready': 'Pronto para ler o conteúdo.',
  'a11y.tts.status.done': 'Leitura concluída.',
  'a11y.tts.status.error': 'Erro na síntese de voz.',
  'a11y.tts.status.unsupported': 'Seu navegador não suporta síntese de voz.',
  'a11y.tts.status.empty': 'Não há texto para ler neste trecho.',
  'a11y.tts.status.paused': 'Leitura pausada.',
  'a11y.tts.status.stopped': 'Leitura interrompida.',
  'a11y.tts.status.reading': 'Lendo {current} de {total} trechos…',
  'a11y.tts.status.readingSection': 'Lendo trecho: {label}…',
  'a11y.reset': 'Resetar tudo',
  'a11y.note': 'Suas preferências ficam salvas neste dispositivo.',
  'a11y.track.listen': 'Ouvir {label}',
  'a11y.track.aria': 'Ouvir seção {label}',
  'a11y.section.top': 'Início',
  'a11y.section.sobre': 'Sobre',
  'a11y.section.skills': 'Skills',
  'a11y.section.projetos': 'Projetos',
  'a11y.section.github': 'GitHub',
  'a11y.section.contato': 'Contato',
  'a11y.speech.arrow': ', para ',
  'a11y.speech.slash': ' ou ',
  'a11y.speech.and': ' e ',
  'a11y.speech.plus': ' mais ',
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
  'hero.comment': '// role.scope = "end-to-end"',
  'hero.bio':
    'I build web products — from management systems to booking platforms. Focused on fast UIs, clean code and results that actually work.',
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
    "I'm pursuing a <strong>Bachelor's in Information Systems at UniAcademia</strong> (expected graduation: 2027) and completed a Full-Stack Web Development program at Codi Academy. Adaptability, clear communication and proactive problem-solving are what I bring to every project.",
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
    'Products I built — from production systems running for local businesses to personal open-source apps.',
  'project.badge.live': 'in production',
  'project.cta.site': 'Visit site',
  'project.cta.code': 'Code',
  'project.gallery.prev': 'Previous image',
  'project.gallery.next': 'Next image',
  'project.gallery.open': 'Open fullscreen',
  'project.gallery.close': 'Close gallery',
  'project.gallery.lightbox': 'Image gallery',
  'project.api-nfse.tagline': 'Automatic Brazilian service invoice downloader',
  'project.api-nfse.description':
    "Desktop app that authenticates via A1 digital certificate (mTLS) or user/password on Brazil's Gov.br National Portal and batch-downloads NFS-e XMLs by web scraping the municipal portals. Manages multiple companies, auto-syncing through a configurable cron expression and displaying full history categorized by accounting period. Used by accounting firms.",
  'project.smartparkjf.tagline': 'Smart parking, live in production',
  'project.smartparkjf.description':
    'Parking-management SaaS currently in live operation in Juiz de Fora. Monorepo holding a desktop app (Electron), marketing site, web management panel and download portal. Features: vehicle entry and exit control, real-time cash closing (finance), multi-tenant. Builds and releases automated via GitHub Actions.',
  'project.reservaquadra.tagline': 'Multi-club sports court booking',
  'project.reservaquadra.description':
    'Court booking platform with multi-club architecture. Full booking flow, integrated payment via a Mercado Pago webhook (PIX), community, tournaments and owner management.',
  'project.fitai.tagline': 'AI-generated personalized workouts',
  'project.fitai.description':
    'Mobile app that generates personalized workout plans with AI. Native Flutter UI, contextual generation via LLM and history sync. Also available as a PWA.',
  'project.mbchat.tagline': 'Internal chat for local networks',
  'project.mbchat.description':
    'Python instant-messaging app for LAN networks with file transfer, notifications and persistent history. Public deployment via GitHub Pages.',

  'gh.eyebrow': '// 04 — open source',
  'gh.title.pre': 'Always',
  'gh.title.accent': 'shipping',
  'gh.lead':
    'From experimental repos to production systems, always aiming for best practices and solid architecture — open source on GitHub as living proof of what I build.',
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
    'Open to new projects and opportunities. Let\u2019s talk.',

  'footer.eyebrow': '// end of file',
  'footer.sub': 'Full-Stack Web Developer — Juiz de Fora, Brazil',
  'footer.built': 'built with',

  'a11y.fab': 'Accessibility',
  'a11y.title': 'Accessibility',
  'a11y.open': 'Open accessibility menu',
  'a11y.close': 'Close menu',
  'a11y.fontSize': 'Text size',
  'a11y.font.sm': 'Small',
  'a11y.font.md': 'Normal',
  'a11y.font.lg': 'Large',
  'a11y.font.xl': 'Extra large',
  'a11y.section.visual': 'Visual',
  'a11y.opt.dark': 'Dark mode',
  'a11y.opt.contrast': 'High contrast',
  'a11y.opt.grayscale': 'Grayscale',
  'a11y.opt.invert': 'Invert colors',
  'a11y.opt.saturate': 'Reduced saturation',
  'a11y.section.reading': 'Reading',
  'a11y.opt.dyslexia': 'Dyslexia-friendly font',
  'a11y.opt.spacing': 'Wider spacing',
  'a11y.opt.links': 'Underline links',
  'a11y.opt.guide': 'Reading guide',
  'a11y.opt.hideImages': 'Hide images',
  'a11y.section.interaction': 'Interaction',
  'a11y.opt.motion': 'Reduce motion',
  'a11y.opt.cursor': 'Large cursor',
  'a11y.opt.focus': 'Focus highlight',
  'a11y.opt.lefty': 'Left-handed mode',
  'a11y.section.tts': 'Screen reader (audio)',
  'a11y.tracks': 'Snippets',
  'a11y.tracks.aria': 'Show reading buttons on each section',
  'a11y.tts.play': 'Read page',
  'a11y.tts.play.aria': 'Read the page',
  'a11y.tts.pause': 'Pause',
  'a11y.tts.pause.aria': 'Pause reading',
  'a11y.tts.resume': 'Resume',
  'a11y.tts.resume.aria': 'Resume reading',
  'a11y.tts.stop': 'Stop reading',
  'a11y.tts.speed': 'Speed',
  'a11y.tts.status.ready': 'Ready to read the content.',
  'a11y.tts.status.done': 'Reading complete.',
  'a11y.tts.status.error': 'Speech synthesis error.',
  'a11y.tts.status.unsupported': 'Your browser does not support speech synthesis.',
  'a11y.tts.status.empty': 'No text to read in this snippet.',
  'a11y.tts.status.paused': 'Reading paused.',
  'a11y.tts.status.stopped': 'Reading stopped.',
  'a11y.tts.status.reading': 'Reading {current} of {total} snippets…',
  'a11y.tts.status.readingSection': 'Reading snippet: {label}…',
  'a11y.reset': 'Reset all',
  'a11y.note': 'Your preferences are saved on this device.',
  'a11y.track.listen': 'Listen {label}',
  'a11y.track.aria': 'Listen to {label} section',
  'a11y.section.top': 'Home',
  'a11y.section.sobre': 'About',
  'a11y.section.skills': 'Skills',
  'a11y.section.projetos': 'Projects',
  'a11y.section.github': 'GitHub',
  'a11y.section.contato': 'Contact',
  'a11y.speech.arrow': ', to ',
  'a11y.speech.slash': ' or ',
  'a11y.speech.and': ' and ',
  'a11y.speech.plus': ' plus ',
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
  'hero.comment': '// role.scope = "end-to-end"',
  'hero.bio':
    'Construyo productos web — desde sistemas de gestión hasta plataformas de reservas. Enfocado en interfaces rápidas, código limpio y resultados que funcionan.',
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
    'Estudio <strong>Sistemas de Información en UniAcademia</strong> (finalización prevista: 2027) y me formé en Desarrollo Web Full-Stack en Codi Academy. Adaptabilidad, comunicación clara y proactividad para resolver problemas son lo que llevo a cada proyecto.',
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
    'Productos que construí — desde sistemas en producción para negocios locales hasta aplicaciones personales de código abierto.',
  'project.badge.live': 'en producción',
  'project.cta.site': 'Ver sitio',
  'project.cta.code': 'Código',
  'project.gallery.prev': 'Imagen anterior',
  'project.gallery.next': 'Siguiente imagen',
  'project.gallery.open': 'Abrir en pantalla completa',
  'project.gallery.close': 'Cerrar galería',
  'project.gallery.lightbox': 'Galería de imágenes',
  'project.api-nfse.tagline': 'Descargador automático de facturas de servicio',
  'project.api-nfse.description':
    'App de escritorio que autentica vía Certificado Digital A1 (mTLS) o usuario/contraseña en el Portal Nacional Gov.br y descarga XMLs de NFS-e en lote mediante web scraping de los portales municipales. Gestiona múltiples empresas, sincronizando automáticamente mediante una expresión cron configurable y muestra historial completo categorizado por período contable. Utilizado por despachos contables.',
  'project.smartparkjf.tagline': 'Estacionamiento inteligente en operación real',
  'project.smartparkjf.description':
    'SaaS de gestión para estacionamientos, actualmente en operación en Juiz de Fora. Monorepo con app de escritorio (Electron), sitio comercial, panel web de gestión y portal de descarga. Funcionalidades: control de entrada y salida de vehículos, cierre de caja (financiero) en tiempo real, multiempresa. Builds y releases automatizados vía GitHub Actions.',
  'project.reservaquadra.tagline': 'Reserva de canchas deportivas multi-club',
  'project.reservaquadra.description':
    'Plataforma de reservas con arquitectura multi-club. Flujo completo de reserva, pago integrado vía Webhook de Mercado Pago (PIX), comunidad, torneos y gestión para propietarios.',
  'project.fitai.tagline': 'Entrenamientos personalizados generados por IA',
  'project.fitai.description':
    'App móvil que genera planes de entrenamiento personalizados con IA. Interfaz nativa en Flutter, generación contextual vía LLM y sincronización de historial. También disponible como PWA.',
  'project.mbchat.tagline': 'Chat interno para redes locales',
  'project.mbchat.description':
    'Aplicación de mensajería instantánea en Python para redes LAN con transferencia de archivos, notificaciones e historial persistente. Deploy público vía GitHub Pages.',

  'gh.eyebrow': '// 04 — open source',
  'gh.title.pre': 'Siempre',
  'gh.title.accent': 'commiteando',
  'gh.lead':
    'Desde repos experimentales a sistemas en producción, siempre buscando buenas prácticas y arquitectura — código abierto en GitHub como prueba viva de lo que construyo.',
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
    'Disponible para nuevos proyectos y oportunidades. Hablemos.',

  'footer.eyebrow': '// fin de archivo',
  'footer.sub': 'Desarrollador Web Full-Stack — Juiz de Fora, Brasil',
  'footer.built': 'construido con',

  'a11y.fab': 'Accesibilidad',
  'a11y.title': 'Accesibilidad',
  'a11y.open': 'Abrir menú de accesibilidad',
  'a11y.close': 'Cerrar menú',
  'a11y.fontSize': 'Tamaño del texto',
  'a11y.font.sm': 'Pequeño',
  'a11y.font.md': 'Normal',
  'a11y.font.lg': 'Grande',
  'a11y.font.xl': 'Extra grande',
  'a11y.section.visual': 'Visualización',
  'a11y.opt.dark': 'Modo oscuro',
  'a11y.opt.contrast': 'Alto contraste',
  'a11y.opt.grayscale': 'Escala de grises',
  'a11y.opt.invert': 'Invertir colores',
  'a11y.opt.saturate': 'Saturación reducida',
  'a11y.section.reading': 'Lectura',
  'a11y.opt.dyslexia': 'Fuente para dislexia',
  'a11y.opt.spacing': 'Espaciado ampliado',
  'a11y.opt.links': 'Subrayar enlaces',
  'a11y.opt.guide': 'Guía de lectura',
  'a11y.opt.hideImages': 'Ocultar imágenes',
  'a11y.section.interaction': 'Interacción',
  'a11y.opt.motion': 'Reducir animaciones',
  'a11y.opt.cursor': 'Cursor grande',
  'a11y.opt.focus': 'Resaltar foco',
  'a11y.opt.lefty': 'Modo zurdo',
  'a11y.section.tts': 'Lector de pantalla (audio)',
  'a11y.tracks': 'Fragmentos',
  'a11y.tracks.aria': 'Mostrar botones de lectura en cada sección',
  'a11y.tts.play': 'Escuchar página',
  'a11y.tts.play.aria': 'Escuchar la página',
  'a11y.tts.pause': 'Pausar',
  'a11y.tts.pause.aria': 'Pausar lectura',
  'a11y.tts.resume': 'Continuar',
  'a11y.tts.resume.aria': 'Continuar lectura',
  'a11y.tts.stop': 'Detener lectura',
  'a11y.tts.speed': 'Velocidad',
  'a11y.tts.status.ready': 'Listo para leer el contenido.',
  'a11y.tts.status.done': 'Lectura finalizada.',
  'a11y.tts.status.error': 'Error en la síntesis de voz.',
  'a11y.tts.status.unsupported': 'Tu navegador no soporta síntesis de voz.',
  'a11y.tts.status.empty': 'No hay texto para leer en este fragmento.',
  'a11y.tts.status.paused': 'Lectura pausada.',
  'a11y.tts.status.stopped': 'Lectura detenida.',
  'a11y.tts.status.reading': 'Leyendo {current} de {total} fragmentos…',
  'a11y.tts.status.readingSection': 'Leyendo fragmento: {label}…',
  'a11y.reset': 'Restablecer todo',
  'a11y.note': 'Tus preferencias se guardan en este dispositivo.',
  'a11y.track.listen': 'Escuchar {label}',
  'a11y.track.aria': 'Escuchar sección {label}',
  'a11y.section.top': 'Inicio',
  'a11y.section.sobre': 'Sobre mí',
  'a11y.section.skills': 'Skills',
  'a11y.section.projetos': 'Proyectos',
  'a11y.section.github': 'GitHub',
  'a11y.section.contato': 'Contacto',
  'a11y.speech.arrow': ', para ',
  'a11y.speech.slash': ' o ',
  'a11y.speech.and': ' y ',
  'a11y.speech.plus': ' más ',
};

export const translations: Record<Lang, Dict> = { pt, en, es };
