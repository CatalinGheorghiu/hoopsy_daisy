import { ProductType } from "@/lib/product/types";

export type TestimonialType = {
  id: number;
  name: string;
  avatar: string;
  review: string;
  product: ProductType;
};
