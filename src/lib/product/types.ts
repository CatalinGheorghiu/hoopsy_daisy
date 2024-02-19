export type ProductType = {
  id: number;
  available: boolean;
  price: number;
  price_max: number;
  content: string;
  description: string;
  images: string[];
  handle: string;
  options: string[];
  tags: string[];
  title: string;
  variants: VariantType[];
};

export type VariantType = Omit<ProductType, "variants" | "tags"> & {
  color?: string;
  size?: string;
};
