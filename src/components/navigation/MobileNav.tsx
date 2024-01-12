"use client";

import Menu from "@/components/icons/Menu";
import Logo from "@/components/Logo";
import Cart from "@/components/icons/Cart";
import NavigationDrawer from "@/components/navigation/NavigationDrawer";
import { useEffect, useState } from "react";
import { Navigation } from "@/components/layout/Header";

type NavigationProps = {
  navigation: Navigation[];
};

const MobileNav = ({ navigation }: NavigationProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isDrawerOpen]);

  return (
    <nav className="md:hidden">
      <div className="relative z-50 flex flex-col items-center justify-between border-b-2 border-custom-black-200 p-4">
        <div className="flex w-full items-center justify-between">
          <Menu onClick={() => setIsDrawerOpen(true)} />
          <Logo />
          <Cart />
        </div>
      </div>
      <div
        className={`relative overflow-hidden transition-all duration-500 ease-in-out ${
          isDrawerOpen
            ? "h-[calc(100vh_-_112px)] translate-x-0"
            : "h-0 translate-x-full"
        }`}
      >
        <div
          className="absolute bottom-0 right-0 h-full w-full bg-custom-black-900/60"
          onClick={() => setIsDrawerOpen(false)}
        ></div>
        <NavigationDrawer
          navigation={navigation}
          handleDrawer={setIsDrawerOpen}
        />
      </div>
    </nav>
  );
};

export default MobileNav;
