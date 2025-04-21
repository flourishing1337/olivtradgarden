'use client';

import { useState } from 'react';
import MegaMenu from './MegaMenu';

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="relative flex justify-between items-center p-4 bg-beige text-darkBrown">
      <button onClick={() => setOpenMenu(!openMenu)}>
        ☰
      </button>

      <h1 className="font-serif text-xl font-bold">Olivträdgården</h1>

      <div className="flex items-center gap-4">
        <button>🔍</button>
        <button>👤</button>
        <button>🛒</button>
      </div>

      {openMenu && <MegaMenu />}
    </header>
  );
}
