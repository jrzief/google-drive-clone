//import "server-only";
//import { singlestoreTable } from 'drizzle-orm/singlestore-core';
// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { int, text, bigint, singlestoreTable, index, singlestoreTableCreator, timestamp} from "drizzle-orm/singlestore-core";



/* export const users = singlestoreTable("users_table", {

  id: int("id").primaryKey().autoincrement(),

  name: text("name"),

  age: int("age"),

}); */

export const createTable = singlestoreTableCreator(
  (name) => `theo_drive_tutorial_${name}`,
);

export const files_table = createTable("files_table", {
  id: bigint("id", { mode: "number", unsigned: true }).primaryKey().autoincrement(),
  ownerId: text("owner_id").notNull(),
  name: text("name").notNull(),
  size: int("size").notNull(),
  url: text("url").notNull(),
  parent: bigint("parent", { mode: "number", unsigned: true }).notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow()
},
 (t) => {
  return [
    index("parent_index").on(t.parent),
    index("owner_id_index").on(t.ownerId),
  ];
 },
);

//export type DB_FileType = typeof files_table.$inferSelect;

export const folders_table = createTable("folders_table", {
  id: bigint("id", { mode: "number", unsigned: true }).primaryKey().autoincrement(),
  ownerId: text("owner_id").notNull(),
  name: text("name").notNull(),
  parent: bigint("parent", { mode: "number", unsigned: true }),
  createdAt: timestamp("created_at").notNull().defaultNow()
},
 (t) => {
  return [
    index("parent_index").on(t.parent),
    index("owner_id_index").on(t.ownerId),
  ];
 },
);

//export type DB_FolderType = typeof folders_table.$inferSelect;

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
//export const createTable = sqliteTableCreator((name) => `theo-drive-tutorial_${name}`);

