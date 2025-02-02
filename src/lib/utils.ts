import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges multiple class values into a single string and eliminates duplicates.
 *
 * @param {...ClassValue[]} inputs - An array of class values which could be strings, arrays, or objects.
 * @return {string} - A single merged string of class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats the given datetime value into a localized date string.
 *
 * @param {any} datetime - The datetime value to be formatted. This can be any value that can be parsed by the JavaScript Date object.
 * @returns {string} - A string representing the formatted date in 'en-US' locale, displaying the year and short month.
 */
export const formatDatetime = (datetime: any) => {
  const d = new Date(datetime);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
};
/**
 * Calculates the number of years between two dates.
 *
 * @param {string} startDate - The start date in 'YYYY-MM' format.
 * @param {string} endDate - The end date in 'YYYY-MM' format.
 * @returns {number} - The number of years between the two dates.
 */
export const yearsCalculator = (startDate: string, endDate: string) => {
  const start = +new Date(startDate);
  const end = +new Date(endDate);
  const diff = Math.abs(end - start);
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
};
