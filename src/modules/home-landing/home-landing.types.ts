import { ImageType } from "../../types";

export interface HomeLandingType {
  _type: "home-landing";
  title: string;
  body: string;
  background?: ImageType;
  callToAction1: {
    title: string;
    href: string;
  };
  callToAction2: {
    title: string;
    href: string;
  };
}
