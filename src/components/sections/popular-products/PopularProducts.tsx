import ProductCard from "@/components/sections/popular-products/ProductCard";
import { Button } from "@/components/ui/Button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/Carousel";
import { popularProducts } from "@/lib/product";

const PopularProducts = () => {
  return (
    <section className="w-full bg-gradient-to-r from-custom-purple-200 to-custom-purple-400 px-4 py-14 md:px-14">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col">
        <div className="flex items-center justify-between">
          <h2 className="h4-semibold">Popular</h2>
          <Button variant="transparent" size="xl" className="max-w-fit">
            View All
          </Button>
        </div>

        <Carousel opts={{ align: "start" }} className="mt-14 cursor-pointer">
          <CarouselContent>
            {popularProducts.length > 0 &&
              popularProducts.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="basis-3/4 sm:basis-4/12 xl:basis-1/4"
                >
                  <ProductCard product={product} />
                </CarouselItem>
              ))}
          </CarouselContent>

          <CarouselPrevious className="left-2 md:left-4" />
          <CarouselNext className="right-2 md:right-4" />
        </Carousel>
      </div>
    </section>
  );
};

export default PopularProducts;
