import { ImageType } from "../../types";

export interface ContactType {
  _type: "contact";
  title: string | null;
  email: string;
  whatsapp: string;
  phone: string;
  body: string;
  image: ImageType;
}
