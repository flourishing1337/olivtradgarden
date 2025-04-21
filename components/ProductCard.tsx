'use client';

import Image from 'next/image';

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
}

export default function ProductCard({ image, title, price }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-serif text-oliveGreen mb-2">{title}</h3>
        <p className="text-darkBrown font-semibold">{price} kr</p>
      </div>
    </div>
  );
}
