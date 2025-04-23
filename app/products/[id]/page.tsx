// app/products/[id]/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "@/lib/queries";

export default function ProductPage() {
  const { id } = useParams() as { id: string };

  const { data, loading, error } = useQuery(GET_PRODUCT, {
    variables: { id, channel: "main-store" },
  });

  if (loading) {
    return <p className="p-4">Laddar produkt…</p>;
  }
  if (error || !data?.product) {
    return <p className="p-4 text-red-600">Ett fel uppstod: {error?.message}</p>;
  }

  const p = data.product;

  return (
    <article className="max-w-3xl mx-auto p-4">
      <Link href="/products" className="text-sm text-gray-500 hover:underline">
        ◀︎ Tillbaka till Produkter
      </Link>

      <h1 className="mt-4 text-3xl font-bold">{p.name}</h1>

      <div className="mt-2 prose prose-slate" dangerouslySetInnerHTML={{ __html: p.description }} />

      <div className="mt-6">
        {p.media.map((m: any) =>
          m.type === "IMAGE" ? (
            <img
              key={m.url}
              src={m.url}
              alt={m.alt || p.name}
              className="w-full rounded-lg shadow mb-4"
            />
          ) : (
            <video key={m.url} controls className="w-full rounded-lg shadow mb-4">
              <source src={m.url} />
              Your browser does not support HTML5 video.
            </video>
          )
        )}
      </div>

      <p className="mt-4 text-xl">
        Pris:{" "}
        {p.variants.edges[0].node.pricing.price.gross.amount.toLocaleString("sv-SE")}{" "}
        {p.variants.edges[0].node.pricing.price.gross.currency}
      </p>

      <button
        className="mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        onClick={() => {
          /* TODO: Lägg till i varukorg */
        }}
      >
        Lägg i varukorg
      </button>
    </article>
  );
}
