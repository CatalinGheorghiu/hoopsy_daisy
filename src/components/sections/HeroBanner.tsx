import Image from "next/image";
import HeroImage from "@/public/images/hero_banner.jpeg";
import Button from "@/components/ui/Button";

const HeroBanner = () => {
  return (
    <section className="flex w-full flex-col border-b border-custom-black-300 md:flex-row-reverse">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col md:flex-row-reverse">
        <Image
          src={HeroImage}
          alt="Hero banner image"
          className="max-h-[644px] min-h-[436px] object-cover md:w-1/2 lg:w-3/5"
        />

        <div className="flex flex-col justify-center px-4 py-14 md:w-1/2 md:px-14 lg:w-2/5 2xl:pl-0">
          <h1 className="h1 h1-semibold">PULVINAR ALIQUETL ELGET ADIP</h1>
          <p className="py-4 text-custom-black-600 md:text-lg">
            Lorem ipsum dolor sit amet, conse ctetur adipi scing elit. Ultricies
            non duis platea commodo nam nuncnon. Tincidunt.
          </p>

          <Button className="mt-2">Shop Now</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
