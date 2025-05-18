"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import React from "react";
import Link from "next/link";
import { NAV_ITEMS } from "./nav-items";
import Image from "next/image";

export const MobileNav = () => {
  return (
    <div className="block md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-[300px] sm:w-[400px] bg-gradient-to-b from-secondary to-orange-400/90"
        >
          <SheetHeader>
            <SheetTitle className="flex space-x-2 items-center">
              <Image
                src="/logo.jpeg"
                width={40}
                height={40}
                alt="USA Epoxy Floors Logo"
                className="h-10 w-auto rounded-sm"
              />
              <span>USA Epoxy Floor</span>
            </SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => (
              <SheetClose key={item.url} asChild>
                {item?.isATag ? (
                  <a
                    href={item.url || "#"}
                    className="block py-2 text-sm ml-4 px-2"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    href={item.url || "#"}
                    className="block py-2 text-sm ml-4 px-2"
                  >
                    {item.name}
                  </Link>
                )}
              </SheetClose>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};
