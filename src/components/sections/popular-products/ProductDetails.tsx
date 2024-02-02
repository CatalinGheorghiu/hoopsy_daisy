import { VariantType } from "@/components/sections/popular-products/PopularProducts";
import { formatNumberWithComma } from "@/lib/utils";

type ProductDetailsProps = {
  product: VariantType;
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <div className="mt-3.5 flex justify-between">
      <h3 className="h6 h6-medium border-l-4 border-custom-purple-900 pl-2">
        {product.title}
      </h3>

      <div className="text-sm">
        {product.price_max > product.price && (
          <span className="mr-2 text-custom-black-500 line-through">
            €{formatNumberWithComma(product.price_max)}
          </span>
        )}
        <span>€{formatNumberWithComma(product.price)}</span>
      </div>
    </div>
  );
};

export default ProductDetails;
