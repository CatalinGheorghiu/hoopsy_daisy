"use client";

import { ComponentPropsWithoutRef, useState } from "react";

import Eye from "@/components/icons/Eye";
import EyeOff from "@/components/icons/EyeOff";
import { cn } from "@/lib/utils";

type InputProps = Omit<ComponentPropsWithoutRef<"input">, "type"> & {
  type: "text" | "password" | "email" | "number";
};

const Input = ({ type, className, ...rest }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        className={cn(
          "w-full rounded-60 border border-custom-black-400 px-5 py-2.5",
          className
        )}
        type={showPassword ? "text" : type}
        {...rest}
      />

      {type === "password" && (
        <button
          className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer text-custom-black-400"
          type="button"
          onClick={() => setShowPassword((prevState) => !prevState)}
        >
          {showPassword ? (
            <>
              <EyeOff /> <span className="hidden">Show Password</span>
            </>
          ) : (
            <>
              <Eye /> <span className="hidden">Hide Password</span>
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default Input;
