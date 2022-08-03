import { GetServerSidePropsContext } from 'next'

const NewLeaguePage = ({
  show,
  seasonOrder,
}: {
  show: string;
  seasonOrder: string;
}) => (
  <div>
    {show} {seasonOrder}
  </div>
);
export default NewLeaguePage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { show, seasonOrder } = context.query;
  return {
    props: {
      show,
      seasonOrder,
    },
  };
}
