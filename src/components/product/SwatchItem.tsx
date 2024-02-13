import { VariantType } from "@/components/sections/popular-products/PopularProducts";
import { cn } from "@/lib/utils";

type SwatchItemProps = {
  variant: VariantType;
  activeVariant: VariantType;
  changeVariant: (target: VariantType) => void;
};

const SwatchItem = ({
  variant,
  activeVariant,
  changeVariant
}: SwatchItemProps) => {
  return (
    <li>
      <div key={variant.color} className="relative h-8 w-8 rounded-full">
        <button
          onClick={() => changeVariant(variant)}
          style={{ backgroundColor: variant.color }}
          className={cn(
            "absolute bottom-1/2 left-1/2 right-1/2 top-1/2 block h-6 w-6 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full border border-custom-black-400",
            activeVariant.id === variant.id && "outline outline-offset-[3px]"
          )}
        />
      </div>
    </li>
  );
};

export default SwatchItem;
