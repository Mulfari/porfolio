"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useMemo } from 'react';
import { translations, Translations } from './translations';

type Locale = 'es' | 'en' | 'de';

// Mapeo simplificado de países a idiomas
const countryToLocale: Record<string, Locale> = {
  'ES': 'es', // España -> Español
  'DE': 'de', // Alemania -> Alemán
  // El resto de países usará inglés por defecto
};

type LocaleContextType = {
  locale: Locale;
  t: Translations[Locale];
  changeLocale: (newLocale: Locale) => void;
  locales: readonly Locale[];
};

// Crear el contexto con valores predeterminados para evitar problemas con SSR
const defaultContextValue: LocaleContextType = {
  locale: 'en',
  t: translations['en'],
  changeLocale: () => {},
  locales: ['es', 'en', 'de']
};

const LocaleContext = createContext<LocaleContextType>(defaultContextValue);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('es');
  
  // Usar useMemo para 'locales' para evitar que se vuelva a crear en cada renderizado
  const locales = useMemo(() => ['es', 'en', 'de'] as const, []);

  useEffect(() => {
    async function detectLocale() {
      try {
        // Intentar recuperar el idioma guardado en localStorage primero
        const savedLocale = localStorage.getItem('locale') as Locale | null;
        if (savedLocale && locales.includes(savedLocale)) {
          setLocale(savedLocale);
          return;
        }

        // Intentar obtener el idioma del navegador
        const browserLang = navigator.language.split('-')[0];
        if (browserLang === 'es') {
          setLocale('es');
        } else if (browserLang === 'de') {
          setLocale('de');
        } else {
          setLocale('en');
        }

        // Guardar el idioma detectado
        localStorage.setItem('locale', locale);
      } catch (error) {
        console.error('Error detecting language:', error);
        // En caso de error, usar español como idioma por defecto
        setLocale('es');
        localStorage.setItem('locale', 'es');
      }
    }

    detectLocale();
  }, [locales, locale]);

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
    // Opcionalmente puedes cambiar el atributo lang del HTML
    document.documentElement.lang = newLocale;
  };

  const value = {
    locale,
    t: translations[locale],
    changeLocale,
    locales
  };

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  return context;
} 