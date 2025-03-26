import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import { LocaleProvider } from "./i18n/LocaleContext";
import { Metadata } from "next";
import { metadata as i18nMetadata } from './i18n/metadata';

const inter = Inter({ subsets: ["latin"] });

// Metadata por defecto en español
const defaultMetadata: Metadata = {
  title: {
    template: '%s | Salvador Mulfari',
    default: i18nMetadata.es.title,
  },
  description: i18nMetadata.es.description,
  icons: {
    icon: [
      {
        url: '/icons/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/icons/icon.svg',
        type: 'image/svg+xml',
      }
    ],
    apple: '/icons/apple-touch-icon.png',
    shortcut: '/icons/favicon.ico',
  },
  manifest: '/site.webmanifest',
};

export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white antialiased`}>
        <LocaleProvider>
          <ThemeProvider>
            <Navigation />
            <div className="pt-16">
              {children}
            </div>
            <Footer />
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
