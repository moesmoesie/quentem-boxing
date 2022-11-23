import { IconType } from "../../types";

export interface FooterType {
  _type: "footer";
  title: string;
  body: string;
  links: {
    icon: IconType;
    title: string;
    href: string;
  }[];
}
