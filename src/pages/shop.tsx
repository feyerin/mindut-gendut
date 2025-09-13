import { products } from "../data/dummy";
import ProductGrid from "../components/productGrid";

export default function Shop() {
  return (
    <div className="py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">Shop</h1>
      <ProductGrid products={products} />
    </div>
  );
}