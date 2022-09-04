import { GetStaticProps, NextPage } from "next";

import { RealitySeries } from "@/features/core/db/graphql/schema";
import { ssrClient } from "@/features/core/db/graphql/ssrClient";
import { withUrql } from "@/features/core/db/graphql/withUrql";
import { getUpcomingShows } from "@/features/core/shows/crud/getUpcomingShows";
import ShowsPage from "@/features/core/shows/ShowsPage";

type Props = {
  upcomingShows: RealitySeries[];
  showsOnBreak: RealitySeries[];
};
const Page: NextPage<Props> = ({ upcomingShows, showsOnBreak }) => (
  <ShowsPage upcomingShows={upcomingShows} showsOnBreak={showsOnBreak} />
);
export default withUrql(Page);

export const getStaticProps: GetStaticProps = async () => {
  const { client, ssrCache } = ssrClient();
  const { data } = await getUpcomingShows(client);

  // Find shows with an upcoming episode
  const upcomingShows = [];
  const showsOnBreak = [];
  if (data.reality_seriesCollection) {
    for (const show of data.reality_seriesCollection.edges) {
      const latestSeason = show.node?.seasonsCollection?.edges[0];
      if (latestSeason) {
        const latestEpisode = latestSeason.node?.episodesCollection?.edges[0];
        if (latestEpisode) {
          upcomingShows.push(show.node);
        } else {
          showsOnBreak.push(show.node);
        }
      }
    }
  }

  return {
    props: {
      urqlState: ssrCache.extractData(),
      upcomingShows,
      showsOnBreak,
    },
  };
};
