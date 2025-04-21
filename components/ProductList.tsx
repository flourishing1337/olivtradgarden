'use client';

import ProductCard from '@/components/ProductCard';

const products = [
  {
    id: 1,
    title: 'Olivträd 60 år',
    price: 13000,
    image: '/images/olivtrad-60.jpg'
  },
  {
    id: 2,
    title: 'Olivträd 40 år',
    price: 9000,
    image: '/images/olivtrad-40.jpg'
  },
  {
    id: 3,
    title: 'Olivträd 20 år',
    price: 5000,
    image: '/images/olivtrad-20.jpg'
  },
  {
    id: 4,
    title: 'Olivträd 10 år',
    price: 2500,
    image: '/images/olivtrad-10.jpg'
  }
];

export default function ProductList() {
  return (
    <section className="py-12 bg-beige">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-oliveGreen font-serif">Våra Olivträd</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
