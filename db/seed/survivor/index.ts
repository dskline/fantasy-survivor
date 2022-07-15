import { TailwindConfigDefault } from 'tailwindcss/tailwind-config-default'

export type TribeColor = Exclude<
  keyof TailwindConfigDefault["theme"]["colors"],
  "black" | "white" | "inherit" | "current" | "transparent"
>;

export type Tribe = {
  name: string;
  color: TribeColor;
  contestants: Array<string>;
};
