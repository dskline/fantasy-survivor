import { Season } from "@/seed/survivor/survivor.seed";
import { tribes } from "@/seed/survivor/us/42/tribes";

export const season42: Season = {
  order: 42,
  tribes: Object.values(tribes),
};
