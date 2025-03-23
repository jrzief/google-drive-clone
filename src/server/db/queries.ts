import { db } from "~/server/db";

import { files_table as filesSchema, folders_table as foldersSchema} from "~/server/db/schema";
//import DriveContents from "../../drive-contents";
import {eq} from "drizzle-orm";
//import Link from "next/lin

export async function getAllParentsForFolder(folderId: number) {
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
}


export function getFolders(folderId: number) {
  
  //const foldersPromise = db
  return db
    .select()
    .from (foldersSchema)
    .where(eq(foldersSchema.parent, folderId));
}

export function getFiles(folderId: number) {
  //const filesPromise = db
  return db
    .select()
    .from (filesSchema)
    .where(eq(filesSchema.parent, folderId)); 
}    
