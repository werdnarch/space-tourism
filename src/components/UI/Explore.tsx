"use client";

import React, { useState } from "react";
import Router from "next/navigation";

export default function Explore() {
  const [isHovered, setHovered] = useState<boolean>(false);

  const handleClick = () => {
    setTimeout(() => {
      Router.redirect("/destination");
    }, 150);
  };

  return (
    <section className="w-full flex-1 flex items-center justify-center ">
      <div
        className={` transition-all bg-white/20 cursor-pointer rounded-full duration-500 ${
          isHovered ? "p-10 lg:p-20" : "p-0"
        }`}
      >
        <div
          onClick={handleClick}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="aspect-square w-[200px] lg:w-[300px] bg-white cursor-pointer rounded-full flex items-center justify-center"
        >
          <p className="bellefair text-black text-3xl">EXPLORE</p>
        </div>
      </div>
    </section>
  );
}
