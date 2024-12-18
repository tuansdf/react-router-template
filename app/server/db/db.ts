import { ENV } from "@/server/constants/env.constant";
import { drizzle } from "drizzle-orm/libsql";

export const db = drizzle(ENV.DB_URL);

db.$client.execute("select 1");
