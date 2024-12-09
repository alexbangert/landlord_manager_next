import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const hateoasIdExtractor = (url: string) => {
  const id = url.split("/").pop();

  return id;
};

export const removeHostFromUrl = (url: string) => {
  return url.replace(process.env.NEXT_PUBLIC_API_URL ?? "", "");
};
