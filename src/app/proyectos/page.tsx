"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLocale } from "../i18n/LocaleContext";

export default function ComingSoon() {
  const { t } = useLocale();

  // Textos multilingües para esta página
  const texts = {
    es: {
      comingSoon: "Próximamente",
      description: "Estamos trabajando en mostrar más proyectos interesantes en esta sección. ¡Vuelve pronto para ver todas las novedades!",
      backToHome: "Volver al inicio"
    },
    en: {
      comingSoon: "Coming Soon",
      description: "We are working on displaying more interesting projects in this section. Come back soon to see all the new content!",
      backToHome: "Back to home"
    },
    de: {
      comingSoon: "Demnächst",
      description: "Wir arbeiten daran, weitere interessante Projekte in diesem Bereich zu präsentieren. Kommen Sie bald wieder, um alle Neuigkeiten zu sehen!",
      backToHome: "Zurück zur Startseite"
    }
  };

  // Obtener el idioma actual
  const locale = t.home === "Inicio" ? "es" : (t.home === "Home" ? "en" : "de");
  const pageTexts = texts[locale];

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-16">
      <div className="text-center max-w-2xl mx-auto">
        {/* Icono o ilustración */}
        <div className="w-24 h-24 rounded-full bg-violet-200 dark:bg-violet-900/50 flex items-center justify-center mx-auto mb-8">
          <svg
            className="w-12 h-12 text-violet-600 dark:text-violet-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>

        {/* Título y descripción */}
        <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
          {pageTexts.comingSoon}
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-300 mb-12">
          {pageTexts.description}
        </p>

        {/* Botón para volver */}
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-violet-600 hover:bg-violet-700 text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          {pageTexts.backToHome}
        </Link>
      </div>
    </div>
  );
} 