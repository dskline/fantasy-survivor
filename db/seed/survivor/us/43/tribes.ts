import { Tribe } from "@/seed/survivor";

export enum Contestants {
  CASSIDY = "Cassidy Clark",
  CODY = "Cody Assenmacher",
  DWIGHT = "Dwight Moore",
  ELIE = "Elie Scott",
  GEO = "Geo Bustamante",
  JAMES = "James Jones",
  JEANINE = "Jeanine Zheng",
  JESSE = "Jesse Lopez",
  JUSTINE = "Justine Brennan",
  KARLA = "Karla Cruz Godoy",
  LINDSAY = "Lindsay Carmine",
  MIKE = "Mike Gabler",
  MORRIAH = "Morriah Young",
  NNEKA = "Nneka Ejere",
  NOELLE = "Noelle Lambert",
  OWEN = "Owen Knight",
  RYAN = "Ryan Medrano",
  SAMI = "Sami Layadi",
}

export const tribes: { [key in 'Coco' | 'Vesi' | 'Baka']: Tribe } = {
  Coco: {
    name: "Coco",
    color: "blue",
    contestants: [
      Contestants.CASSIDY,
      Contestants.GEO,
      Contestants.JAMES,
      Contestants.KARLA,
      Contestants.LINDSAY,
      Contestants.RYAN,
    ],
  },
  Vesi: {
    name: "Vesi",
    color: "red",
    contestants: [
      Contestants.CODY,
      Contestants.DWIGHT,
      Contestants.JESSE,
      Contestants.JUSTINE,
      Contestants.NNEKA,
      Contestants.NOELLE,
    ],
  },
  Baka: {
    name: "Baka",
    color: "yellow",
    contestants: [
      Contestants.ELIE,
      Contestants.JEANINE,
      Contestants.MIKE,
      Contestants.MORRIAH,
      Contestants.OWEN,
      Contestants.SAMI,
    ],
  },
};
