import { SpacerType } from "./spacer.types";

const Info1: React.FC<SpacerType> = (props) => {
  return (
    <div
      style={{
        height: props?.height,
      }}
    />
  );
};

export default Info1;
