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
        title: "Plataforma de E-commerce",
        description: "Una plataforma de comercio electrónico moderna y completa, diseñada para ofrecer una experiencia de compra fluida y atractiva. Incluye funcionalidades avanzadas como carrito de compras, pasarela de pagos y panel de administración intuitivo.",
        features: [
          "Sistema de autenticación seguro con múltiples niveles de usuarios",
          "Carrito de compras persistente con actualizaciones en tiempo real",
          "Pasarela de pagos integrada con Stripe",
          "Panel de administración para gestión de productos e inventario",
          "Diseño responsive adaptado a todos los dispositivos"
        ]
      },
      {
        title: "Aplicación de Gestión de Proyectos",
        description: "Sistema colaborativo para la gestión eficiente de proyectos y tareas en equipo, con funcionalidades de seguimiento en tiempo real, asignación de recursos y generación de informes.",
        features: [
          "Tableros kanban personalizables con drag & drop",
          "Sistema de comentarios y menciones para comunicación de equipo",
          "Gráficos de Gantt para visualización de cronogramas",
          "Integración con Google Calendar y Microsoft Teams",
          "Notificaciones en tiempo real y alertas de vencimiento"
        ]
      },
      {
        title: "Portal de Aprendizaje Online",
        description: "Plataforma educativa con cursos interactivos, seguimiento de progreso y certificaciones. Ideal para instituciones educativas o empresas que buscan capacitar a su personal.",
        features: [
          "Reproductor de video con transcripciones automáticas",
          "Sistema de evaluación con diferentes tipos de exámenes",
          "Foros de discusión y salas de estudio virtuales",
          "Generación de certificados personalizados",
          "Analíticas detalladas de aprendizaje por estudiante"
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
        title: "E-commerce Platform",
        description: "A modern and comprehensive e-commerce platform, designed to provide a smooth and attractive shopping experience. It includes advanced features such as shopping cart, payment gateway, and intuitive admin panel.",
        features: [
          "Secure authentication system with multiple user levels",
          "Persistent shopping cart with real-time updates",
          "Integrated payment gateway with Stripe",
          "Admin panel for product and inventory management",
          "Responsive design adapted to all devices"
        ]
      },
      {
        title: "Project Management Application",
        description: "Collaborative system for efficient management of team projects and tasks, with real-time tracking capabilities, resource allocation, and report generation.",
        features: [
          "Customizable kanban boards with drag & drop",
          "Comment and mention system for team communication",
          "Gantt charts for timeline visualization",
          "Integration with Google Calendar and Microsoft Teams",
          "Real-time notifications and deadline alerts"
        ]
      },
      {
        title: "Online Learning Portal",
        description: "Educational platform with interactive courses, progress tracking and certifications. Ideal for educational institutions or companies looking to train their staff.",
        features: [
          "Video player with automatic transcriptions",
          "Evaluation system with different types of exams",
          "Discussion forums and virtual study rooms",
          "Generation of personalized certificates",
          "Detailed learning analytics per student"
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
        title: "E-Commerce-Plattform",
        description: "Eine moderne E-Commerce-Plattform mit Warenkorb, Zahlungsabwicklung und intuitivem Admin-Panel für ein optimales Einkaufserlebnis.",
        features: [
          "Sicheres Authentifizierungssystem",
          "Echtzeit-Warenkorb",
          "Stripe-Integration",
          "Admin-Panel für Produkte",
          "Responsive Design"
        ]
      },
      {
        title: "Projektmanagement-Anwendung",
        description: "Kollaboratives System für effizientes Management von Teamprojekten und Aufgaben, mit Echtzeit-Tracking, Ressourcenzuweisung und Berichtserstellung.",
        features: [
          "Anpassbare Kanban-Boards mit Drag & Drop",
          "Kommentar- und Erwähnungssystem für Teamkommunikation",
          "Gantt-Diagramme zur Zeitplanung",
          "Integration mit Google Calendar und Microsoft Teams",
          "Echtzeit-Benachrichtigungen"
        ]
      },
      {
        title: "Online-Lernportal",
        description: "Bildungsplattform mit interaktiven Kursen, Fortschrittsverfolgung und Zertifizierungen für Bildungseinrichtungen oder Unternehmen.",
        features: [
          "Videoplayer mit automatischen Transkriptionen",
          "Bewertungssystem mit verschiedenen Prüfungsarten",
          "Diskussionsforen und virtuelle Lernräume",
          "Erstellung personalisierter Zertifikate",
          "Detaillierte Lernanalysen pro Student"
        ]
      }
    ],
    
    // Footer
    footerRights: "Alle Rechte vorbehalten",
    madeWith: "Erstellt mit",
    allRightsReserved: "© 2025 Salvador Mulfari. Alle Rechte vorbehalten."
  }
}; 