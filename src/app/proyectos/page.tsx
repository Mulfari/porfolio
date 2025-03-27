"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, Code, Star } from "lucide-react";
import { useLocale } from "../i18n/LocaleContext";
import Image from "next/image";

export default function Projects() {
  const { t } = useLocale();

  // Textos multilingües para esta página
  const texts = {
    es: {
      title: "Proyectos",
      description: "Explora mi colección de proyectos y desarrollos",
      backToHome: "Volver al inicio",
      viewDemo: "Ver proyecto",
      viewCode: "Código fuente",
      inProgress: "En desarrollo",
      completed: "Completado",
      personalProject: "Proyecto personal",
      technologies: "Stack tecnológico",
      visitSite: "Visitar sitio",
      viewGithub: "Ver en GitHub"
    },
    en: {
      title: "Projects",
      description: "Explore my collection of projects and developments",
      backToHome: "Back to home",
      viewDemo: "View project",
      viewCode: "Source code",
      inProgress: "In progress",
      completed: "Completed",
      personalProject: "Personal project",
      technologies: "Tech stack",
      visitSite: "Visit site",
      viewGithub: "View on GitHub"
    },
    de: {
      title: "Projekte",
      description: "Entdecken Sie meine Sammlung von Projekten und Entwicklungen",
      backToHome: "Zurück zur Startseite",
      viewDemo: "Projekt ansehen",
      viewCode: "Quellcode",
      inProgress: "In Entwicklung",
      completed: "Abgeschlossen",
      personalProject: "Persönliches Projekt",
      technologies: "Tech-Stack",
      visitSite: "Website besuchen",
      viewGithub: "Auf GitHub ansehen"
    }
  };

  // Obtener el idioma actual
  const locale = t.home === "Inicio" ? "es" : (t.home === "Home" ? "en" : "de");
  const pageTexts = texts[locale];

  // Lista de proyectos
  const projects = t.projects;

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="mb-16">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-zinc-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            {pageTexts.backToHome}
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            {pageTexts.title}
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl">
            {pageTexts.description}
          </p>
        </div>

        {/* Lista de proyectos */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index === 0 ? 'pb-12 border-b border-zinc-200 dark:border-zinc-800' : ''
              }`}
            >
              {/* Área de preview del proyecto */}
              {index === 0 ? (
                <div className="relative aspect-[16/10] rounded-2xl bg-gradient-to-br from-violet-600/5 via-violet-600/10 to-violet-600/5 p-4 lg:p-8 overflow-hidden shadow-xl">
                  {/* Patrón de fondo */}
                  <div className="absolute inset-0 bg-grid-zinc-900/[0.04] dark:bg-grid-zinc-100/[0.02] bg-[size:20px_20px]" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/10 via-transparent to-transparent mix-blend-overlay" />
                  
                  {/* Contenedor principal con las dos vistas */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Vista Tablet */}
                    <div className="relative w-[28rem] h-[18rem] z-10">
                      <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-500">
                        <div className="absolute inset-0 bg-zinc-900/5 dark:bg-zinc-800/5 rounded-2xl" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/10 to-violet-600/5 rounded-2xl" />
                        <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-lg">
                          <Image
                            src="/icons/edgetablet.avif"
                            alt="EdgeScripts Tablet View"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Vista Mobile */}
                    <div className="absolute right-4 -bottom-4 h-56 w-28 z-20">
                      <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-500">
                        <div className="absolute inset-0 bg-zinc-900/5 dark:bg-zinc-800/5 rounded-3xl" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/10 to-violet-600/5 rounded-3xl" />
                        <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-lg">
                          <Image
                            src="/icons/edgemobile.avif"
                            alt="EdgeScripts Mobile View"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Vista normal para otros proyectos
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800 shadow-xl">
                  <Image
                    src="/icons/default-project.png"
                    alt={project.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/10 via-transparent to-transparent mix-blend-overlay" />
                </div>
              )}

              {/* Contenido del proyecto */}
              <div className="relative">
                <div className="space-y-6">
                  {/* Encabezado del proyecto */}
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mb-3">
                      {project.title}
                    </h2>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2.5 py-0.5 text-xs font-medium bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-full">
                        {pageTexts.personalProject}
                      </span>
                      <span className="px-2.5 py-0.5 text-xs font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full">
                        {pageTexts.inProgress}
                      </span>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-300 lg:text-lg">
                      {project.description}
                    </p>
                  </div>

                  {/* Tecnologías */}
                  <div>
                    <h3 className="text-sm font-medium text-zinc-900 dark:text-white mb-3">
                      {pageTexts.technologies}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-full border border-zinc-200 dark:border-zinc-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Botones de acción */}
                  <div className="flex flex-wrap gap-4">
                    {index === 0 ? (
                      <>
                        <a 
                          href="https://www.edgescripts.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-violet-600 rounded-lg hover:bg-violet-700 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          {pageTexts.visitSite}
                        </a>
                        <a 
                          href="https://github.com/Mulfari/edgescripts"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                        >
                          <Code className="w-4 h-4" />
                          {pageTexts.viewGithub}
                        </a>
                      </>
                    ) : (
                      <>
                        <a 
                          href="#"
                          className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-violet-600 rounded-lg hover:bg-violet-700 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          {pageTexts.viewDemo}
                        </a>
                        <a 
                          href="#"
                          className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                        >
                          <Code className="w-4 h-4" />
                          {pageTexts.viewCode}
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 