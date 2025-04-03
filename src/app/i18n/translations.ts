type Locale = 'es' | 'en' | 'de';

export type Translations = {
  [key in Locale]: {
    // Header/Navigation
    home: string;
    
    // Hero section
    greeting: string;
    name: string;
    role: string;
    description: string;
    downloadCV: string;
    contactMe: string;
    
    // Tech section
    techStack: string;
    
    // Project section
    featuredProject: string;
    allProjects: string;
    projectStatus: {
      inProgress: string;
      completed: string;
      personalProject: string;
      clientProject: string;
    };
    viewDemo: string;
    viewCode: string;
    viewMore: string;
    mainFeatures: string;
    technologiesUsed: string;
    
    // Contact modal
    contactInfo: string;
    contactVia: string;
    email: string;
    telegram: string;
    copySuccess: string;
    chatWithMe: string;
    contactClosing: string;

    // Project data
    projects: {
      title: string;
      description: string;
      features: string[];
    }[];
    
    // Footer
    footerRights: string;
    madeWith: string;
    allRightsReserved: string;
  }
};

export const translations: Translations = {
  es: {
    // Header/Navigation
    home: 'Inicio',
    
    // Hero section
    greeting: 'Hola, soy',
    name: 'Salvador',
    role: 'Desarrollador Full Stack especializado en crear experiencias digitales excepcionales',
    description: 'Me apasiona construir soluciones tecnológicas innovadoras y escalables. Con experiencia en React, Next.js, Node.js y más tecnologías modernas.',
    downloadCV: 'Descargar CV',
    contactMe: 'Contáctame',
    
    // Tech section
    techStack: 'Stack Tecnológico',
    
    // Project section
    featuredProject: 'Proyecto Destacado',
    allProjects: 'Ver todos los proyectos',
    projectStatus: {
      inProgress: 'En desarrollo',
      completed: 'Completado',
      personalProject: 'Proyecto personal',
      clientProject: 'Proyecto para cliente'
    },
    viewDemo: 'Ver Demo',
    viewCode: 'Ver Código',
    viewMore: 'Ver más proyectos',
    mainFeatures: 'Características principales:',
    technologiesUsed: 'Tecnologías utilizadas:',
    
    // Contact modal
    contactInfo: 'Mis datos de contacto',
    contactVia: 'Puedes contactarme a través de los siguientes medios:',
    email: 'Correo electrónico',
    telegram: 'Telegram',
    copySuccess: 'Copiado',
    chatWithMe: 'Iniciar chat en Telegram',
    contactClosing: 'Estaré encantado de conversar contigo sobre oportunidades de colaboración o cualquier consulta que tengas.',

    // Project data
    projects: [
      {
        title: "Plataforma de Trading",
        description: "Una plataforma avanzada de trading que ofrece herramientas profesionales para el análisis técnico y la ejecución de operaciones en tiempo real. Diseñada para traders de todos los niveles.",
        features: [
          "Gráficos interactivos con múltiples timeframes y herramientas de análisis técnico",
          "Integración con APIs de exchanges para trading en tiempo real",
          "Sistema de gestión de riesgo y calculadora de posiciones",
          "Panel de control personalizable con indicadores técnicos",
          "Historial detallado de operaciones y análisis de rendimiento"
        ]
      },
      {
        title: "EdgeScripts",
        description: "Plataforma de venta de scripts y herramientas automatizadas para juegos en línea. Desarrollada con tecnologías modernas para ofrecer una experiencia de usuario fluida y segura.",
        features: [
          "React y Vite para una interfaz de usuario moderna y rápida",
          "Node.js para el backend robusto y escalable",
          "Firebase para autenticación y base de datos en tiempo real",
          "Stripe para procesamiento seguro de pagos",
          "Render para el despliegue continuo y confiable"
        ]
      },
      {
        title: "Control de Acceso",
        description: "Sistema de control de acceso con asignación de roles, contabilidad e inventario. Proyecto desarrollado a pedido para un cliente, ofreciendo una solución completa para la gestión de accesos y recursos.",
        features: [
          "Next.js para el frontend y Nest.js para el backend",
          "Zustand para manejo de estado global",
          "PostgreSQL con TypeORM como ORM",
          "Sistema de roles y permisos",
          "Módulos de contabilidad e inventario",
          "Despliegue continuo con Vercel"
        ]
      },
      {
        title: "WeatherApp",
        description: "Aplicación web que proporciona información meteorológica en tiempo real. Desarrollada con React y la API de pronóstico del tiempo para ofrecer datos precisos y actualizados.",
        features: [
          "React y Vite para una interfaz moderna y responsiva",
          "Integración con API de pronóstico del tiempo",
          "Diseño adaptable para todos los dispositivos",
          "Información detallada de temperatura y condiciones",
          "Búsqueda de ubicaciones por nombre"
        ]
      }
    ],
    
    // Footer
    footerRights: "Todos los derechos reservados",
    madeWith: "Hecho con",
    allRightsReserved: "© 2025 Salvador Mulfari. Todos los derechos reservados."
  },
  
  en: {
    // Header/Navigation
    home: 'Home',
    
    // Hero section
    greeting: 'Hello, I\'m',
    name: 'Salvador',
    role: 'Full Stack Developer specialized in creating exceptional digital experiences',
    description: 'I am passionate about building innovative and scalable technological solutions. Experienced with React, Next.js, Node.js and other modern technologies.',
    downloadCV: 'Download CV',
    contactMe: 'Contact Me',
    
    // Tech section
    techStack: 'Tech Stack',
    
    // Project section
    featuredProject: 'Featured Project',
    allProjects: 'View all projects',
    projectStatus: {
      inProgress: 'In progress',
      completed: 'Completed',
      personalProject: 'Personal project',
      clientProject: 'Client project'
    },
    viewDemo: 'View Demo',
    viewCode: 'View Code',
    viewMore: 'View more projects',
    mainFeatures: 'Main features:',
    technologiesUsed: 'Technologies used:',
    
    // Contact modal
    contactInfo: 'My contact information',
    contactVia: 'You can contact me through the following channels:',
    email: 'Email',
    telegram: 'Telegram',
    copySuccess: 'Copied',
    chatWithMe: 'Start Telegram chat',
    contactClosing: 'I would be happy to discuss collaboration opportunities or answer any questions you might have.',

    // Project data
    projects: [
      {
        title: "Trading Platform",
        description: "An advanced trading platform offering professional tools for technical analysis and real-time trade execution. Designed for traders of all levels.",
        features: [
          "Interactive charts with multiple timeframes and technical analysis tools",
          "Exchange API integration for real-time trading",
          "Risk management system and position calculator",
          "Customizable dashboard with technical indicators",
          "Detailed trading history and performance analytics"
        ]
      },
      {
        title: "EdgeScripts",
        description: "Platform for selling scripts and automated tools for online games. Developed with modern technologies to provide a smooth and secure user experience.",
        features: [
          "React and Vite for a modern and fast user interface",
          "Node.js for robust and scalable backend",
          "Firebase for authentication and real-time database",
          "Stripe for secure payment processing",
          "Render for continuous and reliable deployment"
        ]
      },
      {
        title: "Access Control",
        description: "Access control system with role assignment, accounting and inventory. Project developed for a client, offering a complete solution for access and resource management.",
        features: [
          "Next.js for frontend and Nest.js for backend",
          "Zustand for global state management",
          "PostgreSQL with TypeORM as ORM",
          "Role and permission system",
          "Accounting and inventory modules",
          "Continuous deployment with Vercel"
        ]
      },
      {
        title: "WeatherApp",
        description: "Web application that provides real-time weather information. Developed with React and the weather forecast API to offer accurate and up-to-date data.",
        features: [
          "React and Vite for a modern and responsive interface",
          "Weather forecast API integration",
          "Responsive design for all devices",
          "Detailed temperature and conditions information",
          "Location search by name"
        ]
      }
    ],
    
    // Footer
    footerRights: "All rights reserved",
    madeWith: "Made with",
    allRightsReserved: "© 2025 Salvador Mulfari. All rights reserved."
  },
  
  de: {
    // Header/Navigation
    home: 'Startseite',
    
    // Hero section
    greeting: 'Hallo, ich bin',
    name: 'Salvador',
    role: 'Full-Stack-Entwickler für außergewöhnliche digitale Erlebnisse',
    description: 'Ich entwickle innovative technologische Lösungen mit React, Next.js, Node.js und anderen modernen Technologien.',
    downloadCV: 'Lebenslauf',
    contactMe: 'Kontakt',
    
    // Tech section
    techStack: 'Technologien',
    
    // Project section
    featuredProject: 'Projekt',
    allProjects: 'Alle Projekte anzeigen',
    projectStatus: {
      inProgress: 'In Entwicklung',
      completed: 'Abgeschlossen',
      personalProject: 'Persönliches Projekt',
      clientProject: 'Kundenprojekt'
    },
    viewDemo: 'Demo',
    viewCode: 'Code',
    viewMore: 'Mehr Projekte',
    mainFeatures: 'Funktionen:',
    technologiesUsed: 'Technologien:',
    
    // Contact modal
    contactInfo: 'Kontaktdaten',
    contactVia: 'Sie können mich kontaktieren über:',
    email: 'E-Mail',
    telegram: 'Telegram',
    copySuccess: 'Kopiert',
    chatWithMe: 'Chat starten',
    contactClosing: 'Ich freue mich auf Ihre Anfragen und mögliche Zusammenarbeit.',

    // Project data
    projects: [
      {
        title: "Trading-Plattform",
        description: "Eine fortschrittliche Trading-Plattform mit professionellen Tools für technische Analyse und Echtzeit-Handel. Entwickelt für Trader aller Erfahrungsstufen.",
        features: [
          "Interaktive Charts mit verschiedenen Zeitrahmen und technischen Analysewerkzeugen",
          "Börsen-API-Integration für Echtzeit-Trading",
          "Risikomanagement-System und Positionsrechner",
          "Anpassbares Dashboard mit technischen Indikatoren",
          "Detaillierte Handelshistorie und Leistungsanalyse"
        ]
      },
      {
        title: "EdgeScripts",
        description: "Plattform für den Verkauf von Skripten und automatisierten Tools für Online-Spiele. Entwickelt mit modernen Technologien für eine reibungslose und sichere Benutzererfahrung.",
        features: [
          "React und Vite für eine moderne und schnelle Benutzeroberfläche",
          "Node.js für robustes und skalierbares Backend",
          "Firebase für Authentifizierung und Echtzeit-Datenbank",
          "Stripe für sichere Zahlungsabwicklung",
          "Render für kontinuierliche und zuverlässige Bereitstellung"
        ]
      },
      {
        title: "Zugangskontrolle",
        description: "Zugangskontrollsystem mit Rollenzuweisung, Buchhaltung und Inventar. Projekt für einen Kunden entwickelt, das eine komplette Lösung für die Zugangs- und Ressourcenverwaltung bietet.",
        features: [
          "Next.js für Frontend und Nest.js für Backend",
          "Zustand für globales State-Management",
          "PostgreSQL mit TypeORM als ORM",
          "Rollen- und Berechtigungssystem",
          "Buchhaltungs- und Inventarmodule",
          "Kontinuierliche Bereitstellung mit Vercel"
        ]
      },
      {
        title: "WetterApp",
        description: "Webanwendung, die Echtzeit-Wetterinformationen bereitstellt. Entwickelt mit React und der Wettervorhersage-API für genaue und aktuelle Daten.",
        features: [
          "React und Vite für eine moderne und responsive Benutzeroberfläche",
          "Integration der Wettervorhersage-API",
          "Responsives Design für alle Geräte",
          "Detaillierte Temperatur- und Wetterbedingungen",
          "Standortsuche nach Namen"
        ]
      }
    ],
    
    // Footer
    footerRights: "Alle Rechte vorbehalten",
    madeWith: "Erstellt mit",
    allRightsReserved: "© 2025 Salvador Mulfari. Alle Rechte vorbehalten."
  }
}; 