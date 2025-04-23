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
    variants?: { edges: Array<{ node: { pricing: { price: { gross: { amount: number; currency: string } } } } }> };
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const node = product.variants?.edges[0]?.node;
  if (!node) return null;
  const { amount, currency } = node.pricing.price.gross;

  return (
    <Link href={`/products/${product.id}`} className="block">
      <a className="block">
        <div className="border rounded-lg overflow-hidden shadow hover:shadow-2xl transition-shadow p-4">
          <Image
            src={product.thumbnail.url}
            alt={product.thumbnail.alt ?? product.name}
            width={300}
            height={300}
            className="object-cover w-full h-64"
          />
          <h3 className="mt-2 text-lg font-semibold text-gray-800 truncate">
            {product.name}
          </h3>
          <p className="mt-1 text-gray-700">
            {amount.toLocaleString("sv-SE")} {currency}
          </p>
        </div>
      </a>
    </Link>
  );
}
