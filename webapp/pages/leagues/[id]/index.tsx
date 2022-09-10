import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { UserProvider } from "@supabase/auth-helpers-react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { NextAdapter } from "next-query-params";
import { QueryParamProvider } from "use-query-params";

import { ssrClient } from "@/features/core/db/graphql/ssrClient";
import { withUrql } from "@/features/core/db/graphql/withUrql";
import { getLeague } from "@/features/core/leagues/crud/getLeague";
import { getLeagues } from "@/features/core/leagues/crud/getLeagues";
import { LeaguePage } from "@/features/core/leagues/LeaguePage";
import { LeagueProps } from "@/features/core/leagues/LeaguePage/types";

type UrlParams = {
  id: string;
};
const Page: NextPage<LeagueProps> = (props: LeagueProps) => (
  <UserProvider supabaseClient={supabaseClient}>
    <QueryParamProvider adapter={NextAdapter}>
      <LeaguePage {...props} />
    </QueryParamProvider>
  </UserProvider>
);
export default withUrql(Page);

export const getStaticProps: GetStaticProps<LeagueProps, UrlParams> = async ({
  params,
}) => {
  if (!params?.id) {
    return {
      redirect: { destination: "/", permanent: false },
    };
  }
  const { client, ssrCache } = ssrClient();
  const { data } = await getLeague(client, params.id);

  const league = data?.leaguesCollection?.edges?.[0]?.node;
  if (!league) {
    return { notFound: true };
  }
  const season = league.seasons;
  const show = season?.reality_series;
  const format = league.league_formats;
  const contestants = season?.contestant_seasonsCollection?.edges?.map(
    ({ node }) => ({
      id: node.id,
      team_color: node.team_color,
      portrait_src: node.portrait_src,
      fullName: node.contestants?.firstname + " " + node.contestants?.surname,
      ...node.contestants,
    })
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
    return { notFound: true };
  }

  return {
    props: {
      urqlState: ssrCache.extractData(),
      id: league.id,
      title: league.title,
      show,
      season,
      format,
      orderedRules,
      contestants,
    },
  };
};

export const getStaticPaths: GetStaticPaths<UrlParams> = async () => {
  const { client } = ssrClient();
  const { data } = await getLeagues(client);
  const leagues = data?.leaguesCollection?.edges?.map(({ node }) => node);
  const paths =
    leagues?.map(({ id }: { id: string }) => ({ params: { id } })) || [];
  return { paths, fallback: true };
};
