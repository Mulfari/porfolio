import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import { LocaleProvider } from "./i18n/LocaleContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Salvador - Desarrollador Full Stack",
  description: "Portafolio profesional de Salvador Mulfari, desarrollador Full Stack especializado en crear experiencias digitales excepcionales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <LocaleProvider>
          <ThemeProvider>
            <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white">
              <Navigation />
              <div className="pt-16">
                {children}
              </div>
              <Footer />
            </div>
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
