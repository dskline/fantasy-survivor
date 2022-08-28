import { GetServerSideProps, NextPage } from "next";

import { getLeague } from "@/features/core/leagues/crud/getLeague";
import {
  LeaguePage,
  LeaguePageProps,
} from "@/features/core/leagues/LeaguePage";

type UrlParams = {
  id: string;
};
const Page: NextPage<LeaguePageProps> = (props: LeaguePageProps) => (
  <LeaguePage {...props} />
);
export default Page;

export const getServerSideProps: GetServerSideProps<
  LeaguePageProps,
  UrlParams
> = async ({ params }) => {
  if (!params) {
    return { notFound: true };
  }
  const { data } = await getLeague(params.id);
  const league = data.leaguesCollection?.edges?.[0]?.node;
  if (!league) {
    return { notFound: true };
  }
  const season = league.seasons;
  const show = season?.reality_series;
  const format = league.league_formats;
  const participants = league.league_participantsCollection?.edges.map(
    (edge) => edge.node.profiles!
  );

  const ruleMetadata = show?.rulesCollection?.edges.map(({ node }) => node);
  const orderedRules: LeaguePageProps["orderedRules"] = [];
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

  if (!season || !show || !format || !participants) {
    return { notFound: true };
  }

  return {
    props: {
      title: league.title,
      show,
      season,
      format,
      participants,
      orderedRules,
    },
  };
};
