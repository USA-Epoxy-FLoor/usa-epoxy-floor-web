import { MobileNav } from "@/components/menu/mobile-nav";
import { Nav } from "@/components/menu/nav";
import { ThemeSwitcher } from "@/components/themes/theme-switcher";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[background]/70 shadow">
      <div className="container flex h-16 items-center justify-between mx-auto px-4">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.jpeg"
            width={40}
            height={40}
            alt="USA Epoxy Floors Logo"
            className="h-10 w-auto rounded-sm"
          />
          <span className="text-xl font-bold hidden lg:block">
            USA Epoxy Floors
          </span>
        </div>

        <Nav />

        <div className="flex items-center gap-4">
          <Button asChild className="">
            <Link href="tel:+18454642539">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:block">(845) 464-2539</span>
            </Link>
          </Button>
          <ThemeSwitcher />

          <MobileNav />
        </div>
      </div>
    </header>
  );
};
