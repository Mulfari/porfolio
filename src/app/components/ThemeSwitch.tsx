"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-300 dark:hover:bg-zinc-600 transition-colors cursor-pointer"
      aria-label="Cambiar tema"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-amber-500" />
      ) : (
        <Moon className="h-5 w-5 text-violet-600" />
      )}
    </button>
  );
} 