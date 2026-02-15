"use client";

import React, { PropsWithChildren, useEffect, useState } from "react";
import {
  ThemeProvider as BaseThemeProvider,
  ThemeProviderProps,
} from "next-themes";

export const ThemeProvider = (props: PropsWithChildren<ThemeProviderProps>) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{props.children}</>; // Render children without ThemeProvider during SSR
  }

  return (
    <BaseThemeProvider
      {...props}
      attribute="class"
      defaultTheme="system"
      enableSystem
    />
  );
};
