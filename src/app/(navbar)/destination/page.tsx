"use client";

import DestinationToggle from "@/src/components/UI/DestinationToggle";
import { useSpaceData } from "@/src/context/SpaceDataContext";
import { Destination } from "@/src/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function page() {
  const { data } = useSpaceData();
  const [destination, setDestination] = useState<Destination>();
  const [theme, setTheme] = useState<string>("");

  useEffect(() => {
    if (destination || !data) return;
    setDestination(
      data?.destinations.find(
        (destination: Destination) => destination.name === "Moon"
      )
    );
  }, [data]);
  useEffect(() => {
    if (!destination) return;
    if (destination?.name === "Moon") {
      setTheme("#54D8F3");
    } else if (destination?.name === "Mars") {
      setTheme("#FC684D");
    } else if (destination?.name === "Europa") {
      setTheme("#B53EFC");
    } else if (destination?.name === "Titan") {
      setTheme("#FBCD4D");
    } else {
      setTheme("");
    }
  }, [destination]);

  if (!data) return null;

  return (
    <main className="h-full flex flex-col lg:flex-row gap-8 items-center max-w-[1400px] mx-auto">
      <section className="flex flex-col gap-12 lg:flex-1">
        <p className="text-3xl text-silver lg:text-5xl font-semibold barlowCondensed">
          <span className="text-zinc-600">01</span> PICK YOUR DESTINATION
        </p>

        {/* IMAGE HOLDER */}
        <section className="w-full flex items-center justify-center">
          <div className="w-full aspect-square destinationImage rounded-full max-w-[450px] relative">
            {destination && (
              <Image
                src={destination?.images.webp}
                alt={destination?.name}
                fill
                className="object-cover destinationImage"
              ></Image>
            )}
          </div>
        </section>
      </section>

      <section className="lg:flex-1 flex flex-col items-center lg:justify-start  justify-center gap-6 lg:gap-15">
        <div className="flex items-center gap-3  lg:mr-auto">
          <DestinationToggle
            destinationName="Moon"
            activeDestination={
              destination?.name as "Moon" | "Mars" | "Europa" | "Titan"
            }
            setDestination={setDestination}
          />
          <DestinationToggle
            destinationName="Mars"
            activeDestination={
              destination?.name as "Moon" | "Mars" | "Europa" | "Titan"
            }
            setDestination={setDestination}
          />
          <DestinationToggle
            destinationName="Europa"
            activeDestination={
              destination?.name as "Moon" | "Mars" | "Europa" | "Titan"
            }
            setDestination={setDestination}
          />
          <DestinationToggle
            destinationName="Titan"
            activeDestination={
              destination?.name as "Moon" | "Mars" | "Europa" | "Titan"
            }
            setDestination={setDestination}
          />
        </div>
        <section className="flex flex-col items-center justify-center lg:items-start gap-4 border-b pb-4 border-zinc-100/20">
          <h1
            style={{ color: `${theme}` }}
            className="text-5xl bellefair lg:text-6xl uppercase"
          >
            {destination?.name}
          </h1>

          <p className="text-center text-silver text-[0.9rem] barlow lg:text-start ">
            {destination?.description}
          </p>
        </section>

        <section className="flex flex-col lg:flex-row gap-4 lg:gap-12 items-center  w-full lg:justify-start justify-center">
          <div className="text-center lg:text-left">
            <p className="barlowCondensed text-silver">AVG. DISTANCE</p>
            <p className="bellefair text-2xl lg:text-3xl uppercase">
              {destination?.distance}
            </p>
          </div>
          <div className="text-center lg:text-left">
            <p className="barlowCondensed text-silver">EST. TRAVEL TIME</p>
            <p className="bellefair text-2xl lg:text-3xl uppercase">
              {destination?.travel}
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
