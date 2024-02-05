import { InspirationItemType } from "@/components/sections/inspiration/InspirationCardList";
import Image from "next/image";

type InspirationCardProps = { item: InspirationItemType };

const InspirationCard = ({ item }: InspirationCardProps) => {
  return (
    <div>
      <div className="relative h-[328px] w-auto rounded-4">
        <Image
          className="relative h-[328px] w-[269px] rounded-4 object-cover"
          src={item.image}
          alt={item.title}
          fill
          sizes="328px"
        />
      </div>

      <div className="py-4">
        <h3 className="h6-medium">{item.title}</h3>
        <div className="flex pt-1 text-xs text-custom-black-500 md:text-sm">
          <p>{item.author}</p> <span className="px-2">|</span>{" "}
          <p>{item.date}</p>
        </div>
      </div>

      <p className="text-sm md:text-base">{item.content}</p>
    </div>
  );
};

export default InspirationCard;
