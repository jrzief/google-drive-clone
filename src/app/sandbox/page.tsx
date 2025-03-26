import { db } from "~/server/db";
import { mockFolders, mockFiles } from "~/lib/mock-data";
import { files_table, folders_table } from "~/server/db/schema";
import { auth } from "@clerk/nextjs/server";
import {eq} from "drizzle-orm";

export default async function Sandbox() {
  /* const user = await auth();
  if (!user.userId) {
    throw new Error("User not found");
  }
  console.log('user', user.userId);
  const folders = await db
    .select()
    .from(folders_table)
    .where(eq(folders_table.ownerId, user.userId));

  console.log('folders', folders);
  */
  return (
    <div className="flex flex-col gap-4">
      <p>Does it work??</p>
      <form
        action={async () => {
          "use server";

          const user = await auth();
          if (!user.userId) {
            throw new Error("User not found");
          }

          const rootFolder = await db.insert(folders_table).values({
            name: "root",
            ownerId: user.userId,
            parent: null,
          }).$returningId();

          const insertableFolders = mockFolders.map((folder) => ({
            name: folder.name,
            ownerId: user.userId,
            parent: rootFolder[0]!.id,
          }));

          await db.insert(folders_table).values(insertableFolders);

          console.log("sup nerds");
              
        }}
             
      >  
        <button type="submit">Create file</button>
      </form> 
    </div>
  );
}

/* export default function Sandbox() {
  return (
    <div className="flex flex-col gap-4">
      Seed Function {" "}
      <form
        action={async () => {
          "use server";

          const folderInsert = await db.insert(folders).values(
            mockFolders.map((folder, index) => ({
              id: index + 1,
              name: folder.name,
              parent: index !== 0 ? 1 : null,
            })),
          );

          console.log(folderInsert);

          const fileInsert = await db.insert(files).values(
            mockFiles.map((file, index) => ({
              id: index + 1,
              name: file.name,
              size: 50000,
              url: file.url,
              parent: (index % 3) + 1,
            })),
          );

          console.log(fileInsert);


          console.log("sup nerds");
        }}
      >  
        <button type="submit">Seed</button>
      </form>
    </div>
  );
} */