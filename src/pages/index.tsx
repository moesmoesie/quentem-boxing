import { Page } from "../page";
import { data } from "../data";
import { PageType } from "../page";
import { PageZod } from "../page";

interface Props {
  page: PageType;
}

const Home: React.FC<Props> = (props) => {
  return <Page {...props.page} />;
};

export const getStaticProps = async () => {
  const page = PageZod.parse(data);

  return {
    props: {
      page,
    },
  };
};

export default Home;
