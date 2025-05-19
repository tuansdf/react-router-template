import { index, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { v7 as uuid } from "uuid";

export const users = sqliteTable(
  "_user",
  {
    id: text("id").$defaultFn(() => uuid()),
  },
  (table) => [index("user_id_idx").on(table.id)],
);
