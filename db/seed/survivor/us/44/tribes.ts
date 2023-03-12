import { Tribe } from "@/seed/survivor";
import { Contestants } from "@/seed/survivor/us/44/contestants";

type Season44Tribes = "TIKA" | "RATU" | "SOKA";
export const tribes: Record<Season44Tribes, Tribe> = {
  TIKA: {
    name: "Tika",
    color: "violet",
    contestants: [
      Contestants.CAROLYN,
      Contestants.HELEN,
      Contestants.SARAH,
      Contestants.BRUCE,
      Contestants.CARSON,
      Contestants.YAM_YAM,
    ],
  },
  RATU: {
    name: "Ratu",
    color: "orange",
    contestants: [
      Contestants.BRANDON,
      Contestants.KANE,
      Contestants.MATTHEW,
      Contestants.JAIME,
      Contestants.LAUREN,
      Contestants.MADDY,
    ],
  },
  SOKA: {
    name: "Soka",
    color: "green",
    contestants: [
      Contestants.DANNY,
      Contestants.HEIDI,
      Contestants.CLAIRE,
      Contestants.FRANNIE,
      Contestants.MATT,
      Contestants.JOSH,
    ],
  },
};
