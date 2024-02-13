import { StaticImageData } from "next/image";

import InspirationCard from "@/components/sections/inspiration/InspirationCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/Carousel";
import Person1 from "@/public/images/card_1.jpg";
import Person2 from "@/public/images/card_2.jpg";

export type InspirationItemType = {
  id: number;
  title: string;
  author: string;
  date: string;
  content: string;
  image: string | StaticImageData;
};

const inspirationItems: InspirationItemType[] = [
  {
    id: 1,
    title: "Tincidunt Korem ipsum",
    author: "Amalia H.",
    date: "Jan 11, 2022",
    content:
      "Lorem ipsum dolor sit amet, consecte adi piscing elit bibendum pell.",
    image: Person1
  },
  {
    id: 2,
    title: "Tincidunt Korem ipsum",
    author: "Amalia H.",
    date: "Jan 11, 2022",
    content:
      "Lorem ipsum dolor sit amet, consecte adi piscing elit bibendum pell.",
    image: Person2
  },
  {
    id: 3,
    title: "Tincidunt Korem ipsum",
    author: "Amalia H.",
    date: "Jan 11, 2022",
    content:
      "Lorem ipsum dolor sit amet, consecte adi piscing elit bibendum pell.",
    image: Person1
  },
  {
    id: 4,
    title: "Tincidunt Korem ipsum",
    author: "Amalia H.",
    date: "Jan 11, 2022",
    content:
      "Lorem ipsum dolor sit amet, consecte adi piscing elit bibendum pell.",
    image: Person2
  },
  {
    id: 5,
    title: "Tincidunt Korem ipsum",
    author: "Amalia H.",
    date: "Jan 11, 2022",
    content:
      "Lorem ipsum dolor sit amet, consecte adi piscing elit bibendum pell.",
    image: Person1
  },
  {
    id: 6,
    title: "Tincidunt Korem ipsum",
    author: "Amalia H.",
    date: "Jan 11, 2022",
    content:
      "Lorem ipsum dolor sit amet, consecte adi piscing elit bibendum pell.",
    image: Person2
  }
];

const InspirationCardList = () => {
  if (inspirationItems.length < 1) return;

  return (
    <Carousel opts={{ align: "start" }} className="mt-14 cursor-pointer">
      <CarouselContent>
        {inspirationItems.map((item) => (
          <CarouselItem
            key={item.id}
            className="basis-3/4 sm:basis-4/12 xl:basis-1/4"
          >
            <InspirationCard item={item} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="left-2 -translate-y-full md:left-4" />
      <CarouselNext className="right-2 -translate-y-full md:right-4" />
    </Carousel>
  );
};

export default InspirationCardList;
