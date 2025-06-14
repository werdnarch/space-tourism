"use client";
import { MenuIcon, X } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import NavLink from "./NavLink";
import Link from "next/link";
import MobileNavLink from "./MobileNavLink";

export default function MenuButton() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = ""; // cleanup on unmount
    };
  }, [menuOpen]);

  return (
    <section>
      <button
        onClick={() => setMenuOpen(true)}
        className="cursor-pointer text-[#D0D7F8] sm:hidden"
      >
        <MenuIcon size={33} strokeWidth={3} />
      </button>

      <div
        ref={menuRef}
        className={`absolute max-w-[300px] z-100 glass transition-all duration-300 ease-in-out ${
          menuOpen ? "w-[60%] block" : "w-[0%] overflow-hidden hidden"
        } h-full top-0 right-0 sm:hidden `}
      >
        <header className="flex p-6 items-center justify-end">
          <button onClick={() => setMenuOpen(false)} className="cursor-pointer">
            <X size={30} />
          </button>
        </header>

        <nav>
          <ul className="flex flex-col gap-4 barlowCondensed">
            <MobileNavLink setMenuOpen={setMenuOpen} name="home" link="/" />
            <MobileNavLink setMenuOpen={setMenuOpen} name="destination" />
            <MobileNavLink setMenuOpen={setMenuOpen} name="crew" />
            <MobileNavLink setMenuOpen={setMenuOpen} name="technology" />
          </ul>
        </nav>
      </div>
    </section>
  );
}
