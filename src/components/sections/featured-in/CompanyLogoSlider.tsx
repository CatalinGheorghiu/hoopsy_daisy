"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType } from "embla-carousel";
import Image, { StaticImageData } from "next/image";

import NikeLogoImg from "@/public/images/nike_logo.png";
import AdidasLogoImg from "@/public/images/adidas_logo.png";
import TeslaLogoImg from "@/public/images/tesla_logo.png";
import AMDLogoImg from "@/public/images/amd_logo.png";
import AppleLogoImg from "@/public/images/apple_logo.png";
import LinuxLogoImg from "@/public/images/linux_logo.png";

export type FeaturedCompany = {
  id: number;
  name: string;
  logo: StaticImageData;
};

const featuredCompanies: FeaturedCompany[] = [
  {
    id: 1,
    name: "Company 1",
    logo: AppleLogoImg
  },
  {
    id: 2,
    name: "Company 2",
    logo: TeslaLogoImg
  },
  {
    id: 3,
    name: "Company 3",
    logo: AMDLogoImg
  },
  {
    id: 4,
    name: "Company 4",
    logo: LinuxLogoImg
  },
  {
    id: 5,
    name: "Company 5",
    logo: AdidasLogoImg
  },
  {
    id: 6,
    name: "Company 6",
    logo: NikeLogoImg
  }
];

const CompanyLogoSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({});
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <>
      {featuredCompanies.length > 0 && (
        <div className="my-10">
          <div className="overflow-hidden" ref={emblaRef}>
            <ul className="ml-[calc(1rem_*_-1)] flex cursor-grab touch-pan-y">
              {featuredCompanies.map(({ id, logo, name }) => (
                <li
                  key={id}
                  className="relative h-20 min-w-0 flex-[0_0_50%] pl-4 sm:flex-[0_0_25%] md:h-24 md:flex-[0_0_18%]"
                >
                  <Image
                    className="h-full w-full bg-custom-purple-200 object-contain p-4"
                    src={logo}
                    alt={name}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-center">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`mx-3 flex cursor-pointer touch-manipulation items-center border-0 p-0 no-underline after:h-2 after:bg-white after:content-[""] ${
              index === selectedIndex
                ? "after:w-10 after:rounded-[1.25rem]"
                : "after:w-2 after:rounded-full"
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default CompanyLogoSlider;
