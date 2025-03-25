"use client";

import { useState, useRef, useEffect } from 'react';
import { useLocale } from '../i18n/LocaleContext';
import { Globe } from 'lucide-react';

const languageNames = {
  es: { 
    native: 'Español',
    en: 'Spanish',
    de: 'Spanisch',
    es: 'Español'
  },
  en: { 
    native: 'English',
    en: 'English',
    de: 'Englisch',
    es: 'Inglés'
  },
  de: { 
    native: 'Deutsch',
    en: 'German',
    de: 'Deutsch',
    es: 'Alemán'
  }
};

export function LanguageSelector() {
  const { locale, changeLocale, locales } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Cerrar el menú cuando se hace clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-colors cursor-pointer flex items-center gap-1.5"
        aria-label="Cambiar idioma"
      >
        <Globe className="h-5 w-5" />
        <span className="hidden sm:inline text-sm font-medium uppercase">{locale}</span>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-zinc-800 rounded-md shadow-lg py-1 z-50 border border-zinc-200 dark:border-zinc-700">
          {locales.map((lang) => (
            <button
              key={lang}
              onClick={() => {
                changeLocale(lang);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors ${
                locale === lang ? 'bg-zinc-100 dark:bg-zinc-700 text-violet-600 dark:text-violet-400 font-medium' : 'text-zinc-700 dark:text-zinc-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{languageNames[lang].native}</span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  {lang !== locale && languageNames[lang][locale as keyof typeof languageNames[typeof lang]]}
                </span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// Exportamos también como default para compatibilidad con dynamic import
export default LanguageSelector; 