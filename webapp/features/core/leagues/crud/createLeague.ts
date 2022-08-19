import { RsLeagueFormats } from "@/features/core/db/graphql/schema";
import { supabase } from "@/features/core/db/supabase";
import { InsertValues } from "@/features/core/db/supabase/types";
import { CreateLeagueFields } from "@/features/core/leagues/CreateLeaguePage";
import { createRuleset } from "@/features/core/leagues/crud/createRuleset";

export const createLeague = async (
  data: CreateLeagueFields,
  availableFormats: Array<RsLeagueFormats>,
  userId: string,
  seasonId: string
) => {
  // if the ruleset was changed, create a new one
  const defaultRuleset = JSON.parse(
    availableFormats.find(
      (format) => format.league_formats?.id === data.leagueFormat
    )?.rulesets?.data || {}
  );
  const isNewRuleset = Object.keys(defaultRuleset.rules).find(
    (ruleId) =>
      defaultRuleset.rules[ruleId].points !== data.ruleset.rules[ruleId]?.points
  );
  if (isNewRuleset) {
    delete data.ruleset.id;
    const { data: newRulesets } = await createRuleset({
      created_by: userId,
      data: JSON.stringify(data.ruleset),
    });
    if (!newRulesets) {
      return { error: "Could not create ruleset" };
    }
    data.ruleset.id = newRulesets[0].id;
  }
  const { data: newLeague } = await supabase
    .from<InsertValues<"leagues">>("leagues")
    .insert({
      created_by: userId,
      season: seasonId,
      title: data.title,
      format: data.leagueFormat,
      ruleset: data.ruleset.id,
    });
  const createdId = newLeague?.[0].id;
  if (!createdId) {
    return { error: "Could not create league" };
  }
  return { createdId };
};
