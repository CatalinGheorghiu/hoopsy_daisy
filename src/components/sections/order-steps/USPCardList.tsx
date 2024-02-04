import { ReactNode } from "react";

import Truck from "@/components/icons/Truck";
import Slider from "@/components/ui/Slider";

export type USPItemType = {
  id: number;
  logo: ReactNode;
  content: string;
};

const uspItems: USPItemType[] = [
  {
    id: 1,
    content: "Shipping within 24 hours (working days)",
    logo: <Truck />
  },
  {
    id: 2,
    content: "Shipping within 24 hours (working days)",
    logo: <Truck />
  },
  {
    id: 3,
    content: "Shipping within 24 hours (working days)",
    logo: <Truck />
  },
  {
    id: 4,
    content: "Shipping within 24 hours (working days)",
    logo: <Truck />
  }
];

const UspCardList = () => {
  if (uspItems.length < 1) return;

  return (
    <Slider>
      {uspItems.map((item) => (
        <li
          key={item.id}
          className="relative min-w-0 flex-[0_0_100%] pl-4 sm:flex-[0_0_50%] md:flex-[0_0_33%] xl:flex-[0_0_25%]"
        >
          <div className="flex w-full items-center gap-x-5 rounded-4 bg-custom-purple-600 px-10 py-5 xl:px-4">
            <div className="flex h-10 min-w-[40px] items-center justify-center rounded-full border-2">
              {item.logo}
            </div>
            <p>{item.content}</p>
          </div>
        </li>
      ))}
    </Slider>
  );
};

export default UspCardList;
