"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, Download, ExternalLink, Code, Star, ArrowRight, Hammer, Layers } from "lucide-react";
import TechIconsCarousel from "./components/Carrusel";
import ContactModal from "./components/ContactModal";
import { useState } from "react";
import { useLocale } from "./i18n/LocaleContext";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { t, locale } = useLocale();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
      {/* Modal de Contacto */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen flex flex-col pt-4">
          {/* Hero Principal - Pantalla completa */}
          <div className="flex-1 flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-12 py-10 lg:py-20">
            {/* Contenido Principal */}
            <ScrollReveal className="flex-1 space-y-4 lg:space-y-6 max-w-2xl px-4 text-center lg:text-left">
              <div className="space-y-2">
                <h1 className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-zinc-900 dark:text-white leading-tight flex flex-wrap items-baseline gap-x-2 gap-y-1 justify-center lg:justify-start ${
                  locale === 'de' 
                    ? 'lg:text-[2.75rem] xl:text-[3.25rem] tracking-tight' 
                    : ''
                }`}>
                  <span className="whitespace-nowrap">{t.greeting}</span>
                  <span className="whitespace-nowrap text-violet-600 dark:text-violet-400">{t.name}</span>
                  <span className="whitespace-nowrap">👋</span>
                </h1>
                <h2 className="text-base sm:text-lg lg:text-xl xl:text-2xl text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {t.role}
                </h2>
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {t.description}
              </p>

              {/* Botones de Acción */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-violet-600 hover:bg-violet-700 text-white text-sm sm:text-base transition-colors cursor-pointer shadow-lg hover:shadow-xl"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  {t.contactMe}
                </button>
                <a 
                  href={`/docs/${locale}/cv.pdf`}
                  download="Salvador Mulfari CV.pdf"
                  className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-700 text-sm sm:text-base transition-colors shadow-lg hover:shadow-xl"
                >
                  <Download className="w-4 h-4 mr-2" />
                  {t.downloadCV}
                </a>
              </div>

              {/* Redes Sociales */}
              <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
                <a 
                  href="https://github.com/Mulfari" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors shadow-md hover:shadow-lg"
                >
                  <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/smulfari/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors shadow-md hover:shadow-lg"
                >
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a 
                  href="mailto:jscmulfari@gmail.com"
                  className="p-2.5 sm:p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors shadow-md hover:shadow-lg"
                >
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </ScrollReveal>

            {/* Imagen de Perfil */}
            <ScrollReveal delay={300} className="relative w-52 h-44 sm:w-60 sm:h-52 md:w-72 md:h-56 lg:w-80 lg:h-64 xl:w-[22rem] xl:h-72 mb-2 lg:mb-0 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-violet-400 rounded-full opacity-20 blur-3xl"></div>
              <Image
                src="/icons/perfil.avif"
                alt="Foto de perfil"
                width={400}
                height={400}
                className="relative rounded-full border-4 border-white dark:border-zinc-800 shadow-2xl object-cover object-top scale-110"
                priority
              />
            </ScrollReveal>
          </div>

          {/* Sección de Tecnologías - Justo debajo del hero */}
          <ScrollReveal delay={600} className="pb-20 pt-0 lg:pt-4">
            <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-10 text-center">
              {t.techStack}
            </h3>
            <TechIconsCarousel />
          </ScrollReveal>
        </div>

        {/* Sección de Proyecto Destacado */}
        <ScrollReveal delay={300} className="py-8">
          {/* Proyecto destacado en diseño especial */}
          <div className="bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-zinc-200 dark:border-zinc-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Imagen del proyecto */}
              <div className="relative overflow-hidden h-full min-h-[400px] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-transparent to-transparent z-10"></div>
                
                {/* Laptop en el centro */}
                <div className="relative z-10 transform scale-[0.85] lg:scale-100 animate-fade-in-up hover:scale-[1.02] transition-all duration-300">
                  <Image
                    src="/icons/pc.png"
                    alt="Vista en laptop"
                    width={600}
                    height={400}
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Tablet a la izquierda */}
                <div className="absolute left-4 lg:left-16 z-20 transform -translate-x-1/3 translate-y-4 scale-[0.4] lg:scale-[0.55] hover:scale-[0.57] transition-transform duration-300 animate-fade-in-up animation-delay-300">
                  <Image
                    src="/icons/tablet.png"
                    alt="Vista en tablet"
                    width={300}
                    height={400}
                    className="object-contain"
                  />
                </div>

                {/* Mobile a la derecha */}
                <div className="absolute right-4 lg:right-16 z-20 transform translate-x-[40%] translate-y-8 scale-[0.35] lg:scale-[0.5] hover:scale-[0.52] transition-transform duration-300 animate-fade-in-up animation-delay-500">
                  <Image
                    src="/icons/mobile.png"
                    alt="Vista en móvil"
                    width={200}
                    height={400}
                    className="object-contain"
                  />
                </div>

                {/* Badge de destacado */}
                <div className="absolute top-4 left-4 bg-violet-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center z-30">
                  <Star className="w-3 h-3 mr-1" />
                  {t.featuredProject}
                </div>
              </div>

              {/* Información del proyecto */}
              <ScrollReveal delay={500} className="p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h4 className="text-2xl font-bold text-zinc-900 dark:text-white">
                        {t.projects[0].title}
                      </h4>
                      <p className="text-sm text-violet-600 dark:text-violet-400 font-medium">
                        {t.projectStatus.personalProject}
                      </p>
                    </div>
                    <span className="px-3 py-1.5 text-xs font-semibold bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full flex items-center gap-1.5 shadow-sm">
                      <Hammer className="w-3 h-3" />
                      {t.projectStatus.inProgress}
                    </span>
                  </div>

                  <p className="mt-4 text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed">
                    {t.projects[0].description}
                  </p>

                  <div className="mt-6">
                    <h5 className="text-sm font-semibold text-zinc-900 dark:text-white mb-2">{t.mainFeatures}</h5>
                    <ul className="list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400">
                      {t.projects[0].features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-700">
                    <h5 className="text-sm font-semibold text-zinc-900 dark:text-white mb-3">{t.technologiesUsed}</h5>
                    <div className="flex flex-wrap gap-2">
                      {featuredProjects[0].technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 text-sm bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <a 
                    href={featuredProjects[0].demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {t.viewDemo}
                  </a>
                  <a 
                    href={featuredProjects[0].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors"
                  >
                    <Code className="w-4 h-4" />
                    {t.viewCode}
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
          
          {/* Botón Ver más proyectos */}
          <ScrollReveal delay={700} className="mt-4 flex justify-end">
            <Link
              href="/proyectos"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:border-violet-300 dark:hover:border-violet-500 hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <span className="font-medium">{t.viewMore}</span>
              <ArrowRight className="w-4 h-4 text-violet-500 dark:text-violet-400 transition-all duration-300 group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </ScrollReveal>

        {/* Sección de acceso a Herramientas */}
        <ScrollReveal delay={400} className="py-16">
          <div className="bg-gradient-to-r from-violet-50 to-zinc-50 dark:from-violet-950/30 dark:to-zinc-900 rounded-2xl overflow-hidden shadow-lg border border-violet-100 dark:border-violet-900/30 p-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex-1 space-y-4 text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
                  {t.tools}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base max-w-xl">
                  {t.toolsDescription}
                </p>
              </div>
              
              <div className="flex-shrink-0">
                <Link
                  href={locale === 'en' ? '/en/tools' : locale === 'de' ? '/de/tools' : '/herramientas'}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors shadow-md hover:shadow-lg"
                >
                  <Layers className="w-5 h-5" />
                  <span>{locale === 'es' ? 'Explorar herramientas' : locale === 'en' ? 'Explore tools' : 'Tools erkunden'}</span>
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Espacio para más contenido */}
        <div className="py-8"></div>
      </main>
    </div>
  );
}

// Datos de los proyectos
const featuredProjects = [
  {
    technologies: ["Next.js", "TradingView API", "Bybit API", "WebSocket", "Nest.js", "PostgreSQL", "Railway", "Tailwind CSS"],
    demo: "https://edgetrader.vercel.app/",
    github: "https://github.com/Mulfari/edgetrader"
  }
];
