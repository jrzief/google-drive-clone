
import { db } from "~/server/db";

import { files as filesSchema, folders as foldersSchema} from "~/server/db/schema";
import DriveContents from "./drive-contents";
//import Link from "next/lin


export default function HomePage() {
  //const files = await db.select().from (filesSchema);
  //const folders = await db.select().from (foldersSchema);
  //return <DriveContents files={files} folders={folders} />
  return <div>{"Please subscribe you're two hours in you nerd"}</div>;
}
