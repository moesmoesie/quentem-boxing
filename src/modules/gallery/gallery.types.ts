import { ImageType } from "../../types";

export interface GalleryType {
  _type: "gallery";
  images: {
    row: string;
    col: string;
    image: ImageType;
  }[];
}
