import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

export default function NavBar() {
  return (
    <nav className="hidden sm:block ml-auto  h-full lg:w-[60%]  glass lg:max-w-[700px] lg:mx-auto">
      <ul className="flex items-center gap-6 h-full w-full lg:justify-evenly">
        <NavLink name="home" link="/" />
        <NavLink name="destination" />
        <NavLink name="crew" />
        <NavLink name="technology" />
      </ul>
    </nav>
  );
}
