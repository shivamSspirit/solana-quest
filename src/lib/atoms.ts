import { atom } from "jotai";
// import { anchorProgram } from "./anchor";
import type {Program, web3} from "@coral-xyz/anchor"
import { SolQuest } from "./sol_quest";

const anchor = atom<Program | null>(null)

const pfp = atom<string | null>(null)

const gasKeypair = atom<web3.Keypair | null>(null)

const solQuestAnchor = atom<Program<SolQuest> | null>(null)

const userAccountPDA = atom<web3.PublicKey | null>(null)

export {
  anchor,
  pfp,
  gasKeypair,
  solQuestAnchor,
  userAccountPDA
}
