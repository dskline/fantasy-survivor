import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { UserProvider } from "@supabase/auth-helpers-react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { getLeague } from "@/features/core/leagues/crud/getLeague";
import { getLeagues } from "@/features/core/leagues/crud/getLeagues";
import {
  LeaguePage,
  LeaguePageProps,
} from "@/features/core/leagues/LeaguePage";

type UrlParams = {
  id: string;
};
const Page: NextPage<LeaguePageProps> = (props: LeaguePageProps) => (
  <UserProvider supabaseClient={supabaseClient}>
    <LeaguePage {...props} />
  </UserProvider>
);
export default Page;

export const getStaticProps: GetStaticProps<
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

  if (!season || !show || !format) {
    return { notFound: true };
  }

  return {
    props: {
      id: league.id,
      title: league.title,
      show,
      season,
      format,
      orderedRules,
    },
  };
};

export const getStaticPaths: GetStaticPaths<UrlParams> = async () => {
  const { data } = await getLeagues();
  const leagues = data.leaguesCollection?.edges?.map(({ node }) => node);
  const paths =
    leagues?.map(({ id }: { id: string }) => ({ params: { id } })) || [];
  return { paths, fallback: true };
};
