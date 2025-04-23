"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import MegaMenu from "./MegaMenu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuOpen && headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Change bg on scroll
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: 'Hem', href: '/' },
    { label: 'Produkter', href: '/products' },
    { label: 'Om Oss', href: '/about' },
    { label: 'Kontakt', href: '/contact' }
  ];

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 transition-colors p-4 flex items-center justify-between backdrop-blur-sm ${
        scrolled ? 'bg-white/90 shadow-lg' : 'bg-transparent'
      }`}
    >
      {/* Logo + Hamburger */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 text-2xl md:hidden"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
        <Link href="/" className="text-2xl font-serif font-bold text-gray-800">
          Olivträdgården
        </Link>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-gray-700 hover:text-gray-900 transition"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Icons */}
      <div className="flex space-x-4">
        <Link href="/search" className="p-2 text-xl hover:text-gray-600">
          🔍
        </Link>
        <Link href="/account" className="p-2 text-xl hover:text-gray-600">
          👤
        </Link>
        <Link href="/cart" className="p-2 text-xl hover:text-gray-600">
          🛒
        </Link>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute inset-x-0 top-full bg-white/95 shadow-lg backdrop-blur-sm md:hidden">
          <MegaMenu links={navLinks} onLinkClick={() => setMenuOpen(false)} />
        </div>
      )}
    </header>
  );
}
