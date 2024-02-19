import CollectionItem from "@/components/sections/collections/CollectionItem";
import { CollectionType } from "@/lib/collection/types";

type CollectionListProps = {
  items: CollectionType[];
};
const CollectionList = ({ items }: CollectionListProps) => {
  if (items.length < 1) {
    return <h3>There aren&apos;t any items currently available!</h3>;
  }

  return (
    <ul className="grid grid-cols-2 gap-4 py-4 md:grid-cols-3 lg:grid-cols-4 xl:gap-8">
      {items.map((collection) => (
        <CollectionItem key={collection.id} collection={collection} />
      ))}
    </ul>
  );
};

export default CollectionList;
