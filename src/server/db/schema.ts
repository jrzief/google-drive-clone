// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { int, text, singlestoreTable } from "drizzle-orm/singlestore-core";



export const users = singlestoreTable("users_table", {

  id: int("id").primaryKey().autoincrement(),

  name: text("name"),

  age: int("age"),

});

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
//export const createTable = sqliteTableCreator((name) => `theo-drive-tutorial_${name}`);

