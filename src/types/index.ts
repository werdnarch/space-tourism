export type Destination = {
  name: string;
  images: { png: string; webp: string };
  description: string;
  distance: string;
  travel: string;
};

export type Crew = {
  name: string;
  images: { png: string; webp: string };
  role: string;
  bio: string;
};

export type Technology = {
  name: string;
  images: { portrait: string; landscape: string };
  description: string;
};

export type SpaceData = {
  destinations: Destination[];
  crew: Crew[];
  technology: Technology[];
};

export type SpaceContextType = {
  data: SpaceData | null;
  loading: boolean;
};

export type TechnologyTypes = "Launch vehicle" | "Spaceport" | "Space capsule";
