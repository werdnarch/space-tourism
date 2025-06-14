import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  name: "home" | "destination" | "crew" | "technology";
  link?: string;
  setMenuOpen: (value: boolean) => void;
}

export default function MobileNavLink({
  name,
  setMenuOpen,
  link = `/${name}`,
}: NavLinkProps) {
  const path = usePathname();
  return (
    <Link
      onClick={() => setMenuOpen(false)}
      href={link}
      className=" relative px-6 h-18 flex items-center"
    >
      <li className="uppercase barlowCondensed text-2xl flex items-center gap-2">
        <p className="font-bold">
          {name === "home"
            ? "00"
            : name === "destination"
            ? "01"
            : name === "crew"
            ? "02"
            : "03"}
        </p>
        <p>{name}</p>
      </li>
      <div
        className={`transition-all top-1/2 -translate-y-1/2 duration-300 ease-in-out ${
          path === link ? "h-full" : "h-0"
        } left-0 w-1 absolute bg-white`}
      ></div>
    </Link>
  );
}
