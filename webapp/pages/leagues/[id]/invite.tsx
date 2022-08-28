import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";

type UrlParams = {
  id: string;
};
type Props = {
  id: string;
};
const Page: NextPage<Props> = (props: Props) => {
  const url = `/leagues/${props.id}`;
  return (
    <div className="p-12">
      Invite functionality is not available yet. In the meantime, you can share
      the link below. Click the link to view your league and begin setting your
      roster.
      <div className="my-4 text-blue-600">
        <Link href={url}>{`${window.location.host}${url}`}</Link>
      </div>
    </div>
  );
};
export default Page;

export const getServerSideProps: GetServerSideProps<Props, UrlParams> = async ({
  params,
}) => {
  if (!params) {
    return { notFound: true };
  }
  return {
    props: {
      id: params.id,
    },
  };
};
