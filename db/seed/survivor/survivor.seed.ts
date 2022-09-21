import { Tribe } from "@/seed/survivor/index";
import { survivor42 } from "@/seed/survivor/us/42/episodes";
import { survivor43 } from "@/seed/survivor/us/43/episodes";
import { dbClient } from "@/seed/dbClient";
import { SurvivorRuleId, survivorRules } from "@/seed/survivor/rules";
import { createRankRuleset } from "@/seed/survivor/ruleset/rank/createRankRuleset";

export type Season = {
  id?: string;
  order: number;
  title?: string;
  tribes: Array<Tribe>;
};
export type RealitySeries = {
  slug: string;
  seasons: Array<Season>;
};

export const seedSurvivor = async () => {
  const supabase = await dbClient();
  await supabase.from("rules").upsert(
    Object.keys(survivorRules).map((r) => {
      const rule = survivorRules[r as SurvivorRuleId];
      return {
        id: r,
        description: rule.description,
        is_negative: rule.defaultPointsAlloted < 0,
      };
    })
  );
  await createRankRuleset();
  await survivor42();
  await survivor43();
};
