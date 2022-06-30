import { Tribe } from "@/seed/survivor";

export enum Contestants {
  CHANELLE = "Chanelle Howell",
  DANIEL = "Daniel Strunk",
  DREA = "Drea Wheeler",
  HAI = "Hai Giang",
  JACKSON = "Jackson Fox",
  JENNY = "Jenny Kim",
  JONATHAN = "Jonathan Young",
  LINDSAY = "Lindsay Dolashewich",
  LYDIA = "Lydia Meredith",
  MARYA = "Marya Sherron",
  MARYANNE = "Maryanne Oketch",
  MIKE = "Mike Turner",
  OMAR = "Omar Zaheer",
  ROCKSROY = "Rocksroy Bailey",
  ROMEO = "Romeo Escobar",
  SWATI = "Swati Goel",
  TORI = "Tori Meehan",
  ZACH = "Zach Wurtenberger",
}

export const tribes: Tribe[] = [
  {
    name: "Ika",
    color: "blue",
    contestants: [
      Contestants.DREA,
      Contestants.ROCKSROY,
      Contestants.ROMEO,
      Contestants.SWATI,
      Contestants.TORI,
      Contestants.ZACH,
    ],
  },
  {
    name: "Taku",
    color: "orange",
    contestants: [
      Contestants.JACKSON,
      Contestants.JONATHAN,
      Contestants.LINDSAY,
      Contestants.MARYA,
      Contestants.MARYANNE,
      Contestants.OMAR
    ],
  },
  {
    name: "Vati",
    color: "green",
    contestants: [
      Contestants.CHANELLE,
      Contestants.DANIEL,
      Contestants.JENNY,
      Contestants.HAI,
      Contestants.LYDIA,
      Contestants.MIKE
    ],
  },
];
