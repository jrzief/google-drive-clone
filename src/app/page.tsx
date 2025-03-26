
import { db } from "~/server/db";

//import { files as filesSchema, folders as foldersSchema} from "~/server/db/schema";
//import DriveContents from "./drive-contents";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
//import Link from "next/lin


export default function HomePage() {
  //const files = await db.select().from (filesSchema);
  //const folders = await db.select().from (foldersSchema);
  //return <DriveContents files={files} folders={folders} />
  return (
  <div>
    <p>{"Please subscribe you're two hours in you nerd"}</p>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );   
}
