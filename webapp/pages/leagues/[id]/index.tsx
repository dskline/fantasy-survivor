import { GetServerSideProps, NextPage } from "next";
import { NextAdapter } from "next-query-params";
import Head from "next/head";
import { QueryParamProvider } from "use-query-params";

import { UserProvider } from "@/features/core/auth/UserProvider";
import { ssrClient } from "@/features/core/db/graphql/ssrClient";
import { withUrql } from "@/features/core/db/graphql/withUrql";
import { getLeague } from "@/features/core/leagues/crud/getLeague";
import { LeaguePage } from "@/features/core/leagues/LeaguePage";
import { toLeagueProps } from "@/features/core/leagues/LeaguePage/toLeagueProps";
import { LeagueProps } from "@/features/core/leagues/LeaguePage/types";
import { MetaIcons } from "@/features/utils/images/MetaIcons";

type UrlParams = {
  id: string;
};
const Page: NextPage<LeagueProps> = (props: LeagueProps) => {
  const { id, title, show, season, format } = props;
  if (!id) {
    return <></>;
  }
  const metaTitle = title || `${show.title} League`;
  const description = `This is a ${format.title} fantasy league for ${show.title} Season ${season.order}.`;
  return (
    <UserProvider>
      <QueryParamProvider adapter={NextAdapter}>
        <Head>
          <title>{metaTitle}</title>
          <meta name="apple-mobile-web-app-title" content="Fantasy Survivor" />
          <meta name="description" content={description} />

          <meta property="og:type" content="website" />
          <meta property="og:title" content={metaTitle} />
          <meta property="og:description" content={description} />
          <meta name="mobile-web-app-capable" content="yes" />
        </Head>
        <MetaIcons src={season.logo_src} />
        <LeaguePage {...props} />
      </QueryParamProvider>
    </UserProvider>
  );
};
export default withUrql(Page);

export const getServerSideProps: GetServerSideProps<
  LeagueProps,
  UrlParams
> = async ({ params }) => {
  if (!params?.id) {
    return {
      redirect: { destination: "/", permanent: false },
    };
  }
  const { client, ssrCache } = ssrClient();
  const { data } = await getLeague(client, params.id);

  const league = data?.leaguesCollection?.edges?.[0]?.node;
  if (!league) {
    return { notFound: true };
  }

  return {
    props: {
      urqlState: ssrCache.extractData(),
      ...toLeagueProps(data),
    },
  };
};
