import { type ClassValue, clsx } from "clsx";

import { twMerge } from "tailwind-merge";

export const base_query_limit = 10;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// must pass devLog an array or template string to work pro
export function devLog(data: any[]): void {
  if (process.env.NODE_ENV !== "production") {
    console.log(...data);
  }
}
