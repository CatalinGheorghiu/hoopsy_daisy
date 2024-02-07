import { FaqItemType } from "@/components/sections/faq/Faq";
import FaqItem from "@/components/sections/faq/FaqItem";

type FaqListProps = { items: FaqItemType[] };

const FaqList = ({ items }: FaqListProps) => {
  if (items.length < 1) return;

  return (
    <ul className="grid grid-cols-1 items-start gap-x-8 pt-6 md:grid-cols-2 md:pt-8">
      {items.map((item, index) => (
        <FaqItem
          key={item.id}
          item={item}
          isLast={index === items.length - 1}
        />
      ))}
    </ul>
  );
};

export default FaqList;
