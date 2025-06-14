// SpaceDataContext.tsx
import React, { createContext, useContext, useState } from "react";
import data from "../data/data.json"; // adjust path
import { useLocalStorage } from "../hooks/useLocalStorage";

type SpaceData = typeof data;

type SpaceContextType = {
  data: SpaceData;
};

const SpaceDataContext = createContext<SpaceContextType | null>(null);

export const useSpaceData = () => {
  const context = useContext(SpaceDataContext);
  if (!context)
    throw new Error("useSpaceData must be used within SpaceDataProvider");
  return context;
};

export const SpaceDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [spaceData] = useLocalStorage<SpaceData>("data", data);

  return (
    <SpaceDataContext.Provider value={{ data: spaceData }}>
      {children}
    </SpaceDataContext.Provider>
  );
};
