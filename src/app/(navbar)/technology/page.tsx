"use client";
import { useSpaceData } from "@/src/context/SpaceDataContext";
import { Technology, TechnologyTypes } from "@/src/types";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import TechToggler from "@/src/components/UI/TechToggler";

export default function page() {
  const [technology, setTechnology] = useState<Technology>();
  const { data } = useSpaceData();

  useEffect(() => {
    if (!data) return;

    setTechnology(
      data.technology.find(
        (technology: Technology) => technology.name === "Launch vehicle"
      )
    );
  }, [data]);

  if (!data) return null;
  return (
    <div className="h-full flex flex-col lg:flex-row-reverse max-w-[1500px] gap-5 mx-auto">
      <section className="flex-1 flex gap-4 items-center flex-col">
        <p className=" text-2xl mx-auto barlowCondensed text-silver font-bold lg:mx-0 lg:hidden">
          <span className="text-zinc-600">03</span> SPACE LAUNCH 101
        </p>
        <div className="relative flex-1 lg:max-w-[600px] lg:ml-auto w-full">
          {technology && (
            <Image
              src={technology?.images.landscape}
              alt={technology.name}
              fill
              className="object-contain lg:hidden"
            ></Image>
          )}
          {technology && (
            <Image
              src={technology?.images.portrait}
              alt={technology.name}
              fill
              className="object-contain hidden lg:block"
            ></Image>
          )}
        </div>
      </section>
      <section className="flex-1 flex flex-col items-center lg:flex-row gap-3 lg:gap-6 relative">
        <div className="flex items-center lg:flex-col gap-3 mb-4">
          {data.technology.map((data: Technology, index: number) => (
            <TechToggler
              key={index}
              index={index + 1}
              active={technology?.name as TechnologyTypes}
              name={data.name as TechnologyTypes}
              setTechnology={setTechnology}
            />
          ))}
        </div>
        <div className="flex flex-col gap-3 lg:gap-8 text-center lg:text-left">
          <p className="barlowCondensed text-lg text-silver lg:text-3xl uppercase">
            The terminology...
          </p>

          <h1 className="bellefair text-4xl lg:text-6xl uppercase">
            {technology?.name}
          </h1>

          <p className=" text-silver lg:text-lg  barlow">
            {technology?.description}
          </p>
        </div>

        <p className=" absolute hidden text-2xl top-[10%] left-0 lg:text-3xl mx-auto barlowCondensed text-silver font-bold lg:mx-0 lg:block">
          <span className="text-zinc-600">03</span> SPACE LAUNCH 101
        </p>
      </section>
    </div>
  );
}
