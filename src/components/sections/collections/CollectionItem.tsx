import Image from "next/image";
import Link from "next/link";

import { CollectionType } from "@/lib/collection/types";

type CollectionItemProps = {
  collection: CollectionType;
};

const CollectionItem = ({ collection }: CollectionItemProps) => {
  return (
    <li className="relative rounded-4">
      <div>
        <Image
          src={collection.featured_image}
          alt={collection.title}
          className="rounded-4"
        />
      </div>

      <Link
        href={`/collections/${collection.handle}`}
        className="absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-custom-black-900/10 text-center font-black text-white transition-all delay-200 ease-in-out hover:bg-custom-black-900/30"
      >
        <span className="bg-custom-black-900/80 p-2">{collection.title}</span>
      </Link>
    </li>
  );
};

export default CollectionItem;
