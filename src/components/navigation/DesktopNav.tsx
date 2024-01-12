"use client";

import Search from "@/components/icons/Search";
import { Navigation } from "@/components/layout/Header";
import Profile from "@/components/icons/Profile";
import Cart from "@/components/icons/Cart";
import Logo from "@/components/Logo";
import Link from "next/link";
import { useState } from "react";
import Arrow from "@/components/icons/Arrow";

type DesktopNavProps = {
  navigation: Navigation[];
};

const DesktopNav = ({ navigation }: DesktopNavProps) => {
  const [isMenuVisible, setIsMenuVisible] = useState<Record<string, boolean>>(
    {}
  );

  function handleToggleMenu(name: string) {
    setIsMenuVisible((prevState) => ({
      [name]: !prevState[name]
    }));
  }

  return (
    <nav className="relative hidden items-center justify-between border-b border-b-custom-black-200 p-7 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] md:flex">
      <div className="flex w-full items-center gap-x-16">
        <Logo />
        {navigation.length > 0 && (
          <ul className="relative flex gap-x-7">
            {navigation.map(({ name, handle, links }) => (
              <li
                key={`nav-item-${handle}`}
                className="cursor-pointer"
                onClick={() => handleToggleMenu(name)}
              >
                {links.length > 0 ? (
                  <div className="flex">
                    <p>{name}</p>
                    <Arrow
                      className={`${
                        isMenuVisible[name] ? "-rotate-90" : "rotate-90"
                      } transition-transform duration-500 ease-in-out`}
                    />
                  </div>
                ) : (
                  <>
                    <Link href={handle} className="cursor-pointer">
                      {name}
                    </Link>
                  </>
                )}
                {links.length > 0 && (
                  <div
                    className={`absolute mt-2 flex flex-col overflow-hidden bg-white transition-all duration-500 ease-linear ${
                      isMenuVisible[name]
                        ? "h-fit rounded-lg border py-2"
                        : "h-0 border-0 border-transparent"
                    }`}
                  >
                    {links.map((linkItem) => (
                      <Link
                        key={`link-item-${linkItem.handle}`}
                        className="px-4 py-2 hover:bg-slate-100"
                        href={linkItem.handle}
                      >
                        {linkItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex gap-x-5">
        <Search />
        <Profile />
        <Cart />
      </div>
    </nav>
  );
};

export default DesktopNav;
