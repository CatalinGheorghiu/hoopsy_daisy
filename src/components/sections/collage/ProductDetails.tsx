import { ProductType } from "@/components/sections/popular-products/PopularProducts";
import { formatNumberWithComma } from "@/lib/utils";

type ProductDetailsProps = { item: ProductType };

const ProductDetails = ({ item }: ProductDetailsProps) => {
  return (
    <div className="flex flex-wrap justify-between pt-3">
      <p className="h6-medium">{item.title}</p>
      <div>
        {item.price_max > item.price && (
          <span className="mr-2 text-custom-black-500 line-through">
            €{formatNumberWithComma(item.price_max)}
          </span>
        )}
        <span>€{formatNumberWithComma(item.price)}</span>
      </div>
    </div>
  );
};

export default ProductDetails;
