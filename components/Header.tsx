// ---------------------- components/Header.tsx ----------------------
"use client";
import React, { useState, useRef, useEffect } from "react";
import MegaMenu from "./MegaMenu";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpenMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref]);

  return (
    <header className="relative bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <button
          aria-haspopup="true"
          aria-expanded={openMenu}
          onClick={() => setOpenMenu((o) => !o)}
          className="p-2 rounded-md hover:bg-gray-100 transition"
        >
          ☰
        </button>
        <h1 className="text-2xl font-serif font-bold text-gray-900">
          Olivträdgården
        </h1>
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" aria-label="Sök" className="p-2 hover:text-oliveGreen">
            🔍
          </a>
          <a href="#" aria-label="Profil" className="p-2 hover:text-oliveGreen">
            👤
          </a>
          <a href="#" aria-label="Kundvagn" className="p-2 hover:text-oliveGreen">
            🛒
          </a>
        </div>
      </div>
      <div ref={ref}>{openMenu && <MegaMenu />}</div>
    </header>
  );
}
