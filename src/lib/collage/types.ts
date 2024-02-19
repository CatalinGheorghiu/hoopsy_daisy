import { ProductType } from "@/lib/product/types";

export type CollectionType = {
  id: number;
  handle: string;
  title: string;
  images: string[];
  type: "collection";
  featured: boolean;
};

export type CollageItemType =
  | CollectionType
  | (ProductType & { type: "product"; featured: boolean });
