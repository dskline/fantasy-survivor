import { tribes } from "@/seed/survivor/us/42/tribes";
import { Season } from "@/seed/survivor/survivor.seed";

export const season42: Season = {
  order: 42,
  tribes: Object.values(tribes),
};
