'use client';

export default function MegaMenu() {
  return (
    <nav className="absolute top-full left-0 w-full bg-sand shadow-lg z-50">
      <ul className="flex flex-col md:flex-row justify-around p-4">
        <li><a href="#" className="text-darkBrown hover:text-oliveGreen">Hem</a></li>
        <li><a href="#" className="text-darkBrown hover:text-oliveGreen">Produkter</a></li>
        <li><a href="#" className="text-darkBrown hover:text-oliveGreen">Om Oss</a></li>
        <li><a href="#" className="text-darkBrown hover:text-oliveGreen">Kontakt</a></li>
      </ul>
    </nav>
  );
}
