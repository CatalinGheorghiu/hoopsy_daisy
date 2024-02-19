import Image from "next/image";

import Slider from "@/components/ui/Slider";
import { VariantType } from "@/lib/product/types";

type FeaturedProductImageProps = { product: VariantType };

const FeaturedProductImage = ({ product }: FeaturedProductImageProps) => {
  return (
    <Slider className="my-0">
      {product.images.map((item, index) => (
        <li key={index} className="relative min-w-0 flex-[0_0_100%] pl-4">
          <Image
            className="h-[400px] w-full rounded-4 object-cover md:h-full md:max-h-[696px]"
            src={item}
            alt={item}
            width={610}
            height={696}
          />
        </li>
      ))}
    </Slider>
  );
};

export default FeaturedProductImage;
