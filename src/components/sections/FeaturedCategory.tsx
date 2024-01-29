import CarouselList from "@/components/product/CarouselList";
import { Button } from "@/components/ui/Button";

const FeaturedCategory = () => {
  return (
    <section className="w-full bg-gradient-to-r from-custom-purple-200 to-custom-purple-400 px-4 py-14 md:px-14">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col">
        <div className="flex flex-col justify-between md:flex-row md:items-center">
          <div className="md:w-1/2">
            <h2 className="h4 h4-semibold md:h3 md:h3-semibold">
              Featured Category
            </h2>
            <p className="pb-8 pt-4 text-sm leading-7 text-custom-black-800 md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum
              pellentesque condimentum id ipsum eu augu sit ame.
            </p>
          </div>

          <Button variant="transparent" size="xl" className="max-w-fit">
            View All
          </Button>
        </div>

        <CarouselList />
      </div>
    </section>
  );
};

export default FeaturedCategory;
