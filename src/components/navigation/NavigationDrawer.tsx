"use client";

import Link from "next/link";
import React, { useState } from "react";

import Arrow from "@/components/icons/Arrow";
import Close from "@/components/icons/Close";
import Logout from "@/components/icons/Logout";
import Profile from "@/components/icons/Profile";
import Search from "@/components/icons/Search";
import { Navigation } from "@/components/layout/Header";
import { cn } from "@/lib/utils";

type NavigationDrawerProps = {
  handleDrawer: (value: boolean) => void;
  navigation: Navigation[];
};

const NavigationDrawer = ({
  handleDrawer,
  navigation
}: NavigationDrawerProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<Record<string, boolean>>({});

  function handleToggleMenu(name: string) {
    setIsMenuOpen((prevState) => ({
      ...prevState,
      [name]: !prevState[name]
    }));
  }

  return (
    <div className="relative z-10 flex h-full w-4/5 max-w-[400px] flex-col bg-white px-4 pb-10 pt-7">
      <div className="flex justify-between pb-7">
        <Close onClick={() => handleDrawer(false)} />
        <div className="flex gap-x-5">
          <Search />
          <Profile />
        </div>
      </div>

      <div className="flex h-full flex-col">
        {navigation.length > 0 && (
          <ul className="flex flex-col ">
            {navigation.map(({ name, handle, links }, index) => (
              <li
                key={`link-${handle}`}
                className={cn(
                  "py-4",
                  index === navigation.length - 1 ? "border-y" : "border-t"
                )}
                onClick={() => {
                  if (links.length > 0) {
                    handleToggleMenu(name.toLowerCase());
                  }
                }}
              >
                <button className="flex w-full justify-between">
                  <Link href={handle}>
                    <span>{name}</span>
                  </Link>

                  {links.length > 0 && (
                    <Arrow
                      className={cn(
                        "transition-transform duration-500 ease-in-out",
                        isMenuOpen[name.toLowerCase()]
                          ? "-rotate-90"
                          : "rotate-0"
                      )}
                    />
                  )}
                </button>

                {links.length > 0 && (
                  <div
                    className={cn(
                      "grid text-sm text-custom-black-600",
                      isMenuOpen[name.toLowerCase()]
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    )}
                    style={{
                      transition: "grid-template-rows 0.5s ease-out"
                    }}
                  >
                    <div className="flex flex-col overflow-hidden">
                      {links.map((link) => (
                        <Link
                          href={link.handle}
                          key={`nested-link-${link.handle}`}
                          className="py-2"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}

        <div className="flex grow cursor-pointer items-end gap-x-1.5 text-custom-black-500">
          <Link href="#" className="flex gap-x-2">
            <Logout />
            Sign out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavigationDrawer;
