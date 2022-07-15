import { seedSurvivor } from "./survivor/survivor.seed";

export const seedData = async () => {
  await seedSurvivor();
};
