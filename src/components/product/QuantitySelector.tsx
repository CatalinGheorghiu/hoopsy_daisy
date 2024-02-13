import { useState } from "react";

import Minus from "@/components/icons/Minus";
import Plus from "@/components/icons/Plus";

const QuantitySelector = () => {
  const [inputValue, setInputValue] = useState(1);

  function handleIncrement() {
    setInputValue((prevState) => prevState + 1);
  }

  function handleDecrement() {
    if (inputValue <= 0) return;
    setInputValue((prevState) => prevState - 1);
  }

  return (
    <div className="flex justify-between border-t-2 border-custom-black-200 py-6">
      <label
        htmlFor="quantity-selector"
        className="h6-semibold text-custom-black-500"
      >
        Quantity
      </label>
      <div className="flex">
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
          className="w-8 text-center text-custom-black-900"
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
