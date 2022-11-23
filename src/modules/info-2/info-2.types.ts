import { ImageType } from "../../types";
import { IconType } from "../../types";

export interface Info2Type {
  _type: "info-2";
  title: string;
  body: string;
  image: ImageType;
  list: Info2ListItemsType[];
}

export interface Info2ListItemsType {
  title: string;
  body: string;
  icon: IconType;
}
