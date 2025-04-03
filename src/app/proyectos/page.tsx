"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, Code } from "lucide-react";
import { useLocale } from "../i18n/LocaleContext";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Projects() {
  const { t } = useLocale();
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowFloatingButton(scrollPosition > 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      viewGithub: "Ver en GitHub",
      learningProject: "Proyecto de aprendizaje",
      clientProject: "Proyecto para cliente"
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
      viewGithub: "View on GitHub",
      learningProject: "Learning project",
      clientProject: "Client project"
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
      viewGithub: "Auf GitHub ansehen",
      learningProject: "Lernprojekt",
      clientProject: "Kundenprojekt"
    }
  };

  // Obtener el idioma actual
  const locale = t.home === "Inicio" ? "es" : (t.home === "Home" ? "en" : "de");
  const pageTexts = texts[locale];

  // Lista de proyectos (excluyendo el proyecto principal)
  const projects = t.projects.slice(1);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
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

        {/* Lista de proyectos */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div key={index}>
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Decoración de fondo */}
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-violet-500/5 via-violet-500/0 to-violet-500/5 blur-3xl" />
                
                {/* Área de preview del proyecto */}
                <div className="relative aspect-[16/10] rounded-2xl bg-gradient-to-br from-violet-600/5 via-violet-600/10 to-violet-600/5 p-4 lg:p-8 overflow-hidden shadow-xl">
                  {/* Patrón de fondo */}
                  <div className="absolute inset-0 bg-grid-zinc-900/[0.04] dark:bg-grid-zinc-100/[0.02] bg-[size:20px_20px] opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/10 via-transparent to-transparent mix-blend-overlay" />
                  
                  {/* Contenedor principal con las dos vistas */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Vista Tablet */}
                    <div className="relative w-[28rem] h-[18rem] z-10">
                      <div className="relative w-full h-full">
                        <div className="absolute inset-0 bg-zinc-900/5 dark:bg-zinc-800/5 rounded-2xl" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/10 to-violet-600/5 rounded-2xl" />
                        <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-lg">
                          <Image
                            src={
                              project.title === "EdgeScripts" 
                                ? "/icons/edgetablet.avif" 
                                : project.title === "Control de Acceso" || project.title === "Access Control" || project.title === "Zugangskontrolle"
                                  ? "/icons/tabletcontrol.png"
                                  : "/icons/climatablet.avif"
                            }
                            alt={`${project.title} Tablet View`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Vista Mobile - Solo mostrar para EdgeScripts o Control de Acceso */}
                    {(project.title === "EdgeScripts" || project.title === "Control de Acceso" || project.title === "Access Control" || project.title === "Zugangskontrolle") && (
                      <div className="absolute right-4 -bottom-4 h-56 w-28 z-20">
                        <div className="relative w-full h-full">
                          <div className="absolute inset-0 bg-zinc-900/5 dark:bg-zinc-800/5 rounded-3xl" />
                          <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/10 to-violet-600/5 rounded-3xl" />
                          <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-lg">
                            <Image
                              src={
                                project.title === "EdgeScripts" 
                                  ? "/icons/edgemobile.avif" 
                                  : "/icons/mobilecontrol.png"
                              }
                              alt={`${project.title} Mobile View`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Contenido del proyecto */}
                <div className="relative">
                  <div className="space-y-6">
                    {/* Encabezado del proyecto */}
                    <div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mb-3">
                        {project.title}
                      </h2>
                      <div className="flex items-center gap-3 mb-3">
                        {project.title === "WeatherApp" || project.title === "WetterApp" ? (
                          <span className="px-2.5 py-0.5 text-xs font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full ring-1 ring-emerald-200 dark:ring-emerald-800">
                            {pageTexts.learningProject}
                          </span>
                        ) : project.title === "Control de Acceso" || project.title === "Access Control" || project.title === "Zugangskontrolle" ? (
                          <>
                            <span className="px-2.5 py-0.5 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full ring-1 ring-blue-200 dark:ring-blue-800">
                              {pageTexts.clientProject}
                            </span>
                            <span className="px-2.5 py-0.5 text-xs font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-full ring-1 ring-emerald-200 dark:ring-emerald-800">
                              {pageTexts.completed}
                            </span>
                          </>
                        ) : (
                          <>
                            <span className="px-2.5 py-0.5 text-xs font-medium bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-full ring-1 ring-violet-200 dark:ring-violet-800">
                              {pageTexts.personalProject}
                            </span>
                            <span className="px-2.5 py-0.5 text-xs font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full ring-1 ring-amber-200 dark:ring-amber-800">
                              {pageTexts.inProgress}
                            </span>
                          </>
                        )}
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
                      {project.title === "EdgeScripts" ? (
                        <>
                          <a 
                            href="https://www.edgescripts.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-violet-600 rounded-lg shadow-md"
                          >
                            <ExternalLink className="w-4 h-4" />
                            {pageTexts.visitSite}
                          </a>
                          <a 
                            href="https://github.com/Mulfari/edgescripts"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 rounded-lg shadow-md border border-zinc-200 dark:border-zinc-700"
                          >
                            <Code className="w-4 h-4" />
                            {pageTexts.viewGithub}
                          </a>
                        </>
                      ) : project.title === "Control de Acceso" ? (
                        <a 
                          href="https://control-eosin.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-violet-600 rounded-lg shadow-md"
                        >
                          <ExternalLink className="w-4 h-4" />
                          {pageTexts.visitSite}
                        </a>
                      ) : project.title === "WeatherApp" || project.title === "WetterApp" ? (
                        <>
                          <a 
                            href="https://dapper-banoffee-838abe.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-violet-600 rounded-lg shadow-md"
                          >
                            <ExternalLink className="w-4 h-4" />
                            {pageTexts.visitSite}
                          </a>
                          <a 
                            href="https://github.com/Mulfari/clima"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 rounded-lg shadow-md border border-zinc-200 dark:border-zinc-700"
                          >
                            <Code className="w-4 h-4" />
                            {pageTexts.viewGithub}
                          </a>
                        </>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Separador */}
              {index < projects.length - 1 && (
                <div className="relative mt-16">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-zinc-200 dark:border-zinc-800"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <div className="px-4 bg-zinc-50 dark:bg-zinc-900">
                      <div className="h-2 w-2 rounded-full bg-zinc-400 dark:bg-zinc-600"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 