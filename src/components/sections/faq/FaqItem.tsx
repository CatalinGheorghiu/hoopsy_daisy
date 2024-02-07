"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import { FaqItemType } from "@/components/sections/faq/Faq";
import Arrow from "@/components/icons/Arrow";

type FaqItemProps = { item: FaqItemType; isLast: boolean };

const FaqItem = ({
  item: { isOpen, question, id, answer },
  isLast
}: FaqItemProps) => {
  const [open, setOpen] = useState(isOpen);

  function handleToggleVisibility() {
    setOpen((prevState) => !prevState);
  }

  return (
    <li
      className={cn(
        "border-t-2 border-custom-black-300 py-6",
        isLast && "border-b-2 md:border-b-0"
      )}
    >
      <button
        className="flex w-full cursor-pointer items-center justify-between gap-x-8 pb-2"
        onClick={handleToggleVisibility}
      >
        <h3 className="h6-semibold text-left">{question}</h3>
        <Arrow
          className={cn(
            "transition-all duration-500 ease-in-out",
            open ? "-rotate-90" : "rotate-90"
          )}
        />
      </button>

      <div
        className={cn(
          "grid grid-flow-col overflow-hidden text-sm text-slate-600 transition-all duration-500 ease-in-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p>{answer}</p>
        </div>
      </div>
    </li>
  );
};

export default FaqItem;
