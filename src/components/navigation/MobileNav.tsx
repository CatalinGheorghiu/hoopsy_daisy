"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import Cart from "@/components/icons/Cart";
import Menu from "@/components/icons/Menu";
import Logo from "@/components/Logo";
import NavigationDrawer from "@/components/navigation/NavigationDrawer";
import { Navigation } from "@/lib/navigation/types";
import { cn } from "@/lib/utils";

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
          <Link href="/">
            <Logo />
          </Link>
          <Cart />
        </div>
      </div>
      <div
        className={cn(
          "relative overflow-hidden transition-all duration-500 ease-in-out",
          isDrawerOpen
            ? "h-[calc(100vh_-_112px)] translate-x-0"
            : "h-0 translate-x-full"
        )}
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
