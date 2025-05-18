"use client";

import { useTheme } from "next-themes";
import React from "react";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export const ThemeSwitcher = ({ className }: { className?: string }) => {
  const { setTheme } = useTheme();
  return (
    <Button
      variant="outline"
      size="icon"
      className={cn(className)}
      onClick={() =>
        setTheme((currentTheme) =>
          currentTheme === "light" ? "dark" : "light"
        )
      }
    >
      <Sun className="h-6 w-6 rotate scale-100 transition-all dark:rotate-90 dark:scale-0" />
      <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle light/dark theme</span>
    </Button>
  );
};
