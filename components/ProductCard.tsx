// ---------------------- components/ProductCard.tsx ----------------------
"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    thumbnail: { url: string; alt?: string };
    variants?: { edges: Array<{ node: any }> };
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const firstVariant = product.variants?.edges[0]?.node;
  if (!firstVariant) return null;
  const { amount, currency } = firstVariant.pricing.price.gross;

  return (
    <Link href={`/products/${product.id}`} className="group block">
      <a className="block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
        <div className="relative w-full h-64 sm:h-72 lg:h-80">
          <Image
            src={product.thumbnail.url}
            alt={product.thumbnail.alt || product.name}
            fill
            className="object-cover group-hover:scale-105 transition"
          />
        </div>
        <div className="p-4 bg-white">
          <h3 className="text-lg font-semibold mb-2 text-gray-900">
            {product.name}
          </h3>
          <p className="text-xl font-bold text-gray-900">
            {amount.toLocaleString("sv-SE")} {currency}
          </p>
        </div>
      </a>
    </Link>
  );
}
