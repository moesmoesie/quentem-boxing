import Container from "../../components/container/container";
import { HorizontalCardsType } from "./horizontal-cards.types";
import Carousel from "../../components/carousel/carousel";
import { Card } from "../../components/card";

export const HorizontalCards: React.FC<HorizontalCardsType> = (props) => {
  return (
    <Container>
      <div className="text-center mb-24  flex flex-col gap-5 items-center justify-center text-white">
        <h2 className="text-3xl  medium:text-4xl  font-sans font-bold">{props.title}</h2>
        <p className="text-gray-100 text-lg medium:text-xl max-w-xl">{props.body}</p>
      </div>

      {props.cards && (
        <Carousel gap="36px">
          {props.cards.map((card, index) => {
            return (
              <div key={index} className="min-w-[432px]">
                <Card icon={card.icon} title={card.title} body={card.body} />
              </div>
            );
          })}
        </Carousel>
      )}

      <div></div>
    </Container>
  );
};
