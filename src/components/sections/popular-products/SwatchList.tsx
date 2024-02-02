import { cn } from "@/lib/utils";

import { VariantType } from "@/components/sections/popular-products/PopularProducts";

type SwatchListProps = {
  variants: VariantType[];
  activeVariant: number;
  changeVariant: (target: number) => void;
};

const SwatchList = ({
  variants,
  activeVariant,
  changeVariant
}: SwatchListProps) => {
  if (variants.length < 1) return;

  return (
    <ul className="mt-4 flex h-fit gap-x-4">
      {variants.map((variant, index) => (
        <li key={variant.id}>
          <div
            key={variant.color}
            className="relative h-8 w-8 rounded-full border-[3px] border-transparent"
          >
            <button
              onClick={() => changeVariant(index)}
              style={{ backgroundColor: variant.color }}
              className={cn(
                "absolute bottom-1/2 left-1/2 right-1/2 top-1/2 block h-6 w-6 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full",
                activeVariant === index && "outline outline-offset-[3px]"
              )}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default SwatchList;
