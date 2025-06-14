import React from "react";
import { Crew } from "@/src/types";
import { useSpaceData } from "@/src/context/SpaceDataContext";

interface CrewTogglerProps {
  name: string;
  crewMember: Crew;
  setCrewMember: (value: Crew) => void;
}

export default function CrewToggler({
  name,
  crewMember,
  setCrewMember,
}: CrewTogglerProps) {
  const { data } = useSpaceData();

  const handleClick = () => {
    if (!data) return;

    const found = data.crew.find((crew: Crew) => crew?.name === name);
    if (found) setCrewMember(found);
  };

  if (!data) return null;

  return (
    <div
      onClick={handleClick}
      className={`w-4 aspect-square transition-colors duration-300 ease-in-out ${
        crewMember?.name === name ? "bg-white" : "bg-zinc-600"
      } cursor-pointer rounded-full`}
    ></div>
  );
}
