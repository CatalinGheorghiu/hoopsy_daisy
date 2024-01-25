import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary";
};

const primary = `bg-custom-purple-800 text-white hover:bg-custom-purple-700 disabled:bg-custom-purple-200 disabled:text-custom-purple-400`;
const secondary = `border border-custom-purple-800 text-custom-purple-800 hover:bg-custom-purple-200 disabled:border-custom-purple-200 disabled:text-custom-black-300`;

const Button = ({
  className,
  children,
  variant = "primary",
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      className={`
        w-fit rounded-[50px] px-7 py-3 font-semibold transition-all ease-out active:bg-custom-purple-900 active:text-white
        md:px-8 md:py-4
        ${variant === "primary" ? primary : secondary} 
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
