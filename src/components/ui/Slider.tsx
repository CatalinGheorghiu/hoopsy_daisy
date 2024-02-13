"use client";

import { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { ReactNode, useCallback, useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type SliderProps = {
  children: ReactNode;
  className?: string;
  hasNavigation?: boolean;
};

const Slider = ({
  children,
  className,
  hasNavigation = false
}: SliderProps) => {
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
      <div className={cn("my-10", className)}>
        <div className="overflow-hidden" ref={emblaRef}>
          <ul className="ml-[calc(1rem_*_-1)] flex cursor-grab touch-pan-y">
            {children}
          </ul>
        </div>
      </div>

      {scrollSnaps.length > 1 && hasNavigation && (
        <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-center">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                'mx-3 flex cursor-pointer touch-manipulation items-center border-0 p-0 no-underline after:h-2 after:bg-white after:content-[""]',
                index === selectedIndex
                  ? "after:w-10 after:rounded-[1.25rem]"
                  : "after:w-2 after:rounded-full"
              )}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Slider;
