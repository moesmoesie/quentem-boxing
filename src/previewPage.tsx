import { filterDataToSingleItem } from "./helpers/filterDataToSingleItem";
import { Page } from "./page";
import { usePreview } from "./sanity/sanity.preview";

const PreviewPage: React.FC<{ query: string; params: any }> = (props) => {
  const data = usePreview(null, props.query, props.params);
  const page: any = filterDataToSingleItem(data, true);

  return <Page {...page} />;
};

export default PreviewPage;
