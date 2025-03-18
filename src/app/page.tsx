"use client"

import { useState } from "react"
import { File, mockFiles } from "../lib/mock-data"
import { Folder, FileIcon, Upload, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "../components/ui/button"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        {"Sup nerds, you're subscribed right?"}
      </div>
    </main>
  );
}
