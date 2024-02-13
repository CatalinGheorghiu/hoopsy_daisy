import SwatchItem from "@/components/product/SwatchItem";
import { VariantType } from "@/components/sections/popular-products/PopularProducts";

type SwatchListProps = {
  variants: VariantType[];
  activeVariant: VariantType;
  changeVariant: (target: VariantType) => void;
};

const SwatchList = ({
  variants,
  activeVariant,
  changeVariant
}: SwatchListProps) => {
  return (
    <ul className="mt-4 flex h-fit gap-x-4">
      {variants.map((variant) => (
        <SwatchItem
          variant={variant}
          key={variant.id}
          activeVariant={activeVariant}
          changeVariant={changeVariant}
        />
      ))}
    </ul>
  );
};

export default SwatchList;
