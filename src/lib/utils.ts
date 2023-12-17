import { utils, web3 } from "@coral-xyz/anchor";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import publicEnv from "./env/public";

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

async function copyToClipboard(text: string): Promise<void> {
    try {
        await navigator.clipboard.writeText(text);
        console.log('Text successfully copied to clipboard.');
    } catch (err) {
        console.error('Failed to copy text to clipboard:', err);
    }
}

function getAdminWallet() {
    return web3.Keypair.fromSecretKey(
        utils.bytes.bs58.decode(publicEnv.NEXT_PUBLIC_GAS_ACCOUNT)
    );
}


export {
  cn,
  sleep,
        trimKey,
        copyToClipboard,
    getAdminWallet
}
