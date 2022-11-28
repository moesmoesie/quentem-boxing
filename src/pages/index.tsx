import { Page } from "../page";
import { data } from "../data";
import { PageType } from "../page";
import { PageZod } from "../page";
import { getClient } from "../lib/sanity/client.server";
import HomeQuery from "../lib/sanity/queries/home.query";

interface Props {
  page: PageType;
}

const Home: React.FC<Props> = (props) => {
  return <Page {...props.page} />;
};

export const getStaticProps = async () => {
  const client = getClient(false);
  const sanityPage = await client.fetch(HomeQuery);

  const page = PageZod.parse(sanityPage);

  return {
    props: {
      page,
    },
  };
};

export default Home;
