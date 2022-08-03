import React from "react";

import Image from "@/features/components/Image";
import { RealitySeries } from "@/features/core/db/graphql/schema";

type Props = {
  shows?: RealitySeries[];
};
const Home = (props: Props) => (
  <>
    <div>{JSON.stringify(props)}</div>
  </>
);
export default Home;
