import { GetLeagueQuery } from '@/features/core/leagues/crud/__generated__/getLeague.types'
import { Contestant, LeagueProps } from '@/features/core/leagues/LeaguePage/types'

export const toLeagueProps = (data: GetLeagueQuery) => {
  const league = data?.leaguesCollection?.edges?.[0]?.node;
  if (!league) {
    throw new Error('League not found');
  }
  const season = league.seasons;
  const show = season?.reality_series;
  const format = league.league_formats;
  const contestants = season?.contestant_seasonsCollection?.edges?.map(
    ({ node }) => {
      const { id, team_color, portrait_src, contestants } = node;
      if (!contestants) {
        throw new Error("Contestant not found");
      }
      return {
        id,
        team_color,
        portrait_src,
        fullName: contestants.firstname + " " + contestants.surname,
        slug: contestants.slug,
        firstname: contestants.firstname,
        surname: contestants.surname,
        nickname: contestants.nickname,
      } as Contestant;
    }
  );

  const ruleMetadata = show?.rulesCollection?.edges.map(({ node }) => node);
  const orderedRules: LeagueProps["orderedRules"] = [];
  const leagueRules = JSON.parse(league.rulesets?.data).rules;
  for (const rule of ruleMetadata || []) {
    if (leagueRules[rule.id]) {
      orderedRules.push({
        id: rule.id,
        description: rule.description,
        points: leagueRules[rule.id].points,
      });
    }
  }
  orderedRules.sort((a, b) => b.points - a.points);

  if (!season || !show || !format || !contestants) {
    throw new Error("Error: Missing data");
  }
  return {
    id: league.id,
    title: league.title,
    show,
    season,
    format,
    orderedRules,
    contestants,
  }
}
