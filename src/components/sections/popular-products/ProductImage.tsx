import Image from "next/image";

import { VariantType } from "@/lib/product/types";
import PlaceholderImage from "@/public/images/placeholder_image.png";

type ProductImageProps = {
  product: VariantType;
};

const ProductImage = ({ product }: ProductImageProps) => {
  return (
    <div className="relative h-[380px] w-auto rounded-8">
      <Image
        className="h-[380px] w-[295px] rounded-8 object-cover"
        src={product.images?.[0] ?? PlaceholderImage}
        alt={product.title}
        fill
        sizes="380px"
      />
    </div>
  );
};

export default ProductImage;
