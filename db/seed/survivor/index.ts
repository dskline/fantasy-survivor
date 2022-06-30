import { TailwindConfigDefault } from 'tailwindcss/tailwind-config-default'

import { survivorUS } from './us'
import { seed } from '@/seed/survivor/survivor.seed'

export type TribeColor = Exclude<
  keyof TailwindConfigDefault["theme"]["colors"],
  "black" | "white" | "inherit" | "current" | "transparent"
>;

export type Contestant = {
  slug: string;
  firstname: string;
  surname: string;
  nickname: string;
};
export type Tribe = {
  name: string;
  color: TribeColor;
  contestants: Array<string | Contestant>;
};

export const seedSurvivor = async () => await seed([survivorUS]);
