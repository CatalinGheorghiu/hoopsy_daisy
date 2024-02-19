"use client";

import Link from "next/link";
import { useState } from "react";

import SwatchList from "@/components/product/SwatchList";
import ProductDetails from "@/components/sections/popular-products/ProductDetails";
import ProductImage from "@/components/sections/popular-products/ProductImage";
import TagList from "@/components/sections/popular-products/TagList";
import { Button } from "@/components/ui/Button";
import { ProductType, VariantType } from "@/lib/product/types";
import { getUniqueByKey } from "@/lib/utils";

type ProductItemProps = {
  item: ProductType;
};

const ProductItem = ({ item }: ProductItemProps) => {
  const [activeVariant, setActiveVariant] = useState(item.variants[0]);
  const uniqueSwatches = getUniqueByKey(item.variants, "color");

  const hasSwatches = item.variants.map((variant) =>
    variant.hasOwnProperty("color")
  );

  function handleActiveVariant(target: VariantType) {
    setActiveVariant(target);
  }

  return (
    <li>
      <Link href={`/product/${item.handle}`}>
        <div className="relative rounded-8 bg-custom-purple-200">
          <ProductImage product={activeVariant} />

          <TagList tags={item.tags} />

          <Button className="absolute bottom-5 left-1/2 right-1/2 w-11/12 max-w-[263px] -translate-x-1/2 px-4">
            Add to cart
          </Button>
        </div>

        <div className="grid">
          <ProductDetails product={activeVariant} />

          {hasSwatches && (
            <SwatchList
              variants={uniqueSwatches}
              activeVariant={activeVariant}
              changeVariant={handleActiveVariant}
            />
          )}
        </div>
      </Link>
    </li>
  );
};

export default ProductItem;
