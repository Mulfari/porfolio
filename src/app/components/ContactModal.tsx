"use client";

import { useState, useEffect, useRef } from 'react';
import { X, Mail, Copy, Check, Send } from 'lucide-react';
import { useLocale } from '../i18n/LocaleContext';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { t } = useLocale();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [copyStatus, setCopyStatus] = useState<{
    email: boolean;
    telegram: boolean;
  }>({
    email: false,
    telegram: false
  });

  // Actualizar los datos de contacto para usar JSCM en lugar de jscmulfari
  const contactInfo = {
    email: "jscm@gmail.com",
    telegram: "@jscm"
  };

  // Gestionar la animación de entrada/salida del modal
  useEffect(() => {
    if (isOpen) {
      setIsModalVisible(true);
      // Deshabilitar scroll del body cuando el modal está abierto
      document.body.style.overflow = 'hidden';
    } else {
      setTimeout(() => {
        setIsModalVisible(false);
        // Restaurar scroll del body cuando el modal está cerrado
        document.body.style.overflow = 'auto';
      }, 300);
    }

    // Limpieza al desmontar
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Cerrar al presionar Escape
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  // Cerrar al hacer clic fuera del modal
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node) && isOpen) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Función para copiar al portapapeles
  const copyToClipboard = async (text: string, type: 'email' | 'telegram') => {
    try {
      await navigator.clipboard.writeText(text);
      
      // Actualizar el estado para mostrar feedback
      setCopyStatus(prev => ({ ...prev, [type]: true }));
      
      // Restablecer el estado después de 2 segundos
      setTimeout(() => {
        setCopyStatus(prev => ({ ...prev, [type]: false }));
      }, 2000);
    } catch (err) {
      console.error('Error al copiar', err);
    }
  };

  if (!isOpen && !isModalVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 transition-opacity duration-300 flex items-center justify-center ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Overlay de fondo semitransparente */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm"
        style={{ backdropFilter: 'blur(4px)' }}
      />
      
      {/* Modal */}
      <div 
        ref={modalRef}
        className={`relative bg-white dark:bg-zinc-800/95 rounded-xl shadow-2xl max-w-md w-full mx-auto overflow-hidden transform transition-all duration-300 ${
          isOpen ? 'translate-y-0 scale-100' : 'translate-y-4 scale-95 opacity-0'
        } z-10`}
      >
          {/* Header */}
          <div className="px-6 py-4 border-b border-zinc-200 dark:border-zinc-700 flex items-center justify-between">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">{t.contactInfo}</h3>
            <button 
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-700 text-zinc-500 dark:text-zinc-400 transition-colors cursor-pointer"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Body */}
          <div className="p-6 space-y-6">
            <p className="text-zinc-600 dark:text-zinc-300 text-center pb-2">
              {t.contactVia}
            </p>
            
            {/* Email */}
            <div className="bg-zinc-50/90 dark:bg-zinc-900/70 rounded-lg p-4 border border-zinc-200 dark:border-zinc-700">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-violet-600 dark:text-violet-400 mr-2" />
                  <span className="font-medium text-zinc-900 dark:text-white">{t.email}</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-zinc-600 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                >
                  {contactInfo.email}
                </a>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => copyToClipboard(contactInfo.email, 'email')}
                    className="p-1.5 rounded-lg bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 text-zinc-700 dark:text-zinc-300 transition-colors"
                    aria-label="Copiar email"
                  >
                    {copyStatus.email ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="p-1.5 rounded-lg bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 text-zinc-700 dark:text-zinc-300 transition-colors"
                    aria-label="Enviar email"
                  >
                    <Send className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Telegram */}
            <div className="bg-zinc-50/90 dark:bg-zinc-900/70 rounded-lg p-4 border border-zinc-200 dark:border-zinc-700">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  {/* Icono de Telegram */}
                  <svg 
                    className="w-5 h-5 text-violet-600 dark:text-violet-400 mr-2" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.293c-.145.658-.537.818-1.084.51l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.332-.373-.119L8.48 13.047l-2.95-.924c-.642-.204-.654-.642.135-.954l11.514-4.435c.536-.204 1.005.119.833.514z" />
                  </svg>
                  <span className="font-medium text-zinc-900 dark:text-white">{t.telegram}</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-zinc-600 dark:text-zinc-300">
                  {contactInfo.telegram}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => copyToClipboard(contactInfo.telegram, 'telegram')}
                    className="p-1.5 rounded-lg bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 text-zinc-700 dark:text-zinc-300 transition-colors"
                    aria-label="Copiar usuario de Telegram"
                  >
                    {copyStatus.telegram ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  <a
                    href={`https://t.me/${contactInfo.telegram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 text-zinc-700 dark:text-zinc-300 transition-colors group"
                    aria-label="Iniciar chat en Telegram"
                  >
                    <Send className="w-4 h-4 group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-700 text-center">
              <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                {t.contactClosing}
              </p>
            </div>
          </div>
        </div>
    </div>
  );
} 