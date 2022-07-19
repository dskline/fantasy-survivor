import React from "react";

import { GetStaticProps, NextPage } from "next";

import { RealitySeries } from "@/features/core/db/graphql/schema";
import Home from "@/features/core/Home";
import { getShows } from "@/features/core/shows/ShowList/getShows";

type Props = {
  shows?: RealitySeries[];
};
const Page: NextPage<Props> = (props) => <Home shows={props.shows} />;
export default Page;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await getShows();
  return {
    props: {
      shows: data?.reality_seriesCollection?.edges.map((edge) => edge.node),
    },
  };
};
