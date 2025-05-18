import Link from "next/link";
import { NAV_ITEMS } from "./nav-items";

export const Nav = () => {
  return (
    <nav className="hidden md:flex gap-4 lg:gap-6">
      {NAV_ITEMS?.map((navItem) =>
        navItem.isATag ? (
          <a
            href={navItem.url}
            key={navItem.url}
            className="text-sm font-medium hover:text-primary"
          >
            {navItem.name}
          </a>
        ) : (
          <Link
            href={navItem.url}
            key={navItem.url}
            className="text-sm font-medium hover:text-primary"
          >
            {navItem.name}
          </Link>
        )
      )}
    </nav>
  );
};
