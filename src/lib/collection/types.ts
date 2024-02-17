import { StaticImageData } from "next/image";

import { ProductType } from "@/lib/product/types";

export type CollectionType = {
  all_products_count: number;
  all_tags: string[];
  all_types: string[];
  all_vendors: string[];
  default_sort_by:
    | "created-ascending"
    | "created-descending"
    | "title-ascending"
    | "price-ascending"
    | "price-descending";
  description: string;
  featured_image: string | StaticImageData;
  filters: string[];
  handle: string;
  id: number;
  products: ProductType[];
  published_at: string;
  sort_by: string;
  template_suffix: string;
  title: string;
};
