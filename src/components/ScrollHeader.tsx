"use client";

import { useEffect, useState } from "react";

export default function ScrollHeader({ children }: { children: React.ReactNode }) {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header_main ${isFixed ? "fixed" : ""}`}>
      {children}
    </header>
  );
}
