import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_PROGRAM_ID: z.string(),
  NEXT_PUBLIC_RPC_ENDPOINT: z.string(),
  NEXT_PUBLIC_GAS_ACCOUNT: z.string()
})

console.log(process.env)
const publicEnv = envSchema.parse(process.env)

export default publicEnv
