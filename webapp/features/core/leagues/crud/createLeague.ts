import { RsLeagueFormats } from "@/features/core/db/graphql/schema";
import { dbFunction } from "@/features/core/db/supabase";
import { CreateLeagueFields } from "@/features/core/leagues/CreateLeaguePage";

function isNewRuleset(
  data: CreateLeagueFields,
  selectedFormat: RsLeagueFormats
) {
  const defaultRuleset = JSON.parse(selectedFormat.rulesets?.data || {});

  // if one of the points for a rule has been updated, then the ruleset is new
  return Object.keys(defaultRuleset.rules).find(
    (ruleId) =>
      defaultRuleset.rules[ruleId].points !== data.ruleset.rules[ruleId]?.points
  );
}

export const createLeague = async (
  data: CreateLeagueFields,
  userId: string,
  seasonId: string,
  selectedFormat?: RsLeagueFormats
) => {
  if (!selectedFormat) {
    return { data: undefined, error: "Invalid league format selected" };
  }
  return await dbFunction("create_league", {
    season_id: seasonId,
    format_id: data.leagueFormat,
    ruleset_id: data.ruleset.id,
    rule_data: isNewRuleset(data, selectedFormat)
      ? JSON.stringify(data.ruleset.rules)
      : undefined,
    title: data.title,
    owner_id: userId,
  });
};
