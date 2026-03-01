"use client";

import { useState } from "react";

export default function MobileMenu({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        id="nav-icon4"
        className={`menu_icon ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="menu" style={isOpen ? { display: "block" } : undefined}>
        {children}
      </div>
    </>
  );
}
