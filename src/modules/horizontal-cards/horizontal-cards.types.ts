import { IconType } from "../../types";

export interface HorizontalCardsType {
  _type: "horizontal-cards";
  title: string;
  body: string;
  cards: {
    title: string;
    body: string;
    icon: IconType;
  }[];
}
