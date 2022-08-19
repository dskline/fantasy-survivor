import { GetServerSideProps, NextPage } from "next";

import { DebugProps } from "@/features/debug/DebugProps";

const Page: NextPage = (props) => <DebugProps props={props} />;
export default Page;

export const getServerSideProps: GetServerSideProps = async (ctx) => ({
  props: {
    data: ctx.params,
  },
});
