import { RsLeagueFormats } from "@/features/core/db/graphql/schema";
import { supabase } from "@/features/core/db/supabase";
import { InsertValues } from "@/features/core/db/supabase/types";
import { CreateLeagueFields } from "@/features/core/leagues/CreateLeaguePage";
import { createRuleset } from "@/features/core/leagues/crud/createRuleset";

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
    return { error: "Invalid league format selected" };
  }
  // if the ruleset was changed, create a new one
  if (isNewRuleset(data, selectedFormat)) {
    const { data: newRuleset } = await createRuleset({
      created_by: userId,
      data: JSON.stringify(data.ruleset),
    });
    if (!newRuleset) {
      return { error: "Could not create ruleset" };
    }
    data.ruleset.id = newRuleset[0].id;
  }
  const { data: newLeague, error } = await supabase
    .from<InsertValues<"leagues">>("leagues")
    .insert({
      created_by: userId,
      season: seasonId,
      title: data.title,
      format: data.leagueFormat,
      ruleset: data.ruleset.id,
    });
  if (error) {
    return { error: "Could not create league" };
  }
  const { data: newParticipant } = await supabase
    .from<InsertValues<"league_participants">>("league_participants")
    .insert({
      league: newLeague[0].id,
      participant: userId,
    });
  if (!newParticipant) {
    return { error: "Could not create league participant" };
  }
  return { data: newLeague[0] };
};
