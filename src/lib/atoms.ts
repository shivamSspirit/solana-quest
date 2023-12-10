import { atom } from "jotai";
// import { anchorProgram } from "./anchor";
import type {Program} from "@coral-xyz/anchor"

const anchor = atom<Program | null>(null)

export {
  anchor
}
