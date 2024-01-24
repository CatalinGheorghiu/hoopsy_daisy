import MobileNav from "@/components/navigation/MobileNav";
import DesktopNav from "@/components/navigation/DesktopNav";
import AnnouncementBar from "@/components/layout/announcement/AnnouncementBar";

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
    name: "About",
    handle: "/about",
    links: [{ name: "About 1", handle: "/about-1" }]
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
