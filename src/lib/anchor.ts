import * as anchor from "@coral-xyz/anchor"

//import types & IDL
import {type SolQuest, IDL} from "./sol_quest"

const PROGRAM_ID = process.env.NEXT_PUBLIC_PROGRAM_ID
const RPC_ENDPOINT = process.env.NEXT_PUBLIC_RPC_ENDPOINT
if(!PROGRAM_ID || !RPC_ENDPOINT) {
  throw new Error("PROGRAM ID or RPC ENDPOINT missing in ENV")
}

export const connection = new anchor.web3.Connection(RPC_ENDPOINT, "confirmed")

export const getProvider = (wallet: anchor.Wallet) => { 
  const opts = { 
    preflightCommitment: 'processed' as anchor.web3.ConfirmOptions, 
  }; 

  const provider = new anchor.AnchorProvider( 
    connection, 
    wallet, 
    opts.preflightCommitment 
  ); 
  return provider; 
}; 

export const anchorProgram = (wallet: anchor.Wallet) => { 
  const provider = getProvider(wallet); 
  const idl = IDL as anchor.Idl; 
  const program = new anchor.Program( 
    idl, 
    PROGRAM_ID, 
    provider 
  ) as unknown as anchor.Program<SolQuest>; 

  return program; 
};
