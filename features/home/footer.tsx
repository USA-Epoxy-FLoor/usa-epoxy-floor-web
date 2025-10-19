import Link from "next/link";
import React from "react";

export function Footer() {
  return (
    <>
      <footer className="w-full border-t py-6 md:py-0 text-center px-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row mx-auto py-3">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link
              href="/sitemap.xml"
              className="text-sm hover:underline underline-offset-4"
            >
              Sitemap
            </Link>
          </div>
          <p className="text-xs text-center">
            © {new Date().getFullYear()} USA Epoxy Floors. All rights reserved.
          </p>

          <Link
            href="https://www.techwavellc.io/"
            className="text-xs hover:underline underline-offset-4"
          >
            Designed by Techwave LLC
          </Link>
        </div>
      </footer>
    </>
  );
}
