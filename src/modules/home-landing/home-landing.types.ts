import { ImageType } from "../../types";

export interface HomeLandingType {
  _type: "home-landing";
  title: string;
  subtitle: string;
  body: string;
  background?: ImageType;
}
