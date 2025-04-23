'use client';

import { useParams } from 'next/navigation';
import { useQuery } from '@apollo/client';
import { GET_PRODUCT } from '@/lib/queries';

export default function ProductPage() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { id }
  });

  if (loading) return <div>Laddar produkt...</div>;
  if (error) return <div>Ett fel uppstod: {error.message}</div>;
  if (!data?.product) return <div>Ingen produkt hittades</div>;

  const product = data.product;

  return (
    <article className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <div 
        className="prose mb-4"
        dangerouslySetInnerHTML={{ __html: product.description }} 
      />
      {product.media?.[0] && (
        <img 
          src={product.media[0].url} 
          alt={product.media[0].alt} 
          className="w-full rounded-lg shadow-lg mb-4"
        />
      )}
      {product.variants?.edges?.[0]?.node?.pricing?.price && (
        <p className="text-xl font-semibold">
          Pris: {product.variants.edges[0].node.pricing.price.gross.amount}{" "}
          {product.variants.edges[0].node.pricing.price.gross.currency}
        </p>
      )}
    </article>
  );
}
