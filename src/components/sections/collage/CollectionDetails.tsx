import Arrow from "@/components/icons/Arrow";
import { CollectionType } from "@/components/sections/collage/Collage";

type CategoryDetailsProps = { item: CollectionType };

const CollectionDetails = ({ item }: CategoryDetailsProps) => {
  return (
    <div className="flex justify-between pt-3">
      <p>{item.title}</p>
      <Arrow />
    </div>
  );
};

export default CollectionDetails;