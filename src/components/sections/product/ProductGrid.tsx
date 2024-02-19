import ProductItem from "@/components/sections/product/ProductItem";
import { ProductType } from "@/lib/product/types";

type ProductGridProps = {
  items: ProductType[];
};

const ProductGrid = ({ items }: ProductGridProps) => {
  return (
    <ul className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3 xl:grid-cols-4 xl:gap-8">
      {items.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ProductGrid;
