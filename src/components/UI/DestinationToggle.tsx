import { useSpaceData } from "@/src/context/SpaceDataContext";
import { Destination } from "@/src/types";
import React, { useState } from "react";

interface DestinationToggleProps {
  destinationName: "Moon" | "Mars" | "Europa" | "Titan";
  activeDestination: "Moon" | "Mars" | "Europa" | "Titan";
  setDestination: React.Dispatch<React.SetStateAction<Destination | undefined>>;
}

export default function DestinationToggle({
  destinationName,
  activeDestination,
  setDestination,
}: DestinationToggleProps) {
  const [hovered, setHovered] = useState<boolean>(false);
  const { data } = useSpaceData();

  const handleClick = () => {
    setDestination(
      data?.destinations.find(
        (destination: Destination) => destination.name === destinationName
      )
    );
  };
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      className="p-3 relative cursor-pointer"
    >
      <p className="font barlowCondensed uppercase text-lg lg:text-2xl">
        {destinationName}
      </p>

      <div
        className={`absolute ${
          activeDestination === destinationName
            ? "w-full"
            : `w-0 ${hovered && "w-full bg-zinc-400"}`
        } h-1 transition-all duration-300 ease-in-out bottom-0 left-1/2 -translate-x-1/2 bg-white`}
      ></div>
    </div>
  );
}
