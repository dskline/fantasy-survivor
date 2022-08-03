import React from "react";

import Link from "next/link";

import Image from "@/features/components/Image";
import { RealitySeries } from "@/features/core/db/graphql/schema";
import { formatDate } from '@/features/utils/formatters/formatDate'

type Props = {
  upcomingShows: RealitySeries[];
  showsOnBreak: RealitySeries[];
};
const ShowsPage = ({ upcomingShows }: Props) => (
  <div className="p-20">
    <div className="grid w-screen grid-flow-row grid-cols-4 gap-x-20 gap-y-8">
      <h2 className="col-span-full">Shows coming soon</h2>
      {upcomingShows.map((show) => {
        const upcomingSeason = show.seasonsCollection?.edges[0].node;
        if (!upcomingSeason) {
          return <></>;
        }
        const startDate = new Date(
          upcomingSeason.episodesCollection?.edges[0].node?.start_time
        );
        return (
          <div key={show.slug}>
            <div className="relative">
              <div className="aspect-video w-full">
                <Image src={upcomingSeason.logo_src} layout="fill" />
              </div>
            </div>
            <h3 className="text-lg font-semibold">{show.title}</h3>
            <h3 className="text-sm">
              {upcomingSeason.title} - {formatDate(startDate)}
            </h3>
            <p className="py-4 text-sm">
              {upcomingSeason.leaguesCollection?.edges.length ||
                "No leagues yet"}
            </p>
            <Link
              href={`/shows/${show.slug}/${upcomingSeason.order}/new-league`}
            >
              Start a league
            </Link>
          </div>
        );
      })}
    </div>
  </div>
);
export default ShowsPage;
