import Image from "next/image";

import { TestimonialType } from "@/lib/testimonial/types";
import { formatNumberWithComma } from "@/lib/utils";

type TestimonialCardProps = { testimonial: TestimonialType };

const TestimonialCard = ({
  testimonial: { product, avatar, name, review }
}: TestimonialCardProps) => {
  return (
    <div className="grid h-full max-h-[356px] content-between rounded-4 border border-custom-purple-800">
      <div className="relative mx-4 flex items-center border-b border-custom-black-300 py-4">
        <Image
          className="rounded-full"
          src={avatar}
          alt={name}
          width={52}
          height={52}
        />
        <h3 className="h6-medium pl-3">{name}</h3>
      </div>

      <p className="m-4 overflow-hidden text-ellipsis text-sm font-semibold leading-6">
        {review}
      </p>

      <div className="flex items-center gap-x-3 bg-custom-purple-800 p-4">
        <div className="relative rounded-2">
          <Image
            className="h-11 w-10 rounded-4 object-cover md:h-16 md:w-14"
            src={product.images[0]}
            alt={product.title}
            width={50}
            height={54}
          />
        </div>
        <div className="flex flex-col text-white">
          <h3 className="line-clamp-1 underline">{product.title}</h3>
          <p className="pt-2 text-sm">
            ${formatNumberWithComma(product.price)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
