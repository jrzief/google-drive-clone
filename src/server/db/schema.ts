//import { singlestoreTable } from 'drizzle-orm/singlestore-core';
// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { int, text, bigint, singlestoreTable, index, singlestoreTableCreator} from "drizzle-orm/singlestore-core";



/* export const users = singlestoreTable("users_table", {

  id: int("id").primaryKey().autoincrement(),

  name: text("name"),

  age: int("age"),

}); */

export const createTable = singlestoreTableCreator(
  (name) => `theo-drive-tutorial_${name}`,
);

export const files = createTable("files_table", {
  id: bigint("id", { mode: "number", unsigned: true }).primaryKey().autoincrement(),
  name: text("name").notNull(),
  size: int("size").notNull(),
  url: text("url").notNull(),
  parent: bigint("parent", { mode: "number", unsigned: true }).notNull(),
},
 (t) => {
  return [index("parent_index").on(t.parent)];
 },
);

export const folders = createTable("folders_table", {
  id: bigint("id", { mode: "number", unsigned: true }).primaryKey().autoincrement(),
  name: text("name").notNull(),
  parent: bigint("parent", { mode: "number", unsigned: true }),
},
 (t) => {
  return [index("parent_index").on(t.parent)];
 },
);

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
//export const createTable = sqliteTableCreator((name) => `theo-drive-tutorial_${name}`);

