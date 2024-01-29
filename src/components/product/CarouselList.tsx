"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/Carousel";
import ProductImage from "@/public/images/product_1.jpeg";

const featuredCategoryProducts = [
  {
    id: 1,
    img: ProductImage,
    category: "Product category 1"
  },
  {
    id: 2,
    img: ProductImage,
    category: "Product category 2"
  },
  {
    id: 3,
    img: ProductImage,
    category: "Product category 3"
  },
  {
    id: 4,
    img: ProductImage,
    category: "Product category 4"
  },
  {
    id: 5,
    img: ProductImage,
    category: "Product category 5"
  }
];

const CarouselList = () => {
  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      plugins={[
        Autoplay({
          delay: 4000
        })
      ]}
      className="mt-14"
    >
      <CarouselContent className="">
        {featuredCategoryProducts.length > 0 &&
          featuredCategoryProducts.map((product) => (
            <CarouselItem
              key={product.id}
              className="basis-3/4 md:basis-1/2 lg:basis-1/4"
            >
              <Image
                src={product.img}
                alt={product.category}
                className="w-full rounded object-cover"
              />

              <h3 className="h6 h6-medium mt-3.5 border-l-4 border-custom-purple-900 pl-2">
                {product.category}
              </h3>
            </CarouselItem>
          ))}
      </CarouselContent>

      <CarouselPrevious className="left-2 md:left-4" />
      <CarouselNext className="right-2 md:right-4" />
    </Carousel>
  );
};

export default CarouselList;
