import { IconType } from "./Icon.type";
import DOMPurify from "isomorphic-dompurify";

export const Icon: React.FC<IconType> = (props) => {
  let clean = DOMPurify.sanitize(props.icon ?? "", { USE_PROFILES: { svg: true } });

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: clean,
      }}
    />
  );
};
