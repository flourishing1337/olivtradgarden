export default function ProductCard({ image, title, price }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="text-md font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{price} kr</p>
      </div>
    </div>
  );
}
