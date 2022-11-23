import { Container } from "../../components/container";
import { BannerType } from "./banner.types";

export const Banner: React.FC<BannerType> = (props) => {
  return (
    <section className="bg-[#101010] py-28">
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-4xl text-white font-bold">{props.title}</p>
            <p className="text-4xl text-accent font-bold">{props.subtitle}</p>
          </div>
          <button className="text-xl text-white px-8 py-4 bg-primary rounded-lg">{props.callToAction}</button>
        </div>
      </Container>
    </section>
  );
};
