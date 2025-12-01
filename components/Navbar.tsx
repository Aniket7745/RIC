"use client";

import Link from "next/link";
import ModeToggle from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <nav className="w-full border-b sticky top-0 z-50 bg-white text-black dark:bg-neutral-950 dark:text-white">
      <div className="max-w-9xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LEFT — LOGO */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
          {/* <span className="text-xl font-bold hidden md:block">RIC STEEL</span> */}
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/operations">Operations</Link>
          <Link href="/quality-control">Quality Control</Link>
        </div>

        {/* DESKTOP ACTION BUTTONS */}
        <div className="hidden md:flex items-center gap-3">
          <ModeToggle />
          <Link href="/enquiry">
            <Button variant="outline">Enquiry</Button>
          </Link>
          <Link href="/contact">
            <Button>Contact</Button>
          </Link>
        </div>

        {/* MOBILE — THEME + HAMBURGER */}
        <div className="md:hidden flex items-center gap-2">

          {/* THEME TOGGLE OUTSIDE MENU */}
          <ModeToggle />

          {/* HAMBURGER MENU */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="left"
              className="w-64 bg-white text-black dark:bg-neutral-900 dark:text-white"
            >
              <SheetHeader>
                <SheetTitle className="text-xl font-bold">RIC STEEL</SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-4 mt-6 text-sm font-medium">
                <Link href="/">Home</Link>
                <Link href="/About">About</Link>
                <Link href="/products">Products</Link>
                <Link href="/operations">Operations</Link>
                <Link href="/quality-control">Quality Control</Link>

                <div className="border-t my-4" />

                <Link href="/enquiry">
                  <Button variant="outline" className="w-full">Enquiry</Button>
                </Link>

                <Link href="/contact">
                  <Button className="w-full">Contact</Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </nav>
  );
}
