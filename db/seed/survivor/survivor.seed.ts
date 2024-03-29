import { dbClient } from "@/seed/dbClient";
import { Tribe } from "@/seed/survivor/index";
import { SurvivorRuleId, survivorRules } from "@/seed/survivor/rules";
import { createRankRuleset } from "@/seed/survivor/ruleset/rank/createRankRuleset";
import { survivor44 } from "@/seed/survivor/us/44/episodes";

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
        reality_series: "survivor_us",
        id: r,
        description: rule.description,
        is_negative: rule.defaultPointsAlloted < 0,
      };
    })
  );
  await createRankRuleset();
  await survivor44();
};
