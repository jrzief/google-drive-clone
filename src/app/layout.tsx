import "~/styles/globals.css";
import {ClerkProvider, SignInButton, SignUpButton, SignedIn, SignedOut, UserButton}
 from '@clerk/nextjs';
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { PostHogProvider} from "./_providers/posthog-provider";

export const metadata: Metadata = {
  title: "My Google Drive Thing",
  description: "Like Google Drive, but worse!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <PostHogProvider>
        <html lang="en" className={`${GeistSans.variable}`}>
          <body>
            <PostHogProvider>{children}</PostHogProvider>
          </body>
        </html>
      </PostHogProvider>
    </ClerkProvider>
  );
}
