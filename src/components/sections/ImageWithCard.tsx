import Image from "next/image";

import { Button } from "@/components/ui/Button";
import Woman from "@/public/images/woman_1.png";

const ImageWithCard = () => {
  return (
    <section className="mx-auto flex w-full max-w-screen-xl flex-col px-4 py-14 md:flex-row-reverse md:items-center md:p-14 lg:max-w-screen-xl lg:py-20 2xl:px-0">
      <div className="relative md:w-1/2">
        <Image
          src={Woman}
          alt="Woman in lavand field"
          className="max-h-[592px] min-h-[436px] rounded object-cover"
        />
      </div>

      <div className="relative mx-auto -mt-10 flex h-fit max-w-[312px] flex-col rounded border border-custom-black-300 bg-white px-4 py-8 shadow-custom-2 md:-mr-10 md:mt-0 md:w-1/2 md:max-w-screen-sm lg:p-14">
        <h2 className="h4 h4-semibold md:h3 md:h3-semibold">
          Pulvinar Aliquetl Elget Adinar
        </h2>
        <p className="pb-6 pt-4 text-sm leading-6 text-custom-black-600 md:pb-8 md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum
          pellentesque condimentum id ipsum eu augu sit ame.
        </p>
        <Button size="xl" className="max-w-fit">
          Read More
        </Button>
      </div>
    </section>
  );
};

export default ImageWithCard;
