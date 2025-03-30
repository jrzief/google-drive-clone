import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Button } from "~/components/ui/button";

export default function Signin() {
  return (
   <> 
     <main className="text-center">
      <SignInButton forceRedirectUrl={"/drive"} />
     </main>  
     <footer className="mt-16 text-sm text-neutral-500">
       © {new Date().getFullYear()} T3 Drive. All rights reserved.
     </footer>
    </>
  );
}
