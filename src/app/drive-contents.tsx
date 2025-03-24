"use client";

import { useMemo, useState } from "react";
import { mockFiles, mockFolders } from "../lib/mock-data";
import { Folder, FileIcon, Upload, ChevronRight } from "lucide-react";
//import Link from "next/link";
import { Button } from "../components/ui/button";
import { FileRow, FolderRow } from "./file-row";
import type { files_table, folders_table } from "~/server/db/schema";
import Link from "next/link";
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { UploadButton } from "~/components/uploadthing";
import { useRouter } from "next/navigation";

export default function DriveContents(props: {
  files: (typeof files_table.$inferSelect)[];
  folders: (typeof folders_table.$inferSelect)[];
  parents: (typeof folders_table.$inferSelect)[];
}) {
  const navigate = useRouter();
  //const [currentFolder, setCurrentFolder] = useState<number>(1);

  /* const getCurrentFiles = () => {
    return mockFiles.filter((file) => file.parent === currentFolder);
  }

  const getCurrentFolders = () => {
    return mockFolders.filter((folder) => folder.parent === currentFolder);
  } */


  /* const handleFolderClick = (folderId: number) => {
    setCurrentFolder(folderId)
  } */

 /*  const breadcrumbs = () => {
    const breadcrumbs = [];
    let currentId = currentFolder;

    while (currentId !== 1) {
      const folder = props.folders.find((folder) => folder.id === currentId)
      if (folder) {
        breadcrumbs.unshift(folder);
        currentId = folder.parent ?? 1;
      } else {
        break;
      }
    }

    return breadcrumbs;
  }; //, [currentFolder]); */

  const breadcrumbs: unknown[] = [];
 
  /* const handleUpload = () => {
    alert("Upload functionality would be implemented here")
  };
 */
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <Link
              href="/f/1"
             /*  onClick={() => setCurrentFolder(1)}
              variant="ghost" */
              className="text-gray-300 hover:text-white mr-2"
            >
              My Drive
            </Link>
               {props.parents.map((folder, index) => (
                <div key={folder.id} className="flex items-center">
                  <ChevronRight className="mx-2 text-gray-500" size={16} />
                  <Link
                    href={`/f/${folder.id}`}
                   /*  onClick={() => handleFolderClick(folder.id)}
                    variant="ghost" */
                    className="text-gray-300 hover:text-white"
                  >
                    {folder.name}
                  </Link>
                </div>
              ))}
          </div>
          <div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg shadow-xl">
          <div className="px-6 py-4 border-b border-gray-700">
            <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-400">
              <div className="col-span-6">Name</div>
              <div className="col-span-3">Type</div>
              <div className="col-span-3">Size</div>
            </div>
          </div>
          <ul>
           {props.folders.map((folder) => (
              <FolderRow 
                key={folder.id} 
                folder={folder}
               /*  handleFolderClick={() => {
                  handleFolderClick(folder.id)
                }} */
              />
            ))}  
            {props.files.map((file) => (
              <FileRow key={file.id} file={file} />

            ))}  
             {/*  <li key={file.id} className="px-6 py-4 border-b border-gray-700 hover:bg-gray-750">
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-6 flex items-center">
                    {file.type === "folder" ? (
                      <button
                        onClick={() => handleFolderClick(file.id)}
                        className="flex items-center text-gray-100 hover:text-blue-400"
                      >
                        <Folder className="mr-3" size={20} />
                        {file.name}
                      </button>
                    ) : (
                      <Link href={file.url || "#"} className="flex items-center text-gray-100 hover:text-blue-400">
                        <FileIcon className="mr-3" size={20} />
                        {file.name}
                      </Link>
                    )}
                  </div>
                  <div className="col-span-3 text-gray-400">{file.type === "folder" ? "Folder" : "File"}</div>
                  <div className="col-span-3 text-gray-400">{file.type === "folder" ? "--" : "2 MB"}</div>
                </div>
              </li>
            ))} */}
          </ul>
        </div>
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={() => {
            navigate.refresh();
          }}
        />
      </div>
    </div>
  );
}
