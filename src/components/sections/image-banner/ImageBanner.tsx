import Flowers from "@/public/images/bg_flowers.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const ImageBanner = () => {
  return (
    <section className="w-full">
      <div className="relative flex min-h-[600px]">
        <Image
          src={Flowers}
          alt="Awesome image background with flowers"
          className="relative h-auto min-h-0 w-full object-cover"
        />

        <div className="absolute top-1/2 flex h-full w-full -translate-y-1/2 bg-black/30 px-4 text-center text-white">
          <div className="mx-auto flex max-w-xl flex-col items-center justify-center">
            <h2 className="h4-semibold md:h3-semibold">
              PULVINAR ALIQUETL ELGET ADIP
            </h2>

            <p className="py-4 text-sm font-black leading-6 md:text-base">
              Lorem ipsum dolor sit amet, conse ctetur adipi scing elit.
              Ultricies non duis platea commodo nam nuncnon. Tincidunt. Lorem
              ipsum dolor sit amet, conse ctetur adipi scing elit ultricies non
              .
            </p>

            <Button size="lg" className="mt-5 w-fit">
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageBanner;
