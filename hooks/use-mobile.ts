"use client";

import { useState, useEffect } from "react";

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if screen width is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typical md breakpoint
    };

    // Check on initial load
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Clean up
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
}
