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
  return (
    <div className="mt-4 flex h-fit gap-x-4">
      {variants.length > 0 &&
        variants.map((variant, index) => (
          <div key={`variant-${variant}-${index}`} className="">
            <div
              key={variant.color}
              className="relative h-8 w-8 rounded-full border-[3px] border-transparent"
            >
              <button
                onClick={() => changeVariant(index)}
                style={{ backgroundColor: variant.color }}
                className={`
                    ${activeVariant === index && "outline outline-offset-[3px]"}
                    absolute bottom-1/2 left-1/2 right-1/2 top-1/2 block h-6 w-6 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full
                  `}
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default SwatchList;
