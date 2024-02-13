import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a number by adding commas to separate thousands and optionally pads decimal places.
 *
 * @param {number} number - The number to format.
 * @returns {string} The formatted number with commas and padded decimal places if applicable.
 */

export function formatNumberWithComma(number: number): string {
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

/**
 * Returns an array containing unique items from the input array based on the specified key.
 * Only the first occurrence of each unique key is stored.
 *
 * @template T - The type of the input array elements.
 * @param {T[]} arr - The input array containing elements to filter.
 * @param {string} key - The key used to determine uniqueness.
 * @returns {T[]} An array containing unique items based on the specified key.
 */
export function getUniqueByKey<T extends Record<string, any>[]>(
  arr: T,
  key: string
): Array<T[number]> {
  // Create a new Map to store unique items based on the specified key
  const map = new Map<string, T[number]>();

  // Iterate over each item in the input array
  for (const item of arr) {
    // Extract the value of the specified key from the current item
    const keyValue = item[key];

    // Check if the map already contains a value for the current key
    if (!map.has(keyValue)) {
      // If the key is not already present in the map, add the item to the map
      // using the key as the map key and the item itself as the map value
      map.set(keyValue, item);
    }
  }

  // Return an array containing the values of the map,
  // which represent the unique items based on the specified key
  return [...map.values()];
}
