import { ContactType } from "./modules/contact/contact.types";
import { HeaderType } from "./modules/header/header.types";
import { HomeLandingType } from "./modules/home-landing/home-landing.types";
import { Info1Type } from "./modules/info-1/info-1.types";

export type ContentType = ContactType | HeaderType | HomeLandingType | Info1Type;

export interface ImageType {
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
}

export interface PageType {
  title: string;
  content?: ContentType[];
}

export type IconType = string | undefined;
