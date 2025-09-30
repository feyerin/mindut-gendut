import { Link } from "react-router-dom";

export default function ProductCard({ product }: { product: any }) {
  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="overflow-hidden rounded-2xl shadow-md">
        <img
          src={product.image}
          alt={product.name}
          className="w-full blur-sm h-80 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <h3 className="mt-4 text-xl font-medium">{product.name}</h3>
      <p className="text-gray-600">Rp {product.price.toLocaleString()}</p>
    </Link>
  );
}