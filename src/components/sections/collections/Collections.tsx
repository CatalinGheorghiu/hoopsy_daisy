import CollectionList from "@/components/sections/collections/CollectionList";
import { collections } from "@/lib/collection";

const Collections = () => {
  return (
    <section className="mx-auto flex w-full max-w-screen-xl flex-col px-4 py-14 md:px-14">
      <div className="relative mx-auto flex w-full max-w-screen-xl flex-col">
        <h1 className="h1-semibold">Catalog</h1>

        <CollectionList items={collections} />
      </div>
    </section>
  );
};

export default Collections;
