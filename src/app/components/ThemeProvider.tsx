"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Usar dark como valor por defecto
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    // Intentar recuperar el tema guardado, si no existe, usar oscuro por defecto
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      // Si no hay tema almacenado, establecer oscuro por defecto
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  useEffect(() => {
    // Aplicar la clase 'dark' al documento cuando el tema cambie
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    // Guardar el tema actual en localStorage para persistencia
    localStorage.setItem("theme", theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      setTheme(newTheme);
    },
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
} 