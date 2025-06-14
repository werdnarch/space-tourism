import { useSpaceData } from "@/src/context/SpaceDataContext";
import { Technology, TechnologyTypes } from "@/src/types";
import React from "react";

interface TechToggleProps {
  index: number;
  active: TechnologyTypes;
  name: TechnologyTypes;
  setTechnology: (value: Technology) => void;
}
export default function TechToggler({
  index,
  active,
  name,
  setTechnology,
}: TechToggleProps) {
  const { data } = useSpaceData();

  const handleClick = () => {
    if (!data) return;

    const found = data.technology.find(
      (technology: Technology) => technology?.name === name
    );
    if (found) setTechnology(found);
  };

  return (
    <div
      onClick={handleClick}
      className={`w-10 md:w-15 lg:w-20 rounded-full transition-all cursor-pointer duration-300 ease-in-out ${
        active === name ? "bg-white" : "bg-zinc-600/50 hover:bg-zinc-300"
      } aspect-square text-black flex items-center justify-center`}
    >
      <p className="bellefair">{index}</p>
    </div>
  );
}
