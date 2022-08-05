import { dbClient, getAdminId } from "@/seed/dbClient";
import { Rule, rules } from "@/seed/survivor/rules";
import { survivorUS } from "@/seed/survivor/us";

const FORMAT_ID = "RANK";

export const createRankRuleset = async () => {
  const supabase = await dbClient();
  const formats = await supabase
    .from("league_formats")
    .select("id")
    .eq("id", FORMAT_ID);

  if (!formats.data?.length) {
    await supabase.from("league_formats").upsert({
      id: FORMAT_ID,
      title: "Rank Format",
      description:
        "Each participant privately chooses their favorite contestants in a ranked order. Contestants are then awarded higher points in proportion to how highly they are ranked in each participant's pool.",
    });
    const { data } = await supabase.from("rulesets").upsert({
      created_by: getAdminId(),
      data: {
        rules: Object.keys(rules).map((r) => {
          const rule = rules[r as keyof typeof rules] as Rule;
          return {
            id: r,
            points: rule.isNegative ? -1 : 1,
          };
        }),
      },
    });
    await supabase.from("rs_league_formats").upsert({
      reality_series: survivorUS.slug,
      league_format: FORMAT_ID,
      default_ruleset: data![0].id,
    });
  }
};
