import { VariantType } from "@/components/sections/popular-products/PopularProducts";
import { Button } from "@/components/ui/Button";

type SizeListProps = {
  sizes: VariantType[];
  activeSize: VariantType;
  changeSize: (target: VariantType) => void;
};

const SizeList = ({ sizes, activeSize, changeSize }: SizeListProps) => {
  return (
    <ul className="flex gap-x-2">
      {sizes.map((variant) => (
        <li key={variant.id}>
          <Button
            variant={activeSize.id === variant.id ? "default" : "transparent"}
            onClick={() => changeSize(variant)}
          >
            {variant.size}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default SizeList;
