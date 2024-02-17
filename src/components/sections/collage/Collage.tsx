import CollageCard from "@/components/sections/collage/CollageCard";
import { collageItems } from "@/lib/collage";

const Collage = () => {
  if (collageItems.length < 1) return;

  return (
    <section className="mx-auto flex w-full max-w-screen-xl flex-col px-4 py-14 md:px-14 md:py-14 lg:pb-24 lg:pt-20">
      <div className="relative grid grid-cols-2 gap-4 md:grid-cols-3 md:grid-rows-2 md:gap-6">
        {collageItems.map((item) => (
          <CollageCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Collage;

//TODO: Figure out how to keep grid items same height when content is different
