import { z } from "zod";

const env = {
  DB_URL: process.env.DB_URL,
};

const envSchema = z.object({
  DB_URL: z.string().min(1),
});

export const ENV = envSchema.parse(env);
