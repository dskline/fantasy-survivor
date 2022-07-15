import { Tribe } from "@/seed/survivor/index";
import { survivor42 } from "@/seed/survivor/us/42/episodes";
import { dbClient } from "@/seed/dbClient";
import { Rule, rules } from "@/seed/survivor/rules";

export type Season = {
  id?: string;
  order: number;
  title?: string;
  logo_src: string;
  tribes: Array<Tribe>;
};
export type RealitySeries = {
  slug: string;
  seasons: Array<Season>;
};

export const seedSurvivor = async () => {
  const supabase = await dbClient();
  await supabase.from("rules").upsert(
    Object.keys(rules).map((r) => {
      const rule = rules[r as keyof typeof rules] as Rule;
      return {
        id: r,
        description: rule.description,
        is_negative: rule.isNegative || null,
      };
    })
  );
  await survivor42();
};
