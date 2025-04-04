import { db } from "~/server/db";

import { files_table as filesSchema, folders_table as foldersSchema} from "~/server/db/schema";
import DriveContents from "./drive-contents";
import {eq} from "drizzle-orm";
import { getAllParentsForFolder, getFiles, getFolders } from "~/server/db/queries";
//import Link from "next/lin

/* async function getAllParents(folderId: number) {
  const parents = [];
  let currentId: number | null = folderId;
  while (currentId !== null) {
    const folder = await db
     .selectDistinct()
     .from(foldersSchema)
     .where(eq(foldersSchema.id, currentId));

    if (!folder[0]) {
      throw new Error("Folder not found");
    }
    parents.unshift(folder[0]);
    currentId = folder[0]?.parent;
  }
  return parents;
} */


export default async function GoogleDriveClone(props: {
  params: Promise<{folderId: string}>;
}) {
  const params = await props.params;

  const parsedFolderId = parseInt(params.folderId);
  if (isNaN(parsedFolderId)) {
    return <div>Invalid folder ID</div>;
  }

  console.log(params.folderId);
  
  const foldersPromise = getFolders(parsedFolderId);
   /*  db.select()
    .from (foldersSchema)
    .where(eq(foldersSchema.parent, parsedFolderId));
 */
  const filesPromise = getFiles(parsedFolderId);
   /*  db.select()
    .from (filesSchema)
    .where(eq(filesSchema.parent, parsedFolderId));  */
    
  const parentsPromise = getAllParentsForFolder(parsedFolderId);  

  const [folders, files, parents]  = await Promise.all([foldersPromise, filesPromise, parentsPromise]);

  return <DriveContents files={files} folders={folders} parents={parents} currentFolderId={parsedFolderId} />;
}
