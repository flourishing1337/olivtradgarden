// ---------------------- components/MegaMenu.tsx ----------------------
"use client";
import React, { useId } from "react";

interface MenuItem {
  label: string;
  href: string;
}
interface MegaMenuProps {
  items?: MenuItem[];
}

export default function MegaMenu({
  items = [
    { label: "Hem", href: "/" },
    { label: "Produkter", href: "/products" },
    { label: "Om Oss", href: "/about" },
    { label: "Kontakt", href: "/contact" },
  ],
}: MegaMenuProps) {
  const menuId = useId();
  return (
    <nav
      aria-label="Huvudmeny"
      id={menuId}
      className="absolute top-full left-0 w-full bg-white shadow-lg z-50"
    >
      <ul className="flex flex-col md:flex-row justify-around p-6 space-y-4 md:space-y-0">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="block text-gray-800 font-medium hover:text-oliveGreen transition"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
