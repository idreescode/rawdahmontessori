"use client";

import { useEffect, useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const menu = document.querySelector(".header .menu") as HTMLElement | null;
    if (!menu) return;
    if (isOpen) {
      menu.style.display = "block";
    } else {
      menu.style.display = "";
    }
  }, [isOpen]);

  return (
    <div
      id="nav-icon4"
      className={`menu_icon ${isOpen ? "open" : ""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
