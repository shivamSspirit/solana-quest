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

export {
  cn,
  sleep
}
