import React from "react";

import Image from "@/features/components/Image";
import { RealitySeries } from "@/features/core/db/graphql/schema";

type Props = {
  shows?: RealitySeries[]
};
const Home = (props: Props) => (
  <>
    <div>{JSON.stringify(props)}</div>
    <div>
      {props.shows?.map((show) => (
        <>{show.logo_src && <Image width={400} height={300} src={show.logo_src} />}</>
      ))}
    </div>
  </>
);
export default Home;
