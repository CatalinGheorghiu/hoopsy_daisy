import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumberWithComma(number: number) {
  // Check if the number is a decimal
  const isDecimal = !Number.isInteger(number);

  // Convert the number to a string and split into integer and decimal parts
  const [integerPart, decimalPart] = number.toString().split(".");

  // Format the integer part with commas
  const formattedIntegerPart = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ","
  );

  // If there is a decimal part, append it with two digits
  const formattedDecimalPart = isDecimal
    ? `.${decimalPart.padEnd(2, "0")}`
    : "";

  // Concatenate the formatted parts
  return formattedIntegerPart + formattedDecimalPart;
}
