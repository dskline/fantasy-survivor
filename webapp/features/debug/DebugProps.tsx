import React from "react";

type Props = {
  props: any;
};
export const DebugProps = (props: Props) => (
  <>
    <div>{JSON.stringify(props)}</div>
  </>
);
