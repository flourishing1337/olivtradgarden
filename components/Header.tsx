'use client';
import { useState } from 'react';
import MegaMenu from './MegaMenu';

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="relative flex justify-between items-center py-4 px-8 bg-beige rounded-b-3xl shadow">
      <button
        onClick={() => setOpenMenu(!openMenu)}
        className="text-olive text-3xl"
      >
        ☰
      </button>

      <h1 className="text-2xl font-bold font-serif text-darkBrown">Olivträdgården</h1>

      <div className="flex items-center gap-4 text-olive">
        <button>🔍</button>
        <button>👤</button>
        <button>🛒</button>
      </div>

      {openMenu && <MegaMenu />}
    </header>
  );
}
