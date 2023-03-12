import { TailwindConfigDefault } from "tailwindcss/tailwind-config-default";

import { DB } from "@/seed/dbClient";

export type TribeColor = Exclude<
  keyof TailwindConfigDefault["theme"]["colors"],
  "black" | "white" | "inherit" | "current" | "transparent"
>;

export type Contestant = { name: string } & Partial<DB["contestant_seasons"]>;

export type Tribe = {
  name: string;
  color: TribeColor;
  contestants: Contestant[];
};
