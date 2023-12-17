"use client"
import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_PROGRAM_ID: z.string(),
  NEXT_PUBLIC_RPC_ENDPOINT: z.string(),
  NEXT_PUBLIC_GAS_PUBLIC_KEY: z.string(),
  NEXT_PUBLIC_DEVNET: z.coerce.boolean()
})

console.log(process.env)
const publicEnv = envSchema.parse({
  NEXT_PUBLIC_PROGRAM_ID: process.env['NEXT_PUBLIC_PROGRAM_ID'],
  NEXT_PUBLIC_RPC_ENDPOINT: process.env['NEXT_PUBLIC_RPC_ENDPOINT'],
  NEXT_PUBLIC_GAS_PUBLIC_KEY: process.env['NEXT_PUBLIC_GAS_PUBLIC_KEY'],
  NEXT_PUBLIC_DEVNET: Number(process.env['NEXT_PUBLIC_DEVNET'])
})

export default publicEnv
