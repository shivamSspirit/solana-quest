import "server-only"

import { z } from "zod";

const envSchema = z.object({
  UNDERDOG_API: z.string(),
  UNDERDOG_BASE_URL: z.string().url(),
  UNDERDOG_PROJECT_ID: z.string(),
  GAS_PRIVATE_KEY: z.string()
})

const serverEnv = envSchema.parse(process.env)

export default serverEnv
