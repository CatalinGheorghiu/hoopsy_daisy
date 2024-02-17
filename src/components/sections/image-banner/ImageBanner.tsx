import Image, { StaticImageData } from "next/image";

import { Button } from "@/components/ui/Button";

export type ImageBannerProps = {
  imageBanner: {
    buttonText?: string;
    image: StaticImageData;
    title: string;
    content: string;
  };
};

const ImageBanner = ({ imageBanner }: ImageBannerProps) => {
  return (
    <section className="w-full">
      <div className="relative flex min-h-[600px]">
        <Image
          src={imageBanner.image}
          alt="Awesome image background with flowers"
          className="relative h-auto min-h-0 w-full object-cover"
        />

        <div className="absolute top-1/2 flex h-full w-full -translate-y-1/2 bg-black/30 px-4 text-center text-white">
          <div className="mx-auto flex max-w-xl flex-col items-center justify-center">
            <h2 className="h4-semibold md:h3-semibold">{imageBanner.title}</h2>

            <p className="py-4 text-sm font-black leading-6 md:text-base">
              {imageBanner.content}
            </p>

            {imageBanner.buttonText && (
              <Button size="lg" className="mt-5 w-fit">
                {imageBanner.buttonText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageBanner;
