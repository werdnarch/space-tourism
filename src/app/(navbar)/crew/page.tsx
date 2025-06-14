"use client";
import { useSpaceData } from "@/src/context/SpaceDataContext";
import { Crew } from "@/src/types";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import CrewToggler from "@/src/components/UI/CrewToggler";

export default function page() {
  const [crewMember, setCrewMember] = useState<Crew>();
  const { data } = useSpaceData();

  useEffect(() => {
    if (!data) return;
    setCrewMember(
      data?.crew.find((crew: Crew) => crew.name === "Douglas Hurley")
    );
  }, [data]);

  if (!data) return null;
  return (
    <div className=" h-full flex flex-col gap-3 lg:flex-row-reverse max-w-[1500px] mx-auto">
      <p className=" text-2xl mx-auto barlowCondensed text-silver font-bold lg:mx-0 lg:hidden">
        <span className="text-zinc-600">02</span> MEET YOUR CREW
      </p>
      <section className="flex-1  lg:flex flex-col items-end justify-end">
        <section className="w-full aspect-square max-w-[700px] relative border-b-1 border-white/30 lg:border-b-0">
          {crewMember && (
            <Image
              src={crewMember?.images.webp}
              alt={crewMember?.name}
              fill
              className="object-contain"
            ></Image>
          )}
        </section>
      </section>
      <section className="flex-1  flex flex-col items-center lg:items-start lg:justify-center lg:gap-15 gap-6 lg:flex-col-reverse">
        <div className="flex items-center gap-3 lg:mb-auto">
          {data?.crew.map((data: Crew, index: number) => (
            <CrewToggler
              key={index}
              name={data?.name}
              crewMember={crewMember as Crew}
              setCrewMember={setCrewMember}
            />
          ))}
        </div>

        <div className="flex flex-col gap-4 text-center lg:text-left">
          <h1 className="text-zinc-600 text-2xl bellefair lg:text-4xl uppercase">
            {crewMember?.role}
          </h1>
          <h2 className="text-3xl uppercase bellefair lg:text-5xl text-white">
            {crewMember?.name}
          </h2>

          <p className="barlow text-silver lg:text-2xl">{crewMember?.bio}</p>
        </div>

        <p className="hidden lg:block text-4xl mt-12 mb-auto barlowCondensed text-silver font-bold lg:mx-0 ">
          <span className="text-zinc-600">02</span> MEET YOUR CREW
        </p>
      </section>
    </div>
  );
}
