import Image from 'next/image';

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
}

export default function ProductCard({ image, title, price }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <Image src={image} alt={title} width={500} height={500} className="object-cover" />
      <div className="p-4 text-center">
        <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="font-sans text-lg text-gray-600">{price.toLocaleString()} kr</p>
      </div>
    </div>
  );
}
