'use client';

import { useState } from 'react';
import MegaMenu from './MegaMenu';

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="relative flex justify-between items-center p-4 bg-beige shadow-md">
      <button
        onClick={() => setOpenMenu(!openMenu)}
        className="text-2xl font-bold text-oliveGreen"
      >
        ☰
      </button>

      <h1 className="text-2xl font-serif text-oliveGreen">Olivträdgården</h1>

      <div className="flex items-center gap-4 text-oliveGreen">
        <button>🔍</button>
        <button>👤</button>
        <button>🛒</button>
      </div>

      {openMenu && <MegaMenu />}
    </header>
  );
}
