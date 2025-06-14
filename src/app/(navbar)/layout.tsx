"use client";

import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Logo from "@/src/components/UI/Logo";
import MenuButton from "@/src/components/UI/MenuButton";
import NavBar from "@/src/components/UI/NavBar";
import { SpaceDataProvider } from "@/src/context/SpaceDataContext";

export default function layout({ children }: { children: ReactNode }) {
  const path = usePathname();
  return (
    <main
      className={`h-full flex flex-col p-4 lg:p-8 gap-4 ${
        path === "/"
          ? "home"
          : path === "/destination"
          ? "destination"
          : path === "/crew"
          ? "crew"
          : path === "/technology"
          ? "technology"
          : null
      }`}
    >
      <header className="flex items-center justify-between h-[10%]">
        <Logo />

        <NavBar />

        <MenuButton />
      </header>
      <section className="flex-1">
        <SpaceDataProvider>{children}</SpaceDataProvider>
      </section>
    </main>
  );
}
