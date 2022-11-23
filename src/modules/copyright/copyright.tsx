import { Container } from "../../components/container";
import { CopyrightType } from "./copyright.types";

const Copyright: React.FC<CopyrightType> = (props) => {
  return (
    <section className="relative py-11 border-t-[1.5px] border-t-[#666666]">
      <Container>
        <div>
          <p className="text-[#A5A5A5] w-full text-center text-base">{props.text}</p>
        </div>
      </Container>
    </section>
  );
};

export default Copyright;
