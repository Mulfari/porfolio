'use client';

import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useLocale } from '../i18n/LocaleContext';

export default function Footer() {
  const { t } = useLocale();
  
  return (
    <footer className="bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {/* Columna 1 - Logo y descripción (4 columnas) */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xl font-bold text-zinc-900 dark:text-white">
              José<span className="text-violet-600 dark:text-violet-400">Dev</span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl">
              {t.description}
            </p>
          </div>

          {/* Columna 2 - Contacto (2 columnas) */}
          <div className="md:col-span-2 md:pl-12">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white uppercase tracking-wider mb-4">
              {t.contactInfo}
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:jscmulfari@gmail.com"
                  className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  jscmulfari@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/Mulfari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/smulfari/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
            {t.allRightsReserved}
          </p>
          <p className="text-center text-sm text-zinc-500 dark:text-zinc-500 mt-2 flex items-center justify-center">
            {t.madeWith} <Heart className="w-4 h-4 mx-1 text-red-500" /> & Next.js
          </p>
        </div>
      </div>
    </footer>
  );
} 