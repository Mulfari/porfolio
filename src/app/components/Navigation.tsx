'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ThemeSwitch } from './ThemeSwitch';
import dynamic from 'next/dynamic';

// Importar LanguageSelector dinámicamente para evitar problemas con la hidratación
const LanguageSelector = dynamic(
  () => import('./LanguageSelector').then(mod => mod.LanguageSelector),
  { ssr: false }
);

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {/* Enlaces eliminados */}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <LanguageSelector />
            
            {/* Dark Mode Toggle */}
            <ThemeSwitch />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors cursor-pointer"
              aria-label="Abrir menú"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
            {/* Enlaces móviles eliminados */}
          </div>
        </div>
      )}
    </nav>
  );
} 