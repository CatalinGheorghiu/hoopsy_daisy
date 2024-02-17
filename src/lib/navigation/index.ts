import { Navigation } from "@/lib/navigation/types";

export const navigation: Navigation[] = [
  {
    name: "Products",
    handle: "/products",
    links: [
      { name: "Product 1", handle: "/product-1" },
      { name: "Product 2", handle: "/product-2" },
      { name: "Product 3", handle: "/product-3" }
    ]
  },
  {
    name: "Collections",
    handle: "/collections",
    links: []
  },
  {
    name: "About Us",
    handle: "/about-us",
    links: []
  },
  {
    name: "Blog",
    handle: "/blog",
    links: []
  }
];
