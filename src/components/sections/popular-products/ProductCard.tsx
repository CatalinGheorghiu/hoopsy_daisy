"use client";

import { useState } from "react";

import SwatchList from "@/components/product/SwatchList";
import {
  ProductType,
  VariantType
} from "@/components/sections/popular-products/PopularProducts";
import ProductDetails from "@/components/sections/popular-products/ProductDetails";
import ProductImage from "@/components/sections/popular-products/ProductImage";
import TagList from "@/components/sections/popular-products/TagList";
import { Button } from "@/components/ui/Button";
import { getUniqueByKey } from "@/lib/utils";

type ProductCardProps = {
  product: ProductType;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const [activeVariant, setActiveVariant] = useState(product.variants[0]);
  const uniqueSwatches = getUniqueByKey(product.variants, "color");

  const hasSwatches = product.variants.some((variant) =>
    variant.hasOwnProperty("color")
  );

  function handleActiveVariant(target: VariantType) {
    setActiveVariant(target);
  }

  return (
    <>
      <div className="relative rounded-8 bg-custom-purple-200">
        <ProductImage product={activeVariant} />

        <TagList tags={product.tags} />

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
    </>
  );
};

export default ProductCard;
