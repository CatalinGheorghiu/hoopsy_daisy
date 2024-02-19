import TestimonialCard from "@/components/sections/testimonials/TestimonialCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/Carousel";
import { testimonials } from "@/lib/testimonial";

const TestimonialCardList = () => {
  if (testimonials.length < 1) return;

  return (
    <Carousel opts={{ align: "start" }} className="mt-14 cursor-pointer">
      <CarouselContent>
        {testimonials.map((testimonial) => (
          <CarouselItem
            key={testimonial.id}
            className="basis-3/4 sm:basis-4/12 xl:basis-1/4"
          >
            <TestimonialCard testimonial={testimonial} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="-top-[70px] left-auto right-20" />
      <CarouselNext className="-top-[70px] right-2" />
    </Carousel>
  );
};

export default TestimonialCardList;
