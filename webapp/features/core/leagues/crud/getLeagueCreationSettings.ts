import { gql } from "@apollo/client";
import { GetStaticPropsResult } from "next/types";

import { client } from "@/features/core/db/graphql/client";
import { RsLeagueFormats, Rules } from "@/features/core/db/graphql/schema";
import { CreateLeagueProps } from "@/features/core/leagues/CreateLeaguePage";
import {
  GetLeagueCreationSettingsQuery,
  GetLeagueCreationSettingsQueryVariables,
} from "@/features/core/leagues/crud/__generated__/getLeagueCreationSettings.types";

export const GET_LEAGUE_CREATION_SETTINGS = gql`
  query GetLeagueCreationSettings($showSlug: String!, $seasonNumber: BigInt!) {
    rulesCollection(
      filter: { reality_series: { eq: $showSlug } }
      orderBy: { is_negative: DescNullsFirst }
    ) {
      edges {
        node {
          id
          description
          is_negative
        }
      }
    }
    reality_seriesCollection(filter: { slug: { eq: $showSlug } }) {
      edges {
        node {
          title
          rs_league_formatsCollection {
            edges {
              node {
                rulesets {
                  id
                  data
                }
                league_formats {
                  id
                  title
                  description
                }
              }
            }
          }
          seasonsCollection(filter: { order: { eq: $seasonNumber } }) {
            edges {
              node {
                id
                logo_src
                title
              }
            }
          }
        }
      }
    }
  }
`;

type GetLeagueCreationSettings = (
  showSlug: string,
  seasonNumber: number
) => Promise<GetStaticPropsResult<CreateLeagueProps>>;

export const getLeagueCreationSettings: GetLeagueCreationSettings = async (
  showSlug,
  seasonNumber
) => {
  const { data } = await client.query<
    GetLeagueCreationSettingsQuery,
    GetLeagueCreationSettingsQueryVariables
  >({
    query: GET_LEAGUE_CREATION_SETTINGS,
    variables: { showSlug, seasonNumber },
  });
  const show = data.reality_seriesCollection?.edges[0]?.node;
  const season = show?.seasonsCollection?.edges[0]?.node;
  const rules = data.rulesCollection?.edges.map((rule) => rule.node as Rules);
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
