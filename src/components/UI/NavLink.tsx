"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  name: "home" | "destination" | "crew" | "technology";
  link?: string;
}
export default function NavLink({ name, link = `/${name}` }: NavLinkProps) {
  const path = usePathname();
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <Link
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      href={link}
      className="flex items-center justify-center h-full  relative"
    >
      <li className="uppercase barlowCondensed text-lg flex items-center gap-2">
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
        className={` ${
          path === link ? "w-full" : `w-0 ${hovered && "w-full bg-zinc-400"}`
        }  absolute transition-all duration-500 ease-in-out left-1/2 -translate-x-1/2 bottom-0 bg-[#FEFFFE] h-1`}
      ></div>
    </Link>
  );
}
