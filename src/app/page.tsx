"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, Download, ExternalLink, Code, Star, ArrowRight } from "lucide-react";
import TechIconsCarousel from "./components/Carrusel";
import ContactModal from "./components/ContactModal";
import { useState } from "react";
import { useLocale } from "./i18n/LocaleContext";

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
          <div className="flex-1 flex flex-col-reverse lg:flex-row items-center justify-center gap-12 py-10 lg:py-16">
            {/* Contenido Principal */}
            <div className="flex-1 space-y-6 max-w-2xl">
              <div className="space-y-2">
                <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white leading-tight ${locale === 'de' ? 'lg:text-4xl lg:tracking-tighter whitespace-nowrap' : ''}`}>
                  {t.greeting} <span className="text-violet-600 dark:text-violet-400">{t.name}</span> 👋
                </h1>
                <h2 className="text-lg sm:text-xl lg:text-2xl text-zinc-600 dark:text-zinc-300 leading-tight">
                  {t.role}
                </h2>
              </div>

              <p className="text-base lg:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {t.description}
              </p>

              {/* Botones de Acción */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-violet-600 hover:bg-violet-700 text-white text-base transition-colors cursor-pointer shadow-lg hover:shadow-xl"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  {t.contactMe}
                </button>
                <div 
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-700 text-base transition-colors shadow-lg hover:shadow-xl cursor-not-allowed"
                >
                  <Download className="w-4 h-4 mr-2" />
                  {t.downloadCV}
                </div>
              </div>

              {/* Redes Sociales */}
              <div className="flex items-center gap-4 pt-4">
                <a 
                  href="https://github.com/Mulfari" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors shadow-md hover:shadow-lg"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/smulfari/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors shadow-md hover:shadow-lg"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="mailto:jscm@gmail.com"
                  className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors shadow-md hover:shadow-lg"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Imagen de Perfil */}
            <div className="relative w-72 h-72 lg:w-[28rem] lg:h-[28rem]">
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-violet-400 rounded-full opacity-20 blur-3xl"></div>
              <Image
                src="/profile.jpg"
                alt="Foto de perfil"
                width={450}
                height={450}
                className="relative rounded-full border-4 border-white dark:border-zinc-800 shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Sección de Tecnologías - Justo debajo del hero */}
          <div className="pb-20 pt-0 lg:pt-4">
            <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-10 text-center">
              {t.techStack}
            </h3>
            <TechIconsCarousel />
          </div>
        </div>

        {/* Sección de Proyecto Destacado */}
        <div className="py-8">
          {/* Proyecto destacado en diseño especial */}
          <div className="bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-zinc-200 dark:border-zinc-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Imagen del proyecto */}
              <div className="relative overflow-hidden h-full min-h-[400px] bg-gradient-to-br from-violet-600/5 to-violet-400/5">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-transparent to-transparent z-10"></div>
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Laptop */}
                  <div className="relative w-[85%] -mr-24 transform transition-all duration-1000 animate-fade-in-up hover:scale-105">
                    <Image
                      src="/icons/pc.png"
                      alt="Laptop view"
                      width={1000}
                      height={625}
                      className="w-full h-auto drop-shadow-2xl"
                      priority
                    />
                  </div>
                  {/* Mobile */}
                  <div className="relative w-[22%] transform translate-y-4 transition-all duration-1000 animate-fade-in-right delay-300 hover:scale-105">
                    <Image
                      src="/icons/mobile.png"
                      alt="Mobile view"
                      width={250}
                      height={500}
                      className="w-full h-auto drop-shadow-2xl"
                      priority
                    />
                  </div>
                </div>
                {/* Badge de destacado */}
                <div className="absolute top-4 left-4 bg-violet-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center z-20 animate-fade-in">
                  <Star className="w-3 h-3 mr-1" />
                  {t.featuredProject}
                </div>
              </div>

              {/* Información del proyecto */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between">
                    <h4 className="text-2xl font-bold text-zinc-900 dark:text-white">
                      {t.projects[0].title}
                    </h4>
                    <span className="px-3 py-1 text-xs font-semibold bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full">
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
              </div>
            </div>
          </div>
          
          {/* Botón Ver más proyectos */}
          <div className="mt-4 flex justify-end">
            <Link
              href="/proyectos"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:border-violet-300 dark:hover:border-violet-500 hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <span className="font-medium">{t.viewMore}</span>
              <ArrowRight className="w-4 h-4 text-violet-500 dark:text-violet-400 transition-all duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Espacio para más contenido */}
        <div className="py-16"></div>
      </main>
    </div>
  );
}

// Datos de los proyectos
const featuredProjects = [
  {
    image: "https://jscm.my.canva.site/",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "Tailwind CSS", "Redux"],
    demo: "https://demo-portfolio.vercel.app",
    github: "https://github.com/jscm/portfolio"
  }
];
