import AnnouncementBar from "@/components/layout/announcement/AnnouncementBar";
import DesktopNav from "@/components/navigation/DesktopNav";
import MobileNav from "@/components/navigation/MobileNav";

type Link = {
  name: string;
  handle: string;
};

export type Navigation = {
  name: string;
  handle: string;
  links: Link[];
};

const navigation: Navigation[] = [
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

const Header = () => {
  return (
    <header>
      <AnnouncementBar />
      <MobileNav navigation={navigation} />
      <DesktopNav navigation={navigation} />
    </header>
  );
};

export default Header;
