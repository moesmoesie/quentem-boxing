import { ImageType } from "../../types";

export interface Info1Type {
  _type: "info-1";
  title: string;
  body: string;
  image: ImageType;
  list: {
    title: string;
    body: string;
    icon: ImageType;
  }[];
}
