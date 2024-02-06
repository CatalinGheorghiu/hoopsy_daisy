import { ProductType } from "@/components/sections/popular-products/PopularProducts";
import CollageCard from "@/components/sections/collage/CollageCard";

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

//TODO: Replace with DB content
const collageItems: CollageItemType[] = [
  {
    id: 1,
    type: "product",
    featured: true,
    title: "Tesla Model X Electric Car",
    available: true,
    content: "Explore the future with the Tesla Model X electric car.",
    description: "An eco-friendly and high-performance electric vehicle.",
    handle: "tesla-model-x",
    price: 72000.0,
    price_max: 72000.0,
    images: ["https://images.unsplash.com/photo-1652509197980-9f3d9ac7916e"],
    options: [],
    tags: ["electric", "luxury"],
    variants: [
      {
        id: 201,
        available: true,
        title: "Tesla - Stealth Gray",
        content: "Sleek and stylish Tesla Model X in Stealth Gray.",
        handle: "tesla-stealth-gray",
        description: "A sophisticated choice for a modern lifestyle.",
        images: [
          "https://images.unsplash.com/photo-1652508996643-2fc140eebe1d"
        ],
        options: [],
        price_max: 75000.0,
        price: 72500.0,
        color: "SlateGray"
      },
      {
        id: 202,
        available: true,
        title: "Tesla - Pearl White",
        content: "Tesla Model X in a pristine Pearl White finish.",
        handle: "tesla-pearl-white",
        description: "Experience elegance with this pearl-white electric car.",
        images: [
          "https://images.unsplash.com/photo-1705807258848-97c4fefd4579"
        ],
        options: [],
        price_max: 65000.0,
        price: 65000.0,
        color: "white"
      },
      {
        id: 203,
        available: true,
        title: "Tesla - Ultra Red",
        content: "Turn heads with the Tesla Model X in Ultra Red.",
        handle: "tesla-ultra-red",
        description:
          "Make a bold statement with this vibrant red electric car.",
        images: [
          "https://images.unsplash.com/photo-1672588714766-ceb0e36a9e0a"
        ],
        options: [],
        price_max: 75800.0,
        price: 70000.0,
        color: "crimson"
      }
    ]
  },
  {
    id: 2,
    type: "product",
    featured: false,
    title: "Premium Beer - Modelo",
    available: true,
    content: "Premium beer from Modelo brewery.",
    description: "A high-quality beer with a rich flavor.",
    handle: "premium-beer-modelo",
    price: 10.0,
    price_max: 20.0,
    images: [
      "https://images.unsplash.com/photo-1619760078865-ee0f4c6586ee",
      "https://images.unsplash.com/photo-1635216776066-681091dd8a88",
      "https://images.unsplash.com/photo-1679251807508-eba2823bd107"
    ],
    options: [],
    tags: ["new", "premium"],
    variants: [
      {
        id: 101,
        available: true,
        title: "Modelo Negro",
        content: "Premium dark beer with a distinctive taste.",
        handle: "modelo-negro",
        description: "A bold and flavorful dark beer.",
        images: [
          "https://images.unsplash.com/photo-1635216776066-681091dd8a88"
        ],
        options: [],
        price_max: 15.0,
        price: 15.0,
        color: "black"
      },
      {
        id: 102,
        available: true,
        title: "Modelo Especial",
        content: "Premium golden beer with a smooth finish.",
        handle: "modelo-especial",
        description: "An exquisite golden beer for special occasions.",
        images: [
          "https://images.unsplash.com/photo-1619760078865-ee0f4c6586ee"
        ],
        options: [],
        price_max: 25.0,
        price: 15.0,
        color: "Goldenrod"
      },
      {
        id: 103,
        available: true,
        title: "Modelo Draft",
        content: "Premium draft beer with a refreshing taste.",
        handle: "modelo-draft",
        description: "A perfect choice for draft beer enthusiasts.",
        images: [
          "https://images.unsplash.com/photo-1462664450306-25ad625a342b"
        ],
        options: [],
        price_max: 15.0,
        price: 15.0,
        color: "SaddleBrown"
      }
    ]
  },
  {
    id: 3,
    type: "collection",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1599847954335-d7c7ca35f6a7",
      "https://images.unsplash.com/photo-1609357912334-e96886c0212b"
    ],
    handle: "/collections/skin-care",
    title: "Skin Care"
  }
];
