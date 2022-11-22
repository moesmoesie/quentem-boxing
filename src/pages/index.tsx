import { Page } from "../page";
import { data } from "../data";
import { PageType } from "../types";

interface Props {
  page: PageType;
}

const Home: React.FC<Props> = (props) => {
  return <Page {...props.page} />;
};

export const getStaticProps = async () => {
  return {
    props: {
      page: data,
    },
  };
};

export default Home;
