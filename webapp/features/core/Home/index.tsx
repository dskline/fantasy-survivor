import React from "react";

type Props = {
  props: any;
};
const Home = (props: Props) => (
  <>
    <div>{JSON.stringify(props)}</div>
  </>
);
export default Home;
