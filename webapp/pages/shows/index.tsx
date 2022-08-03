import { GetStaticProps, NextPage } from "next";

import { RealitySeries } from "@/features/core/db/graphql/schema";
import { getUpcomingShows } from "@/features/core/shows/crud/getUpcomingShows";
import ShowsPage from "@/features/core/shows/ShowsPage";

type Props = {
  upcomingShows: RealitySeries[];
  showsOnBreak: RealitySeries[];
};
const Page: NextPage<Props> = ({ upcomingShows, showsOnBreak }) => (
  <ShowsPage upcomingShows={upcomingShows} showsOnBreak={showsOnBreak} />
);
export default Page;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await getUpcomingShows();

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
      upcomingShows,
      showsOnBreak,
    },
  };
};
