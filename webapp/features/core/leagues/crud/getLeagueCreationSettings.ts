import { gql } from "urql";
import { Client } from "urql";

import {
  GetLeagueCreationSettingsQuery,
  GetLeagueCreationSettingsQueryVariables,
} from "@/features/core/leagues/crud/__generated__/getLeagueCreationSettings.types";

export const GET_LEAGUE_CREATION_SETTINGS = gql<
  GetLeagueCreationSettingsQuery,
  GetLeagueCreationSettingsQueryVariables
>`
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

export const getLeagueCreationSettings = async (
  client: Client,
  variables: GetLeagueCreationSettingsQueryVariables
) => await client.query(GET_LEAGUE_CREATION_SETTINGS, variables).toPromise();
