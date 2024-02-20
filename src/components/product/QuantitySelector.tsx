"use client";

import { useState } from "react";

import Minus from "@/components/icons/Minus";
import Plus from "@/components/icons/Plus";
import { cn } from "@/lib/utils";

type QuantitySelectorType = {
  label?: string;
  className?: string;
};
const QuantitySelector = ({ label, className }: QuantitySelectorType) => {
  const [inputValue, setInputValue] = useState(1);

  function handleIncrement() {
    setInputValue((prevState) => prevState + 1);
  }

  function handleDecrement() {
    if (inputValue <= 0) return;
    setInputValue((prevState) => prevState - 1);
  }

  return (
    <div className={cn("flex justify-between", className)}>
      {label && (
        <label
          htmlFor="quantity-selector"
          className="h6-semibold text-custom-black-500"
        >
          Quantity
        </label>
      )}

      <div className="flex items-center">
        <button
          className="rounded-4 border-2 border-custom-purple-200 bg-custom-purple-100 p-1"
          onClick={handleDecrement}
          aria-label="Decrease Quantity"
        >
          <Minus />
        </button>
        <input
          type="text"
          id="quantity-selector"
          className="h-8 w-8 p-1 text-center text-custom-black-900"
          value={inputValue}
          readOnly
          min={1}
        />
        <button
          className="rounded-4 border-2 border-custom-purple-200 bg-custom-purple-100 p-1"
          onClick={handleIncrement}
          aria-label="Increase Quantity"
        >
          <Plus />
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
