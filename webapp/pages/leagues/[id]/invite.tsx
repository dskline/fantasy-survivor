import { GetServerSideProps, NextPage } from "next";

import Home from "@/features/core/Home";

const Page: NextPage = (props) => <Home props={props} />;
export default Page;

export const getServerSideProps: GetServerSideProps = async (ctx) => ({
  props: {
    data: ctx.params,
  },
});
