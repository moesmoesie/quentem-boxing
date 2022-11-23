import { ImageType } from "../../types";

export interface TestimonialType {
  _type: "testimonial";
  name: string;
  title: string;
  body: string;
  image: ImageType;
}
