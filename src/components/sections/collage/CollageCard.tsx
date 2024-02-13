import Image from "next/image";

import { CollageItemType } from "@/components/sections/collage/Collage";
import CollectionDetails from "@/components/sections/collage/CollectionDetails";
import ProductDetails from "@/components/sections/collage/ProductDetails";
import { cn } from "@/lib/utils";

type CollageCardProps = { item: CollageItemType };

const CollageCard = ({ item }: CollageCardProps) => {
  return (
    <div
      className={cn(
        item.featured ? "col-span-2 md:row-span-2" : "md:col-span-1"
      )}
    >
      <div className="flex h-full flex-col">
        <Image
          src={item.images[0]}
          alt={item.title}
          width={343}
          height={382}
          className="h-full w-full rounded-8 object-cover"
        />

        {item.type === "product" ? (
          <ProductDetails item={item} />
        ) : (
          <CollectionDetails item={item} />
        )}
      </div>
    </div>
  );
};

export default CollageCard;
