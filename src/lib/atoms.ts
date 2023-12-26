import { atom } from "jotai";
// import { anchorProgram } from "./anchor";
import type {Program, web3, AccountClient } from "@coral-xyz/anchor"
import { SolQuest } from "./sol_quest";

const anchor = atom<Program | null>(null)

const pfp = atom<string | null>(null)

const gasKeypair = atom<web3.Keypair | null>(null)

const solQuestAnchor = atom<Program<SolQuest> | null>(null)

const userAccountPDA = atom<web3.PublicKey | null>(null)

const userAccount = atom<any>(null)

const lastSubmitted = atom<number>(2)

export {
  anchor,
  pfp,
  gasKeypair,
  solQuestAnchor,
  userAccountPDA,
  userAccount,
  lastSubmitted
}
