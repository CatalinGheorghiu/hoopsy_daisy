import { notFound } from "next/navigation";

import ProductGrid from "@/components/sections/product/ProductGrid";
import { collections } from "@/lib/collection";

type CollectionDetailsProps = {
  params: {
    name: string;
  };
};

const CollectionDetails = ({ params }: CollectionDetailsProps) => {
  const collection = collections.find(
    (collection) => collection.handle === params.name
  );

  if (!collection) {
    notFound();
  }

  return (
    <section className="mx-auto flex w-full max-w-screen-xl flex-col px-4 py-14 md:px-14">
      <div className="relative mx-auto flex w-full max-w-screen-xl flex-col">
        <h1 className="h1-semibold">{collection.title}</h1>

        {/*  Filters */}

        <ProductGrid items={collection.products} />
      </div>
    </section>
  );
};

export default CollectionDetails;
