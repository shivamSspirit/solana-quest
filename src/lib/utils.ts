import type { ClassValue } from "clsx";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
        return twMerge(clsx(inputs));
}

function sleep(millisec = 0) {
        return new Promise((resolve) => {
                setTimeout(() => resolve(""), millisec);
        });
};

function trimKey(key: string) {
   return key.slice(0, 5) + "...." + key.slice(-5, -1);
}


export {
  cn,
  sleep,
        trimKey
}
