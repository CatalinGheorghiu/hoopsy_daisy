import Image from "next/image";

import { VariantType } from "@/components/sections/popular-products/PopularProducts";
import PlaceholderImage from "@/public/images/placeholder_image.png";

type ProductImageProps = {
  product: VariantType;
};

const ProductImage = ({ product }: ProductImageProps) => {
  return (
    <div className="rounded-8 relative h-[380px] w-auto">
      <Image
        className="rounded-8 h-[380px] w-[295px] object-cover"
        src={product.images?.[0] ?? PlaceholderImage}
        alt={product.title}
        fill
        sizes="380px"
      />
    </div>
  );
};

export default ProductImage;
