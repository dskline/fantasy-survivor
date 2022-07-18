import React from "react";

import { GetStaticProps, NextPage } from "next";

import { RealitySeries } from "@/features/core/db/graphql/schema";
import Home from "@/features/core/Home";
import { queryShows } from "@/features/core/shows/ShowList/queryShows";

type Props = {
  shows?: RealitySeries[];
};
const Page: NextPage<Props> = (props) => <Home shows={props.shows} />;
export default Page;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await queryShows();
  return {
    props: {
      shows: data?.reality_seriesCollection?.edges.map((edge) => edge.node),
    },
  };
};
