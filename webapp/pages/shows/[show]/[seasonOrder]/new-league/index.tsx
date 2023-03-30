import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import { RsLeagueFormats, Rules } from "@/features/core/db/graphql/schema";
import { ssrClient } from "@/features/core/db/graphql/ssrClient";
import { withUrql } from "@/features/core/db/graphql/withUrql";
import {
  CreateLeaguePage,
  CreateLeagueProps,
} from "@/features/core/leagues/CreateLeaguePage";
import { getLeagueCreationSettings } from "@/features/core/leagues/crud/getLeagueCreationSettings";
import { getUpcomingShows } from "@/features/core/shows/crud/getUpcomingShows";

type UrlParams = {
  show: string;
  seasonOrder: string;
};
type Props = CreateLeagueProps;

const NewLeaguePage = (props: Props) => (
  <>
    <Head>
      <title>{`New League - ${props.show.title}: ${props.season.title}`}</title>
    </Head>
    <CreateLeaguePage {...props} />
  </>
);
export default withUrql(NewLeaguePage);

export const getStaticProps: GetStaticProps<Props, UrlParams> = async (
  context
) => {
  if (!context.params) {
    return { notFound: true };
  }
  const seasonNumber = Number.parseInt(context.params.seasonOrder);
  const { client, ssrCache } = ssrClient();
  const { data } = await getLeagueCreationSettings(client, {
    showSlug: context.params.show,
    seasonNumber,
  });

  const show = data?.reality_seriesCollection?.edges[0]?.node;
  const season = show?.seasonsCollection?.edges[0]?.node;
  const rules = data?.rulesCollection?.edges.map((rule) => rule.node as Rules);
  const leagueFormats = show?.rs_league_formatsCollection?.edges.map(
    (format) =>
      ({
        league_formats: format.node?.league_formats,
        rulesets: format.node?.rulesets,
      } as RsLeagueFormats)
  );

  if (!show || !season || !leagueFormats || !rules) {
    return {
      redirect: { statusCode: 303, destination: "/shows" },
    };
  }
  return {
    props: {
      urqlState: ssrCache.extractData(),
      show: {
        title: show.title,
      },
      season: {
        id: season.id,
        title: season.title,
        order: seasonNumber,
        logo_src: season.logo_src,
      },
      availableRules: rules,
      availableFormats: leagueFormats,
    },
  };
};

export const getStaticPaths: GetStaticPaths<UrlParams> = async () => {
  const { client } = ssrClient();
  const { data } = await getUpcomingShows(client);
  const paths = [];
  for (const show of data?.reality_seriesCollection?.edges || []) {
    for (const season of show.node?.seasonsCollection?.edges || []) {
      if (show.node && season.node) {
        paths.push({
          params: {
            show: show.node.slug,
            seasonOrder: season.node.order,
          },
        });
      }
    }
  }
  return { paths, fallback: false };
};
