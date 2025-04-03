"use client";

import { useState, useEffect } from "react";
import { useLocale } from "../i18n/LocaleContext";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "../components/ScrollReveal";
import { ArrowLeft, ExternalLink, Search, Tag } from "lucide-react";

// Definición del tipo de herramienta
type Tool = {
  id: string;
  name: string;
  description: {
    es: string;
    en: string;
    de: string;
  };
  url: string;
  category: string;
  icon: string;
};

// Lista de herramientas
const tools: Tool[] = [
  {
    id: "postspark",
    name: "PostSpark",
    description: {
      es: "Plataforma avanzada para crear mockups profesionales de páginas web. Ideal para presentar diseños a clientes y visualizar el aspecto final de un proyecto antes de su desarrollo.",
      en: "Advanced platform for creating professional website mockups. Perfect for presenting designs to clients and visualizing the final look of a project before development.",
      de: "Fortschrittliche Plattform zur Erstellung professioneller Website-Mockups. Ideal, um Designs Kunden zu präsentieren und das endgültige Aussehen eines Projekts vor der Entwicklung zu visualisieren."
    },
    url: "https://postspark.app/",
    category: "design",
    icon: "/icons/pstablet.png"
  }
];

// Categorías de herramientas
const categories = [
  { id: "all", name: { es: "Todas", en: "All", de: "Alle" } },
  { id: "development", name: { es: "Desarrollo", en: "Development", de: "Entwicklung" } },
  { id: "design", name: { es: "Diseño", en: "Design", de: "Design" } },
  { id: "productivity", name: { es: "Productividad", en: "Productivity", de: "Produktivität" } },
  { id: "marketing", name: { es: "Marketing", en: "Marketing", de: "Marketing" } }
];

export default function ToolsPage() {
  const { locale } = useLocale();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredTools, setFilteredTools] = useState<Tool[]>(tools);
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  // Textos multilingües para esta página
  const texts = {
    es: {
      title: "Herramientas de Diseño",
      description: "Colección de herramientas útiles para diseño web y creación de mockups profesionales",
      backToHome: "Volver al inicio",
      visit: "Visitar herramienta"
    },
    en: {
      title: "Design Tools",
      description: "Collection of useful tools for web design and professional mockup creation",
      backToHome: "Back to home",
      visit: "Visit tool"
    },
    de: {
      title: "Design-Tools",
      description: "Sammlung nützlicher Tools für Webdesign und professionelle Mockup-Erstellung",
      backToHome: "Zurück zur Startseite",
      visit: "Tool besuchen"
    }
  };

  // Obtener el idioma actual para los textos
  const currentLocale = locale as keyof typeof texts;
  const pageTexts = texts[currentLocale];

  // Filtrar herramientas basadas en búsqueda y categoría
  useEffect(() => {
    let filtered = [...tools];
    
    // Filtrar por categoría
    if (selectedCategory !== "all") {
      filtered = filtered.filter(tool => tool.category === selectedCategory);
    }
    
    // Filtrar por búsqueda
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        tool => 
          tool.name.toLowerCase().includes(query) || 
          tool.description[locale as keyof typeof tool.description].toLowerCase().includes(query)
      );
    }
    
    setFilteredTools(filtered);
  }, [searchQuery, selectedCategory, locale]);

  // Manejar el botón flotante al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowFloatingButton(scrollPosition > 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Botón flotante que aparece al hacer scroll */}
        <Link
          href="/"
          className={`fixed top-24 left-8 z-50 p-3.5 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-full border border-zinc-200/50 dark:border-zinc-700/50 hover:border-violet-300 dark:hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-all duration-500 shadow-lg hover:shadow-xl text-zinc-700 dark:text-zinc-300 flex items-center justify-center transform ${
            showFloatingButton 
              ? 'translate-x-0 opacity-100 rotate-0' 
              : '-translate-x-12 opacity-0 rotate-180 pointer-events-none'
          }`}
          aria-label={pageTexts.backToHome}
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>

        {/* Encabezado */}
        <div className="mb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-3 px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-white dark:bg-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:border-violet-300 dark:hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-all duration-300 shadow-sm hover:shadow-md mb-8"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            {pageTexts.backToHome}
          </Link>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            {pageTexts.title}
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl">
            {pageTexts.description}
          </p>
        </div>

        {/* Búsqueda y filtros */}
        <ScrollReveal delay={200} className="mb-10">
          <div className="bg-white dark:bg-zinc-800 rounded-xl shadow-md p-4 max-w-3xl">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Búsqueda */}
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-zinc-400" />
                </div>
                <input
                  type="text"
                  className="pl-10 pr-4 py-2 w-full rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none"
                  placeholder={locale === 'es' ? "Buscar herramientas..." : locale === 'en' ? "Search tools..." : "Tools suchen..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              {/* Filtro por categoría */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                <Tag className="h-4 w-4 text-zinc-400 flex-shrink-0" />
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-3 py-1 rounded-full text-sm font-medium flex-shrink-0 ${
                      selectedCategory === category.id
                        ? "bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-400"
                        : "bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-600"
                    }`}
                  >
                    {category.name[locale as keyof typeof category.name]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Lista de herramientas */}
        <ScrollReveal delay={400}>
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
            {filteredTools.length > 0 ? (
              filteredTools.map((tool) => (
                <div
                  key={tool.id}
                  className="bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-zinc-200 dark:border-zinc-700 flex flex-col md:flex-row"
                >
                  <div className="w-full md:w-2/5 relative overflow-hidden min-h-[200px] md:min-h-[300px] bg-violet-50 dark:bg-violet-900/20 flex items-center justify-center">
                    <div className="absolute inset-0 opacity-50 bg-gradient-to-tr from-violet-100 to-transparent dark:from-violet-900/20 dark:to-transparent"></div>
                    <div className="relative w-4/5 h-4/5 transform hover:scale-105 transition-transform duration-300">
                      <Image
                        src={tool.icon}
                        alt={tool.name}
                        width={300}
                        height={200}
                        className="object-contain drop-shadow-xl"
                        priority
                      />
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="mb-6">
                      <div className="flex items-center mb-4">
                        <span className="px-3 py-1 text-xs font-medium bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 rounded-full">
                          {categories.find(cat => cat.id === tool.category)?.name[locale as keyof (typeof categories[0])["name"]]}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white mb-3">
                        {tool.name}
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-300 text-base md:text-lg leading-relaxed">
                        {tool.description[locale as keyof typeof tool.description]}
                      </p>
                    </div>
                    <div className="mt-auto pt-6 border-t border-zinc-100 dark:border-zinc-700">
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors shadow-sm hover:shadow-md text-base"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>{pageTexts.visit}</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <p className="text-lg text-zinc-500 dark:text-zinc-400">
                  {locale === 'es' 
                    ? "No se encontraron herramientas que coincidan con tu búsqueda." 
                    : locale === 'en' 
                      ? "No tools found matching your search." 
                      : "Keine Tools gefunden, die Ihrer Suche entsprechen."}
                </p>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
} 