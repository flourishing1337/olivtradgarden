import ProductCard from '@/components/ProductCard';

const products = [
  {
    id: 1,
    title: 'Olivträd 60 år',
    price: 13000,
    image: '/images/olivtrad60.png',
  },
  {
    id: 2,
    title: 'Olivträd 40 år',
    price: 9000,
    image: '/images/olivtrad40.png',
  },
  {
    id: 3,
    title: 'Olivträd 20 år',
    price: 5000,
    image: '/images/olivtrad20.png',
  },
  {
    id: 4,
    title: 'Olivträd 10 år',
    price: 2500,
    image: '/images/olivtrad10.png',
  },
];

export default function ProductList() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-serif font-bold text-center mb-10">Våra exklusiva olivträd</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
