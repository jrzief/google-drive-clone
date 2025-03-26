import "~/styles/globals.css";
import {ClerkProvider, SignInButton, SignUpButton, SignedIn, SignedOut, UserButton}
 from '@clerk/nextjs';
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

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
      <html lang="en" className={`${GeistSans.variable}`}>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
