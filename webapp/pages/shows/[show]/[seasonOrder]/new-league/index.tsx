import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { UserProvider } from "@supabase/auth-helpers-react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

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
  <UserProvider supabaseClient={supabaseClient}>
    <Head>
      <title>{`New League - ${props.show.title}: ${props.season.title}`}</title>
    </Head>
    <CreateLeaguePage {...props} />
  </UserProvider>
);
export default NewLeaguePage;

export const getStaticProps: GetStaticProps<Props, UrlParams> = async (
  context
) => {
  if (!context.params) {
    return { notFound: true };
  }
  return await getLeagueCreationSettings(
    context.params.show,
    Number.parseInt(context.params.seasonOrder)
  );
};

export const getStaticPaths: GetStaticPaths<UrlParams> = async () => {
  const { data } = await getUpcomingShows();
  const paths = [];
  for (const show of data.reality_seriesCollection?.edges || []) {
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
  return { paths, fallback: "blocking" };
};
