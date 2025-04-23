"use client";
import React from "react";
import Link from "next/link";

interface MegaMenuProps {
  links: Array<{ label: string; href: string }>;
  onLinkClick: () => void;
}

export default function MegaMenu({ links, onLinkClick }: MegaMenuProps) {
  return (
    <nav className="py-4 px-6">
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block text-lg text-gray-700 hover:text-gray-900 transition"
              onClick={onLinkClick}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
