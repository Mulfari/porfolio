'use client';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import { LocaleProvider, useLocale } from "./i18n/LocaleContext";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

const titles = {
  es: "Salvador Mulfari | Desarrollador Full Stack",
  en: "Salvador Mulfari | Full Stack Dev",
  de: "Salvador Mulfari | Full Stack Entwickler"
};

function RootLayoutContent({ children }: { children: React.ReactNode }) {
  const { locale } = useLocale();

  useEffect(() => {
    document.title = titles[locale as keyof typeof titles];
  }, [locale]);

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className={`${inter.className} bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white antialiased`}>
        <ThemeProvider>
          <Navigation />
          <div className="pt-16">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LocaleProvider>
      <RootLayoutContent>{children}</RootLayoutContent>
    </LocaleProvider>
  );
}
