'use client';

import Link from 'next/link';
import { ThemeSwitch } from './ThemeSwitch';
import dynamic from 'next/dynamic';
import { useLocale } from '../i18n/LocaleContext';

// Importar LanguageSelector dinámicamente para evitar problemas con la hidratación
const LanguageSelector = dynamic(
  () => import('./LanguageSelector').then(mod => mod.LanguageSelector),
  { ssr: false }
);

export default function Navigation() {
  // Usar desestructuración solo para lo que necesitamos
  const { t } = useLocale();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-zinc-900 dark:text-white">
              Salvador<span className="text-violet-600 dark:text-violet-400">Dev</span>
            </span>
          </Link>

          {/* Right side buttons */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <LanguageSelector />
            
            {/* Dark Mode Toggle */}
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
} 