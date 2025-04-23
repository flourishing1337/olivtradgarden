import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductList from '@/components/ProductList';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <Header /> {/* <-- Lägg till denna rad för att visa headern */}
      <Hero />
      <ProductList />
    </div>
  );
}
