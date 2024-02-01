"use client";

import { useState } from "react";

import { ProductType } from "@/components/sections/popular-products/PopularProducts";
import SwatchList from "@/components/sections/popular-products/SwatchList";
import ProductImage from "@/components/sections/popular-products/ProductImage";
import ProductDetails from "@/components/sections/popular-products/ProductDetails";
import TagList from "@/components/sections/popular-products/TagList";
import { Button } from "@/components/ui/Button";

type ProductCardProps = {
  product: ProductType;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const [activeVariant, setActiveVariant] = useState(0);

  function handleActiveVariant(target: number) {
    setActiveVariant(target);
  }

  return (
    <>
      <div className="rounded-8 relative bg-custom-purple-200">
        <ProductImage product={product.variants[activeVariant]} />

        <TagList tags={product.tags} />

        <Button className="absolute bottom-5 left-1/2 right-1/2 w-11/12 max-w-[263px] -translate-x-1/2 px-4">
          Add to cart
        </Button>
      </div>

      <ProductDetails product={product.variants[activeVariant]} />

      <SwatchList
        variants={product.variants}
        activeVariant={activeVariant}
        changeVariant={handleActiveVariant}
      />
    </>
  );
};

export default ProductCard;
