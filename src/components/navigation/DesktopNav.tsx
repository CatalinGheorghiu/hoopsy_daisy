"use client";

import { useState } from "react";
import Link from "next/link";

import Search from "@/components/icons/Search";
import { Navigation } from "@/components/layout/Header";
import Profile from "@/components/icons/Profile";
import Cart from "@/components/icons/Cart";
import Logo from "@/components/Logo";
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
    <nav className="relative hidden items-center justify-between border-b-2 border-b-custom-black-200 p-7 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)] md:flex lg:px-14">
      <div className="mx-auto flex w-full max-w-screen-xl lg:max-w-screen-xl">
        <div className="flex w-full items-center gap-x-16">
          <Logo className="lg:h-28 lg:w-28" />
          {navigation.length > 0 && (
            <ul className="relative flex gap-x-7">
              {navigation.map(({ name, handle, links }) => (
                <li
                  key={`nav-item-${handle}`}
                  className="flex cursor-pointer items-center"
                  onClick={() => handleToggleMenu(name)}
                >
                  {/* Menu Items */}
                  {links.length > 0 ? (
                    <div className="flex items-center">
                      <p className="mr-2">{name}</p>
                      <Arrow
                        className={`${
                          isMenuVisible[name] ? "-rotate-90" : "rotate-90"
                        } transition-transform duration-500 ease-in-out lg:h-auto lg:w-8`}
                      />
                    </div>
                  ) : (
                    <>
                      <Link href={handle}>{name}</Link>
                    </>
                  )}
                  {/* Submenu */}
                  {links.length > 0 && (
                    <div
                      className={`absolute top-6 mt-2 flex flex-col overflow-hidden bg-white transition-all duration-500 ease-linear ${
                        isMenuVisible[name]
                          ? "h-fit rounded-lg border py-2"
                          : "h-0 border-0 border-transparent"
                      }`}
                    >
                      {/* Submenu Item */}
                      {links.map((linkItem) => (
                        <Link
                          key={`link-item-${linkItem.handle}`}
                          className="px-4 py-2 hover:bg-slate-100 lg:text-lg"
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
        <div className="flex items-center gap-x-5">
          <Search />
          <Profile />
          <Cart />
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
