"use client";

import { useState } from "react";

import Star from "@/components/icons/Star";
import QuantitySelector from "@/components/product/QuantitySelector";
import SizeList from "@/components/product/SizeList";
import SwatchList from "@/components/product/SwatchList";
import FeaturedProductImage from "@/components/sections/featured-product/FeaturedProductImage";
import { Button } from "@/components/ui/Button";
import { popularProducts } from "@/lib/product";
import { VariantType } from "@/lib/product/types";
import { formatNumberWithComma, getUniqueByKey } from "@/lib/utils";

const featuredProduct = popularProducts[1];
const FeaturedProduct = () => {
  const uniqueSwatches = getUniqueByKey(featuredProduct.variants, "color");

  const [activeVariant, setActiveVariant] = useState(
    featuredProduct.variants[0]
  );
  const [activeSize, setActiveSize] = useState(activeVariant);

  const sizes = featuredProduct.variants.filter(
    (variant) =>
      variant.color === activeVariant.color && variant.hasOwnProperty("size")
  );

  const hasSwatches = featuredProduct.variants.filter((variant) =>
    variant.hasOwnProperty("color")
  );
  const hasSizes = featuredProduct.variants.filter((variant) =>
    variant.hasOwnProperty("size")
  );

  function handleActiveVariant(target: VariantType) {
    setActiveVariant(target);
    setActiveSize(target);
  }

  function handleActiveSize(target: VariantType) {
    setActiveSize(target);
  }

  return (
    <section className="mx-auto flex w-full max-w-screen-xl flex-col px-4 py-14 md:px-14">
      <div className="relative mx-auto flex w-full max-w-screen-xl flex-col md:grid md:grid-cols-2 md:gap-x-5">
        {/* Image */}
        <FeaturedProductImage product={activeVariant} />

        <div>
          {/* Details */}
          <div className="py-5 md:pt-0">
            {/* Title */}
            <h2 className="h1-semibold pb-5">{activeSize.title}</h2>

            {/* Rating */}
            <div className="flex">
              {/*  Stars */}
              <div className="flex items-center">
                <span className="pr-1 pt-1 leading-3">4.0</span>
                <Star color="#7A56BD" />
                <Star color="#7A56BD" />
                <Star color="#7A56BD" />
                <Star color="#7A56BD" />
                <Star />
              </div>
              <span className="px-2 text-custom-black-400">|</span>
              {/*  Number of reviews */}
              <p className="underline">192 Reviews</p>
            </div>

            {/*  Price */}
            <div className="flex flex-col gap-y-2.5 py-2.5">
              <p className="h3-semibold">
                ${formatNumberWithComma(activeSize.price)}
              </p>
              <p className="text-sm text-custom-black-500">Including VAT</p>
            </div>
          </div>

          {/*  Swatches */}
          {hasSwatches && uniqueSwatches.length > 1 && (
            <div className="flex items-center justify-between border-t-2 border-custom-black-200 py-6">
              <p className="h6-semibold text-custom-black-500">Color</p>

              <SwatchList
                variants={uniqueSwatches}
                activeVariant={activeVariant}
                changeVariant={handleActiveVariant}
              />
            </div>
          )}

          {/*Sizes */}
          {hasSizes && sizes.length > 1 && (
            <div className="flex items-center justify-between border-t-2 border-custom-black-200 py-6">
              <p className="h6-semibold text-custom-black-500">Size</p>

              <SizeList
                sizes={sizes}
                activeSize={activeSize}
                changeSize={handleActiveSize}
              />
            </div>
          )}

          {/*  Quantity */}
          <QuantitySelector />

          {/*  CTA Buttons */}
          <div className="flex flex-col gap-y-4 border-t-2 border-custom-black-200 py-6">
            <Button size="xl">Buy Now</Button>
            <Button size="xl" variant="transparent">
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
