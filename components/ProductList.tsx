// ---------------------- components/ProductList.tsx ----------------------
"use client";
import React from "react";
import { useQuery, gql } from "@apollo/client";
import ProductCard from "./ProductCard";
import Link from "next/link";

const GET_PRODUCTS = gql`
  query GetProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          name
          thumbnail { url alt }
          variants(first: 1) {
            edges {
              node {
                pricing {
                  price { gross { amount currency } }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default function ProductList() {
  const { data, loading, error } = useQuery(GET_PRODUCTS, { variables: { first: 12 } });

  if (loading)
    return <p className="py-12 text-center">Laddar produkter…</p>;
  if (error)
    return (
      <p className="py-12 text-center text-red-600">
        Det gick inte att hämta produkter: {error.message}
      </p>
    );

  const products = data.products.edges.map((edge: any) => edge.node);

  if (products.length === 0)
    return <p className="py-12 text-center">Inga produkter hittades.</p>;

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Populära Olivträd</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map((prod: any) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href="/products">
          <button className="px-6 py-2 border-2 rounded hover:bg-gray-100 transition">
            Se alla produkter
          </button>
        </Link>
      </div>
    </section>
  );
}
